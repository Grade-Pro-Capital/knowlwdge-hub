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
