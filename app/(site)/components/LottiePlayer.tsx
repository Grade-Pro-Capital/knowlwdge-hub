"use client";

import { useEffect, useRef, type CSSProperties } from "react";

type Props = {
  /** Path to the Lottie JSON (served from public/). */
  src: string;
  speed?: number;
  loop?: boolean;
  /** Framer "isForwardsDirection" off: plays in reverse. */
  reverse?: boolean;
  className?: string;
  style?: CSSProperties;
};

/**
 * Framer's Lottie component: lottie-web 5.7.8 at "medium" quality, SVG renderer,
 * preserveAspectRatio "xMidYMid slice", autoplay from frame 0.
 */
export function LottiePlayer({ src, speed = 1, loop = true, reverse = false, className, style }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let destroyed = false;
    let anim: { destroy: () => void } | undefined;
    (async () => {
      const [{ default: lottie }, data] = await Promise.all([
        import("lottie-web/build/player/lottie_svg"),
        fetch(src, { credentials: "omit" }).then((r) => r.json()),
      ]);
      if (destroyed || !ref.current) return;
      // Framer sets this globally before any animation loads; it changes how curves
      // (and trimmed strokes) are sampled.
      lottie.setQuality("medium");
      const a = lottie.loadAnimation({
        container: ref.current,
        renderer: "svg",
        loop,
        autoplay: true,
        animationData: data,
        rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
      });
      a.setDirection(reverse ? -1 : 1);
      a.setSpeed(speed);
      a.goToAndPlay(0, true);
      anim = a;
    })();
    return () => {
      destroyed = true;
      anim?.destroy();
    };
  }, [src, speed, loop, reverse]);

  return <div ref={ref} className={className} style={style} />;
}
