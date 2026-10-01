// Generate the legal pages' text as React components from Framer's server HTML, so
// the wording (including Framer's non-breaking spaces and per-breakpoint variants)
// is copied exactly rather than retyped.
//
//   node tools/framer/legal-content.mjs            → writes app/(site)/<page>/<Name>Text.tsx
//   node tools/framer/legal-content.mjs --check    → only report what would be written
//
// The output is ordinary source afterwards: edit it by hand when the wording changes.
// Layout pieces (Section, Heading, Text, NotPhone, PhoneOnly, LegalLink) and the
// rich-text rules live in app/(site)/_legal/.
import fs from "node:fs";
import path from "node:path";
import { FRAMER_ORIGIN, launch } from "./lib.mjs";

const PAGES = [
  { page: "privacy-policy", name: "PrivacyPolicyText" },
  { page: "terms-of-use", name: "TermsOfUseText" },
  { page: "investor-agreement", name: "InvestorAgreementText" },
  { page: "anti-laundering", name: "AntiLaunderingText" },
];
const check = process.argv.includes("--check");

// Colours Framer sets inline on text blocks, by the token they come from.
const COLORS = {
  "var(--token-83f9f549-52a4-4d2d-8b34-9187c0f176a6, rgb(178, 179, 189))": "secondary",
  "rgb(255, 255, 255)": "white",
};
// Every text style used on these pages sets #fff as its colour.
const PRESET_COLOR = "white";
const BODY = { preset: "d7059j", color: "secondary" };

