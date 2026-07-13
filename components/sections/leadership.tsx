import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { UI_ICONS } from "@/lib/icons";
import { LEADERSHIP } from "@/lib/site";

const INITIALS = LEADERSHIP.ceo.name
  .split(" ")
  .map((part) => part[0])
  .join("");

export function Leadership() {
  return (
    <section
      aria-labelledby="leadership-heading"
      className="section bg-surface-sunken"
    >
      <div className="container-page grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal direction="right" className="lg:col-span-5">
          <div className="relative mx-auto aspect-4/5 w-full max-w-sm overflow-hidden rounded-image bg-royal-800 lg:mx-0 lg:max-w-none">
            <span
              aria-hidden
              className="absolute inset-0 flex items-center justify-center text-[9rem] font-bold leading-none text-white/10"
            >
              {INITIALS}
            </span>
            <span
              aria-hidden
              className="absolute bottom-0 left-0 h-1.5 w-24 bg-accent"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow">Leadership</p>
            <h2 id="leadership-heading" className="mt-5 text-h2">
              Accountable to you, by name
            </h2>
            <p className="mt-6 text-body-lg text-muted">
              Advisory only means something when someone stands behind the
              advice. IGA Global is led by {LEADERSHIP.ceo.name}, and the
              standards the firm holds to — integrity, transparency, and
              professional excellence — are the ones he is answerable for.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 border-t border-border pt-8">
              <p className="text-h5 font-semibold text-heading">
                {LEADERSHIP.ceo.name}
              </p>
              <p className="mt-1 text-small text-muted">
                {LEADERSHIP.ceo.role}, IGA Global Investments Ltd
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <ButtonLink
              href="/about"
              variant="secondary"
              size="lg"
              icon={UI_ICONS.arrow}
              className="mt-9"
            >
              Meet Our Leadership
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
