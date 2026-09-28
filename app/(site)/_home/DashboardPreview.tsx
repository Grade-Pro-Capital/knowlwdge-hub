"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { FramerImage } from "../components/FramerImage";
import styles from "./DashboardPreview.module.css";

/**
 * Framer "onInView" scroll transform: progress runs from the frame's top reaching
 * the viewport bottom to its bottom reaching the viewport bottom, interpolating
 * { opacity .5, scale .5, y -105 } → { opacity 1, scale 1, y 0 }.
 */
export function DashboardPreview() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [-105, 0]);

  return (
    <div className={styles.appear} id="dashboard">
      <motion.div ref={ref} className={styles.frame} style={{ scale, opacity, y }}>
        <div className={styles.column}>
          <div className={styles.bar}>
            <div className={styles.dots}>
              <div className={styles.dot} />
              <div className={styles.dot} />
              <div className={styles.dot} />
            </div>
          </div>
          <div className={styles.shot}>
            <FramerImage
              file="PYJJcL2h4cjUaK7eLxH3dePf6M.png"
              width={2906}
              height={1660}
              variants={[512, 1024, 2048]}
              sizes="(min-width: 1200px) min(100vw * 0.8, 1200px), (min-width: 810px) and (max-width: 1199.98px) min(100vw * 0.9, 1200px), (max-width: 809.98px) min(100vw * 0.9, 1200px)"
              alt="Grade Capital investor dashboard showing portfolio growth and NAV performance"
              position="47.7% 0%"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
