"use client";

import { useState } from "react";
import { Copy, Check, Twitter, Linkedin } from "lucide-react";

export function ShareButtons() {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
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
        className="rounded-lg bg-[rgba(255,255,255,0.05)] p-2 transition-colors hover:bg-[rgba(255,255,255,0.1)]"
        title="Share on Twitter"
      >
        <Twitter className="h-4 w-4" />
      </button>
      <button
        type="button"
        className="rounded-lg bg-[rgba(255,255,255,0.05)] p-2 transition-colors hover:bg-[rgba(255,255,255,0.1)]"
        title="Share on LinkedIn"
      >
        <Linkedin className="h-4 w-4" />
      </button>
    </div>
  );
}
