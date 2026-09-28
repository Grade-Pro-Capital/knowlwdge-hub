"use client";

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="rounded-lg border border-[rgba(255,255,255,0.2)] px-3 py-1.5 text-sm hover:bg-[rgba(255,255,255,0.05)]"
    >
      Logout
    </button>
  );
}
