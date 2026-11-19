<template>
  <div class="space-y-4 md:space-y-6">
    <div class="md:border-b border-border md:pb-4">
      <span
        class="hidden md:block font-headline text-label-sm font-semibold text-accent-ink uppercase tracking-wider mb-1"
      >
        {{
          t('ui.caseStudyContributions.engineeringResponsibilities')
        }}
      </span>
      <h2
        class="font-headline text-headline-sm md:text-headline-lg font-bold text-text-primary"
      >
        {{ t('ui.caseStudyContributions.myContribution') }}
      </h2>
    </div>

    <div class="space-y-3 md:space-y-4">
      <div
        v-for="item in contributions"
        :key="item.title"
        class="flex items-start gap-4 p-4 md:p-5 rounded-xl border border-border bg-surface"
      >
        <div
          class="hidden md:flex w-8 h-8 rounded-lg bg-accent-soft text-accent-ink items-center justify-center shrink-0 mt-0.5"
        >
          <LazyVAppIcon :name="item.icon" class="w-4 h-4" />
        </div>
        <div class="space-y-1.5 md:space-y-1">
          <h3
            class="font-headline text-title-lg font-bold text-text-primary text-balance"
          >
            {{ t(item.title) }}
          </h3>
          <VWordReveal class="text-body-sm text-text-secondary leading-relaxed" :text="t(item.text)" />
        </div>
      </div>
    </div>

    <div
      v-if="note"
      class="p-4 rounded-xl bg-surface-elevated border border-border text-label-sm text-text-secondary flex items-start gap-2.5"
    >
      <LazyVAppIcon
        name="lucide:alert-circle"
        class="w-4 h-4 text-warning shrink-0 mt-0.5"
      />
      <span>{{ t(note) }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { CaseStudyContribution, LocalizedText } from "@/types/portfolio";

const { t } = useLocale();

defineProps<{
  contributions: CaseStudyContribution[];
  note?: LocalizedText;
}>();
</script>
