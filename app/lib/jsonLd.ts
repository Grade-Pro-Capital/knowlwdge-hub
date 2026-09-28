/**
 * JSON-LD structured data generators for SEO and AI crawlers.
 * All schemas follow schema.org types.
 */
import { absoluteUrl } from "./seo";
import { logoUrl, organizationId } from "./siteSchema";

export type AuthorInput = {
  name: string;
  url?: string;
};

export type ArticleJsonLdInput = {
  headline: string;
  description: string;
  image: string | null | undefined;
  datePublished: string;
  dateModified: string;
  author: AuthorInput;
  url: string;
};

export function articleJsonLd(input: ArticleJsonLdInput): object {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.headline,
    description: input.description,
    image: input.image ? [absoluteUrl(input.image)] : undefined,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    author: {
      "@type": "Person",
      name: input.author.name,
      url: input.author.url ? absoluteUrl(input.author.url) : undefined,
    },
    // The sitewide Organization (siteSchema.ts), referenced by @id.
    publisher: {
      "@type": "Organization",
      "@id": organizationId(),
      name: "Grade Capital",
      logo: {
        "@type": "ImageObject",
        url: logoUrl(),
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": input.url,
    },
  };
}

export type BreadcrumbItem = { name: string; url: string };

export function breadcrumbJsonLd(items: BreadcrumbItem[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export type FaqItem = { question: string; answer: string };

export function faqJsonLd(faqs: FaqItem[]): object | null {
  if (!faqs?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export type AuthorJsonLdInput = {
  name: string;
  url: string;
  bio?: string;
  image?: string;
};

export function authorJsonLd(input: AuthorJsonLdInput): object {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: input.name,
    url: absoluteUrl(input.url),
    description: input.bio,
    image: input.image ? absoluteUrl(input.image) : undefined,
  };
}
