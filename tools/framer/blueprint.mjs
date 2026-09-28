// Print a readable "blueprint" of a Framer section: element tree with boxes,
// computed styles (non-default, layout/typography relevant) and the authored
// sizing declarations from the matching CSS rules. This is the spec the rebuilt
// components are written from.
//
//   node tools/framer/blueprint.mjs --page home --width 1440 --section Header [--live] [--depth 30]
//
// By default the raw server HTML is loaded with JavaScript disabled (all
// breakpoint variants present, appear animations at their initial state).
// --live loads the real site with JavaScript (for content injected at runtime).
// --section matches data-framer-name exactly; the first *visible* match is used.
// Pass --section "css:<selector>" to use a CSS selector instead.
import fs from "node:fs";
import path from "node:path";
import { FRAMER_ORIGIN, launch, VIEWPORTS } from "./lib.mjs";

function arg(name, fallback) {
  const i = process.argv.indexOf(`--${name}`);
  return i === -1 ? fallback : process.argv[i + 1];
}
const pageArg = arg("page", "home");
const width = Number(arg("width", 1440));
const section = arg("section", null);
const live = process.argv.includes("--live");
const maxDepth = Number(arg("depth", 40));
const nth = Number(arg("nth", 0));

const vp = VIEWPORTS.find((v) => v.width === width) ?? { width, height: 900 };

const browser = await launch();
const ctx = await browser.newContext({ viewport: vp, javaScriptEnabled: live, deviceScaleFactor: 1 });
const page = await ctx.newPage();
if (live) {
  await page.goto(FRAMER_ORIGIN + (pageArg === "home" ? "/" : `/${pageArg}`), { waitUntil: "load" });
  await page.waitForTimeout(2500);
  // --click <selector>: interact first (e.g. open the mobile menu), then capture.
  const click = arg("click", null);
  if (click) {
    await page.locator(click).first().click();
    await page.waitForTimeout(Number(arg("after", 1500)));
  }
} else {
  const html = fs.readFileSync(path.join("reference/framer/raw", `${pageArg}.html`), "utf8");
  // Serve from the real origin so relative URLs resolve.
  await page.route(FRAMER_ORIGIN + "/__blueprint", (r) => r.fulfill({ body: html, contentType: "text/html" }));
  await page.goto(FRAMER_ORIGIN + "/__blueprint", { waitUntil: "load" });
  await page.waitForTimeout(800);
}

if (!live) {
  // Emulate the custom-code contrast snippet (runs only with JS on the live site).
  // (addStyleTag waits for a load event that never fires with JS disabled.)
  await page.evaluate(() => {
    const s = document.createElement("style");
    s.textContent = '[style*="rgb(121, 123, 134)"],[style*="#797b86"],[style*="rgb(121,123,134)"]{color:#9a9cab !important;}';
    document.head.appendChild(s);
  });
}

// Mark elements whose text/background colour changes in dark mode (Framer
// tokens with a dark variant), so components can use the switching variable.
const snap = () =>
  page.evaluate(() => {
    const m = {};
    document.querySelectorAll("body *").forEach((el, i) => {
      const cs = getComputedStyle(el);
      m[i] = cs.color + "|" + cs.backgroundColor;
    });
    return m;
  });
await page.emulateMedia({ colorScheme: "light" });
const lightColors = await snap();
await page.emulateMedia({ colorScheme: "dark" });
const darkColors = await snap();
await page.emulateMedia({ colorScheme: "light" });
await page.evaluate(
  ({ lightColors, darkColors }) => {
    document.querySelectorAll("body *").forEach((el, i) => {
      if (lightColors[i] !== darkColors[i]) el.setAttribute("data-bp-dark", darkColors[i]);
    });
  },
  { lightColors, darkColors },
);

