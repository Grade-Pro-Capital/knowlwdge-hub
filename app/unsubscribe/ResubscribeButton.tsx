"use client";

import { useState } from "react";
import { goldButtonClass } from "@/app/lib/ui";

/** One-click resubscribe for a known email (used on the unsubscribe page). */
export function ResubscribeButton({ email }: { email: string }) {
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );

  async function resubscribe() {
    setState("loading");
    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "resubscribe" }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <p className="text-[#FDBE35]">You&apos;re subscribed again. Welcome back!</p>
    );
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={resubscribe}
        disabled={state === "loading"}
        className={`${goldButtonClass} px-6 py-3 text-sm`}
      >
        {state === "loading" ? "Resubscribing…" : "Resubscribe"}
      </button>
      {state === "error" && (
        <p className="text-sm text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
