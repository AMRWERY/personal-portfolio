import { type Ref } from "vue";

export function useRevealOnce(target: Ref<HTMLElement | null>) {
  const isVisible = ref(false);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      isVisible.value = true;
      return;
    }

    if (!target.value) return;

    observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          isVisible.value = true;
          observer?.disconnect();
          observer = null;
        }
      },
      { threshold: 0.12 },
    );

    observer.observe(target.value);
  });

  onBeforeUnmount(() => {
    observer?.disconnect();
  });

  return { isVisible };
}
