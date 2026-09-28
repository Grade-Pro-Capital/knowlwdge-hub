"use client";

import { useRef } from "react";

/**
 * Framer "GlowFollowBorderCard" code component: a card background with a faint
 * ring border; moving the mouse lights up the ring with a radial glow under the
 * cursor. Radius, ring width, glow size and colour come from CSS variables
 * (--glow-radius, --glow-border, --glow-size, --glow-color) so they can change
 * per breakpoint. Mask/composite values are Framer's, applied inline as it does.
 */
export function GlowBorder({ background }: { background: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--x", `${e.clientX - r.left}px`);
        el.style.setProperty("--y", `${e.clientY - r.top}px`);
      }}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: "var(--glow-radius)",
        background,
        overflow: "hidden",
        border: "var(--glow-border) solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        aria-hidden
        style={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          borderRadius: "var(--glow-radius)",
          background:
            "radial-gradient(var(--glow-size) circle at var(--x) var(--y), var(--glow-color), transparent 70%)",
          WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "var(--glow-border)",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}
