<template>
  <section class="max-w-(--container-max) mx-auto px-5 lg:px-12 py-6 md:py-10">
    <div
      class="md:border-y border-border md:py-8 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6"
    >
      <!-- Previous -->
      <nuxt-link-locale
        :to="localePath(`/work/${previous.slug}`)"
        class="group/btn p-4 md:p-6 rounded-xl border border-border bg-surface hover:border-accent hover:-translate-y-0.5 transition-all duration-(--duration-fast) flex items-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <div
          class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-surface-elevated border border-border text-text-secondary group-hover/btn:text-accent-ink group-hover/btn:border-accent flex items-center justify-center shrink-0 transition-colors"
        >
          <LazyVAppIcon
            name="lucide:arrow-left"
            class="w-4 h-4 md:w-5 md:h-5 rtl:rotate-180 arrow-nudge-x-back"
          />
        </div>
        <div class="min-w-0">
          <span
            class="text-label-sm font-semibold text-text-secondary uppercase tracking-wider block"
          >
            {{ locale === "en" ? "Previous Project" : "المشروع السابق" }}
          </span>
          <h3
            class="font-headline text-title-lg font-bold text-text-primary group-hover/btn:text-accent-ink transition-colors truncate"
          >
            {{ shortTitle(previous.title) }}
          </h3>
        </div>
      </nuxt-link-locale>

      <!-- Next -->
      <nuxt-link-locale
        :to="localePath(`/work/${next.slug}`)"
        class="group/btn p-4 md:p-6 rounded-xl border border-border bg-surface hover:border-accent hover:-translate-y-0.5 transition-all duration-(--duration-fast) flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        <div class="min-w-0 space-y-0.5">
          <span
            class="text-label-sm font-semibold text-text-secondary uppercase tracking-wider block"
          >
            {{ locale === "en" ? "Next Project" : "المشروع التالي" }}
          </span>
          <h3
            class="font-headline text-title-lg font-bold text-text-primary group-hover/btn:text-accent-ink transition-colors truncate"
          >
            {{ shortTitle(next.title) }}
          </h3>
        </div>
        <div
          class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-surface-elevated border border-border text-text-secondary group-hover/btn:text-accent-ink group-hover/btn:border-accent flex items-center justify-center shrink-0 transition-colors"
        >
          <LazyVAppIcon
            name="lucide:arrow-right"
            class="w-4 h-4 md:w-5 md:h-5 rtl:rotate-180 arrow-nudge-x"
          />
        </div>
      </nuxt-link-locale>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { CaseStudyPagerProps } from "@/types/work";

const { locale } = useLocale();
const localePath = useLocalePath();

defineProps<CaseStudyPagerProps>();

// "Gym Management Dashboard — ASAGTC" -> "Gym Management Dashboard"
const shortTitle = (title: string) => title.split(" — ")[0];
</script>
