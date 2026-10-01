"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AlertTriangle, CheckCircle2, ExternalLink, Mail, RotateCcw, ShieldCheck, XCircle } from "lucide-react";
import {
  accessLabel,
  analyzeRobotsTxt,
  checkUrl,
  diffLines,
  parseRobotsTxt,
  type KeyPage,
  type KeyPageChange,
  type RobotsIssue,
} from "@/app/lib/robotsTxt";

type Version = {
  id: string;
  text: string;
  note: string | null;
  savedBy: string | null;
  createdAt: string;
  action: "saved" | "reset" | "restored" | null;
  reason: string | null;
  restoredFrom: string | null;
  approvedVia: string | null;
  approvedAt: string | null;
  ip: string | null;
  linesAdded: number | null;
  linesRemoved: number | null;
  keyPageChanges: KeyPageChange[] | null;
};
type Approval = {
  id: string;
  action: "save" | "reset";
  reason: string;
  restoredFrom: string | null;
  sentTo: string;
  status: "pending" | "approved" | "expired" | "failed" | "cancelled" | "superseded";
  attempts: number;
  requestedBy: string | null;
  requestedIp: string | null;
  createdAt: string;
  expiresAt: string;
  resolvedAt: string | null;
};
type RobotsState = {
  text: string;
  isDefault: boolean;
  defaultText: string;
  updatedAt: string | null;
  updatedBy: string | null;
  history: Version[];
  keyPages: KeyPage[];
  baseUrl: string;
  approver: string;
  approvals: Approval[];
};
type Pending = { id: string; sentTo: string; expiresAt: string; action: "save" | "reset" };

const TEST_AGENTS = [
  { value: "Googlebot", label: "Google" },
  { value: "Bingbot", label: "Bing" },
  { value: "GPTBot", label: "ChatGPT (GPTBot)" },
  { value: "*", label: "Any other crawler" },
];

const inputClass =
  "w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-3 py-2 text-sm text-white focus:border-[#FDBE35] focus:outline-none";

function formatDateTime(iso: string): string {
  return new Date(iso).toLocaleString("en-IN", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
}

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" });
}

function versionLabel(v: Version): string {
  if (v.action === "restored" && v.restoredFrom) return `Restored the version from ${formatDateTime(v.restoredFrom)}`;
  if (v.action === "reset") return "Reset to default";
  return v.note ?? "Saved";
}

const STATUS: Record<Approval["status"], { label: string; tone: string }> = {
  pending: { label: "Waiting for the code", tone: "text-amber-300" },
  approved: { label: "Approved and saved", tone: "text-green-400" },
  expired: { label: "Code expired unused", tone: "text-[rgba(255,255,255,0.5)]" },
  failed: { label: "Failed", tone: "text-red-400" },
  cancelled: { label: "Cancelled", tone: "text-[rgba(255,255,255,0.5)]" },
  superseded: { label: "Replaced by a newer code", tone: "text-[rgba(255,255,255,0.5)]" },
};

function approvalStatus(a: Approval) {
  if (a.status === "failed") {
    return { label: a.attempts >= 5 ? "Wrong code 5 times" : "Email could not be sent", tone: STATUS.failed.tone };
  }
  const s = STATUS[a.status];
  return a.status !== "approved" && a.attempts > 0 ? { ...s, label: `${s.label} (${a.attempts} wrong)` } : s;
}

/** Unchanged lines shown around each change; longer unchanged stretches are folded. */
const CONTEXT = 2;

function DiffView({ before, after }: { before: string; after: string }) {
  const lines = diffLines(before, after);
  const near = lines.map((_, i) =>
    lines.slice(Math.max(0, i - CONTEXT), i + CONTEXT + 1).some((d) => d.type !== "same"),
  );
  const rows: ({ kind: "line"; i: number } | { kind: "fold"; count: number })[] = [];
  lines.forEach((_, i) => {
    if (near[i]) rows.push({ kind: "line", i });
    else if (rows.at(-1)?.kind === "fold") (rows.at(-1) as { count: number }).count++;
    else rows.push({ kind: "fold", count: 1 });
  });
  if (!lines.some((d) => d.type !== "same")) return <p className="mt-2 text-xs text-[rgba(255,255,255,0.5)]">No differences.</p>;
  return (
    <pre className="mt-2 overflow-x-auto rounded bg-[rgba(255,255,255,0.04)] p-3 font-mono text-xs leading-5">
      {rows.map((row, k) => {
        if (row.kind === "fold") {
          return (
            <div key={k} className="text-[rgba(255,255,255,0.35)]">
              {`  … ${row.count} unchanged ${row.count === 1 ? "line" : "lines"}`}
            </div>
          );
        }
        const d = lines[row.i];
        return (
          <div
            key={k}
            className={
              d.type === "add"
                ? "bg-green-500/10 text-green-300"
                : d.type === "remove"
                  ? "bg-red-500/10 text-red-300"
                  : "text-[rgba(255,255,255,0.45)]"
            }
          >
            {d.type === "add" ? "+ " : d.type === "remove" ? "− " : "  "}
            {d.text || " "}
          </div>
        );
      })}
    </pre>
  );
}

