<template>
  <article
    class="group rounded-xl lg:rounded-2xl border border-border bg-surface overflow-hidden flex flex-col justify-between transition-all duration-(--duration-standard) ease-standard hover:border-accent hover:-translate-y-1 hover:shadow-xl"
  >
    <!-- 16:10 Media Stage -->
    <div
      class="relative w-full aspect-16/10 bg-surface-elevated border-b border-border overflow-hidden flex flex-col items-center justify-center p-4 lg:p-6 text-center"
    >
      <img
        v-if="project.screenshotSrc"
        :src="project.screenshotSrc"
        :alt="project.screenshotAlt ? t(project.screenshotAlt) : project.title"
        class="w-full h-full object-cover transition-transform duration-(--duration-standard) group-hover:scale-[1.02]"
      />
      <template v-else>
        <LazyVAppIcon
          name="lucide:image"
          class="w-8 h-8 lg:w-10 lg:h-10 text-text-secondary mb-1.5 lg:mb-2 group-hover:text-accent-ink transition-colors duration-(--duration-fast)"
        />
        <span
          class="text-body-sm lg:text-label-md font-semibold text-text-primary"
        >
          {{ project.mediaLabel }}
        </span>
      </template>

      <div
        v-if="project.status"
        class="absolute top-3 lg:top-4 start-3 lg:start-4"
      >
        <LazyVProjectStatusBadge :status="project.status" />
      </div>

      <div
        class="absolute top-3 lg:top-4 end-3 lg:end-4 inline-flex items-center px-2.5 py-0.5 lg:px-3 lg:py-1 rounded-full bg-surface dark:bg-background border border-border text-text-primary text-label-sm font-medium"
      >
        {{ t(project.categoryBadge) }}
      </div>
    </div>

    <!-- Content Body -->
    <div class="p-5 md:p-6 lg:p-8 flex flex-col flex-1 justify-between">
      <div>
        <div class="flex items-start justify-between gap-4 mb-2">
          <h3
            class="font-headline text-title-lg lg:text-headline-sm font-bold text-text-primary group-hover:text-accent-ink transition-colors duration-(--duration-fast) text-balance"
          >
            {{ project.title }}
          </h3>
          <LazyVAppIcon
            name="lucide:arrow-up-right"
            class="hidden md:block w-5 h-5 text-text-secondary group-hover:text-accent-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:group-hover:-translate-x-0.5 transition-all duration-(--duration-fast)"
          />
        </div>

        <div
          class="hidden md:block text-label-sm font-semibold text-accent-ink uppercase tracking-wider mb-3"
        >
          {{ t(project.role) }}
        </div>

        <p
          class="text-body-sm text-text-secondary leading-relaxed mb-5 lg:mb-6"
        >
          {{ t(project.summary) }}
        </p>
      </div>

      <div
        class="pt-3 lg:pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3"
      >
        <div class="flex flex-wrap gap-1.5 lg:gap-2">
          <LazyVTechBadge
            v-for="tech in project.stack.slice(0, 4)"
            :key="tech"
            :label="tech"
          />
        </div>
        <LazyVButton
          :to="`/work/${project.slug}`"
          variant="ghost"
          class="shrink-0"
        >
          {{ locale === "en" ? "View case study" : "عرض دراسة الحالة" }}
        </LazyVButton>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import type { FeaturedProject } from "@/types/portfolio";
import type { FeaturedProjectCardProps } from "@/types/home";

const { locale, t } = useLocale();

defineProps<FeaturedProjectCardProps>();
</script>