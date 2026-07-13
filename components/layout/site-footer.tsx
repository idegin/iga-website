import Image from "next/image";
import Link from "next/link";
import { NewsletterForm } from "./newsletter-form";
import { Icon } from "@/components/ui/icon";
import { SocialIcon } from "@/components/ui/social-icon";
import { CONTACT_ICONS, UI_ICONS } from "@/lib/icons";
import { CONTACT, CTA, NAV, SERVICES, SITE, SOCIALS } from "@/lib/site";

const LEGAL = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export function SiteFooter() {
  const socials = SOCIALS.filter((s) => s.href);
  const { street, city, state, country } = CONTACT.address;
  const hasAddress = Boolean(street && city);

  return (
    <footer className="surface-blue mt-auto">
      <div className="container-page border-b border-border py-14 lg:py-16">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-md">
            <h2 className="text-h4 font-bold text-white">
              Investment insights, straight to your inbox
            </h2>
            <p className="mt-2 text-small text-muted">
              Market trends, housing demand, and opportunities across Nigeria. No
              noise.
            </p>
          </div>
          <div className="w-full lg:max-w-lg">
            <NewsletterForm />
          </div>
        </div>
      </div>

      <div className="container-page grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <div className="lg:col-span-4">
          <Link href="/" aria-label={`${SITE.name} — home`}>
            <Image
              src="/brand/logo-white.png"
              alt={SITE.legalName}
              width={1245}
              height={260}
              className="h-9 w-auto"
            />
          </Link>
          <p className="mt-6 max-w-sm text-small text-muted">
            {SITE.description}
          </p>

          {socials.length > 0 ? (
            <ul className="mt-8 flex gap-3">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${SITE.name} on ${social.label}`}
                    className="tap inline-flex items-center justify-center rounded-full border border-border text-white transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-on-accent"
                  >
                    <SocialIcon platform={social.label} size={18} />
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <nav aria-label="Footer" className="lg:col-span-2">
          <h2 className="text-caption font-semibold uppercase tracking-eyebrow text-accent-text">
            Company
          </h2>
          <ul className="mt-6 space-y-3.5">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-small text-muted transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="text-caption font-semibold uppercase tracking-eyebrow text-accent-text">
            Services
          </h2>
          <ul className="mt-6 space-y-3.5">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="text-small text-muted transition-colors duration-200 hover:text-white"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-caption font-semibold uppercase tracking-eyebrow text-accent-text">
            Contact
          </h2>

          <address className="mt-6 space-y-4 not-italic">
            {CONTACT.phone ? (
              <a
                href={CONTACT.phoneHref || `tel:${CONTACT.phone}`}
                className="flex items-start gap-3 text-small text-muted transition-colors duration-200 hover:text-white"
              >
                <Icon
                  icon={CONTACT_ICONS.phone}
                  size="md"
                  className="mt-0.5 shrink-0 text-accent"
                />
                {CONTACT.phone}
              </a>
            ) : null}

            {CONTACT.email ? (
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-start gap-3 text-small text-muted transition-colors duration-200 hover:text-white"
              >
                <Icon
                  icon={CONTACT_ICONS.email}
                  size="md"
                  className="mt-0.5 shrink-0 text-accent"
                />
                {CONTACT.email}
              </a>
            ) : null}

            {hasAddress ? (
              <p className="flex items-start gap-3 text-small text-muted">
                <Icon
                  icon={CONTACT_ICONS.address}
                  size="md"
                  className="mt-0.5 shrink-0 text-accent"
                />
                <span>
                  {street}, {city}
                  {state ? `, ${state}` : null}
                  {country ? `, ${country}` : null}
                </span>
              </p>
            ) : null}

            <p className="flex items-start gap-3 text-small text-muted">
              <Icon
                icon={CONTACT_ICONS.hours}
                size="md"
                className="mt-0.5 shrink-0 text-accent"
              />
              <span>
                {CONTACT.hours
                  .filter((h) => h.opens && h.closes)
                  .map((h) => (
                    <span key={h.days} className="block">
                      {h.days}: {h.opens}–{h.closes}
                    </span>
                  ))}
              </span>
            </p>
          </address>

          <Link
            href={CTA.primary.href}
            className="mt-7 inline-flex items-center gap-2 text-small font-semibold text-accent transition-colors duration-200 hover:text-accent-hover"
          >
            {CTA.primary.label}
            <Icon icon={UI_ICONS.arrowDiagonal} size="sm" />
          </Link>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-4 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-caption text-muted">
            © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-caption text-muted transition-colors duration-200 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
