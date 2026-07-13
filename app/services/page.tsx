import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Faq } from "@/components/sections/faq";
import { Process } from "@/components/sections/process";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { SERVICE_DETAIL } from "@/lib/content";
import { UI_ICONS } from "@/lib/icons";
import { CTA } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Property investment advisory, residential development, acquisition consulting, investment planning, market research, and strategic partnerships across Nigeria.",
  alternates: { canonical: "/services" },
};

const DETAIL = [
  {
    image: "/images/opp-residential.webp",
    alt: "Contemporary residential home with landscaped grounds",
    benefits: [
      "Opportunities screened on demand, not hype",
      "The numbers explained before you commit",
      "An honest view of what a property will and will not do",
    ],
    audience: "Investors weighing where to place capital.",
  },
  {
    image: "/images/opp-development.webp",
    alt: "Modern residential apartment development",
    benefits: [
      "Quality construction held to a defined standard",
      "Affordability designed in from the outset",
      "Progress you can see through to handover",
    ],
    audience: "Families and buyers who want a home built properly.",
  },
  {
    image: "/images/opp-land.webp",
    alt: "Residential street in a developing neighbourhood at dusk",
    benefits: [
      "Title verification before money changes hands",
      "Due diligence on the seller and the land",
      "Negotiation support through to completion",
    ],
    audience: "Buyers who want a purchase to be secure, not just quick.",
  },
  {
    image: "/images/insight-1.webp",
    alt: "Reviewing investment figures and projections",
    benefits: [
      "A strategy matched to your horizon and budget",
      "A portfolio built in stages you can afford",
      "Regular review as your circumstances change",
    ],
    audience: "Anyone building toward a long-term position.",
  },
  {
    image: "/images/nigeria.webp",
    alt: "Urban skyline showing city growth",
    benefits: [
      "Demand, pricing, and growth data, not speculation",
      "Area-level insight before you choose a location",
      "Findings explained in plain language",
    ],
    audience: "Investors who want evidence behind a decision.",
  },
  {
    image: "/images/opp-joint-venture.webp",
    alt: "Professional team reviewing a development project",
    benefits: [
      "Landowners matched with capital and expertise",
      "Structured agreements with clear returns",
      "Delivery managed through to completion",
    ],
    audience: "Institutions, landowners, and developers.",
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="What we actually do for you"
        lead="Six services that cover the distance between having capital and holding property that earns. Every one begins with a conversation about your position."
        image="/images/about.webp"
      />

      {SERVICE_DETAIL.map((service, i) => {
        const detail = DETAIL[i];
        const flip = i % 2 === 1;

        return (
          <section
            key={service.slug}
            id={service.slug}
            aria-labelledby={`${service.slug}-heading`}
            className={cn(
              "section scroll-mt-28",
              flip ? "bg-surface-sunken" : "bg-surface",
            )}
          >
            <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <Reveal
                direction={flip ? "left" : "right"}
                className={cn(flip && "lg:order-2")}
              >
                <div className="zoom-media relative aspect-4/3 overflow-hidden rounded-image">
                  <Image
                    src={detail.image}
                    alt={detail.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>

              <div className={cn(flip && "lg:order-1")}>
                <Reveal>
                  <span className="inline-flex rounded-button bg-royal-50 p-3.5 text-primary">
                    <Icon icon={service.icon} size="lg" />
                  </span>
                  <p className="numeric mt-6 text-caption font-semibold tracking-eyebrow text-accent-text">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2
                    id={`${service.slug}-heading`}
                    className="mt-3 text-h3"
                  >
                    {service.title}
                  </h2>
                  <p className="mt-5 text-body-lg text-muted">
                    {service.summary}
                  </p>
                </Reveal>

                <Reveal delay={0.1}>
                  <ul className="mt-8 space-y-3.5">
                    {detail.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <Icon
                          icon={UI_ICONS.check}
                          size="md"
                          className="mt-0.5 shrink-0 text-accent-text"
                        />
                        <span className="text-small text-muted">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-8 border-l-2 border-accent pl-5 text-small text-muted">
                    <span className="font-semibold text-heading">Who it is for: </span>
                    {detail.audience}
                  </p>

                  <ButtonLink
                    href={CTA.primary.href}
                    variant="secondary"
                    size="lg"
                    icon={UI_ICONS.arrow}
                    className="mt-9"
                  >
                    Discuss {service.title}
                  </ButtonLink>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      <Process />
      <Faq />
      <CtaBanner />
    </>
  );
}
