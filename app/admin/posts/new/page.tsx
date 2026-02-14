import Link from "next/link";
import { PostForm } from "../PostForm";
import { prisma } from "@/app/lib/db";

export default async function NewPostPage({
  searchParams,
}: {
  searchParams: Promise<{ templateId?: string }>;
}) {
  const { templateId } = await searchParams;
  let initialContent: string | undefined;
  if (templateId) {
    const template = await prisma.template.findUnique({
      where: { id: templateId },
    });
    if (template) initialContent = template.content;
  }

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
      <h1 className="mb-8 text-2xl font-semibold">New Post</h1>
      <div className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-6">
        <PostForm initial={initialContent ? { content: initialContent } : undefined} />
      </div>
    </div>
  );
}
