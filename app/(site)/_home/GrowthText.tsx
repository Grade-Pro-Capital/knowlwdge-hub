import { LottiePlayer } from "../components/LottiePlayer";
import styles from "./GrowthText.module.css";

/** "Growth [rocking gold tile with a looping arrow] you See". */
export function GrowthText() {
  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <div className={`${styles.word} ${styles.growthWord}`}>
          <span className={`${styles.fill} ${styles.growth}`}>Growth</span>
        </div>
        <div className={styles.tile}>
          <div className={styles.lottie}>
            <LottiePlayer src="/site/lottie-growth-arrow.json" style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
        <div className={styles.word}>
          <span className={`${styles.fill} ${styles.youSee}`}>{" you See"}</span>
        </div>
      </div>
    </div>
  );
}
