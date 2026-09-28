// Viewport-by-viewport screenshots while scrolling — what a visitor actually sees.
// Needed because much of the Framer home page is scroll-driven (sticky sections,
// scroll-linked reveals) and never appears in a single full-page capture.
//
//   node tools/framer/scrollshots.mjs [--origin URL] [--out DIR] [--pages /,/faq] [--widths 1440,390] [--hide canvas]
//
// Defaults: origin = live Framer site, out = reference/framer/scroll.
// Frames are taken at the same scroll offsets for any origin, so two runs can be
// diffed frame by frame with compare.mjs.
import fs from "node:fs/promises";
import path from "node:path";
import { FRAMER_ORIGIN, PAGES, VIEWPORTS, launch, pageName } from "./lib.mjs";

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? fallback : process.argv[i + 1];
}

const origin = arg("origin", FRAMER_ORIGIN).replace(/\/$/, "");
const out = arg("out", "reference/framer/scroll");
const pages = arg("pages", PAGES.join(",")).split(",");
const widths = arg("widths", "1440,1024,390").split(",").map(Number);
const STEP = 0.75; // fraction of the viewport height per frame
const SETTLE_MS = Number(arg("settle", 1200));
// --hide "selector": hide matching elements before capturing (e.g. randomised canvases).
const hide = arg("hide", null);

async function main() {
  const browser = await launch();
  try {
    for (const p of pages) {
      for (const width of widths) {
        const vp = VIEWPORTS.find((v) => v.width === width) ?? { width, height: 900 };
        const dir = path.join(out, `${pageName(p)}@${width}`);
        await fs.rm(dir, { recursive: true, force: true });
        await fs.mkdir(dir, { recursive: true });

        const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1, reducedMotion: "no-preference" });
        const page = await ctx.newPage();
        await page.goto(origin + p, { waitUntil: "load", timeout: 60000 });
        await page.waitForLoadState("networkidle").catch(() => {});
        await page.waitForTimeout(2000); // appear animations + custom snippets
        if (hide) {
          await page.addStyleTag({ content: `${hide} { visibility: hidden !important; }` });
        }

        const docH = await page.evaluate(() => document.documentElement.scrollHeight);
        const maxY = Math.max(0, docH - vp.height);
        const step = Math.round(vp.height * STEP);
        const ys = [];
        for (let y = 0; y < maxY; y += step) ys.push(y);
        ys.push(maxY);

        let i = 0;
        for (const y of ys) {
          // Scroll in small increments so scroll-linked effects see continuous progress.
          await page.evaluate(async (target) => {
            const from = window.scrollY;
            const n = 6;
            for (let k = 1; k <= n; k++) {
              window.scrollTo(0, from + ((target - from) * k) / n);
              await new Promise((r) => requestAnimationFrame(() => r()));
            }
          }, y);
          await page.waitForTimeout(SETTLE_MS);
          await page.screenshot({ path: path.join(dir, `${String(i++).padStart(3, "0")}_y${y}.png`) });
        }
        await fs.writeFile(path.join(dir, "meta.json"), JSON.stringify({ origin, page: p, viewport: vp, docHeight: docH, frames: ys }, null, 2));
        console.log(`${pageName(p)}@${width}: ${ys.length} frames, docHeight ${docH}`);
        await ctx.close();
      }
    }
  } finally {
    await browser.close();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
