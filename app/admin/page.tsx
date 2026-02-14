import Link from "next/link";
import { FileText, BarChart3, Plus, BookOpen, FileStack } from "lucide-react";

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-semibold">Dashboard</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Link
          href="/admin/posts"
          className="flex items-center gap-4 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-6 transition-colors hover:border-[rgba(253,190,53,0.3)] hover:bg-[rgba(255,255,255,0.06)]"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[rgba(253,190,53,0.2)]">
            <FileText className="h-6 w-6 text-[#FDBE35]" />
          </div>
          <div>
            <h2 className="font-medium">Posts</h2>
            <p className="text-sm text-[rgba(255,255,255,0.6)]">
              Manage blog posts
            </p>
          </div>
        </Link>
        <Link
          href="/admin/posts/new"
          className="flex items-center gap-4 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-6 transition-colors hover:border-[rgba(253,190,53,0.3)] hover:bg-[rgba(255,255,255,0.06)]"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[rgba(253,190,53,0.2)]">
            <Plus className="h-6 w-6 text-[#FDBE35]" />
          </div>
          <div>
            <h2 className="font-medium">New Post</h2>
            <p className="text-sm text-[rgba(255,255,255,0.6)]">
              Create a new blog post
            </p>
          </div>
        </Link>
        <Link
          href="/admin/analytics"
          className="flex items-center gap-4 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-6 transition-colors hover:border-[rgba(253,190,53,0.3)] hover:bg-[rgba(255,255,255,0.06)]"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[rgba(253,190,53,0.2)]">
            <BarChart3 className="h-6 w-6 text-[#FDBE35]" />
          </div>
          <div>
            <h2 className="font-medium">Analytics</h2>
            <p className="text-sm text-[rgba(255,255,255,0.6)]">
              View traffic and stats
            </p>
          </div>
        </Link>
        <Link
          href="/admin/templates"
          className="flex items-center gap-4 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-6 transition-colors hover:border-[rgba(253,190,53,0.3)] hover:bg-[rgba(255,255,255,0.06)]"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[rgba(253,190,53,0.2)]">
            <FileStack className="h-6 w-6 text-[#FDBE35]" />
          </div>
          <div>
            <h2 className="font-medium">Templates</h2>
            <p className="text-sm text-[rgba(255,255,255,0.6)]">
              Blog content templates
            </p>
          </div>
        </Link>
        <Link
          href="/admin/editor-guide"
          className="flex items-center gap-4 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-6 transition-colors hover:border-[rgba(253,190,53,0.3)] hover:bg-[rgba(255,255,255,0.06)]"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[rgba(253,190,53,0.2)]">
            <BookOpen className="h-6 w-6 text-[#FDBE35]" />
          </div>
          <div>
            <h2 className="font-medium">Editor guide</h2>
            <p className="text-sm text-[rgba(255,255,255,0.6)]">
              What each editor button does
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
