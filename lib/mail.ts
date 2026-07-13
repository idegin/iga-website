import "server-only";

const ZEPTO_ENDPOINT = "https://api.zeptomail.com/v1.1/email";

export type MailPayload = {
  subject: string;
  html: string;
  text: string;
  replyTo?: { address: string; name?: string };
};

export type MailResult =
  | { ok: true }
  | { ok: false; reason: "unconfigured" | "failed" };

export function mailConfig() {
  const token = process.env.ZEPTOMAIL_TOKEN;
  const fromAddress = process.env.CONTACT_FROM;
  const fromName = process.env.CONTACT_FROM_NAME || "IGA Global Investments";
  const to = process.env.CONTACT_INBOX;

  if (!token || !fromAddress || !to) return null;
  return { token, fromAddress, fromName, to };
}

export async function sendMail(payload: MailPayload): Promise<MailResult> {
  const config = mailConfig();
  if (!config) return { ok: false, reason: "unconfigured" };

  try {
    const response = await fetch(ZEPTO_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Zoho-enczapikey ${config.token}`,
      },
      body: JSON.stringify({
        from: { address: config.fromAddress, name: config.fromName },
        to: [{ email_address: { address: config.to } }],
        subject: payload.subject,
        htmlbody: payload.html,
        textbody: payload.text,
        ...(payload.replyTo && {
          reply_to: [
            {
              address: payload.replyTo.address,
              name: payload.replyTo.name ?? payload.replyTo.address,
            },
          ],
        }),
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("ZeptoMail send failed", response.status, detail);
      return { ok: false, reason: "failed" };
    }

    return { ok: true };
  } catch (error) {
    console.error("ZeptoMail request threw", error);
    return { ok: false, reason: "failed" };
  }
}
