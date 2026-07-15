import type { CSSProperties } from "react";

/**
 * Decorative hero background: soft diagonal light beams in the brand gold/cyan
 * palette that slowly sweep and pulse. Pure CSS (no JS, no pointer tracking), so
 * it renders on the server and stays cheap. A faint film-grain overlay hides the
 * banding that large blurred gradients tend to show on dark backgrounds.
 *
 * Absolutely positioned — the parent must be `relative`. Purely visual, so it is
 * `aria-hidden` and its motion is disabled under `prefers-reduced-motion`.
 */

type Beam = {
  /** Horizontal position of the beam's centre line. */
  left: string;
  width: string;
  /** Gradient tint (already includes its own alpha). */
  color: string;
  /** Peak opacity the beam reaches mid-cycle. */
  opacity: number;
  duration: string;
  /** Negative delay so beams start out of phase instead of pulsing in unison. */
  delay: string;
};

const BEAMS: Beam[] = [
  { left: "4%",  width: "260px", color: "rgba(253, 190, 53, 0.9)",  opacity: 0.85, duration: "14s", delay: "0s" },
  { left: "23%", width: "170px", color: "rgba(253, 218, 147, 0.8)", opacity: 0.7,  duration: "18s", delay: "-5s" },
  { left: "45%", width: "300px", color: "rgba(53, 218, 255, 0.7)",  opacity: 0.7,  duration: "20s", delay: "-9s" },
  { left: "66%", width: "200px", color: "rgba(253, 190, 53, 0.85)", opacity: 0.8,  duration: "16s", delay: "-3s" },
  { left: "87%", width: "230px", color: "rgba(53, 218, 255, 0.6)",  opacity: 0.6,  duration: "22s", delay: "-12s" },
];

export function HeroBeams() {
  return (
    <div className="hero-beams" aria-hidden="true">
      {BEAMS.map((beam, i) => (
        <span
          key={i}
          className="hero-beams__beam"
          style={
            {
              left: beam.left,
              width: beam.width,
              "--beam-color": beam.color,
              "--beam-opacity": beam.opacity,
              animationDuration: beam.duration,
              animationDelay: beam.delay,
            } as CSSProperties
          }
        />
      ))}
      <div className="hero-beams__grain" />
    </div>
  );
}
