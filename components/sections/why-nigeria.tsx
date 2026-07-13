import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { NIGERIA_DRIVERS } from "@/lib/content";
import { UI_ICONS } from "@/lib/icons";

export function WhyNigeria() {
  return (
    <section
      aria-labelledby="nigeria-heading"
      className="surface-blue section relative isolate overflow-hidden"
    >
      <Image
        src="/images/nigeria.webp"
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

      <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">Why Invest in Nigeria</p>
            <h2 id="nigeria-heading" className="mt-5 text-h2">
              The demand is structural, not seasonal
            </h2>
            <p className="mt-6 text-body-lg text-muted">
              Nigeria's housing shortfall is not a market mood. It is the
              arithmetic of a young, fast-growing, rapidly urbanising population,
              and it is why well-chosen property here rewards patience.
            </p>
            <ButtonLink
              href="/why-invest-in-nigeria"
              variant="onDark"
              size="lg"
              icon={UI_ICONS.arrow}
              className="mt-9"
            >
              Why Invest in Nigeria
            </ButtonLink>
          </Reveal>
        </div>

        <ul className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-7">
          {NIGERIA_DRIVERS.map((driver, i) => (
            <Reveal
              key={driver.title}
              as="li"
              delay={(i % 2) * 0.08}
              className="border-t border-border pt-6"
            >
              <Icon icon={driver.icon} size="xl" className="text-accent" />
              <h3 className="mt-5 text-h5 font-semibold text-white">
                {driver.title}
              </h3>
              <p className="mt-2.5 text-small text-muted">{driver.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
