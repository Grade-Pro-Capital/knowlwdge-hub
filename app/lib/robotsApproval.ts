/**
 * robots.txt changes approved by an emailed code. A change (save, reset or restore) is
 * checked and stored as a request; a 6-digit code goes by email (Resend) to the approver,
 * ROBOTS_APPROVAL_EMAIL (default mahaveer@grade.capital); the change goes live only when
 * that code is entered. Requests are kept after they end, as the security log.
 *
 * The code itself is never stored (only an HMAC of it), works once, expires after
 * CODE_TTL_MS, and the request is cancelled after MAX_ATTEMPTS wrong codes. A code
 * approves exactly the change it was sent for, and only if robots.txt hasn't changed
 * since. There is no other way to change robots.txt (the API has no direct save).
 */
import crypto from "node:crypto";
import { prisma } from "./db";
import { getBaseUrl } from "./seo";
import { accessLabel, analyzeRobotsTxt, defaultRobotsTxt, type KeyPageChange } from "./robotsTxt";
import {
  describeChange,
  getKeyPages,
  getLiveRobotsTxt,
  getRobotsState,
  normalizeRobotsTxt,
  resetRobotsTxt,
  saveRobotsTxt,
} from "./robotsStore";

export const APPROVAL_EMAIL = process.env.ROBOTS_APPROVAL_EMAIL?.trim() || "mahaveer@grade.capital";
const FROM = process.env.APPROVAL_EMAIL_FROM?.trim() || "Grade Capital <no-reply@grade.capital>";
const CODE_TTL_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;
const MAX_REQUESTS_PER_HOUR = 6;
const MIN_SECONDS_BETWEEN = 30;

export class ApprovalError extends Error {
  constructor(
    message: string,
    public status = 400,
    public extra?: Record<string, unknown>,
  ) {
    super(message);
  }
}

/** m•••••••@grade.capital */
export function maskEmail(email: string): string {
  const [user, domain] = email.split("@");
  return `${user.slice(0, 1)}${"•".repeat(Math.max(user.length - 1, 3))}@${domain}`;
}

function formatIst(date: Date): string {
  return date.toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short" });
}

function hashCode(id: string, code: string): string {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET is not set");
  return crypto.createHmac("sha256", secret).update(`robots-approval:${id}:${code}`).digest("hex");
}

function sameHash(a: string, b: string): boolean {
  const x = Buffer.from(a, "hex");
  const y = Buffer.from(b, "hex");
  return x.length === y.length && crypto.timingSafeEqual(x, y);
}

/** Requests whose code ran out without being used. */
async function expireOld(): Promise<void> {
  await prisma.robotsChangeRequest.updateMany({
    where: { status: "pending", expiresAt: { lt: new Date() } },
    data: { status: "expired", resolvedAt: new Date() },
  });
}

// ---------- Requesting a change ----------

export type ChangeRequestInput = {
  action: "save" | "reset";
  /** The new robots.txt (save only). */
  text?: string;
  reason: string;
  /** The editor's "I understand" box, needed when key pages would be blocked. */
  confirmBlocked: boolean;
  /** When the change brings back a version from the history: that version's date. */
  restoredFrom?: Date | null;
  requestedBy: string;
  ip: string | null;
};

export type ApprovalEmail = {
  to: string;
  code: string;
  action: string;
  requestedBy: string;
  ip: string | null;
  reason: string;
  requestedAt: Date;
  expiresAt: Date;
  change: Awaited<ReturnType<typeof describeChange>>;
};

/**
 * Check the change, store it as a request and email the code. `send` is the email
 * sender (replaceable in tests). Throws ApprovalError with a message for the editor.
 */
