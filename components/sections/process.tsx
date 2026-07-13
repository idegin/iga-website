import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PROCESS } from "@/lib/content";

export function Process() {
  return (
    <section aria-labelledby="process-heading" className="section bg-surface">
      <div className="container-page">
        <SectionHeading
          id="process-heading"
          eyebrow="Our Process"
          title="How an investment actually comes together"
          lead="Six steps, in order. You will always know which one you are in."
        />

        <ol className="mt-16 grid gap-y-12 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 lg:gap-x-12">
          {PROCESS.map((step, i) => (
            <Reveal
              key={step.title}
              as="li"
              delay={(i % 3) * 0.08}
              className="group relative pt-8"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px bg-border"
              />
              <span
                aria-hidden
                className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-700 ease-standard group-hover:w-full"
              />

              <span className="numeric text-caption font-semibold tracking-eyebrow text-accent-text">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-h5 font-semibold">{step.title}</h3>
              <p className="mt-2.5 text-small text-muted">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
