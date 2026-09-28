import type { Metadata } from "next";
import Script from "next/script";
import { getBaseUrl } from "@/app/lib/seo";
import { siteGraphJsonLd } from "@/app/lib/siteSchema";
import "./fonts.css";
import "./text-presets.css";
import "./site.css";

/** Framer's Google Tag Manager container for the main site. */
const GTM_ID = "GTM-5F27HQZQ";

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  icons: {
    icon: [
      { url: "/site/images/7IFJ4rkSHQKKm0F2AxG35k4Hc4k.png", media: "(prefers-color-scheme: light)" },
      { url: "/site/images/BXBBqSnqHZFfPFE1GBC2c9bbT3U.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
  // Both Search Console verification tokens present on the Framer site.
  verification: {
    google: ["PyXi45w5PsK9gCWusZYjsLXDW-H75c7ld12X1qk8-ZI", "9kcl8pRedXCmV7gcaUa7tG_QtFWprmb5x2ifIpnfUOo"],
  },
  robots: { "max-image-preview": "large" },
};

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {/* Nothing is rendered into <head> by hand: browser extensions inject their own
          <script> tags there before hydration, which shifts React's matching of head
          children and causes hydration errors. Next.js still emits metadata into <head>. */}
      <body>
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* Sitewide Organization/WebSite structured data (valid anywhere in the document). */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(siteGraphJsonLd()) }} />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
