<template>
  <section class="max-w-(--container-max) mx-auto px-5 lg:px-12 py-10 md:py-16">
    <div
      class="rounded-2xl lg:rounded-3xl border border-border bg-surface p-6 md:p-10 lg:p-14 text-center shadow-xl"
    >
      <div class="max-w-xl mx-auto space-y-4 md:space-y-5">
        <span
          class="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft text-accent-ink text-label-sm font-semibold uppercase tracking-wider"
        >
          {{ t(eyebrow) }}
        </span>
        <h2
          class="font-headline text-headline-sm md:text-headline-lg font-bold text-text-primary tracking-tight"
        >
          {{ t(title) }}
        </h2>
        <p class="text-body-sm md:text-body-md text-text-secondary font-light">
          {{ t(description) }}
        </p>
        <div
          class="pt-2 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-3 md:gap-4"
        >
          <LazyVButton to="/contact" class="w-full sm:w-auto">
            <span>{{ t(primaryLabel) }}</span>
            <LazyVAppIcon
              name="lucide:arrow-right"
              class="w-4 h-4 rtl:rotate-180 arrow-nudge-x"
            />
          </LazyVButton>
          <LazyVButton
            :href="`mailto:${PROFILE.email}`"
            variant="secondary"
            class="w-full sm:w-auto"
          >
            <LazyVAppIcon name="lucide:mail" class="w-4 h-4 text-accent-ink" />
            <span>{{ PROFILE.email }}</span>
          </LazyVButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { PROFILE } from "@/data/home";
import type { WorkCtaSectionProps } from "@/types/work";

const { t } = useLocale();

withDefaults(defineProps<WorkCtaSectionProps>(), {
  eyebrow: () => ({ en: "DIRECT COLLABORATION", ar: "تعاون مباشر" }),
  title: () => ({
    en: "Interested in working together?",
    ar: "مهتم بالعمل معاً؟",
  }),
  description: () => ({
    en: "I am available for frontend architecture, Nuxt.js/Vue.js web applications, and senior frontend roles.",
    ar: "متاح لأعمال معمارية الواجهات الأمامية وتطبيقات الويب باستخدام Nuxt.js وVue.js والأدوار الأمامية المتقدمة.",
  }),
  primaryLabel: () => ({ en: "Get in touch", ar: "تواصل معي" }),
});
</script>
