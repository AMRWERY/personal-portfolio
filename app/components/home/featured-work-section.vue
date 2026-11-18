<template>
  <section
    ref="sectionRef"
    class="max-w-(--container-max) mx-auto px-5 lg:px-12 py-14 md:py-20 lg:py-28 transition-all duration-(--duration-enter) ease-enter"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'"
  >
    <div class="flex flex-row items-end justify-between gap-4 mb-6 md:mb-12">
      <div>
        <LazyVEyebrowLabel class="hidden md:inline-flex mb-2">
          {{ locale === "en" ? "PORTFOLIO HIGHLIGHTS" : "أبرز الأعمال" }}
        </LazyVEyebrowLabel>
        <h2
          class="font-headline text-headline-sm md:text-headline-lg lg:text-headline-xl font-bold text-text-primary tracking-tight"
        >
          {{ locale === "en" ? "Featured work" : "أعمال مختارة" }}
        </h2>
      </div>

      <a
        href="/work"
        class="inline-flex items-center gap-1.5 text-body-sm font-semibold text-accent-ink hover:underline group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
      >
        <span class="md:hidden">{{
          locale === "en" ? "All 15" : "كل الأعمال (15)"
        }}</span>
        <span class="hidden md:inline">{{
          locale === "en" ? "View all 15 projects" : "عرض جميع المشاريع (15)"
        }}</span>
        <LazyVAppIcon
          name="lucide:arrow-right"
          class="w-4 h-4 transition-transform duration-(--duration-fast) group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1"
        />
      </a>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
      <featured-project-card
        v-for="project in FEATURED_PROJECTS"
        :key="project.slug"
        :project="project"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { FEATURED_PROJECTS } from "@/data/home";

const { locale } = useLocale();

const sectionRef = ref<HTMLElement | null>(null);

const { isVisible } = useRevealOnce(sectionRef);
</script>