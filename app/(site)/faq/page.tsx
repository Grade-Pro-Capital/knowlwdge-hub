import type { Metadata } from "next";
import { Footer, FOOTER_SVG_IDS } from "../components/Footer";
import { Header } from "../components/Header";
import { SvgTemplates } from "../components/SvgTemplates";
import { FAQ_PAGE_JSON_LD } from "../structured-data";
import styles from "./FaqPage.module.css";

const TITLE = "FAQs - Grade Capital Crypto Derivatives Fund India";
const DESCRIPTION =
  "Answers to common questions about Grade Capital: how it works, security, withdrawals, compliance, and crypto derivatives tax in India.";
const OG_IMAGE = "https://framerusercontent.com/images/W6XAt6XNeTDRk5Kb4gHLLIRoZM.png";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/faq" },
  openGraph: { type: "website", url: "/faq", title: TITLE, description: DESCRIPTION, images: OG_IMAGE },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: OG_IMAGE },
};

type Faq = { n: string; q: string; a: string; link: string; href: string; note?: string };

// Framer injects this list with custom code after load; here it is server-rendered.
// Text and links are copied verbatim (including the /education link, which 404s on Framer too).
const FAQS: Faq[] = [
  {
    n: "01",
    q: "What is Grade Capital?",
    a: "Grade Capital is India’s first professionally managed crypto derivatives fund. Unlike exchanges where you trade individual coins, Grade Capital actively manages diversified crypto baskets using futures and options strategies — including hedged positions that can generate returns in both rising and falling markets.",
    link: "Learn more about us →",
    href: "/",
  },
  {
    n: "02",
    q: "How does investing through Grade Capital work?",
    a: "Complete PAN-linked KYC verification through our app in under 30 seconds. Invest a minimum of ₹12,000 via UPI, IMPS, or NEFT. Your INR is converted to USDT and allocated to actively managed crypto derivative baskets. NAV is calculated daily and visible in your app dashboard.",
    link: "Learn more →",
    href: "/",
  },
  {
    n: "03",
    q: "How is it different from buying crypto on an exchange?",
    a: "On an exchange, you trade individual coins yourself. Grade Capital offers professional management — our team manages diversified crypto derivative baskets using futures and options strategies, including hedged positions designed to perform across market conditions. You invest in INR; we handle everything.",
    link: "Learn more →",
    href: "/",
  },
  {
    n: "04",
    q: "How are returns taxed?",
    a: "Grade Capital uses crypto derivatives classified as speculative business income under Sections 43(5) and 73 of the Income Tax Act. The 30% VDA tax under Section 115BBH does not apply. Returns are taxed at your slab rate, with expense deductions and losses eligible for carry-forward up to four years. Report under ITR-3.",
    link: "Learn more →",
    href: "/education",
    note: "Tax treatment depends on individual circumstances.",
  },
  {
    n: "05",
    q: "How is my investment kept secure?",
    a: "Assets are held with Fireblocks using MPC-based wallets, 80% cold storage, SOC 2 Type II and ISO 27001 certifications with insurance from A-rated carriers. KYC is PAN-linked through HyperVerge. Every transaction is traceable on public blockchains with data on India-based servers.",
    link: "Learn more →",
    href: "/",
  },
  {
    n: "06",
    q: "What returns has Grade Capital generated?",
    a: "Since inception on 1 Jan 2023, NAV has grown from $10.00 to $119.02 USDT as of 1 Dec 2025 — an absolute return of 1,090.20% and CAGR of 133.83%. Positive months in 25 of 36 (69.4%), Sharpe Ratio of 1.71 vs Bitcoin’s 0.96. All figures reflect actual live fund performance.",
    link: "View performance →",
    href: "/",
    note: "Past performance is not indicative of future results.",
  },
  {
    n: "07",
    q: "How do I start investing?",
    a: "Download the Grade Capital app on Android or iOS and complete PAN-linked KYC in under 30 seconds. Choose from available crypto derivative baskets and invest minimum ₹12,000 through UPI, IMPS, or NEFT. Your INR is converted to USDT and deployed into your selected basket.",
    link: "Complete your KYC →",
    href: "/",
  },
  {
    n: "08",
    q: "How do I withdraw?",
    a: "Submit a redemption request through the app. Holdings are converted from USDT to INR at prevailing rates and credited to your bank account within 48–72 hours. Lock-in periods vary by basket, typically 6 to 12 months.",
    link: "Learn more →",
    href: "/",
  },
];

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_PAGE_JSON_LD) }} />
      <div className={styles.page}>
        <div className={styles.banner}>
          <h1 className={`preset-94fo1t ${styles.title}`}>Frequently Asked Questions</h1>
        </div>

        <div>
          <div className={styles.list}>
            {FAQS.map((faq) => (
              <div key={faq.n} className={styles.item}>
                <div className={styles.number}>{faq.n}</div>
                <div className={styles.question}>{faq.q}</div>
                <div className={styles.answer}>{faq.a}</div>
                <a href={faq.href} className={styles.link}>
                  {faq.link}
                </a>
                {faq.note && <div className={styles.note}>{faq.note}</div>}
              </div>
            ))}
          </div>
        </div>

        <Header zIndex={10} logoSizes="125px" />

        <div className={styles.footerSlot}>
          <Footer activeLegal="anti-laundering" logoSizes="calc(min(1200px / 1.205, 1200px) * 0.1548)" />
        </div>
      </div>
      <SvgTemplates ids={FOOTER_SVG_IDS} />
    </>
  );
}
