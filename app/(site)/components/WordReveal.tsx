"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion } from "motion/react";

export type TextSegment = { text: string; color?: string };

const TAGS = { p: motion.p, h2: motion.h2, h3: motion.h3, h4: motion.h4, h5: motion.h5 } as const;

type Props = {
  as?: keyof typeof TAGS;
  segments: TextSegment[];
  className?: string;
  style?: CSSProperties;
};

const WORD_VARIANTS = {
  hidden: { opacity: 0.001, y: 20 },
  shown: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 80, mass: 1 } },
} as const;

/**
 * Framer's word "appear" text effect: when the text scrolls into view, each word
 * rises 20px and fades in, 0.1s apart, on spring { stiffness 400, damping 80 }.
 * Plays once.
 *
 * Text is split the way Framer splits it: every piece between single spaces is its
 * own inline-block span (empty ones too, e.g. from a double or trailing space),
 * joined by plain spaces; "\n" is a line break.
 */
export function WordReveal({ as = "p", segments, className, style }: Props) {
  const Tag = TAGS[as];
  const nodes: ReactNode[] = [];
  segments.forEach((seg, s) =>
    seg.text.split("\n").forEach((line, l) => {
      if (l > 0) nodes.push(<br key={`${s}-br${l}`} />);
      line.split(" ").forEach((word, w) => {
        if (w > 0) nodes.push(" ");
        nodes.push(
          <motion.span
            key={`${s}-${l}-${w}`}
            // Framer leaves will-change on each word; it layers them, which changes
            // Chrome's text antialiasing (greyscale instead of subpixel).
            style={{ display: "inline-block", color: seg.color, willChange: "transform" }}
            variants={WORD_VARIANTS}
          >
            {word}
          </motion.span>,
        );
      });
    }),
  );
  return (
    <Tag
      className={className}
      style={style}
      initial="hidden"
      whileInView="shown"
      viewport={{ once: true, amount: 0 }}
      transition={{ staggerChildren: 0.1 }}
    >
      {nodes}
    </Tag>
  );
}
