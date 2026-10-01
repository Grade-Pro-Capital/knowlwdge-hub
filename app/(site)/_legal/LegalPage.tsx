import Link from "next/link";
import type { ReactNode } from "react";
import { Footer, FOOTER_SVG_IDS, type LegalPage as LegalKey } from "../components/Footer";
import { Header } from "../components/Header";
import { SvgTemplates } from "../components/SvgTemplates";
import { pageBreadcrumbJsonLd, type SitePage } from "../seo";
import s from "./LegalPage.module.css";

// Framer's logo `sizes` on the legal pages (header and footer). The privacy policy's
// phone value differs from the other three.
const SIZES_WIDE = "(min-width: 1200px) max(125px, calc(min(100vw / 1.205, 1200px) * 0.1548))";
const SIZES_TABLET = "(min-width: 810px) and (max-width: 1199.98px) max(99px, calc(min(100vw / 1.205, 1200px) * 0.1548))";
const LOGO_SIZES = `${SIZES_WIDE}, ${SIZES_TABLET}, (max-width: 809.98px) max(99px, 181px)`;
const PRIVACY_LOGO_SIZES = `${SIZES_WIDE}, ${SIZES_TABLET}, (max-width: 809.98px) max(99px, calc(min(100vw / 1.205, 1200px) * 0.1548))`;

type LegalPageProps = {
  page: SitePage;
  /** The footer link highlighted on this page. */
  legal: LegalKey;
  /** The banner title, exactly as Framer shows it. */
  title: string;
  children: ReactNode;
};

/**
 * Framer's legal page layout (Privacy Policy, Terms of Use, Investor Agreement, AML
 * policy): the header slides up as the footer arrives, the title fades in, then the
 * text column and the footer.
 */
export function LegalPage({ page, legal, title, children }: LegalPageProps) {
  const logoSizes = legal === "privacy-policy" ? PRIVACY_LOGO_SIZES : LOGO_SIZES;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageBreadcrumbJsonLd(page)) }}
      />
      <div className={s.page}>
        <Header zIndex={10} slideUpAtFooter logoSizes={logoSizes} />
        <div className={s.banner}>
          <h1 className={`preset-94fo1t ${s.title}`}>{title}</h1>
        </div>
        <div className={s.content}>{children}</div>
        <Footer activeLegal={legal} zIndex={6} logoSizes={logoSizes} />
      </div>
      <SvgTemplates ids={FOOTER_SVG_IDS} />
    </>
  );
}

// ---------- Building blocks for the page texts ----------

/** A numbered part of the text: its heading and paragraphs, 16px apart (some 24px). */
export function Section({
  id,
  gap = 16,
  centered = false,
  children,
}: {
  id?: string;
  gap?: number;
  centered?: boolean;
  children: ReactNode;
}) {
  return (
    <div
      id={id}
      className={centered ? `${s.section} ${s.centered}` : s.section}
      style={gap === 16 ? undefined : { gap }}
    >
      {children}
    </div>
  );
}

/** A section heading ("1.  Introduction"). */
export function Heading({ children }: { children: ReactNode }) {
  return (
    <div className={s.text}>
      <p className="preset-po693k">{children}</p>
    </div>
  );
}

/** Body text: 14px grey paragraphs and lists, with Framer's rich-text spacing. */
export function Text({ children }: { children: ReactNode }) {
  return <div className={`preset-d7059j ${s.text}`}>{children}</div>;
}

/** Shown at tablet and desktop widths only (Framer's per-breakpoint text). */
export function NotPhone({ children }: { children: ReactNode }) {
  return <div className={s.notPhone}>{children}</div>;
}

/** Shown at phone widths only. */
export function PhoneOnly({ children }: { children: ReactNode }) {
  return <div className={s.phoneOnly}>{children}</div>;
}

/**
 * A link inside the text. Gold by default (Framer's link style); `tone` copies
 * Framer's unstyled links: blue and underlined, or the surrounding text colour.
 */
export function LegalLink({
  href,
  tone,
  children,
}: {
  href: string;
  tone?: "blue" | "text";
  children: ReactNode;
}) {
  const className = tone === "blue" ? s.linkBlue : tone === "text" ? s.linkText : s.link;
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={className} rel={href.startsWith("mailto:") ? "noopener" : undefined}>
      {children}
    </a>
  );
}
