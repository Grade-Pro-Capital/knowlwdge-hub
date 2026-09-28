"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type Props = {
  start: number;
  end: number;
  /** Milliseconds per +1 step. */
  speed: number;
  suffix?: string;
  /** Only count while on screen. Framer turns this off on phones (<810px). */
  startOnViewport?: boolean;
  phoneStartsImmediately?: boolean;
  className?: string;
  style?: CSSProperties;
};

/**
 * Framer marketplace "Counter": adds 1 every `speed` ms from `start` to `end`,
 * pausing while off screen (unless it starts immediately), no looping.
 */
export function Counter({
  start,
  end,
  speed,
  suffix = "",
  startOnViewport = true,
  phoneStartsImmediately,
  className,
  style,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(start);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const immediate =
      !startOnViewport || (phoneStartsImmediately && window.matchMedia("(max-width: 809.98px)").matches);
    if (!(visible || (immediate && start !== end)) || count >= end) return;
    const id = setInterval(() => setCount((c) => (c < end ? c + 1 : c)), speed);
    return () => clearInterval(id);
  }, [count, visible, start, end, speed, startOnViewport, phoneStartsImmediately]);

  return (
    <div ref={ref} className={className} style={{ display: "flex", gap: 0, flexDirection: "row", ...style }}>
      <span style={{ color: "rgb(0, 153, 255)" }} />
      <span>{count.toFixed(0)}</span>
      <span style={{ color: "var(--gc-gold)" }}>{suffix}</span>
    </div>
  );
}
