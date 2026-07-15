"use client";

import { useEffect, useRef } from "react";

// Spacing between dots, in px.
const DOT_GAP = 34;
const DOT_RADIUS = 1.3;
// Radius of the cursor "spotlight" that lights dots gold.
const SPOT = 170;
const GOLD = "253, 190, 53";

/**
 * Decorative dot grid: a faint static field of dots where only those inside a
 * soft spotlight around the cursor light up gold. Canvas-based, DPR-aware.
 * Parent must be `relative`. Under reduced motion it renders the dim static grid
 * without the cursor spotlight.
 */
export function HeroSpotlight() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let rafId = 0;
    const mouse = { x: -9999, y: -9999 };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
      for (let y = DOT_GAP; y < height; y += DOT_GAP) {
        for (let x = DOT_GAP; x < width; x += DOT_GAP) {
          ctx.beginPath();
          ctx.arc(x, y, DOT_RADIUS, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let y = DOT_GAP; y < height; y += DOT_GAP) {
        for (let x = DOT_GAP; x < width; x += DOT_GAP) {
          const d = Math.hypot(x - mouse.x, y - mouse.y);
          const lit = d < SPOT ? 1 - d / SPOT : 0;
          // Base faint white dot, brightening to gold inside the spotlight.
          const r = DOT_RADIUS + lit * 1.4;
          ctx.beginPath();
          ctx.arc(x, y, r, 0, Math.PI * 2);
          ctx.fillStyle =
            lit > 0
              ? `rgba(${GOLD}, ${(0.12 + lit * 0.85).toFixed(3)})`
              : "rgba(255, 255, 255, 0.05)";
          ctx.fill();
        }
      }
      rafId = requestAnimationFrame(draw);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (reduced) drawStatic();
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 200);
    };

    resize();
    if (!reduced) {
      rafId = requestAnimationFrame(draw);
      window.addEventListener("mousemove", onMove);
      window.addEventListener("mouseout", onLeave);
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(resizeTimer);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
    />
  );
}
