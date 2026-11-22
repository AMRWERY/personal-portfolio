<template>
  <span class="inline-grid">
    <!-- Screen readers get the final value straight away, never the counting -->
    <span class="sr-only">{{ value }}</span>
    <!-- Invisible copy of the final value reserves its width: no layout shift while counting -->
    <span class="invisible col-start-1 row-start-1" aria-hidden="true">{{
      value
    }}</span>
    <span class="col-start-1 row-start-1" aria-hidden="true">{{ shown }}</span>
  </span>
</template>

<script lang="ts" setup>
import type { Props } from "~/types/shared/VCountUp";

const props = withDefaults(defineProps<Props>(), {
  start: true,
  duration: 1400,
  delay: 0,
});

// "100+" -> prefix "", number 100, suffix "+"; anything else is shown as-is
const parts = computed(() => {
  const m = props.value.match(/^(\D*)(\d+(?:\.\d+)?)(\D*)$/);
  return m
    ? {
        prefix: m[1],
        num: Number(m[2]),
        decimals: (m[2].split(".")[1] ?? "").length,
        suffix: m[3],
      }
    : null;
});

// 0..1 progress. Starts at 1 so server render, no-JS and reduced motion all show the final value.
const progress = ref(1);

const shown = computed(() => {
  const p = parts.value;
  if (!p) return props.value;
  const current = (p.num * progress.value).toFixed(p.decimals);
  return `${p.prefix}${current}${p.suffix}`;
});

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

let frame = 0;
let started = false;

const run = (): void => {
  started = true;
  const t0 = performance.now() + props.delay;
  const tick = (now: number) => {
    const t = Math.min(Math.max((now - t0) / props.duration, 0), 1);
    progress.value = easeOutCubic(t);
    if (t < 1) frame = requestAnimationFrame(tick);
  };
  frame = requestAnimationFrame(tick);
};

onMounted(() => {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced || !parts.value) return; // stay on the final value

  progress.value = 0; // safe: the section is still hidden until it is revealed
  if (props.start) run();
});

watch(
  () => props.start,
  (start) => {
    if (start && !started && progress.value === 0) run();
  },
);

onBeforeUnmount(() => cancelAnimationFrame(frame));
</script>