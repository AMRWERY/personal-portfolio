<template>
  <section
    class="max-w-(--container-max) mx-auto px-5 lg:px-12 pt-6 md:pt-16 pb-6 md:pb-8"
  >
    <!-- Breadcrumb -->
    <nav
      :aria-label="t('ui.caseStudyHero.breadcrumb')"
      class="flex items-center gap-1.5 md:gap-2 text-label-sm font-semibold uppercase tracking-wider mb-4 md:mb-6 text-text-secondary"
    >
      <nuxt-link-locale
        to="/"
        class="inline-flex items-center justify-center min-h-11 min-w-11 lg:min-h-0 lg:min-w-0 hover:text-accent-ink transition-colors"
      >
        {{ t('ui.caseStudyHero.home') }}
      </nuxt-link-locale>
      <span aria-hidden="true">/</span>
      <nuxt-link-locale
        to="/work"
        class="inline-flex items-center justify-center min-h-11 min-w-11 lg:min-h-0 lg:min-w-0 hover:text-accent-ink transition-colors"
      >
        {{ t('ui.caseStudyHero.work') }}
      </nuxt-link-locale>
      <span aria-hidden="true">/</span>
      <span class="text-accent-ink" aria-current="page">{{ shortTitle }}</span>
    </nav>

    <div class="space-y-3 md:space-y-6 max-w-4xl">
      <!-- Meta pills -->
      <div class="flex flex-wrap items-center gap-2 md:gap-3">
        <LazyVProjectStatusBadge v-if="project.status" :status="project.status" />
        <span
          class="inline-flex items-center px-2.5 py-0.5 md:px-3 md:py-1 rounded-full bg-surface-elevated border border-border text-label-sm font-semibold text-accent-ink uppercase tracking-wider"
        >
          {{ t(caseStudy?.typeLabel ?? project.categoryBadge) }}
        </span>
        <span
          v-if="caseStudy?.market"
          class="hidden md:inline-flex items-center px-3 py-1 rounded-full bg-surface border border-border text-label-sm text-text-secondary font-medium"
        >
          {{ t(caseStudy.market) }}
        </span>
        <span class="text-label-sm text-text-secondary font-mono">
          {{ t(project.period) }}
        </span>
      </div>

      <h1
        class="font-headline text-headline-xl-mobile md:text-display-lg-mobile lg:text-display-lg font-bold text-text-primary tracking-tight text-balance"
      >
        {{ project.title }}
      </h1>

      <div
        class="hidden md:flex flex-wrap items-center gap-x-3 gap-y-1 text-body-sm text-text-secondary"
      >
        <span class="font-semibold text-text-primary">
          {{ t('ui.caseStudyHero.role') }}
        </span>
        <span>{{ t(project.role) }}</span>
        <template v-if="caseStudy?.deliverable">
          <span aria-hidden="true">·</span>
          <span class="font-semibold text-text-primary">
            {{ t('ui.caseStudyHero.deliverable') }}
          </span>
          <span>{{ t(caseStudy.deliverable) }}</span>
        </template>
      </div>

      <VWordReveal
        class="text-body-sm md:text-body-lg text-text-secondary font-light leading-relaxed text-pretty"
       :text="t(caseStudy?.intro ?? project.summary)" />

      <!-- Links -->
      <div
        v-if="project.links.length"
        class="pt-2 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-2 sm:gap-3"
      >
        <LazyVButton
          v-if="primaryLink"
          :href="primaryLink.href"
          class="w-full sm:w-auto"
        >
          <span>{{ t(primaryLink.detailLabel ?? primaryLink.label) }}</span>
          <LazyVAppIcon name="lucide:external-link" class="w-4 h-4" />
        </LazyVButton>

        <div
          v-if="secondaryLinks.length"
          class="grid grid-cols-2 gap-2 sm:contents"
        >
          <LazyVButton
            v-for="link in secondaryLinks"
            :key="link.href"
            :href="link.href"
            variant="secondary"
            size="sm"
            class="sm:px-5 sm:py-2.5"
          >
            <LazyVAppIcon
              :name="link.kind === 'repo' ? 'lucide:github' : 'lucide:external-link'"
              class="w-3.5 h-3.5 md:w-4 md:h-4"
            />
            <span>{{ t(link.detailLabel ?? link.label) }}</span>
          </LazyVButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { CaseStudyProps } from "@/types/work";

const props = defineProps<CaseStudyProps>();

const { locale, t } = useLocale();

const caseStudy = computed(() => props.project.caseStudy);

// "Marca Store — E-Commerce" -> "Marca Store"
const shortTitle = computed(() => props.project.title.split(" — ")[0]);

// Live/brand site first; repositories (and any further links) are secondary
const primaryLink = computed(() =>
  props.project.links.find((link) => link.kind !== "repo"),
);
const secondaryLinks = computed(() =>
  props.project.links.filter((link) => link !== primaryLink.value),
);
</script>
