import type { Metadata } from "next";
import "./globals.css";

const metadataBase =
  typeof process.env.NEXT_PUBLIC_SITE_URL === "string"
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : new URL("https://blogs.grade.capital");

export const metadata: Metadata = {
  metadataBase,
  title: "Knowledge Hub for Crypto | Grade Capital",
  description:
    "Intelligence-driven insights for the Crypto Economy. Research, analysis, and market intelligence for institutional investors and financial decision-makers.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    locale: "en_IN",
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
