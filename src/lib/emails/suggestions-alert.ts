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
    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY!,
      },
      body: JSON.stringify({
        sender: {
          name: "Portfolio Suggestions",
          email: process.env.BREVO_SENDER_EMAIL,
        },
        to: [{ email: process.env.ADMIN_EMAIL }],
        subject: `New suggestion from ${name || "Anonymous"}`,
        htmlContent: `
          <p><strong>From:</strong> ${name || "Anonymous"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
          <p><a href="${process.env.NEXT_PUBLIC_SITE_URL}?admin#suggestion-${suggestionId}">View / manage</a></p>
        `,
      }),
    });
  } catch (err) {
    // fire-and-forget: never block the suggestion save on email failure
    console.error("Failed to send suggestion alert email:", err);
  }
};
