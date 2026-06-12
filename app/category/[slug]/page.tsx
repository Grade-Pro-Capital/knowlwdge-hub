import { notFound } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/app/components/Logo";
import type { Metadata } from "next";
import { prisma } from "@/app/lib/db";
import { slugify, getBaseUrl } from "@/app/lib/seo";
import { resolvePostImage } from "@/app/lib/images";
import { SITE_TITLE_SUFFIX, SITE_NAME_OG, sanitizeTitleForBrand } from "@/app/lib/siteConfig";
import { calculateReadingTime } from "@/app/lib/readingTime";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { ImageWithFallback } from "@/app/components/ImageWithFallback";

type Props = { params: Promise<{ slug: string }> };

function categoryNameFromSlug(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const name = categoryNameFromSlug(slug);

  const categoryRow = await prisma.category.findFirst({
    where: { slug },
  });

  const rawTitle =
    categoryRow?.categorySeoTitle?.trim() || `${name} | ${SITE_TITLE_SUFFIX}`;
  const title = sanitizeTitleForBrand(rawTitle) || `${name} | ${SITE_TITLE_SUFFIX}`;
  const description =
    categoryRow?.categorySeoDescription?.trim() ||
    `Explore ${name} articles and insights on crypto, finance, and institutional adoption.`;

  const base = getBaseUrl();
  const canonical = `${base}/category/${slug}`;
  const defaultOgImage = `${base}/og-default.png`;

  return {
    title,
    description,
    alternates: { canonical },
    robots: { index: false, follow: true },
    openGraph: {
      locale: "en_IN",
      siteName: SITE_NAME_OG,
      type: "website",
      title,
      description,
      url: canonical,
      images: [{ url: defaultOgImage, width: 1200, height: 630, alt: SITE_NAME_OG }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@GradeCapital",
      title,
      description,
      images: [defaultOgImage],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;

  const allCategories = await prisma.post.findMany({
    where: { published: true },
    select: { category: true },
    distinct: ["category"],
  });

  const categoryMatch = allCategories.find(
    (c) => slugify(c.category) === slug
  );
  if (!categoryMatch) notFound();

  const name = categoryMatch.category;

  const posts = await prisma.post.findMany({
    where: {
      published: true,
      category: name,
    },
    orderBy: { publishedAt: "desc" },
  });

  if (posts.length === 0) notFound();

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Insights", url: "/#insights" },
    { name, url: `/category/${slug}` },
  ];

  return (
    <div className="min-h-screen bg-[#020100] text-white">
      <header className="border-b border-[rgba(255,255,255,0.1)]">
        <div className="mx-auto max-w-[1600px] px-4 py-6 sm:px-8 lg:px-16">
          <Logo />
        </div>
      </header>

      <Breadcrumb items={breadcrumbItems} />

      <main className="mx-auto max-w-[1400px] px-4 py-12 sm:px-8">
        <h1 className="mb-8 text-3xl font-semibold sm:text-4xl">{name}</h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const imgSrc = resolvePostImage(post.imageUrl ?? post.imageKey);
            return (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group overflow-hidden rounded-lg border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.03)] transition-all hover:border-[rgba(212,175,55,0.3)]"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={imgSrc}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="mb-2 inline-block rounded-full bg-[rgba(253,190,53,0.2)] px-3 py-1 text-xs text-[#FDBE35]">
                    {post.category}
                  </span>
                  <h2 className="mb-2 line-clamp-2 text-lg font-medium group-hover:text-[#FDBE35]">
                    {post.title}
                  </h2>
                  <p className="mb-4 line-clamp-2 text-sm text-[rgba(255,255,255,0.7)]">
                    {post.excerpt}
                  </p>
                  <span className="text-xs text-[rgba(255,255,255,0.5)]">
                    {post.readTime || calculateReadingTime(post.content)}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
