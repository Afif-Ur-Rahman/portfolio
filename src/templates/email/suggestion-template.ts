import { SITE_URL } from "@/constants";

import { BASE_STYLES, sanitize } from "./styles";

interface SuggestionAlertTemplateOptions {
  name?: string;
  message: string;
  brandName?: string;
}

export const suggestionAlertTemplate = (options: SuggestionAlertTemplateOptions) => {
  const { name = "Anonymous", message, brandName = "Afif Ur Rahman — Portfolio" } = options;

  const safeName = sanitize(name);
  const safeMessage = sanitize(message).replace(/\n/g, "<br>");
  const manageUrl = `${SITE_URL}?admin`;

  const previewText = `New suggestion from ${safeName}`;

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>New Suggestion - ${safeName}</title>
      <style>
        @media (max-width: 600px) {
          .card { padding: 24px !important; }
        }
      </style>
    </head>
    <body style="margin:0;padding:0;background:${BASE_STYLES.background};font-family:'Inter', 'Segoe UI', sans-serif;color:${BASE_STYLES.textPrimary};">
      <span style="display:none !important;visibility:hidden;opacity:0;height:0;width:0;mso-hide:all;">
        ${previewText}
      </span>

      <table width="100%" border="0" cellspacing="0" cellpadding="0" style="padding:32px 16px;">
        <tr>
          <td align="center">
            <table class="card" width="100%" style="max-width:560px;background:${BASE_STYLES.cardBackground};border-radius:24px;padding:40px;box-shadow:0 20px 40px rgba(9,17,63,0.35);">

              <!-- Header -->
              <tr>
                <td style="text-align:center;">
                  <h1 style="font-size:26px;font-weight:600;text-transform:uppercase;letter-spacing:2px;color:${BASE_STYLES.accent};margin:0 0 8px 0;">
                    New Suggestion
                  </h1>
                  <p style="margin:0;color:${BASE_STYLES.textSecondary};font-size:15px;line-height:1.6;">
                    Someone left feedback on your portfolio.
                  </p>
                </td>
              </tr>

              <!-- Suggestion Details -->
              <tr>
                <td style="padding:32px 0;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background:${BASE_STYLES.cardInner};border:1px solid ${BASE_STYLES.divider};border-radius:20px;padding:32px;">
                    <tr>
                      <td style="padding-bottom:16px;">
                        <strong style="color:${BASE_STYLES.accent};">From:</strong>
                        <span style="color:${BASE_STYLES.textPrimary};">${safeName}</span>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-top:16px;border-top:1px solid ${BASE_STYLES.divider};">
                        <strong style="color:${BASE_STYLES.accent};">Message:</strong>
                        <p style="margin:12px 0 0 0;color:${BASE_STYLES.textSecondary};line-height:1.6;">
                          ${safeMessage}
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- CTA -->
              <tr>
                <td style="text-align:center;padding-bottom:28px;">
                  <a href="${manageUrl}" style="display:inline-block;background:${BASE_STYLES.accent};color:${BASE_STYLES.background};font-weight:600;font-size:14px;text-decoration:none;padding:14px 28px;border-radius:12px;letter-spacing:0.3px;">
                    View / Manage Suggestion
                  </a>
                </td>
              </tr>

              <tr>
                <td style="padding-top:16px;border-top:1px solid ${BASE_STYLES.divider};font-size:12px;color:${BASE_STYLES.textMuted};text-align:center;">
                  © ${new Date().getFullYear()} ${brandName}. All rights reserved.
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
  `;
};
