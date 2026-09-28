import { redirect } from "next/navigation";
import { postPath } from "@/app/lib/blogPaths";

/**
 * Redirect /article/[slug] -> /blogs/[slug] for backwards compatibility.
 */
export default async function ArticleSlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(postPath(slug));
}
