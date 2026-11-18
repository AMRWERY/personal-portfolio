<template>
  <section
    ref="sectionRef"
    class="max-w-(--container-max) mx-auto px-5 lg:px-12 py-12 md:py-20 lg:py-24 transition-all duration-(--duration-enter) ease-enter"
    :class="isVisible ? 'reveal-in' : 'reveal-out'"
  >
    <div class="max-w-2xl space-y-1 md:space-y-2 mb-6 md:mb-12">
      <span
        class="font-headline text-label-sm font-semibold text-accent-ink uppercase tracking-wider block"
      >
        {{ t(ABOUT_EXPERIENCE.eyebrow) }}
      </span>
      <h2
        class="font-headline text-headline-sm md:text-headline-lg lg:text-headline-xl font-bold text-text-primary tracking-tight"
      >
        {{ t(ABOUT_EXPERIENCE.title) }}
      </h2>
      <p class="hidden md:block text-body-md text-text-secondary font-light">
        {{ t(ABOUT_EXPERIENCE.description) }}
      </p>
    </div>

    <!-- Vertical timeline -->
    <ol
      class="relative space-y-4 md:space-y-8 before:absolute before:inset-y-0 before:start-[7px] md:before:start-3 before:w-0.5 before:bg-border"
    >
      <li
        v-for="entry in ABOUT_EXPERIENCE.entries"
        :key="entry.id"
        class="relative ps-8 md:ps-10"
      >
        <span
          class="absolute start-0 md:start-1.5 top-5 md:top-6 w-4 h-4 md:w-3.5 md:h-3.5 rounded-full border-4 border-background"
          :class="entry.isCurrent ? 'bg-accent' : 'bg-border'"
          aria-hidden="true"
        />

        <div
          class="p-4 md:p-8 rounded-xl md:rounded-2xl border border-border bg-surface space-y-3 md:space-y-4"
        >
          <div
            class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 md:border-b border-border md:pb-4"
          >
            <div>
              <span
                class="text-label-sm font-semibold uppercase tracking-wider block mb-1"
                :class="entry.isCurrent ? 'text-accent-ink' : 'text-text-secondary'"
              >
                {{ t(entry.period) }}
              </span>
              <h3
                class="font-headline text-title-lg md:text-headline-sm font-bold text-text-primary"
              >
                {{ t(entry.title) }}
              </h3>
            </div>
            <span
              class="px-3 py-1 rounded-full bg-surface-elevated border border-border text-label-sm font-medium text-text-primary w-fit"
            >
              {{ t(entry.badge) }}
            </span>
          </div>

          <p class="text-body-sm text-text-secondary leading-relaxed">
            {{ t(entry.description) }}
          </p>

          <div class="pt-1 md:pt-2 space-y-2">
            <span
              class="text-label-sm font-semibold text-text-primary uppercase tracking-wider block"
            >
              {{ t(entry.projectsLabel) }}
            </span>
            <div class="flex flex-wrap gap-2">
              <template v-for="project in entry.projects" :key="project.label.en">
                <nuxt-link-locale
                  v-if="project.slug"
                  :to="`/work/${project.slug}`"
                  class="group/btn inline-flex items-center gap-1 min-h-11 md:min-h-0 px-3 py-1 rounded-full bg-surface-elevated border border-border text-label-sm text-text-secondary hover:text-accent-ink hover:border-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span>{{ t(project.label) }}</span>
                  <LazyVAppIcon
                    name="lucide:arrow-up-right"
                    class="w-3.5 h-3.5 arrow-nudge-diag"
                  />
                </nuxt-link-locale>
                <span
                  v-else
                  class="px-3 py-1 rounded-full bg-surface-elevated border border-border text-label-sm text-text-secondary"
                >
                  {{ t(project.label) }}
                </span>
              </template>
            </div>
          </div>
        </div>
      </li>
    </ol>
  </section>
</template>

<script lang="ts" setup>
import { ABOUT_EXPERIENCE } from "@/data/about";

const { t } = useLocale();

const sectionRef = ref<HTMLElement | null>(null);
const { isVisible } = useRevealOnce(sectionRef);
</script>
