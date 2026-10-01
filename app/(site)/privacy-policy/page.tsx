import { LegalPage } from "../_legal/LegalPage";
import { pageMetadata, SITE_PAGES } from "../seo";
import { PrivacyPolicyText } from "./PrivacyPolicyText";

export const metadata = pageMetadata(SITE_PAGES.privacyPolicy);

export default function PrivacyPolicyPage() {
  return (
    <LegalPage page={SITE_PAGES.privacyPolicy} legal="privacy-policy" title="Privacy Policy ">
      <PrivacyPolicyText />
    </LegalPage>
  );
}
