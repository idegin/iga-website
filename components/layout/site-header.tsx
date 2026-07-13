"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { UI_ICONS, CONTACT_ICONS } from "@/lib/icons";
import { CTA, NAV, CONTACT, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const isHome = pathname === "/";
  const solid = scrolled || !isHome;
  const onDarkChrome = open || !solid;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-100 focus:rounded-button focus:bg-primary focus:px-5 focus:py-3 focus:text-small focus:font-semibold focus:text-on-primary"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ease-standard",
          solid
            ? "border-b border-border bg-surface/95 backdrop-blur-md shadow-card"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="container-page flex h-16 items-center justify-between gap-6 sm:h-18 lg:h-20">
          <Link
            href="/"
            aria-label={`${SITE.name} — home`}
            className="relative z-10 shrink-0"
          >
            <Image
              src={solid ? "/brand/logo.png" : "/brand/logo-white.png"}
              alt={SITE.legalName}
              width={1245}
              height={260}
              priority
              className="h-8 w-auto sm:h-9"
            />
          </Link>

          <nav
            aria-label="Primary"
            className="hidden lg:flex lg:items-center lg:gap-8"
          >
            {NAV.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative text-small font-medium transition-colors duration-200",
                    solid
                      ? "text-ink-700 hover:text-primary"
                      : "text-white/85 hover:text-white",
                    active && (solid ? "text-primary" : "text-white"),
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-0.5 bg-accent transition-all duration-300 ease-standard",
                      active ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            {CONTACT.phone ? (
              <a
                href={CONTACT.phoneHref || `tel:${CONTACT.phone}`}
                className={cn(
                  "hidden items-center gap-2 text-small font-medium transition-colors duration-200 xl:inline-flex",
                  solid
                    ? "text-ink-700 hover:text-primary"
                    : "text-white/85 hover:text-white",
                )}
              >
                <Icon icon={CONTACT_ICONS.phone} size="sm" />
                {CONTACT.phone}
              </a>
            ) : null}

            <ButtonLink
              href={CTA.primary.href}
              variant={solid ? "primary" : "onDark"}
              size="md"
              className="hidden sm:inline-flex"
            >
              {CTA.primary.label}
            </ButtonLink>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={cn(
                "tap relative z-10 -mr-2 inline-flex items-center justify-center rounded-button transition-colors duration-200 lg:hidden",
                open || solid
                  ? "text-primary hover:bg-ink-100"
                  : "text-white hover:bg-white/10",
              )}
            >
              <Icon icon={open ? UI_ICONS.close : UI_ICONS.menu} size="lg" />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        hidden={!open}
        className="surface-blue fixed inset-0 z-40 flex flex-col overflow-y-auto pt-24 pb-10 lg:hidden"
      >
        <nav aria-label="Mobile" className="container-page flex flex-col">
          {NAV.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              style={{ animationDelay: `${i * 40}ms` }}
              className="animate-fade-up border-b border-border py-5 text-h4 font-semibold text-white transition-colors duration-200 hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="container-page mt-10 flex flex-col gap-4">
          <ButtonLink href={CTA.primary.href} variant="gold" size="xl">
            {CTA.primary.label}
          </ButtonLink>
          {CONTACT.phone ? (
            <a
              href={CONTACT.phoneHref || `tel:${CONTACT.phone}`}
              className="tap inline-flex items-center justify-center gap-2.5 rounded-button border border-border-strong text-small font-semibold text-white"
            >
              <Icon icon={CONTACT_ICONS.phone} size="sm" />
              {CONTACT.phone}
            </a>
          ) : null}
        </div>
      </div>
    </>
  );
}
