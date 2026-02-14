import Link from "next/link";
import {
  Bold,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Heading3,
  Quote,
  Link as LinkIcon,
  Undo,
  Redo,
  Code,
} from "lucide-react";

const buttons = [
  {
    icon: Bold,
    name: "Bold",
    description: "Makes selected text bold. Use for emphasis and for list labels (e.g. **Institutional inflows:**) so they appear in gold on the blog.",
    example: "<strong>Key phrase:</strong> rest of sentence",
    onBlog: "Key phrase appears in gold (#FDBE35), rest in light grey.",
  },
  {
    icon: Italic,
    name: "Italic",
    description: "Makes selected text italic. Good for emphasis or quotes.",
    example: "<em>italic text</em>",
    onBlog: "Italic, same base color as body.",
  },
  {
    icon: Code,
    name: "Code",
    description: "Inline code style. Use for technical terms, tickers, or short code.",
    example: "<code>BTC</code>",
    onBlog: "Monospace, subtle background.",
  },
  {
    icon: Heading2,
    name: "Heading 2",
    description: "Main section heading. Use for major parts of the article (e.g. “The Institutional 'Race' Is On”, “Regulation: Clarity is No Longer Elusive”).",
    example: "<h2>Section title</h2>",
    onBlog: "Large, bold, gold (#FDBE35). Appears in Table of Contents when you add an id.",
  },
  {
    icon: Heading3,
    name: "Heading 3",
    description: "Subsection heading. Smaller than H2, for sub-topics.",
    example: "<h3>Subsection</h3>",
    onBlog: "Medium, bold, light grey/white.",
  },
  {
    icon: Quote,
    name: "Quote",
    description: "Blockquote. Use for pull quotes or attributed statements.",
    example: "“Institutional adoption isn’t just about FOMO…”",
    onBlog: "Left gold border, italic, indented.",
  },
  {
    icon: List,
    name: "Bullet list",
    description: "Unordered list (bullets). Use with Bold for the first part of each item so it matches the reference layout.",
    example: "• <strong>Institutional inflows:</strong> Pension funds…",
    onBlog: "Gold bullets; bold part in gold, rest in light grey.",
  },
  {
    icon: ListOrdered,
    name: "Numbered list",
    description: "Ordered list (1, 2, 3). Same styling as bullet list for bold + text.",
    example: "1. First point  2. Second point",
    onBlog: "Gold numbers; bold text in gold, rest in light grey.",
  },
  {
    icon: LinkIcon,
    name: "Link",
    description: "Turn selected text into a link. Click the button, then enter the URL.",
    example: "<a href=\"https://…\">link text</a>",
    onBlog: "Gold, underlined; hover lighter gold.",
  },
  {
    icon: Undo,
    name: "Undo",
    description: "Undo the last change.",
    example: "—",
    onBlog: "—",
  },
  {
    icon: Redo,
    name: "Redo",
    description: "Redo after an undo.",
    example: "—",
    onBlog: "—",
  },
];

export default function EditorGuidePage() {
  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <Link
          href="/admin"
          className="text-sm text-[rgba(255,255,255,0.6)] hover:text-white"
        >
          ← Dashboard
        </Link>
        <Link
          href="/admin/posts/new"
          className="text-sm text-[#FDBE35] hover:text-[#FDDA93]"
        >
          New post →
        </Link>
      </div>
      <h1 className="mb-2 text-2xl font-semibold">Editor button guide</h1>
      <p className="mb-8 text-[rgba(255,255,255,0.7)]">
        Use these buttons in the post content editor so articles match the blog layout: gold headings, bold labels in lists, and clear sections. On the <Link href="/admin/posts/new" className="text-[#FDBE35] hover:underline">New post</Link> page, click <strong className="text-[#FDBE35]">Use template</strong> to fill the editor with a ready-made structure (intro, H2 sections, lists with bold labels, blockquote, conclusion).
      </p>

      <div className="space-y-6">
        {buttons.map((btn) => {
          const Icon = btn.icon;
          return (
            <div
              key={btn.name}
              className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-6"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)]">
                  <Icon className="h-5 w-5 text-[#FDBE35]" />
                </div>
                <h2 className="text-lg font-semibold text-white">{btn.name}</h2>
              </div>
              <p className="mb-3 text-sm leading-relaxed text-[rgba(255,255,255,0.8)]">
                {btn.description}
              </p>
              {btn.example !== "—" && (
                <div className="mb-2">
                  <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[rgba(255,255,255,0.5)]">
                    Example / HTML
                  </p>
                  <code className="block rounded bg-[rgba(0,0,0,0.3)] px-3 py-2 text-xs text-[#FDBE35]">
                    {btn.example}
                  </code>
                </div>
              )}
              {btn.onBlog !== "—" && (
                <p className="text-xs text-[rgba(255,255,255,0.6)]">
                  On blog: {btn.onBlog}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-10 rounded-xl border border-[#FDBE35]/30 bg-[#FDBE35]/5 p-6">
        <h3 className="mb-2 font-semibold text-[#FDBE35]">Tip: Match the reference layout</h3>
        <ul className="list-inside list-disc space-y-1 text-sm text-[rgba(255,255,255,0.8)]">
          <li>Use <strong className="text-[#FDBE35]">Heading 2</strong> for each main section (e.g. “The Institutional 'Race' Is On”, “Regulation: Clarity…”).</li>
          <li>Use <strong className="text-[#FDBE35]">Bold</strong> for the label at the start of list items (e.g. “<strong>Institutional inflows:</strong> Pension funds…”).</li>
          <li>Keep body text as normal paragraphs; they appear in light grey on the blog.</li>
          <li>The sidebar (Table of Contents, Quick Links) is automatic on the blog post page.</li>
        </ul>
      </div>
    </div>
  );
}
