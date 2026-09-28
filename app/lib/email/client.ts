/**
 * Resend client + thin send wrappers. If RESEND_API_KEY is unset the wrappers
 * no-op (with a warning) so local dev, builds, and the subscribe flow never
 * crash just because email isn't configured.
 */
import { Resend } from "resend";
import { EMAIL_FROM, EMAIL_REPLY_TO } from "./config";

const apiKey = process.env.RESEND_API_KEY?.trim();
const resend = apiKey ? new Resend(apiKey) : null;

/** True when a Resend API key is configured. */
export function isEmailConfigured(): boolean {
  return Boolean(resend);
}

export type Mail = {
  to: string;
  subject: string;
  html: string;
  text?: string;
  headers?: Record<string, string>;
};

/** Send a single email. Resolves `{ skipped: true }` when email isn't configured. */
export async function sendEmail(mail: Mail): Promise<{ id?: string; skipped?: boolean }> {
  if (!resend) {
    console.warn(`[email] RESEND_API_KEY not set — skipping send to ${mail.to}`);
    return { skipped: true };
  }
  const { data, error } = await resend.emails.send({
    from: EMAIL_FROM,
    to: mail.to,
    subject: mail.subject,
    html: mail.html,
    text: mail.text,
    replyTo: EMAIL_REPLY_TO,
    headers: mail.headers,
  });
  if (error) throw new Error(error.message ?? "Resend send failed");
  return { id: data?.id };
}

/**
 * Send many emails via Resend's batch API (max 100 per call). Each message can
 * carry its own `to`, `html`, and `headers` (e.g. a per-recipient
 * List-Unsubscribe). Returns aggregate counts; a failed chunk counts all its
 * messages as failed (the batch endpoint reports errors per-request, not
 * per-message).
 */
export async function sendBatch(
  messages: Mail[]
): Promise<{ success: number; failed: number }> {
  if (!resend) {
    console.warn(`[email] RESEND_API_KEY not set — skipping batch of ${messages.length}`);
    return { success: 0, failed: messages.length };
  }
  let success = 0;
  let failed = 0;
  for (let i = 0; i < messages.length; i += 100) {
    const chunk = messages.slice(i, i + 100).map((m) => ({
      from: EMAIL_FROM,
      to: m.to,
      subject: m.subject,
      html: m.html,
      text: m.text,
      replyTo: EMAIL_REPLY_TO,
      headers: m.headers,
    }));
    try {
      const { error } = await resend.batch.send(chunk);
      if (error) {
        failed += chunk.length;
        console.error("[email] batch send error:", error);
      } else {
        success += chunk.length;
      }
    } catch (e) {
      failed += chunk.length;
      console.error("[email] batch send threw:", e);
    }
  }
  return { success, failed };
}
