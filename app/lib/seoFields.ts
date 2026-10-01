/**
 * The SEO fields tracked by the SEO version history (app/lib/seoHistory.ts), with their
 * labels. No database access, so the admin screens can use it too.
 */
export const SEO_FIELDS = [
  "metaTitle",
  "metaDescription",
  "focusKeyword",
  "secondaryKeywords",
  "canonicalUrl",
  "metaRobotsIndex",
  "metaRobotsFollow",
  "ogTitle",
  "ogDescription",
  "ogImage",
  "twitterCardTitle",
  "twitterCardDescription",
  "twitterCardImage",
  "customHead",
] as const;

export type SeoField = (typeof SEO_FIELDS)[number];
export type SeoFields = Record<SeoField, string | null>;

/** The names editors know the fields by (as in the article editor). */
export const SEO_FIELD_LABELS: Record<SeoField, string> = {
  metaTitle: "Meta title",
  metaDescription: "Meta description",
  focusKeyword: "Focus keyword",
  secondaryKeywords: "Secondary keywords",
  canonicalUrl: "Canonical URL",
  metaRobotsIndex: "Robots: index",
  metaRobotsFollow: "Robots: follow",
  ogTitle: "OG title",
  ogDescription: "OG description",
  ogImage: "OG image",
  twitterCardTitle: "Twitter title",
  twitterCardDescription: "Twitter description",
  twitterCardImage: "Twitter image",
  customHead: "Custom head code",
};

/** The SEO fields of a post, with empty values as null. */
export function pickSeo(post: Partial<Record<SeoField, string | null>>): SeoFields {
  return Object.fromEntries(SEO_FIELDS.map((f) => [f, post[f]?.trim() || null])) as SeoFields;
}

export function changedFields(before: SeoFields, after: SeoFields): SeoField[] {
  return SEO_FIELDS.filter((f) => (before[f] ?? null) !== (after[f] ?? null));
}
