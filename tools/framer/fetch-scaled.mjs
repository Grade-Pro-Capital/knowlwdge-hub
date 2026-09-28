// Download every scaled image variant Framer references in srcset attributes
// (…/images/<id>.<ext>?scale-down-to=<w>) into public/site/images/<id>@<w>.<ext>,
// so rebuilt pages can use the exact same files Framer serves.
//   node tools/framer/fetch-scaled.mjs
import fs from "node:fs";
import path from "node:path";

const dirs = ["reference/framer/raw", "reference/framer/rendered"];
const urls = new Set();
for (const d of dirs) {
  for (const f of fs.readdirSync(d)) {
    const s = fs.readFileSync(path.join(d, f), "utf8");
    for (const m of s.matchAll(/https:\/\/framerusercontent\.com\/images\/([A-Za-z0-9_-]+)\.(png|jpe?g|webp|svg|gif)\?scale-down-to=(\d+)/g)) urls.add(m[0]);
  }
}
let n = 0;
for (const u of urls) {
  const m = u.match(/images\/([A-Za-z0-9_-]+)\.(\w+)\?scale-down-to=(\d+)/);
  const dest = path.join("public/site/images", `${m[1]}@${m[3]}.${m[2]}`);
  if (fs.existsSync(dest)) continue;
  const r = await fetch(u);
  if (!r.ok) { console.warn("FAIL", r.status, u); continue; }
  fs.writeFileSync(dest, Buffer.from(await r.arrayBuffer()));
  n++;
}
console.log(`${urls.size} scaled variants referenced, ${n} downloaded`);
