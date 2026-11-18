<template>
  <div>
    <!-- Intro + filters -->
    <section
      class="max-w-(--container-max) mx-auto px-5 lg:px-12 pt-8 md:pt-16 lg:pt-20 pb-6 md:pb-8"
    >
      <nav
        :aria-label="locale === 'en' ? 'Breadcrumb' : 'مسار التنقل'"
        class="flex items-center gap-1.5 md:gap-2 text-label-sm font-semibold text-accent-ink uppercase tracking-wider mb-3 md:mb-4"
      >
        <span>{{ locale === "en" ? "PORTFOLIO" : "الأعمال" }}</span>
        <span class="text-text-secondary" aria-hidden="true">/</span>
        <span class="text-text-primary">{{
          locale === "en" ? "WORK" : "المشاريع"
        }}</span>
      </nav>

      <div
        class="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 pb-6 md:pb-10 md:border-b border-border"
      >
        <div class="max-w-2xl space-y-2 md:space-y-3">
          <h1
            class="font-headline text-headline-xl-mobile md:text-display-lg font-bold text-text-primary tracking-tight"
          >
            {{ locale === "en" ? "Selected work" : "أعمال مختارة" }}
          </h1>
          <p
            class="text-body-sm md:text-body-lg text-text-secondary font-light leading-relaxed"
          >
            {{
              locale === "en"
                ? "A selection of production work, freelance projects, and personal builds across e-commerce, dashboards, content, and web applications."
                : "مجموعة من الأعمال الإنتاجية والمشاريع الحرة والتجارب الشخصية في التجارة الإلكترونية ولوحات التحكم والمحتوى وتطبيقات الويب."
            }}
          </p>
        </div>

        <div
          class="hidden md:block text-label-sm font-semibold text-text-secondary"
          aria-live="polite"
        >
          <span class="text-accent-ink font-bold">{{
            visibleProjects.length
          }}</span>
          {{ locale === "en" ? "projects cataloged" : "مشروع مدرج" }}
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
          {{ locale === "en" ? "No projects found" : "لا توجد مشاريع" }}
        </h2>
        <p class="text-body-sm text-text-secondary">
          {{
            locale === "en"
              ? 'No projects match this category. Click "All" to view the full portfolio.'
              : 'لا توجد مشاريع في هذه الفئة. اضغط "الكل" لعرض جميع الأعمال.'
          }}
        </p>
        <LazyVButton size="sm" @click="activeFilter = 'all'">
          {{ locale === "en" ? "Reset filter" : "إعادة ضبط التصفية" }}
        </LazyVButton>
      </div>
    </section>

    <WorkCtaSection />
  </div>
</template>

<script lang="ts" setup>
import { WORK_PROJECTS } from "@/data/work";
import type { WorkFilter, WorkFilterOption } from "@/types/work";

const { locale } = useLocale();

useSeoMeta({
  title: () =>
    locale.value === "en"
      ? "Selected Work — Amr Mohamed"
      : "أعمال مختارة — عمرو محمد",
  description: () =>
    locale.value === "en"
      ? "Production work, freelance projects, and personal builds by Amr Mohamed, a frontend developer in Cairo."
      : "أعمال إنتاجية ومشاريع حرة وتجارب شخصية لعمرو محمد، مطور واجهات أمامية في القاهرة.",
});

const activeFilter = ref<WorkFilter>("all");

const countOf = (category: WorkFilter) =>
  category === "all"
    ? WORK_PROJECTS.length
    : WORK_PROJECTS.filter((p) => p.category === category).length;

const filterOptions: WorkFilterOption[] = [
  { value: "all", label: { en: "All", ar: "الكل" }, count: countOf("all") },
  {
    value: "professional",
    label: { en: "Professional", ar: "احترافي" },
    count: countOf("professional"),
  },
  {
    value: "freelance",
    label: { en: "Freelance", ar: "عمل حر" },
    count: countOf("freelance"),
  },
  {
    value: "personal",
    label: { en: "Personal", ar: "شخصي" },
    count: countOf("personal"),
  },
];

const visibleProjects = computed(() =>
  activeFilter.value === "all"
    ? WORK_PROJECTS
    : WORK_PROJECTS.filter((p) => p.category === activeFilter.value),
);
</script>
