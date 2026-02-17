/**
 * Single source of truth for public site branding.
 * Used for document title, Open Graph, and JSON-LD. Do not replace with "Graize" or other brands.
 */
export const SITE_TITLE = "Knowledge Hub for Crypto | Grade Capital";
export const SITE_DESCRIPTION =
  "Intelligence-driven insights for the Crypto Economy. Research, analysis, and market intelligence for institutional investors and financial decision-makers.";
export const SITE_NAME_OG = "Grade Capital Knowledge Hub";

/** Brand suffix for dynamic titles (e.g. category, tag, author). */
export const SITE_TITLE_SUFFIX = "Grade Capital";

/**
 * Sanitize a title that may come from DB or user input so "GRAIZE" / "Graize Insights" never appears.
 * Replaces with Grade Capital branding.
 */
export function sanitizeTitleForBrand(title: string | null | undefined): string {
  if (!title?.trim()) return "";
  return title
    .trim()
    .replace(/\bGRAIZE\s+Insights\b/gi, SITE_TITLE_SUFFIX)
    .replace(/\bGraize\s+Insights\b/gi, SITE_TITLE_SUFFIX)
    .replace(/\bGraize\b/gi, SITE_TITLE_SUFFIX)
    .trim();
}
