import type { HeadTag } from "@/app/lib/customHead";

/** React's names for the few attributes that differ from HTML. */
const REACT_NAMES: Record<string, string> = { itemprop: "itemProp", hreflang: "hrefLang", crossorigin: "crossOrigin" };

/**
 * Custom head code from the admin (app/lib/customHead.ts). React places <meta> and
 * <link> in the document <head> wherever they are rendered; JSON-LD stays in place
 * (Google reads structured data anywhere in the page).
 */
export function CustomHeadTags({ tags }: { tags: HeadTag[] }) {
  return (
    <>
      {tags.map((t, i) => {
        if (t.tag === "jsonld") {
          return <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: t.json }} />;
        }
        const props = Object.fromEntries(Object.entries(t.attrs).map(([k, v]) => [REACT_NAMES[k] ?? k, v]));
        return t.tag === "meta" ? <meta key={i} {...props} /> : <link key={i} {...props} />;
      })}
    </>
  );
}
