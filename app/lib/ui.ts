/**
 * Shared gold CTA styling — mirrors the investor app's primary AppButton
 * (vertical gold gradient #FDDC97→#FEBE2F, gold border, black semibold label,
 * 10px radius, soft directional shadow, subtle brightness hover — no glow).
 * Add per-usage size/padding utilities (e.g. `${goldButtonClass} h-9 px-4`).
 */
export const goldButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-[0.625rem] border border-[#FEBE2F] bg-[linear-gradient(180deg,#FDDC97_0%,#FEBE2F_100%)] font-semibold text-black shadow-[0_4px_16px_rgba(254,190,47,0.3)] transition-[filter] duration-150 hover:brightness-[0.97] active:brightness-95 disabled:cursor-not-allowed disabled:opacity-60";
