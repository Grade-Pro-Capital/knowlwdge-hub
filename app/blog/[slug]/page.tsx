import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Clock, Calendar } from "lucide-react";
import { ImageWithFallback } from "@/app/components/ImageWithFallback";
import { Logo } from "@/app/components/Logo";
import { ShareButtons } from "@/app/components/ShareButtons";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { ArticleGeo } from "@/app/components/ArticleGeo";
import { RelatedArticles } from "@/app/components/RelatedArticles";
import { NewsletterForm } from "@/app/components/NewsletterForm";
import { RecordView } from "@/app/blog/RecordView";
import { JsonLdScript } from "@/app/components/JsonLdScript";
import { prisma } from "@/app/lib/db";
import {
  absoluteUrl,
  getBaseUrl,
  slugify,
  validateMetaTitle,
  validateMetaDescription,
  parseSecondaryKeywords,
} from "@/app/lib/seo";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from "@/app/lib/jsonLd";
import { calculateReadingTime, countWords } from "@/app/lib/readingTime";
import { getTocFromContent, ensureHeadingIds } from "@/app/lib/tocFromContent";
import type { Citation, ExpertiseSignals, FaqItem } from "@/app/lib/types";

const baseUrl = getBaseUrl();

function formatPublishedAt(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - new Date(date).getTime();
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  if (minutes < 60) return `${minutes} minutes ago`;
  if (hours < 24) return `${hours} hours ago`;
  if (days < 7) return `${days} days ago`;
  return new Date(date).toLocaleDateString();
}

function parseCitations(
  raw: unknown
): Citation[] | null {
  if (!raw || !Array.isArray(raw)) return null;
  return raw
    .map((x) => {
      if (x && typeof x === "object" && "name" in x && "url" in x) {
        return { name: String(x.name), url: String(x.url) };
      }
      return null;
    })
    .filter((x): x is Citation => x !== null);
}

function parseExpertise(raw: unknown): ExpertiseSignals | null {
  if (!raw || typeof raw !== "object") return null;
  const o = raw as Record<string, unknown>;
  return {
    credentials: typeof o.credentials === "string" ? o.credentials : undefined,
    methodology: typeof o.methodology === "string" ? o.methodology : undefined,
    researchNotes:
      typeof o.researchNotes === "string" ? o.researchNotes : undefined,
  };
}

