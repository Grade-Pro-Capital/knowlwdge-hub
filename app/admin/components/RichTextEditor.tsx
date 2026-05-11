"use client";

import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import { Extension, Mark, mergeAttributes } from "@tiptap/core";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import TextStyle from "@tiptap/extension-text-style";
import { Table } from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
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
  Table as TableIcon,
  TableRowsSplit,
  TableColumnsSplit,
  Trash2,
  ImagePlus,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Subscript,
  Superscript,
} from "lucide-react";

export type AdditionalImage = { id: string; url: string; key: string; alt: string };

const FONT_FAMILIES = [
  { label: "Default", value: "" },
  { label: "Inter", value: "Inter, sans-serif" },
  { label: "Arial", value: "Arial, sans-serif" },
  { label: "Georgia", value: "Georgia, serif" },
  { label: "Times", value: "'Times New Roman', serif" },
  { label: "Mono", value: "'Courier New', monospace" },
];

const FONT_SIZES = ["Default", "14px", "16px", "18px", "20px", "24px", "28px", "32px"];
const FONT_COLORS = [
  { label: "White", value: "#FFFFFF" },
  { label: "Gold", value: "#FDBE35" },
  { label: "Soft Gold", value: "#FDDA93" },
  { label: "Blue", value: "#93C5FD" },
  { label: "Green", value: "#86EFAC" },
  { label: "Red", value: "#FCA5A5" },
];

const buttonClass =
  "flex h-8 w-8 items-center justify-center rounded border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] text-[rgba(255,255,255,0.8)] hover:bg-[rgba(255,255,255,0.1)] hover:text-white disabled:opacity-40";
const activeClass = "!border-[#FDBE35] !bg-[#FDBE35]/20 !text-[#FDBE35]";
const selectClass =
  "h-8 rounded border border-[rgba(255,255,255,0.2)] bg-[#111] px-2 text-xs text-white hover:bg-[#171717] focus:border-[#FDBE35] focus:outline-none";

const StyledText = TextStyle.extend({
  addAttributes() {
    return {
      color: {
        default: null,
        parseHTML: (element) => element.style.color || null,
        renderHTML: (attributes) =>
          attributes.color ? { style: `color: ${attributes.color}` } : {},
      },
      fontSize: {
        default: null,
        parseHTML: (element) => element.style.fontSize || null,
        renderHTML: (attributes) =>
          attributes.fontSize ? { style: `font-size: ${attributes.fontSize}` } : {},
      },
      fontFamily: {
        default: null,
        parseHTML: (element) => element.style.fontFamily || null,
        renderHTML: (attributes) =>
          attributes.fontFamily ? { style: `font-family: ${attributes.fontFamily}` } : {},
      },
    };
  },
});

const TextAlign = Extension.create({
  name: "textAlign",
  addGlobalAttributes() {
    return [
      {
        types: ["heading", "paragraph"],
        attributes: {
          textAlign: {
            default: null,
            parseHTML: (element) => element.style.textAlign || null,
            renderHTML: (attributes) =>
              attributes.textAlign ? { style: `text-align: ${attributes.textAlign}` } : {},
          },
        },
      },
    ];
  },
});

const SubscriptMark = Mark.create({
  name: "subscript",
  excludes: "superscript",
  parseHTML() {
    return [{ tag: "sub" }, { style: "vertical-align=sub" }];
  },
  renderHTML({ HTMLAttributes }) {
    return ["sub", mergeAttributes(HTMLAttributes), 0];
  },
});

const SuperscriptMark = Mark.create({
  name: "superscript",
  excludes: "subscript",
  parseHTML() {
    return [{ tag: "sup" }, { style: "vertical-align=super" }];
  },
  renderHTML({ HTMLAttributes }) {
    return ["sup", mergeAttributes(HTMLAttributes), 0];
  },
});

function setTextStyle(editor: Editor, attributes: Record<string, string | null>) {
  editor.chain().focus().setMark("textStyle", attributes).removeEmptyTextStyle().run();
}

function setTextAlignment(editor: Editor, textAlign: string | null) {
  editor
    .chain()
    .focus()
    .updateAttributes("paragraph", { textAlign })
    .updateAttributes("heading", { textAlign })
    .run();
}

