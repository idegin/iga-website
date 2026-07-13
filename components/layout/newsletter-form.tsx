"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { subscribeToNewsletter, type FormState } from "@/lib/actions";
import { UI_ICONS } from "@/lib/icons";

const INITIAL: FormState = { status: "idle" };

export function NewsletterForm() {
  const [state, action, pending] = useActionState(
    subscribeToNewsletter,
    INITIAL,
  );

  if (state.status === "success") {
    return (
      <p
        role="status"
        className="flex items-center gap-3 rounded-input border border-accent bg-white/10 px-5 py-5 text-small text-white"
      >
        <Icon icon={UI_ICONS.check} size="md" className="shrink-0 text-accent" />
        {state.message}
      </p>
    );
  }

  return (
    <form action={action} noValidate className="w-full">
      <div className="flex w-full flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@example.com"
            aria-invalid={state.status === "error"}
            aria-describedby={
              state.status === "error" ? "newsletter-error" : undefined
            }
            className="h-14 w-full rounded-input border border-border-strong bg-white/5 px-5 text-small text-white placeholder:text-royal-300 transition-colors duration-200 focus:border-accent focus:bg-white/10"
          />
        </div>

        <div aria-hidden className="absolute left-[-9999px]">
          <label htmlFor="newsletter-company">Company</label>
          <input
            id="newsletter-company"
            name="company"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <Button
          type="submit"
          variant="gold"
          size="xl"
          disabled={pending}
          icon={pending ? undefined : UI_ICONS.arrow}
        >
          {pending ? "Signing up…" : "Subscribe"}
        </Button>
      </div>

      {state.status === "error" ? (
        <p
          id="newsletter-error"
          role="alert"
          className="mt-3 text-caption font-medium text-gold-200"
        >
          {state.message}
        </p>
      ) : null}
    </form>
  );
}
