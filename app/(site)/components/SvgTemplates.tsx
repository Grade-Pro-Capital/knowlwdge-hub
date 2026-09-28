import fs from "node:fs";
import path from "node:path";

/**
 * Framer renders vector graphics as <svg><use href="#id"/></svg> pointing at
 * hidden templates at the end of <body>. Rendering the same templates the same
 * way keeps these graphics pixel-identical. Files live in public/site/svg/.
 */
export function SvgTemplates({ ids }: { ids: string[] }) {
  const html = ids
    .map((id) => fs.readFileSync(path.join(process.cwd(), "public/site/svg", `${id}.svg`), "utf8"))
    .join("\n");
  return (
    <div
      id="svg-templates"
      aria-hidden="true"
      style={{
        position: "absolute",
        overflow: "hidden",
        bottom: 0,
        left: 0,
        width: 0,
        height: 0,
        zIndex: 0,
        contain: "strict",
      }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

/** <svg> that renders one of the templates above, filling its wrapper. */
export function SvgUse({ id }: { id: string }) {
  return (
    <svg style={{ width: "100%", height: "100%", overflow: "visible", display: "block" }}>
      <use href={`#${id}`} />
    </svg>
  );
}
