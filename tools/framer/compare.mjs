// Pixel-diff two scrollshot runs frame by frame.
//
//   node tools/framer/compare.mjs [--ref reference/framer/scroll] [--test reference/compare/local]
//                                 [--out reference/compare/diff] [--only home@1440]
//
// For every <page>@<width> folder present in both runs it writes a diff image per
// frame (red = differing pixels) and prints the % of differing pixels. A frame
// whose sizes differ is reported as a layout mismatch.
import fs from "node:fs";
import path from "node:path";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? fallback : process.argv[i + 1];
}

const refRoot = arg("ref", "reference/framer/scroll");
const testRoot = arg("test", "reference/compare/local");
const outRoot = arg("out", "reference/compare/diff");
const only = arg("only", null);

const read = (f) => PNG.sync.read(fs.readFileSync(f));
const summary = [];

for (const set of fs.readdirSync(testRoot).filter((d) => !only || d === only)) {
  const refDir = path.join(refRoot, set);
  const testDir = path.join(testRoot, set);
  if (!fs.existsSync(refDir)) continue;
  const refMeta = JSON.parse(fs.readFileSync(path.join(refDir, "meta.json"), "utf8"));
  const testMeta = JSON.parse(fs.readFileSync(path.join(testDir, "meta.json"), "utf8"));
  const outDir = path.join(outRoot, set);
  fs.mkdirSync(outDir, { recursive: true });

  const frames = fs.readdirSync(refDir).filter((f) => f.endsWith(".png"));
  const rows = [];
  for (const f of frames) {
    const t = path.join(testDir, f);
    if (!fs.existsSync(t)) {
      rows.push({ frame: f, diff: "missing" });
      continue;
    }
    const a = read(path.join(refDir, f));
    const b = read(t);
    if (a.width !== b.width || a.height !== b.height) {
      rows.push({ frame: f, diff: `size ${a.width}x${a.height} vs ${b.width}x${b.height}` });
      continue;
    }
    const d = new PNG({ width: a.width, height: a.height });
    const n = pixelmatch(a.data, b.data, d.data, a.width, a.height, { threshold: 0.1, includeAA: false });
    const pct = (100 * n) / (a.width * a.height);
    if (n > 0) fs.writeFileSync(path.join(outDir, f), PNG.sync.write(d));
    rows.push({ frame: f, diff: `${pct.toFixed(2)}%` });
  }
  const heightNote =
    refMeta.docHeight === testMeta.docHeight ? "" : ` (page height ${refMeta.docHeight} vs ${testMeta.docHeight})`;
  console.log(`\n== ${set}${heightNote}`);
  for (const r of rows) console.log(`  ${r.frame.padEnd(22)} ${r.diff}`);
  summary.push({ set, heightNote, rows });
}

fs.mkdirSync(outRoot, { recursive: true });
fs.writeFileSync(path.join(outRoot, "summary.json"), JSON.stringify(summary, null, 2));
