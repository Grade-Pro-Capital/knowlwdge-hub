"use client";

import { useSyncExternalStore } from "react";

/**
 * How wide a title/description is in Google's results, and where Google would cut
 * it. Google truncates by rendered width, not character count: titles are Arial
 * 20px, cut at about 600px; descriptions are Arial 14px, cut at about 920px on
 * desktop (phones often show less, about 680px, but vary, so that is shown for
 * information only). Widths are measured with the same font in the browser, so they
 * are close estimates, not exact.
 */
const SPECS = {
  title: { font: "20px Arial", limits: { desktop: 600 } },
  description: { font: "14px Arial", limits: { desktop: 920, mobile: 680 } },
} as const;

const ELLIPSIS = " ...";

let context: CanvasRenderingContext2D | null = null;
function measure(text: string, font: string): number {
  context ??= document.createElement("canvas").getContext("2d");
  if (!context) return 0;
  context.font = font;
  return context.measureText(text).width;
}

/** The text as Google would show it when cut at `limit` px (whole words where possible). */
function truncateTo(text: string, font: string, limit: number): string {
  const budget = limit - measure(ELLIPSIS, font);
  let lo = 0;
  let hi = text.length;
  while (lo < hi) {
    const mid = Math.ceil((lo + hi) / 2);
    if (measure(text.slice(0, mid), font) <= budget) lo = mid;
    else hi = mid - 1;
  }
  let cut = text.slice(0, lo);
  const lastSpace = cut.lastIndexOf(" ");
  if (lastSpace > cut.length * 0.6) cut = cut.slice(0, lastSpace);
  return `${cut.trimEnd()}${ELLIPSIS}`;
}

const subscribe = () => () => {};

type Props = {
  kind: keyof typeof SPECS;
  /** The text Google will get (field value, or the fallback the page uses). */
  text: string;
  /** Shown when `text` is the fallback, e.g. "the article title". */
  fallbackLabel?: string;
};

export function SerpWidthHint({ kind, text, fallbackLabel }: Props) {
  // Measuring needs a canvas, so render only in the browser.
  const isClient = useSyncExternalStore(subscribe, () => true, () => false);
  const value = text.trim();
  if (!isClient || !value) return null;

  const { font, limits } = SPECS[kind];
  const width = Math.round(measure(value, font));
  const desktop = limits.desktop;
  const mobile = "mobile" in limits ? limits.mobile : undefined;
  const cutOnDesktop = width > desktop;
  const color = cutOnDesktop ? "text-red-400" : "text-[rgba(255,255,255,0.5)]";
  const barColor = cutOnDesktop ? "bg-red-400" : "bg-green-400";

  return (
    <div className="mt-1 space-y-1 text-xs">
      <div className="flex items-center gap-2">
        <div className="h-1 w-32 overflow-hidden rounded bg-[rgba(255,255,255,0.1)]" aria-hidden>
          <div className={`h-full ${barColor}`} style={{ width: `${Math.min(100, (width / desktop) * 100)}%` }} />
        </div>
        <span className={color}>
          {width} px of ~{desktop} px in Google{mobile !== undefined ? ` (~${mobile} px on phones)` : ""}
          {fallbackLabel ? ` · using ${fallbackLabel}` : ""}
        </span>
      </div>
      {cutOnDesktop && (
        <p className="text-red-400">
          Too long: Google will likely cut it to “{truncateTo(value, font, desktop)}”
        </p>
      )}
    </div>
  );
}
