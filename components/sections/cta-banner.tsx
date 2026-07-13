import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { UI_ICONS } from "@/lib/icons";
import { CTA } from "@/lib/site";

export function CtaBanner() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="surface-blue relative isolate overflow-hidden"
    >
      <Image
        src="/images/cta.webp"
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="-z-20 object-cover opacity-25"
      />
      <span
        aria-hidden
        className="absolute inset-0 -z-10 bg-linear-to-r from-royal-950 via-royal-900/95 to-royal-800/80"
      />

      <div className="container-page py-24 lg:py-32">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">Take the first step</p>
          <h2 id="cta-heading" className="mt-6 text-h2 text-white">
            Ready to build wealth through real estate?
          </h2>
          <p className="mx-auto measure mt-6 text-body-lg text-muted">
            Book a consultation. We will look at your position honestly and tell
            you what a sensible strategy looks like — including if the answer is
            to wait.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <ButtonLink
              href={CTA.primary.href}
              variant="gold"
              size="xl"
              icon={UI_ICONS.arrow}
            >
              Book a Free Consultation
            </ButtonLink>
            <ButtonLink href={CTA.supporting.href} variant="onDark" size="xl">
              {CTA.supporting.label}
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
