// Extract Framer icon components (mask-image SVGs) into public/site/icons/<name>.svg.
//   node tools/framer/extract-icons.mjs
import fs from "node:fs";
import path from "node:path";

const JS = "reference/framer/js";
const OUT = "public/site/icons";
fs.mkdirSync(OUT, { recursive: true });
const seen = new Set();
for (const f of fs.readdirSync(JS)) {
  const s = fs.readFileSync(path.join(JS, f), "utf8");
  for (const m of s.matchAll(/\.framer-([A-Za-z0-9]{5}) \{ aspect-ratio: 1; background-color: var\(--21h8s6\); mask-image: url\('data:image\/svg\+xml,(<svg aria-label="([^"]+)"[\s\S]*?<\/svg>)'\)/g)) {
    const name = m[3].toLowerCase().replace(/[^a-z0-9]+/g, "-");
    if (seen.has(name)) continue;
    seen.add(name);
    fs.writeFileSync(path.join(OUT, `${name}.svg`), m[2]);
    console.log(`${name}.svg  (framer-${m[1]} in ${f.slice(0, 14)})`);
  }
}
