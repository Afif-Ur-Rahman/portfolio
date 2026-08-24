import axios from "axios";
import { ADMIN_EMAIL, BREVO, MODE } from "@/constants";

interface IMailInfo {
  subject: string;
  html: string;
}

export const sendEmail = async (mailInfo: IMailInfo): Promise<void> => {
  if (MODE === "dev") {
    console.log(
      "[Brevo] Skipping email in dev mode:",
      mailInfo.subject,
      "->",
      ADMIN_EMAIL,
    );
    return;
  }

  if (!BREVO.API_KEY) {
    throw new Error("Brevo API key is not configured");
  }

  try {
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: { email: BREVO.EMAIL, name: BREVO.NAME },
        to: [{ email: ADMIN_EMAIL }],
        subject: mailInfo.subject,
        htmlContent: mailInfo.html,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "api-key": BREVO.API_KEY,
        },
      },
    );
  } catch (error) {
    console.log("[Brevo] Failed to send email:", error);
  }
};
