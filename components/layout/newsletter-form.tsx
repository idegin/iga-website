"use client";

import { Button } from "@/components/ui/button";
import { UI_ICONS } from "@/lib/icons";

export function NewsletterForm() {
  return (
    <form
      className="flex w-full flex-col gap-3 sm:flex-row"
      onSubmit={(e) => e.preventDefault()}
    >
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
          className="h-14 w-full rounded-input border border-border-strong bg-white/5 px-5 text-small text-white placeholder:text-royal-300 transition-colors duration-200 focus:border-accent focus:bg-white/10"
        />
      </div>
      <Button type="submit" variant="gold" size="xl" icon={UI_ICONS.arrow}>
        Subscribe
      </Button>
    </form>
  );
}
