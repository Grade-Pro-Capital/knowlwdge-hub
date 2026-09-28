import { Suspense } from "react";
import { AdminLoginForm } from "./AdminLoginForm";

export default function AdminLoginPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-md animate-pulse rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-8">
          <div className="mb-6 h-8 w-48 rounded bg-[rgba(255,255,255,0.1)]" />
          <div className="space-y-4">
            <div className="h-12 rounded bg-[rgba(255,255,255,0.05)]" />
            <div className="h-12 rounded bg-[rgba(255,255,255,0.05)]" />
            <div className="h-11 rounded bg-[rgba(253,190,53,0.3)]" />
          </div>
        </div>
      }
    >
      <AdminLoginForm />
    </Suspense>
  );
}
