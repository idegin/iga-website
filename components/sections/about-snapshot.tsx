import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { UI_ICONS } from "@/lib/icons";
import { MISSION, VISION } from "@/lib/content";

export function AboutSnapshot() {
  return (
    <section
      aria-labelledby="about-heading"
      className="section bg-surface"
    >
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal direction="right">
          <div className="zoom-media relative aspect-4/5 overflow-hidden rounded-image sm:aspect-3/2 lg:aspect-4/5">
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
            <p className="eyebrow">Who We Are</p>
            <h2 id="about-heading" className="mt-5 text-h2">
              A property investment firm, not a property marketplace
            </h2>
            <p className="mt-6 text-body-lg text-muted">
              IGA Global Investments Ltd is a property investment advisory and
              development firm helping clients invest in residential real estate
              in Nigeria. We are paid to give you a straight answer, not to move
              a listing.
            </p>
          </Reveal>

          <dl className="mt-10 space-y-8">
            <Reveal delay={0.08}>
              <dt className="text-caption font-semibold uppercase tracking-eyebrow text-accent-text">
                Our Mission
              </dt>
              <dd className="mt-3 border-l-2 border-accent pl-5 text-small text-muted">
                {MISSION}
              </dd>
            </Reveal>
            <Reveal delay={0.16}>
              <dt className="text-caption font-semibold uppercase tracking-eyebrow text-accent-text">
                Our Vision
              </dt>
              <dd className="mt-3 border-l-2 border-border-strong pl-5 text-small text-muted">
                {VISION}
              </dd>
            </Reveal>
          </dl>

          <Reveal delay={0.24}>
            <ButtonLink
              href="/about"
              variant="secondary"
              size="lg"
              icon={UI_ICONS.arrow}
              className="mt-10"
            >
              Learn More About Us
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
