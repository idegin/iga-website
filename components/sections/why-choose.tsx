import Image from "next/image";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { VALUES } from "@/lib/content";

export function WhyChoose() {
  return (
    <section aria-labelledby="values-heading" className="section bg-surface">
      <div className="container-page grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <Reveal>
            <p className="eyebrow">Why Choose IGA Global</p>
            <h2 id="values-heading" className="mt-5 text-h2">
              The values behind every recommendation
            </h2>
            <p className="mt-6 text-body-lg text-muted">
              Real estate is a long game. These are the commitments we hold to
              across it, whether a client is buying their first home or their
              fifth.
            </p>
          </Reveal>

          <Reveal direction="scale" delay={0.12}>
            <div className="zoom-media mt-10 hidden overflow-hidden rounded-image lg:block">
              <Image
                src="/images/values.webp"
                alt="Modern residential development surrounded by mature trees at dusk"
                width={1400}
                height={933}
                sizes="40vw"
                className="h-72 w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-7">
          {VALUES.map((value, i) => (
            <Reveal
              key={value.title}
              as="li"
              delay={(i % 2) * 0.08}
              className="group"
            >
              <span className="inline-flex rounded-button border border-border p-3 text-accent-text transition-colors duration-300 group-hover:border-accent group-hover:bg-gold-50">
                <Icon icon={value.icon} size="lg" />
              </span>
              <h3 className="mt-5 text-h5 font-semibold">{value.title}</h3>
              <p className="mt-2.5 text-small text-muted">{value.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
