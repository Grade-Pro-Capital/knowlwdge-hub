/**
 * Decorative hero background: slow-drifting aurora blobs in the brand gold/cyan
 * palette. Pure CSS (no JS, no pointer tracking) so it renders on the server and
 * stays cheap. Absolutely positioned — the parent must be `relative`. Purely
 * visual, so it is `aria-hidden` and its motion stops under reduced-motion.
 */
export function HeroAurora() {
  return (
    <div className="hero-aurora" aria-hidden="true">
      <span className="hero-aurora__blob hero-aurora__blob--1" />
      <span className="hero-aurora__blob hero-aurora__blob--2" />
      <span className="hero-aurora__blob hero-aurora__blob--3" />
      <span className="hero-aurora__blob hero-aurora__blob--4" />
      <div className="hero-aurora__grain" />
    </div>
  );
}
