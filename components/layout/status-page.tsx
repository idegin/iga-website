import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Thumbnail } from "@/components/ui/thumbnail";
import { UI_ICONS } from "@/lib/icons";
import { NAV } from "@/lib/site";

export function StatusPage({
  code,
  eyebrow,
  title,
  lead,
  action,
  children,
}: {
  code: string;
  eyebrow: string;
  title: string;
  lead: string;
  action?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section
      aria-labelledby="status-heading"
      className="surface-blue relative isolate flex min-h-svh items-center overflow-hidden py-32"
    >
      <span aria-hidden className="absolute inset-0 -z-20 opacity-40">
        <Thumbnail seed={`status-${code}`} variant="arcs" palette="midnight" />
      </span>
      <span
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-r from-royal-950 via-royal-950/85 to-royal-900/60"
      />

      <div className="container-page">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow">{eyebrow}</p>

            <p
              aria-hidden
              className="numeric mt-8 text-[clamp(6rem,18vw,12rem)] font-bold leading-none tracking-tight text-white/10"
            >
              {code}
            </p>

            <h1 id="status-heading" className="mt-4 text-h1 text-white">
              {title}
            </h1>
            <p className="measure mt-6 text-body-lg text-royal-100">{lead}</p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
              {action ?? (
                <ButtonLink
                  href="/"
                  variant="gold"
                  size="xl"
                  icon={UI_ICONS.arrow}
                >
                  Back to home
                </ButtonLink>
              )}
              <ButtonLink href="/contact" variant="onDark" size="xl">
                Speak with an advisor
              </ButtonLink>
            </div>

            {children}
          </div>

          <nav aria-label="Site sections" className="lg:col-span-5">
            <p className="text-caption font-semibold uppercase tracking-eyebrow text-accent">
              Or try one of these
            </p>
            <ul className="mt-6 border-t border-border">
              {NAV.filter((item) => item.href !== "/").map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group flex items-center justify-between gap-6 border-b border-border py-5 text-h5 font-semibold text-white transition-colors duration-200 hover:text-accent"
                  >
                    {item.label}
                    <Icon
                      icon={UI_ICONS.arrow}
                      size="md"
                      className="shrink-0 text-accent transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
