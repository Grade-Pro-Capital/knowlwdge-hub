import type { Metadata } from "next";
import { Suspense } from "react";
import { DEFAULT_OG_IMAGE, getBaseUrl } from "@/app/lib/seo";
import { SITE_TITLE, SITE_NAME_OG } from "@/app/lib/siteConfig";
import { JsonLdScript } from "@/app/components/JsonLdScript";
import { siteGraphJsonLd } from "@/app/lib/siteSchema";
import { BLOG_BASE } from "@/app/lib/blogPaths";

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

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLdScript data={siteGraphJsonLd()} />
      <Suspense fallback={null}>{children}</Suspense>
    </>
  );
}
