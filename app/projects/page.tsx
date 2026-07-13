import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Thumbnail } from "@/components/ui/thumbnail";
import { UI_ICONS, VALUE_ICONS } from "@/lib/icons";
import { PROJECTS, STANDARDS } from "@/lib/projects";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Our development philosophy and standards, and the residential projects IGA Global Investments is delivering across Abuja and Nigeria.",
  alternates: { canonical: "/projects" },
};

const STATUS_STYLE: Record<string, string> = {
  Completed: "border-success-200 bg-success-50 text-success-800",
  Ongoing: "border-gold-200 bg-gold-50 text-gold-800",
  Planned: "border-border bg-surface-sunken text-muted",
};

const STANDARD_ICONS = [
  VALUE_ICONS.team,
  VALUE_ICONS.integrity,
  VALUE_ICONS.sustainability,
  VALUE_ICONS.affordability,
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Built to a standard, not to a deadline"
        lead="We would rather deliver a building that still holds up in twenty years than one that opened on schedule. This is what we build, and the standards we hold it to."
        image="/images/values.webp"
      />

      <section aria-labelledby="vision-heading" className="section bg-surface">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal direction="right">
            <div className="zoom-media relative aspect-4/3 overflow-hidden rounded-image">
              <Image
                src="/images/insight-3.webp"
                alt="Interior of a well-finished contemporary residential home"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">Our Development Vision</p>
              <h2 id="vision-heading" className="mt-5 text-h2">
                Housing that a family can actually afford, and still be proud of
              </h2>
              <p className="mt-6 text-body-lg text-muted">
                Affordable housing in Nigeria too often means compromised housing.
                We do not accept that trade. Cost is engineered at design stage,
                where it belongs, rather than stripped out of the finishes when the
                budget runs short.
              </p>
              <p className="mt-5 text-small text-muted">
                Every development we take on is judged against the same question:
                would we advise a client to buy this? If the answer is no, it does
                not get built.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="portfolio-heading"
        className="section bg-surface-sunken"
      >
        <div className="container-page">
          <SectionHeading
            id="portfolio-heading"
            eyebrow="Portfolio"
            title="Developments and initiatives"
            lead="Completed work, projects under way, and schemes in planning."
          />

          <ul className="mt-16 grid gap-8 md:grid-cols-2">
            {PROJECTS.map((project, i) => (
              <Reveal
                as="li"
                key={project.slug}
                delay={(i % 2) * 0.08}
                className="lift group flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface shadow-card"
              >
                <div className="zoom-media relative aspect-3/2 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.alt ?? ""}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-standard group-hover:scale-105"
                    />
                  ) : (
                    <Thumbnail seed={project.slug} label={project.name} />
                  )}

                  <span
                    className={cn(
                      "absolute left-5 top-5 inline-flex rounded-full border px-3.5 py-1.5 text-caption font-semibold",
                      STATUS_STYLE[project.status],
                    )}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-8">
                  <p className="flex items-center gap-2.5 text-caption font-semibold uppercase tracking-eyebrow text-accent-text">
                    <Icon icon={VALUE_ICONS.community} size="sm" />
                    {project.location}
                  </p>

                  <h3 className="mt-4 text-h4">{project.name}</h3>
                  <p className="mt-3 flex-1 text-small text-muted">
                    {project.summary}
                  </p>

                  <dl className="mt-7 grid grid-cols-2 gap-4 border-t border-border pt-6">
                    <div>
                      <dt className="text-caption text-muted">Type</dt>
                      <dd className="mt-1 text-small font-semibold text-heading">
                        {project.type}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-caption text-muted">Scale</dt>
                      <dd className="numeric mt-1 text-small font-semibold text-heading">
                        {project.units}
                      </dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section
        aria-labelledby="standards-heading"
        className="surface-blue section"
      >
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">Development Standards</p>
            <h2 id="standards-heading" className="mt-5 text-h2">
              Four things we will not trade away
            </h2>
            <p className="measure mt-6 text-body-lg text-muted">
              Every development is measured against these, and a project that fails
              one of them does not proceed.
            </p>
          </Reveal>

          <ol className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {STANDARDS.map((standard, i) => (
              <Reveal
                as="li"
                key={standard.title}
                delay={(i % 4) * 0.06}
                className="group relative border-t border-border pt-8"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-700 ease-standard group-hover:w-full"
                />
                <Icon
                  icon={STANDARD_ICONS[i]}
                  size="xl"
                  className="text-accent"
                />
                <h3 className="mt-5 text-h5 font-semibold text-white">
                  {standard.title}
                </h3>
                <p className="mt-3 text-small text-muted">{standard.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="future-heading" className="section bg-surface">
        <div className="container-page">
          <SectionHeading
            id="future-heading"
            eyebrow="Future Vision"
            title="Where we are going next"
            lead="Our pipeline follows the same logic we give our clients: buy where the city is heading, build what people actually need, and take the long view."
            align="center"
          />

          <Reveal delay={0.1} className="mt-14 flex justify-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-small font-semibold text-primary transition-colors duration-200 hover:text-accent-text"
            >
              Discuss a development partnership
              <Icon icon={UI_ICONS.arrowDiagonal} size="sm" />
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBanner />

      <JsonLd
        schema={breadcrumbSchema([{ name: "Projects", path: "/projects" }])}
      />
    </>
  );
}
