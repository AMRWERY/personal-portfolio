<template>
  <section
    ref="sectionRef"
    class="border-t border-border bg-surface/40 py-12 md:py-20 lg:py-24 transition-ui duration-(--duration-enter) ease-enter"
    :class="isVisible ? 'reveal-group-in' : 'reveal-group-out'"
  >
    <div
      class="max-w-(--container-max) mx-auto px-5 lg:px-12 space-y-6 md:space-y-12"
    >
      <div class="reveal-head max-w-2xl space-y-1 md:space-y-2">
        <span
          class="font-headline text-label-sm font-semibold text-accent-ink uppercase tracking-wider block"
        >
          {{ t(ABOUT_SKILLS.eyebrow) }}
        </span>
        <h2
          class="font-headline text-headline-sm md:text-headline-lg lg:text-headline-xl font-bold text-text-primary tracking-tight"
        >
          {{ t(ABOUT_SKILLS.title) }}
        </h2>
        <VWordReveal class="hidden md:block text-body-md text-text-secondary font-light" :text="t(ABOUT_SKILLS.description)" />
      </div>

      <div
        class="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
      >
        <div
          v-for="group in ABOUT_SKILLS.groups"
          :key="group.id"
          class="p-4 md:p-6 rounded-xl md:rounded-2xl border border-border bg-surface space-y-2 md:space-y-3"
        >
          <h3
            class="font-headline text-body-md md:text-title-lg font-bold text-text-primary flex items-center gap-2"
          >
            <LazyVAppIcon
              :name="group.icon"
              class="hidden md:block w-4 h-4 text-accent-ink"
            />
            {{ t(group.title) }}
          </h3>
          <div class="flex flex-wrap gap-1.5 md:pt-1">
            <LazyVTechBadge
              v-for="skill in group.skills"
              :key="skill"
              :label="t(skill)"
            />
          </div>
        </div>
      </div>

      <div
        class="hidden md:block p-6 rounded-2xl border border-border bg-surface space-y-3"
      >
        <h3
          class="font-headline text-title-lg font-bold text-text-primary flex items-center gap-2"
        >
          <LazyVAppIcon name="lucide:sparkles" class="w-4 h-4 text-accent-ink" />
          {{ t(ABOUT_SKILLS.specializations.title) }}
        </h3>
        <div class="flex flex-wrap gap-2 pt-1">
          <LazyVTechBadge
            v-for="item in ABOUT_SKILLS.specializations.items"
            :key="item"
            :label="t(item)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ABOUT_SKILLS } from "@/data/about";

const { t } = useLocale();

const sectionRef = ref<HTMLElement | null>(null);
const { isVisible } = useRevealOnce(sectionRef);
</script>
