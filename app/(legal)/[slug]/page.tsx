import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icon } from "@/components/ui/icon";
import { Reveal } from "@/components/ui/reveal";
import { UI_ICONS } from "@/lib/icons";
import { LEGAL_DOCS, LEGAL_LAST_UPDATED, getLegalDoc } from "@/lib/legal";
import { breadcrumbSchema, JsonLd } from "@/lib/schema";
import { CONTACT, SITE } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return LEGAL_DOCS.map((doc) => ({ slug: doc.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  if (!doc) return {};

  return {
    title: doc.title,
    description: doc.description,
    alternates: { canonical: `/${doc.slug}` },
  };
}

export default async function LegalPage({ params }: Params) {
  const { slug } = await params;
  const doc = getLegalDoc(slug);
  if (!doc) notFound();

  const updated = new Date(LEGAL_LAST_UPDATED).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <header className="surface-blue pt-36 pb-16 sm:pt-44 sm:pb-20">
        <div className="container-page">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-caption text-royal-200">
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
              <li aria-current="page" className="text-accent">
                {doc.title}
              </li>
            </ol>
          </nav>

          <h1 className="mt-8 text-h1 text-white">{doc.title}</h1>
          <p className="mt-5 text-caption uppercase tracking-eyebrow text-accent">
            Last updated{" "}
            <time dateTime={LEGAL_LAST_UPDATED} className="numeric">
              {updated}
            </time>
          </p>
        </div>
      </header>

      <div className="section bg-surface">
        <div className="container-page">
          <div className="measure">
            <p className="text-body-lg font-medium text-heading">{doc.intro}</p>

            {doc.sections.map((section) => (
              <Reveal key={section.heading} className="mt-12">
                <h2 className="text-h4">{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="mt-5 text-body text-muted"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.list ? (
                  <ul className="mt-5 space-y-3">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Icon
                          icon={UI_ICONS.check}
                          size="md"
                          className="mt-1 shrink-0 text-accent-text"
                        />
                        <span className="text-body text-muted">{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </Reveal>
            ))}

            <aside className="mt-16 rounded-card border border-border bg-surface-alt p-8">
              <p className="eyebrow">Questions about this policy</p>
              <p className="mt-4 text-body text-muted">
                Write to us and a person will answer.
              </p>
              {CONTACT.email ? (
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="mt-5 inline-flex items-center gap-2 text-small font-semibold text-primary transition-colors duration-200 hover:text-accent-text"
                >
                  {CONTACT.email}
                  <Icon icon={UI_ICONS.arrowDiagonal} size="sm" />
                </a>
              ) : null}
              <p className="mt-6 text-caption text-muted">{SITE.legalName}</p>
            </aside>
          </div>
        </div>
      </div>

      <JsonLd
        schema={breadcrumbSchema([{ name: doc.title, path: `/${doc.slug}` }])}
      />
    </>
  );
}
