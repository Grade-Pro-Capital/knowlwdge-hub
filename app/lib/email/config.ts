/**
 * Central config + brand tokens for outgoing emails (welcome + new-post
 * newsletter). Mirrors the site palette (globals.css / lib/ui.ts) so emails
 * look on-brand, and centralizes URLs so links are easy to change.
 */
import { getBaseUrl } from "@/app/lib/seo";

/** Canonical blog URL — used for post links, logo, images. No trailing slash. */
export const SITE_URL = getBaseUrl(); // https://blogs.grade.capital
/** Marketing platform (About/Contact/company links). */
export const PLATFORM_URL = "https://www.grade.capital";

/** From address — its domain MUST be verified in Resend (SPF/DKIM). */
export const EMAIL_FROM =
  process.env.EMAIL_FROM?.trim() ||
  "Grade Capital <newsletter@blogs.grade.capital>";
export const EMAIL_REPLY_TO = process.env.EMAIL_REPLY_TO?.trim() || undefined;

/** Store links — default to "#" placeholders until the apps are live. */
export const APP_STORE_URL = process.env.APP_STORE_URL?.trim() || "#";
export const PLAY_STORE_URL = process.env.PLAY_STORE_URL?.trim() || "#";

/** Brand palette (hex only — email clients don't reliably support CSS vars). */
export const COLORS = {
  gold: "#FDBE35",
  goldGradTop: "#FDDC97",
  goldGradBottom: "#FEBE2F",
  dark: "#020100",
  card: "#0d0d0c",
  cyan: "#35DAFF",
  footerBg: "#141414",
  text: "#ffffff",
  textMuted: "rgba(255,255,255,0.72)",
  textFaint: "rgba(255,255,255,0.45)",
  border: "rgba(255,255,255,0.10)",
} as const;

export const BRAND = {
  name: "Grade Capital",
  tagline: "Intelligence-driven insights for the Crypto Economy",
  logoUrl: `${SITE_URL}/logo.png`,
  blogUrl: SITE_URL,
  contactUrl: `${PLATFORM_URL}/contact`,
  legal:
    "© 2026 Atlantease Ventures Inc (Trademark: 'Grade' & 'GRADE'). All rights reserved.",
  // TODO: replace with the real registered mailing address (required for CAN-SPAM).
  address: "Atlantease Ventures Inc",
  social: {
    twitter: "https://twitter.com/GradeCapital",
    linkedin: "https://www.linkedin.com/company/grade-capital/",
    instagram: "https://www.instagram.com/gradecapital",
  },
  appStoreBadge: `${SITE_URL}/email/app-store-badge.png`,
  playStoreBadge: `${SITE_URL}/email/google-play-badge.png`,
} as const;
