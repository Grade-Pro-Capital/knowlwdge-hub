import type { Metadata } from "next";
import { Suspense } from "react";
import { getBaseUrl } from "@/app/lib/seo";
import { JsonLdScript } from "@/app/components/JsonLdScript";
import { organizationJsonLd, webSiteJsonLd } from "@/app/lib/jsonLd";

const base = getBaseUrl();
const canonical = `${base}/`;
const ogImage = `${base}/og-homepage.png`;

export const metadata: Metadata = {
  title: "Knowledge Hub for Crypto | Grade Capital",
  description:
    "Research, analysis, and market intelligence for crypto investors in India. Expert insights on Bitcoin, Ethereum, and digital asset regulations.",
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
    title: "Knowledge Hub for Crypto | Grade Capital",
    description:
      "Research, analysis, and market intelligence for crypto investors in India.",
    url: canonical,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Grade Capital Knowledge Hub",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@GradeCapital",
    title: "Knowledge Hub for Crypto | Grade Capital",
    description:
      "Research, analysis, and market intelligence for crypto investors in India.",
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
      <JsonLdScript data={organizationJsonLd()} />
      <JsonLdScript data={webSiteJsonLd()} />
      <Suspense fallback={null}>{children}</Suspense>
    </>
  );
}
