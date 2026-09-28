/** Small helpers shared by email templates. */
import { COLORS } from "../config";

/** Escape user-provided text for safe inline HTML. */
export function escapeHtml(value: string): string {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Bulletproof-ish gold CTA button (table-based so it renders in Outlook).
 * Mirrors the site's goldButtonClass (vertical gold gradient, black label).
 */
export function goldButton(label: string, href: string): string {
  return `
  <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
    <tr>
      <td align="center" style="border-radius:10px;background:${COLORS.goldGradBottom};background:linear-gradient(180deg,${COLORS.goldGradTop} 0%,${COLORS.goldGradBottom} 100%);">
        <a href="${href}" target="_blank" style="display:inline-block;padding:14px 32px;font-family:'Poppins',Arial,sans-serif;font-size:15px;font-weight:600;color:#000000;text-decoration:none;border-radius:10px;">${escapeHtml(label)}</a>
      </td>
    </tr>
  </table>`;
}
