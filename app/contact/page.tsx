import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { ConsultationForm } from "@/components/sections/consultation-form";
import { ContactMap } from "@/components/sections/contact-map";
import { Faq } from "@/components/sections/faq";
import { SocialIcon } from "@/components/ui/social-icon";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { CONTACT_ICONS, UI_ICONS } from "@/lib/icons";
import { FAQS } from "@/lib/content";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/schema";
import { CONTACT, SITE, SOCIALS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Speak with an IGA Global investment advisor. Schedule a consultation to discuss property investment, acquisition, or residential development in Nigeria.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const { street, city, state, country } = CONTACT.address;
  const hasAddress = Boolean(street && city);
  const hours = CONTACT.hours.filter((h) => h.opens && h.closes);

  const channels = [
    CONTACT.phone && {
      icon: CONTACT_ICONS.phone,
      label: "Call us",
      value: CONTACT.phone,
      href: CONTACT.phoneHref || `tel:${CONTACT.phone}`,
    },
    CONTACT.email && {
      icon: CONTACT_ICONS.email,
      label: "Email us",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
    },
    hasAddress && {
      icon: CONTACT_ICONS.address,
      label: "Visit us",
      value: [street, city, state, country].filter(Boolean).join(", "),
      href: CONTACT.mapUrl || undefined,
    },
  ].filter(Boolean) as {
    icon: (typeof CONTACT_ICONS)["phone"];
    label: string;
    value: string;
    href?: string;
  }[];

  const socials = SOCIALS.filter((social) => social.href);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about what you are trying to build"
        lead="Tell us where you are and what you want your money to do. We will tell you honestly what is possible — including when the answer is to wait."
        image="/images/opp-diaspora.webp"
      />

      <section aria-labelledby="contact-heading" className="section bg-surface">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">Get in touch</p>
              <h2 id="contact-heading" className="mt-5 text-h2">
                Speak with an advisor
              </h2>
              <p className="mt-6 text-body-lg text-muted">
                A consultation is a conversation, not a sales pitch. You will
                leave with a clearer picture whether or not you work with us.
              </p>
            </Reveal>

            {channels.length > 0 ? (
              <ul className="mt-10 space-y-5">
                {channels.map((channel) => (
                  <Reveal as="li" key={channel.label} delay={0.06}>
                    <div className="flex items-start gap-4 rounded-card border border-border bg-surface-alt p-6">
                      <span className="inline-flex shrink-0 rounded-button bg-royal-50 p-3 text-primary">
                        <Icon icon={channel.icon} size="lg" />
                      </span>
                      <div>
                        <p className="text-caption font-semibold uppercase tracking-eyebrow text-accent-text">
                          {channel.label}
                        </p>
                        {channel.href ? (
                          <a
                            href={channel.href}
                            className="mt-1.5 block text-small font-medium text-heading transition-colors duration-200 hover:text-primary"
                          >
                            {channel.value}
                          </a>
                        ) : (
                          <p className="mt-1.5 text-small font-medium text-heading">
                            {channel.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </ul>
            ) : null}

            {hours.length > 0 ? (
              <Reveal delay={0.12}>
                <div className="mt-8 rounded-card border border-border p-6">
                  <p className="flex items-center gap-2.5 text-caption font-semibold uppercase tracking-eyebrow text-accent-text">
                    <Icon icon={CONTACT_ICONS.hours} size="sm" />
                    Office hours
                  </p>
                  <dl className="mt-4 space-y-2.5">
                    {hours.map((h) => (
                      <div
                        key={h.days}
                        className="flex justify-between gap-6 text-small"
                      >
                        <dt className="text-muted">{h.days}</dt>
                        <dd className="numeric font-medium text-heading">
                          {h.opens}–{h.closes}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            ) : null}
            {CONTACT.whatsapp ? (
              <Reveal delay={0.16}>
                <a
                  href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center gap-4 rounded-card border border-success-200 bg-success-50 p-6 transition-colors duration-200 hover:border-success-500"
                >
                  <span className="inline-flex shrink-0 rounded-button bg-success-600 p-3 text-white">
                    <Icon icon={CONTACT_ICONS.whatsapp} size="lg" />
                  </span>
                  <span>
                    <span className="block text-small font-semibold text-heading">
                      Message us on WhatsApp
                    </span>
                    <span className="mt-1 block text-caption text-muted">
                      Often the quickest way to reach an advisor.
                    </span>
                  </span>
                  <Icon
                    icon={UI_ICONS.arrowDiagonal}
                    size="md"
                    className="ml-auto shrink-0 text-success-700"
                  />
                </a>
              </Reveal>
            ) : null}

            {socials.length > 0 ? (
              <Reveal delay={0.2}>
                <div className="mt-8 border-t border-border pt-8">
                  <p className="text-caption font-semibold uppercase tracking-eyebrow text-accent-text">
                    Follow IGA Global
                  </p>
                  <ul className="mt-5 flex gap-3">
                    {socials.map((social) => (
                      <li key={social.label}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${SITE.name} on ${social.label}`}
                          className="tap inline-flex items-center justify-center rounded-full border border-border text-muted transition-colors duration-200 hover:border-primary hover:bg-primary hover:text-on-primary"
                        >
                          <SocialIcon platform={social.label} size={18} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ) : null}
          </div>

          <div className="lg:col-span-7">
            <Reveal direction="left">
              <ConsultationForm />
            </Reveal>
          </div>
        </div>
      </section>

      <ContactMap />

      <Faq />

      <JsonLd
        schema={[
          breadcrumbSchema([{ name: "Contact", path: "/contact" }]),
          faqSchema(FAQS),
        ]}
      />
    </>
  );
}
