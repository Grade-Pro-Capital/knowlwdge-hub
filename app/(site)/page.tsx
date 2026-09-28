import { Footer, FOOTER_SVG_IDS } from "./components/Footer";
import { Header } from "./components/Header";
import { SvgTemplates } from "./components/SvgTemplates";
import { DashboardPreview } from "./_home/DashboardPreview";
import { DeliveringWithSecurity } from "./_home/DeliveringWithSecurity";
import { GradeForGood } from "./_home/GradeForGood";
import { GrowthYouSee } from "./_home/GrowthYouSee";
import { Hero } from "./_home/Hero";
import { FreeConsultationAnchor, TalkToAnExpert } from "./_home/TalkToAnExpert";
import { WhatsAppButton } from "./_home/WhatsAppButton";
import { WhyGradeCapital } from "./_home/WhyGradeCapital";
import styles from "./_home/HomePage.module.css";
import { pageMetadata, SITE_PAGES } from "./seo";

export const metadata = pageMetadata(SITE_PAGES.home);

export default function HomePage() {
  return (
    <>
      <div className={styles.page}>
        <Header zIndex={10} appear slideUpAtFooter />
        <Hero />
        <DashboardPreview />
        <WhyGradeCapital />
        <DeliveringWithSecurity />
        <GrowthYouSee />
        <TalkToAnExpert />
        <FreeConsultationAnchor />
        <GradeForGood />
        <Footer zIndex={6} />
        <WhatsAppButton />
      </div>
      <SvgTemplates ids={FOOTER_SVG_IDS} />
    </>
  );
}
