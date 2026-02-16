import { redirect } from "next/navigation";

/**
 * Redirect /article/[slug] -> /blog/[slug] for backwards compatibility.
 */
export default async function ArticleSlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/blog/${slug}`);
}
