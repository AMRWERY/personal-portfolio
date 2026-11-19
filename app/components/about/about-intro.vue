<template>
  <section
    class="max-w-(--container-max) mx-auto px-5 lg:px-12 pt-8 md:pt-24 pb-10 md:pb-16"
  >
    <div
      class="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center"
    >
      <div class="lg:col-span-8 space-y-4 md:space-y-6">
        <LazyVEyebrowLabel with-dot>
          {{ t(ABOUT_INTRO.eyebrow) }}
        </LazyVEyebrowLabel>

        <h1
          class="font-headline text-headline-xl-mobile md:text-display-lg-mobile lg:text-display-lg font-bold text-text-primary tracking-tight text-balance"
        >
          {{ t(ABOUT_INTRO.title) }}
        </h1>

        <VWordReveal
          class="text-body-sm md:text-body-lg text-text-secondary max-w-2xl font-light leading-relaxed text-pretty"
         :text="t(ABOUT_INTRO.bio)" />

        <ul
          class="hidden md:flex pt-4 flex-wrap items-center gap-x-6 gap-y-3 text-body-sm text-text-secondary"
        >
          <li
            v-for="fact in ABOUT_INTRO.facts"
            :key="fact.icon"
            class="flex items-center gap-2"
          >
            <LazyVAppIcon :name="fact.icon" class="w-4 h-4 text-accent-ink" />
            <span>{{ t(fact.text) }}</span>
          </li>
        </ul>
      </div>

      <div
        class="lg:col-span-4 flex justify-center lg:justify-end animate-about-portrait"
      >
        <ProfileAvatar
          size="md"
          :src="PROFILE.avatarSrc"
          :monogram="PROFILE.monogram"
          :name="PROFILE.name"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { PROFILE } from "@/data/home";
import { ABOUT_INTRO } from "@/data/about";

const { t } = useLocale();
</script>
