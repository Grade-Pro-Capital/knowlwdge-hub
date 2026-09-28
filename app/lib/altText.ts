/**
 * Alt-text rules for article images: the cover image and every image in the article
 * text need a description (Google Images + screen readers). Pure functions, used by
 * the editor, the posts API and the admin posts list alike.
 */

export type AltTextGaps = {
  /** The article has a cover image without alt text. */
  cover: boolean;
  /** Images in the article text without alt text. */
  textImages: number;
};

const IMG_TAG = /<img\b[^>]*>/gi;
const ALT_ATTR = /\balt\s*=\s*(?:"([^"]*)"|'([^']*)')/i;

/** Number of <img> tags in the HTML whose alt text is missing or blank. */
export function textImagesMissingAlt(html: string | null | undefined): number {
  let missing = 0;
  for (const [tag] of (html ?? "").matchAll(IMG_TAG)) {
    const alt = tag.match(ALT_ATTR);
    if (!(alt?.[1] ?? alt?.[2] ?? "").trim()) missing++;
  }
  return missing;
}

export function altTextGaps(post: {
  imageUrl?: string | null;
  imageAlt?: string | null;
  content?: string | null;
}): AltTextGaps {
  return {
    cover: Boolean(post.imageUrl?.trim()) && !post.imageAlt?.trim(),
    textImages: textImagesMissingAlt(post.content),
  };
}

export function hasAltTextGaps(gaps: AltTextGaps): boolean {
  return gaps.cover || gaps.textImages > 0;
}

/** Editor-facing explanation, or null when every image has alt text. */
export function describeAltTextGaps(gaps: AltTextGaps): string | null {
  const parts: string[] = [];
  if (gaps.cover) parts.push("the cover image");
  if (gaps.textImages) {
    parts.push(`${gaps.textImages} image${gaps.textImages === 1 ? "" : "s"} in the article text`);
  }
  if (!parts.length) return null;
  return `Add alt text (a short description of the image) for ${parts.join(" and ")} before saving.`;
}
