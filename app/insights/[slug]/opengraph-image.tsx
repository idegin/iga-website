import { OG_CONTENT_TYPE, OG_SIZE, ogImage } from "@/components/og/og-card";
import { ARTICLES, getArticle } from "@/lib/articles";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "IGA Global Investments insight";

export function generateStaticParams() {
  return ARTICLES.map((article) => ({ slug: article.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  return ogImage({
    eyebrow: article?.category ?? "Insights",
    title: article?.title ?? "Insights",
    meta: article
      ? `${article.readingMinutes} min read · igaglobalinvestment.org`
      : undefined,
    image: article?.image ? article.image.replace(/^\//, "") : undefined,
  });
}