async function dump(browser, page) {
  const html = fs.readFileSync(path.join("reference/framer/raw", `${page}.html`), "utf8");
  const bp = {};
  for (const [, media, cls] of html.matchAll(/@media\s*\(([^{]*)\)\s*{\s*\.hidden-([a-z0-9]+)\s*{\s*display:\s*none\s*!important/g)) {
    if (/min-width:\s*1200px/.test(media)) bp[cls] = "desktop";
    else if (/min-width:\s*810px/.test(media)) bp[cls] = "tablet";
    else if (/max-width:\s*809\.98px/.test(media)) bp[cls] = "phone";
  }
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, javaScriptEnabled: false });
  const tab = await ctx.newPage();
  await tab.route(FRAMER_ORIGIN + "/__legal", (r) => r.fulfill({ body: html, contentType: "text/html" }));
  await tab.goto(FRAMER_ORIGIN + "/__legal", { waitUntil: "load" });
  const tree = await tab.evaluate(() => {
    function ser(el) {
      if (el.nodeType === 3) return el.data;
      if (el.nodeType !== 1) return null;
      const node = { tag: el.tagName.toLowerCase(), cls: [...el.classList], style: el.getAttribute("style") || "" };
      for (const a of ["href", "rel", "target", "id", "start", "data-framer-component-type"]) if (el.hasAttribute(a)) node[a] = el.getAttribute(a);
      if (node.tag === "div") {
        const cs = getComputedStyle(el);
        node.layout = { gap: cs.rowGap, align: cs.alignItems, height: cs.height, position: cs.position };
        node.linkColor = cs.getPropertyValue("--framer-link-text-color").trim();
      }
      node.children = [...el.childNodes].map(ser).filter((c) => c !== null && c !== "");
      return node;
    }
    return [...document.querySelector("#main > div").children].map(ser);
  });
  await ctx.close();
  return { tree, bp };
}

const text = (n) => (typeof n === "string" ? n : n.children.map(text).join(""));
const isRich = (n) => n["data-framer-component-type"] === "RichTextContainer";
const presetOf = (n) => n.cls.find((c) => c.startsWith("framer-styles-preset-"))?.slice("framer-styles-preset-".length);
const notes = [];

function parseStyle(style) {
  const out = {};
  for (const part of style.split(/;(?![^(]*\))/)) {
    const i = part.indexOf(":");
    if (i > 0) out[part.slice(0, i).trim()] = part.slice(i + 1).trim();
  }
  return out;
}

/** JSX for a text node: plain JSX text when that is unambiguous, else a string literal. */
function jsxText(s) {
  const plain = /^[^\s{}<>"'&` ][^{}<>"'&` \n]*$/.test(s) && !/\s$/.test(s) && !/ {2}/.test(s);
  if (plain) return s;
  return `{${JSON.stringify(s).replace(/ /g, "\\u00a0")}}`;
}

function linkHref(href, page) {
  if (href === "./") return "/";
  if (href.startsWith(`./${page}#`)) return href.slice(page.length + 2);
  if (href.startsWith("./")) return href.slice(1);
  return href;
}

/** Inline content (text, strong, em, a, br). */
function inline(n, ctx) {
  if (typeof n === "string") return jsxText(n);
  const kids = () => n.children.map((c) => inline(c, ctx)).join("");
  switch (n.tag) {
    case "strong":
    case "em":
      if (n.style) throw new Error(`styled <${n.tag}> on ${ctx.page}`);
      return `<${n.tag}>${kids()}</${n.tag}>`;
    case "br":
      return "<br />";
    case "a": {
      const preset = presetOf(n);
      const href = linkHref(n.href, ctx.page);
      let tone = "";
      if (preset === "1vdbmpx") tone = "";
      else if (!preset) tone = ctx.linkColor === "#09f" ? ` tone="blue"` : ` tone="text"`;
      else throw new Error(`link preset ${preset}`);
      return `<LegalLink href=${JSON.stringify(href)}${tone}>${kids()}</LegalLink>`;
    }
    default:
      throw new Error(`unexpected inline <${n.tag}> on ${ctx.page}: ${text(n).slice(0, 60)}`);
  }
}

const BLOCK = new Set(["p", "div", "ul", "ol", "li", "h5"]);

/** Block elements inside a rich-text container; `parent` is the inherited text style. */
function block(n, parent, ctx, indent) {
  const pad = "  ".repeat(indent);
  if (typeof n === "string") {
    if (n.trim()) throw new Error(`stray text in block context on ${ctx.page}: ${n.slice(0, 40)}`);
    return [];
  }
  if (!BLOCK.has(n.tag)) throw new Error(`unexpected block <${n.tag}> on ${ctx.page}`);
  const style = parseStyle(n.style);
  const own = presetOf(n);
  let color = parent.color;
  if (own) color = PRESET_COLOR;
  if (style["--framer-text-color"]) {
    color = COLORS[style["--framer-text-color"]];
    if (!color) throw new Error(`unknown colour ${style["--framer-text-color"]}`);
  }
  for (const k of Object.keys(style)) if (k !== "--framer-text-color") throw new Error(`unhandled style ${k} on ${ctx.page}`);
  const preset = own ?? parent.preset;
  const presetClass = preset !== parent.preset ? `preset-${preset}` : null;
  // A preset class resets the colour to white (as in Framer), so restate any other colour.
  const colorClass = (presetClass ? color !== PRESET_COLOR : color !== parent.color) ? color : null;
  let attr = n.start ? ` start={${Number(n.start)}}` : "";
  if (presetClass && colorClass) attr += ` className={\`${presetClass} \${s.${colorClass}}\`}`;
  else if (presetClass) attr += ` className="${presetClass}"`;
  else if (colorClass) attr += ` className={s.${colorClass}}`;
  if (colorClass) ctx.state.usesStyles = true;
  if (presetClass) ctx.state.presets.add(`${n.tag}.${preset}`);

  const hasBlocks = n.children.some((c) => typeof c !== "string" && BLOCK.has(c.tag));
  if (!hasBlocks) {
    const body = n.children.map((c) => inline(c, ctx)).join("");
    return [`${pad}<${n.tag}${attr}>${body}</${n.tag}>`];
  }
  const inner = n.children.flatMap((c) => block(c, { preset, color }, ctx, indent + 1));
  return [`${pad}<${n.tag}${attr}>`, ...inner, `${pad}</${n.tag}>`];
}

/** A rich-text container: the common heading shape, or <Text> with its blocks. */
function richText(n, ctx, indent) {
  const pad = "  ".repeat(indent);
  const only = n.children.length === 1 ? n.children[0] : null;
  if (only && only.tag === "p" && presetOf(only) === "po693k" && !only.style && only.children.every((c) => typeof c === "string")) {
    return [`${pad}<Heading>${jsxText(text(only))}</Heading>`];
  }
  ctx.linkColor = n.linkColor;
  const inner = n.children.flatMap((c) => block(c, BODY, ctx, indent + 1));
  return [`${pad}<Text>`, ...inner, `${pad}</Text>`];
}

function variantKind(n, bp) {
  const hidden = n.cls.filter((c) => c.startsWith("hidden-")).map((c) => bp[c.slice(7)]).sort().join("+");
  if (hidden === "phone") return "NotPhone";
  if (hidden === "desktop+tablet") return "PhoneOnly";
  throw new Error(`unhandled variant ${hidden}`);
}

/** Children of a section (or of the content column). */
function items(children, ctx, indent) {
  const out = [];
  for (let i = 0; i < children.length; i++) {
    const n = children[i];
    const pad = "  ".repeat(indent);
    if (typeof n === "string") continue;
    if (n.cls.includes("ssr-variant")) {
      const next = children[i + 1];
      const kind = variantKind(n, ctx.bp);
      const pair = next && typeof next !== "string" && next.cls.includes("ssr-variant") ? next : null;
      if (!pair) throw new Error("unpaired variant");
      // Compare markup and text only (a hidden variant has no computed layout).
      const markup = (x) => (typeof x === "string" ? x.replace(/ /g, " ") : [x.tag, presetOf(x), x.style, x.href, x.children.map(markup)]);
      const [a, b] = [n, pair].map((v) => JSON.stringify(v.children.map((c) => (typeof c === "string" ? c : c.children.map(markup)))));
      if (a === b) {
        notes.push(`${ctx.page}: variants differ only in non-breaking spaces; kept the desktop one (“${text(n).slice(0, 40)}…”)`);
        out.push(...items(kind === "NotPhone" ? n.children : pair.children, ctx, indent));
      } else {
        for (const v of [n, pair]) {
          const k = variantKind(v, ctx.bp);
          out.push(`${pad}<${k}>`, ...items(v.children, ctx, indent + 1), `${pad}</${k}>`);
        }
      }
      i++;
      continue;
    }
    if (isRich(n)) {
      out.push(...richText(n, ctx, indent));
      continue;
    }
    // Framer's fixed-width (1195px) box around one heading on /terms-of-use: it only
    // fits at ≥1440px and clips the heading away below that. Rendered as a normal
    // heading (identical at 1440px).
    if (n.layout.height === "24px" && n.children.length === 1 && isRich(n.children[0]) && n.children[0].layout.position === "absolute") {
      notes.push(`${ctx.page}: fixed-width heading box rendered as a normal heading (“${text(n)}”)`);
      out.push(...richText(n.children[0], ctx, indent));
      continue;
    }
    // A section: column, gap 16 (or 24), left-aligned (or centred).
    const props = [];
    if (n.id) props.push(`id=${JSON.stringify(n.id)}`);
    if (n.layout.gap !== "16px") props.push(`gap={${parseInt(n.layout.gap)}}`);
    if (n.layout.align === "center") props.push("centered");
    out.push(`${pad}<Section${props.length ? " " + props.join(" ") : ""}>`, ...items(n.children, ctx, indent + 1), `${pad}</Section>`);
  }
  return out;
}

const browser = await launch();
for (const { page, name } of PAGES) {
  const { tree, bp } = await dump(browser, page);
  const header = tree[0];
  const footer = tree[tree.length - 1];
  if (!header.cls.some((c) => c.endsWith("-container")) || !footer.cls.some((c) => c.endsWith("-container"))) throw new Error(`layout changed on ${page}`);
  const banner = tree[1];
  let columns = tree.slice(2, -1);
  if (columns.length === 2) {
    // anti-laundering: the same text twice (phone / larger screens) — keep one after checking.
    const [x, y] = columns.map((c) => text(c).replace(/ /g, " "));
    if (x !== y) throw new Error(`${page}: the two text columns differ`);
    notes.push(`${page}: Framer renders the text twice (phone / larger screens) with identical wording; rendered once`);
    columns = columns.filter((c) => c.cls.some((k) => bp[k.replace(/^hidden-/, "")] === "phone"));
  }
  const ctx = { page, bp, state: { presets: new Set(), usesStyles: false } };
  const body = items(columns[0].children, ctx, 3);
  const title = text(banner);

  const imports = ["Heading", "LegalLink", "NotPhone", "PhoneOnly", "Section", "Text"].filter((c) => body.some((l) => l.includes(`<${c}`)));
  const src = [
    `import { ${imports.join(", ")} } from "../_legal/LegalPage";`,
    ...(ctx.state.usesStyles ? [`import s from "../_legal/LegalPage.module.css";`] : []),
    "",
    `/**`,
    ` * The text of Framer's ${page} page, copied verbatim (non-breaking spaces and`,
    ` * per-breakpoint wording included) by tools/framer/legal-content.mjs. Edit here`,
    ` * when the wording changes.`,
    ` */`,
    `export function ${name}() {`,
    `  return (`,
    `    <>`,
    ...body,
    `    </>`,
    `  );`,
    `}`,
    "",
  ].join("\n");
  const file = path.join("app/(site)", page, `${name}.tsx`);
  console.log(`${page}: title ${JSON.stringify(title)}, ${body.length} lines, other styles ${[...ctx.state.presets].join(",") || "-"} → ${file}`);
  if (!check) {
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, src);
  }
}
await browser.close();
for (const n of notes) console.log("note:", n);
