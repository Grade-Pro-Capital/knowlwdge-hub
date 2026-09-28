import { FramerImage } from "../components/FramerImage";
import { GlowBorder } from "./GlowBorder";
import styles from "./GlowCard.module.css";

type Props = {
  title: string;
  text: string;
  image: { file: string; width: number; height: number; variants: number[]; alt: string };
  /** Glow Card 2 ("Fully Managed") centres its image and keeps a 2px ring on phones. */
  variant?: "default" | "centered";
};

export function GlowCard({ title, text, image, variant = "default" }: Props) {
  const centered = variant === "centered";
  return (
    <div className={centered ? `${styles.card} ${styles.keepBorder}` : styles.card}>
      <div className={styles.content}>
        <div className={styles.text}>
          <div className={styles.middle}>
            <div className={styles.titleRow}>
              <h3 className={styles.title}>{title}</h3>
            </div>
          </div>
          <div className={styles.bottom}>
            <p className={styles.body}>{text}</p>
          </div>
        </div>
        <div className={centered ? `${styles.image} ${styles.imageCentered}` : styles.image}>
          <FramerImage
            file={image.file}
            width={image.width}
            height={image.height}
            variants={image.variants}
            sizes="(min-width: 1200px) 333px, (min-width: 810px) and (max-width: 1199.98px) 333px, (max-width: 809.98px) 216px"
            alt={image.alt}
            fit="cover"
            loading="lazy"
          />
        </div>
      </div>
      <div className={styles.glowLayer}>
        <div className={styles.glowBox}>
          <GlowBorder background="rgb(21, 21, 23)" />
        </div>
      </div>
    </div>
  );
}
