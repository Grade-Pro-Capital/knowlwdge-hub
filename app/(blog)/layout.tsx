import type { Metadata } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import "../globals.css";
import { SITE_TITLE, SITE_DESCRIPTION, SITE_NAME_OG } from "@/app/lib/siteConfig";
import { DEFAULT_OG_IMAGE, getBaseUrl } from "@/app/lib/seo";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const GTM_ID = "GTM-MWXB6RB3";

// NEXT_PUBLIC_SITE_URL, normalised (and validated) in app/lib/seo.ts.
const base = getBaseUrl();
const metadataBase = new URL(base);
const defaultOgImage = `${base}${DEFAULT_OG_IMAGE}`;

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
