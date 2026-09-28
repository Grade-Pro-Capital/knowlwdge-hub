import type { ReactNode } from "react";
import { Appear } from "../components/Appear";
import { MaskIcon } from "../components/MaskIcon";
import styles from "./SecurityCard.module.css";

type Props = {
  icon: string;
  /** Title lines (Framer puts a <br> between them). */
  title: ReactNode;
  text: string;
};

/** Framer "card" component used in "Why Grade Capital?". */
export function SecurityCard({ icon, title, text }: Props) {
  return (
    <div className={styles.card}>
      <Appear
        className={styles.iconTile}
        from={{ opacity: 0, scale: 0.5 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
        threshold={0.5}
      >
        <MaskIcon name={icon} color="var(--gc-gold)" className={styles.icon} />
      </Appear>
      <div className={styles.body}>
        {/* Framer renders the title as h5 on desktop and h4 on tablet/phone. */}
        <h5 className={`preset-1o153d5 ${styles.title} ${styles.titleDesktop}`}>{title}</h5>
        <h4 className={`preset-uj565w ${styles.title} ${styles.titleTablet}`}>{title}</h4>
        <p className={`preset-d7059j ${styles.text}`}>{text}</p>
      </div>
      <MaskIcon name={icon} color="var(--gc-text-muted)" className={styles.watermark} />
    </div>
  );
}
