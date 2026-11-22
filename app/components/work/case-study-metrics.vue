<template>
  <div class="space-y-4 md:space-y-6">
    <div class="md:border-b border-border md:pb-4">
      <span
        class="hidden md:block font-headline text-label-sm font-semibold text-accent-ink uppercase tracking-wider mb-1"
      >
        {{ t("ui.caseStudyMetrics.byTheNumbers") }}
      </span>
      <h2
        class="font-headline text-headline-sm md:text-headline-lg font-bold text-text-primary"
      >
        <span class="md:hidden">{{ t("ui.caseStudyMetrics.keyMetrics") }}</span>
        <span class="hidden md:inline">{{
          t("ui.caseStudyMetrics.highlights")
        }}</span>
      </h2>
    </div>

    <div class="grid grid-cols-2 gap-3 md:gap-4">
      <div
        v-for="(item, index) in metrics"
        :key="item.label"
        class="p-3 md:p-5 rounded-lg md:rounded-xl border border-border bg-surface-elevated md:bg-surface"
      >
        <div
          class="font-headline text-headline-md md:text-headline-xl font-bold tabular-nums"
          :class="index === 0 ? 'text-accent-ink' : 'text-text-primary'"
        >
          {{ item.value }}
        </div>
        <div
          class="text-label-sm md:text-label-md font-semibold text-text-primary mt-0.5 md:mt-1"
        >
          {{ t(item.label) }}
        </div>
        <div v-if="item.hint" class="text-label-sm text-text-secondary">
          {{ t(item.hint) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { CaseStudyMetric } from "~/types/portfolio";

const { t } = useLocale();

defineProps<{ metrics: CaseStudyMetric[] }>();
</script>