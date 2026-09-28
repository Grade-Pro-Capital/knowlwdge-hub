import type { Metadata } from "next";
import { breadcrumbJsonLd } from "@/app/lib/jsonLd";
import { getBaseUrl } from "@/app/lib/seo";

/**
 * SEO for every main-site page, in one place: page metadata, breadcrumb structured
 * data and the sitemap all read from here. Titles and descriptions are the ones the
 * Framer site serves. Add a page here when it is built.
 */
export type SitePage = {
  path: string;
  /** Breadcrumb / navigation name. */
  name: string;
  title: string;
  description: string;
};

export const SITE_PAGES = {
  home: {
    path: "/",
    name: "Home",
    title: "Grade Capital - India's First Crypto Derivatives Fund",
    description:
      "India's first crypto derivatives fund. Tax-efficient investing with daily NAV, Fireblocks custody & ISO 9001 certification. Start investing today.",
  },
  support: {
    path: "/support",
    name: "Support",
    title: "Contact Grade Capital - Support & Free Consultation",
    description:
      "Reach Grade Capital's team via email or call. Office in Sector 49, Gurugram. Get a free consultation on crypto derivatives investing in India.",
  },
  faq: {
    path: "/faq",
    name: "FAQ",
    title: "FAQs - Grade Capital Crypto Derivatives Fund India",
    description:
      "Answers to common questions about Grade Capital: how it works, security, withdrawals, compliance, and crypto derivatives tax in India.",
  },
} satisfies Record<string, SitePage>;

/** Share image for main-site pages (1200×630, the one Framer serves). */
const OG_IMAGE = "/site/images/W6XAt6XNeTDRk5Kb4gHLLIRoZM.png";

export function pageUrl(page: SitePage): string {
  const base = getBaseUrl();
  return page.path === "/" ? `${base}/` : `${base}${page.path}`;
}

export function pageMetadata(page: SitePage): Metadata {
  const url = pageUrl(page);
  const image = { url: `${getBaseUrl()}${OG_IMAGE}`, width: 1200, height: 630, alt: "Grade Capital" };
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: "Grade Capital",
      title: page.title,
      description: page.description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [image.url],
    },
  };
}

/** Home › Page breadcrumb data, as Framer emits on every page except home. */
export function pageBreadcrumbJsonLd(page: SitePage): object {
  return breadcrumbJsonLd([
    { name: SITE_PAGES.home.name, url: getBaseUrl() },
    { name: page.name, url: pageUrl(page) },
  ]);
}
