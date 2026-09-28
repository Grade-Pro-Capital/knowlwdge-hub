/** Welcome email sent immediately after someone subscribes (single opt-in). */
import { BRAND, COLORS, SITE_URL } from "../config";
import { baseLayout } from "./baseLayout";
import { goldButton } from "./utils";

type WelcomeArgs = {
  unsubscribeUrl: string;
};

export function welcomeEmail({ unsubscribeUrl }: WelcomeArgs): {
  subject: string;
  html: string;
  text: string;
} {
  const subject = "Welcome to Grade Capital Insights 🎉";

  const contentHtml = `
    <p style="margin:0 0 8px;font-family:'Poppins',Arial,sans-serif;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;font-weight:600;color:${COLORS.gold};">
      You're subscribed
    </p>
    <h1 style="margin:0 0 16px;font-family:'Poppins',Arial,sans-serif;font-size:26px;line-height:1.25;font-weight:600;color:${COLORS.text};">
      Welcome to <span style="color:${COLORS.gold};">Grade Capital Insights</span>
    </h1>
    <p style="margin:0 0 16px;font-family:'Poppins',Arial,sans-serif;font-size:15px;line-height:1.7;color:${COLORS.textMuted};">
      Thanks for subscribing. You'll now get our latest research, analysis, and
      market intelligence on the crypto economy — written for institutional
      investors, wealth advisors, and financial decision-makers in India.
    </p>
    <p style="margin:0 0 24px;font-family:'Poppins',Arial,sans-serif;font-size:15px;line-height:1.7;color:${COLORS.textMuted};">
      Every time we publish a new insight, it'll land right in your inbox.
    </p>
    ${goldButton("Browse the latest insights", `${SITE_URL}/#insights`)}
    <p style="margin:24px 0 0;font-family:'Poppins',Arial,sans-serif;font-size:13px;line-height:1.6;color:${COLORS.textFaint};">
      — The ${BRAND.name} team
    </p>`;

  const html = baseLayout({
    preheader:
      "You're subscribed to Grade Capital Insights — research and market intelligence for the crypto economy.",
    contentHtml,
    unsubscribeUrl,
  });

  const text = [
    "Welcome to Grade Capital Insights",
    "",
    "Thanks for subscribing. You'll now get our latest research, analysis, and market intelligence on the crypto economy.",
    "Every time we publish a new insight, it'll land in your inbox.",
    "",
    `Browse the latest insights: ${SITE_URL}/#insights`,
    "",
    `Unsubscribe: ${unsubscribeUrl}`,
  ].join("\n");

  return { subject, html, text };
}