const out = await page.evaluate(
  ({ section, maxDepth, nth }) => {
    const LAYOUT = [
      "display", "position", "top", "right", "bottom", "left", "z-index",
      "flex-direction", "flex-wrap", "justify-content", "align-items", "align-self", "align-content",
      "row-gap", "column-gap", "flex-grow", "flex-shrink", "flex-basis", "order",
      "grid-template-columns", "grid-template-rows", "grid-column", "grid-row", "grid-auto-rows",
      "padding-top", "padding-right", "padding-bottom", "padding-left",
      "margin-top", "margin-right", "margin-bottom", "margin-left",
      "overflow-x", "overflow-y", "aspect-ratio",
      "border-top-width", "border-top-style", "border-top-color",
      "border-right-width", "border-bottom-width", "border-left-width",
      "border-top-left-radius", "border-top-right-radius", "border-bottom-right-radius", "border-bottom-left-radius",
      "background-color", "background-image", "background-size", "background-position", "background-repeat", "background-clip",
      "box-shadow", "opacity", "transform", "transform-origin", "filter", "backdrop-filter", "mix-blend-mode",
      "object-fit", "object-position", "mask-image", "-webkit-mask-image", "clip-path",
      "outline-style", "outline-width", "outline-color", "outline-offset", "cursor", "pointer-events", "visibility",
      "will-change", "isolation", "contain", "backface-visibility",
    ];
    const TEXT = [
      "font-family", "font-size", "font-weight", "font-style", "line-height", "letter-spacing", "color",
      "text-align", "text-transform", "text-decoration-line", "white-space", "word-break", "text-wrap",
      "-webkit-text-fill-color", "-webkit-text-stroke-width", "font-feature-settings", "font-variation-settings",
      "text-shadow", "vertical-align",
    ];
    const AUTHORED = ["width", "height", "min-width", "max-width", "min-height", "max-height", "flex", "inset", "top", "left", "right", "bottom", "aspect-ratio"];

    // Defaults from a detached element of the same tag.
    const dflt = new Map();
    const sandbox = document.createElement("div");
    sandbox.style.cssText = "position:absolute;left:-99999px;top:0";
    document.body.appendChild(sandbox);
    function defaults(tag) {
      if (!dflt.has(tag)) {
        const el = document.createElement(tag);
        sandbox.appendChild(el);
        const cs = getComputedStyle(el);
        const d = {};
        for (const p of [...LAYOUT, ...TEXT]) d[p] = cs.getPropertyValue(p);
        dflt.set(tag, d);
      }
      return dflt.get(tag);
    }

    // Collect style rules once, keyed so we can test matches.
    const rules = [];
    function walkRules(list, media) {
      for (const r of list) {
        if (r instanceof CSSStyleRule) rules.push({ r, media });
        else if (r instanceof CSSMediaRule) walkRules(r.cssRules, r.media.mediaText);
        else if (r instanceof CSSSupportsRule) walkRules(r.cssRules, media);
      }
    }
    for (const sh of document.styleSheets) {
      try { walkRules(sh.cssRules, null); } catch {}
    }
    function authored(el) {
      const got = {};
      for (const { r, media } of rules) {
        if (media && !matchMedia(media).matches) continue;
        let ok = false;
        try { ok = el.matches(r.selectorText); } catch {}
        if (!ok) continue;
        for (const p of AUTHORED) {
          const v = r.style.getPropertyValue(p);
          if (v) got[p] = v;
        }
      }
      for (const p of AUTHORED) {
        const v = el.style.getPropertyValue(p);
        if (v) got[p] = v + " (inline)";
      }
      return got;
    }

    function visible(el) {
      const cs = getComputedStyle(el);
      if (cs.display === "none") return false;
      const r = el.getBoundingClientRect();
      return r.width > 0 || r.height > 0 || el.children.length > 0;
    }

    let root;
    if (!section) root = document.querySelector("#main") || document.body;
    else if (section.startsWith("css:")) root = [...document.querySelectorAll(section.slice(4))].filter(visible)[nth];
    else root = [...document.querySelectorAll(`[data-framer-name="${CSS.escape(section)}"]`)].filter(visible)[nth];
    if (!root) return `section not found: ${section}`;

    const lines = [];
    const sx = scrollX, sy = scrollY;
    function short(v) { return v.length > 160 ? v.slice(0, 157) + "…" : v; }
    function describe(el, depth) {
      if (depth > maxDepth) return;
      if (!visible(el)) return;
      const tag = el.tagName.toLowerCase();
      const cs = getComputedStyle(el);
      const d = defaults(tag);
      const r = el.getBoundingClientRect();
      const name = el.getAttribute("data-framer-name");
      let head = `${"  ".repeat(depth)}${tag}${name ? ` "${name}"` : ""} [${Math.round(r.left + sx)},${Math.round(r.top + sy)} ${Math.round(r.width)}x${Math.round(r.height)}]`;
      const attrs = [];
      for (const a of ["href", "target", "rel", "src", "alt", "srcset", "sizes", "loading", "type", "name", "placeholder", "viewBox", "role", "aria-label", "id"]) {
        const v = el.getAttribute(a);
        if (v != null && !(a === "id" && v.startsWith("__"))) attrs.push(`${a}=${short(JSON.stringify(v))}`);
      }
      if (attrs.length) head += " " + attrs.join(" ");
      lines.push(head);
      const pad = "  ".repeat(depth) + "  | ";
      const st = [];
      const positioned = cs.position !== "static" && cs.position !== "relative";
      for (const p of LAYOUT) {
        const v = cs.getPropertyValue(p);
        if (v === d[p] || v === "") continue;
        if (p.startsWith("border") && p.endsWith("width") && v === "0px") continue;
        if (["top", "right", "bottom", "left"].includes(p) && !positioned) continue;
        if (p === "transform-origin" && cs.transform === "none") continue;
        if (p === "align-content" && cs.flexWrap === "nowrap") continue;
        if (p === "flex-shrink" && v === "0" && cs.display !== "flex" && el.parentElement && getComputedStyle(el.parentElement).display !== "flex") continue;
        st.push(`${p}:${short(v)}`);
      }
      const dark = el.getAttribute("data-bp-dark");
      if (dark) st.push(`[dark color:${dark}]`);
      const isTextish = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
      if (isTextish || ["p", "h1", "h2", "h3", "h4", "h5", "h6", "a", "span", "button", "input", "textarea", "label", "li"].includes(tag)) {
        for (const p of TEXT) {
          const v = cs.getPropertyValue(p);
          if (v !== d[p] && v !== "") st.push(`${p}:${short(v)}`);
        }
      }
      if (st.length) lines.push(pad + st.join("; "));
      const au = authored(el);
      if (Object.keys(au).length) lines.push(pad + "authored " + Object.entries(au).map(([k, v]) => `${k}:${v}`).join("; "));
      if (tag === "svg") {
        const html = el.outerHTML;
        lines.push(pad + "svg " + (html.length > 1200 ? html.slice(0, 1200) + "…(" + html.length + ")" : html));
        return;
      }
      const text = [...el.childNodes].filter((n) => n.nodeType === 3).map((n) => n.textContent).join("").trim();
      if (text) lines.push(pad + "text " + JSON.stringify(text));
      for (const c of el.children) describe(c, depth + 1);
    }
    describe(root, 0);
    return lines.join("\n");
  },
  { section, maxDepth, nth },
);
console.log(out);
await browser.close();
