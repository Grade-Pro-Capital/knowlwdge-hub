import styles from "./SoonBadge.module.css";

/** The small "SOON" pill next to Education (header menu and footer). */
export function SoonBadge() {
  return (
    <div className={styles.badge}>
      <p className={styles.text}>SOON</p>
    </div>
  );
}
