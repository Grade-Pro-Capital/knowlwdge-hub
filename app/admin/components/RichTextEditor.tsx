"use client";

import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import { useCallback, useEffect, useState } from "react";
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

const buttonClass =
  "flex h-8 w-8 items-center justify-center rounded border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] text-[rgba(255,255,255,0.8)] hover:bg-[rgba(255,255,255,0.1)] hover:text-white disabled:opacity-40";
const activeClass = "!border-[#FDBE35] !bg-[#FDBE35]/20 !text-[#FDBE35]";

function Toolbar({ editor }: { editor: Editor | null }) {
  const [linkUrl, setLinkUrl] = useState("");
  const [showLinkInput, setShowLinkInput] = useState(false);

  const setLink = useCallback(() => {
    if (!editor) return;
    const previousUrl = editor.getAttributes("link").href;
    const url = linkUrl || previousUrl || "https://";
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
    setLinkUrl("");
    setShowLinkInput(false);
  }, [editor, linkUrl]);

  if (!editor) return null;

  return (
    <div className="flex flex-wrap items-center gap-1 rounded-t-lg border border-b-0 border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.03)] p-1">
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`${buttonClass} ${editor.isActive("bold") ? activeClass : ""}`}
        title="Bold"
      >
        <Bold className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`${buttonClass} ${editor.isActive("italic") ? activeClass : ""}`}
        title="Italic"
      >
        <Italic className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={`${buttonClass} ${editor.isActive("code") ? activeClass : ""}`}
        title="Code"
      >
        <Code className="h-4 w-4" />
      </button>
      <span className="mx-1 h-5 w-px bg-[rgba(255,255,255,0.2)]" />
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`${buttonClass} ${editor.isActive("heading", { level: 2 }) ? activeClass : ""}`}
        title="Heading 2"
      >
        <Heading2 className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`${buttonClass} ${editor.isActive("heading", { level: 3 }) ? activeClass : ""}`}
        title="Heading 3"
      >
        <Heading3 className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`${buttonClass} ${editor.isActive("blockquote") ? activeClass : ""}`}
        title="Quote"
      >
        <Quote className="h-4 w-4" />
      </button>
      <span className="mx-1 h-5 w-px bg-[rgba(255,255,255,0.2)]" />
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`${buttonClass} ${editor.isActive("bulletList") ? activeClass : ""}`}
        title="Bullet list"
      >
        <List className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`${buttonClass} ${editor.isActive("orderedList") ? activeClass : ""}`}
        title="Numbered list"
      >
        <ListOrdered className="h-4 w-4" />
      </button>
      <span className="mx-1 h-5 w-px bg-[rgba(255,255,255,0.2)]" />
      <div className="relative">
        <button
          type="button"
          onClick={() => setShowLinkInput((v) => !v)}
          className={`${buttonClass} ${editor.isActive("link") ? activeClass : ""}`}
          title="Link"
        >
          <LinkIcon className="h-4 w-4" />
        </button>
        {showLinkInput && (
          <div className="absolute left-0 top-full z-10 mt-1 flex gap-1 rounded-lg border border-[rgba(255,255,255,0.2)] bg-[#1a1a1a] p-2 shadow-xl">
            <input
              type="url"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              placeholder="https://..."
              className="w-48 rounded border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-2 py-1 text-sm text-white focus:border-[#FDBE35] focus:outline-none"
              onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), setLink())}
            />
            <button type="button" onClick={setLink} className={buttonClass}>
              OK
            </button>
          </div>
        )}
      </div>
      <span className="mx-1 h-5 w-px bg-[rgba(255,255,255,0.2)]" />
      <button
        type="button"
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().undo()}
        className={buttonClass}
        title="Undo"
      >
        <Undo className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().redo()}
        className={buttonClass}
        title="Redo"
      >
        <Redo className="h-4 w-4" />
      </button>
    </div>
  );
}

type RichTextEditorProps = {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
  minHeight?: string;
};

export function RichTextEditor({
  value,
  onChange,
  placeholder = "Write your post content…",
  minHeight = "320px",
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: { class: "text-[#FDBE35] underline" },
      }),
      Placeholder.configure({ placeholder }),
    ],
    content: value || "",
    editorProps: {
      attributes: {
        class:
          "prose prose-invert max-w-none min-h-[200px] px-4 py-3 text-white focus:outline-none",
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (!editor) return;
    const current = editor.getHTML();
    const next = value ?? "";
    if (current !== next && next !== "<p></p>") {
      editor.commands.setContent(next, false);
    }
  }, [value, editor]);

  return (
    <div className="rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.03)]">
      <Toolbar editor={editor} />
      <div
        className="rounded-b-lg border border-[rgba(255,255,255,0.2)] border-t-0"
        style={{ minHeight }}
      >
        <EditorContent editor={editor} />
      </div>
      <style>{`
        .ProseMirror p.is-editor-empty:first-child::before,
        .ProseMirror p.is-empty:first-child::before {
          color: rgba(255,255,255,0.4);
          content: attr(data-placeholder);
          float: left;
          height: 0;
          pointer-events: none;
        }
        .ProseMirror {
          min-height: ${minHeight};
        }
        .ProseMirror:focus { outline: none; }
        .ProseMirror h2 { font-size: 1.5rem; font-weight: 600; color: #FDBE35; margin-top: 1.5rem; margin-bottom: 0.75rem; }
        .ProseMirror h3 { font-size: 1.25rem; font-weight: 600; margin-top: 1.25rem; margin-bottom: 0.5rem; }
        .ProseMirror p { margin-bottom: 0.75rem; }
        .ProseMirror ul, .ProseMirror ol { margin-bottom: 0.75rem; padding-left: 1.5rem; }
        .ProseMirror blockquote { border-left: 4px solid #FDBE35; padding-left: 1rem; margin: 1rem 0; color: rgba(255,255,255,0.85); }
        .ProseMirror code { background: rgba(255,255,255,0.1); padding: 0.2em 0.4em; border-radius: 4px; font-size: 0.9em; }
      `}</style>
    </div>
  );
}
