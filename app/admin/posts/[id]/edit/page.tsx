import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/app/lib/db";
import { PostForm } from "../../PostForm";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await prisma.post.findUnique({ where: { id } });
  if (!post) notFound();

  const expertise = post.expertiseSignals as { credentials?: string; methodology?: string; researchNotes?: string } | null;
  const initial = {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    readTime: post.readTime ?? "",
    authorName: post.authorName,
    authorSlug: post.authorSlug ?? "",
    authorAvatar: post.authorAvatar ?? "",
    imageUrl: post.imageUrl ?? "",
    imageKey: post.imageKey ?? "",
    content: post.content ?? "",
    isProfessional: post.isProfessional,
    published: post.published,
    tags: Array.isArray(post.tags) ? post.tags.join(", ") : "",
    metaTitle: post.metaTitle ?? "",
    metaDescription: post.metaDescription ?? "",
    focusKeyword: post.focusKeyword ?? "",
    secondaryKeywords: post.secondaryKeywords ?? "",
    canonicalUrl: post.canonicalUrl ?? "",
    metaRobotsIndex: post.metaRobotsIndex?.trim() || "index",
    metaRobotsFollow: post.metaRobotsFollow?.trim() || "follow",
    ogTitle: post.ogTitle ?? "",
    ogDescription: post.ogDescription ?? "",
    ogImage: post.ogImage ?? "",
    twitterCardTitle: post.twitterCardTitle ?? "",
    twitterCardDescription: post.twitterCardDescription ?? "",
    twitterCardImage: post.twitterCardImage ?? "",
    aiSummary: post.aiSummary ?? "",
    keyTakeaways: Array.isArray(post.keyTakeaways) ? post.keyTakeaways.join("\n") : "",
    authoritativeCitations:
      post.authoritativeCitations != null
        ? typeof post.authoritativeCitations === "string"
          ? post.authoritativeCitations
          : JSON.stringify(post.authoritativeCitations, null, 2)
        : "",
    entityTags: Array.isArray(post.entityTags) ? post.entityTags.join(", ") : "",
    contentFreshnessDate: post.contentFreshnessDate
      ? new Date(post.contentFreshnessDate).toISOString().slice(0, 10)
      : "",
    expertiseCredentials: expertise?.credentials ?? "",
    expertiseMethodology: expertise?.methodology ?? "",
    expertiseResearchNotes: expertise?.researchNotes ?? "",
    faqs:
      post.faqs != null
        ? typeof post.faqs === "string"
          ? post.faqs
          : JSON.stringify(post.faqs, null, 2)
        : "",
  };

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/admin/posts"
          className="text-sm text-[rgba(255,255,255,0.6)] hover:text-white"
        >
          ← Posts
        </Link>
        <Link
          href="/admin/editor-guide"
          className="text-sm text-[#FDBE35] hover:text-[#FDDA93]"
        >
          Editor guide (what each button does) →
        </Link>
      </div>
      <h1 className="mb-8 text-2xl font-semibold">Edit: {post.title}</h1>
      <div className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-6">
        <PostForm postId={id} initial={initial} />
      </div>
    </div>
  );
}
