"use server";

import { z } from "zod";
import { sendMail } from "./mail";
import { CONTACT, SITE } from "./site";

const ConsultationSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  email: z.email("Enter a valid email address."),
  phone: z.string().trim().min(7, "Enter a phone number we can reach you on."),
  interest: z.string().trim().min(1, "Choose what you are interested in."),
  message: z.string().trim().min(10, "Tell us a little about what you need."),
  company: z.string().max(0).optional(),
});

const NewsletterSchema = z.object({
  email: z.email("Enter a valid email address."),
  company: z.string().max(0).optional(),
});

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Record<string, string>;
};

const escape = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char] as string,
  );

const FALLBACK = CONTACT.email
  ? `We could not send your request just now. Please email ${CONTACT.email} and we will pick it up.`
  : "We could not send your request just now. Please try again shortly.";

export async function submitConsultation(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const text = (key: string) => String(formData.get(key) ?? "");

  const parsed = ConsultationSchema.safeParse({
    name: text("name"),
    email: text("email"),
    phone: text("phone"),
    interest: text("interest"),
    message: text("message"),
    company: text("company"),
  });

  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0]);
      if (!errors[key]) errors[key] = issue.message;
    }
    return {
      status: "error",
      message: "Please check the fields below.",
      errors,
    };
  }

  const { name, email, phone, interest, message } = parsed.data;

  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone],
    ["Interest", interest],
  ];

  const result = await sendMail({
    subject: `Consultation request — ${name}`,
    replyTo: { address: email, name },
    text: [
      ...rows.map(([label, value]) => `${label}: ${value}`),
      "",
      message,
      "",
      `Sent from ${SITE.url}`,
    ].join("\n"),
    html: `
      <h2 style="font-family:sans-serif">New consultation request</h2>
      <table style="font-family:sans-serif;border-collapse:collapse">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="padding:4px 16px 4px 0;color:#6b7280">${label}</td><td style="padding:4px 0"><strong>${escape(value)}</strong></td></tr>`,
          )
          .join("")}
      </table>
      <p style="font-family:sans-serif;white-space:pre-wrap">${escape(message)}</p>
      <p style="font-family:sans-serif;color:#6b7280;font-size:12px">Sent from ${SITE.url}</p>
    `,
  });

  if (!result.ok) return { status: "error", message: FALLBACK };

  return {
    status: "success",
    message:
      "Thank you. Your request is with our advisory team and we will respond within one business day.",
  };
}

export async function subscribeToNewsletter(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsed = NewsletterSchema.safeParse({
    email: String(formData.get("email") ?? ""),
    company: String(formData.get("company") ?? ""),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: parsed.error.issues[0]?.message ?? "Enter a valid email address.",
    };
  }

  const { email } = parsed.data;

  const result = await sendMail({
    subject: `Newsletter signup — ${email}`,
    replyTo: { address: email },
    text: `New newsletter subscriber: ${email}\n\nSent from ${SITE.url}`,
    html: `<p style="font-family:sans-serif">New newsletter subscriber: <strong>${escape(email)}</strong></p>`,
  });

  if (!result.ok) {
    return {
      status: "error",
      message: "We could not sign you up just now. Please try again shortly.",
    };
  }

  return {
    status: "success",
    message: "You are subscribed. Look out for our next insight.",
  };
}
