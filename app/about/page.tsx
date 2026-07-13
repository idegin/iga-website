import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Leadership } from "@/components/sections/leadership";
import { WhyChoose } from "@/components/sections/why-choose";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { MISSION, VISION } from "@/lib/content";
import { VALUE_ICONS } from "@/lib/icons";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "IGA Global Investments Ltd is a property investment advisory and development firm helping individuals, families, and diaspora investors build wealth through Nigerian real estate.",
  alternates: { canonical: "/about" },
};

const TRUST = [
  {
    title: "We are paid for advice, not listings",
    body: "Nothing we recommend depends on moving a particular property. That is the difference between an advisor and a marketer.",
    icon: VALUE_ICONS.integrity,
  },
  {
    title: "Due diligence before enthusiasm",
    body: "Title, seller, and land are verified before money moves. If something does not hold up, we say so.",
    icon: VALUE_ICONS.growth,
  },
  {
    title: "Accessible entry points",
    body: "Affordability is a stated value, not a marketing line. We find a realistic starting point rather than stretching you past it.",
    icon: VALUE_ICONS.affordability,
  },
  {
    title: "We are here after the sale",
    body: "Development support, handover, and portfolio review continue long after the transaction closes.",
    icon: VALUE_ICONS.team,
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Advisors first, developers second"
        lead="IGA Global Investments Ltd exists to help individuals, families, and diaspora investors put money into Nigerian residential property with their eyes open."
        image="/images/values.webp"
      />

      <section aria-labelledby="story-heading" className="section bg-surface">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="right">
            <div className="zoom-media relative aspect-4/3 overflow-hidden rounded-image">
              <Image
                src="/images/about.webp"
                alt="IGA Global advisors in discussion with clients around a meeting table"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">Our Story</p>
              <h2 id="story-heading" className="mt-5 text-h2">
                Real estate should build a future, not just change hands
              </h2>
              <p className="mt-6 text-body-lg text-muted">
                Nigerian property is one of the most reliable ways to build
                long-term wealth, and one of the easiest places to lose money
                badly. The difference is almost always the quality of the advice.
              </p>
              <p className="mt-5 text-small text-muted">
                {SITE.legalName} was built around that gap. We are a property
                investment advisory and development firm: we help clients decide
                what to buy and why, we verify what they are buying, and we
                develop quality, affordable homes ourselves. The work is
                deliberately unglamorous — verification, arithmetic, and telling
                people things they would rather not hear.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="mission-heading"
        className="surface-blue section"
      >
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">What drives us</p>
            <h2 id="mission-heading" className="sr-only">
              Our mission and vision
            </h2>
          </Reveal>

          <dl className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <dt className="text-h4 font-bold text-white">Our Mission</dt>
              <dd className="mt-5 border-l-2 border-accent pl-6 text-body-lg text-muted">
                {MISSION}
              </dd>
            </Reveal>
            <Reveal delay={0.1}>
              <dt className="text-h4 font-bold text-white">Our Vision</dt>
              <dd className="mt-5 border-l-2 border-border-strong pl-6 text-body-lg text-muted">
                {VISION}
              </dd>
            </Reveal>
          </dl>
        </div>
      </section>

      <WhyChoose />

      <section aria-labelledby="trust-heading" className="section bg-surface-sunken">
        <div className="container-page">
          <SectionHeading
            id="trust-heading"
            eyebrow="Why Clients Trust Us"
            title="What actually earns the trust"
            lead="Not slogans. These are the things a client can hold us to."
            align="center"
          />

          <ul className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
            {TRUST.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={(i % 2) * 0.08}
                className="rounded-card border border-border bg-surface p-8 shadow-card"
              >
                <span className="inline-flex rounded-button bg-gold-50 p-3 text-accent-text">
                  <Icon icon={item.icon} size="lg" />
                </span>
                <h3 className="mt-6 text-h5 font-semibold">{item.title}</h3>
                <p className="mt-3 text-small text-muted">{item.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <Leadership />
      <CtaBanner />
    </>
  );
}
