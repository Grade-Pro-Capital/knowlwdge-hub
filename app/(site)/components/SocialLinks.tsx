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
      <Social href="https://x.com/gradecapital" iconClass={styles.iconX} label="X" />
      <Social href="https://www.linkedin.com/company/grade-capital/" iconClass={styles.iconLinkedin} label="LinkedIn" />
      <Social href="https://www.instagram.com/gradecapital/" iconClass={styles.iconInstagram} label="Instagram" />
    </div>
  );
}
