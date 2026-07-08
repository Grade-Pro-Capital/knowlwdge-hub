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

const IMG_TAG_REGEX = /<img\s+([^>]*?)\/?>/gi;

/**
 * Add loading="lazy" and decoding="async" to article-body <img> tags that lack them,
 * so off-screen images don't all download on page load. Lets posts carry many images
 * without inflating initial page weight. The hero image is a separate Next <Image> with
 * priority, so lazy-loading body images is safe for LCP.
 */
export function lazyLoadContentImages(html: string): string {
  if (!html || typeof html !== "string") return html;

  return html.replace(IMG_TAG_REGEX, (full, attrs) => {
    let newAttrs = String(attrs).trim();
    if (!/\bloading\s*=/i.test(newAttrs)) newAttrs += ' loading="lazy"';
    if (!/\bdecoding\s*=/i.test(newAttrs)) newAttrs += ' decoding="async"';
    return `<img ${newAttrs}>`;
  });
}

const TABLE_TAG_REGEX = /<table\b[\s\S]*?<\/table>/gi;

/** Strip tags/entities from a table header cell to use as a plain-text label. */
function cellText(html: string): string {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Tag every body <td> with a data-label of its column header. On mobile the CSS
 * hides the header row and turns each row into a labeled card (`Header: value`),
 * which reads far better than a horizontally scrolling wide table. Uses the first
 * row's cells as the header labels; leaves cells unlabeled if none is found.
 */
function addTableCellLabels(table: string): string {
  const firstRow = table.match(/<tr\b[\s\S]*?<\/tr>/i);
  if (!firstRow) return table;

  const labels: string[] = [];
  const cellRe = /<t[dh]\b(?:\s[^>]*)?>([\s\S]*?)<\/t[dh]>/gi;
  let m: RegExpExecArray | null;
  while ((m = cellRe.exec(firstRow[0])) !== null) labels.push(cellText(m[1]));
  if (labels.every((l) => l === "")) return table;

  // Keep the header row as-is; label the cells in every following row.
  const splitAt = table.indexOf("</tr>") + "</tr>".length;
  const head = table.slice(0, splitAt);
  const body = table.slice(splitAt);

  const labeledBody = body.replace(/<tr\b[\s\S]*?<\/tr>/gi, (row) => {
    let i = 0;
    return row.replace(/<td\b((?:\s[^>]*)?)>/gi, (open, attrs) => {
      const label = labels[i++] ?? "";
      if (!label || /\bdata-label\s*=/i.test(open)) return open;
      return `<td${attrs} data-label="${label.replace(/"/g, "&quot;")}">`;
    });
  });

  return head + labeledBody;
}

/**
 * Wrap each article-body <table> in a scrollable container AND tag its cells with
 * column labels. On mobile the CSS sizes the table to its content: narrow tables
 * fit the screen, wide tables scroll sideways with a pinned first column (see the
 * smart-hybrid table CSS in the blog page). Runs once in the render pipeline.
 */
export function wrapContentTables(html: string): string {
  if (!html || typeof html !== "string") return html;

  return html.replace(TABLE_TAG_REGEX, (table) => {
    return `<div class="article-table-scroll">${addTableCellLabels(table)}</div>`;
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

/** Read the existing rel="..." token list off an anchor's attribute string. */
function getRelTokens(attrs: string): string[] {
  const relMatch = attrs.match(/\brel\s*=\s*["']([^"']*)["']/i);
  if (!relMatch) return [];
  return relMatch[1].split(/\s+/).filter(Boolean);
}

/** Replace (or append) a single rel="..." attribute with the given token list. */
function withRel(attrs: string, tokens: string[]): string {
  const rel = `rel="${[...new Set(tokens)].join(" ")}"`;
  const stripped = attrs.replace(/\s*\brel\s*=\s*["'][^"']*["']/gi, "").trim();
  return `${stripped ? `${stripped} ` : ""}${rel}`;
}

/**
 * Normalize links in article HTML before rendering:
 *
 * - Own-domain (grade.capital) links: forced to HTTPS and rel="noopener" only.
 *   Any author-set "nofollow" is intentionally dropped so Google passes link
 *   equity to our own site — internal links should always be followed.
 *
 * - External links: the author's follow/no-follow choice is authoritative. We
 *   preserve a "nofollow" token if the author set one in the editor, and always
 *   add rel="noopener noreferrer" for tab-nabbing / referrer-leak protection.
 *   This is what makes a no-follow link actually behave as no-follow for the
 *   reader's browser and for crawlers. See docs/seo-nofollow-links.md.
 */
export function normalizeArticleLinks(html: string): string {
  if (!html || typeof html !== "string") return html;

  return html.replace(A_TAG_REGEX, (match, attrs) => {
    const hrefMatch = attrs.match(/href\s*=\s*["']([^"']*)["']/i);
    const href = hrefMatch ? hrefMatch[1].trim() : "";
    if (!href) return match;

    if (isOwnDomain(href)) {
      try {
        const url = new URL(href, "https://blogs.grade.capital");
        const secureHref =
          url.protocol === "https:"
            ? url.toString()
            : `https://${url.hostname}${url.pathname}${url.search}${url.hash}`;

        const newAttrs = withRel(
          attrs.replace(/\bhref\s*=\s*["'][^"']*["']/gi, `href="${secureHref}"`),
          ["noopener"]
        );
        return `<a ${newAttrs.trim()}>`;
      } catch {
        return match;
      }
    }

    // External link: keep the author's nofollow choice, enforce security rel.
    const tokens = ["noopener", "noreferrer"];
    if (getRelTokens(attrs).some((t) => t.toLowerCase() === "nofollow")) {
      tokens.push("nofollow");
    }
    return `<a ${withRel(attrs, tokens).trim()}>`;
  });
}
