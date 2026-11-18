<template>
  <span
    class="inline-flex items-center rounded-full bg-surface-elevated border border-border text-text-secondary font-medium"
    :class="
      size === 'md'
        ? 'px-3.5 py-1 text-label-md'
        : 'px-2.5 py-0.5 text-label-sm'
    "
  >
    {{ label }}
  </span>
</template>

<script lang="ts" setup>
import type { Props } from "~/types/shared/VTechBadge";

withDefaults(defineProps<Props>(), {
  size: "sm",
});
</script>