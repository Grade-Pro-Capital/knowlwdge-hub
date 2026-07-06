import Image from "next/image";
import { User } from "lucide-react";
import { resolveAuthorAvatar } from "@/app/lib/images";

/**
 * Author profile picture. Renders the uploaded image when the author has one,
 * otherwise a neutral silhouette as the default pic. Used everywhere an author
 * byline appears (blog header, About-the-Author, /author/[slug]) so the avatar
 * looks consistent and old posts pick up a newly-uploaded pic automatically —
 * the source of truth is Author.avatar, looked up at render time.
 */
export function AuthorAvatar({
  src,
  name,
  size,
  className = "",
}: {
  src?: string | null;
  name: string;
  /** Rendered width/height in px (the circle is sized by the parent). */
  size: number;
  className?: string;
}) {
  const url = resolveAuthorAvatar(src);

  if (url) {
    return (
      <Image
        src={url}
        alt={name}
        width={size}
        height={size}
        className={`h-full w-full rounded-full object-cover ${className}`}
      />
    );
  }

  return (
    <User
      aria-label={name}
      className={`text-[#FDBE35] ${className}`}
      style={{ width: size * 0.55, height: size * 0.55 }}
    />
  );
}
