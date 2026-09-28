import Link from "next/link";
import styles from "./NavText.module.css";

type Props = {
  label: string;
  /** Omit for Framer's "Disable" state (rendered as a non-navigating <a>). */
  href?: string;
  variant?: "default" | "active" | "disable";
};

/** Framer's "Header text" component: header nav, mobile menu and footer sitemap links. */
export function NavText({ label, href, variant = "default" }: Props) {
  const className = [styles.link, variant === "active" && styles.active, variant === "disable" && styles.disable]
    .filter(Boolean)
    .join(" ");
  const text = <p className={styles.text}>{label}</p>;

  let link;
  if (!href || variant === "disable") {
    link = <a className={className}>{text}</a>;
  } else {
    link = (
      <Link className={className} href={href}>
        {text}
      </Link>
    );
  }
  return <div className={styles.item}>{link}</div>;
}
