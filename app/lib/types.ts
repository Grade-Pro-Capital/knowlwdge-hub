/**
 * Shared types for SEO/GEO article data.
 */
export type Citation = { name: string; url: string };

export type ExpertiseSignals = {
  credentials?: string;
  methodology?: string;
  researchNotes?: string;
};

export type FaqItem = { question: string; answer: string };
