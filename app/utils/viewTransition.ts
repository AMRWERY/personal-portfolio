/**
 * Run a DOM/state update inside a View Transition so it crossfades (see the
 * ::view-transition rules in main.css: one 200ms fade of the whole page).
 *
 * Used for the theme and language switches. Falls back to running `update`
 * directly when the API is missing or the user prefers reduced motion.
 */
export async function withViewTransition(
  update: () => void | Promise<void>,
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

  const transition = document.startViewTransition(async () => {
    await update();
    await nextTick();
  });

  await transition.finished;
}
