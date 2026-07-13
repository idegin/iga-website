import type { Article } from "./articles";
import { SITE } from "./site";

const ORG_ID = `${SITE.url}/#organization`;

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { name: "Home", path: "/" },
      ...trail,
    ].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function faqSchema(faqs: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function articleSchema(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: `${SITE.url}/insights/${article.slug}`,
    headline: article.title,
    description: article.excerpt,
    image: `${SITE.url}/insights/${article.slug}/opengraph-image`,
    articleSection: article.category,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    wordCount: article.body.reduce(
      (total, block) =>
        total +
        block.paragraphs.reduce((n, p) => n + p.split(/\s+/).length, 0),
      0,
    ),
    inLanguage: "en-NG",
    author: { "@type": "Organization", name: SITE.legalName, "@id": ORG_ID },
    publisher: { "@type": "Organization", name: SITE.legalName, "@id": ORG_ID },
  };
}

export function serviceSchema(name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: "Real estate investment advisory",
    areaServed: { "@type": "Country", name: "Nigeria" },
    provider: { "@type": "Organization", name: SITE.legalName, "@id": ORG_ID },
  };
}

export function JsonLd({ schema }: { schema: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
