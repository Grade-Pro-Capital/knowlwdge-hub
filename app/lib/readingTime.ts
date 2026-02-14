/**
 * Auto-calculate reading time from HTML or plain text content.
 * Uses ~200 words per minute average (standard for technical content).
 * Returns formatted string e.g. "5 min read"
 */
const WORDS_PER_MINUTE = 200;

export function stripHtml(html: string): string {
  if (!html || typeof html !== "string") return "";
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function countWords(text: string): number {
  if (!text || typeof text !== "string") return 0;
  const cleaned = stripHtml(text);
  if (!cleaned) return 0;
  return cleaned.split(/\s+/).filter(Boolean).length;
}

export function calculateReadingTime(
  content: string | null | undefined,
  fallbackMinutes?: number
): string {
  const words = countWords(content ?? "");
  const minutes = words > 0 ? Math.max(1, Math.ceil(words / WORDS_PER_MINUTE)) : (fallbackMinutes ?? 5);
  return `${minutes} min read`;
}
