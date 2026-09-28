import { FramerImage } from "./FramerImage";

/** Framer's `sizes` for the Grade Capital logo (shared by header and footer). */
const LOGO_SIZES =
  "(min-width: 1200px) max(calc(min(100vw / 1.205, 1200px) * 0.1548), 125px), (min-width: 810px) and (max-width: 1199.98px) max(187px, 99px), (max-width: 809.98px) max(181px, 99px)";

/**
 * The Grade Capital logo image; size it with the wrapper. `sizes` overrides Framer's
 * usual value where a page renders it differently (it changes how Chrome samples the file).
 */
export function LogoImage({ sizes = LOGO_SIZES }: { sizes?: string }) {
  return (
    <FramerImage
      file="MrzZ5h6uhrEkJHMTQ4BPaI7ep8.png"
      width={3144}
      height={1140}
      variants={[512, 1024, 2048]}
      sizes={sizes}
      alt="Grade Capital logo"
      fit="fill"
    />
  );
}
