import Image from "next/image";
import { Thumbnail } from "./thumbnail";
import type { Article } from "@/lib/articles";
import { cn } from "@/lib/utils";

export function ArticleMedia({
  article,
  sizes,
  priority,
  className,
}: {
  article: Pick<Article, "slug" | "title" | "image" | "alt">;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  if (!article.image) {
    return (
      <div className={cn("absolute inset-0", className)}>
        <Thumbnail seed={article.slug} label={article.title} />
      </div>
    );
  }

  return (
    <Image
      src={article.image}
      alt={article.alt ?? ""}
      fill
      priority={priority}
      sizes={sizes}
      className={cn("object-cover", className)}
    />
  );
}
