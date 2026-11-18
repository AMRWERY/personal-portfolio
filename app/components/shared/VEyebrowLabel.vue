<template>
  <div class="inline-flex items-center gap-2">
    <span
      v-if="withDot"
      class="w-2 h-2 rounded-full bg-accent shrink-0"
      aria-hidden="true"
    />
    <span
      class="font-headline text-label-sm font-semibold tracking-wider text-accent-ink uppercase"
    >
      <slot />
    </span>
  </div>
</template>

<script lang="ts" setup>
import type { Props } from "~/types/shared/VEyebrowLabel";

withDefaults(defineProps<Props>(), {
  withDot: false,
});
</script>