import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { UI_ICONS, VALUE_ICONS } from "@/lib/icons";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";
import { CTA } from "@/lib/site";

export const metadata: Metadata = {
  title: "Why Invest in Nigeria",
  description:
    "Population growth, urban expansion, and a persistent housing shortfall make Nigerian residential property a long-term opportunity — for those who verify what they buy.",
  alternates: { canonical: "/why-invest-in-nigeria" },
};

const FORCES = [
  {
    title: "A young and growing population",
    body: "Nigeria has one of the largest and fastest-growing populations in the world, and its median age is strikingly low. Every one of those households will need somewhere to live. Housing demand of that kind is demographic, not cyclical — it does not soften because sentiment does.",
    icon: VALUE_ICONS.growth,
  },
  {
    title: "A persistent housing shortfall",
    body: "Quality housing supply has not kept pace with the rate of household formation. That gap is the single clearest reason well-built, well-located residential property holds its value: the buyers and tenants are already there.",
    icon: VALUE_ICONS.community,
  },
  {
    title: "Cities expanding outward",
    body: "Urban centres are pushing into their peripheries. Land that sits on the edge of a city today frequently sits inside it a decade later — which is the entire logic of land banking, and why timing and location dominate the return.",
    icon: VALUE_ICONS.innovation,
  },
  {
    title: "A hedge against currency weakness",
    body: "Property is a real asset. As the cost of cement, steel, labour, and land reprices, so does the value of what has already been built. Rent renegotiates in the money of the day; a savings balance does not.",
    icon: VALUE_ICONS.affordability,
  },
  {
    title: "A diaspora with capital and no presence",
    body: "Nigerians abroad want exposure to home property but cannot verify a title from another continent, and the distance is precisely where deals fail. Representation on the ground is the difference between an investment and a hope.",
    icon: VALUE_ICONS.integrity,
  },
  {
    title: "Formalising land administration",
    body: "Titling and registration continue to improve. That trend rewards buyers who insist on properly documented property, and steadily penalises those who do not.",
    icon: VALUE_ICONS.team,
  },
] as const;

const RISKS = [
  {
    risk: "Title and ownership disputes",
    answer:
      "The most common way money is lost. It is also the most avoidable: verification at the registry, before any deposit, every time.",
  },
  {
    risk: "Illiquidity",
    answer:
      "Property cannot be sold in an afternoon. It should be bought with money you will not need at short notice, and held for a horizon you have actually named.",
  },
  {
    risk: "Infrastructure that never arrives",
    answer:
      "Land is only worth what access makes it worth. We assess roads, power, and water as they are, not as a brochure promises they will be.",
  },
  {
    risk: "Buying at the top of a local run",
    answer:
      "An area that has already appreciated sharply may have priced in its own future. Research is what separates entering early from arriving late.",
  },
] as const;

export default function WhyInvestPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Invest in Nigeria"
        title="The demand is structural, not seasonal"
        lead="Nigeria's housing shortfall is not a market mood. It is arithmetic — a young, fast-growing, rapidly urbanising population, and a supply of quality homes that has never caught up."
        image="/images/nigeria.webp"
      />

      <section aria-labelledby="forces-heading" className="section bg-surface">
        <div className="container-page">
          <SectionHeading
            id="forces-heading"
            eyebrow="Market Overview"
            title="Six forces behind the opportunity"
            lead="None of these are secrets. What separates investors is whether they act on them with verification, or without it."
          />

          <ol className="mt-16 grid gap-x-12 gap-y-14 lg:grid-cols-2">
            {FORCES.map((force, i) => (
              <Reveal
                as="li"
                key={force.title}
                delay={(i % 2) * 0.08}
                className="group relative flex gap-7 border-t border-border pt-8"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-700 ease-standard group-hover:w-full"
                />

                <span className="numeric shrink-0 text-h3 font-bold text-royal-100 transition-colors duration-300 group-hover:text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div>
                  <div className="flex items-center gap-3">
                    <Icon
                      icon={force.icon}
                      size="md"
                      className="text-accent-text"
                    />
                    <h3 className="text-h5 font-semibold">{force.title}</h3>
                  </div>
                  <p className="mt-3 text-small text-muted">{force.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="diaspora-heading"
        className="surface-blue section relative isolate overflow-hidden"
      >
        <Image
          src="/images/opp-diaspora.webp"
          alt=""
          aria-hidden
          fill
          sizes="100vw"
          className="-z-20 object-cover opacity-60"
        />
        <span
          aria-hidden
          className="absolute inset-0 -z-10 bg-linear-to-r from-royal-950 via-royal-950/88 to-royal-900/55"
        />

        <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="eyebrow">Diaspora Opportunity</p>
            <h2 id="diaspora-heading" className="mt-5 text-h2">
              Distance is where deals go wrong
            </h2>
            <p className="mt-6 text-body-lg text-muted">
              Investing from abroad fails for one reason above all others: nobody
              trustworthy is standing on the land. Documents are taken on faith,
              progress is reported by the person being paid, and problems surface
              only when they are expensive.
            </p>
            <p className="mt-5 text-small text-muted">
              We act as accountable representation on the ground — verifying title
              at the registry, inspecting the property, and reporting progress to
              you directly. You keep the decision. We remove the blind spot.
            </p>
            <ButtonLink
              href={CTA.secondary.href}
              variant="gold"
              size="lg"
              icon={UI_ICONS.arrow}
              className="mt-9"
            >
              Speak With an Advisor
            </ButtonLink>
          </Reveal>

          <Reveal direction="left">
            <ul className="space-y-4">
              {[
                "Title verified at the registry before any deposit",
                "Independent inspection of the property and the area",
                "Progress reported by us, not by the seller",
                "Someone answerable to you in the same time zone as the asset",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-4 rounded-card border border-border bg-white/5 p-6 backdrop-blur-sm"
                >
                  <Icon
                    icon={UI_ICONS.check}
                    size="md"
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  <span className="text-small text-white">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section aria-labelledby="risks-heading" className="section bg-surface-sunken">
        <div className="container-page">
          <SectionHeading
            id="risks-heading"
            eyebrow="The Honest Version"
            title="And the risks, stated plainly"
            lead="Any firm that tells you Nigerian property carries no risk is selling you something. These are the real ones, and how we handle them."
            align="center"
          />

          <dl className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
            {RISKS.map((item, i) => (
              <Reveal
                key={item.risk}
                delay={(i % 2) * 0.08}
                className="rounded-card border border-border bg-surface p-8 shadow-card"
              >
                <dt className="flex items-start gap-3 text-h5 font-semibold text-heading">
                  <Icon
                    icon={UI_ICONS.arrowDiagonal}
                    size="md"
                    className="mt-1 shrink-0 text-danger-500"
                  />
                  {item.risk}
                </dt>
                <dd className="mt-4 border-l-2 border-accent pl-5 text-small text-muted">
                  {item.answer}
                </dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <CtaBanner />

      <JsonLd
        schema={breadcrumbSchema([
          { name: "Why Invest in Nigeria", path: "/why-invest-in-nigeria" },
        ])}
      />
    </>
  );
}
