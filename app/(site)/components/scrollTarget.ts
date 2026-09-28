/**
 * Framer's scroll-target range (its runtime's `targets` and "onScrollTarget"):
 * starts at the target's document offsetTop − 1 − `offset` − `threshold` × viewport
 * height and runs over the target's height, both ends floored at 0.
 */
export function scrollTargetRange(el: HTMLElement, { offset = 0, threshold = 1 } = {}) {
  let top = 0;
  for (let n: HTMLElement | null = el; n && n !== document.documentElement; n = n.offsetParent as HTMLElement | null) {
    top += n.offsetTop;
  }
  const start = top - 1 - offset - threshold * document.documentElement.clientHeight;
  return { from: Math.max(start, 0), to: Math.max(start + el.clientHeight, 0) };
}

/** Framer "onScrollTarget" progress: 0 → 1 as scrollY crosses the target's range. */
export function scrollTargetProgress(el: HTMLElement, options?: { offset?: number; threshold?: number }) {
  const { from, to } = scrollTargetRange(el, options);
  if (to <= from) return window.scrollY >= to ? 1 : 0;
  return Math.min(Math.max((window.scrollY - from) / (to - from), 0), 1);
}
