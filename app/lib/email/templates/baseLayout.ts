/**
 * Shared email chrome: dark-themed, 600px, table-based, fully inline-styled
 * (no external CSS, no flexbox/grid) so it renders across Gmail/Apple/Outlook.
 * Wraps a content slot with the logo header, App Store / Google Play badges,
 * social + legal footer, and the unsubscribe link.
 */
import { BRAND, COLORS, SITE_URL, APP_STORE_URL, PLAY_STORE_URL } from "../config";
import { escapeHtml } from "./utils";

type BaseLayoutArgs = {
  /** Hidden inbox-preview text. */
  preheader?: string;
  /** Inner HTML placed inside the content card. */
  contentHtml: string;
  /** Fully-formed unsubscribe URL for this recipient. */
  unsubscribeUrl: string;
};

export function baseLayout({
  preheader = "",
  contentHtml,
  unsubscribeUrl,
}: BaseLayoutArgs): string {
  const { social } = BRAND;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="dark light">
<meta name="supported-color-schemes" content="dark light">
<title>${escapeHtml(BRAND.name)}</title>
</head>
<body style="margin:0;padding:0;background-color:${COLORS.dark};-webkit-font-smoothing:antialiased;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${escapeHtml(preheader)}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${COLORS.dark};">
    <tr>
      <td align="center" style="padding:28px 12px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;margin:0 auto;">

          <!-- Header / logo -->
          <tr>
            <td style="padding:4px 6px 22px;">
              <a href="${SITE_URL}" target="_blank" style="text-decoration:none;">
                <img src="${BRAND.logoUrl}" width="150" alt="${escapeHtml(BRAND.name)}" style="display:block;border:0;outline:none;height:auto;width:150px;">
              </a>
            </td>
          </tr>

          <!-- Content card -->
          <tr>
            <td style="background-color:${COLORS.card};border:1px solid ${COLORS.border};border-radius:16px;padding:36px 32px;">
              ${contentHtml}
            </td>
          </tr>

          <!-- App badges -->
          <tr>
            <td align="center" style="padding:32px 8px 10px;">
              <p style="margin:0 0 14px;font-family:'Poppins',Arial,sans-serif;font-size:12px;letter-spacing:0.06em;text-transform:uppercase;color:${COLORS.textFaint};">Get the ${escapeHtml(BRAND.name)} app</p>
              <a href="${APP_STORE_URL}" target="_blank" style="text-decoration:none;display:inline-block;margin:0 5px;">
                <img src="${BRAND.appStoreBadge}" alt="Download on the App Store" height="44" style="display:inline-block;border:0;outline:none;height:44px;width:auto;">
              </a>
              <a href="${PLAY_STORE_URL}" target="_blank" style="text-decoration:none;display:inline-block;margin:0 5px;">
                <img src="${BRAND.playStoreBadge}" alt="Get it on Google Play" height="44" style="display:inline-block;border:0;outline:none;height:44px;width:auto;">
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="padding:22px 16px 8px;">
              <p style="margin:0 0 12px;font-family:'Poppins',Arial,sans-serif;font-size:13px;color:${COLORS.textFaint};">
                <a href="${social.twitter}" target="_blank" style="color:${COLORS.gold};text-decoration:none;margin:0 8px;">Twitter</a>
                <a href="${social.linkedin}" target="_blank" style="color:${COLORS.gold};text-decoration:none;margin:0 8px;">LinkedIn</a>
                <a href="${social.instagram}" target="_blank" style="color:${COLORS.gold};text-decoration:none;margin:0 8px;">Instagram</a>
              </p>
              <p style="margin:0 0 6px;font-family:'Poppins',Arial,sans-serif;font-size:12px;line-height:1.6;color:${COLORS.textFaint};">
                ${escapeHtml(BRAND.tagline)}
              </p>
              <p style="margin:0 0 6px;font-family:'Poppins',Arial,sans-serif;font-size:12px;line-height:1.6;color:${COLORS.textFaint};">
                ${escapeHtml(BRAND.address)}
              </p>
              <p style="margin:0 0 12px;font-family:'Poppins',Arial,sans-serif;font-size:11px;line-height:1.6;color:rgba(255,255,255,0.30);">
                ${escapeHtml(BRAND.legal)}
              </p>
              <p style="margin:0;font-family:'Poppins',Arial,sans-serif;font-size:12px;color:${COLORS.textFaint};">
                You're receiving this because you subscribed at ${escapeHtml(BRAND.name)}.
                <a href="${unsubscribeUrl}" target="_blank" style="color:${COLORS.textFaint};text-decoration:underline;">Unsubscribe</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}
