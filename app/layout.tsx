import type { Metadata } from "next";
import "./globals.css";
import { SITE_TITLE, SITE_DESCRIPTION, SITE_NAME_OG } from "@/app/lib/siteConfig";

const metadataBase =
  typeof process.env.NEXT_PUBLIC_SITE_URL === "string"
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : new URL("https://blogs.grade.capital");
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
    <html lang="en-IN" className="dark">
      <body
        className="min-h-screen bg-[#020100] text-white antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
