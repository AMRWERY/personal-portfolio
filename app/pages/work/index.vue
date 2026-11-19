<template>
  <div>
    <!-- Intro + filters -->
    <section
      class="max-w-(--container-max) mx-auto px-5 lg:px-12 pt-8 md:pt-16 lg:pt-20 pb-6 md:pb-8"
    >
      <nav
        :aria-label="t('ui.workPage.breadcrumb')"
        class="flex items-center gap-1.5 md:gap-2 text-label-sm font-semibold text-accent-ink uppercase tracking-wider mb-3 md:mb-4"
      >
        <span>{{ t('ui.workPage.portfolio') }}</span>
        <span class="text-text-secondary" aria-hidden="true">/</span>
        <span class="text-text-primary">{{
          t('ui.workPage.work')
        }}</span>
      </nav>

      <div
        class="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 pb-6 md:pb-10 md:border-b border-border"
      >
        <div class="max-w-2xl space-y-2 md:space-y-3">
          <h1
            class="font-headline text-headline-xl-mobile md:text-display-lg font-bold text-text-primary tracking-tight"
          >
            {{ t('ui.workPage.selectedWork') }}
          </h1>
          <VWordReveal
            class="text-body-sm md:text-body-lg text-text-secondary font-light leading-relaxed"
           :text="t('ui.workPage.aSelectionOfProductionWork')" />
        </div>

        <div
          class="hidden md:block text-label-sm font-semibold text-text-secondary"
          aria-live="polite"
        >
          <span class="text-accent-ink font-bold">{{
            visibleProjects.length
          }}</span>
          {{ t('ui.workPage.projectsCataloged') }}
        </div>
      </div>

      <div
        class="md:pt-8 flex flex-wrap items-center justify-between gap-4"
      >
        <WorkFilterBar v-model="activeFilter" :options="filterOptions" />

      </div>
    </section>

    <!-- Project grid -->
    <section
      class="max-w-(--container-max) mx-auto px-5 lg:px-12 py-6 md:py-10"
    >
      <TransitionGroup
        v-if="visibleProjects.length"
        tag="div"
        enter-active-class="transition-ui duration-(--duration-standard) ease-standard"
        enter-from-class="opacity-0 translate-y-2"
        class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8"
      >
        <WorkProjectCard
          v-for="project in visibleProjects"
          :key="project.slug"
          :project="project"
        />
      </TransitionGroup>

      <div
        v-else
        class="my-8 md:my-16 p-8 md:p-12 rounded-2xl border border-border bg-surface text-center max-w-xl mx-auto space-y-3 md:space-y-4"
      >
        <div
          class="w-10 h-10 md:w-12 md:h-12 rounded-full bg-accent-soft text-accent-ink flex items-center justify-center mx-auto"
        >
          <LazyVAppIcon
            name="lucide:folder-search"
            class="w-5 h-5 md:w-6 md:h-6"
          />
        </div>
        <h2
          class="font-headline text-headline-sm font-bold text-text-primary"
        >
          {{ t('ui.workPage.noProjectsFound') }}
        </h2>
        <VWordReveal class="text-body-sm text-text-secondary" :text="t('ui.workPage.noProjectsMatchThisCategory')" />
        <LazyVButton size="sm" @click="activeFilter = 'all'">
          {{ t('ui.workPage.resetFilter') }}
        </LazyVButton>
      </div>
    </section>

    <WorkCtaSection />
  </div>
</template>

<script lang="ts" setup>
import { WORK_PROJECTS } from "@/data/work";
import type { WorkFilter, WorkFilterOption } from "@/types/work";

const { t } = useLocale();

useSeoMeta({
  title: () =>
    t('ui.workPage.selectedWorkAmrMohamed'),
  description: () =>
    t('ui.workPage.productionWorkFreelanceProjectsAnd'),
});

const activeFilter = ref<WorkFilter>("all");

const countOf = (category: WorkFilter) =>
  category === "all"
    ? WORK_PROJECTS.length
    : WORK_PROJECTS.filter((p) => p.category === category).length;

const filterOptions: WorkFilterOption[] = [
  { value: "all", label: 'ui.workPage.all', count: countOf("all") },
  {
    value: "professional",
    label: 'ui.workPage.professional',
    count: countOf("professional"),
  },
  {
    value: "freelance",
    label: 'ui.workPage.freelance',
    count: countOf("freelance"),
  },
  {
    value: "personal",
    label: 'ui.workPage.personal',
    count: countOf("personal"),
  },
];

const visibleProjects = computed(() =>
  activeFilter.value === "all"
    ? WORK_PROJECTS
    : WORK_PROJECTS.filter((p) => p.category === activeFilter.value),
);
</script>
