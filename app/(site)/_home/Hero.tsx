import { FramerImage } from "../components/FramerImage";
import { KnowMore } from "./KnowMore";
import styles from "./Hero.module.css";

function IndiaBadge() {
  return (
    <div className={styles.badge}>
      <div className={styles.flag}>
        <FramerImage
          file="roHQJtFd3P6rsPXDkOEu4OpI8s.png"
          width={800}
          height={534}
          variants={[512]}
          sizes="(min-width: 1200px) 24px, (min-width: 810px) and (max-width: 1199.98px) 24px, (max-width: 809.98px) 24px"
          alt="Indian flag icon"
        />
      </div>
      <div className={styles.badgeTextWrap}>
        <h5 className={styles.badgeText}>India&apos;s #1</h5>
      </div>
    </div>
  );
}

/** Home hero: "India's #1" badge, headline and the Know More button. */
export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={`${styles.badgeWrap} ${styles.badgeWrapDesktop}`}>
          <IndiaBadge />
        </div>
        <div className={styles.titleWrap}>
          <div className={styles.title}>
            <h1 className="preset-94zkxn" style={{ textAlign: "center" }}>
              <span className={styles.gradientText}>
                {"Fully-Managed Crypto "}
                <br />
                {"Derivatives Baskets Platform "}
              </span>
            </h1>
          </div>
        </div>
        <div className={styles.cta}>
          <KnowMore />
        </div>
      </div>
      <div className={`${styles.badgeWrap} ${styles.badgeWrapPhone}`}>
        <IndiaBadge />
      </div>
    </section>
  );
}
