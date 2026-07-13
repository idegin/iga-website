import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SERVICE_DETAIL } from "@/lib/content";
import { UI_ICONS } from "@/lib/icons";

export function Services() {
  return (
    <section
      aria-labelledby="services-heading"
      className="section bg-surface-sunken"
    >
      <div className="container-page">
        <SectionHeading
          id="services-heading"
          eyebrow="What We Do"
          title="Advisory and development, end to end"
          lead="Six services that cover the distance between having capital and holding property that earns."
        />

        <ul className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_DETAIL.map((service, i) => (
            <Reveal
              key={service.slug}
              as="li"
              delay={(i % 3) * 0.08}
              className="h-full"
            >
              <Link
                href={`/services#${service.slug}`}
                className="lift group flex h-full flex-col rounded-card border border-border bg-surface p-8 shadow-card"
              >
                <span className="inline-flex w-fit rounded-button bg-royal-50 p-3.5 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-on-primary">
                  <Icon icon={service.icon} size="lg" />
                </span>

                <h3 className="mt-6 text-h5 font-semibold">{service.title}</h3>
                <p className="mt-3 flex-1 text-small text-muted">
                  {service.summary}
                </p>

                <span className="mt-7 inline-flex items-center gap-2 text-small font-semibold text-accent-text">
                  Learn more
                  <span className="sr-only"> about {service.title}</span>
                  <Icon
                    icon={UI_ICONS.arrow}
                    size="sm"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1} className="mt-14 flex justify-center">
          <ButtonLink href="/services" variant="primary" size="lg" icon={UI_ICONS.arrow}>
            View All Services
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
