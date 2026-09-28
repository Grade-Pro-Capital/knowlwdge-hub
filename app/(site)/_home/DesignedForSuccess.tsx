"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "motion/react";
import { scrollTargetProgress } from "../components/scrollTarget";
import { GlowCard } from "./GlowCard";
import styles from "./DesignedForSuccess.module.css";

/** Framer's FX spring for these scroll transforms. */
const SPRING = { stiffness: 500, damping: 60, mass: 1, restDelta: 0.001 };

const CARDS = [
  {
    title: "Dedicated Relationship Manager",
    text: "Real people. Real answers. Just one call away.",
    image: { file: "BospcaseXbKRo9zQffV14wXhOc.jpg", width: 640, height: 640, variants: [512] },
    alt: "Dedicated relationship manager with headset ready to assist investors",
    rotate: 2,
  },
  {
    title: "Dollar Appreciation Benefits",
    text: "Earn not just from crypto, but from dollar rise.",
    image: { file: "c9hf70MAI41lyDUXbcArafzsvFk.png", width: 1024, height: 1024, variants: [512] },
    alt: "USD to INR currency exchange trading chart with candlestick patterns",
    rotate: -2,
  },
  {
    title: "No 30% Crypto Tax",
    text: "Smarter structure, no flat 30% crypto tax burden.",
    image: { file: "XeZ5iOr13hzOuDIFjD1lS1i5wSE.png", width: 1024, height: 1024, variants: [512] },
    alt: "Tax saved stamp representing crypto tax benefits in India",
    rotate: -6,
  },
  {
    title: "Fully Managed",
    text: "We handle research, rebalancing, and everything in between.",
    image: { file: "bCq3ixbQzYaVMI05IpBKbR8GGt8.png", width: 1024, height: 1024, variants: [512] },
    alt: "Investor relaxing while checking portfolio on smartphone",
    rotate: -10,
  },
] as const;

function StackCard({
  card,
  progress,
  last,
}: {
  card: (typeof CARDS)[number];
  progress: MotionValue<number>;
  last: boolean;
}) {
  const rotate = useSpring(useTransform(progress, [0, 1], [-70, card.rotate]), SPRING);
  const y = useSpring(useTransform(progress, [0, 1], [-800, 0]), SPRING);
  return (
    <div className={styles.slot}>
      <motion.div className={styles.card} style={{ transformPerspective: 1200, y, rotate }}>
        <div className={last ? `${styles.cardInner} ${styles.cardInnerLast}` : styles.cardInner}>
          <GlowCard
            title={card.title}
            text={card.text}
            image={{ ...card.image, variants: [...card.image.variants], alt: card.alt }}
            variant={last ? "centered" : "default"}
          />
        </div>
      </motion.div>
    </div>
  );
}

export function DesignedForSuccess() {
  const triggers = useRef<(HTMLDivElement | null)[]>([]);
  const p1 = useMotionValue(0);
  const p2 = useMotionValue(0);
  const p3 = useMotionValue(0);
  const p4 = useMotionValue(0);
  const shadowOpacity = useSpring(useTransform(p4, [0, 1], [1, 0]), SPRING);

  useEffect(() => {
    const progress = [p1, p2, p3, p4];
    const update = () =>
      triggers.current.forEach((el, i) => {
        // Framer "onScrollTarget", viewport threshold 1.
        if (el) progress[i].set(scrollTargetProgress(el));
      });
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [p1, p2, p3, p4]);

  const progress = [p1, p2, p3, p4];
  return (
    <>
      <div className={styles.main}>
        <div className={styles.stage}>
          <h2 className={`${styles.title} ${styles.titleWide}`}>
            Designed for <span className={styles.gold}>Success</span>
          </h2>
          <motion.div className={styles.shadow} style={{ transformPerspective: 1200, opacity: shadowOpacity }} />
          {CARDS.map((card, i) => (
            <StackCard key={card.title} card={card} progress={progress[i]} last={i === CARDS.length - 1} />
          ))}
          <h2 className={`preset-94zkxn ${styles.titlePhone}`}>
            Designed for <span className={styles.gold}>Success</span>
          </h2>
        </div>
      </div>
      {[1, 2, 3, 4].map((n, i) => (
        <div
          key={n}
          id={String(n)}
          className={styles.trigger}
          ref={(el) => {
            triggers.current[i] = el;
          }}
        />
      ))}
    </>
  );
}
