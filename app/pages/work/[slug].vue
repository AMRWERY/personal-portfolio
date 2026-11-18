<template>
  <div v-if="project">
    <CaseStudyHero :project="project" />

    <CaseStudyGallery :key="project.slug" :project="project" />

    <section
      class="max-w-(--container-max) mx-auto px-5 lg:px-12 py-6 md:py-12"
    >
      <div
        class="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-x-10 lg:gap-y-6"
      >
        <!-- Metrics: first on mobile, right column on desktop -->
        <CaseStudyMetrics
          v-if="caseStudy?.metrics?.length"
          :metrics="caseStudy.metrics"
          :class="hasContributions ? 'lg:col-span-5' : 'lg:col-span-12'"
        />

        <CaseStudyContributions
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
            {{ locale === "en" ? "Technology stack" : "التقنيات المستخدمة" }}
          </h2>
          <div class="flex flex-wrap gap-1.5 md:gap-2">
            <LazyVTechBadge v-for="tech in stack" :key="tech" :label="tech" />
          </div>
        </div>
      </div>
    </section>

    <CaseStudyPager :previous="adjacent.previous" :next="adjacent.next" />

    <WorkCtaSection
      :eyebrow="{ en: 'PROJECT INQUIRY', ar: 'استفسار عن مشروع' }"
      :title="{
        en: 'Have a similar project in mind? Let\'s talk.',
        ar: 'لديك مشروع مشابه؟ لنتحدث.',
      }"
      :description="{
        en: 'Available to architect frontend applications, consult on Vue.js/Nuxt.js systems, or join engineering teams.',
        ar: 'متاح لتصميم تطبيقات الواجهات الأمامية والاستشارة في أنظمة Vue.js/Nuxt.js أو الانضمام إلى فرق الهندسة.',
      }"
      :primary-label="{ en: 'Start a conversation', ar: 'ابدأ المحادثة' }"
    />
  </div>
</template>

<script lang="ts" setup>
import { getAdjacentProjects, getProjectBySlug } from "@/data/work";

const route = useRoute();
const { locale } = useLocale();

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

useSeoMeta({
  title: () =>
    locale.value === "en"
      ? `${shortTitle} — Case Study — Amr Mohamed`
      : `${shortTitle} — دراسة حالة — عمرو محمد`,
  description: () =>
    locale.value === "en" ? project.summary.en : project.summary.ar,
});
</script>
