<template>
  <section
    ref="sectionRef"
    class="max-w-(--container-max) mx-auto px-5 lg:px-12 py-14 md:py-20 lg:py-28 transition-ui duration-(--duration-enter) ease-enter"
    :class="revealClass"
  >
    <div
      class="reveal-head flex flex-row items-end justify-between gap-4 mb-6 md:mb-12"
    >
      <div>
        <LazyVEyebrowLabel class="hidden md:inline-flex mb-2">
          {{ t("ui.featuredWorkSection.portfolioHighlights") }}
        </LazyVEyebrowLabel>
        <h2
          class="section-heading"
        >
          {{ t("ui.featuredWorkSection.featuredWork") }}
        </h2>
      </div>

      <LazyVButton to="/work" variant="ghost">
        <span class="md:hidden">{{ t("ui.featuredWorkSection.all15") }}</span>
        <span class="hidden md:inline">{{
          t("ui.featuredWorkSection.viewAll15Projects")
        }}</span>
        <LazyVAppIcon
          name="lucide:arrow-right"
          class="icon-arrow"
        />
      </LazyVButton>
    </div>

    <div
      class="reveal-stagger grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8 max-w-2xl mx-auto lg:max-w-none"
    >
      <featured-project-card
        v-for="project in FEATURED_PROJECTS"
        :key="project.slug"
        :project="project"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { FEATURED_PROJECTS } from "~/data/home";

const { t } = useLocale();

const sectionRef = ref<HTMLElement | null>(null);

const { revealClass } = useRevealOnce(sectionRef);
</script>