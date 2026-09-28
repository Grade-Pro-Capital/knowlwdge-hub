import { FRAMER_ORIGIN, launch, settle } from "./lib.mjs";
const browser = await launch();
for (const origin of [FRAMER_ORIGIN, "http://localhost:3000"]) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  await page.goto(origin + "/", { waitUntil: "load" });
  await settle(page);
  await page.evaluate(() => window.scrollTo(0, 7425));
  await page.waitForTimeout(1500);
  const out = await page.evaluate(() => {
    const a = [...document.querySelectorAll("a, p")].find((e) => e.textContent.trim() === "Support" && e.getClientRects().length);
    const chain = [];
    for (let n = a; n && n !== document.body; n = n.parentElement) {
      const cs = getComputedStyle(n);
      chain.push(`${n.tagName} .${n.className.toString().slice(0, 50)} | pos=${cs.position} tf=${cs.transform} wc=${cs.willChange} anim=${cs.animationName} op=${cs.opacity} bf=${cs.backdropFilter} z=${cs.zIndex} left=${cs.left} top=${cs.top} w=${cs.width}`);
    }
    return chain;
  });
  console.log(origin + "\n  " + out.join("\n  "));
  await ctx.close();
}
await browser.close();
