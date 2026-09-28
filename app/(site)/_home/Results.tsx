import { Appear } from "../components/Appear";
import { Counter } from "../components/Counter";
import { FramerBackground, FramerImage } from "../components/FramerImage";
import { LottiePlayer } from "../components/LottiePlayer";
import { MaskIcon } from "../components/MaskIcon";
import styles from "./Results.module.css";

/** "Results That Shine. Trust by Design." — counter, two charts and two stats. */
export function Results() {
  return (
    <div className={styles.results}>
      {/* Curved divider drawn at the top of the block. */}
      <FramerBackground
        file="hZacpjX0BIafvJUjffprg7Dfo.svg"
        width={1440}
        height={143}
        variants={[512, 1024]}
        sizes="(min-width: 1200px) 100vw, (min-width: 810px) and (max-width: 1199.98px) 100vw, (max-width: 809.98px) 100vw"
        alt=""
        fit="contain"
        position="center top"
        loading="lazy"
      />
      <div className={styles.inner} id="delivering-with-security">
        <div className={styles.head}>
          <Appear
            className={styles.eyebrow}
            from={{ opacity: 0.001, y: 10 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          >
            <h5 className={`preset-1w7oyvz ${styles.eyebrowText}`}>Results That Shine. Trust by Design.</h5>
          </Appear>
          <div className={styles.stat}>
            <div className={styles.counterBox}>
              <Counter start={100} end={312} speed={20} suffix="%" phoneStartsImmediately className={styles.counter} />
            </div>
            <h2 className={`preset-94fo1t ${styles.delivered} ${styles.deliveredWide}`}>delivered in last 2 years</h2>
            <p className={`preset-xxgem0 ${styles.delivered} ${styles.deliveredPhone}`}>delivered in 2 years</p>
          </div>
        </div>

        <div className={styles.charts}>
          <div className={styles.chartRow}>
            <div className={`${styles.chartCard} ${styles.lottieCard}`}>
              <div className={styles.lottieBox}>
                <LottiePlayer src="/site/lottie-chart.json" speed={0.75} style={{ width: "100%" }} />
              </div>
            </div>
            <div className={`${styles.chartCard} ${styles.imageCard}`}>
              <div className={styles.chartImage}>
                <FramerImage
                  file="BKffePAJjGwLaSZGybMwNyIbSMw.png"
                  width={1292}
                  height={768}
                  variants={[512, 1024]}
                  sizes="(min-width: 1200px) calc(min(100vw * 0.83, 1200px) / 2 - 32px), (min-width: 810px) and (max-width: 1199.98px) calc(min(max(100vw, 1px), 1200px) * 0.9 - 32px), (max-width: 809.98px) calc(min(max(100vw, 1px), 1200px) * 0.9 - 32px)"
                  alt="Comparison chart of FD, mutual fund and crypto derivatives returns"
                  fit="contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className={styles.statRow}>
            <div className={`${styles.statCard} ${styles.statCardFirst}`}>
              <MaskIcon name="trend-up" color="var(--gc-gold-light)" className={styles.statIcon} />
              <p className={`preset-1igej9n ${styles.statText} ${styles.statTextWide}`}>680% growth since inception</p>
              <p className={`preset-d7059j ${styles.statText} ${styles.statTextPhone}`}>680% growth since inception</p>
            </div>
            <div className={`${styles.statCard} ${styles.statCardSecond}`}>
              <MaskIcon name="currency-btc" color="var(--gc-gold-light)" className={styles.statIcon} />
              <p className={`preset-1igej9n ${styles.statText} ${styles.statTextWide}`}>
                90% holdings in Blue-Chip Cryptos
              </p>
              <p className={`preset-d7059j ${styles.statText} ${styles.statTextPhone}`}>
                90% holdings in Blue-Chip Cryptos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
