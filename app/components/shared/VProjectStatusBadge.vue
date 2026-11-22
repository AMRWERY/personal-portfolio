<template>
  <div
    class="inline-flex items-center gap-1.5 px-2.5 py-0.5 lg:px-3 lg:py-1 rounded-full bg-surface dark:bg-background border border-warning text-warning text-label-sm font-semibold"
  >
    <span
      class="w-1.5 h-1.5 rounded-full bg-warning shrink-0"
      aria-hidden="true"
    />
    <span>{{ label }}</span>
  </div>
</template>

<script lang="ts" setup>
import type { ProjectStatus } from "@/types/portfolio";
import type { Props } from "@/types/shared/VProjectStatusBadge";

const { t } = useLocale();

const props = defineProps<Props>();

// Status values are data ("In progress"); the visible label comes from the locale files
const STATUS_KEYS: Record<ProjectStatus, string> = {
  "In progress": "ui.vProjectStatusBadge.inProgress",
};

const label = computed(() => t(STATUS_KEYS[props.status]));
</script>