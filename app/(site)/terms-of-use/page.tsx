import { LegalPage } from "../_legal/LegalPage";
import { pageMetadata, SITE_PAGES } from "../seo";
import { TermsOfUseText } from "./TermsOfUseText";

export const metadata = pageMetadata(SITE_PAGES.termsOfUse);

export default function TermsOfUsePage() {
  return (
    <LegalPage page={SITE_PAGES.termsOfUse} legal="terms-of-use" title="Terms of Use">
      <TermsOfUseText />
    </LegalPage>
  );
}
