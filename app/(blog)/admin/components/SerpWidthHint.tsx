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

/** Whether Google would likely cut this text on desktop. Browser only (measures with a canvas). */
export function isCutByGoogle(kind: keyof typeof SPECS, text: string): boolean {
  const value = text.trim();
  return !!value && measure(value, SPECS[kind].font) > SPECS[kind].limits.desktop;
}

const subscribe = () => () => {};

/** True once running in the browser (widths can only be measured there). */
export function useIsClient(): boolean {
  return useSyncExternalStore(subscribe, () => true, () => false);
}

type Props = {
  kind: keyof typeof SPECS;
  /** The text Google will get (field value, or the fallback the page uses). */
  text: string;
  /** Shown when `text` is the fallback, e.g. "the article title". */
  fallbackLabel?: string;
};

/** The text cut where Google would cut it at `limit` px, or unchanged if it fits. */
function fitTo(kind: keyof typeof SPECS, text: string, limit: number): string {
  const { font } = SPECS[kind];
  return measure(text, font) > limit ? truncateTo(text, font, limit) : text;
}

/**
 * A mock Google result for the article, desktop and phone, cut where Google would cut
 * it. Approximate: Google sometimes rewrites titles and descriptions.
 */
export function SerpPreview({ title, description, path }: { title: string; description: string; path: string }) {
  const isClient = useIsClient();
  const t = title.trim();
  const d = description.trim();
  if (!isClient || !t) return null;
  const crumbs = ["https://grade.capital", ...path.split("/").filter(Boolean)].join(" › ");

  const result = (width: number, titleText: string, descriptionText: string, titleClass: string) => (
    <div className="rounded-lg bg-white p-4 font-[Arial,sans-serif]" style={{ width }}>
      <div className="mb-1 flex items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element -- tiny static favicon in a mock */}
        <img src="/favicon.png" alt="" width={26} height={26} className="rounded-full border border-[#dadce0] bg-white p-0.5" />
        <div className="min-w-0 leading-tight">
          <div className="text-[14px] text-[#202124]">Grade Capital</div>
          <div className="truncate text-[12px] text-[#4d5156]">{crumbs}</div>
        </div>
      </div>
      <div className={`${titleClass} text-[#1a0dab]`}>{titleText}</div>
      {d && <div className="mt-1 text-[14px] leading-[22px] text-[#4d5156]">{descriptionText}</div>}
    </div>
  );

  return (
    <div className="mt-4">
      <p className="mb-2 text-xs text-[rgba(255,255,255,0.6)]">
        How it may look in Google (approximate; Google sometimes rewrites titles and descriptions)
      </p>
      <div className="flex flex-wrap items-start gap-4 overflow-x-auto">
        <div>
          <p className="mb-1 text-xs text-[rgba(255,255,255,0.5)]">Desktop</p>
          {result(600, fitTo("title", t, SPECS.title.limits.desktop), fitTo("description", d, SPECS.description.limits.desktop), "text-[20px] leading-[26px]")}
        </div>
        <div>
          <p className="mb-1 text-xs text-[rgba(255,255,255,0.5)]">Phone</p>
          {result(360, t, fitTo("description", d, SPECS.description.limits.mobile), "line-clamp-2 text-[18px] leading-[24px]")}
        </div>
      </div>
    </div>
  );
}

export function SerpWidthHint({ kind, text, fallbackLabel }: Props) {
  // Measuring needs a canvas, so render only in the browser.
  const isClient = useIsClient();
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
