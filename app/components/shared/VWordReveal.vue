<template>
  <component :is="tag" ref="root" :class="{ 'word-reveal-play': isVisible }">
    <!-- Words are split on spaces only, so Arabic letters stay joined -->
    <template v-for="(word, i) in words" :key="`${i}-${word}`">
      <span class="word-reveal" :style="{ '--i': i }">{{ word }}</span
      >{{ " " }}
    </template>
  </component>
</template>

<script lang="ts" setup>
import type { Props } from "~/types/shared/VWordReveal";

const props = withDefaults(defineProps<Props>(), {
  tag: "p",
  delay: 0,
  step: 45,
});

const root = ref<HTMLElement | null>(null);
const { isVisible } = useRevealOnce(root);

const words = computed(() => props.text.split(/\s+/).filter(Boolean));
const delayMs = computed(() => `${props.delay}ms`);
const stepMs = computed(() => `${props.step}ms`);
</script>

<style scoped>
.word-reveal {
  display: inline-block;
  /* Paused + backwards fill keeps each word hidden until the text scrolls in */
  animation: wordRise var(--duration-enter) var(--ease-enter)
    calc(v-bind(delayMs) + var(--i) * v-bind(stepMs)) backwards paused;
}

.word-reveal-play .word-reveal {
  animation-play-state: running;
}

@keyframes wordRise {
  from {
    opacity: 0;
    transform: translateY(0.5em);
    filter: blur(4px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .word-reveal {
    animation: none;
  }
}
</style>