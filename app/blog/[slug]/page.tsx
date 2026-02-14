import { redirect } from "next/navigation";

/**
 * Redirect /blog/[slug] -> /article/[slug] for clean URLs.
 */
export default async function BlogSlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/article/${slug}`);
}
