import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { FAQS } from "@/lib/content";
import { UI_ICONS } from "@/lib/icons";

export function Faq() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="section bg-surface-sunken"
    >
      <div className="container-page">
        <SectionHeading
          id="faq-heading"
          eyebrow="Questions"
          title="The things people ask us first"
          align="center"
        />

        <div className="mx-auto mt-14 max-w-3xl">
          {FAQS.map((faq, i) => (
            <Reveal key={faq.q} delay={i * 0.05}>
              <details className="group border-b border-border">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-h5 font-semibold text-heading transition-colors duration-200 hover:text-primary [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="mt-0.5 inline-flex shrink-0 rounded-full border border-border-strong p-2 text-primary transition-all duration-300 ease-standard group-open:rotate-45 group-open:border-accent group-open:bg-accent group-open:text-on-accent">
                    <Icon icon={UI_ICONS.expand} size="sm" />
                  </span>
                </summary>
                <p className="pb-7 pr-14 text-small text-muted">{faq.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
