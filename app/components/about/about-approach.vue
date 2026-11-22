<template>
  <section
    ref="sectionRef"
    class="border-y border-border bg-surface/50 py-12 md:py-20 lg:py-24 transition-ui duration-(--duration-enter) ease-enter"
    :class="revealClass"
  >
    <div
      class="max-w-(--container-max) mx-auto px-5 lg:px-12 space-y-8 md:space-y-12"
    >
      <div class="reveal-head max-w-2xl space-y-1 md:space-y-2">
        <span
          class="eyebrow-text"
        >
          {{ t(ABOUT_APPROACH.eyebrow) }}
        </span>
        <h2
          class="section-heading"
        >
          {{ t(ABOUT_APPROACH.title) }}
        </h2>
        <VWordReveal
          class="lead-muted"
          :text="t(ABOUT_APPROACH.description)"
        />
      </div>

      <ol
        class="reveal-stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6"
      >
        <li
          v-for="(step, index) in ABOUT_APPROACH.steps"
          :key="step.id"
          class="p-4 md:p-6 rounded-xl md:rounded-2xl border border-border bg-surface flex flex-col justify-between gap-3 md:gap-4 transition-ui duration-(--duration-standard) ease-standard hover:border-accent hover:-translate-y-0.5"
        >
          <div class="space-y-1.5 md:space-y-3">
            <div
              class="hidden md:flex w-10 h-10 rounded-xl bg-accent-soft text-accent-ink items-center justify-center font-headline font-bold text-headline-sm"
            >
              {{ String(index + 1).padStart(2, "0") }}
            </div>
            <div
              class="md:hidden text-label-sm font-bold text-accent-ink uppercase"
            >
              {{ String(index + 1).padStart(2, "0") }} · {{ t(step.tag) }}
            </div>
            <h3
              class="card-title"
            >
              {{ t(step.title) }}
            </h3>
            <VWordReveal
              class="body-muted"
              :text="t(step.description)"
            />
          </div>
          <div
            class="hidden md:block text-label-sm text-accent-ink font-semibold pt-2 border-t border-border/60"
          >
            {{ t(step.tag) }}
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ABOUT_APPROACH } from "~/data/about";

const { t } = useLocale();

const sectionRef = ref<HTMLElement | null>(null);
const { revealClass } = useRevealOnce(sectionRef);
</script>