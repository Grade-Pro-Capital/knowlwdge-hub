"use client";

import dynamic from "next/dynamic";
import type { AdditionalImage } from "./RichTextEditor";

const RichTextEditorBase = dynamic(
  () =>
    import("./RichTextEditor").then((mod) => mod.RichTextEditor),
  {
    ssr: false,
    loading: () => (
      <div
        className="flex min-h-[320px] items-center justify-center rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.03)] text-[rgba(255,255,255,0.5)]"
      >
        Loading editor…
      </div>
    ),
  }
);

export function RichTextEditorDynamic(props: {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  minHeight?: string;
  additionalImages?: AdditionalImage[];
}) {
  return <RichTextEditorBase {...props} />;
}
