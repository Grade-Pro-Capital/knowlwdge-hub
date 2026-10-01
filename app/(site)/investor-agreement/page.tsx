import { LegalPage } from "../_legal/LegalPage";
import { pageMetadata, SITE_PAGES } from "../seo";
import { InvestorAgreementText } from "./InvestorAgreementText";

export const metadata = pageMetadata(SITE_PAGES.investorAgreement);

export default function InvestorAgreementPage() {
  return (
    <LegalPage page={SITE_PAGES.investorAgreement} legal="investor-agreement" title="Investor Agreement">
      <InvestorAgreementText />
    </LegalPage>
  );
}
