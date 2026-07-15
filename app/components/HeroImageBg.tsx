/**
 * Decorative hero background: a full-bleed image with a vignette overlay so the
 * left-aligned hero copy stays readable over it. The image is served from
 * /public (drop the asset at public/hero-laptop.png). Pure CSS, no JS — renders
 * on the server. Absolutely positioned, so the parent must be `relative`.
 *
 * The vignette layers a left-to-right darkening (for text contrast) over a soft
 * radial edge-darken (so the image reads as a framed backdrop, not a hard photo).
 */
export function HeroImageBg() {
  return (
    <div className="hero-image-bg" aria-hidden="true">
      <div className="hero-image-bg__img" />
      <div className="hero-image-bg__vignette" />
    </div>
  );
}
