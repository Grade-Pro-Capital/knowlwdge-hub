// Cut a tall full-page screenshot into viewport-sized slices for review.
//   node tools/framer/slice.mjs <in.png> <outDir> [sliceHeight=1000] [y0] [y1]
import fs from "node:fs";
import path from "node:path";
import { PNG } from "pngjs";

const [input, outDir, sliceArg, y0Arg, y1Arg] = process.argv.slice(2);
if (!input || !outDir) {
  console.error("usage: slice.mjs <in.png> <outDir> [sliceHeight] [y0] [y1]");
  process.exit(1);
}
const src = PNG.sync.read(fs.readFileSync(input));
const sliceH = Number(sliceArg) || 1000;
const start = Number(y0Arg) || 0;
const end = Math.min(Number(y1Arg) || src.height, src.height);
fs.mkdirSync(outDir, { recursive: true });
const base = path.basename(input, ".png");
for (let y = start, i = 0; y < end; y += sliceH, i++) {
  const h = Math.min(sliceH, end - y);
  const out = new PNG({ width: src.width, height: h });
  PNG.bitblt(src, out, 0, y, src.width, h, 0, 0);
  const file = path.join(outDir, `${base}_${String(i).padStart(2, "0")}_y${y}.png`);
  fs.writeFileSync(file, PNG.sync.write(out));
  console.log(file);
}
