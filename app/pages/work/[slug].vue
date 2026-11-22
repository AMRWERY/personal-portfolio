<template>
  <div v-if="project">
    <case-study-hero :project="project" />

    <case-study-gallery :key="project.slug" :project="project" />

    <section
      class="max-w-(--container-max) mx-auto px-5 lg:px-12 py-6 md:py-12"
    >
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-x-10 lg:gap-y-6"
      >
        <!-- Metrics: first on mobile, right column on desktop -->
        <case-study-metrics
          v-if="caseStudy?.metrics?.length"
          :metrics="caseStudy.metrics"
          :class="hasContributions ? 'lg:col-span-5' : 'lg:col-span-12'"
        />

        <case-study-contributions
          v-if="hasContributions"
          :contributions="caseStudy!.contributions!"
          :note="caseStudy?.note"
          class="lg:col-span-7 lg:col-start-1 lg:row-start-1 lg:row-span-2"
        />

        <!-- Stack -->
        <div
          class="border border-border rounded-xl bg-surface p-5 md:p-6 space-y-3 md:space-y-4 self-start"
          :class="hasContributions ? 'lg:col-span-5' : 'lg:col-span-12'"
        >
          <h2
            class="font-headline text-headline-sm md:text-title-lg font-bold text-text-primary"
          >
            {{ t("ui.caseStudyPage.technologyStack") }}
          </h2>
          <div class="flex flex-wrap gap-1.5 md:gap-2">
            <LazyVTechBadge v-for="tech in stack" :key="tech" :label="tech" />
          </div>
        </div>
      </div>
    </section>

    <case-study-pager :previous="adjacent.previous" :next="adjacent.next" />

    <work-cta-section
      :eyebrow="'ui.caseStudyPage.projectInquiry'"
      :title="'ui.caseStudyPage.haveASimilarProjectIn'"
      :description="'ui.caseStudyPage.availableToArchitectFrontendApplicat'"
      :primary-label="'ui.caseStudyPage.startAConversation'"
    />
  </div>
</template>

<script lang="ts" setup>
import { getAdjacentProjects, getProjectBySlug } from "~/data/work";

const { t } = useLocale();
const route = useRoute();

const project = getProjectBySlug(String(route.params.slug));

if (!project) {
  throw createError({
    statusCode: 404,
    statusMessage: "Project not found",
    fatal: true,
  });
}

const caseStudy = project.caseStudy;
const hasContributions = !!caseStudy?.contributions?.length;
const stack = caseStudy?.stack ?? project.stack;
const adjacent = getAdjacentProjects(project.slug);

const shortTitle = project.title.split(" — ")[0];

const localePath = useLocalePath();

usePageSeo({
  title: () => t("ui.caseStudyPage.title", { title: shortTitle }),
  description: () => t(project.summary),
  image: project.screenshotSrc,
  imageAlt: () => project.title,
  jsonLd: (abs) => [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { name: t("ui.caseStudyHero.home"), path: localePath("/") },
        { name: t("ui.caseStudyHero.work"), path: localePath("/work") },
        { name: shortTitle, path: localePath(`/work/${project.slug}`) },
      ].map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: abs(item.path),
      })),
    },
  ],
});
</script>