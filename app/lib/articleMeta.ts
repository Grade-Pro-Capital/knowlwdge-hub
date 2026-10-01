/**
 * The <title> and meta description an article page actually outputs. One place, used by
 * the article page and by the SEO reports, so the reports check what Google sees.
 */
import { normalizeMetaTitle, validateMetaDescription, validateMetaTitle } from "./seo";
import { sanitizeTitleForBrand } from "./siteConfig";

/** The SEO title if set (normalised, max 60), else the article title. */
export function articleMetaTitle(row: { metaTitle: string | null; title: string }): string {
  const raw = validateMetaTitle(row.metaTitle) ?? (normalizeMetaTitle(row.title) || row.title);
  return sanitizeTitleForBrand(raw) || raw;
}

/** The meta description if set (max 160), else the excerpt. */
export function articleMetaDescription(row: { metaDescription: string | null; excerpt: string }): string {
  return validateMetaDescription(row.metaDescription) ?? row.excerpt;
}
