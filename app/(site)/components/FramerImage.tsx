import type { CSSProperties } from "react";

type Props = {
  /** Framer image id + extension, e.g. "MrzZ5h6uhrEkJHMTQ4BPaI7ep8.png". */
  file: string;
  /** Intrinsic size of the original file. */
  width: number;
  height: number;
  /** Framer's scale-down variants available locally (public/site/images/<id>@<w>.<ext>). */
  variants?: number[];
  /** The exact `sizes` string Framer emits for this image, so the browser picks the same file. */
  sizes?: string;
  alt: string;
  /** CSS object-fit. Framer's names differ: "Fill" = cover, "Fit" = contain, "Stretch" = fill. */
  fit?: "fill" | "cover" | "contain";
  position?: string;
  loading?: "lazy" | "eager";
  className?: string;
  style?: CSSProperties;
};

/**
 * Framer "background image": the image fills the parent (which must be positioned)
 * behind its other children.
 */
export function FramerBackground(props: Props) {
  return (
    <div style={{ position: "absolute", borderRadius: "inherit", inset: 0 }}>
      <FramerImage {...props} />
    </div>
  );
}

/**
 * <img> rendered the way Framer renders images: same files, srcset and sizes, and
 * the same inline sizing (fills its wrapper, inherits the wrapper's radius).
 */
export function FramerImage({
  file,
  width,
  height,
  variants = [],
  sizes,
  alt,
  fit = "cover",
  position = "center",
  loading,
  className,
  style,
}: Props) {
  const dot = file.lastIndexOf(".");
  const id = file.slice(0, dot);
  const ext = file.slice(dot + 1);
  const src = `/site/images/${file}`;
  const srcSet = variants.length
    ? [...variants.map((w) => `/site/images/${id}@${w}.${ext} ${w}w`), `${src} ${width}w`].join(",")
    : undefined;

  return (
    // eslint-disable-next-line @next/next/no-img-element -- exact Framer srcset/sizes, pre-scaled files
    <img
      decoding="async"
      loading={loading}
      width={width}
      height={height}
      sizes={srcSet ? sizes : undefined}
      srcSet={srcSet}
      src={src}
      alt={alt}
      className={className}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        borderRadius: "inherit",
        objectPosition: position,
        objectFit: fit,
        ...style,
      }}
    />
  );
}
