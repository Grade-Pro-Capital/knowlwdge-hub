/**
 * URL redirects managed in the admin (/admin/redirects) and created automatically
 * when a published article's slug changes. proxy.ts applies them before any page
 * renders, from an in-memory copy of the rules.
 */
import { prisma } from "./db";
import { normalizeSource } from "./urlPaths";

export { normalizeSource };

export type RedirectRule = { id: string; destination: string; permanent: boolean };

/** Paths that can never be redirected (admin, API, Next.js internals). */
const RESERVED = [/^\/admin(\/|$)/, /^\/api(\/|$)/, /^\/_next(\/|$)/];

/** How long a process trusts its copy of the rules before re-reading them. */
const CACHE_TTL_MS = 60_000;

/** Longest redirect chain accepted when checking for loops. */
const MAX_CHAIN = 20;

/** Destination as stored: a site path (leading slash) or an absolute http(s) URL. */
export function normalizeDestination(input: string): string {
  const value = input.trim();
  if (/^https?:\/\//i.test(value)) return value;
  return value.startsWith("/") ? value : `/${value}`;
}

export type RedirectInput = { source: string; destination: string; permanent: boolean; note?: string | null };

type ExistingRule = { id: string; source: string; destination: string };

/**
 * Validate a rule against the rest. Returns an error message, or null when valid.
 * `others` must not include the rule being edited.
 */
export function validateRedirect(input: RedirectInput, others: ExistingRule[]): string | null {
  const source = normalizeSource(input.source);
  const destination = normalizeDestination(input.destination);
  if (!source || source === "/") return "Enter the old URL path to redirect, e.g. /blogs/old-article.";
  if (RESERVED.some((re) => re.test(source))) return "Admin, API and system URLs can't be redirected.";
  if (!input.destination.trim()) return "Enter where it should go.";
  if (/^https?:\/\//i.test(destination)) {
    try {
      new URL(destination);
    } catch {
      return "The destination isn't a valid URL.";
    }
  }
  if (normalizeSource(destination) === source && !/^https?:\/\//i.test(destination)) {
    return "A URL can't redirect to itself.";
  }
  if (others.some((r) => r.source === source)) return `There is already a redirect from ${source}.`;

  // Follow the chain from the new destination through existing rules; reaching the
  // source again means visitors would bounce forever.
  const bySource = new Map(others.map((r) => [r.source, r.destination]));
  let next = destination;
  for (let hops = 0; hops < MAX_CHAIN; hops++) {
    if (/^https?:\/\//i.test(next)) return null;
    const key = normalizeSource(next);
    if (key === source) return "This would create a redirect loop (the destination leads back here).";
    const further = bySource.get(key);
    if (!further) return null;
    next = further;
  }
  return "This destination is part of a redirect chain that is too long.";
}

// ---------- Lookup (used by proxy.ts) ----------

type Cache = { rules: Map<string, RedirectRule>; loadedAt: number; version: number };

// Shared through globalThis so admin routes can invalidate the proxy's copy when
// both run in the same server process; the TTL covers any other process.
const store = globalThis as unknown as {
  __redirectCache?: Cache;
  __redirectVersion?: number;
  __redirectLoading?: Promise<Cache>;
};

/** Call after any change to the rules. */
export function invalidateRedirects(): void {
  store.__redirectVersion = (store.__redirectVersion ?? 0) + 1;
}

async function loadRules(version: number): Promise<Cache> {
  const rows = await prisma.redirect.findMany({ select: { id: true, source: true, destination: true, permanent: true } });
  const rules = new Map(rows.map((r) => [r.source, { id: r.id, destination: r.destination, permanent: r.permanent }]));
  return { rules, loadedAt: Date.now(), version };
}

/**
 * The current rules (cached). Never throws: if the rules can't be read the site keeps
 * working without redirects (and uses the last copy it had).
 */
async function currentRules(): Promise<Map<string, RedirectRule> | undefined> {
  const version = store.__redirectVersion ?? 0;
  let cache = store.__redirectCache;
  if (!cache || cache.version !== version || Date.now() - cache.loadedAt > CACHE_TTL_MS) {
    try {
      store.__redirectLoading ??= loadRules(version).finally(() => {
        store.__redirectLoading = undefined;
      });
      cache = store.__redirectCache = await store.__redirectLoading;
    } catch (e) {
      console.error("Redirects: could not load rules", e);
    }
  }
  return cache?.rules;
}

/** The redirect for a request path, if any. */
export async function findRedirect(pathname: string): Promise<RedirectRule | undefined> {
  return (await currentRules())?.get(normalizeSource(pathname));
}

/** Every rule as source → destination, for resolving links inside articles. */
export async function getRedirectMap(): Promise<Map<string, string>> {
  const rules = (await currentRules()) ?? new Map<string, RedirectRule>();
  return new Map([...rules].map(([source, rule]) => [source, rule.destination]));
}

/**
 * These URLs now redirect or have a page again: drop them from the 404 monitor.
 * Best-effort, so it never blocks saving an article or a redirect.
 */
export async function clearNotFound(...paths: string[]): Promise<void> {
  try {
    await prisma.notFoundHit.deleteMany({ where: { path: { in: paths.map(normalizeSource) } } });
  } catch (e) {
    console.error("404 monitor: could not clear", paths, e);
  }
}

/** Count a use of a rule (fire-and-forget from the proxy). */
export async function recordRedirectHit(id: string): Promise<void> {
  try {
    await prisma.redirect.update({ where: { id }, data: { hits: { increment: 1 }, lastHitAt: new Date() } });
  } catch {
    // The rule may have been deleted meanwhile; counting is best-effort.
  }
}

// ---------- Automatic redirects for articles ----------

/**
 * An article moved from `oldPath` to `newPath`: redirect the old URL permanently,
 * point existing redirects that ended at the old URL straight to the new one (no
 * chains), and drop any redirect *from* the new URL (it's a live page again).
 */
export async function recordArticleMove(oldPath: string, newPath: string): Promise<void> {
  const source = normalizeSource(oldPath);
  const target = normalizeSource(newPath);
  if (source === target) return;
  await prisma.redirect.deleteMany({ where: { source: target } });
  await prisma.redirect.updateMany({ where: { destination: oldPath }, data: { destination: newPath } });
  const existing = await prisma.redirect.findUnique({ where: { source } });
  const note = "Automatic: article URL changed";
  if (existing) {
    await prisma.redirect.update({ where: { id: existing.id }, data: { destination: newPath, permanent: true, note } });
  } else {
    await prisma.redirect.create({ data: { source, destination: newPath, permanent: true, note } });
  }
  invalidateRedirects();
  await clearNotFound(source, target);
}

/** A new/renamed article now lives at `path`: a redirect from it would hide the page. */
export async function releasePath(path: string): Promise<void> {
  const { count } = await prisma.redirect.deleteMany({ where: { source: normalizeSource(path) } });
  if (count) invalidateRedirects();
  await clearNotFound(path);
}
