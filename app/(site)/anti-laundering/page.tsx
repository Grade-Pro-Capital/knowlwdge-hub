import { LegalPage } from "../_legal/LegalPage";
import { pageMetadata, SITE_PAGES } from "../seo";
import { AntiLaunderingText } from "./AntiLaunderingText";

export const metadata = pageMetadata(SITE_PAGES.antiLaundering);

export default function AntiLaunderingPage() {
  return (
    <LegalPage page={SITE_PAGES.antiLaundering} legal="anti-laundering" title="Anti Laundering">
      <AntiLaunderingText />
    </LegalPage>
  );
}
