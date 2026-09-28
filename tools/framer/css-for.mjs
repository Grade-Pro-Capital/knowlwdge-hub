// Print every authored CSS rule (with its @media context) that targets a Framer
// element or anything inside it — the exact source values for rebuilding a section.
//
//   node tools/framer/css-for.mjs --page home --section "India #1"      (data-framer-name)
//   node tools/framer/css-for.mjs --page home --section css:.framer-hhf53x
//   [--all]  include every matching element (all breakpoint variants), not just the first
import fs from "node:fs";
import path from "node:path";
import { FRAMER_ORIGIN, launch } from "./lib.mjs";

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? fallback : process.argv[i + 1];
}
const pageArg = arg("page", "home");
const section = arg("section");
const all = process.argv.includes("--all");

const html = fs.readFileSync(path.join("reference/framer/raw", `${pageArg}.html`), "utf8");
const browser = await launch();
const ctx = await browser.newContext({ javaScriptEnabled: false });
const page = await ctx.newPage();
await page.route(FRAMER_ORIGIN + "/__css", (r) => r.fulfill({ body: html, contentType: "text/html" }));
await page.goto(FRAMER_ORIGIN + "/__css", { waitUntil: "domcontentloaded" });

const out = await page.evaluate(
  ({ section, all }) => {
    const roots = section.startsWith("css:")
      ? [...document.querySelectorAll(section.slice(4))]
      : [...document.querySelectorAll(`[data-framer-name="${CSS.escape(section)}"]`)];
    if (!roots.length) return `not found: ${section}`;
    const chosen = all ? roots : roots.slice(0, 1);
    const classes = new Set();
    for (const r of chosen) for (const el of [r, ...r.querySelectorAll("*")]) for (const c of el.classList) if (c.startsWith("framer-")) classes.add(c);
    // Component scope classes (framer-XXXXX, 5 chars, mixed case) are too broad on their own.
    const specific = [...classes].filter((c) => c !== "framer-text" && !/^framer-[A-Za-z0-9]{5}$/.test(c));
    const lines = [];
    const test = (sel) => specific.some((c) => new RegExp(`\\.${c}(?![\\w-])`).test(sel));
    function walk(list, media) {
      for (const r of list) {
        if (r instanceof CSSStyleRule) {
          if (!test(r.selectorText)) continue;
          let text = r.cssText;
          // Text presets: keep only the resolved typography variables.
          if (/framer-styles-preset-/.test(r.selectorText)) {
            const keep = ["font-family", "font-size", "font-weight", "font-style", "letter-spacing", "line-height", "text-alignment", "text-color", "text-transform", "text-decoration", "paragraph-spacing", "font-open-type-features"];
            const vals = keep.map((k) => [k, r.style.getPropertyValue("--framer-" + k).trim()]).filter(([, v]) => v).map(([k, v]) => k + ":" + v);
            text = r.selectorText.match(/framer-styles-preset-[\w-]+/)[0] + " { " + vals.join("; ") + " }";
          }
          lines.push((media ? `@media ${media} ` : "") + text);
        } else if (r instanceof CSSMediaRule) walk(r.cssRules, r.media.mediaText);
        else if (r instanceof CSSSupportsRule) walk(r.cssRules, media);
      }
    }
    for (const sh of document.styleSheets) {
      try { walk(sh.cssRules, null); } catch (e) { lines.push("/* ERROR " + e + " */"); }
    }
    // Inline styles and data-border vars of the chosen elements.
    const inl = [];
    for (const r of chosen)
      for (const el of [r, ...r.querySelectorAll("*")]) {
        const st = el.getAttribute("style");
        if (st && el.classList.length) inl.push(`.${[...el.classList].join(".")}${el.hasAttribute("data-border") ? "[data-border]" : ""} { ${st} }`);
      }
    return `/* ${chosen.length} root(s), ${specific.length} classes */\n` + lines.join("\n") + "\n\n/* inline styles */\n" + inl.join("\n");
  },
  { section, all },
);
console.log(out);
await browser.close();
