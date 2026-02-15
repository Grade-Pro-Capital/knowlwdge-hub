import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  className?: string;
  /** When false, renders without link. Default true */
  linkToHome?: boolean;
  /** Custom link href. Default "/" for main site, use "/admin" for dashboard */
  href?: string;
};

export function Logo({
  className = "",
  linkToHome = true,
  href = "/",
}: LogoProps) {
  const img = (
    <Image
      src="/favicon.png"
      alt="Grade Capital"
      width={48}
      height={48}
      className={`h-8 w-auto object-contain sm:h-9 ${className}`}
      priority
    />
  );

  if (linkToHome) {
    return (
      <Link href={href} className="flex items-center">
        {img}
      </Link>
    );
  }
  return img;
}
