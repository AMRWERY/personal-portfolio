interface ViewTransitionOptions {
  /**
   * "theme":  circular reveal growing from `origin` (the toggle button).
   * omitted: plain 200ms crossfade.
   */
  kind?: "theme";
  /** Theme: where the circle starts (viewport px). */
  origin?: { x: number; y: number };
  /** Theme: circle duration in ms. */
  duration?: number;
}

/**
 * Run a DOM/state update inside a View Transition so the change animates
 * instead of snapping. Falls back to running `update` directly when the API
 * is missing or the user prefers reduced motion.
 */
export async function withViewTransition(
  update: () => void | Promise<void>,
  { kind, origin, duration = 520 }: ViewTransitionOptions = {},
): Promise<void> {
  const supported =
    typeof document !== "undefined" && "startViewTransition" in document;
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!supported || reduced) {
    await update();
    return;
  }

  const root = document.documentElement;
  if (kind) root.dataset.vt = kind;

  const transition = document.startViewTransition(async () => {
    await update();
    await nextTick();
  });

  try {
    if (kind === "theme" && origin) {
      await transition.ready;
      const radius = Math.hypot(
        Math.max(origin.x, window.innerWidth - origin.x),
        Math.max(origin.y, window.innerHeight - origin.y),
      );
      root.animate(
        {
          clipPath: [
            `circle(0px at ${origin.x}px ${origin.y}px)`,
            `circle(${radius}px at ${origin.x}px ${origin.y}px)`,
          ],
        },
        {
          duration,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    }
    await transition.finished;
  } finally {
    delete root.dataset.vt;
  }
}
