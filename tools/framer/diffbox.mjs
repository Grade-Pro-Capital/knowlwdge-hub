// Bounding box and count of differing pixels between two same-size screenshots.
//   node tools/framer/diffbox.mjs ref.png test.png
import fs from "node:fs";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";
const [ref, test] = process.argv.slice(2);
const a = PNG.sync.read(fs.readFileSync(ref)), b = PNG.sync.read(fs.readFileSync(test));
const d = new PNG({ width: a.width, height: a.height });
pixelmatch(a.data, b.data, d.data, a.width, a.height, { threshold: 0.1, includeAA: false });
let minX = 1e9, minY = 1e9, maxX = -1, maxY = -1, n = 0;
for (let y = 0; y < a.height; y++) for (let x = 0; x < a.width; x++) {
  const i = (y * a.width + x) * 4;
  if (d.data[i] === 255 && d.data[i + 1] === 0 && d.data[i + 2] === 0) { n++; minX = Math.min(minX, x); maxX = Math.max(maxX, x); minY = Math.min(minY, y); maxY = Math.max(maxY, y); }
}
console.log(n, `x ${minX}-${maxX} y ${minY}-${maxY}`);
