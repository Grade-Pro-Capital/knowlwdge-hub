import { SOCIAL_PROFILES } from "@/app/lib/siteSchema";
import styles from "./SocialLinks.module.css";

function Social({ href, iconClass, label }: { href: string; iconClass: string; label: string }) {
  return (
    <div className={styles.social}>
      <a className={styles.socialLink} href={href} target="_blank" rel="noopener" aria-label={label}>
        <div className={`${styles.socialIcon} ${iconClass}`} />
      </a>
    </div>
  );
}

/** Grade's X, LinkedIn and Instagram links (Framer "Social Link" ×3). */
export function SocialLinks() {
  return (
    <div className={styles.root}>
      <Social href={SOCIAL_PROFILES.x} iconClass={styles.iconX} label="X" />
      <Social href={SOCIAL_PROFILES.linkedin} iconClass={styles.iconLinkedin} label="LinkedIn" />
      <Social href={SOCIAL_PROFILES.instagram} iconClass={styles.iconInstagram} label="Instagram" />
    </div>
  );
}
