"use client";

import { useState } from "react";
import { Copy, Check, Twitter, Linkedin } from "lucide-react";

type ShareButtonsProps = {
  /** URL to share (defaults to current page) */
  url?: string;
  /** Title/text for the share (e.g. article title; defaults to document title) */
  title?: string;
};

export function ShareButtons({ url, title }: ShareButtonsProps = {}) {
  const [copied, setCopied] = useState(false);

  const getShareUrl = () =>
    typeof window !== "undefined" ? url ?? window.location.href : "";
  const getShareTitle = () =>
    typeof window !== "undefined" ? title ?? document.title ?? "" : "";

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      const link = url ?? window.location.href;
      navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleShareTwitter = () => {
    const u = getShareUrl();
    const t = getShareTitle();
    if (!u) return;
    const params = new URLSearchParams({
      url: u,
      ...(t && { text: t }),
    });
    window.open(
      `https://twitter.com/intent/tweet?${params.toString()}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleShareLinkedIn = () => {
    const u = getShareUrl();
    if (!u) return;
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(u)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="ml-auto flex items-center gap-3">
      <span className="hidden text-sm text-[rgba(255,255,255,0.6)] sm:block">
        Share:
      </span>
      <button
        type="button"
        onClick={handleCopyLink}
        className="rounded-lg bg-[rgba(255,255,255,0.05)] p-2 transition-colors hover:bg-[rgba(255,255,255,0.1)]"
        title="Copy link"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
      </button>
      <button
        type="button"
        onClick={handleShareTwitter}
        className="rounded-lg bg-[rgba(255,255,255,0.05)] p-2 transition-colors hover:bg-[rgba(255,255,255,0.1)]"
        title="Share on Twitter"
      >
        <Twitter className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={handleShareLinkedIn}
        className="rounded-lg bg-[rgba(255,255,255,0.05)] p-2 transition-colors hover:bg-[rgba(255,255,255,0.1)]"
        title="Share on LinkedIn"
      >
        <Linkedin className="h-4 w-4" />
      </button>
    </div>
  );
}
