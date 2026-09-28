import type { CSSProperties } from "react";

type Props = {
  /** File name in public/site/icons (without .svg), extracted from Framer. */
  name: string;
  color: string;
  className?: string;
  style?: CSSProperties;
};

/** Framer icon component: a colour fill shaped by an SVG mask. Size it with className/style. */
export function MaskIcon({ name, color, className, style }: Props) {
  const url = `url("/site/icons/${name}.svg")`;
  return (
    <div
      className={className}
      style={{
        aspectRatio: "1",
        backgroundColor: color,
        maskImage: url,
        WebkitMaskImage: url,
        maskPosition: "center",
        WebkitMaskPosition: "center",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        ...style,
      }}
    />
  );
}
