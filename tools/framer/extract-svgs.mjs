// Extract every SVG symbol Framer references via <use href="#svg…"> into
// public/site/svg/<id>.svg (standalone files with xmlns), plus a manifest of
// which pages use which ids.
//   node tools/framer/extract-svgs.mjs
import fs from "node:fs";
import path from "node:path";

const RAW = "reference/framer/raw";
const OUT = "public/site/svg";
fs.mkdirSync(OUT, { recursive: true });
const usage = {};
for (const f of fs.readdirSync(RAW)) {
  const html = fs.readFileSync(path.join(RAW, f), "utf8");
  const ids = new Set([...html.matchAll(/<use href="#(svg[^"]+)"/g)].map((m) => m[1]));
  for (const id of ids) {
    (usage[id] ??= []).push(f.replace(".html", ""));
    const dest = path.join(OUT, `${id}.svg`);
    if (fs.existsSync(dest)) continue;
    const at = html.indexOf(`id="${id}"`);
    if (at === -1) { console.warn("missing def", id, f); continue; }
    const start = html.lastIndexOf("<svg", at);
    // walk to the matching </svg>
    let depth = 0, i = start;
    const re = /<svg\b|<\/svg>/g;
    re.lastIndex = start;
    let m;
    while ((m = re.exec(html))) {
      depth += m[0] === "</svg>" ? -1 : 1;
      if (depth === 0) { i = m.index + 6; break; }
    }
    let svg = html.slice(start, i).replace(/^<svg\b/, '<svg xmlns="http://www.w3.org/2000/svg"');
    fs.writeFileSync(dest, svg);
  }
}
fs.writeFileSync(path.join(OUT, "usage.json"), JSON.stringify(usage, null, 2));
console.log(Object.keys(usage).length, "svg symbols");
for (const [id, pages] of Object.entries(usage)) console.log(" ", id, pages.join(","));
