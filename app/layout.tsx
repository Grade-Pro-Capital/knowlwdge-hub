import type { Metadata } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import "./globals.css";
import { SITE_TITLE, SITE_DESCRIPTION, SITE_NAME_OG } from "@/app/lib/siteConfig";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const GTM_ID = "GTM-MWXB6RB3";

const FALLBACK_SITE_URL = "https://blogs.grade.capital";
// Tolerate a scheme-less NEXT_PUBLIC_SITE_URL (e.g. "blogs.grade.capital"): default
// to https:// rather than throwing "Invalid URL" and 500-ing every route.
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const normalizedSiteUrl = rawSiteUrl
  ? /^https?:\/\//i.test(rawSiteUrl)
    ? rawSiteUrl
    : `https://${rawSiteUrl}`
  : FALLBACK_SITE_URL;
let metadataBase: URL;
try {
  metadataBase = new URL(normalizedSiteUrl);
} catch {
  metadataBase = new URL(FALLBACK_SITE_URL);
}
const base = metadataBase.origin;
const defaultOgImage = `${base}/og-default.png`;

export const metadata: Metadata = {
  metadataBase,
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    locale: "en_IN",
    siteName: SITE_NAME_OG,
    type: "website",
    images: [{ url: defaultOgImage, width: 1200, height: 630, alt: SITE_NAME_OG }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`dark ${poppins.variable}`}>
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body
        className="min-h-screen bg-[#020100] font-sans text-white antialiased"
        suppressHydrationWarning
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
