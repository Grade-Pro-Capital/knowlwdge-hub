import Link from "next/link";
import type { Metadata } from "next";
import { prisma } from "@/app/lib/db";
import { getSubscriberByToken } from "@/app/lib/email/tokens";
import { Logo } from "@/app/components/Logo";
import { ResubscribeButton } from "./ResubscribeButton";

// Reads a per-request token and mutates on load, so never cache.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Unsubscribe · Grade Capital",
  robots: { index: false, follow: false },
};

export default async function UnsubscribePage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;
  const sub = await getSubscriberByToken(token);

  // Soft-unsubscribe on load (the footer link is a direct click-to-unsubscribe).
  if (sub && !sub.unsubscribedAt) {
    await prisma.newsletterSubscription.update({
      where: { id: sub.id },
      data: { unsubscribedAt: new Date() },
    });
  }

  const valid = Boolean(sub);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#020100] px-4 text-center text-white">
      <div className="mb-8">
        <Logo />
      </div>

      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
        {valid ? (
          <>
            <h1 className="mb-3 text-2xl font-semibold">
              You&apos;ve been unsubscribed
            </h1>
            <p className="mb-1 text-sm leading-relaxed text-white/60">
              {sub!.email} will no longer receive Grade Capital emails.
            </p>
            <p className="mb-6 text-sm leading-relaxed text-white/60">
              Changed your mind? You can resubscribe anytime.
            </p>
            <ResubscribeButton email={sub!.email} />
          </>
        ) : (
          <>
            <h1 className="mb-3 text-2xl font-semibold">Link not recognized</h1>
            <p className="mb-6 text-sm leading-relaxed text-white/60">
              This unsubscribe link is invalid or has expired. If you keep
              receiving emails, please contact us.
            </p>
          </>
        )}

        <div className="mt-8 border-t border-white/10 pt-6">
          <Link
            href="/"
            className="text-sm text-[#FDBE35] transition-colors hover:text-white"
          >
            ← Back to Grade Capital Insights
          </Link>
        </div>
      </div>
    </div>
  );
}
