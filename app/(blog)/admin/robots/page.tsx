"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AlertTriangle, CheckCircle2, ExternalLink, RotateCcw, XCircle } from "lucide-react";
import { analyzeRobotsTxt, checkUrl, parseRobotsTxt, type KeyPage, type RobotsIssue } from "@/app/lib/robotsTxt";

type Version = { id: string; text: string; note: string | null; savedBy: string | null; createdAt: string };
type RobotsState = {
  text: string;
  isDefault: boolean;
  defaultText: string;
  updatedAt: string | null;
  updatedBy: string | null;
  history: Version[];
  keyPages: KeyPage[];
  baseUrl: string;
};

const TEST_AGENTS = [
  { value: "Googlebot", label: "Google" },
  { value: "Bingbot", label: "Bing" },
  { value: "GPTBot", label: "ChatGPT (GPTBot)" },
  { value: "*", label: "Any other crawler" },
];

function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
}

export default function AdminRobotsPage() {
  const [state, setState] = useState<RobotsState | null>(null);
  const [text, setText] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ kind: "error" | "success"; text: string } | null>(null);
  const [restoreNote, setRestoreNote] = useState<string | null>(null);
  const [testUrl, setTestUrl] = useState("");
  const [testAgent, setTestAgent] = useState("Googlebot");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    fetch("/api/admin/robots")
      .then((res) => res.json())
      .then((data: RobotsState) => {
        setState(data);
        setText(data.text);
      })
      .catch(() => setMessage({ kind: "error", text: "Could not load robots.txt" }));
  }, []);

  const analysis = useMemo(
    () => (state ? analyzeRobotsTxt(text, { baseUrl: state.baseUrl, keyPages: state.keyPages }) : null),
    [text, state],
  );
  const testVerdict = useMemo(
    () => (testUrl.trim() ? checkUrl(parseRobotsTxt(text), testAgent, testUrl) : null),
    [text, testUrl, testAgent],
  );

  if (!state || !analysis) {
    return <p className="text-[rgba(255,255,255,0.6)]">{message?.text ?? "Loading robots.txt…"}</p>;
  }

  const dirty = text !== state.text;
  const canSave = dirty && !saving && analysis.errors.length === 0 && (!analysis.blocksKeyPages || confirmed);

  function goToLine(line?: number) {
    const el = textareaRef.current;
    if (!el || !line) return;
    const lines = text.split("\n");
    const start = lines.slice(0, line - 1).reduce((n, l) => n + l.length + 1, 0);
    el.focus();
    el.setSelectionRange(start, start + (lines[line - 1]?.length ?? 0));
  }

  function edit(value: string) {
    setText(value);
    setRestoreNote(null);
    setMessage(null);
  }

  async function save() {
    setSaving(true);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/robots", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, confirmBlocked: analysis!.blocksKeyPages && confirmed, note: restoreNote ?? "Saved" }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage({ kind: "error", text: data.error ?? "Save failed" });
        return;
      }
      setState(data);
      setText(data.text);
      setConfirmed(false);
      setRestoreNote(null);
      setMessage({ kind: "success", text: "Saved. robots.txt is live now; Google re-reads it within about a day." });
    } catch {
      setMessage({ kind: "error", text: "Save failed" });
    } finally {
      setSaving(false);
    }
  }

  async function resetToDefault() {
    if (!confirm("Replace robots.txt with the built-in default? The current version stays in the history.")) return;
    setSaving(true);
    setMessage(null);
    try {
      const res = await fetch("/api/admin/robots", { method: "DELETE" });
      const data = await res.json();
      if (!res.ok) {
        setMessage({ kind: "error", text: data.error ?? "Reset failed" });
        return;
      }
      setState(data);
      setText(data.text);
      setConfirmed(false);
      setMessage({ kind: "success", text: "Reset to the built-in default." });
    } finally {
      setSaving(false);
    }
  }

  function loadVersion(v: Version) {
    setText(v.text);
    setRestoreNote(`Restored version from ${formatDateTime(v.createdAt)}`);
    setConfirmed(false);
    setMessage({ kind: "success", text: "Version loaded into the editor. Review the checks, then Save to make it live." });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const issueList = (issues: RobotsIssue[], tone: "error" | "warning") => (
    <ul className={`space-y-1 text-sm ${tone === "error" ? "text-red-400" : "text-amber-300"}`}>
      {issues.map((issue, i) => (
        <li key={i}>
          {issue.line ? (
            <button type="button" onClick={() => goToLine(issue.line)} className="text-left underline-offset-2 hover:underline">
              {issue.message}
            </button>
          ) : (
            issue.message
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <h1 className="mb-2 text-2xl font-semibold">robots.txt</h1>
      <p className="mb-2 max-w-3xl text-sm text-[rgba(255,255,255,0.6)]">
        Tells search engines and AI crawlers which parts of the site they may visit. One wrong line can
        remove the whole site from Google, so every change is checked below before it can be saved.
        Google re-reads this file about once a day.
      </p>
      <p className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-[rgba(255,255,255,0.6)]">
        <span>
          Live version:{" "}
          {state.isDefault ? (
            <strong className="text-white">built-in default</strong>
          ) : (
            <strong className="text-white">
              custom{state.updatedAt ? `, saved ${formatDateTime(state.updatedAt)}` : ""}
              {state.updatedBy ? ` by ${state.updatedBy}` : ""}
            </strong>
          )}
        </span>
        <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:text-[#FDBE35]">
          View live file <ExternalLink className="h-3 w-3" />
        </a>
      </p>

      {message && (
        <p className={`mb-4 rounded-lg px-3 py-2 text-sm ${message.kind === "error" ? "bg-red-500/20 text-red-400" : "bg-green-500/15 text-green-300"}`}>
          {message.text}
        </p>
      )}

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div>
          <textarea
            ref={textareaRef}
            value={text}
            onChange={(e) => edit(e.target.value)}
            spellCheck={false}
            rows={22}
            aria-label="robots.txt contents"
            className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-3 font-mono text-sm leading-6 text-white focus:border-[#FDBE35] focus:outline-none"
          />

          {analysis.blocksKeyPages && (
            <div className="mt-4 rounded-lg border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-300">
              <p className="mb-2 flex items-center gap-2 font-medium">
                <AlertTriangle className="h-4 w-4" /> These rules block important pages from search engines.
              </p>
              <label className="flex items-start gap-2">
                <input type="checkbox" checked={confirmed} onChange={(e) => setConfirmed(e.target.checked)} className="mt-0.5" />
                <span>I understand the blocked pages listed on the right will disappear from Google search.</span>
              </label>
            </div>
          )}

          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={save}
              disabled={!canSave}
              className="rounded-lg bg-[#FDBE35] px-4 py-2 text-sm text-[#020100] hover:bg-[#FDDA93] disabled:opacity-40"
            >
              {saving ? "Saving…" : "Save"}
            </button>
            <button
              type="button"
              onClick={() => edit(state.text)}
              disabled={!dirty || saving}
              className="rounded-lg border border-[rgba(255,255,255,0.2)] px-4 py-2 text-sm text-[rgba(255,255,255,0.8)] hover:bg-[rgba(255,255,255,0.05)] disabled:opacity-40"
            >
              Discard changes
            </button>
            <button
              type="button"
              onClick={resetToDefault}
              disabled={state.isDefault || saving}
              className="inline-flex items-center gap-2 rounded-lg border border-[rgba(255,255,255,0.2)] px-4 py-2 text-sm text-[rgba(255,255,255,0.8)] hover:bg-[rgba(255,255,255,0.05)] disabled:opacity-40"
            >
              <RotateCcw className="h-4 w-4" /> Reset to default
            </button>
          </div>
          {!dirty && !state.isDefault && (
            <p className="mt-2 text-xs text-[rgba(255,255,255,0.5)]">No unsaved changes.</p>
          )}
        </div>

        <aside className="space-y-6">
          <section className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] p-4">
            <h2 className="mb-3 text-sm font-medium">Checks</h2>
            {analysis.errors.length === 0 && analysis.warnings.length === 0 ? (
              <p className="flex items-center gap-2 text-sm text-green-400">
                <CheckCircle2 className="h-4 w-4" /> No problems found.
              </p>
            ) : (
              <div className="space-y-3">
                {analysis.errors.length > 0 && (
                  <div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-wide text-red-400">Errors (must fix)</p>
                    {issueList(analysis.errors, "error")}
                  </div>
                )}
                {analysis.warnings.length > 0 && (
                  <div>
                    <p className="mb-1 text-xs font-medium uppercase tracking-wide text-amber-300">Warnings</p>
                    {issueList(analysis.warnings, "warning")}
                  </div>
                )}
              </div>
            )}
          </section>

          <section className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] p-4">
            <h2 className="mb-3 text-sm font-medium">Key pages</h2>
            <ul className="space-y-2 text-sm">
              {analysis.keyPages.map((page) => (
                <li key={page.path}>
                  <div className="flex items-center gap-2">
                    {page.blockedFor.length ? (
                      <XCircle className="h-4 w-4 shrink-0 text-red-400" />
                    ) : (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-green-400" />
                    )}
                    <span className="shrink-0">{page.label}</span>
                    <span className="truncate font-mono text-xs text-[rgba(255,255,255,0.5)]">{page.path}</span>
                  </div>
                  {page.blockedFor.length > 0 && (
                    <p className="ml-6 text-xs text-red-400">
                      Blocked for {page.blockedFor.join(" and ")}
                      {page.rule && (
                        <>
                          {" "}by{" "}
                          <button type="button" onClick={() => goToLine(page.rule?.line)} className="underline underline-offset-2">
                            line {page.rule.line}
                          </button>
                        </>
                      )}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] p-4">
            <h2 className="mb-3 text-sm font-medium">Test a URL</h2>
            <div className="space-y-2">
              <input
                type="text"
                value={testUrl}
                onChange={(e) => setTestUrl(e.target.value)}
                placeholder="/blogs/some-article or full URL"
                aria-label="URL to test"
                className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-3 py-2 text-sm text-white focus:border-[#FDBE35] focus:outline-none"
              />
              <select
                value={testAgent}
                onChange={(e) => setTestAgent(e.target.value)}
                aria-label="Crawler"
                className="w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-3 py-2 text-sm text-white focus:border-[#FDBE35] focus:outline-none"
              >
                {TEST_AGENTS.map((a) => (
                  <option key={a.value} value={a.value}>
                    {a.label}
                  </option>
                ))}
              </select>
              {testVerdict && (
                <p className={`text-sm ${testVerdict.allowed ? "text-green-400" : "text-red-400"}`}>
                  {testVerdict.allowed ? "Allowed" : "Blocked"}
                  {testVerdict.rule ? (
                    <>
                      {" "}by{" "}
                      <button type="button" onClick={() => goToLine(testVerdict.rule?.line)} className="underline underline-offset-2">
                        line {testVerdict.rule.line}
                      </button>
                      <span className="font-mono text-xs text-[rgba(255,255,255,0.6)]">
                        {" "}({testVerdict.rule.type === "allow" ? "Allow" : "Disallow"}: {testVerdict.rule.pattern})
                      </span>
                    </>
                  ) : (
                    " (no rule matches)"
                  )}
                </p>
              )}
            </div>
          </section>
        </aside>
      </div>

      <section className="mt-10">
        <h2 className="mb-3 text-base font-medium">History</h2>
        {state.history.length === 0 ? (
          <p className="text-sm text-[rgba(255,255,255,0.6)]">No changes yet. The built-in default has always been live.</p>
        ) : (
          <ul className="divide-y divide-[rgba(255,255,255,0.05)] rounded-xl border border-[rgba(255,255,255,0.1)]">
            {state.history.map((v, i) => (
              <li key={v.id} className="px-4 py-3 text-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span>
                    {formatDateTime(v.createdAt)}
                    <span className="text-[rgba(255,255,255,0.5)]">
                      {" "}· {v.note ?? "Saved"}
                      {v.savedBy ? ` · ${v.savedBy}` : ""}
                      {i === 0 ? " · current" : ""}
                    </span>
                  </span>
                  <button
                    type="button"
                    onClick={() => loadVersion(v)}
                    className="rounded border border-[rgba(255,255,255,0.2)] px-3 py-1 text-xs hover:bg-[rgba(255,255,255,0.05)]"
                  >
                    Load into editor
                  </button>
                </div>
                <details className="mt-1">
                  <summary className="cursor-pointer text-xs text-[rgba(255,255,255,0.5)]">Show file</summary>
                  <pre className="mt-2 overflow-x-auto rounded bg-[rgba(255,255,255,0.04)] p-3 font-mono text-xs text-[rgba(255,255,255,0.8)]">
                    {v.text}
                  </pre>
                </details>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
