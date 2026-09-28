// Compare one region (e.g. the header) of a page on Framer vs. the local rebuild.
//
//   node tools/framer/region.mjs --path /support --width 1440 --clip 0,0,1440,78
//        [--local http://localhost:3100] [--scroll 0] [--scroll-wait 1200] [--click selector] [--wait 2500]
//        [--dark] [--name header] [--hover selector] [--hide selector]
//
// Writes reference/compare/region/<name>@<width>{-ref,-local,-diff,-side}.png and
// prints the % of differing pixels.
import fs from "node:fs";
import path from "node:path";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";
import { FRAMER_ORIGIN, VIEWPORTS, launch } from "./lib.mjs";

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? fallback : process.argv[i + 1];
}
const p = arg("path", "/");
const width = Number(arg("width", 1440));
const local = arg("local", "http://localhost:3100").replace(/\/$/, "");
const [cx, cy, cw, ch] = arg("clip", `0,0,${width},100`).split(",").map(Number);
const scroll = Number(arg("scroll", 0));
const scrollWait = Number(arg("scroll-wait", 1200));
const click = arg("click", null);
const hover = arg("hover", null);
// --hide "selector" hides matching elements on both sites (e.g. randomised canvases).
const hide = arg("hide", null);
const wait = Number(arg("wait", 2500));
const dark = process.argv.includes("--dark");
const name = arg("name", "region");
// --selector "framerSel|localSel" screenshots that element instead of a fixed clip.
const selArg = arg("selector", null);
const selector = selArg ? { framer: selArg.split("|")[0], local: selArg.split("|")[1] ?? selArg.split("|")[0] } : null;
const hideFixed = process.argv.includes("--hide-fixed");
const vp = VIEWPORTS.find((v) => v.width === width) ?? { width, height: 900 };
const outDir = "reference/compare/region";
fs.mkdirSync(outDir, { recursive: true });

async function shot(browser, origin, file) {
  const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1, colorScheme: dark ? "dark" : "light" });
  const page = await ctx.newPage();
  await page.goto(origin + p, { waitUntil: "load", timeout: 60000 });
  await page.waitForLoadState("networkidle").catch(() => {});
  await page.waitForTimeout(wait);
  if (scroll) {
    await page.evaluate((y) => window.scrollTo(0, y), scroll);
    await page.waitForTimeout(scrollWait);
  }
  if (click) {
    // "framerSel|localSel" when the two sites need different selectors.
    const [framerClick, localClick = framerClick] = click.split("|");
    await page.locator(origin === FRAMER_ORIGIN ? framerClick : localClick).first().click();
    await page.waitForTimeout(1500);
  }
  if (hide) {
    await page.evaluate((sel) => {
      for (const el of document.querySelectorAll(sel)) el.style.visibility = "hidden";
    }, hide);
  }
  if (hover) {
    await page.locator(hover).first().hover();
    await page.waitForTimeout(1500);
  }
  if (hideFixed) {
    // Keep fixed overlays (header, WhatsApp button) out of element shots.
    await page.evaluate(() => {
      for (const el of document.querySelectorAll("body *")) {
        if (getComputedStyle(el).position === "fixed") el.style.visibility = "hidden";
      }
    });
  }
  if (selector) {
    const sel = origin === FRAMER_ORIGIN ? selector.framer : selector.local;
    const el = page.locator(sel).first();
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await el.screenshot({ path: file });
  } else {
    await page.screenshot({ path: file, clip: { x: cx, y: cy, width: cw, height: ch } });
  }
  await ctx.close();
}

const base = path.join(outDir, `${name}@${width}${dark ? "-dark" : ""}`);
const browser = await launch();
try {
  await shot(browser, FRAMER_ORIGIN, `${base}-ref.png`);
  await shot(browser, local, `${base}-local.png`);
} finally {
  await browser.close();
}

const a = PNG.sync.read(fs.readFileSync(`${base}-ref.png`));
const b = PNG.sync.read(fs.readFileSync(`${base}-local.png`));
if (a.width !== b.width || a.height !== b.height) {
  console.log(`${name}@${width}: SIZE MISMATCH ref ${a.width}x${a.height} vs local ${b.width}x${b.height}`);
  process.exit(0);
}
const diff = new PNG({ width: a.width, height: a.height });
const n = pixelmatch(a.data, b.data, diff.data, a.width, a.height, { threshold: 0.1, includeAA: false });
fs.writeFileSync(`${base}-diff.png`, PNG.sync.write(diff));

// ref | local | diff stacked vertically for quick review
const side = new PNG({ width: a.width, height: a.height * 3 + 8 });
side.data.fill(255);
PNG.bitblt(a, side, 0, 0, a.width, a.height, 0, 0);
PNG.bitblt(b, side, 0, 0, a.width, a.height, 0, a.height + 4);
PNG.bitblt(diff, side, 0, 0, a.width, a.height, 0, a.height * 2 + 8);
fs.writeFileSync(`${base}-side.png`, PNG.sync.write(side));

console.log(`${name}@${width}${dark ? " dark" : ""}: ${((100 * n) / (a.width * a.height)).toFixed(3)}% pixels differ (${n}) → ${base}-side.png`);
