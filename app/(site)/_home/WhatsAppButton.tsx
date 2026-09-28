import { MaskIcon } from "../components/MaskIcon";
import styles from "./WhatsAppButton.module.css";

/** Home page's fixed "Chat on WhatsApp" button (Framer "Remix Template Button"). */
export function WhatsAppButton() {
  return (
    <a className={styles.button} href="https://wa.me/918058071055" target="_blank" rel="noopener">
      <div className={styles.textWrap}>
        <p className={`preset-3z79hn ${styles.text}`}>Chat on WhatsApp</p>
      </div>
      <MaskIcon name="whatsapp" color="rgb(0, 0, 0)" className={styles.icon} />
    </a>
  );
}