function parseFaqs(raw: unknown): FaqItem[] | null {
  if (!raw || !Array.isArray(raw)) return null;
  return raw
    .map((x) => {
      if (x && typeof x === "object" && "question" in x && "answer" in x) {
        return {
          question: String(x.question),
          answer: String(x.answer),
        };
      }
      return null;
    })
    .filter((x): x is FaqItem => x !== null);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const row = await prisma.post.findFirst({
    where: { slug, published: true },
  });
  if (!row) return { title: "Article not found" };

  const title = validateMetaTitle(row.metaTitle) ?? row.title;
  const description =
    validateMetaDescription(row.metaDescription) ?? row.excerpt;
  const canonical = row.canonicalUrl?.trim()
    ? absoluteUrl(row.canonicalUrl)
    : `${baseUrl}/blog/${row.slug}`;
  const robotsIndex = row.metaRobotsIndex?.trim() || "index";
  const robotsFollow = row.metaRobotsFollow?.trim() || "follow";
  const robots = {
    index: robotsIndex !== "noindex",
    follow: robotsFollow !== "nofollow",
  };

  const ogTitle = row.ogTitle?.trim() || title;
  const ogDescription = row.ogDescription?.trim() || description;
  const ogImage = row.ogImage?.trim() || row.imageUrl || undefined;
  const ogImageUrl = ogImage ? absoluteUrl(ogImage) : undefined;

  const twitterTitle = row.twitterCardTitle?.trim() || ogTitle;
  const twitterDescription = row.twitterCardDescription?.trim() || ogDescription;
  const twitterImage = row.twitterCardImage?.trim() || row.ogImage?.trim() || row.imageUrl || undefined;
  const twitterImageUrl = twitterImage ? absoluteUrl(twitterImage) : ogImageUrl;

  const keywords = [
    ...(row.focusKeyword?.trim() ? [row.focusKeyword.trim()] : []),
    ...parseSecondaryKeywords(row.secondaryKeywords),
  ];

  return {
    title,
    description,
    alternates: { canonical },
    robots,
    keywords: keywords.length ? keywords : undefined,
    other: {
      "twitter:site": "@GradeCapital",
      "twitter:creator": "@GradeCapital",
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonical,
      siteName: "Grade Capital Knowledge Hub",
      images: ogImageUrl
        ? [{ url: ogImageUrl, width: 1200, height: 630, alt: ogTitle }]
        : undefined,
      type: "article",
      publishedTime: row.publishedAt?.toISOString?.(),
      modifiedTime: row.contentFreshnessDate?.toISOString?.() ?? row.updatedAt?.toISOString?.(),
    },
    twitter: {
      card: "summary_large_image",
      site: "@GradeCapital",
      creator: "@GradeCapital",
      title: twitterTitle,
      description: twitterDescription,
      images: twitterImageUrl ? [twitterImageUrl] : undefined,
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const row = await prisma.post.findFirst({
    where: { slug, published: true },
  });
  if (!row) notFound();

  const readTime =
    row.readTime ||
    calculateReadingTime(row.content);
  const categorySlug = slugify(row.category);

  const relatedRows = await prisma.post.findMany({
    where: {
      category: row.category,
      id: { not: row.id },
      published: true,
    },
    take: 3,
  });

  const content = row.content ?? "";
  const contentWithIds = ensureHeadingIds(content);
  const tocItems = getTocFromContent(contentWithIds);
  const citations = parseCitations(row.authoritativeCitations);
  const expertise = parseExpertise(row.expertiseSignals);
  const faqs = parseFaqs(row.faqs);
  const keyTakeaways = Array.isArray(row.keyTakeaways)
    ? row.keyTakeaways.filter((x): x is string => typeof x === "string")
    : [];

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Insights", url: "/#insights" },
    { name: row.category, url: `/category/${categorySlug}` },
    { name: row.title, url: `/blog/${row.slug}` },
  ];

  const articleLd = articleJsonLd({
    headline: row.title,
    description: row.metaDescription ?? row.excerpt,
    image: row.ogImage ?? row.imageUrl,
    datePublished: row.publishedAt.toISOString(),
    dateModified:
      row.contentFreshnessDate?.toISOString() ?? row.updatedAt.toISOString(),
    author: {
      name: row.authorName,
      url: row.authorSlug ? `/author/${row.authorSlug}` : undefined,
    },
    url: `${baseUrl}/blog/${row.slug}`,
  });

  const breadcrumbLd = breadcrumbJsonLd(breadcrumbItems);
  const faqLd = faqs?.length ? faqJsonLd(faqs) : null;

  const imageSrc = row.imageUrl?.startsWith("http")
    ? row.imageUrl
    : `https://source.unsplash.com/1200x800/?${row.imageUrl || row.imageKey || "crypto"}`;

  const canonical =
    row.canonicalUrl?.trim() ? absoluteUrl(row.canonicalUrl) : `${baseUrl}/blog/${row.slug}`;

  return (
    <div className="min-h-screen bg-[#020100] text-white">
      <RecordView slug={slug} />

      <JsonLdScript data={articleLd} />
      <JsonLdScript data={breadcrumbLd} />
      {faqLd && <JsonLdScript data={faqLd} />}

      <Header />
      <Breadcrumb items={breadcrumbItems} withJsonLd={false} />

      <article>
        <header className="py-8 sm:py-12 lg:py-16">
          <div className="mx-auto max-w-[900px] px-4 sm:px-8">
            <span className="mb-6 inline-block rounded-full bg-[#FDBE35] px-4 py-2 text-xs text-[#020100] sm:text-sm">
              {row.category}
            </span>
            <h1 className="mb-6 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {row.title}
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-[rgba(255,255,255,0.7)] sm:text-xl">
              {row.excerpt}
            </p>

            <div className="mb-8 flex flex-wrap items-center gap-4 border-b border-[rgba(255,255,255,0.1)] pb-6 sm:gap-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(253,190,53,0.2)] text-[#FDBE35]">
                  {row.authorAvatar ? (
                    <img
                      src={row.authorAvatar}
                      alt={row.authorName}
                      className="h-full w-full rounded-full object-cover"
                    />
                  ) : (
                    row.authorName.charAt(0)
                  )}
                </div>
                <div>
                  <p className="text-sm text-white">{row.authorName}</p>
                  <p className="text-xs text-[rgba(255,255,255,0.6)]">
                    Senior Analyst
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-[rgba(255,255,255,0.6)]">
                <Calendar className="h-4 w-4" />
                <span>
                  {row.publishedAt.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[rgba(255,255,255,0.6)]">
                <Clock className="h-4 w-4" />
                <span>{readTime}</span>
              </div>
              <ShareButtons url={canonical} title={row.title} />
            </div>

            <div className="relative mb-12 h-[300px] overflow-hidden rounded-xl sm:h-[400px] lg:h-[500px]">
              <ImageWithFallback
                src={imageSrc}
                alt={row.title}
                className="h-full w-full object-cover"
              />
            </div>

          </div>
        </header>

        {/* GEO: AI Summary, TL;DR, citations, freshness - near top */}
        {(row.aiSummary || keyTakeaways.length || citations?.length || row.contentFreshnessDate) && (
          <div className="mx-auto max-w-[900px] px-4 pb-8 sm:px-8">
            <ArticleGeo
              aiSummary={row.aiSummary}
              keyTakeaways={keyTakeaways}
              authoritativeCitations={citations}
              contentFreshnessDate={row.contentFreshnessDate}
              authorName={row.authorName}
              authorSlug={row.authorSlug}
              authorAvatar={row.authorAvatar}
              expertiseSignals={null}
              showAuthorSection={false}
            />
          </div>
        )}

        <div className="pb-16 sm:pb-20">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-8">
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
              <aside className="hidden lg:col-span-3 lg:block">
                <div className="sticky top-24 space-y-6">
                  <div className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] p-6">
                    <h2 className="mb-4 flex items-center gap-2 text-base font-semibold text-white">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FDBE35]">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                        >
                          <path
                            d="M2 3h12M2 8h12M2 13h12"
                            stroke="#020100"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      Table of Contents
                    </h2>
                    <nav className="space-y-1.5" aria-label="Article sections">
                      {tocItems.length === 0 ? (
                        <p className="text-sm text-[rgba(255,255,255,0.5)]">
                          No sections (add H2 headings in content)
                        </p>
                      ) : (
                        tocItems.map((item) => (
                          <a
                            key={item.id}
                            href={`#${item.id}`}
                            className="block rounded-lg px-3 py-2 text-sm text-[rgba(255,255,255,0.85)] transition-colors hover:bg-[rgba(255,255,255,0.06)] hover:text-white"
                          >
                            {item.title}
                          </a>
                        ))
                      )}
                    </nav>
                  </div>
                </div>
              </aside>

              <div className="lg:col-span-9">
                <div
                  className="article-content article-wrapper"
                  dangerouslySetInnerHTML={{ __html: contentWithIds }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* GEO: About the Author - after content */}
        <div className="mx-auto max-w-[900px] px-4 pb-16 sm:px-8">
          <ArticleGeo
            authorName={row.authorName}
            authorSlug={row.authorSlug}
            authorAvatar={row.authorAvatar}
            expertiseSignals={expertise}
          />
        </div>

        {relatedRows.length > 0 && (
          <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-8">
            <RelatedArticles
              articles={relatedRows.map((p) => ({
                slug: p.slug,
                title: p.title,
                excerpt: p.excerpt,
                category: p.category,
                readTime: p.readTime || calculateReadingTime(p.content),
                image: p.imageUrl ?? p.imageKey ?? undefined,
              }))}
            />
          </div>
        )}
      </article>

      <NewsletterSection />
      <Footer />
      <ArticleStyles />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.1)] bg-[#020100]">
      <div className="mx-auto max-w-[1600px] px-4 py-4 sm:px-8 sm:py-6 lg:px-16">
        <div className="flex items-center justify-between">
          <Logo />
          <nav className="hidden md:flex md:items-center md:gap-6">
            <Link
              href="/#insights"
              className="text-sm text-[rgba(255,255,255,0.7)] transition-colors hover:text-white"
            >
              Insights
            </Link>
            <Link
              href="/"
              className="text-sm text-[rgba(255,255,255,0.7)] transition-colors hover:text-white"
            >
              Research
            </Link>
            <Link
              href="/?tab=professionals#insights"
              className="text-sm text-[rgba(255,255,255,0.7)] transition-colors hover:text-white"
            >
              For Professionals
            </Link>
           
          </nav>
          <button className="rounded-lg bg-gradient-to-r from-[#FDBE35] to-[#FDDA93] px-4 py-2 text-sm text-[#020100] shadow-[0px_0px_20px_0px_rgba(212,175,55,0.4)] transition-all hover:shadow-[0px_0px_30px_0px_rgba(212,175,55,0.6)] sm:px-6">
            Subscribe
          </button>
        </div>
      </div>
    </header>
  );
}

function NewsletterSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-[900px] px-4 sm:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-[rgba(212,175,55,0.15)] to-[rgba(0,150,200,0.08)] p-8 text-center sm:p-12">
          <h2 className="mb-4 text-2xl sm:text-3xl lg:text-4xl">
            Stay Ahead of <span className="text-[#FDBE35]">The Market</span>
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-[rgba(255,255,255,0.7)]">
            Get weekly crypto insights delivered to your inbox—market analysis,
            regulatory updates, and institutional trends
          </p>
          <div className="mx-auto max-w-md">
            <NewsletterForm source="article" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.1)] py-12">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-8 lg:px-16">
        <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-[rgba(255,255,255,0.6)]">
              © {new Date().getFullYear()} Grade Capital
            </p>
          </div>
          {/* Footer links - commented out for now
          <div>
            <h4 className="mb-4 text-white">Insights</h4>
            <ul className="space-y-2 text-sm text-[rgba(255,255,255,0.6)]">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Investment in Crypto
                </Link>
              </li>
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Detailed Crypto Research
                </Link>
              </li>
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  For Crypto Professionals
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-white">For Professionals</h4>
            <ul className="space-y-2 text-sm text-[rgba(255,255,255,0.6)]">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Compliance & Consulting
                </Link>
              </li>
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Due Diligence Data Sets
                </Link>
              </li>
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Strategy Analysis
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-sm text-[rgba(255,255,255,0.6)]">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  About
                </Link>
              </li>
            </ul>
          </div>
          */}
        </div>
      </div>
    </footer>
  );
}

