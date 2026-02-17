"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/app/lib/types";

type FaqAccordionProps = {
  items: FaqItem[];
  /** ID for the section heading so the FAQ region can be aria-labelledby. */
  headingId?: string;
};

/**
 * FAQ section: all items start collapsed. Users expand by clicking.
 */
export function FaqAccordion({ items, headingId = "faq-heading" }: FaqAccordionProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(() => new Set());

  const toggle = (i: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section
      className="rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] p-6 sm:p-8"
      aria-label="Frequently asked questions"
    >
      <h2 id={headingId} className="mb-6 flex items-center gap-2 text-xl font-semibold text-white sm:text-2xl">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FDBE35] text-[#020100]">
          ?
        </span>
        Frequently Asked Questions
      </h2>
      <dl className="space-y-1">
        {items.map((faq, i) => {
          const isOpen = openIndices.has(i);
          return (
            <div
              key={i}
              className="border-b border-[rgba(255,255,255,0.08)] last:border-0"
            >
              <dt>
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-3 py-4 text-left transition-colors hover:text-[#FDBE35] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FDBE35] focus-visible:ring-offset-2 focus-visible:ring-offset-[#020100]"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span className="text-base font-medium text-[#FDBE35]">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  >
                    <ChevronDown className="h-5 w-5 text-[rgba(255,255,255,0.6)]" />
                  </span>
                </button>
              </dt>
              <dd
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                className="overflow-hidden transition-[grid-template-rows] duration-200 ease-out"
                style={{
                  display: "grid",
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                }}
              >
                <div className="min-h-0">
                  <div className="pb-4 pr-8 text-[rgba(255,255,255,0.85)] leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
