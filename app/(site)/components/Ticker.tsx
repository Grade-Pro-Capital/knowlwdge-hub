"use client";

import {
  Children,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type ReactNode,
} from "react";
import { useInView } from "motion/react";

type Props = {
  children: ReactNode;
  gap: number;
  /** Gap below 810px, when Framer overrides it on phones. */
  phoneGap?: number;
  padding?: number;
  /** Pixels per second. */
  speed: number;
  /** Width of each faded edge, % of the strip. */
  fadeWidth?: number;
  className?: string;
  style?: CSSProperties;
};

const MAX_DUPLICATES = 100;

/** `phone` below 810px (Framer's phone breakpoint), else `wide`. */
function useBreakpointValue(wide: number, phone: number | undefined) {
  const query = "(max-width: 809.98px)";
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => (phone !== undefined && window.matchMedia(query).matches ? phone : wide),
    () => wide,
  );
}

const listBase: CSSProperties = {
  display: "flex",
  width: "100%",
  height: "100%",
  maxWidth: "100%",
  maxHeight: "100%",
  placeItems: "center",
  margin: 0,
  padding: 0,
  listStyleType: "none",
  textIndent: "none",
};

/**
 * Framer's built-in Ticker (direction left): measures one set of items, repeats
 * it enough to cover the strip, and scrolls it with a linear, infinite WAAPI
 * animation at `speed` px/s. Pauses off screen and in hidden tabs.
 */
export function Ticker({
  children,
  gap: wideGap,
  phoneGap,
  padding = 10,
  speed,
  fadeWidth = 25,
  className,
  style,
}: Props) {
  const gap = useBreakpointValue(wideGap, phoneGap);
  const items = Children.toArray(children);
  const parentRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const firstRef = useRef<HTMLLIElement>(null);
  const lastRef = useRef<HTMLLIElement>(null);
  const animationRef = useRef<Animation | null>(null);
  const [size, setSize] = useState<{ parent: number; children: number } | null>(null);
  const isInView = useInView(parentRef);

  useLayoutEffect(() => {
    const measure = () => {
      const parent = parentRef.current;
      if (!parent || !firstRef.current || !lastRef.current) return;
      const start = firstRef.current.offsetLeft;
      setSize({
        parent: parent.offsetWidth,
        children: lastRef.current.offsetLeft + lastRef.current.offsetWidth - start + gap,
      });
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (parentRef.current) ro.observe(parentRef.current);
    return () => ro.disconnect();
  }, [gap]);

  const duplicateBy = size ? Math.min(Math.round((size.parent / size.children) * 2) + 1, MAX_DUPLICATES) : 0;
  const animateTo = size ? size.children + size.children * Math.round(size.parent / size.children) : 0;

  useEffect(() => {
    if (!animateTo || !speed || !listRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const anim = listRef.current.animate(
      { transform: ["translateX(-0px)", `translateX(-${animateTo}px)`] },
      { duration: (Math.abs(animateTo) / speed) * 1000, iterations: Infinity, easing: "linear" },
    );
    animationRef.current = anim;
    return () => anim.cancel();
  }, [animateTo, speed]);

  useEffect(() => {
    const playOrPause = () => {
      const anim = animationRef.current;
      if (!anim) return;
      if (isInView && !document.hidden && anim.playState === "paused") anim.play();
      else if ((!isInView || document.hidden) && anim.playState === "running") anim.pause();
    };
    playOrPause();
    document.addEventListener("visibilitychange", playOrPause);
    return () => document.removeEventListener("visibilitychange", playOrPause);
  }, [isInView, animateTo]);

  const half = fadeWidth / 2;
  const mask = `linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) ${half}%, rgba(0, 0, 0, 1) ${100 - half}%, rgba(0, 0, 0, 0) 100%)`;

  return (
    <section
      ref={parentRef}
      className={className}
      style={{
        ...listBase,
        opacity: size ? 1 : 0,
        WebkitMaskImage: mask,
        maskImage: mask,
        overflow: "hidden",
        padding: `${padding}px`,
        ...style,
      }}
    >
      <ul
        ref={listRef}
        style={{
          ...listBase,
          gap,
          placeItems: "center",
          position: "relative",
          flexDirection: "row",
          willChange: isInView ? "transform" : "auto",
          transform: "translateX(-0px)",
        }}
      >
        {items.map((item, i) => (
          <li key={`o${i}`} ref={i === 0 ? firstRef : i === items.length - 1 ? lastRef : undefined}>
            {item}
          </li>
        ))}
        {Array.from({ length: duplicateBy }, (_, d) =>
          items.map((item, i) => (
            <li key={`d${d}-${i}`} aria-hidden style={{ willChange: isInView ? "transform" : undefined }}>
              {item}
            </li>
          )),
        )}
      </ul>
    </section>
  );
}
