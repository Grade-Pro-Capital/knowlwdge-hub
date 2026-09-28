import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/db";
import { getSubscriberByToken } from "@/app/lib/email/tokens";
import { getBaseUrl } from "@/app/lib/seo";

/** Idempotently soft-unsubscribe by token. Returns true if a subscriber matched. */
async function unsubscribeByToken(token: string | null): Promise<boolean> {
  const sub = await getSubscriberByToken(token);
  if (!sub) return false;
  if (!sub.unsubscribedAt) {
    await prisma.newsletterSubscription.update({
      where: { id: sub.id },
      data: { unsubscribedAt: new Date() },
    });
  }
  return true;
}

/**
 * RFC 8058 one-click unsubscribe target (referenced by the List-Unsubscribe
 * header). Gmail/Apple POST here with an empty/`List-Unsubscribe=One-Click`
 * body. Always respond 200 so we don't leak token validity.
 */
export async function POST(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  await unsubscribeByToken(token);
  return new NextResponse(null, { status: 200 });
}

/** GET fallback — unsubscribe, then send the human to the confirmation page. */
export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");
  await unsubscribeByToken(token);
  const url = `${getBaseUrl()}/unsubscribe?token=${encodeURIComponent(token ?? "")}`;
  return NextResponse.redirect(url);
}
