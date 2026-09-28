/**
 * Unsubscribe token helpers. Tokens are random 32-byte hex stored on the
 * subscription; the unsubscribe link/one-click endpoint look them up. No shared
 * secret is needed — the token itself is the capability.
 */
import { randomBytes } from "crypto";
import { prisma } from "@/app/lib/db";
import { SITE_URL } from "./config";

export function generateUnsubToken(): string {
  return randomBytes(32).toString("hex");
}

export async function getSubscriberByToken(token: string | null | undefined) {
  const t = token?.trim();
  if (!t) return null;
  // findFirst (not findUnique) because unsubscribeToken is intentionally not a
  // unique index — see the schema comment.
  return prisma.newsletterSubscription.findFirst({
    where: { unsubscribeToken: t },
  });
}

/** Return the subscriber's token, generating + persisting one if missing. */
export async function ensureUnsubToken(sub: {
  id: string;
  unsubscribeToken: string | null;
}): Promise<string> {
  if (sub.unsubscribeToken) return sub.unsubscribeToken;
  const token = generateUnsubToken();
  await prisma.newsletterSubscription.update({
    where: { id: sub.id },
    data: { unsubscribeToken: token },
  });
  return token;
}

export function unsubscribeUrl(token: string): string {
  return `${SITE_URL}/unsubscribe?token=${encodeURIComponent(token)}`;
}

/** One-click endpoint URL used in the List-Unsubscribe header. */
export function oneClickUnsubscribeUrl(token: string): string {
  return `${SITE_URL}/api/newsletter/unsubscribe?token=${encodeURIComponent(token)}`;
}

/** RFC 8058 headers so Gmail/Apple render a native one-click Unsubscribe. */
export function listUnsubscribeHeaders(token: string): Record<string, string> {
  return {
    "List-Unsubscribe": `<${oneClickUnsubscribeUrl(token)}>`,
    "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
  };
}