function ArticleStyles() {
  return (
    <style>{`
      .article-wrapper { font-family: system-ui, -apple-system, sans-serif; max-width: none; }
      .article-content h2 { font-size: 1.75rem; font-weight: 600; color: #FDBE35; margin-top: 2.5rem; margin-bottom: 1rem; scroll-margin-top: 6rem; line-height: 1.3; }
      .article-content h2:first-child { margin-top: 0; }
      .article-content h3 { font-size: 1.25rem; font-weight: 600; color: rgba(255, 255, 255, 0.95); margin-top: 1.75rem; margin-bottom: 0.75rem; }
      .article-content p { color: rgba(255, 255, 255, 0.85); line-height: 1.8; margin-bottom: 1.25rem; font-size: 1rem; }
      .article-content ul, .article-content ol { color: rgba(255, 255, 255, 0.85); margin-bottom: 1.5rem; padding-left: 1.75rem; }
      .article-content ul { list-style-type: disc; }
      .article-content ul li::marker { color: rgba(253, 190, 53, 0.9); }
      .article-content ol { list-style-type: decimal; }
      .article-content ol li::marker { color: #FDBE35; font-weight: 600; }
      .article-content li { margin-bottom: 0.625rem; line-height: 1.7; padding-left: 0.25rem; }
      .article-content strong { color: #FDBE35; font-weight: 600; }
      .article-content blockquote { border-left: 4px solid #FDBE35; padding-left: 1.5rem; font-style: italic; color: rgba(255, 255, 255, 0.9); margin: 2rem 0; }
      .article-content img { border-radius: 12px; margin: 2rem 0; }
      .article-content a { color: #FDBE35; text-decoration: underline; }
      .article-content a:hover { color: #FDDA93; }
      .article-content table { border-collapse: collapse; width: 100%; margin: 1.5rem 0; }
      .article-content th, .article-content td { border: 1px solid rgba(255,255,255,0.25); padding: 0.625rem 0.875rem; text-align: left; }
      .article-content th { background: rgba(253,190,53,0.15); color: #FDBE35; font-weight: 600; }
    `}</style>
  );
}
