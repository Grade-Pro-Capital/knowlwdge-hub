"use client";

import { useEffect } from "react";

export function RecordView({ slug }: { slug: string }) {
  useEffect(() => {
    fetch(`/api/posts/${slug}/view`, { method: "POST" }).catch(() => {});
  }, [slug]);
  return null;
}
