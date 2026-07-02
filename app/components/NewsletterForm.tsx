"use client";

import { useState } from "react";
import { goldButtonClass } from "@/app/lib/ui";

type NewsletterFormProps = {
  source?: string;
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  layout?: "inline" | "stacked";
};

export function NewsletterForm({
  source = "homepage",
  className = "",
  inputClassName = "",
  buttonClassName = "",
  layout = "inline",
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess(false);

    const trimmed = email.trim();
    if (!trimmed) {
      setError("Please enter your email address");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed, source }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setSuccess(true);
      setEmail("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <p className="text-center text-[#FDBE35]">
        Thank you for subscribing! Check your inbox.
      </p>
    );
  }

  const baseInputClass =
    "rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.1)] px-4 py-3 text-white placeholder-[rgba(255,255,255,0.5)] focus:border-[#d4af37] focus:outline-none";
  const baseButtonClass = `${goldButtonClass} px-8 py-3`;

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div
        className={
          layout === "stacked"
            ? "flex flex-col gap-4"
            : "flex flex-col gap-4 sm:flex-row"
        }
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          disabled={loading}
          className={`flex-1 ${baseInputClass} ${inputClassName}`}
        />
        <button
          type="submit"
          disabled={loading}
          className={`whitespace-nowrap ${baseButtonClass} ${buttonClassName}`}
        >
          {loading ? "Subscribing…" : "Subscribe"}
        </button>
      </div>
      {error && (
        <p className="mt-2 text-center text-sm text-red-400">{error}</p>
      )}
    </form>
  );
}
