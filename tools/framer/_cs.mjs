import { FRAMER_ORIGIN, launch } from "./lib.mjs";
const sel = process.argv[2];
const browser = await launch();
for (const origin of [FRAMER_ORIGIN, "http://localhost:3000"]) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(origin + "/support", { waitUntil: "load" });
  await page.waitForTimeout(2500);
  const out = await page.evaluate((sel) => {
    const el = document.querySelector(sel);
    const cs = getComputedStyle(el);
    const keys = ["font-family", "font-size", "font-weight", "font-style", "letter-spacing", "line-height", "color", "opacity", "font-feature-settings", "font-variation-settings", "-webkit-font-smoothing", "text-rendering", "will-change", "transform", "font-synthesis", "text-decoration"];
    const chain = [];
    for (let n = el; n && n !== document.body; n = n.parentElement) { const c = getComputedStyle(n); if (c.opacity !== "1" || c.willChange !== "auto" || c.transform !== "none" || c.filter !== "none") chain.push(`${n.tagName}.${String(n.className).slice(0,25)} op=${c.opacity} wc=${c.willChange} tf=${c.transform}`); }
    return keys.map((k) => `${k}: ${cs.getPropertyValue(k)}`).join("\n  ") + "\n  chain: " + chain.join(" | ");
  }, sel);
  console.log(origin + "\n  " + out);
  await ctx.close();
}
await browser.close();
