import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/sections/cta-banner";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { ARTICLES, getArticle } from "@/lib/articles";
import { UI_ICONS } from "@/lib/icons";
import { SITE } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.image }],
    },
  };
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: `${SITE.url}${article.image}`,
    articleSection: article.category,
    publisher: {
      "@type": "Organization",
      name: SITE.legalName,
      "@id": `${SITE.url}/#organization`,
    },
  };

  return (
    <>
      <article>
        <header className="surface-blue relative isolate overflow-hidden pt-36 pb-16 sm:pt-44 sm:pb-20">
          <Image
            src={article.image}
            alt=""
            aria-hidden
            fill
            priority
            sizes="100vw"
            className="-z-20 object-cover opacity-20"
          />
          <span
            aria-hidden
            className="absolute inset-0 -z-10 bg-linear-to-br from-royal-950 via-royal-900/95 to-royal-800/80"
          />

          <div className="container-page">
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-2 text-caption text-royal-200">
                <li>
                  <Link
                    href="/"
                    className="transition-colors duration-200 hover:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden className="flex items-center">
                  <Icon icon={UI_ICONS.arrow} size="sm" />
                </li>
                <li>
                  <Link
                    href="/insights"
                    className="transition-colors duration-200 hover:text-white"
                  >
                    Insights
                  </Link>
                </li>
                <li aria-hidden className="flex items-center">
                  <Icon icon={UI_ICONS.arrow} size="sm" />
                </li>
                <li aria-current="page" className="text-accent">
                  {article.category}
                </li>
              </ol>
            </nav>

            <h1 className="measure mt-8 text-h1 text-white">{article.title}</h1>

            <p className="mt-6 flex items-center gap-3 text-caption font-semibold uppercase tracking-eyebrow text-accent">
              {article.category}
              <span aria-hidden className="h-px w-6 bg-border-strong" />
              <span className="numeric text-royal-200">
                {article.readingMinutes} min read
              </span>
            </p>
          </div>
        </header>

        <div className="section bg-surface">
          <div className="container-page">
            <div className="measure">
              <p className="text-body-lg font-medium text-heading">
                {article.excerpt}
              </p>

              {article.body.map((block, i) => (
                <Reveal key={block.heading ?? i} className="mt-10">
                  {block.heading ? (
                    <h2 className="text-h4">{block.heading}</h2>
                  ) : null}
                  {block.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 40)}
                      className="mt-5 text-body text-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                </Reveal>
              ))}

              <aside className="mt-16 rounded-card border border-border bg-surface-alt p-8">
                <p className="eyebrow">Next step</p>
                <p className="mt-4 text-body text-muted">
                  If you are weighing a specific property or a first investment,
                  a consultation will tell you more than another article will.
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-small font-semibold text-primary transition-colors duration-200 hover:text-accent-text"
                >
                  Schedule a Consultation
                  <Icon icon={UI_ICONS.arrowDiagonal} size="sm" />
                </Link>
              </aside>
            </div>
          </div>
        </div>
      </article>

      <section
        aria-labelledby="related-heading"
        className="section bg-surface-sunken"
      >
        <div className="container-page">
          <h2 id="related-heading" className="text-h3">
            Related reading
          </h2>

          <ul className="mt-12 grid gap-10 md:grid-cols-3">
            {related.map((item, i) => (
              <Reveal as="li" key={item.slug} delay={(i % 3) * 0.08}>
                <article className="group">
                  <Link href={`/insights/${item.slug}`} className="flex flex-col">
                    <div className="zoom-media relative aspect-3/2 overflow-hidden rounded-image">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-standard group-hover:scale-105"
                      />
                    </div>
                    <p className="mt-5 text-caption font-semibold uppercase tracking-eyebrow text-accent-text">
                      {item.category}
                    </p>
                    <h3 className="mt-3 text-h5 font-semibold transition-colors duration-300 group-hover:text-primary">
                      {item.title}
                    </h3>
                  </Link>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
