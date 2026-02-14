import Link from "next/link";
import Image from "next/image";

type LogoProps = {
  className?: string;
  /** When false, renders without link (e.g. in footer). Default true */
  linkToHome?: boolean;
};

export function Logo({ className = "", linkToHome = true }: LogoProps) {
  const img = (
    <Image
      src="/logo.png"
      alt="Grade Capital"
      width={160}
      height={40}
      className={`h-8 w-auto object-contain sm:h-10 ${className}`}
      priority
    />
  );

  if (linkToHome) {
    return (
      <Link href="/" className="flex items-center">
        {img}
      </Link>
    );
  }
  return img;
}
