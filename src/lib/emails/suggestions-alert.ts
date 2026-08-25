import { suggestionAlertTemplate } from "@/templates";

import { sendEmail } from "../brevo";

type SendSuggestionAlertParams = {
  name?: string;
  message: string;
};

export const sendSuggestionAlert = async ({ name, message }: SendSuggestionAlertParams) => {
  try {
    await sendEmail({
      subject: `New suggestion from ${name || "Anonymous"}`,
      html: suggestionAlertTemplate({
        name,
        message,
      }),
    });
  } catch (err) {
    console.error("Failed to send suggestion alert email:", err);
  }
};
