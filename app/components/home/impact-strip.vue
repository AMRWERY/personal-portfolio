<template>
  <section
    ref="sectionRef"
    class="px-5 md:px-0 transition-all duration-(--duration-enter) ease-enter"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'"
  >
    <div
      class="border border-border md:border-x-0 rounded-xl md:rounded-none bg-surface md:bg-surface/80 dark:md:bg-surface/60"
    >
      <div
        class="max-w-(--container-max) mx-auto p-5 md:px-6 lg:px-12 md:py-10"
      >
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          <div
            v-for="metric in IMPACT_METRICS"
            :key="metric.value"
            class="space-y-0.5 md:space-y-1"
          >
            <div
              class="font-headline text-headline-md md:text-display-lg-mobile lg:text-headline-xl font-bold tracking-tight tabular-nums"
              :class="
                metric.highlight ? 'text-accent-ink' : 'text-text-primary'
              "
            >
              {{ metric.value }}
            </div>
            <div
              class="text-body-sm text-text-secondary font-medium leading-snug"
            >
              {{ t(metric.label) }}
            </div>
            <div class="hidden md:block text-label-sm text-text-muted">
              {{ t(metric.context) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { IMPACT_METRICS } from "@/data/home";

const { t } = useLocale();

const sectionRef = ref<HTMLElement | null>(null);

const { isVisible } = useRevealOnce(sectionRef);
</script>