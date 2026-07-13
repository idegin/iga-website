import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Opportunities } from "@/components/sections/opportunities";
import { Process } from "@/components/sections/process";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Thumbnail } from "@/components/ui/thumbnail";
import { FAQS } from "@/lib/content";
import { UI_ICONS, VALUE_ICONS } from "@/lib/icons";
import { breadcrumbSchema, faqSchema, JsonLd } from "@/lib/schema";
import { CTA } from "@/lib/site";

export const metadata: Metadata = {
  title: "Investment Solutions",
  description:
    "Investment routes into Nigerian residential property for individuals, families, diaspora investors, businesses, and institutions — from land banking to joint ventures and portfolio building.",
  alternates: { canonical: "/investment-solutions" },
};

const AUDIENCES = [
  {
    title: "Individuals",
    body: "A first property, bought properly, with someone checking the things you would not know to check.",
    icon: VALUE_ICONS.growth,
  },
  {
    title: "Families",
    body: "A home to live in, or a base that grows with the household over a decade or more.",
    icon: VALUE_ICONS.community,
  },
  {
    title: "Diaspora Investors",
    body: "Accountable representation on the ground, so distance is not the reason a deal goes wrong.",
    icon: VALUE_ICONS.integrity,
  },
  {
    title: "Businesses",
    body: "Capital deployed into property as a hedge and a long-term balance-sheet asset.",
    icon: VALUE_ICONS.affordability,
  },
  {
    title: "Institutions",
    body: "Development partnerships and joint ventures at scale, structured with clear returns.",
    icon: VALUE_ICONS.team,
  },
] as const;

const COMPARISON = [
  {
    route: "Residential Investment",
    horizon: "Medium",
    entry: "Moderate",
    income: "Rental yield",
    best: "Investors who want the asset earning while it appreciates",
  },
  {
    route: "Land Banking",
    horizon: "Long",
    entry: "Low",
    income: "None until sale",
    best: "Patient capital buying ahead of the city's growth",
  },
  {
    route: "Joint Venture",
    horizon: "Medium",
    entry: "High",
    income: "Share of returns",
    best: "Capital partnering with land and expertise",
  },
  {
    route: "Development Partnership",
    horizon: "Medium to long",
    entry: "High",
    income: "Project returns",
    best: "Institutions and developers building at scale",
  },
  {
    route: "Portfolio Building",
    horizon: "Long",
    entry: "Staged",
    income: "Mixed",
    best: "Investors compounding across several properties over time",
  },
] as const;

export default function InvestmentSolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Investment Solutions"
        title="Choose the route, not the listing"
        lead="There is more than one way into Nigerian property, and they do not suit the same person. Here is how the routes differ, and how to tell which one is yours."
        image="/images/opp-development.webp"
      />

      <section aria-labelledby="audience-heading" className="section bg-surface">
        <div className="container-page">
          <SectionHeading
            id="audience-heading"
            eyebrow="Who We Help"
            title="Different starting points, different strategies"
            lead="The right route depends far more on who you are than on what is currently for sale."
          />

          <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AUDIENCES.map((audience, i) => (
              <Reveal
                as="li"
                key={audience.title}
                delay={(i % 3) * 0.08}
                className="group relative overflow-hidden rounded-card border border-border bg-surface p-8 shadow-card transition-shadow duration-300 hover:shadow-card-hover"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 w-0 bg-accent transition-all duration-500 ease-standard group-hover:w-full"
                />
                <span className="inline-flex rounded-button bg-royal-50 p-3.5 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-on-primary">
                  <Icon icon={audience.icon} size="lg" />
                </span>
                <h3 className="mt-6 text-h5 font-semibold">{audience.title}</h3>
                <p className="mt-3 text-small text-muted">{audience.body}</p>
              </Reveal>
            ))}

            <Reveal
              as="li"
              delay={0.24}
              className="relative overflow-hidden rounded-card bg-royal-800 p-8 shadow-card"
            >
              <span aria-hidden className="absolute inset-0 opacity-30">
                <Thumbnail seed="advisor-cta" variant="arcs" palette="midnight" />
              </span>
              <div className="relative">
                <h3 className="text-h5 font-semibold text-white">
                  Not sure which is yours?
                </h3>
                <p className="mt-3 text-small text-royal-100">
                  That is precisely what the first conversation is for.
                </p>
                <ButtonLink
                  href={CTA.secondary.href}
                  variant="gold"
                  size="md"
                  icon={UI_ICONS.arrow}
                  className="mt-6"
                >
                  Speak With an Advisor
                </ButtonLink>
              </div>
            </Reveal>
          </ul>
        </div>
      </section>

      <Opportunities />

      <section
        aria-labelledby="compare-heading"
        className="surface-blue section"
      >
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">Compare the routes</p>
            <h2 id="compare-heading" className="mt-5 text-h2">
              Side by side, honestly
            </h2>
            <p className="measure mt-6 text-body-lg text-muted">
              No route is better than another. They differ in how long your money
              is committed, how much you need to start, and when it pays you back.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 overflow-x-auto rounded-card border border-border">
              <table className="w-full min-w-3xl border-collapse text-left">
                <caption className="sr-only">
                  Comparison of investment routes by horizon, entry level, income
                  type, and who each route suits
                </caption>
                <thead>
                  <tr className="bg-royal-950/40">
                    {["Route", "Horizon", "Entry", "Income", "Best for"].map(
                      (heading) => (
                        <th
                          key={heading}
                          scope="col"
                          className="px-6 py-5 text-caption font-semibold uppercase tracking-eyebrow text-accent"
                        >
                          {heading}
                        </th>
                      ),
                    )}
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON.map((row) => (
                    <tr
                      key={row.route}
                      className="border-t border-border transition-colors duration-200 hover:bg-white/5"
                    >
                      <th
                        scope="row"
                        className="px-6 py-6 text-small font-semibold text-white"
                      >
                        {row.route}
                      </th>
                      <td className="px-6 py-6 text-small text-muted">
                        {row.horizon}
                      </td>
                      <td className="px-6 py-6 text-small text-muted">
                        {row.entry}
                      </td>
                      <td className="px-6 py-6 text-small text-muted">
                        {row.income}
                      </td>
                      <td className="px-6 py-6 text-small text-muted">
                        {row.best}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      <Process />
      <CtaBanner />

      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Investment Solutions", path: "/investment-solutions" },
          ]),
          faqSchema(FAQS),
        ]}
      />
    </>
  );
}
