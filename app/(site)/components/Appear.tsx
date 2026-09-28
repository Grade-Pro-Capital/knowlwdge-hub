"use client";

import { useEffect, useMemo, useRef, type CSSProperties, type ElementType, type FormEventHandler, type ReactNode, type RefObject } from "react";
import { animate, motion, useMotionValue, type Transition } from "motion/react";
import { scrollTargetRange } from "./scrollTarget";

export type AppearState = { opacity?: number; x?: number; y?: number; scale?: number; rotate?: number };

type Props = {
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  /** Start state ("enter" in Framer). Animates to the resting state when in view. */
  from: AppearState;
  /** State to animate to when leaving view (only used when `once` is false). Defaults to `from`. */
  exit?: AppearState;
  transition: Transition;
  /** Framer threshold: visible height ÷ min(element height, viewport height). */
  threshold?: number;
  /** Framer "animate once". When false, it animates out again on leaving view. */
  once?: boolean;
  /**
   * Trigger on scrolling past another element (Framer appear "targets") instead of
   * on this element entering view: plays once scrollY passes the start of the
   * target's scroll range (see scrollTargetRange), with `threshold` × viewport height.
   */
  scrollTarget?: { ref: RefObject<HTMLElement | null>; offset: number };
  /** For `as="form"`. */
  onSubmit?: FormEventHandler<HTMLElement>;
};

const REST = { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 } as const;
const KEYS = ["opacity", "x", "y", "scale", "rotate"] as const;
/** Framer observes intersection at every 1%. */
const THRESHOLDS = Array.from({ length: 100 }, (_, i) => i * 0.01);

/**
 * Framer's "Appear" scroll effect (styleAppear): starts at `from`, animates to the
 * resting state when it scrolls into view (or past `scrollTarget`), and — unless
 * `once` — back when it scrolls out. Triggers and thresholds match Framer's runtime.
 */
export function Appear({
  as = "div",
  className,
  style,
  children,
  from,
  exit,
  transition,
  threshold = 0,
  once = true,
  scrollTarget,
  onSubmit,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const Tag = useMemo(() => motion.create(as), [as]);
  const values = {
    opacity: useMotionValue(from.opacity ?? REST.opacity),
    x: useMotionValue(from.x ?? REST.x),
    y: useMotionValue(from.y ?? REST.y),
    scale: useMotionValue(from.scale ?? REST.scale),
    rotate: useMotionValue(from.rotate ?? REST.rotate),
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let inView = false;
    let played = false;
    const run = (target: AppearState, resetToFrom: boolean) => {
      for (const key of KEYS) {
        if (resetToFrom) values[key].set(from[key] ?? REST[key]);
        animate(values[key], target[key] ?? REST[key], {
          ...transition,
          restDelta: key === "scale" ? 0.001 : undefined,
        });
      }
    };
    if (scrollTarget) {
      // Framer interpolates scrollY over [0, from − 1, from, …] → [initial, initial,
      // animate, …] with an immediate mix, so it flips to "animate" just past from − 1
      // (and immediately when from ≤ 1).
      const update = () => {
        const target = scrollTarget.ref.current;
        if (!target) return;
        const start = scrollTargetRange(target, { offset: scrollTarget.offset, threshold }).from;
        const triggered = start <= 1 || window.scrollY > start - 1;
        if (triggered && !inView) {
          if (once && played) return;
          played = true;
          inView = true;
          run(REST, false);
        } else if (!triggered && inView && !once) {
          inView = false;
          run(from, false);
        }
      };
      update();
      window.addEventListener("scroll", update, { passive: true });
      window.addEventListener("resize", update);
      return () => {
        window.removeEventListener("scroll", update);
        window.removeEventListener("resize", update);
      };
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        const box = entry.boundingClientRect;
        const visible =
          box.height === 0
            ? entry.isIntersecting
            : entry.isIntersecting &&
              entry.intersectionRect.height / Math.min(box.height, window.innerHeight) >= threshold;
        if (visible && !inView) {
          if (once && played) return;
          played = true;
          inView = true;
          run(REST, true);
        } else if (!visible && inView) {
          inView = false;
          if (once) return;
          run(exit ?? from, false);
        }
      },
      { threshold: THRESHOLDS },
    );
    io.observe(el);
    return () => io.disconnect();
    // Effect config is static per instance.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tag ref={ref} className={className} style={{ willChange: "transform", ...style, ...values }} onSubmit={onSubmit}>
      {children}
    </Tag>
  );
}