function Toolbar({
  editor,
  additionalImages,
}: {
  editor: Editor | null;
  additionalImages?: AdditionalImage[];
}) {
  const [linkUrl, setLinkUrl] = useState("");
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [showTableMenu, setShowTableMenu] = useState(false);
  const [showImageMenu, setShowImageMenu] = useState(false);

  const inTable = editor?.isActive("table") ?? false;
  const textStyle = editor?.getAttributes("textStyle") ?? {};
  const headingAttrs = editor?.getAttributes("heading") ?? {};
  const paragraphAttrs = editor?.getAttributes("paragraph") ?? {};
  const currentAlignment = headingAttrs.textAlign || paragraphAttrs.textAlign || "left";

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
    <div className="sticky top-0 z-20 flex flex-wrap items-center gap-1 rounded-t-lg border border-b-0 border-[rgba(255,255,255,0.2)] bg-[#090909]/95 p-1 shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur">
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
      <select
        value={textStyle.fontFamily || ""}
        onChange={(e) => setTextStyle(editor, { fontFamily: e.target.value || null })}
        className={`${selectClass} max-w-[105px]`}
        title="Font family"
      >
        {FONT_FAMILIES.map((font) => (
          <option key={font.label} value={font.value}>
            {font.label}
          </option>
        ))}
      </select>
      <select
        value={textStyle.fontSize || "Default"}
        onChange={(e) => setTextStyle(editor, { fontSize: e.target.value === "Default" ? null : e.target.value })}
        className={`${selectClass} w-[76px]`}
        title="Font size"
      >
        {FONT_SIZES.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      <div className="flex h-8 items-center rounded border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-1">
        <input
          type="color"
          value={textStyle.color || "#FFFFFF"}
          onChange={(e) => setTextStyle(editor, { color: e.target.value })}
          className="h-6 w-7 cursor-pointer border-0 bg-transparent p-0"
          title="Font color"
        />
        <select
          value={textStyle.color || ""}
          onChange={(e) => setTextStyle(editor, { color: e.target.value || null })}
          className="h-6 w-[78px] rounded bg-[#111] text-xs text-white focus:outline-none"
          title="Font color"
        >
          <option value="" className="bg-[#111] text-white">
            Color
          </option>
          {FONT_COLORS.map((color) => (
            <option key={color.value} value={color.value} className="bg-[#111] text-white">
              {color.label}
            </option>
          ))}
        </select>
      </div>
      <span className="mx-1 h-5 w-px bg-[rgba(255,255,255,0.2)]" />
      {[
        { value: "left", title: "Align left", icon: AlignLeft },
        { value: "center", title: "Align center", icon: AlignCenter },
        { value: "right", title: "Align right", icon: AlignRight },
        { value: "justify", title: "Justify", icon: AlignJustify },
      ].map(({ value, title, icon: Icon }) => (
        <button
          key={value}
          type="button"
          onClick={() => setTextAlignment(editor, value === "left" ? null : value)}
          className={`${buttonClass} ${currentAlignment === value ? activeClass : ""}`}
          title={title}
        >
          <Icon className="h-4 w-4" />
        </button>
      ))}
      <span className="mx-1 h-5 w-px bg-[rgba(255,255,255,0.2)]" />
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleMark("subscript").run()}
        className={`${buttonClass} ${editor.isActive("subscript") ? activeClass : ""}`}
        title="Subscript"
      >
        <Subscript className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleMark("superscript").run()}
        className={`${buttonClass} ${editor.isActive("superscript") ? activeClass : ""}`}
        title="Superscript"
      >
        <Superscript className="h-4 w-4" />
      </button>
      <span className="mx-1 h-5 w-px bg-[rgba(255,255,255,0.2)]" />
      <div className="relative">
        <button
          type="button"
          onClick={() => setShowTableMenu((v) => !v)}
          className={`${buttonClass} ${inTable ? activeClass : ""}`}
          title="Table"
        >
          <TableIcon className="h-4 w-4" />
        </button>
        {showTableMenu && (
          <div className="absolute left-0 top-full z-10 mt-1 flex flex-col gap-0.5 rounded-lg border border-[rgba(255,255,255,0.2)] bg-[#1a1a1a] p-1.5 shadow-xl">
            <span className="px-2 py-1 text-xs text-[rgba(255,255,255,0.6)]">Insert table</span>
            {[
              { rows: 2, cols: 2, label: "2×2" },
              { rows: 3, cols: 3, label: "3×3" },
              { rows: 3, cols: 4, label: "3×4" },
              { rows: 4, cols: 3, label: "4×3" },
            ].map(({ rows, cols, label }) => (
              <button
                key={label}
                type="button"
                onClick={() => {
                  editor.chain().focus().insertTable({ rows, cols, withHeaderRow: true }).run();
                  setShowTableMenu(false);
                }}
                className="rounded px-2 py-1.5 text-left text-sm text-white hover:bg-[rgba(255,255,255,0.1)]"
              >
                {label}
              </button>
            ))}
            {inTable && (
              <>
                <span className="mt-1 border-t border-[rgba(255,255,255,0.15)] px-2 pt-1.5 text-xs text-[rgba(255,255,255,0.6)]">Edit table</span>
                <button
                  type="button"
                  onClick={() => { editor.chain().focus().addColumnAfter().run(); setShowTableMenu(false); }}
                  className="flex items-center gap-2 rounded px-2 py-1.5 text-sm text-white hover:bg-[rgba(255,255,255,0.1)]"
                  title="Add column"
                >
                  <TableColumnsSplit className="h-3.5 w-3.5" /> Add column
                </button>
                <button
                  type="button"
                  onClick={() => { editor.chain().focus().addRowAfter().run(); setShowTableMenu(false); }}
                  className="flex items-center gap-2 rounded px-2 py-1.5 text-sm text-white hover:bg-[rgba(255,255,255,0.1)]"
                  title="Add row"
                >
                  <TableRowsSplit className="h-3.5 w-3.5" /> Add row
                </button>
                <button
                  type="button"
                  onClick={() => { editor.chain().focus().deleteColumn().run(); setShowTableMenu(false); }}
                  className="flex items-center gap-2 rounded px-2 py-1.5 text-sm text-red-300 hover:bg-[rgba(255,255,255,0.1)]"
                  title="Delete column"
                >
                  <Trash2 className="h-3.5 w-3.5" /> Delete column
                </button>
                <button
                  type="button"
                  onClick={() => { editor.chain().focus().deleteRow().run(); setShowTableMenu(false); }}
                  className="flex items-center gap-2 rounded px-2 py-1.5 text-sm text-red-300 hover:bg-[rgba(255,255,255,0.1)]"
                  title="Delete row"
                >
                  <Trash2 className="h-3.5 w-3.5" /> Delete row
                </button>
                <button
                  type="button"
                  onClick={() => { editor.chain().focus().deleteTable().run(); setShowTableMenu(false); }}
                  className="flex items-center gap-2 rounded px-2 py-1.5 text-sm text-red-300 hover:bg-[rgba(255,255,255,0.1)]"
                  title="Delete table"
                >
                  <Trash2 className="h-3.5 w-3.5" /> Delete table
                </button>
              </>
            )}
          </div>
        )}
      </div>
      <span className="mx-1 h-5 w-px bg-[rgba(255,255,255,0.2)]" />
      {/* Insert Image button */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setShowImageMenu((v) => !v)}
          className={`${buttonClass} ${editor.isActive("image") ? activeClass : ""}`}
          title="Insert Image"
        >
          <ImagePlus className="h-4 w-4" />
        </button>
        {showImageMenu && (
          <div className="absolute left-0 top-full z-10 mt-1 flex min-w-[220px] flex-col gap-0.5 rounded-lg border border-[rgba(255,255,255,0.2)] bg-[#1a1a1a] p-1.5 shadow-xl">
            <span className="px-2 py-1 text-xs text-[rgba(255,255,255,0.6)]">Insert uploaded image</span>
            {(!additionalImages || additionalImages.length === 0) ? (
              <span className="px-2 py-2 text-xs text-[rgba(255,255,255,0.4)]">No additional images uploaded yet</span>
            ) : (
              additionalImages.map((img) => (
                <button
                  key={img.id}
                  type="button"
                  onClick={() => {
                    editor.chain().focus().setImage({ src: img.url, alt: img.alt }).run();
                    setShowImageMenu(false);
                  }}
                  className="flex items-center gap-2 rounded px-2 py-1.5 text-sm text-white hover:bg-[rgba(255,255,255,0.1)]"
                >
                  <img src={img.url} alt={img.id} className="h-8 w-8 rounded object-cover" />
                  <span className="font-mono text-xs text-[#FDBE35]">{img.id}</span>
                </button>
              ))
            )}
          </div>
        )}
      </div>
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
  additionalImages?: AdditionalImage[];
};

