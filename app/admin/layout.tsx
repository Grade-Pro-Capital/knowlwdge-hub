import Link from "next/link";
import { Logo } from "@/app/components/Logo";
import { LogoutButton } from "./LogoutButton";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#020100] text-white">
      <header className="border-b border-[rgba(255,255,255,0.1)]">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <Logo href="/admin" />
          <nav className="flex items-center gap-6">
            <Link
              href="/admin"
              className="text-sm text-[rgba(255,255,255,0.7)] hover:text-white"
            >
              Dashboard
            </Link>
            <Link
              href="/admin/posts"
              className="text-sm text-[rgba(255,255,255,0.7)] hover:text-white"
            >
              Posts
            </Link>
            <Link
              href="/admin/analytics"
              className="text-sm text-[rgba(255,255,255,0.7)] hover:text-white"
            >
              Analytics
            </Link>
            <Link
              href="/admin/templates"
              className="text-sm text-[rgba(255,255,255,0.7)] hover:text-white"
            >
              Templates
            </Link>
            <Link
              href="/admin/editor-guide"
              className="text-sm text-[rgba(255,255,255,0.7)] hover:text-white"
            >
              Editor guide
            </Link>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[rgba(255,255,255,0.6)] hover:text-white"
            >
              View site
            </a>
            <LogoutButton />
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
    </div>
  );
}
