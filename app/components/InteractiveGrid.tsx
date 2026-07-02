"use client";

import { useEffect, useRef } from "react";

// Smaller cells than a fixed column count so the grid reads finer and stays
// consistent across viewport widths (CoinSwitch-style dense grid).
const TARGET_CELL = 64;
// Length of the glowing "snake tail" that follows the pointer, in cells.
const TAIL_LENGTH = 6;
const MAX_ALPHA = 0.22;

/**
 * Decorative background grid where a glowing "snake tail" of cells follows the
 * pointer — the current cell brightest, older cells fading out behind it.
 * Absolutely positioned; the parent must be `relative`. Purely visual, so it
 * bails out entirely when the user prefers reduced motion.
 */
export function InteractiveGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cells: HTMLDivElement[] = [];
    let cols = 0;
    let cellSize = 0;
    // Recently-visited cell indices, oldest first, newest (cursor) last.
    let trail: number[] = [];
    let rafId = 0;

    const build = () => {
      container.innerHTML = "";
      cells = [];
      trail = [];
      const { width, height } = container.getBoundingClientRect();
      cols = Math.max(1, Math.round(width / TARGET_CELL));
      cellSize = width / cols;
      const rows = Math.ceil(height / cellSize);

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const cell = document.createElement("div");
          cell.className = "grid-cell";
          cell.style.width = `${cellSize}px`;
          cell.style.height = `${cellSize}px`;
          cell.style.left = `${j * cellSize}px`;
          cell.style.top = `${i * cellSize}px`;
          cell.style.transition = "background-color 0.45s ease-out";
          container.appendChild(cell);
          cells.push(cell);
        }
      }
    };

    build();

    const paint = (px: number, py: number) => {
      const rows = Math.ceil(cells.length / cols);
      const col = Math.floor(px / cellSize);
      const row = Math.floor(py / cellSize);
      const index =
        col < 0 || col >= cols || row < 0 || row >= rows ? -1 : row * cols + col;
      // Ignore out-of-bounds and staying within the same cell.
      if (index < 0 || index === trail[trail.length - 1]) return;

      trail.push(index);
      // Drop the oldest cell(s) off the tail and fade them out (unless the cell
      // still appears elsewhere in the tail — e.g. the cursor doubled back).
      while (trail.length > TAIL_LENGTH) {
        const dropped = trail.shift()!;
        if (!trail.includes(dropped) && cells[dropped]) {
          cells[dropped].style.transition = "background-color 0.6s ease-out";
          cells[dropped].style.backgroundColor = "transparent";
        }
      }

      // Recolour the tail: oldest faint → newest brightest. Iterating oldest to
      // newest means a duplicated cell keeps its brightest (newest) value.
      for (let k = 0; k < trail.length; k++) {
        const cell = cells[trail[k]];
        if (!cell) continue;
        // Squared falloff: head sits at MAX_ALPHA, tail drops off steeply.
        const t = (k + 1) / trail.length;
        const alpha = MAX_ALPHA * t * t;
        cell.style.transition = "background-color 0.35s ease-out";
        cell.style.backgroundColor = `rgba(253, 190, 53, ${alpha.toFixed(3)})`;
      }
    };

    let pendingX = 0;
    let pendingY = 0;
    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      pendingX = e.clientX - rect.left;
      pendingY = e.clientY - rect.top;
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        paint(pendingX, pendingY);
      });
    };

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(build, 200);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      clearTimeout(resizeTimer);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <div id="interactive-grid" ref={containerRef} aria-hidden="true" />;
}