export async function requestRobotsChange(
  input: ChangeRequestInput,
  send: (mail: ApprovalEmail) => Promise<void> = sendApprovalEmail,
): Promise<{ id: string; sentTo: string; expiresAt: Date }> {
  const reason = input.reason.trim();
  if (reason.length < 3) throw new ApprovalError("Write a short reason for this change (it goes in the history).");
  if (reason.length > 300) throw new ApprovalError("Keep the reason under 300 characters.");

  const live = await getLiveRobotsTxt();
  let text: string;
  if (input.action === "reset") {
    text = defaultRobotsTxt(getBaseUrl());
  } else {
    if (!input.text?.trim()) throw new ApprovalError("robots.txt can't be empty. Use “Reset to default” instead.");
    text = normalizeRobotsTxt(input.text);
    if (text === live) throw new ApprovalError("That's already the live robots.txt: there is nothing to change.");
    const analysis = analyzeRobotsTxt(text, { baseUrl: getBaseUrl(), keyPages: await getKeyPages() });
    if (analysis.errors.length) {
      throw new ApprovalError("Fix the errors before saving.", 400, { errors: analysis.errors });
    }
    if (analysis.blocksKeyPages && !input.confirmBlocked) {
      throw new ApprovalError("These rules block important pages from search engines. Confirm to continue.", 409, {
        keyPages: analysis.keyPages.filter((p) => p.blockedFor.length),
      });
    }
  }
  if (text === live) throw new ApprovalError("That's already the live robots.txt: there is nothing to change.");

  const recent = await prisma.robotsChangeRequest.findMany({
    where: { createdAt: { gte: new Date(Date.now() - 60 * 60 * 1000) } },
    orderBy: { createdAt: "desc" },
    select: { createdAt: true },
  });
  if (recent.length >= MAX_REQUESTS_PER_HOUR) {
    throw new ApprovalError("Too many approval codes were requested in the last hour. Try again later.", 429);
  }
  const wait = recent[0] ? MIN_SECONDS_BETWEEN - Math.floor((Date.now() - recent[0].createdAt.getTime()) / 1000) : 0;
  if (wait > 0) throw new ApprovalError(`Wait ${wait} seconds before requesting another code.`, 429);

  // Only the newest request can be approved.
  await prisma.robotsChangeRequest.updateMany({
    where: { status: "pending" },
    data: { status: "superseded", resolvedAt: new Date() },
  });

  const id = crypto.randomBytes(12).toString("hex");
  const code = crypto.randomInt(0, 1_000_000).toString().padStart(6, "0");
  const requestedAt = new Date();
  const expiresAt = new Date(requestedAt.getTime() + CODE_TTL_MS);
  await prisma.robotsChangeRequest.create({
    data: {
      id,
      action: input.action,
      text,
      baseText: live,
      reason,
      restoredFrom: input.restoredFrom ?? null,
      codeHash: hashCode(id, code),
      sentTo: APPROVAL_EMAIL,
      expiresAt,
      requestedBy: input.requestedBy,
      requestedIp: input.ip,
    },
  });

  try {
    await send({
      to: APPROVAL_EMAIL,
      code,
      action: actionLabel(input.action, input.restoredFrom),
      requestedBy: input.requestedBy,
      ip: input.ip,
      reason,
      requestedAt,
      expiresAt,
      change: await describeChange(live, text),
    });
  } catch (e) {
    console.error("robots.txt approval: could not send the code email", e);
    await prisma.robotsChangeRequest.update({ where: { id }, data: { status: "failed", resolvedAt: new Date() } });
    throw new ApprovalError("The approval email could not be sent, so nothing was changed. Try again in a moment.", 502);
  }
  return { id, sentTo: maskEmail(APPROVAL_EMAIL), expiresAt };
}

function actionLabel(action: "save" | "reset", restoredFrom?: Date | null): string {
  if (restoredFrom) return `Restore the version from ${formatIst(restoredFrom)}`;
  return action === "reset" ? "Reset to the built-in default" : "Save an edited robots.txt";
}

// ---------- Approving / cancelling ----------

const ENDED: Record<string, string> = {
  approved: "This code was already used.",
  expired: "This code has expired. Request a new one.",
  failed: "This request was cancelled after too many wrong codes. Request a new one.",
  cancelled: "This request was cancelled. Request a new code.",
  superseded: "A newer code was requested, so this one no longer works. Use the newest email.",
};

