// Capture the live Framer site as the reference ("answer key") for the rebuild.
//
//   node tools/framer/snapshot.mjs            # everything
//   node tools/framer/snapshot.mjs --no-shots # HTML + assets only
//
// Output (reference/framer/):
//   raw/<page>.html                 server HTML exactly as Framer sends it
//   rendered/<page>@<width>.html    DOM after hydration + custom snippets
//   screenshots/<page>@<width>.png  full-page screenshots (gitignored)
//   assets/…  + assets.json         every image/font the pages use, downloaded
import fs from "node:fs/promises";
import path from "node:path";
import { FRAMER_ORIGIN, PAGES, VIEWPORTS, launch, pageName, settle } from "./lib.mjs";

const OUT = "reference/framer";
const RENDER_WIDTHS = [1440, 1024, 390]; // one per Framer breakpoint
const withShots = !process.argv.includes("--no-shots");

const ASSET_RE =
  /https:\/\/(?:framerusercontent\.com\/(?:images|assets|third-party-assets)\/[^"'()\s,?]+|fonts\.gstatic\.com\/s\/[^"'()\s,?]+)/g;

async function ensureDir(d) {
  await fs.mkdir(d, { recursive: true });
}

function localAssetPath(url) {
  const u = new URL(url);
  if (u.hostname === "fonts.gstatic.com") return path.posix.join("fonts", ...u.pathname.split("/").slice(2));
  const parts = u.pathname.split("/").filter(Boolean); // images/x.png | assets/x.woff2 | third-party-assets/…
  if (parts[0] === "images") return path.posix.join("images", parts.slice(1).join("_"));
  if (parts[0] === "assets") return path.posix.join("fonts", "framer", parts.slice(1).join("_"));
  return path.posix.join("fonts", "third-party", parts.slice(1).join("_"));
}

async function main() {
  for (const d of ["raw", "rendered", "screenshots", "assets"]) await ensureDir(path.join(OUT, d));
  const assetUrls = new Set();

  const browser = await launch();
  try {
    for (const p of PAGES) {
      const name = pageName(p);
      const url = FRAMER_ORIGIN + p;

      const res = await fetch(url);
      const raw = await res.text();
      await fs.writeFile(path.join(OUT, "raw", `${name}.html`), raw);
      for (const m of raw.matchAll(ASSET_RE)) assetUrls.add(m[0]);
      console.log(`raw       ${name} (${raw.length} bytes)`);

      for (const vp of VIEWPORTS) {
        const wantDom = RENDER_WIDTHS.includes(vp.width);
        if (!withShots && !wantDom) continue;
        const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1 });
        const page = await ctx.newPage();
        await page.goto(url, { waitUntil: "load", timeout: 60000 });
        await settle(page);
        if (wantDom) {
          const dom = await page.evaluate(() => "<!doctype html>\n" + document.documentElement.outerHTML);
          await fs.writeFile(path.join(OUT, "rendered", `${name}@${vp.width}.html`), dom);
          for (const m of dom.matchAll(ASSET_RE)) assetUrls.add(m[0]);
        }
        if (withShots) {
          await page.screenshot({
            path: path.join(OUT, "screenshots", `${name}@${vp.width}.png`),
            fullPage: true,
            animations: "disabled",
          });
        }
        console.log(`browser   ${name}@${vp.width}${wantDom ? " +dom" : ""}${withShots ? " +shot" : ""}`);
        await ctx.close();
      }
    }
  } finally {
    await browser.close();
  }

  const manifest = {};
  for (const url of [...assetUrls].sort()) {
    const rel = localAssetPath(url);
    const dest = path.join(OUT, "assets", rel);
    await ensureDir(path.dirname(dest));
    try {
      await fs.access(dest);
    } catch {
      const r = await fetch(url);
      if (!r.ok) {
        console.warn(`asset FAIL ${r.status} ${url}`);
        continue;
      }
      await fs.writeFile(dest, Buffer.from(await r.arrayBuffer()));
    }
    manifest[url] = rel;
  }
  await fs.writeFile(path.join(OUT, "assets.json"), JSON.stringify(manifest, null, 2));
  console.log(`assets    ${Object.keys(manifest).length} files`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
