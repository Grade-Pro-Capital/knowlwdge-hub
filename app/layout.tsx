import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Knowledge Hub for Crypto | GRAIZE Insights",
  description:
    "Intelligence-driven insights for the Crypto Economy. Research, analysis, and market intelligence for institutional investors and financial decision-makers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#020100] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
