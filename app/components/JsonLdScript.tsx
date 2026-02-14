/**
 * Renders JSON-LD script tag for structured data.
 * Used to inject Article, FAQ, Breadcrumb schemas into <head>.
 */
export function JsonLdScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
