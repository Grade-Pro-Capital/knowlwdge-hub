/**
 * 404 monitor: counts every URL that answers "not found" so the admin can turn it
 * into a redirect (/admin/not-found). Pages call notFoundAndLog() instead of
 * notFound(); the count is written after the response is sent, so a 404 is never
 * slower, and a failed write never breaks the page.
 */
import { headers } from "next/headers";
import { notFound } from "next/navigation";
import { after } from "next/server";
import { prisma } from "./db";
import { normalizeSource } from "./redirects";
import { postPath } from "./blogPaths";

/** New URLs stop being added beyond this many rows (protects against scanner floods). */
const MAX_ROWS = 2000;
const MAX_REFERRERS = 5;
/** Rows with no hit for this long are pruned when the admin list loads. */
export const PRUNE_AFTER_DAYS = 90;

/** Admin, API and Next.js internals: never logged. */
const RESERVED = /^\/(admin|api|_next)(\/|$)/;
/** Automated vulnerability scans and browser housekeeping requests, not real links. */
const JUNK =
  /(\.(php\d?|aspx?|jsp|cgi|env|git|sql|bak|ini|log|map)(\/|$))|\/(wp-|wordpress|xmlrpc|cgi-bin|phpmyadmin|vendor\/|\.well-known\/)|^\/(favicon\.ico|apple-touch-icon)/i;
/** Search engines, SEO tools and link previews. */
const BOT = /bot|crawl|spider|slurp|bingpreview|facebookexternalhit|embedly|preview/i;

/**
 * Show the not-found page for `path` and count the hit. Use in place of notFound().
 * Link prefetches (the browser fetching a page it might visit) aren't counted.
 */
export async function notFoundAndLog(path: string): Promise<never> {
  const h = await headers();
  if (h.get("next-router-prefetch") !== "1") {
    const referrer = h.get("referer");
    const userAgent = h.get("user-agent") ?? "";
    after(() => recordNotFound(path, referrer, userAgent));
  }
  notFound();
}

/** The referring page as stored: no query string, not the missing URL itself. */
function cleanReferrer(referrer: string | null, path: string): string | null {
  if (!referrer) return null;
  try {
    const url = new URL(referrer);
    if (!/^https?:$/.test(url.protocol)) return null;
    if (normalizeSource(url.pathname) === path && isOwnHost(url.host)) return null;
    return `${url.origin}${url.pathname}`.slice(0, 300);
  } catch {
    return null;
  }
}

function isOwnHost(host: string): boolean {
  const own = (process.env.NEXT_PUBLIC_SITE_URL ?? "").replace(/^https?:\/\//, "").replace(/\/.*$/, "");
  return host === own || host.startsWith("localhost") || host.startsWith("127.0.0.1");
}

// Writes for the same URL run one after another in this process, so two quick hits can't
// both create a row (the collection has no unique index unless `prisma db push` is run).
// Shared through globalThis so every route's copy of this module uses the same queue.
const queue = globalThis as unknown as { __notFoundWrites?: Map<string, Promise<void>> };

/** Count one "not found" hit. Never throws. */
export function recordNotFound(rawPath: string, referrer: string | null, userAgent: string): Promise<void> {
  const path = normalizeSource(rawPath);
  if (!path || path === "/" || RESERVED.test(path) || JUNK.test(path)) return Promise.resolve();
  const bot = BOT.test(userAgent);
  const ref = cleanReferrer(referrer, path);

  const pending = (queue.__notFoundWrites ??= new Map());
  const write = (pending.get(path) ?? Promise.resolve()).then(() => writeHit(path, bot, ref));
  pending.set(path, write);
  return write.finally(() => {
    if (pending.get(path) === write) pending.delete(path);
  });
}

async function writeHit(path: string, bot: boolean, ref: string | null): Promise<void> {
  try {
    const existing = await prisma.notFoundHit.findUnique({ where: { path } });
    if (existing) {
      await prisma.notFoundHit.update({
        where: { id: existing.id },
        data: {
          hits: { increment: 1 },
          ...(bot && { botHits: { increment: 1 } }),
          lastSeenAt: new Date(),
          ...(ref && { referrers: [ref, ...existing.referrers.filter((r) => r !== ref)].slice(0, MAX_REFERRERS) }),
        },
      });
    } else if ((await prisma.notFoundHit.count()) < MAX_ROWS) {
      await prisma.notFoundHit.create({ data: { path, botHits: bot ? 1 : 0, referrers: ref ? [ref] : [] } });
    }
  } catch (e) {
    console.error("404 monitor: could not record", path, e);
  }
}

// ---------- Admin list ----------

type HitRow = Awaited<ReturnType<typeof prisma.notFoundHit.findMany>>[number];

/**
 * The rows for the admin list, most-hit first. Prunes rows with no hit for
 * PRUNE_AFTER_DAYS, and folds duplicate rows for one URL into one (only possible if the
 * site runs in several processes at once, since the write queue above is per process).
 */
export async function listNotFound(): Promise<HitRow[]> {
  const cutoff = new Date(Date.now() - PRUNE_AFTER_DAYS * 24 * 60 * 60 * 1000);
  await prisma.notFoundHit.deleteMany({ where: { lastSeenAt: { lt: cutoff } } });

  const rows = await prisma.notFoundHit.findMany({ orderBy: { lastSeenAt: "desc" } });
  const byPath = new Map<string, HitRow[]>();
  for (const row of rows) byPath.set(row.path, [...(byPath.get(row.path) ?? []), row]);

  const result: HitRow[] = [];
  for (const [keep, ...extra] of byPath.values()) {
    if (extra.length === 0) {
      result.push(keep);
      continue;
    }
    const group = [keep, ...extra];
    const merged = {
      hits: group.reduce((n, r) => n + r.hits, 0),
      botHits: group.reduce((n, r) => n + r.botHits, 0),
      referrers: [...new Set(group.flatMap((r) => r.referrers))].slice(0, MAX_REFERRERS),
      ignored: group.some((r) => r.ignored),
      firstSeenAt: new Date(Math.min(...group.map((r) => r.firstSeenAt.getTime()))),
    };
    await prisma.notFoundHit.update({ where: { id: keep.id }, data: merged });
    await prisma.notFoundHit.deleteMany({ where: { id: { in: extra.map((r) => r.id) } } });
    result.push({ ...keep, ...merged });
  }
  return result.sort((a, b) => b.hits - a.hits || b.lastSeenAt.getTime() - a.lastSeenAt.getTime());
}

// ---------- Redirect suggestions for the admin list ----------

const words = (slug: string) => new Set(slug.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length > 1));

/**
 * Where a missing URL should probably go: for a missing article, the published article
 * whose URL is most alike (at least half of the words used by the two URLs are shared).
 * Otherwise nothing: sending unrelated URLs to the home page counts as a soft 404 for
 * Google.
 */
export function suggestDestination(path: string, articleSlugs: string[]): string | null {
  const match = /^\/blogs\/([^/]+)$/.exec(path);
  if (!match) return null;
  const wanted = words(match[1]);
  if (wanted.size === 0) return null;
  let best: { slug: string; score: number } | null = null;
  for (const slug of articleSlugs) {
    const have = words(slug);
    const shared = [...wanted].filter((w) => have.has(w)).length;
    const score = shared / new Set([...wanted, ...have]).size;
    if (!best || score > best.score) best = { slug, score };
  }
  return best && best.score >= 0.5 ? postPath(best.slug) : null;
}
