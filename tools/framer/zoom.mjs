// Zoomed side-by-side of a region from a region.mjs capture (ref above, local below).
//   node tools/framer/zoom.mjs <base e.g. reference/compare/region/home-top@390> x y w h [scale=4]
import fs from "node:fs";
import { PNG } from "pngjs";
const [base, x, y, w, h, s = 4] = process.argv.slice(2);
const [X, Y, W, H, S] = [x, y, w, h, s].map(Number);
const read = (n) => PNG.sync.read(fs.readFileSync(`${base}-${n}.png`));
function crop(img) {
  const o = new PNG({ width: W * S, height: H * S });
  for (let j = 0; j < H * S; j++)
    for (let i = 0; i < W * S; i++) {
      const si = ((Y + Math.floor(j / S)) * img.width + (X + Math.floor(i / S))) * 4;
      const di = (j * W * S + i) * 4;
      for (let k = 0; k < 4; k++) o.data[di + k] = img.data[si + k];
    }
  return o;
}
const parts = [crop(read("ref")), crop(read("local"))];
const out = new PNG({ width: W * S, height: H * S * 2 + 6 });
out.data.fill(255);
PNG.bitblt(parts[0], out, 0, 0, W * S, H * S, 0, 0);
PNG.bitblt(parts[1], out, 0, 0, W * S, H * S, 0, H * S + 6);
fs.writeFileSync(`${base}-zoom.png`, PNG.sync.write(out));
console.log(`${base}-zoom.png`);
