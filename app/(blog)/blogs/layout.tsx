import type { Metadata } from "next";
import { DEFAULT_OG_IMAGE, getBaseUrl } from "@/app/lib/seo";
import { SITE_TITLE, SITE_NAME_OG } from "@/app/lib/siteConfig";
import { JsonLdScript } from "@/app/components/JsonLdScript";
import { siteGraphJsonLd } from "@/app/lib/siteSchema";
import { BLOG_BASE } from "@/app/lib/blogPaths";
import { Header } from "@/app/(site)/components/Header";
import { Footer, FOOTER_SVG_IDS } from "@/app/(site)/components/Footer";
import { SvgTemplates } from "@/app/(site)/components/SvgTemplates";
import { CustomHeadTags } from "@/app/components/CustomHeadTags";
import { getSitewideHeadTags } from "@/app/lib/customHead";
// The main site's colour tokens, for its Header and Footer. Not site.css: its
// page-wide base styles would override the blog's own. Not fonts.css either: the
// blog's next/font Poppins (app/(blog)/layout.tsx) is registered as "Poppins" too,
// so loading both would download every Poppins file twice.
import "@/app/(site)/tokens.css";

const base = getBaseUrl();
const canonical = `${base}${BLOG_BASE}`;
const ogImage = `${base}${DEFAULT_OG_IMAGE}`;
const homeDescription =
  "Research, analysis, and market intelligence for crypto investors in India. Expert insights on Bitcoin, Ethereum, and digital asset regulations.";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: homeDescription,
  keywords: [
    "crypto India",
    "bitcoin research",
    "ethereum analysis",
    "crypto derivatives",
    "digital asset insights",
  ],
  alternates: {
    canonical,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    locale: "en_IN",
    siteName: SITE_NAME_OG,
    type: "website",
    title: SITE_TITLE,
    description: homeDescription,
    url: canonical,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: SITE_NAME_OG,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@GradeCapital",
    title: SITE_TITLE,
    description: homeDescription,
    images: [ogImage],
  },
};

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLdScript data={siteGraphJsonLd()} />
      <CustomHeadTags tags={await getSitewideHeadTags()} />
      {/* The main site's header and footer, so the blog reads as part of grade.capital. */}
      <Header zIndex={50} slideUpAtFooter current="/blogs" />
      {/* The header is fixed (it floats over the page), so keep its height clear. */}
      <div aria-hidden className="h-[68px] min-[1200px]:h-[78px]" />
      {/* No <Suspense> around the page: it would send the 200 status before an unknown
          article's notFound() runs, turning real 404s into soft 404s. */}
      {children}
      <Footer />
      <SvgTemplates ids={FOOTER_SVG_IDS} />
    </>
  );
}
