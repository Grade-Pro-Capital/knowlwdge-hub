import { notFound } from "next/navigation";
import { prisma } from "@/app/lib/db";
import { PostForm } from "../../PostForm";
import Link from "next/link";
import { BackToPostsLink } from "../../BackToPostsLink";

export default async function EditPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await prisma.post.findUnique({ where: { id } });
  if (!post) notFound();

  const expertise = post.expertiseSignals as { credentials?: string; methodology?: string; researchNotes?: string } | null;

  // Parse FAQs into structured array
  const parsedFaqs: { question: string; answer: string }[] = (() => {
    if (!post.faqs) return [];
    try {
      const raw = typeof post.faqs === "string" ? JSON.parse(post.faqs) : post.faqs;
      if (Array.isArray(raw)) {
        return raw
          .filter(
            (f: unknown): f is { question: string; answer: string } =>
              typeof f === "object" &&
              f !== null &&
              "question" in f &&
              "answer" in f
          )
          .map((f) => ({ question: String(f.question), answer: String(f.answer) }));
      }
      return [];
    } catch {
      return [];
    }
  })();

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
    imageAlt: post.imageAlt ?? "",
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
  };

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <BackToPostsLink />
        <Link
          href="/admin/editor-guide"
          className="text-sm text-[#FDBE35] hover:text-[#FDDA93]"
        >
          Editor guide (what each button does) →
        </Link>
      </div>
      <h1 className="mb-8 text-2xl font-semibold">Edit: {post.title}</h1>
      <div className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-6">
        <PostForm
          postId={id}
          initial={initial}
          initialFaqs={parsedFaqs}
        />
      </div>
    </div>
  );
}
