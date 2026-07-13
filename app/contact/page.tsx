import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { ConsultationForm } from "@/components/sections/consultation-form";
import { Faq } from "@/components/sections/faq";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { CONTACT_ICONS } from "@/lib/icons";
import { FAQS } from "@/lib/content";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/schema";
import { CONTACT } from "@/lib/site";

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
          </div>

          <div className="lg:col-span-7">
            <Reveal direction="left">
              <ConsultationForm />
            </Reveal>
          </div>
        </div>
      </section>

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
