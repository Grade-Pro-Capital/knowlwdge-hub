"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { LottiePlayer } from "../components/LottiePlayer";
import { Ticker } from "../components/Ticker";
import styles from "./GradeForGood.module.css";

/**
 * Home "Grade for Good" band: the big faded headline (rises as it scrolls into
 * view) over a ticker of Grade's initiatives with Lordicon animations.
 */
export function GradeForGood() {
  return (
    <div className={styles.section}>
      <div className={styles.headingBox}>
        <Title />
      </div>
      <div className={styles.band}>
        <div className={styles.tickerSlot}>
          <Ticker gap={75} padding={10} speed={60} fadeWidth={25}>
            {ITEMS}
          </Ticker>
        </div>
      </div>
    </div>
  );
}

/** Framer "onInView" transform: y 150 → 0 while the headline scrolls into view. */
function Title() {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], [150, 0]);
  return (
    <motion.h2
      ref={ref}
      id="trust-you-feel"
      className={styles.title}
      style={{ y }}
      // Desktop and tablet centre it with translateX(-50%) ahead of the scroll transform.
      transformTemplate={(_, generated) => `var(--title-x) ${generated}`}
    >
      <span className={styles.fill}>Grade for Good</span>
    </motion.h2>
  );
}

function Icon({ src, reverse = false, wide = false }: { src: string; reverse?: boolean; wide?: boolean }) {
  return (
    <div className={wide ? `${styles.icon} ${styles.iconWide}` : styles.icon}>
      <LottiePlayer src={src} reverse={reverse} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}

const ITEMS = [
  <div key="carbon" className={styles.itemCarbon}>
    <Icon src="/site/lottie-carbon-neutral.json" />
    <p className={`preset-xxgem0 ${styles.text} ${styles.textFill}`}>
      {"Carbon Neutral "}
      <br />
      {"by 2027"}
    </p>
  </div>,
  <div key="education" className={styles.itemTop}>
    <Icon src="/site/lottie-education.json" reverse wide />
    <p className={`preset-xxgem0 ${styles.text} ${styles.textFixed}`}>
      Free Crypto Education for Students &amp; Professionals
    </p>
  </div>,
  <div key="bharat" className={styles.item}>
    <Icon src="/site/lottie-bharat.json" reverse />
    <p className={`preset-xxgem0 ${styles.text} ${styles.textPre}`}>
      {"Crypto for Bharat 🇮🇳 Regional "}
      <br />
      {"Language Literacy Drive"}
    </p>
  </div>,
  <div key="women" className={styles.item}>
    <Icon src="/site/lottie-women-in-finance.json" reverse />
    <p className={`preset-xxgem0 ${styles.text} ${styles.textPre}`}>
      {"Women in Finance "}
      <br />
      {"Initiative"}
    </p>
  </div>,
];
