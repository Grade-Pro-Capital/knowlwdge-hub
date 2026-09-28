// One-line-per-breakpoint summary of Framer text presets from app/(site)/text-presets.css.
//   node tools/framer/preset-summary.mjs d7059j 1snn53y …   (no args = all)
import fs from "node:fs";

const css = fs.readFileSync("app/(site)/text-presets.css", "utf8");
const wanted = process.argv.slice(2);
const blocks = new Map();
let media = "base";
for (const line of css.split("\n")) {
  const mm = line.match(/^@media (.*) \{$/);
  if (mm) media = mm[1];
  if (line === "}") media = "base";
  const m = line.match(/:where\(\.preset-([\w-]+)\) \{$/);
  if (m) blocks.set(m[1] + "|" + media, {});
  const d = line.match(/^\s+([\w-]+): (.*);$/);
  if (d && blocks.size) {
    const last = [...blocks.keys()].pop();
    if (!line.includes("strong")) blocks.get(last)[d[1]] ??= d[2];
  }
}
for (const [key, d] of blocks) {
  const [hash, m] = key.split("|");
  if (wanted.length && !wanted.includes(hash)) continue;
  console.log(
    `${hash.padEnd(8)} ${m.replace("(max-width: ", "≤").replace(") and (min-width: ", " ≥").replace(")", "").padEnd(12)} ` +
      `${(d["font-family"] || "").split(",")[0]} ${d["font-weight"]} ${d["font-size"]}/${d["line-height"]} ls ${d["letter-spacing"]} ${d.color} ${d["text-transform"] !== "none" ? d["text-transform"] : ""}`,
  );
}