/** Enter the code: if right, the change goes live and is recorded in the history. */
export async function approveRobotsChange(id: string, rawCode: string): Promise<void> {
  if (!/^[0-9a-f]{24}$/.test(id)) throw new ApprovalError("This approval request doesn't exist.", 404);
  await expireOld();
  const request = await prisma.robotsChangeRequest.findUnique({ where: { id } });
  if (!request) throw new ApprovalError("This approval request doesn't exist.", 404);
  if (request.status !== "pending") throw new ApprovalError(ENDED[request.status] ?? "This request has ended.");

  const code = rawCode.replace(/\s+/g, "");
  if (!/^\d{6}$/.test(code) || !sameHash(hashCode(id, code), request.codeHash)) {
    const attempts = request.attempts + 1;
    const failed = attempts >= MAX_ATTEMPTS;
    await prisma.robotsChangeRequest.updateMany({
      where: { id, status: "pending" },
      data: { attempts, ...(failed && { status: "failed", resolvedAt: new Date() }) },
    });
    throw new ApprovalError(
      failed ? ENDED.failed : `Wrong code. ${MAX_ATTEMPTS - attempts} ${MAX_ATTEMPTS - attempts === 1 ? "try" : "tries"} left.`,
    );
  }

  const live = await getLiveRobotsTxt();
  if (live !== request.baseText) {
    await prisma.robotsChangeRequest.update({ where: { id }, data: { status: "cancelled", resolvedAt: new Date() } });
    throw new ApprovalError("robots.txt was changed after this code was requested. Check the live version and request a new code.", 409);
  }

  // Claim the request first, so one code can't apply a change twice.
  const { count } = await prisma.robotsChangeRequest.updateMany({
    where: { id, status: "pending" },
    data: { status: "approved", resolvedAt: new Date() },
  });
  if (count !== 1) throw new ApprovalError(ENDED.approved);

  const editor = request.requestedBy ?? "unknown";
  const details = {
    action: request.restoredFrom ? ("restored" as const) : request.action === "reset" ? ("reset" as const) : ("saved" as const),
    reason: request.reason,
    restoredFrom: request.restoredFrom,
    approvedVia: request.sentTo,
    approvedAt: new Date(),
    ip: request.requestedIp,
  };
  if (request.action === "reset") {
    await resetRobotsTxt(editor, details);
  } else {
    const note = request.restoredFrom ? `Restored version from ${formatIst(request.restoredFrom)}` : "Saved";
    await saveRobotsTxt(request.text, editor, note, details);
  }
}

export async function cancelRobotsChange(id: string): Promise<void> {
  if (!/^[0-9a-f]{24}$/.test(id)) return;
  await prisma.robotsChangeRequest.updateMany({
    where: { id, status: "pending" },
    data: { status: "cancelled", resolvedAt: new Date() },
  });
}

/** The newest requests (security log): who asked for what, and how it ended. */
export async function getApprovalLog(limit = 30) {
  await expireOld();
  const rows = await prisma.robotsChangeRequest.findMany({
    orderBy: { createdAt: "desc" },
    take: limit,
    select: {
      id: true,
      action: true,
      reason: true,
      restoredFrom: true,
      sentTo: true,
      status: true,
      attempts: true,
      requestedBy: true,
      requestedIp: true,
      createdAt: true,
      expiresAt: true,
      resolvedAt: true,
    },
  });
  return rows.map((r) => ({ ...r, sentTo: maskEmail(r.sentTo) }));
}

/** Everything the admin editor shows: the file, its history, key pages and the security log. */
export async function getRobotsEditorState() {
  const [robots, keyPages, approvals] = await Promise.all([getRobotsState(), getKeyPages(), getApprovalLog()]);
  return { ...robots, keyPages, baseUrl: getBaseUrl(), approver: maskEmail(APPROVAL_EMAIL), approvals };
}

// ---------- The email ----------

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function keyPageLines(changes: KeyPageChange[]): string[] {
  return changes.map((c) => `${c.label} (${c.path}): ${accessLabel(c.before)} → ${accessLabel(c.after)}`);
}

