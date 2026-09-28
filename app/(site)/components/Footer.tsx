import Link from "next/link";
import { FramerImage } from "./FramerImage";
import { LogoImage } from "./Logo";
import { NavText } from "./NavText";
import { SocialLinks } from "./SocialLinks";
import { SoonBadge } from "./SoonBadge";
import { SvgUse } from "./SvgTemplates";
import styles from "./Footer.module.css";

/** Badge drawings per layout (Framer exports one per breakpoint). */
export const FOOTER_SVG_IDS = [
  "svg502671136_10340", // App Store — desktop
  "svg217202859_7468", // Google Play — desktop
  "svg315006278_10322", // App Store — tablet
  "svg-1179779190_7447", // Google Play — tablet
  "svg1905358123_10264", // App Store — phone
  "svg766702060_7467", // Google Play — phone
];

type LegalPage = "privacy-policy" | "terms-of-use" | "investor-agreement" | "anti-laundering";

const LEGAL_LINKS: { page: LegalPage; label: string }[] = [
  { page: "privacy-policy", label: "Privacy Policy" },
  { page: "terms-of-use", label: "Terms and Conditions" },
  { page: "investor-agreement", label: "Investor Agreement" },
  { page: "anti-laundering", label: "Anti Money Laundering Policy" },
];

function StoreBadge({ href, ids }: { href: string; ids: [string, string, string] }) {
  return (
    <a className={styles.storeLink} href={href} target="_blank" rel="noopener">
      <div className={styles.badge}>
        <div className={styles.badgeDesktop} style={{ width: "100%", height: "100%" }}>
          <SvgUse id={ids[0]} />
        </div>
        <div className={styles.badgeTablet} style={{ width: "100%", height: "100%" }}>
          <SvgUse id={ids[1]} />
        </div>
        <div className={styles.badgePhone} style={{ width: "100%", height: "100%" }}>
          <SvgUse id={ids[2]} />
        </div>
      </div>
    </a>
  );
}

type FooterProps = {
  /** Legal link Framer highlights on the current page (it also highlights AML on /faq). */
  activeLegal?: LegalPage;
  /** Stacking order of Framer's footer container (home: 6, above the sticky sections). */
  zIndex?: number;
  /** Framer's `sizes` for the logo on this page, if it differs from the default. */
  logoSizes?: string;
};

/** Framer's "Footer" component. Needs <SvgTemplates ids={FOOTER_SVG_IDS} /> on the page. */
export function Footer({ activeLegal, zIndex, logoSizes }: FooterProps) {
  return (
    <footer id="footer" className={styles.root} style={{ zIndex }}>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.logo}>
              <LogoImage sizes={logoSizes} />
            </div>
            <div className={styles.stores}>
              <div className={styles.storeRow}>
                {/* Framer links the App Store badge to the home page. */}
                <StoreBadge
                  href="https://grade.capital/"
                  ids={["svg502671136_10340", "svg315006278_10322", "svg1905358123_10264"]}
                />
                <StoreBadge
                  href="https://play.google.com/store/search?q=grade+capital"
                  ids={["svg217202859_7468", "svg-1179779190_7447", "svg766702060_7467"]}
                />
              </div>
            </div>
          </div>

          <div className={styles.body}>
            <div className={styles.addresses}>
              <div className={`${styles.addressGroup} ${styles.addressGroupFixed}`}>
                <p className={styles.label}>{"Registered Office (India)\u00a0"}</p>
                <div className={styles.address}>
                  <p>Gradepro Technologies Private Limited</p>
                  <p>704, 7th Floor Sfc 16 Palm Court,</p>
                  <p>Industrial Estate,</p>
                  <p>Gurgaon - 122007 Haryana IN</p>
                </div>
              </div>
              <div className={styles.addressGroup}>
                <p className={styles.label}>{"Operations Office (India)\u00a0"}</p>
                <div className={`${styles.address} ${styles.addressShort}`}>
                  <p>Office 530, Spaze I Tech, Sector 49, Gurugram</p>
                </div>
              </div>
              <div className={styles.addressGroup}>
                <p className={styles.label}>International Operations (USA)</p>
                <div className={`${styles.address} ${styles.addressNoWrap}`}>
                  <p>8 THE GREEN STE, A</p>
                  <p>DOVER, DE, 19901</p>
                  <p>United States of America</p>
                </div>
              </div>
            </div>

            <div className={styles.columns}>
              <div className={styles.linksColumn}>
                <div className={styles.linkSection}>
                  <p className={styles.label}>Sitemap</p>
                  <div className={styles.sitemap}>
                    <NavText href="/" label="Home" />
                    <div className={styles.educationRow}>
                      <NavText label="Education" variant="disable" />
                      <SoonBadge />
                    </div>
                    <NavText href="/support" label="Support" />
                  </div>
                </div>
                <div className={styles.linkSection}>
                  <p className={styles.label}>Social Links</p>
                  <SocialLinks />
                </div>
              </div>

              <div className={styles.registered}>
                <div className={styles.registeredHead}>
                  <p className={styles.label}>Registered with</p>
                </div>
                <div className={styles.registeredLogos}>
                  <div className={styles.elevate}>
                    <FramerImage
                      file="DXpKlRXJ3BMML9ICKKX0ZERdXag.png"
                      width={145}
                      height={48}
                      alt="Elevate Protocol"
                    />
                  </div>
                  <div className={styles.atlantease}>
                    <FramerImage
                      file="zaKeUn8O02eu1boEkqRvfAng.png"
                      width={1390}
                      height={930}
                      variants={[512, 1024]}
                      sizes="(min-width: 1200px) 135px, (min-width: 810px) and (max-width: 1199.98px) 135px, (max-width: 809.98px) max(min(100vw * 0.9, 1200px) - 219px, 1px)"
                      alt="Atlantease Ventures Inc."
                      fit="contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.legal}>
          <div className={styles.legalLinks}>
            {LEGAL_LINKS.map(({ page, label }, i) => (
              <div key={page} className={i === 0 ? `${styles.legalItem} ${styles.legalItemFixed}` : styles.legalItem}>
                <Link
                  className={activeLegal === page ? `${styles.legalLink} ${styles.legalActive}` : styles.legalLink}
                  href={`/${page}`}
                >
                  <p className={styles.legalText}>{label}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.notice}>
          <p className={styles.noticeText}>
            <strong>{"Important Notice for Investors: "}</strong>
            {
              "Ensure the security of your transactions by verifying the URL begins with 'https://'. Grade Capital's sole official website is https://www.grade.capital. Vigilance is key to preventing fraud. Protect yourself by staying informed."
            }
          </p>
        </div>

        <div className={styles.copyright}>
          <div className={styles.copyrightInner}>
            <div className={styles.copyrightBox}>
              {/* Trailing nbsp + space are in Framer's text and affect centring. */}
              <p className={styles.copyrightText}>
                {"© 2025 GRADEPRO TECHNOLOGIES Pvt Ltd. All rights reserved.\u00a0 "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
