import Link from "next/link";
import { ImageWithFallback } from "./ImageWithFallback";
import { resolvePostImage } from "@/app/lib/images";

export type RelatedArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  image?: string | null;
};

type RelatedArticlesProps = {
  articles: RelatedArticle[];
  title?: string;
};

export function RelatedArticles({
  articles,
  title = "Related Insights",
}: RelatedArticlesProps) {
  if (!articles?.length) return null;

  return (
    <section aria-label="Related articles">
      <h2 className="mb-8 text-2xl font-semibold sm:text-3xl">{title}</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {articles.map((article) => {
          const imgSrc = resolvePostImage(article.image);
          return (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group overflow-hidden rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.06)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition-all hover:border-[rgba(212,175,55,0.3)] hover:bg-[rgba(255,255,255,0.09)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <ImageWithFallback
                  src={imgSrc}
                  alt={article.title}
                  className="h-full w-full object-cover object-[center_35%] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-3.5 sm:p-4">
                <span className="mb-2 inline-block rounded-full bg-[rgba(253,190,53,0.2)] px-2.5 py-0.5 text-[10.5px] text-[#FDBE35]">
                  {article.category}
                </span>
                <h3 className="mb-1.5 line-clamp-2 text-[14px] leading-[1.35] transition-colors group-hover:text-[#FDBE35] lg:text-[15px]">
                  {article.title}
                </h3>
                <p className="mb-2.5 line-clamp-2 text-[12px] leading-[1.4] text-[rgba(255,255,255,0.7)]">
                  {article.excerpt}
                </p>
                <span className="text-[10.5px] text-[rgba(255,255,255,0.6)]">
                  {article.readTime}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
