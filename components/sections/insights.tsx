import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ARTICLES } from "@/lib/articles";
import { UI_ICONS } from "@/lib/icons";

const INSIGHTS = ARTICLES.slice(0, 3).map((a) => ({
  title: a.title,
  category: a.category,
  href: `/insights/${a.slug}`,
  image: a.image,
  alt: a.alt,
}));

export function Insights() {
  return (
    <section aria-labelledby="insights-heading" className="section bg-surface">
      <div className="container-page">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            id="insights-heading"
            eyebrow="Insights"
            title="Understand the market before you enter it"
            lead="Plain explanations of how property investment in Nigeria actually works."
          />
          <Reveal delay={0.1} className="shrink-0">
            <ButtonLink
              href="/insights"
              variant="secondary"
              size="lg"
              icon={UI_ICONS.arrow}
            >
              Read More Articles
            </ButtonLink>
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-8 md:grid-cols-3">
          {INSIGHTS.map((post, i) => (
            <Reveal
              key={post.title}
              as="li"
              delay={(i % 3) * 0.08}
              className="h-full"
            >
              <article className="group h-full">
                <Link href={post.href} className="flex h-full flex-col">
                    <div className="zoom-media relative aspect-3/2 overflow-hidden rounded-image">
                      <Image
                        src={post.image}
                        alt={post.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-standard group-hover:scale-105"
                      />
                    </div>

                    <p className="mt-6 text-caption font-semibold uppercase tracking-eyebrow text-accent-text">
                      {post.category}
                    </p>
                    <h3 className="mt-3 text-h5 font-semibold transition-colors duration-300 group-hover:text-primary">
                      {post.title}
                    </h3>

                  <span className="mt-5 inline-flex items-center gap-2 text-small font-semibold text-primary">
                    Read article
                    <span className="sr-only">: {post.title}</span>
                    <Icon
                      icon={UI_ICONS.arrow}
                      size="sm"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
