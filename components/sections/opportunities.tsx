import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { OPPORTUNITIES } from "@/lib/content";
import { UI_ICONS } from "@/lib/icons";
import { CTA } from "@/lib/site";

export function Opportunities() {
  return (
    <section
      aria-labelledby="opportunities-heading"
      className="section bg-surface-sunken"
    >
      <div className="container-page">
        <SectionHeading
          id="opportunities-heading"
          eyebrow="Investment Opportunities"
          title="Ways to put capital into Nigerian property"
          lead="Not listings. These are the routes we advise on, matched to different horizons and different appetites for risk."
        />

        <ul className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {OPPORTUNITIES.map((item, i) => (
            <Reveal
              key={item.title}
              as="li"
              delay={(i % 3) * 0.08}
              className="lift group relative aspect-4/5 overflow-hidden rounded-card bg-royal-950 shadow-card sm:aspect-square lg:aspect-4/5"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 ease-standard group-hover:scale-105"
              />

              <span
                aria-hidden
                className="absolute inset-0 bg-linear-to-t from-royal-950 via-royal-950/70 to-royal-950/10"
              />

              <div className="absolute inset-x-0 bottom-0 p-7">
                <span
                  aria-hidden
                  className="block h-0.5 w-8 bg-accent transition-all duration-500 ease-standard group-hover:w-14"
                />
                <h3 className="mt-5 text-h5 font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-small text-royal-100">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1} className="mt-14 flex justify-center">
          <ButtonLink
            href={CTA.secondary.href}
            variant="primary"
            size="lg"
            icon={UI_ICONS.arrow}
          >
            {CTA.secondary.label}
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
