// Print document-relative boxes of matching elements on Framer and the local build.
//
//   node tools/framer/measure.mjs --path / --width 1440 --local http://localhost:3000 \
//        --selectors "#talk-to-an-expert|#talk-to-an-expert" [--selectors ...]
import { FRAMER_ORIGIN, VIEWPORTS, launch, settle } from "./lib.mjs";

const args = process.argv.slice(2);
const get = (n, d) => (args.includes(`--${n}`) ? args[args.indexOf(`--${n}`) + 1] : d);
const p = get("path", "/");
const width = Number(get("width", 1440));
const local = get("local", "http://localhost:3000").replace(/\/$/, "");
const pairs = args.flatMap((a, i) => (a === "--selectors" ? [args[i + 1].split("|")] : []));
const vp = VIEWPORTS.find((v) => v.width === width) ?? { width, height: 900 };

const browser = await launch();
const results = {};
for (const [label, origin, idx] of [["framer", FRAMER_ORIGIN, 0], ["local", local, 1]]) {
  const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  await page.goto(origin + p, { waitUntil: "load", timeout: 60000 });
  await settle(page);
  results[label] = await page.evaluate(
    (sels) =>
      sels.map((sel) =>
        [...document.querySelectorAll(sel)]
          .filter((el) => el.getClientRects().length)
          .map((el) => {
            const r = el.getBoundingClientRect();
            return `${r.x.toFixed(2)},${(r.y + scrollY).toFixed(2)} ${r.width.toFixed(2)}x${r.height.toFixed(2)}`;
          })
          .join(" | "),
      ),
    pairs.map((pr) => pr[idx] ?? pr[0]),
  );
  results[label].push(`docHeight ${await page.evaluate(() => document.documentElement.scrollHeight)}`);
  await ctx.close();
}
await browser.close();
pairs.forEach((pr, i) => {
  console.log(pr.join(" | "));
  console.log("  framer:", results.framer[i]);
  console.log("  local: ", results.local[i]);
});
console.log("framer", results.framer.at(-1), "/ local", results.local.at(-1));
