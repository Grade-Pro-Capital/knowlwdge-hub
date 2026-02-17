import { notFound } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/app/components/Logo";
import type { Metadata } from "next";
import { prisma } from "@/app/lib/db";
import { getBaseUrl, absoluteUrl } from "@/app/lib/seo";
import { SITE_TITLE_SUFFIX, SITE_NAME_OG, sanitizeTitleForBrand } from "@/app/lib/siteConfig";
import { authorJsonLd } from "@/app/lib/jsonLd";
import { JsonLdScript } from "@/app/components/JsonLdScript";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { ImageWithFallback } from "@/app/components/ImageWithFallback";
import { calculateReadingTime } from "@/app/lib/readingTime";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const author = await prisma.author.findFirst({ where: { slug } });
  const posts = await prisma.post.findMany({
    where: { published: true, authorSlug: slug },
    take: 1,
  });

  const name = author?.name ?? posts[0]?.authorName ?? slug;
  const rawTitle = `${name} | Author | ${SITE_TITLE_SUFFIX}`;
  const title = sanitizeTitleForBrand(rawTitle) || rawTitle;
  const description =
    author?.bio?.trim() ||
    `Read articles by ${name} on crypto, finance, and institutional adoption.`;

  const base = getBaseUrl();
  const canonical = `${base}/author/${slug}`;
  const defaultOgImage = `${base}/og-default.png`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      locale: "en_IN",
      siteName: SITE_NAME_OG,
      type: "website",
      title,
      description,
      url: canonical,
      images: [{ url: defaultOgImage, width: 1200, height: 630, alt: SITE_NAME_OG }],
    },
  };
}

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params;

  const author = await prisma.author.findFirst({ where: { slug } });
  const posts = await prisma.post.findMany({
    where: { published: true, authorSlug: slug },
    orderBy: { publishedAt: "desc" },
  });

  if (posts.length === 0 && !author) notFound();

  const name = author?.name ?? posts[0]?.authorName ?? slug;
  const bio = author?.bio?.trim();
  const avatar = author?.avatar ?? posts[0]?.authorAvatar ?? null;

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Insights", url: "/#insights" },
    { name, url: `/author/${slug}` },
  ];

  const authorLd = authorJsonLd({
    name,
    url: `/author/${slug}`,
    bio: bio ?? undefined,
    image: avatar ?? undefined,
  });

  return (
    <div className="min-h-screen bg-[#020100] text-white">
      <JsonLdScript data={authorLd} />

      <header className="border-b border-[rgba(255,255,255,0.1)]">
        <div className="mx-auto max-w-[1600px] px-4 py-6 sm:px-8 lg:px-16">
          <Logo />
        </div>
      </header>

      <Breadcrumb items={breadcrumbItems} />

      <main className="mx-auto max-w-[1400px] px-4 py-12 sm:px-8">
        <section className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-start">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[rgba(253,190,53,0.2)] text-4xl text-[#FDBE35]">
            {avatar ? (
              <img
                src={avatar}
                alt={name}
                className="h-full w-full object-cover"
              />
            ) : (
              name.charAt(0)
            )}
          </div>
          <div>
            <h1 className="mb-2 text-3xl font-semibold sm:text-4xl">{name}</h1>
            {author?.credentials && (
              <p className="mb-2 text-sm text-[#FDBE35]">
                {author.credentials}
              </p>
            )}
            {bio && (
              <p className="mb-4 max-w-2xl text-[rgba(255,255,255,0.8)]">
                {bio}
              </p>
            )}
            <div className="flex gap-4">
              {author?.linkedInUrl && (
                <a
                  href={author.linkedInUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-sm text-[#FDBE35] hover:underline"
                >
                  LinkedIn
                </a>
              )}
              {author?.twitterUrl && (
                <a
                  href={author.twitterUrl}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="text-sm text-[#FDBE35] hover:underline"
                >
                  Twitter
                </a>
              )}
            </div>
          </div>
        </section>

        <h2 className="mb-6 text-xl font-semibold">Articles</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const imgSrc = post.imageUrl?.startsWith("http")
              ? post.imageUrl
              : `https://source.unsplash.com/600x400/?${post.imageUrl || post.imageKey || "crypto"}`;
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
                  <h3 className="mb-2 line-clamp-2 text-lg font-medium group-hover:text-[#FDBE35]">
                    {post.title}
                  </h3>
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
