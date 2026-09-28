// Shared helpers for the Framer reference/compare tooling (see docs/FRAMER-REBUILD-PLAN.md).
import { chromium } from "playwright-core";

export const FRAMER_ORIGIN = process.env.FRAMER_ORIGIN || "https://grade.capital";

export const PAGES = [
  "/",
  "/support",
  "/faq",
  "/privacy-policy",
  "/terms-of-use",
  "/investor-agreement",
  "/anti-laundering",
];

// Widths cover every Framer breakpoint (≥1200 desktop, 810–1199 tablet, <810 phone)
// plus the 1440 switch some components use. Heights are fixed so vh-based sections
// render identically on both sites.
export const VIEWPORTS = [
  { width: 1920, height: 1080 },
  { width: 1440, height: 900 },
  { width: 1280, height: 800 },
  { width: 1024, height: 768 },
  { width: 810, height: 1080 },
  { width: 390, height: 844 },
  { width: 375, height: 812 },
];

export function pageName(p) {
  return p === "/" ? "home" : p.replace(/^\//, "").replace(/\//g, "_");
}

export async function launch() {
  // Use the installed Chrome so no browser download is needed.
  return chromium.launch({ channel: process.env.PW_CHANNEL || "chrome" });
}

/**
 * Load a page and bring it to its final visual state: network idle, scroll through
 * once so in-view animations and lazy images fire, then wait for Framer's custom
 * snippets (they run ~600ms after load) and animations to finish.
 */
export async function settle(page) {
  await page.waitForLoadState("load");
  await page.waitForLoadState("networkidle").catch(() => {});
  await page.evaluate(async () => {
    const step = Math.max(200, Math.floor(window.innerHeight / 2));
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 100));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(2500);
}
