<template>
  <!-- inline-block: the box (and so the underline) is exactly as wide as the text -->
  <span
    class="relative inline-block font-headline text-headline-sm md:text-headline-md lg:text-headline-lg font-bold text-accent-ink pb-3 lg:pb-3.5"
  >
    <slot />
    <!-- Hand-drawn style wavy underline; revealed left-to-right on render -->
    <svg
      class="underline-draw absolute inset-x-0 bottom-0 w-full h-2.5 lg:h-3 rtl:-scale-x-100 overflow-visible"
      viewBox="0 0 200 12"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M1 7 C 17 1, 33 13, 50 7 S 83 1, 100 7 S 133 13, 150 7 S 183 1, 199 6"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        vector-effect="non-scaling-stroke"
      />
    </svg>
  </span>
</template>

<script lang="ts" setup>

</script>