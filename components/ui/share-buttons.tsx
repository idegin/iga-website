"use client";

import { useState } from "react";
import { SiFacebook, SiWhatsapp, SiX } from "@icons-pack/react-simple-icons";
import { Icon } from "./icon";
import { UI_ICONS } from "@/lib/icons";
import { cn } from "@/lib/utils";

const LINK =
  "tap inline-flex items-center justify-center rounded-full border border-border text-muted transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-on-primary";

export function ShareButtons({
  url,
  title,
  className,
}: {
  url: string;
  title: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const targets = [
    {
      label: "Share on WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      Mark: SiWhatsapp,
    },
    {
      label: "Share on X",
      href: `https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      Mark: SiX,
    },
    {
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      Mark: SiFacebook,
    },
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      Mark: null,
    },
  ];

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <span className="text-caption font-semibold uppercase tracking-eyebrow text-muted">
        Share
      </span>

      {targets.map(({ label, href, Mark }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={LINK}
        >
          {Mark ? (
            <Mark size={16} aria-hidden focusable="false" />
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
              focusable="false"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          )}
        </a>
      ))}

      <button type="button" onClick={copy} className={LINK} aria-label="Copy link">
        <Icon icon={copied ? UI_ICONS.check : UI_ICONS.link} size="sm" />
      </button>

      <span role="status" aria-live="polite" className="text-caption text-muted">
        {copied ? "Link copied" : ""}
      </span>
    </div>
  );
}
