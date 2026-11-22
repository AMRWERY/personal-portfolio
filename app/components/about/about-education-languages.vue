<template>
  <section
    ref="sectionRef"
    class="max-w-(--container-max) mx-auto px-5 lg:px-12 py-10 md:py-20 lg:py-24 transition-ui duration-(--duration-enter) ease-enter"
    :class="revealClass"
  >
    <div class="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8">
      <!-- Education -->
      <div
        class="p-4 md:p-8 rounded-xl md:rounded-2xl border border-border bg-surface space-y-2 md:space-y-4"
      >
        <div class="flex items-center gap-3">
          <div
            class="hidden md:flex w-10 h-10 rounded-xl bg-accent-soft text-accent-ink items-center justify-center"
          >
            <LazyVAppIcon name="lucide:graduation-cap" class="w-5 h-5" />
          </div>
          <div>
            <span
              class="text-label-sm font-semibold text-accent-ink uppercase tracking-wider block"
            >
              {{ t(ABOUT_EDUCATION.eyebrow) }}
            </span>
            <h2
              class="hidden md:block font-headline text-headline-sm font-bold text-text-primary"
            >
              {{ t(ABOUT_EDUCATION.title) }}
            </h2>
          </div>
        </div>

        <div class="md:pt-2 md:border-t border-border space-y-1 md:space-y-1.5">
          <div class="font-headline text-title-lg font-bold text-text-primary">
            {{ t(ABOUT_EDUCATION.degree) }}
          </div>
          <div class="text-body-sm text-text-secondary">
            {{ t(ABOUT_EDUCATION.school) }}
          </div>
          <div class="text-label-sm text-text-secondary font-mono">
            {{ t(ABOUT_EDUCATION.graduated) }}
          </div>
        </div>
      </div>

      <!-- Languages -->
      <div
        class="p-4 md:p-8 rounded-xl md:rounded-2xl border border-border bg-surface space-y-2 md:space-y-4"
      >
        <div class="flex items-center gap-3">
          <div
            class="hidden md:flex w-10 h-10 rounded-xl bg-accent-soft text-accent-ink items-center justify-center"
          >
            <LazyVAppIcon name="lucide:languages" class="w-5 h-5" />
          </div>
          <div>
            <span
              class="text-label-sm font-semibold text-accent-ink uppercase tracking-wider block"
            >
              {{ t(ABOUT_LANGUAGES.eyebrow) }}
            </span>
            <h2
              class="hidden md:block font-headline text-headline-sm font-bold text-text-primary"
            >
              {{ t(ABOUT_LANGUAGES.title) }}
            </h2>
          </div>
        </div>

        <ul class="md:pt-2 md:border-t border-border space-y-2 md:space-y-3">
          <li
            v-for="language in ABOUT_LANGUAGES.items"
            :key="language.name"
            class="flex items-center justify-between gap-3 text-body-sm"
          >
            <span
              class="font-headline text-body-sm md:text-body-md font-bold text-text-primary"
            >
              {{ t(language.name) }}
            </span>
            <span
              class="text-label-sm md:px-3 md:py-1 md:rounded-full md:bg-surface-elevated md:border md:border-border text-end"
              :class="
                language.highlight
                  ? 'text-accent-ink font-semibold'
                  : 'text-text-secondary font-medium'
              "
            >
              {{ t(language.level) }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ABOUT_EDUCATION, ABOUT_LANGUAGES } from "~/data/about";

const { t } = useLocale();

const sectionRef = ref<HTMLElement | null>(null);
const { revealClass } = useRevealOnce(sectionRef);
</script>