export default function AdminRobotsPage() {
  const [state, setState] = useState<RobotsState | null>(null);
  const [text, setText] = useState("");
  const [reason, setReason] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState<{ kind: "error" | "success"; text: string } | null>(null);
  const [restoredFrom, setRestoredFrom] = useState<string | null>(null);
  const [pending, setPending] = useState<Pending | null>(null);
  const [code, setCode] = useState("");
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
  const reasonOk = reason.trim().length >= 3;
  const canRequestSave =
    dirty && !busy && !pending && reasonOk && analysis.errors.length === 0 && (!analysis.blocksKeyPages || confirmed);

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
    setRestoredFrom(null);
    setMessage(null);
  }

  async function post(url: string, body: object) {
    const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const errors = Array.isArray(data.errors) ? ` ${data.errors.map((e: RobotsIssue) => e.message).join(" ")}` : "";
      throw new Error((data.error ?? "Something went wrong") + errors);
    }
    return data;
  }

  /** Step 1: check the change on the server and email the approval code. */
  async function requestCode(action: "save" | "reset") {
    if (action === "reset" && !confirm("Replace robots.txt with the built-in default? The current version stays in the history.")) return;
    setBusy(true);
    setMessage(null);
    try {
      const data = await post("/api/admin/robots/request", {
        action,
        text: action === "save" ? text : undefined,
        reason,
        confirmBlocked: analysis!.blocksKeyPages && confirmed,
        restoredFrom: action === "save" ? restoredFrom : null,
      });
      setPending({ id: data.id, sentTo: data.sentTo, expiresAt: data.expiresAt, action });
      setCode("");
    } catch (e) {
      setMessage({ kind: "error", text: e instanceof Error ? e.message : "Could not send the code" });
    } finally {
      setBusy(false);
    }
  }

  /** Step 2: enter the code; the change goes live. */
  async function approve(e: React.FormEvent) {
    e.preventDefault();
    if (!pending) return;
    setBusy(true);
    setMessage(null);
    try {
      const data: RobotsState = await post("/api/admin/robots/approve", { requestId: pending.id, code });
      setState(data);
      setText(data.text);
      setPending(null);
      setCode("");
      setReason("");
      setConfirmed(false);
      setRestoredFrom(null);
      setMessage({ kind: "success", text: "Approved and saved. robots.txt is live now; Google re-reads it within about a day." });
    } catch (err) {
      setMessage({ kind: "error", text: err instanceof Error ? err.message : "Approval failed" });
    } finally {
      setBusy(false);
    }
  }

  async function cancelPending() {
    if (!pending) return;
    setBusy(true);
    try {
      const data: RobotsState = await post("/api/admin/robots/cancel", { requestId: pending.id });
      setState(data);
    } catch {
      // Cancelling is best-effort: the code expires anyway.
    } finally {
      setPending(null);
      setCode("");
      setBusy(false);
      setMessage(null);
    }
  }

  function loadVersion(v: Version) {
    if (pending) return;
    setText(v.text);
    setRestoredFrom(v.createdAt);
    setConfirmed(false);
    setMessage({
      kind: "success",
      text: "Version loaded into the editor. Review the checks, give a reason, then send the approval code to make it live.",
    });
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
        remove the whole site from Google, so every change is checked below, and goes live only after it is
        approved with a code emailed to <strong className="text-white">{state.approver}</strong>. Google
        re-reads this file about once a day.
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
            readOnly={!!pending}
            spellCheck={false}
            rows={22}
            aria-label="robots.txt contents"
            className={`w-full rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-4 py-3 font-mono text-sm leading-6 text-white focus:border-[#FDBE35] focus:outline-none ${pending ? "opacity-60" : ""}`}
          />

          {analysis.blocksKeyPages && !pending && (
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

          {pending ? (
            <form onSubmit={approve} className="mt-4 rounded-xl border border-[rgba(253,190,53,0.4)] bg-[rgba(253,190,53,0.06)] p-4">
              <p className="mb-1 flex items-center gap-2 text-sm font-medium">
                <Mail className="h-4 w-4 text-[#FDBE35]" />
                Approval code sent to {pending.sentTo}
              </p>
              <p className="mb-3 text-xs text-[rgba(255,255,255,0.6)]">
                {pending.action === "reset" ? "Reset to the built-in default" : restoredFrom ? "Restore of an earlier version" : "Your edit"} goes
                live once the 6-digit code from that email is entered here. It expires at {formatTime(pending.expiresAt)} and
                works once. The text is locked until then.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <input
                  type="text"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  maxLength={7}
                  value={code}
                  onChange={(e) => setCode(e.target.value.replace(/[^\d ]/g, ""))}
                  placeholder="123456"
                  aria-label="Approval code"
                  autoFocus
                  className="w-40 rounded-lg border border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-3 py-2 text-center font-mono text-lg tracking-[0.3em] text-white focus:border-[#FDBE35] focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={busy || code.replace(/\s/g, "").length !== 6}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#FDBE35] px-4 py-2 text-sm text-[#020100] hover:bg-[#FDDA93] disabled:opacity-40"
                >
                  <ShieldCheck className="h-4 w-4" />
                  {busy ? "Checking…" : "Approve and save"}
                </button>
                <button
                  type="button"
                  onClick={() => requestCode(pending.action)}
                  disabled={busy}
                  className="rounded-lg border border-[rgba(255,255,255,0.2)] px-3 py-2 text-xs text-[rgba(255,255,255,0.8)] hover:bg-[rgba(255,255,255,0.05)] disabled:opacity-40"
                >
                  Send a new code
                </button>
                <button
                  type="button"
                  onClick={cancelPending}
                  disabled={busy}
                  className="text-xs text-[rgba(255,255,255,0.6)] hover:text-white disabled:opacity-40"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <>
              <label className="mt-4 block">
                <span className="mb-1 block text-sm text-[rgba(255,255,255,0.7)]">
                  Reason for this change <span className="text-[rgba(255,255,255,0.4)]">(required, shown in the history and the email)</span>
                </span>
                <input
                  type="text"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  maxLength={300}
                  placeholder="e.g. Block the new /drafts/ section from crawlers"
                  className={inputClass}
                />
              </label>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => requestCode("save")}
                  disabled={!canRequestSave}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#FDBE35] px-4 py-2 text-sm text-[#020100] hover:bg-[#FDDA93] disabled:opacity-40"
                >
                  <Mail className="h-4 w-4" />
                  {busy ? "Sending…" : "Send approval code"}
                </button>
                <button
                  type="button"
                  onClick={() => edit(state.text)}
                  disabled={!dirty || busy}
                  className="rounded-lg border border-[rgba(255,255,255,0.2)] px-4 py-2 text-sm text-[rgba(255,255,255,0.8)] hover:bg-[rgba(255,255,255,0.05)] disabled:opacity-40"
                >
                  Discard changes
                </button>
                <button
                  type="button"
                  onClick={() => requestCode("reset")}
                  disabled={state.isDefault || busy || !reasonOk}
                  title={!reasonOk ? "Write a reason first" : undefined}
                  className="inline-flex items-center gap-2 rounded-lg border border-[rgba(255,255,255,0.2)] px-4 py-2 text-sm text-[rgba(255,255,255,0.8)] hover:bg-[rgba(255,255,255,0.05)] disabled:opacity-40"
                >
                  <RotateCcw className="h-4 w-4" /> Reset to default
                </button>
              </div>
              {dirty && !reasonOk && <p className="mt-2 text-xs text-[rgba(255,255,255,0.5)]">Write a reason to send the approval code.</p>}
              {!dirty && !state.isDefault && <p className="mt-2 text-xs text-[rgba(255,255,255,0.5)]">No unsaved changes.</p>}
            </>
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
                className={inputClass}
              />
              <select value={testAgent} onChange={(e) => setTestAgent(e.target.value)} aria-label="Crawler" className={inputClass}>
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
        <h2 className="mb-1 text-base font-medium">History</h2>
        <p className="mb-3 text-sm text-[rgba(255,255,255,0.6)]">Every change that went live, newest first. All versions are kept.</p>
        {state.history.length === 0 ? (
          <p className="text-sm text-[rgba(255,255,255,0.6)]">No changes yet. The built-in default has always been live.</p>
        ) : (
          <ul className="divide-y divide-[rgba(255,255,255,0.05)] rounded-xl border border-[rgba(255,255,255,0.1)]">
            {state.history.map((v, i) => {
              const previous = state.history[i + 1]?.text ?? state.defaultText;
              return (
                <li key={v.id} className="px-4 py-4 text-sm">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p>
                        <span className="font-medium">{formatDateTime(v.createdAt)}</span>
                        <span className="text-[rgba(255,255,255,0.6)]"> · {versionLabel(v)}</span>
                        {i === 0 && <span className="ml-2 rounded-full bg-green-500/20 px-2 py-0.5 text-xs text-green-400">Live</span>}
                      </p>
                      <dl className="mt-2 grid grid-cols-[8rem_1fr] gap-x-3 gap-y-1 text-xs">
                        <dt className="text-[rgba(255,255,255,0.5)]">Edited by</dt>
                        <dd>{v.savedBy ?? "unknown"}</dd>
                        {v.reason && (
                          <>
                            <dt className="text-[rgba(255,255,255,0.5)]">Reason</dt>
                            <dd>{v.reason}</dd>
                          </>
                        )}
                        <dt className="text-[rgba(255,255,255,0.5)]">Approved</dt>
                        <dd>
                          {v.approvedVia && v.approvedAt
                            ? `with the code sent to ${v.approvedVia}, at ${formatDateTime(v.approvedAt)}`
                            : "before approval codes were required"}
                        </dd>
                        {v.linesAdded != null && (
                          <>
                            <dt className="text-[rgba(255,255,255,0.5)]">Lines</dt>
                            <dd>
                              <span className="text-green-400">+{v.linesAdded}</span>{" "}
                              <span className="text-red-400">−{v.linesRemoved ?? 0}</span>
                            </dd>
                          </>
                        )}
                        {v.keyPageChanges && v.keyPageChanges.length > 0 && (
                          <>
                            <dt className="text-[rgba(255,255,255,0.5)]">Key pages</dt>
                            <dd className="space-y-0.5">
                              {v.keyPageChanges.map((c) => (
                                <p key={c.path} className={c.after.length ? "text-red-400" : "text-green-400"}>
                                  {c.label}: {accessLabel(c.before)} → {accessLabel(c.after)}
                                </p>
                              ))}
                            </dd>
                          </>
                        )}
                        {v.ip && (
                          <>
                            <dt className="text-[rgba(255,255,255,0.5)]">Requested from</dt>
                            <dd className="font-mono">{v.ip}</dd>
                          </>
                        )}
                      </dl>
                    </div>
                    <button
                      type="button"
                      onClick={() => loadVersion(v)}
                      disabled={!!pending}
                      className="rounded border border-[rgba(255,255,255,0.2)] px-3 py-1 text-xs hover:bg-[rgba(255,255,255,0.05)] disabled:opacity-40"
                    >
                      Load into editor
                    </button>
                  </div>
                  <details className="mt-2">
                    <summary className="cursor-pointer text-xs text-[rgba(255,255,255,0.5)] hover:text-white">Show what changed</summary>
                    <DiffView before={previous} after={v.text} />
                  </details>
                  <details className="mt-1">
                    <summary className="cursor-pointer text-xs text-[rgba(255,255,255,0.5)] hover:text-white">Show the whole file</summary>
                    <pre className="mt-2 overflow-x-auto rounded bg-[rgba(255,255,255,0.04)] p-3 font-mono text-xs text-[rgba(255,255,255,0.8)]">
                      {v.text}
                    </pre>
                  </details>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      <section className="mt-10">
        <h2 className="mb-1 text-base font-medium">Approval codes</h2>
        <p className="mb-3 text-sm text-[rgba(255,255,255,0.6)]">
          Every request for a code (newest 30), including ones that were never approved: a security log.
        </p>
        {state.approvals.length === 0 ? (
          <p className="text-sm text-[rgba(255,255,255,0.6)]">No codes requested yet.</p>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-[rgba(255,255,255,0.1)]">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] text-left text-[rgba(255,255,255,0.7)]">
                  <th className="px-3 py-2">Requested</th>
                  <th className="px-3 py-2">By</th>
                  <th className="px-3 py-2">Change</th>
                  <th className="px-3 py-2">Reason</th>
                  <th className="px-3 py-2">Code sent to</th>
                  <th className="px-3 py-2">Result</th>
                  <th className="px-3 py-2">From</th>
                </tr>
              </thead>
              <tbody>
                {state.approvals.map((a) => {
                  const status = approvalStatus(a);
                  return (
                    <tr key={a.id} className="border-b border-[rgba(255,255,255,0.05)] align-top">
                      <td className="whitespace-nowrap px-3 py-2">{formatDateTime(a.createdAt)}</td>
                      <td className="px-3 py-2">{a.requestedBy ?? "unknown"}</td>
                      <td className="px-3 py-2">
                        {a.restoredFrom ? `Restore (${formatDateTime(a.restoredFrom)})` : a.action === "reset" ? "Reset to default" : "Edit"}
                      </td>
                      <td className="px-3 py-2 text-[rgba(255,255,255,0.7)]">{a.reason}</td>
                      <td className="whitespace-nowrap px-3 py-2">{a.sentTo}</td>
                      <td className={`whitespace-nowrap px-3 py-2 ${status.tone}`}>
                        {status.label}
                        {a.resolvedAt && a.status === "approved" ? ` · ${formatTime(a.resolvedAt)}` : ""}
                      </td>
                      <td className="whitespace-nowrap px-3 py-2 font-mono">{a.requestedIp ?? "—"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
