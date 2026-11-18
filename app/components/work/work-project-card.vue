<template>
  <article
    class="group rounded-xl lg:rounded-2xl border border-border bg-surface overflow-hidden flex flex-col transition-all duration-(--duration-standard) ease-standard hover:border-accent hover:-translate-y-1 hover:shadow-xl"
    :class="project.featured ? 'md:col-span-2 lg:flex-row' : 'justify-between'"
  >
    <!-- Media stage -->
    <div
      class="relative w-full bg-surface-elevated border-b border-border overflow-hidden flex flex-col items-center justify-center p-4 lg:p-6 text-center"
      :class="
        project.featured
          ? 'aspect-16/10 lg:aspect-auto lg:w-7/12 lg:border-b-0 lg:border-e lg:min-h-[300px] lg:p-8'
          : 'aspect-16/10'
      "
    >
      <img
        v-if="project.screenshotSrc"
        :src="project.screenshotSrc"
        :alt="project.title"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <template v-else>
        <LazyVAppIcon
          name="lucide:image"
          class="text-text-secondary mb-1.5 group-hover:text-accent-ink transition-colors duration-(--duration-fast)"
          :class="
            project.featured
              ? 'w-10 h-10 lg:w-12 lg:h-12'
              : 'w-8 h-8 lg:w-10 lg:h-10'
          "
        />
        <span
          class="font-semibold text-text-primary"
          :class="
            project.featured
              ? 'text-body-md lg:text-title-lg font-bold'
              : 'text-body-sm lg:text-label-md'
          "
        >
          {{ project.title }}
        </span>
        <span class="hidden sm:inline text-body-sm text-text-secondary mt-1">
          {{
            locale === "en"
              ? "Add real project screenshot"
              : "أضف لقطة شاشة حقيقية للمشروع"
          }}
        </span>
      </template>

      <div
        v-if="project.status"
        class="absolute top-3 lg:top-5 start-3 lg:start-5"
      >
        <LazyVProjectStatusBadge :status="project.status" />
      </div>

      <div
        class="absolute top-3 lg:top-4 end-3 lg:end-4 inline-flex items-center px-2.5 py-0.5 lg:px-3 lg:py-1 rounded-full bg-surface dark:bg-background border border-border text-text-primary text-label-sm font-medium"
      >
        {{ t(project.categoryBadge) }}
      </div>
    </div>

    <!-- Content -->
    <div
      class="p-5 md:p-6 flex flex-col flex-1 justify-between"
      :class="project.featured ? 'lg:w-5/12 lg:p-10' : 'lg:p-8'"
    >
      <div class="space-y-3" :class="project.featured && 'lg:space-y-4'">
        <div
          class="hidden md:flex items-center justify-between gap-3 text-label-sm"
        >
          <span class="font-semibold text-accent-ink uppercase tracking-wider">
            {{ t(project.role) }}
          </span>
          <span class="text-text-secondary font-mono text-end">
            {{ t(project.period) }}
          </span>
        </div>

        <h2
          class="font-headline font-bold text-text-primary group-hover:text-accent-ink transition-colors duration-(--duration-fast) text-balance"
          :class="
            project.featured
              ? 'text-title-lg lg:text-headline-md'
              : 'text-title-lg lg:text-headline-sm'
          "
        >
          {{ project.title }}
        </h2>

        <p class="text-body-sm text-text-secondary leading-relaxed">
          {{ t(project.summary) }}
        </p>

        <div
          v-if="project.featured && project.highlight"
          class="hidden lg:block p-4 rounded-xl bg-surface-elevated border border-border text-body-sm text-text-secondary space-y-1.5"
        >
          <div class="font-semibold text-text-primary text-label-sm">
            {{ t(project.highlight.label) }}
          </div>
          <p>{{ t(project.highlight.text) }}</p>
        </div>
      </div>

      <div class="pt-4 border-t border-border mt-5 space-y-4">
        <div class="flex flex-wrap gap-1.5 lg:gap-2">
          <LazyVTechBadge
            v-for="tech in project.stack"
            :key="tech"
            :label="tech"
          />
        </div>

        <div class="flex flex-wrap items-center justify-between gap-3">
          <LazyVButton :to="`/work/${project.slug}`" variant="ghost">
            {{ locale === "en" ? "View case study" : "عرض دراسة الحالة" }}
            <LazyVAppIcon
              name="lucide:arrow-right"
              class="w-4 h-4 rtl:rotate-180 arrow-nudge-x"
            />
          </LazyVButton>

          <div v-if="project.links.length" class="flex items-center gap-4">
            <a
              v-for="link in project.links.slice(0, 2)"
              :key="link.href"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 text-label-sm font-medium text-text-secondary hover:text-text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            >
              <LazyVAppIcon
                v-if="link.kind === 'repo'"
                name="lucide:github"
                class="w-3.5 h-3.5"
              />
              <span>{{ t(link.label) }}</span>
              <LazyVAppIcon
                v-if="link.kind !== 'repo'"
                name="lucide:external-link"
                class="w-3.5 h-3.5"
              />
            </a>
          </div>
          <span
            v-else-if="project.privateNote"
            class="text-label-sm text-text-secondary italic"
          >
            {{ t(project.privateNote) }}
          </span>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
import type { WorkProjectCardProps } from "@/types/work";

const { locale, t } = useLocale();

defineProps<WorkProjectCardProps>();
</script>
