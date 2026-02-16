import { notFound } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/app/components/Logo";
import type { Metadata } from "next";
import { prisma } from "@/app/lib/db";
import { getBaseUrl } from "@/app/lib/seo";
import { calculateReadingTime } from "@/app/lib/readingTime";
import { Breadcrumb } from "@/app/components/Breadcrumb";
import { ImageWithFallback } from "@/app/components/ImageWithFallback";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const name = slug.charAt(0).toUpperCase() + slug.slice(1);

  const title = `${name} | Grade Capital`;
  const description = `Explore articles tagged with ${name} on crypto, finance, and institutional adoption.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${getBaseUrl()}/tag/${slug}`,
    },
  };
}

export default async function TagPage({ params }: Props) {
  const { slug } = await params;

  const posts = await prisma.post.findMany({
    where: {
      published: true,
      tags: { has: slug },
    },
    orderBy: { publishedAt: "desc" },
  });

  if (posts.length === 0) notFound();

  const name = slug.charAt(0).toUpperCase() + slug.slice(1);

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Insights", url: "/#insights" },
    { name: `Tag: ${name}`, url: `/tag/${slug}` },
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
        <h1 className="mb-8 text-3xl font-semibold sm:text-4xl">#{name}</h1>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const imgSrc = post.imageUrl?.startsWith("http")
              ? post.imageUrl
              : `https://source.unsplash.com/600x400/?${post.imageUrl || post.imageKey || "crypto"}`;
            return (
              <Link
                key={post.id}
                href={`/article/${post.slug}`}
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
