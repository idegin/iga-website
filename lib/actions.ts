"use server";

import { Resend } from "resend";
import { z } from "zod";
import { CONTACT, SITE } from "./site";

const ConsultationSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name."),
  email: z.email("Enter a valid email address."),
  phone: z.string().trim().min(7, "Enter a phone number we can reach you on."),
  interest: z.string().trim().min(1, "Choose what you are interested in."),
  message: z.string().trim().min(10, "Tell us a little about what you need."),
  company: z.string().max(0).optional(),
});

export type FormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Record<string, string>;
};

export async function submitConsultation(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const parsed = ConsultationSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    interest: formData.get("interest"),
    message: formData.get("message"),
    company: formData.get("company") ?? "",
  });

  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const key = String(issue.path[0]);
      if (!errors[key]) errors[key] = issue.message;
    }
    return { status: "error", message: "Please check the fields below.", errors };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_INBOX || CONTACT.email;
  const from = process.env.CONTACT_FROM;

  if (!apiKey || !to || !from) {
    return {
      status: "error",
      message:
        "We could not send your request just now. Please email or call us directly and we will pick it up.",
    };
  }

  const { name, email, phone, interest, message } = parsed.data;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Consultation request — ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Interest: ${interest}`,
        "",
        message,
        "",
        `Sent from ${SITE.url}`,
      ].join("\n"),
    });

    if (error) throw new Error(error.message);
  } catch {
    return {
      status: "error",
      message:
        "We could not send your request just now. Please email or call us directly and we will pick it up.",
    };
  }

  return {
    status: "success",
    message:
      "Thank you. Your request is with our advisory team and we will respond within one business day.",
  };
}