export function RichTextEditor({
  value,
  onChange,
  placeholder = "Write your post content…",
  minHeight = "320px",
  additionalImages,
}: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        linkOnPaste: true,
        HTMLAttributes: { class: "text-[#FDBE35] underline" },
      }),
      StyledText,
      TextAlign,
      SubscriptMark,
      SuperscriptMark,
      Image.configure({
        HTMLAttributes: { class: "blog-editor-image" },
      }),
      Placeholder.configure({ placeholder }),
      Table.configure({
        HTMLAttributes: { class: "blog-editor-table" },
      }),
      TableRow,
      TableCell,
      TableHeader,
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
      <Toolbar editor={editor} additionalImages={additionalImages} />
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
        .ProseMirror .blog-editor-table { border-collapse: collapse; width: 100%; margin: 1rem 0; }
        .ProseMirror .blog-editor-table th, .ProseMirror .blog-editor-table td { border: 1px solid rgba(255,255,255,0.25); padding: 0.5rem 0.75rem; text-align: left; }
        .ProseMirror .blog-editor-table th { background: rgba(253,190,53,0.2); color: #FDBE35; font-weight: 600; }
        .ProseMirror .blog-editor-image { max-width: 100%; height: auto; border-radius: 8px; margin: 1rem 0; }
        .ProseMirror a { color: #FDBE35; text-decoration: underline; cursor: pointer; }
      `}</style>
    </div>
  );
}
