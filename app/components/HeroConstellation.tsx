"use client";

import { useEffect, useRef } from "react";

// Brand palette for the nodes.
const GOLD = "253, 190, 53";
const CYAN = "53, 218, 255";
// One particle per this many px² of hero area (kept sparse so it reads elegant).
const AREA_PER_PARTICLE = 14000;
const MAX_PARTICLES = 90;
// Distance under which two nodes are joined by a line.
const LINK_DIST = 150;
// Cursor influence radius — nearby nodes drift gently toward the pointer.
const CURSOR_DIST = 180;

type P = { x: number; y: number; vx: number; vy: number; gold: boolean };

/**
 * Decorative particle "constellation": floating nodes joined by faint lines that
 * fade with distance, leaning subtly toward the cursor. Canvas-based, DPR-aware.
 * Parent must be `relative`. Bails out entirely under reduced motion.
 */
export function HeroConstellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: P[] = [];
    let rafId = 0;
    const mouse = { x: -9999, y: -9999 };

    const seed = () => {
      const count = Math.min(
        MAX_PARTICLES,
        Math.round((width * height) / AREA_PER_PARTICLE)
      );
      particles = Array.from({ length: count }, (_, i) => ({
        // Deterministic-ish spread without Math.random dependence on first paint.
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        gold: i % 3 !== 0, // ~2/3 gold, 1/3 cyan
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        // Drift.
        p.x += p.vx;
        p.y += p.vy;
        // Wrap around the edges.
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Gentle pull toward the cursor.
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.hypot(dx, dy);
        if (dist < CURSOR_DIST && dist > 0.5) {
          const f = (1 - dist / CURSOR_DIST) * 0.35;
          p.x += (dx / dist) * f;
          p.y += (dy / dist) * f;
        }
      }

      // Links.
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > LINK_DIST) continue;
          const alpha = (1 - d / LINK_DIST) * 0.35;
          ctx.strokeStyle = `rgba(${a.gold ? GOLD : CYAN}, ${alpha.toFixed(3)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // Nodes.
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.gold ? GOLD : CYAN}, 0.75)`;
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
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
    rafId = requestAnimationFrame(draw);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseout", onLeave);
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
