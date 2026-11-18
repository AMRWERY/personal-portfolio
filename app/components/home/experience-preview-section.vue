<template>
  <section
    ref="sectionRef"
    class="max-w-(--container-max) mx-auto px-5 lg:px-12 py-10 md:py-20 lg:py-24 transition-ui duration-(--duration-enter) ease-enter"
    :class="isVisible ? 'reveal-group-in' : 'reveal-group-out'"
  >
    <div
      class="border border-border bg-surface rounded-xl lg:rounded-2xl p-5 md:p-8 lg:p-12"
    >
      <div
        class="reveal-head flex flex-row items-center md:items-end justify-between gap-4 mb-5 md:mb-8 md:pb-6 md:border-b md:border-border"
      >
        <div>
          <LazyVEyebrowLabel class="hidden md:inline-flex mb-1">
            {{ locale === "en" ? "CAREER TIMELINE" : "المسيرة المهنية" }}
          </LazyVEyebrowLabel>
          <h2
            class="font-headline text-body-md md:text-headline-lg font-bold text-text-primary tracking-tight"
          >
            {{ locale === "en" ? "Experience preview" : "ملخص الخبرة" }}
          </h2>
        </div>

        <LazyVButton to="/about" variant="ghost">
          <span class="md:hidden">{{
            locale === "en" ? "Full bio" : "السيرة الكاملة"
          }}</span>
          <span class="hidden md:inline">{{
            locale === "en" ? "View full experience" : "عرض الخبرة الكاملة"
          }}</span>
          <LazyVAppIcon
            name="lucide:arrow-right"
            class="w-4 h-4 rtl:rotate-180 arrow-nudge-x"
          />
        </LazyVButton>
      </div>

      <div class="reveal-stagger grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        <div
          v-for="item in EXPERIENCE_PREVIEW"
          :key="item.company"
          class="space-y-1 md:space-y-2 pb-3 md:pb-0 border-b md:border-b-0 border-border/60 last:border-b-0 last:pb-0"
        >
          <span
            class="text-label-sm font-semibold uppercase"
            :class="item.isCurrent ? 'text-accent-ink' : 'text-text-secondary'"
          >
            {{ t(item.period) }}
          </span>
          <h3
            class="font-headline text-body-md md:text-title-lg font-bold text-text-primary"
          >
            {{ item.company }}
          </h3>
          <div
            class="hidden md:block text-body-sm text-text-secondary font-medium"
          >
            {{ t(item.role) }}
          </div>
          <p class="text-body-sm text-text-secondary md:mt-2">
            {{ t(item.projectsSummary) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { EXPERIENCE_PREVIEW } from "@/data/home";

const { locale, t } = useLocale();

const sectionRef = ref<HTMLElement | null>(null);

const { isVisible } = useRevealOnce(sectionRef);
</script>