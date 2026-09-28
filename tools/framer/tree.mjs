// Print the element tree of a Framer section from the saved raw HTML (JS off):
// tag, id, framer classes, data-framer-name, hidden-* variant classes and text.
//
//   node tools/framer/tree.mjs --page home --section "css:#talk-to-an-expert"
import fs from "node:fs";
import path from "node:path";
import { FRAMER_ORIGIN, launch } from "./lib.mjs";

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? fallback : process.argv[i + 1];
}
const pageArg = arg("page", "home");
const section = arg("section");

const html = fs.readFileSync(path.join("reference/framer/raw", `${pageArg}.html`), "utf8");
const browser = await launch();
const ctx = await browser.newContext({ javaScriptEnabled: false });
const page = await ctx.newPage();
await page.route(FRAMER_ORIGIN + "/__tree", (r) => r.fulfill({ body: html, contentType: "text/html" }));
await page.goto(FRAMER_ORIGIN + "/__tree", { waitUntil: "domcontentloaded" });

const out = await page.evaluate((section) => {
  const root = section.startsWith("css:")
    ? document.querySelector(section.slice(4))
    : document.querySelector(`[data-framer-name="${CSS.escape(section)}"]`);
  if (!root) return `not found: ${section}`;
  const lines = [];
  const walk = (el, depth) => {
    const cls = [...el.classList].filter((c) => c !== "framer-text" && !/^framer-[A-Za-z0-9]{5}$/.test(c)).join(".");
    const name = el.getAttribute("data-framer-name");
    const attrs = ["id", "href", "type", "name", "placeholder", "src", "alt", "sizes", "srcset", "loading", "style", "data-border", "data-framer-component-type"]
      .map((a) => (el.hasAttribute(a) ? `${a}=${JSON.stringify(el.getAttribute(a).slice(0, a === "style" ? 400 : 200))}` : ""))
      .filter(Boolean)
      .join(" ");
    const own = [...el.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join("");
    lines.push(
      `${"  ".repeat(depth)}<${el.tagName.toLowerCase()}${cls ? " ." + cls : ""}${name ? ` [${name}]` : ""}${attrs ? " " + attrs : ""}>${own.trim() ? " " + JSON.stringify(own) : ""}`,
    );
    if (el.tagName === "svg") return;
    for (const c of el.children) walk(c, depth + 1);
  };
  walk(root, 0);
  return lines.join("\n");
}, section);
console.log(out);
await browser.close();
