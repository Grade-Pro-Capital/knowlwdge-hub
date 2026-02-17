/**
 * Extract Table of Contents (id + title) from HTML content by parsing all <h2> tags.
 * H2s with id use it; others get an id from slugified title. Links the sidebar ToC to the content.
 */
import { slugify } from "@/app/lib/seo";

export type TocItem = { id: string; title: string };

const H2_REGEX = /<h2(\s+[^>]*)?>([\s\S]*?)<\/h2>/gi;

function getTitleFromContent(raw: string): string {
  return raw.replace(/<[^>]+>/g, "").trim();
}

/**
 * Extract ToC from HTML and optionally inject ids into H2s that don't have one (so anchor links work).
 * Returns both tocItems and HTML with every <h2> having an id.
 */
export function getTocFromContent(html: string): TocItem[] {
  if (!html || typeof html !== "string") return [];

  const items: TocItem[] = [];
  const usedIds = new Set<string>();

  let match: RegExpExecArray | null;
  H2_REGEX.lastIndex = 0;
  while ((match = H2_REGEX.exec(html)) !== null) {
    const attrs = match[1] ?? "";
    const rawTitle = match[2];
    const title = getTitleFromContent(rawTitle) || "section";
    const idMatch = attrs.match(/id\s*=\s*["']([^"']+)["']/i);
    let id = idMatch ? idMatch[1].trim() : slugify(title);
    if (!id) id = "section";
    const baseId = id.replace(/-?\d+$/, "") || id;
    let n = 2;
    while (usedIds.has(id)) {
      id = `${baseId}-${n}`;
      n++;
    }
    usedIds.add(id);
    items.push({ id, title });
  }
  return items;
}

/**
 * Ensures every <h2> in the HTML has an id (for anchor links). Uses slugified title when missing.
 * Call this before rendering and use the same HTML for getTocFromContent so ToC links match.
 */
export function ensureHeadingIds(html: string): string {
  if (!html || typeof html !== "string") return html;

  const usedIds = new Set<string>();
  return html.replace(H2_REGEX, (full, attrs, content) => {
    const title = getTitleFromContent(content) || "section";
    const idMatch = (attrs ?? "").match(/id\s*=\s*["']([^"']+)["']/i);
    let id = idMatch ? idMatch[1].trim() : slugify(title);
    if (!id) id = "section";
    const baseId = id.replace(/-?\d+$/, "") || id;
    let n = 2;
    while (usedIds.has(id)) {
      id = `${baseId}-${n}`;
      n++;
    }
    usedIds.add(id);
    const cleanAttrs = (attrs ?? "").replace(/\s*id\s*=\s*["'][^"']*["']/gi, "").trim();
    return `<h2 id="${id}"${cleanAttrs ? ` ${cleanAttrs}` : ""}>${content}</h2>`;
  });
}

function isOwnDomain(href: string): boolean {
  try {
    const url = new URL(href, "https://blogs.grade.capital");
    const host = url.hostname.toLowerCase().replace(/^www\./, "");
    return host === "grade.capital" || host === "blogs.grade.capital";
  } catch {
    return false;
  }
}

const A_TAG_REGEX = /<a\s+([^>]*)>/gi;

/**
 * Normalize links in article HTML: own-domain (grade.capital) links use HTTPS and rel="noopener" only
 * (no nofollow) so Google can pass link equity to the main site. External links are unchanged.
 */
export function normalizeArticleLinks(html: string): string {
  if (!html || typeof html !== "string") return html;

  return html.replace(A_TAG_REGEX, (match, attrs) => {
    const hrefMatch = attrs.match(/href\s*=\s*["']([^"']*)["']/i);
    const href = hrefMatch ? hrefMatch[1].trim() : "";
    if (!href || !isOwnDomain(href)) return match;

    try {
      const url = new URL(href, "https://blogs.grade.capital");
      const secureHref =
        url.protocol === "https:"
          ? url.toString()
          : `https://${url.hostname}${url.pathname}${url.search}${url.hash}`;

      let newAttrs = attrs
        .replace(/\brel\s*=\s*["'][^"']*["']/gi, 'rel="noopener"')
        .replace(/\bhref\s*=\s*["'][^"']*["']/gi, `href="${secureHref}"`);

      if (!/\brel\s*=/i.test(newAttrs)) newAttrs = `${newAttrs.trim()} rel="noopener"`;
      return `<a ${newAttrs.trim()}>`;
    } catch {
      return match;
    }
  });
}
