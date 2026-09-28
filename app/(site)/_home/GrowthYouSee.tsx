"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FramerBackground } from "../components/FramerImage";
import { Ticker } from "../components/Ticker";
import { GrowthText } from "./GrowthText";
import styles from "./GrowthYouSee.module.css";

function Logo({
  className,
  file,
  width,
  height,
  variants = [],
  sizes,
  fit = "contain",
}: {
  className: string;
  file: string;
  width: number;
  height: number;
  variants?: number[];
  sizes?: string;
  fit?: "contain" | "cover";
}) {
  return (
    <div className={`${styles.logo} ${className}`}>
      <FramerBackground file={file} width={width} height={height} variants={variants} sizes={sizes} alt="" fit={fit} />
    </div>
  );
}

export function GrowthYouSee() {
  const ref = useRef<HTMLDivElement>(null);
  // Framer "onInView" transform: scale 1 → 0.8 while the block scrolls into view.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <motion.div ref={ref} className={styles.section} style={{ scale }}>
      <div className={styles.stage}>
        <FramerBackground
          file="a4vb0IH1jXAcen4cXGJi5tqBthE.svg"
          width={7511}
          height={5008}
          variants={[512, 1024, 2048, 4096]}
          sizes="(min-width: 1200px) 996px, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) calc(max(100vw, 100vw * 0.9) * 0.9513)"
          alt=""
          fit="contain"
          position="center top"
          loading="lazy"
        />
        <div className={styles.content} id="growth-you-see">
          <div className={styles.textBox}>
            <GrowthText />
          </div>
          <h2 className={styles.trust}>Trust you Feel</h2>
        </div>
      </div>

      <div className={styles.seen}>
        <div className={styles.seenInner}>
          <div className={styles.seenRow}>
            <div className={`${styles.line} ${styles.lineFlipped}`} />
            <p className={`preset-1snn53y ${styles.seenText} ${styles.seenTextWide}`}>{"AS SEEN ON "}</p>
            <p className={`preset-d7059j ${styles.seenText} ${styles.seenTextPhone}`}>AS SEEN ON</p>
            <div className={styles.line} />
          </div>
          <div className={styles.tickerBox}>
            <GrowthTicker />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function GrowthTicker() {
  const logos = [
    <Logo
      key="dailyhunt"
      className={styles.dailyhunt}
      file="eHsPHJ00faReKpkIFmL5Z2np4.png"
      width={1117}
      height={283}
      variants={[512, 1024]}
      sizes="(min-width: 1200px) 131.4462px, (min-width: 810px) and (max-width: 1199.98px) 131.4462px, (max-width: 809.98px) 131.4462px"
    />,
    <Logo
      key="hindustan-metro"
      className={styles.hindustanMetro}
      file="lPLjBK9rjWYfdIpcEosgETyj28.png"
      width={467}
      height={108}
    />,
    <Logo
      key="republic"
      className={styles.republic}
      file="isPH6FgRcCh2qpFtseSsnVbee7U.png"
      width={1417}
      height={472}
      variants={[512, 1024]}
      sizes="(min-width: 1200px) 132.3429px, (min-width: 810px) and (max-width: 1199.98px) 132.3429px, (max-width: 809.98px) 132.3429px"
    />,
    <Logo
      key="franchise-india"
      className={styles.franchiseIndia}
      file="WvcQqqrXzwzJ6tieVEF4VEYrxc.png"
      width={190}
      height={110}
      fit="cover"
    />,
  ];
  return (
    <Ticker gap={60} phoneGap={40} speed={40}>
      {logos}
    </Ticker>
  );
}
