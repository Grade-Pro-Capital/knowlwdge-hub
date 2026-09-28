/**
 * The one Organization / WebSite description of Grade Capital (schema.org JSON-LD),
 * emitted on every page of the main site and the blog. Built from the two blocks
 * Framer's custom code emitted, merged, with conflicts resolved:
 * - social profiles are the ones the site footer links to;
 * - the logo is served from our own domain (Framer's CDN copy goes away with Framer);
 * - navigation lists the pages the site really has.
 */
import { getBaseUrl } from "./seo";

/** Grade's social profiles, as linked in the site footer. */
export const SOCIAL_PROFILES = {
  x: "https://x.com/gradecapital",
  linkedin: "https://www.linkedin.com/company/grade-capital/",
  instagram: "https://www.instagram.com/gradecapital/",
} as const;

/** Logo file used in structured data (512×186, transparent PNG). */
const LOGO = { path: "/site/images/MrzZ5h6uhrEkJHMTQ4BPaI7ep8@512.png", width: 512, height: 186 };

export function organizationId(): string {
  return `${getBaseUrl()}/#organization`;
}

export function logoUrl(): string {
  return `${getBaseUrl()}${LOGO.path}`;
}

export function siteGraphJsonLd(): object {
  const base = getBaseUrl();
  const org = organizationId();
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": org,
        name: "Grade Capital",
        legalName: "Atlantease Ventures Inc",
        alternateName: ["Atlantease Ventures", "Grade Capital Crypto"],
        url: base,
        logo: {
          "@type": "ImageObject",
          "@id": `${base}/#logo`,
          url: logoUrl(),
          contentUrl: logoUrl(),
          width: LOGO.width,
          height: LOGO.height,
          caption: "Grade Capital",
        },
        image: { "@id": `${base}/#logo` },
        description:
          "India's first structured crypto derivatives fund. Professionally managed crypto portfolios using futures and options strategies with potential tax advantages under Indian tax law.",
        foundingDate: "2023-01-01",
        founder: { "@type": "Person", name: "Anubhav Aggarwal" },
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "Customer Service",
            email: "hi@grade.capital",
            telephone: "+91-8058071055",
            availableLanguage: ["English"],
            url: `${base}/support`,
            areaServed: "Worldwide",
          },
          {
            "@type": "ContactPoint",
            contactType: "Customer Support",
            telephone: "+91-9876365657",
            availableLanguage: ["English"],
            areaServed: "IN",
          },
        ],
        address: [
          {
            "@type": "PostalAddress",
            "@id": `${base}/#address-registered-india`,
            name: "Registered Office (India)",
            streetAddress: "704, 7th Floor Sfc 16 Palm Court, Industrial Estate",
            addressLocality: "Gurgaon",
            addressRegion: "Haryana",
            postalCode: "122007",
            addressCountry: "IN",
          },
          {
            "@type": "PostalAddress",
            "@id": `${base}/#address-operations-india`,
            name: "Operations Office (India)",
            streetAddress: "Office 530, Spaze I Tech, Sector 49",
            addressLocality: "Gurugram",
            addressRegion: "Haryana",
            postalCode: "122001",
            addressCountry: "IN",
          },
          {
            "@type": "PostalAddress",
            "@id": `${base}/#address-usa`,
            name: "International Operations (USA)",
            streetAddress: "8 THE GREEN STE, A",
            addressLocality: "Dover",
            addressRegion: "DE",
            postalCode: "19901",
            addressCountry: "US",
          },
        ],
        sameAs: [
          SOCIAL_PROFILES.linkedin,
          SOCIAL_PROFILES.instagram,
          SOCIAL_PROFILES.x,
          "https://www.wikidata.org/wiki/Q139369923",
          "https://play.google.com/store/apps/details?id=com.grade.capital",
        ],
        knowsAbout: [
          "cryptocurrency",
          "crypto derivatives",
          "futures trading",
          "options trading",
          "asset management",
          "GIFT City",
          "IFSCA",
          "crypto tax India",
        ],
        areaServed: { "@type": "Country", name: "India" },
      },
      {
        "@type": "WebSite",
        "@id": `${base}/#website`,
        url: base,
        name: "Grade Capital",
        publisher: { "@id": org },
        inLanguage: "en-IN",
      },
      {
        "@type": "Service",
        "@id": `${base}/#service`,
        name: "Grade Capital Crypto Investment Services",
        provider: { "@id": org },
        areaServed: { "@type": "Place", name: "Worldwide" },
        serviceType: "Cryptocurrency Investment Management",
        category: "Financial Services",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Main Navigation",
        hasPart: [
          { name: "Home", path: "/" },
          { name: "Support", path: "/support" },
          { name: "FAQ", path: "/faq" },
          { name: "Blogs", path: "/blogs" },
          { name: "Privacy Policy", path: "/privacy-policy" },
          { name: "Terms of Use", path: "/terms-of-use" },
          { name: "Investor Agreement", path: "/investor-agreement" },
          { name: "AML & KYC Policy", path: "/anti-laundering" },
        ].map(({ name, path }) => ({ "@type": "WebPage", name, url: path === "/" ? base : `${base}${path}` })),
      },
    ],
  };
}
