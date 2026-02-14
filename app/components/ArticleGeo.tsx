/**
 * GEO / AI optimization components:
 * - AI summary near top
 * - TL;DR (key takeaways)
 * - Citations with rel="nofollow noopener"
 * - Content freshness date
 * - About the Author with expertise signals
 */
import Link from "next/link";
import type { Citation, ExpertiseSignals } from "@/app/lib/types";

type ArticleGeoProps = {
  aiSummary?: string | null;
  keyTakeaways?: string[];
  authoritativeCitations?: Citation[] | null;
  contentFreshnessDate?: Date | string | null;
  authorName: string;
  authorSlug?: string | null;
  authorAvatar?: string | null;
  expertiseSignals?: ExpertiseSignals | null;
  /** When false, only render GEO blocks (summary, TL;DR, citations). Default true. */
  showAuthorSection?: boolean;
};

export function ArticleGeo({
  aiSummary,
  keyTakeaways,
  authoritativeCitations,
  contentFreshnessDate,
  authorName,
  authorSlug,
  authorAvatar,
  expertiseSignals,
  showAuthorSection = true,
}: ArticleGeoProps) {
  const freshness =
    contentFreshnessDate instanceof Date
      ? contentFreshnessDate
      : contentFreshnessDate
        ? new Date(contentFreshnessDate)
        : null;
  const formattedDate = freshness?.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="space-y-10">
      {aiSummary?.trim() && (
        <section
          className="rounded-xl border border-[rgba(253,190,53,0.2)] bg-[rgba(253,190,53,0.06)] p-6"
          aria-label="AI summary"
        >
          <h2 className="mb-3 text-lg font-semibold text-[#FDBE35]">
            Summary
          </h2>
          <p className="leading-relaxed text-[rgba(255,255,255,0.9)]">
            {aiSummary.trim()}
          </p>
        </section>
      )}

      {keyTakeaways && keyTakeaways.length > 0 && (
        <section
          className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-6"
          aria-label="Key takeaways"
        >
          <h2 className="mb-4 text-lg font-semibold text-white">TL;DR</h2>
          <ul className="list-none space-y-2">
            {keyTakeaways.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-[rgba(255,255,255,0.85)]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FDBE35]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {formattedDate && (
        <p className="text-sm text-[rgba(255,255,255,0.6)]">
          Last updated: {formattedDate}
        </p>
      )}

      {authoritativeCitations &&
        authoritativeCitations.length > 0 && (
          <section
            className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-6"
            aria-label="Sources and citations"
          >
            <h2 className="mb-4 text-lg font-semibold text-white">
              Sources & Citations
            </h2>
            <ul className="space-y-2">
              {authoritativeCitations.map((c, i) => (
                <li key={i}>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="text-[#FDBE35] underline transition-colors hover:text-[#FDDA93]"
                  >
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

      {showAuthorSection && (
      <section
        className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-6 sm:p-8"
        aria-label="About the author"
      >
        <h2 className="mb-4 text-lg font-semibold text-white">
          About the Author
        </h2>
        <div className="flex flex-col gap-6 sm:flex-row">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-[rgba(253,190,53,0.2)] text-3xl text-[#FDBE35]">
            {authorAvatar ? (
              <img
                src={authorAvatar}
                alt={authorName}
                className="h-full w-full rounded-full object-cover"
              />
            ) : (
              authorName.charAt(0)
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-xl text-white">
              {authorSlug ? (
                <Link
                  href={`/author/${authorSlug}`}
                  className="text-white transition-colors hover:text-[#FDBE35]"
                >
                  {authorName}
                </Link>
              ) : (
                authorName
              )}
            </h3>
            {expertiseSignals?.credentials && (
              <p className="mb-2 text-sm text-[#FDBE35]">
                {expertiseSignals.credentials}
              </p>
            )}
            {expertiseSignals?.methodology && (
              <p className="mb-2 text-sm leading-relaxed text-[rgba(255,255,255,0.7)]">
                {expertiseSignals.methodology}
              </p>
            )}
            {expertiseSignals?.researchNotes && (
              <p className="text-sm leading-relaxed text-[rgba(255,255,255,0.6)]">
                {expertiseSignals.researchNotes}
              </p>
            )}
            {!expertiseSignals?.credentials &&
              !expertiseSignals?.methodology &&
              !expertiseSignals?.researchNotes && (
                <p className="text-sm leading-relaxed text-[rgba(255,255,255,0.7)]">
                  {authorName} is a senior analyst at GRAIZE Insights,
                  specializing in institutional crypto adoption and regulatory
                  frameworks. With extensive experience in traditional finance
                  and digital assets, they provide in-depth analysis on market
                  trends and investment strategies.
                </p>
              )}
          </div>
        </div>
      </section>
      )}
    </div>
  );
}
