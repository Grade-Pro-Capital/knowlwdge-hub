import type { Metadata } from "next";
import { Footer, FOOTER_SVG_IDS } from "../components/Footer";
import { Header } from "../components/Header";
import { SocialLinks } from "../components/SocialLinks";
import { SvgTemplates } from "../components/SvgTemplates";
import { LightRays } from "./LightRays";
import { SupportForm } from "./SupportForm";
import styles from "./SupportPage.module.css";

const TITLE = "Contact Grade Capital - Support & Free Consultation";
const DESCRIPTION =
  "Reach Grade Capital's team via email or call. Office in Sector 49, Gurugram. Get a free consultation on crypto derivatives investing in India.";
const OG_IMAGE = "https://framerusercontent.com/images/W6XAt6XNeTDRk5Kb4gHLLIRoZM.png";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/support" },
  openGraph: { type: "website", url: "/support", title: TITLE, description: DESCRIPTION, images: OG_IMAGE },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: OG_IMAGE },
};

export default function SupportPage() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.intro}>
              <h1 className={`preset-94fo1t ${styles.appear} ${styles.title}`}>Support</h1>
              <h5 className={`preset-1o153d5 ${styles.appear} ${styles.subtitle}`}>
                Awesome people at Grade Capital are ready to help you out
              </h5>
            </div>

            <div className={styles.card}>
              <div className={styles.cardTop}>
                <div className={styles.group}>
                  <p className={styles.label}>mail</p>
                  <div className={styles.value}>
                    <p className="preset-d7059j">hi@Grade.Capital</p>
                  </div>
                </div>
                <div className={styles.group}>
                  <p className={styles.label}>Phone number</p>
                  <div className={styles.value}>
                    <p className="preset-d7059j">+91 8058071055</p>
                    <p className="preset-d7059j">+91 9876365657</p>
                  </div>
                </div>
              </div>
              <div className={styles.cardBottom}>
                <div className={styles.office}>
                  <p className={styles.label}>{"Operations Office (India) "}</p>
                  <div className={styles.officeText}>
                    <p className="preset-d7059j">Office 530, Spaze I Tech, Sector 49, Gurugram</p>
                  </div>
                </div>
                <div className={styles.office}>
                  <p className={styles.label}>International Operations (USA)</p>
                  <div className={styles.usaText}>
                    <p className="preset-d7059j">8 THE GREEN STE, A</p>
                    <p className="preset-d7059j">DOVER, DE, 19901</p>
                    <p className="preset-d7059j">United States of America</p>
                  </div>
                </div>
                <SocialLinks />
              </div>
            </div>
          </div>

          <SupportForm />
        </div>

        <Footer />
        <Header slideUpAtFooter />

        {/* Animated background; above the footer in stacking order, as on Framer. */}
        <div className={styles.rays}>
          <LightRays
            color={[32 / 255, 34 / 255, 39 / 255]}
            backgroundColor="var(--gc-bg)"
            intensity={50}
            rays={22}
            reach={25}
            position={48}
            speed={10}
            style={{ height: "100%", maxWidth: "100%", width: "100%" }}
          />
        </div>
      </div>
      <SvgTemplates ids={FOOTER_SVG_IDS} />
    </>
  );
}
