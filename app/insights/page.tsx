import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/layout/page-hero";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { ArticleMedia } from "@/components/ui/article-media";
import { ARTICLES } from "@/lib/articles";
import { UI_ICONS } from "@/lib/icons";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Plain explanations of how property investment in Nigeria works: how to start, how to verify a title, why real estate holds value, and the mistakes to avoid.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  const [featured, ...rest] = ARTICLES;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Understand the market before you enter it"
        lead="No hype and no jargon. Straight explanations of how property investment in Nigeria actually works, written for people about to commit real money."
        image="/images/nigeria.webp"
      />

      <section aria-labelledby="featured-heading" className="section bg-surface">
        <div className="container-page">
          <Reveal>
            <h2 id="featured-heading" className="sr-only">
              Featured article
            </h2>
            <article className="group">
              <Link
                href={`/insights/${featured.slug}`}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
              >
                <div className="zoom-media relative aspect-3/2 overflow-hidden rounded-image">
                  <ArticleMedia
                    article={featured}
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="transition-transform duration-700 ease-standard group-hover:scale-105"
                  />
                </div>

                <div>
                  <p className="flex items-center gap-3 text-caption font-semibold uppercase tracking-eyebrow text-accent-text">
                    {featured.category}
                    <span aria-hidden className="h-px w-6 bg-border-strong" />
                    <span className="numeric text-muted">
                      {featured.readingMinutes} min read
                    </span>
                  </p>
                  <h3 className="mt-5 text-h3 transition-colors duration-300 group-hover:text-primary">
                    {featured.title}
                  </h3>
                  <p className="mt-5 text-body-lg text-muted">
                    {featured.excerpt}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 text-small font-semibold text-primary">
                    Read article
                    <span className="sr-only">: {featured.title}</span>
                    <Icon
                      icon={UI_ICONS.arrow}
                      size="sm"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            </article>
          </Reveal>
        </div>
      </section>

      <section
        aria-labelledby="all-articles-heading"
        className="section bg-surface-sunken pt-0 lg:pt-0"
      >
        <div className="container-page pt-20 lg:pt-24">
          <Reveal>
            <h2 id="all-articles-heading" className="text-h3">
              More articles
            </h2>
          </Reveal>

          <ul className="mt-12 grid gap-10 md:grid-cols-3">
            {rest.map((article, i) => (
              <Reveal
                as="li"
                key={article.slug}
                delay={(i % 3) * 0.08}
                className="h-full"
              >
                <article className="group h-full">
                  <Link
                    href={`/insights/${article.slug}`}
                    className="flex h-full flex-col"
                  >
                    <div className="zoom-media relative aspect-3/2 overflow-hidden rounded-image">
                      <ArticleMedia
                        article={article}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="transition-transform duration-700 ease-standard group-hover:scale-105"
                      />
                    </div>

                    <p className="mt-6 flex items-center gap-3 text-caption font-semibold uppercase tracking-eyebrow text-accent-text">
                      {article.category}
                      <span aria-hidden className="h-px w-5 bg-border-strong" />
                      <span className="numeric text-muted">
                        {article.readingMinutes} min
                      </span>
                    </p>
                    <h3 className="mt-3 text-h5 font-semibold transition-colors duration-300 group-hover:text-primary">
                      {article.title}
                    </h3>
                    <p className="mt-3 flex-1 text-small text-muted">
                      {article.excerpt}
                    </p>

                    <span className="mt-6 inline-flex items-center gap-2 text-small font-semibold text-primary">
                      Read article
                      <span className="sr-only">: {article.title}</span>
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

      <CtaBanner />

      <JsonLd schema={breadcrumbSchema([{ name: "Insights", path: "/insights" }])} />
    </>
  );
}
