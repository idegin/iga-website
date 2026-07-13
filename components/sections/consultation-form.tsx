"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { submitConsultation, type FormState } from "@/lib/actions";
import { SERVICES } from "@/lib/site";
import { UI_ICONS } from "@/lib/icons";
import { cn } from "@/lib/utils";

const INITIAL: FormState = { status: "idle" };

const FIELD =
  "h-14 w-full rounded-input border border-border bg-surface px-5 text-small text-foreground transition-colors duration-200 placeholder:text-ink-400 focus:border-primary";

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <p className="flex flex-col gap-2">
      <label htmlFor={name} className="text-small font-semibold text-heading">
        {label}
      </label>
      {children}
      {error ? (
        <span
          id={`${name}-error`}
          className="text-caption font-medium text-danger-600"
        >
          {error}
        </span>
      ) : null}
    </p>
  );
}

export function ConsultationForm() {
  const [state, action, pending] = useActionState(submitConsultation, INITIAL);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start rounded-card border border-success-200 bg-success-50 p-10"
      >
        <span className="inline-flex rounded-full bg-success-600 p-3 text-white">
          <Icon icon={UI_ICONS.check} size="lg" />
        </span>
        <h3 className="mt-6 text-h4">Request received</h3>
        <p className="mt-3 text-small text-muted">{state.message}</p>
      </div>
    );
  }

  const err = state.errors ?? {};

  return (
    <form
      action={action}
      noValidate
      className="rounded-card border border-border bg-surface p-8 shadow-card sm:p-10"
    >
      {state.status === "error" && !state.errors ? (
        <p
          role="alert"
          className="mb-8 rounded-input border border-danger-200 bg-danger-50 px-5 py-4 text-small text-danger-700"
        >
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" name="name" error={err.name}>
          <input
            id="name"
            name="name"
            autoComplete="name"
            aria-invalid={Boolean(err.name)}
            aria-describedby={err.name ? "name-error" : undefined}
            className={cn(FIELD, err.name && "border-danger-500")}
          />
        </Field>

        <Field label="Email address" name="email" error={err.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(err.email)}
            aria-describedby={err.email ? "email-error" : undefined}
            className={cn(FIELD, err.email && "border-danger-500")}
          />
        </Field>

        <Field label="Phone number" name="phone" error={err.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={Boolean(err.phone)}
            aria-describedby={err.phone ? "phone-error" : undefined}
            className={cn(FIELD, err.phone && "border-danger-500")}
          />
        </Field>

        <Field label="I am interested in" name="interest" error={err.interest}>
          <select
            id="interest"
            name="interest"
            defaultValue=""
            aria-invalid={Boolean(err.interest)}
            aria-describedby={err.interest ? "interest-error" : undefined}
            className={cn(FIELD, err.interest && "border-danger-500")}
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Something else">Something else</option>
          </select>
        </Field>
      </div>

      <div className="mt-6">
        <Field label="How can we help?" name="message" error={err.message}>
          <textarea
            id="message"
            name="message"
            rows={5}
            aria-invalid={Boolean(err.message)}
            aria-describedby={err.message ? "message-error" : undefined}
            className={cn(
              FIELD,
              "h-auto resize-y py-4 leading-relaxed",
              err.message && "border-danger-500",
            )}
          />
        </Field>
      </div>

      <div aria-hidden className="absolute left-[-9999px]">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <Button
        type="submit"
        variant="gold"
        size="xl"
        disabled={pending}
        icon={pending ? undefined : UI_ICONS.arrow}
        className="mt-8 w-full sm:w-auto"
      >
        {pending ? "Sending…" : "Schedule a Consultation"}
      </Button>

      <p className="mt-5 text-caption text-muted">
        We reply within one business day. Your details stay with our advisory
        team.
      </p>
    </form>
  );
}
