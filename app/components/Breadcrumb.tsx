import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { breadcrumbJsonLd, type BreadcrumbItem } from "@/app/lib/jsonLd";

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  /** Optional: inject JSON-LD script for structured data */
  withJsonLd?: boolean;
};

export function Breadcrumb({ items, withJsonLd = true }: BreadcrumbProps) {
  const jsonLd = withJsonLd ? breadcrumbJsonLd(items) : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-[rgba(255,255,255,0.05)]"
      >
        <div className="mx-auto max-w-[1200px] px-4 py-4 sm:px-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-[rgba(255,255,255,0.6)]">
            {items.map((item, i) => {
              const isLast = i === items.length - 1;
              return (
                <li key={i} className="flex items-center gap-2">
                  {i > 0 && (
                    <ChevronRight
                      className="h-4 w-4 shrink-0"
                      aria-hidden
                    />
                  )}
                  {isLast ? (
                    <span
                      className="text-[rgba(255,255,255,0.9)]"
                      aria-current="page"
                    >
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      href={item.url}
                      className="transition-colors hover:text-white"
                    >
                      {item.name}
                    </Link>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </nav>
    </>
  );
}
