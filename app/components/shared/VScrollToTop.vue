<template>
  <Transition
    enter-active-class="transition-ui duration-(--duration-standard) ease-standard"
    enter-from-class="opacity-0 translate-y-3"
    leave-active-class="transition-ui duration-(--duration-standard) ease-standard"
    leave-to-class="opacity-0 translate-y-3"
  >
    <LazyVButton
      v-if="isVisible"
      size="icon"
      class="fixed bottom-24 end-5 md:bottom-8 md:end-8 z-40 shadow-lg"
      :aria-label="t('ui.vScrollToTop.scrollToTop')"
      @click="scrollToTop"
    >
      <LazyVAppIcon name="lucide:arrow-up" class="w-4 h-4 arrow-nudge-y" />
    </LazyVButton>
  </Transition>
</template>

<script lang="ts" setup>
import type { Props } from "~/types/shared/VScrollToTop";

const { t } = useLocale();

const { y } = useWindowScroll();

const props = withDefaults(defineProps<Props>(), {
  threshold: 300,
});

// y is 0 on the server, so the button is never part of the SSR markup
const isVisible = computed(() => y.value > props.threshold);

function scrollToTop(): void {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
}
</script>