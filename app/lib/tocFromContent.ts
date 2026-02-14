/**
 * Extract Table of Contents (id + title) from HTML content by parsing <h2 id="...">...</h2>.
 * Links the sidebar ToC to the actual content structure.
 */
export type TocItem = { id: string; title: string };

export function getTocFromContent(html: string): TocItem[] {
  if (!html || typeof html !== "string") return [];

  const items: TocItem[] = [];
  // Match <h2 id="value">title</h2> or <h2 id='value'>title</h2>; title can have inner tags (we strip)
  const regex = /<h2\s+id=["']([^"']+)["'][^>]*>([\s\S]*?)<\/h2>/gi;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(html)) !== null) {
    const id = match[1].trim();
    const rawTitle = match[2];
    const title = rawTitle.replace(/<[^>]+>/g, "").trim() || id;
    if (id) items.push({ id, title });
  }
  return items;
}
