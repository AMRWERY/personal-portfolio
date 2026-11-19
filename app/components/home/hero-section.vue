<template>
  <!-- relative z-10: lifts the hero (and the CV dropdown inside it) above the
       later sections, whose reveal transforms would otherwise paint over it -->
  <section
    class="relative z-10 max-w-(--container-max) mx-auto px-5 lg:px-12 pt-8 md:pt-16 lg:pt-24 pb-12 md:pb-16 lg:pb-24"
  >
    <div
      class="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-y-8 lg:gap-x-16 items-center"
    >
      <!-- Copy Block: Left 7 Cols (Row 1) on Desktop, Top on Mobile -->
      <div
        class="lg:col-span-7 lg:col-start-1 lg:row-start-1 space-y-4 lg:space-y-8 animate-hero-text"
      >
        <!-- :key restarts the underline animation when the language changes -->
        <LazyVUnderlinedText :key="locale">
          {{ t(HERO_COPY.greeting) }}
          <span class="text-text-primary">{{ t(HERO_COPY.greetingName) }}</span>
        </LazyVUnderlinedText>

        <h1
          class="font-headline text-display-lg-mobile lg:text-display-lg font-bold text-text-primary tracking-tight text-balance"
        >
          {{ t(HERO_COPY.headline) }}
        </h1>

        <VWordReveal
          class="font-body text-body-md lg:text-body-lg text-text-secondary max-w-2xl font-light leading-relaxed text-pretty"
         :text="t(HERO_COPY.supporting)" />

        <!-- Mobile inline location -->
        <div
          class="flex lg:hidden items-center gap-1.5 text-body-sm text-text-secondary"
        >
          <LazyVAppIcon name="lucide:map-pin" class="w-3.5 h-3.5" />
          <span>{{ t(HERO_COPY.location) }}</span>
        </div>
      </div>

      <!-- Portrait Block: Right 5 Cols (Spanning 2 Rows) on Desktop, Middle on Mobile -->
      <div
        class="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 flex justify-center lg:justify-end pt-2 lg:pt-0 animate-hero-avatar"
      >
        <profile-avatar
          variant="hero"
          :src="PROFILE.avatarSrc"
          :monogram="PROFILE.monogram"
          :name="PROFILE.name"
        />
      </div>

      <!-- CTAs + Desktop Location: Left 7 Cols (Row 2) on Desktop, Full-Width Bottom on Mobile -->
      <div
        class="lg:col-span-7 lg:col-start-1 lg:row-start-2 space-y-4 pt-2 lg:pt-0 animate-hero-text"
        style="--hero-base: 200ms"
      >
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:max-w-xl md:mx-auto lg:mx-0 lg:max-w-none lg:flex lg:flex-row lg:flex-wrap lg:items-center gap-3 sm:gap-4"
        >
          <LazyVButton
            to="/work"
            class="w-full lg:w-auto md:py-4 md:text-body-md lg:py-3 lg:text-label-md"
          >
            <span>{{ t(HERO_COPY.primaryCta) }}</span>
            <LazyVAppIcon
              name="lucide:arrow-right"
              class="w-4 h-4 rtl:rotate-180 arrow-nudge-x"
            />
          </LazyVButton>

          <LazyVCvDownload />
        </div>

        <div
          class="hidden lg:flex items-center gap-2 text-body-sm text-text-muted pt-1"
        >
          <LazyVAppIcon name="lucide:map-pin" class="w-3.5 h-3.5" />
          <span>{{ t(HERO_COPY.location) }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { HERO_COPY, PROFILE } from "@/data/home";

const { locale, t } = useLocale();
</script>