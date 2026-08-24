import { sendEmail } from "../brevo";
import { suggestionAlertTemplate } from "@/templates";

type SendSuggestionAlertParams = {
  suggestionId: string;
  name?: string;
  message: string;
};

export const sendSuggestionAlert = async ({
  suggestionId,
  name,
  message,
}: SendSuggestionAlertParams) => {
  try {
    await sendEmail({
      subject: `New suggestion from ${name || "Anonymous"}`,
      html: suggestionAlertTemplate({
        suggestionId,
        name,
        message,
      }),
    });
  } catch (err) {
    console.error("Failed to send suggestion alert email:", err);
  }
};