/** Subject, HTML and plain text of the approval email. */
export function buildApprovalEmail(mail: ApprovalEmail): { subject: string; html: string; text: string } {
  const changed = mail.change.diff.filter((d) => d.type !== "same");
  const shown = changed.slice(0, 40);
  const pages = keyPageLines(mail.change.keyPageChanges);
  const adminUrl = `${getBaseUrl()}/admin/robots`;
  const rows: [string, string][] = [
    ["Change", mail.action],
    ["Requested by", mail.requestedBy],
    ["When", `${formatIst(mail.requestedAt)} (India time)`],
    ["Reason", mail.reason],
    ["Lines", `+${mail.change.linesAdded} added, −${mail.change.linesRemoved} removed`],
    ...(mail.ip ? ([["From IP", mail.ip]] as [string, string][]) : []),
  ];

  const subject = `Approval code for a robots.txt change (requested by ${mail.requestedBy})`;
  const text = [
    `Someone asked to change robots.txt on grade.capital. It goes live only after this code is entered in the admin:`,
    ``,
    `    ${mail.code}`,
    ``,
    `The code expires at ${formatIst(mail.expiresAt)} (India time) and works once.`,
    ``,
    ...rows.map(([k, v]) => `${k}: ${v}`),
    ...(pages.length ? ["", "Key pages affected:", ...pages.map((p) => `- ${p}`)] : []),
    "",
    "What changes:",
    ...shown.map((d) => `${d.type === "add" ? "+" : "-"} ${d.text}`),
    ...(changed.length > shown.length ? [`… and ${changed.length - shown.length} more lines`] : []),
    "",
    `If you didn't expect this, don't share the code: nothing changes without it. Review it at ${adminUrl}`,
  ].join("\n");

  const html = `<!doctype html><html><body style="margin:0;padding:24px;background:#f5f5f4;font-family:Arial,Helvetica,sans-serif;color:#1c1917">
<div style="max-width:600px;margin:0 auto;background:#ffffff;border:1px solid #e7e5e4;border-radius:12px;padding:28px">
  <p style="margin:0 0 4px;font-size:13px;color:#78716c">Grade Capital admin</p>
  <h1 style="margin:0 0 16px;font-size:20px">Approve a robots.txt change</h1>
  <p style="margin:0 0 16px;font-size:14px;line-height:1.5">Someone asked to change robots.txt on grade.capital. It goes live only after this code is entered in the admin:</p>
  <p style="margin:0 0 8px;font-family:'Courier New',monospace;font-size:34px;letter-spacing:8px;font-weight:bold;text-align:center;background:#fafaf9;border:1px solid #e7e5e4;border-radius:8px;padding:14px">${mail.code}</p>
  <p style="margin:0 0 20px;font-size:12px;color:#78716c;text-align:center">Expires at ${escapeHtml(formatIst(mail.expiresAt))} (India time) and works once.</p>
  <table style="width:100%;border-collapse:collapse;font-size:14px;margin:0 0 16px">
    ${rows.map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;color:#78716c;white-space:nowrap;vertical-align:top">${escapeHtml(k)}</td><td style="padding:6px 0">${escapeHtml(v)}</td></tr>`).join("")}
  </table>
  ${
    pages.length
      ? `<div style="margin:0 0 16px;padding:12px;border-radius:8px;background:#fef2f2;border:1px solid #fecaca;font-size:13px"><strong style="color:#b91c1c">Key pages affected</strong><ul style="margin:6px 0 0;padding-left:18px">${pages.map((p) => `<li>${escapeHtml(p)}</li>`).join("")}</ul></div>`
      : ""
  }
  <p style="margin:0 0 6px;font-size:13px;font-weight:bold">What changes</p>
  <pre style="margin:0 0 20px;padding:12px;background:#fafaf9;border:1px solid #e7e5e4;border-radius:8px;font-size:12px;line-height:1.5;white-space:pre-wrap;word-break:break-all">${shown
    .map((d) => `<span style="color:${d.type === "add" ? "#15803d" : "#b91c1c"}">${d.type === "add" ? "+" : "−"} ${escapeHtml(d.text)}</span>`)
    .join("\n")}${changed.length > shown.length ? `\n… and ${changed.length - shown.length} more lines` : ""}</pre>
  <p style="margin:0;font-size:12px;color:#78716c;line-height:1.5">If you didn't expect this, don't share the code: nothing changes without it. You can review the request at <a href="${escapeHtml(adminUrl)}" style="color:#1c1917">${escapeHtml(adminUrl)}</a>.</p>
</div></body></html>`;

  return { subject, html, text };
}

/** Send the approval email through Resend. Throws if it can't be sent. */
export async function sendApprovalEmail(mail: ApprovalEmail): Promise<void> {
  const key = process.env.RESEND_API_KEY?.trim();
  if (!key) throw new Error("RESEND_API_KEY is not set");
  const { subject, html, text } = buildApprovalEmail(mail);
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from: FROM, to: [mail.to], subject, html, text }),
  });
  if (!res.ok) throw new Error(`Resend answered ${res.status}: ${(await res.text()).slice(0, 300)}`);
}
