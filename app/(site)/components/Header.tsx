"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  LayoutGroup,
  MotionConfig,
  motion,
  useMotionValue,
} from "motion/react";
import { LogoImage } from "./Logo";
import { NavText } from "./NavText";
import { scrollTargetProgress } from "./scrollTarget";
import { SoonBadge } from "./SoonBadge";
import styles from "./Header.module.css";

/** Framer's default component transition. */
const SPRING = { type: "spring", bounce: 0.2, duration: 0.4 } as const;

type HeaderProps = {
  /** Stacking order differs per Framer page (home 10, other pages 9). */
  zIndex?: number;
  /** Home page only: the header slides down 150px and fades in 0.8s after load. */
  appear?: boolean;
  /** Slide up 80px while the footer scrolls into view. */
  slideUpAtFooter?: boolean;
  /** Framer's `sizes` for the desktop logo on this page, if it differs from the default. */
  logoSizes?: string;
};

/**
 * Framer "onScrollTarget" transform (threshold 1): y goes 0 → -80 as scrollY runs
 * from (footer offsetTop − 1 − viewport height) over the footer's height.
 */
const centred = (_: unknown, generated: string) => `translateX(-50%) ${generated}`;

function useSlideUpAtFooter(enabled: boolean) {
  const y = useMotionValue(0);
  useEffect(() => {
    if (!enabled) return;
    const update = () => {
      const footer = document.querySelector("footer");
      if (!footer) return;
      y.set(-80 * scrollTargetProgress(footer));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [enabled, y]);
  return y;
}

/** Framer's "Header" component: desktop bar ≥1200px, tap-to-open menu below. */
export function Header({
  zIndex = 9,
  appear = false,
  slideUpAtFooter = false,
  logoSizes,
}: HeaderProps) {
  const [open, setOpen] = useState(false);
  const scrollY = useSlideUpAtFooter(slideUpAtFooter);
  // The finished appear animation stays attached (as Framer's does); it affects how
  // Chrome rasterises the header layer.
  const className = [
    styles.root,
    (appear || slideUpAtFooter) && styles.layered,
    appear && styles.pinned,
    appear && styles.appear,
  ]
    .filter(Boolean)
    .join(" ");

  // As in Framer, the slide-up transform sits on the fixed, layer-promoted root itself.
  // Unless pinned (home), the root is centred with translateX(-50%), which Framer
  // keeps ahead of the scroll transform.
  return (
    <motion.div
      className={className}
      style={slideUpAtFooter ? { zIndex, y: scrollY } : { zIndex }}
      transformTemplate={slideUpAtFooter && !appear ? centred : undefined}
    >
      {/* Desktop (≥1200px) */}
      <div className={styles.desktop}>
        <div className={styles.row}>
          <Link className={styles.logoLink} href="/">
            <div className={styles.logo}>
              <LogoImage sizes={logoSizes} />
            </div>
          </Link>
          <nav className={styles.nav}>
            <div className={styles.navSpacer} />
            <NavText href="/support" label="Support" />
            <NavText href="/faq" label="FAQ" />
            {/* Framer opens the blog in a new tab; here it opens in the same tab (by request). */}
            <NavText href="/blogs" label="Blogs" />
          </nav>
          <Link className={styles.cta} href="/#talk-to-an-expert-1">
            <p className={styles.ctaText}>Free Consultation</p>
          </Link>
        </div>
      </div>

      {/* Phone / tablet (<1200px): tap the bar to open, tap the X to close. */}
      <MotionConfig transition={SPRING}>
        <LayoutGroup>
          <motion.div layout className={styles.mobile} data-open={open}>
            <motion.div
              layout
              className={`${styles.row} ${styles.mobileRow}`}
              onClick={open ? undefined : () => setOpen(true)}
            >
              <Link className={styles.logoLink} href="/">
                <motion.div layout className={styles.mobileLogo}>
                  <LogoImage />
                </motion.div>
              </Link>
              <motion.div
                layout
                className={styles.menu}
                onClick={
                  open
                    ? (e) => {
                        e.stopPropagation();
                        setOpen(false);
                      }
                    : undefined
                }
              >
                <motion.div
                  layout
                  className={styles.bar}
                  initial={false}
                  animate={{ rotate: open ? 47 : 0 }}
                />
                {!open && (
                  <motion.div
                    layout
                    className={`${styles.bar} ${styles.barShort}`}
                  />
                )}
                <motion.div
                  layout
                  className={styles.bar}
                  initial={false}
                  animate={{ rotate: open ? -43 : 0 }}
                />
              </motion.div>
            </motion.div>

            {open && (
              <motion.div layout className={styles.burger}>
                <div className={styles.burgerLinks}>
                  <div className={styles.educationRow}>
                    <NavText href="/" label="Education" />
                    <SoonBadge />
                  </div>
                  <NavText href="/support" label="Support" />
                </div>
                {/* In Framer this pill is not a link (tapping it does nothing) — kept as-is. */}
                <div className={styles.burgerCta}>
                  <p className={styles.ctaText}>Free Consultation</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </LayoutGroup>
      </MotionConfig>
    </motion.div>
  );
}
