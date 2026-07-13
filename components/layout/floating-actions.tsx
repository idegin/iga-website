"use client";

import { useEffect, useState } from "react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";
import { Icon } from "@/components/ui/icon";
import { UI_ICONS } from "@/lib/icons";
import { CONTACT, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsapp = CONTACT.whatsapp.replace(/\D/g, "");

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={cn(
          "tap inline-flex items-center justify-center rounded-full border border-border bg-surface text-primary shadow-card transition-all duration-300 ease-standard hover:bg-primary hover:text-on-primary",
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        <Icon icon={UI_ICONS.arrowUp} size="md" />
      </button>

      {whatsapp ? (
        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Message ${SITE.name} on WhatsApp`}
          className="tap inline-flex items-center justify-center rounded-full bg-success-600 text-white shadow-float transition-transform duration-300 ease-standard hover:scale-105"
        >
          <SiWhatsapp size={22} aria-hidden focusable="false" />
        </a>
      ) : null}
    </div>
  );
}
