/**
 * Custom <head> code: an escape hatch for tags the admin has no field for (verification
 * tags, one-off structured data). Sitewide (a SiteSetting) and per article (Post.customHead).
 *
 * Only <meta>, <link> and JSON-LD structured data are accepted, and never the tags that
 * could quietly harm the site (robots, canonical, stylesheets, redirects, scripts).
 * Tracking scripts belong in Google Tag Manager.
 */
import { prisma } from "./db";

export type HeadTag =
  | { tag: "meta"; attrs: Record<string, string> }
  | { tag: "link"; attrs: Record<string, string> }
  | { tag: "jsonld"; json: string };

export const SITEWIDE_HEAD_KEY = "head";
export const MAX_HEAD_LENGTH = 20_000;

const META_ATTRS = new Set(["name", "property", "content", "itemprop"]);
const LINK_ATTRS = new Set(["rel", "href", "hreflang", "type", "sizes", "media", "title", "as", "crossorigin", "color"]);
/** Handled by the page's own settings; setting them here could de-index or hide pages. */
const BLOCKED_META_NAMES = new Set(["robots", "googlebot", "googlebot-news", "bingbot", "viewport", "description"]);
const BLOCKED_LINK_RELS = new Set(["canonical", "stylesheet", "import", "amphtml"]);

const TOKEN = /<!--[\s\S]*?-->|<script\b([^>]*)>([\s\S]*?)<\/script\s*>|<(meta|link)\b([^>]*?)\/?>|<[^>]*>?/gi;
const ATTR = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;

function parseAttrs(source: string): Record<string, string> {
  const attrs: Record<string, string> = {};
  for (const m of source.matchAll(ATTR)) attrs[m[1].toLowerCase()] = m[2] ?? m[3] ?? m[4] ?? "";
  return attrs;
}

/**
 * Parse pasted head code into allowed tags. Anything not allowed is reported in
 * `errors` (in plain words); the code should only be saved when there are none.
 */
export function parseCustomHead(input: string): { tags: HeadTag[]; errors: string[] } {
  const tags: HeadTag[] = [];
  const errors: string[] = [];
  const text = input ?? "";
  if (text.length > MAX_HEAD_LENGTH) return { tags, errors: [`Too long (over ${MAX_HEAD_LENGTH} characters).`] };

  let last = 0;
  for (const m of text.matchAll(TOKEN)) {
    const between = text.slice(last, m.index).trim();
    if (between) errors.push(`Text outside a tag isn't allowed: "${between.slice(0, 60)}".`);
    last = (m.index ?? 0) + m[0].length;
    const [whole, scriptAttrs, scriptBody, tagName, tagAttrs] = m;

    if (whole.startsWith("<!--")) continue;
    if (scriptAttrs !== undefined) {
      const type = parseAttrs(scriptAttrs).type?.toLowerCase();
      if (type !== "application/ld+json") {
        errors.push('Scripts aren\'t allowed (only <script type="application/ld+json"> structured data). Add tracking code in Google Tag Manager.');
        continue;
      }
      try {
        const data = JSON.parse(scriptBody);
        if (typeof data !== "object" || data === null) throw new Error();
        // "<" escaped so a value can't close the script tag.
        tags.push({ tag: "jsonld", json: JSON.stringify(data).replace(/</g, "\\u003c") });
      } catch {
        errors.push("A structured-data block isn't valid JSON.");
      }
      continue;
    }
    if (!tagName) {
      errors.push(`Only <meta>, <link> and structured data are allowed, not ${whole.slice(0, 40)}.`);
      continue;
    }

    const name = tagName.toLowerCase() as "meta" | "link";
    const all = parseAttrs(tagAttrs);
    const allowed = name === "meta" ? META_ATTRS : LINK_ATTRS;
    const unknown = Object.keys(all).filter((a) => !allowed.has(a));
    if (unknown.length) {
      errors.push(`<${name}> can't have ${unknown.map((a) => `"${a}"`).join(", ")}.`);
      continue;
    }
    if (name === "meta") {
      const key = (all.name ?? all.property ?? all.itemprop ?? "").toLowerCase();
      if (!key || all.content === undefined) {
        errors.push("Each <meta> needs a name (or property) and a content.");
      } else if (BLOCKED_META_NAMES.has(key)) {
        errors.push(`<meta name="${key}"> is set by the page's own SEO settings; use those instead.`);
      } else {
        tags.push({ tag: "meta", attrs: all });
      }
    } else {
      const rels = (all.rel ?? "").toLowerCase().split(/\s+/).filter(Boolean);
      if (!rels.length || !all.href) {
        errors.push("Each <link> needs a rel and an href.");
      } else if (rels.some((r) => BLOCKED_LINK_RELS.has(r))) {
        errors.push(`<link rel="${all.rel}"> isn't allowed here (canonical is set per article; stylesheets could change the design).`);
      } else if (!/^(https?:\/\/|\/)/i.test(all.href)) {
        errors.push(`The link "${all.href.slice(0, 60)}" must start with https:// or /.`);
      } else {
        tags.push({ tag: "link", attrs: all });
      }
    }
  }
  const rest = text.slice(last).trim();
  if (rest) errors.push(`Text outside a tag isn't allowed: "${rest.slice(0, 60)}".`);
  return { tags, errors };
}

/** Parsed tags from saved code (saved code was checked on save; anything invalid is dropped). */
export function customHeadTags(code: string | null | undefined): HeadTag[] {
  return code?.trim() ? parseCustomHead(code).tags : [];
}

/** The sitewide head code as saved in the admin ("" when none). */
export async function getSitewideHeadCode(): Promise<string> {
  const setting = await prisma.siteSetting.findUnique({ where: { key: SITEWIDE_HEAD_KEY } });
  return setting?.value ?? "";
}

/** Sitewide tags for the page layouts. Never throws: without them the site still works. */
export async function getSitewideHeadTags(): Promise<HeadTag[]> {
  try {
    return customHeadTags(await getSitewideHeadCode());
  } catch (e) {
    console.error("Custom head: could not read the sitewide code", e);
    return [];
  }
}
