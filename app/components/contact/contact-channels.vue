<template>
  <div class="space-y-6">
    <div
      class="border border-border bg-surface rounded-2xl p-5 sm:p-8 space-y-5 md:space-y-6"
    >
      <div class="md:border-b border-border md:pb-5">
        <h2
          class="font-headline text-title-lg md:text-headline-sm font-bold text-text-primary"
        >
          {{ t('ui.contactChannels.directChannels') }}
        </h2>
        <VWordReveal class="text-body-sm text-text-secondary mt-0.5 md:mt-1" :text="t('ui.contactChannels.feelFreeToReachOut')" />
      </div>

      <div class="grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-4">
        <!-- Email -->
        <a
          :href="`mailto:${PROFILE.email}`"
          :class="[ROW, 'col-span-2 md:col-span-1']"
        >
          <span :class="ICON_BOX">
            <LazyVAppIcon name="lucide:mail" class="w-4 h-4 md:w-5 md:h-5" />
          </span>
          <span class="min-w-0 flex-1">
            <span :class="LABEL">{{
              t('ui.contactChannels.email')
            }}</span>
            <span :class="VALUE" dir="ltr">{{ PROFILE.email }}</span>
          </span>
          <LazyVAppIcon
            name="lucide:arrow-up-right"
            class="w-4 h-4 text-text-secondary group-hover/btn:text-accent-ink shrink-0 arrow-nudge-diag"
          />
        </a>

        <!-- Phone -->
        <a
          :href="`tel:${PROFILE.phone}`"
          :class="[ROW, 'col-span-2 md:col-span-1']"
        >
          <span :class="ICON_BOX">
            <LazyVAppIcon name="lucide:phone" class="w-4 h-4 md:w-5 md:h-5" />
          </span>
          <span class="min-w-0 flex-1">
            <span :class="LABEL">{{
              t('ui.contactChannels.phoneWhatsApp')
            }}</span>
            <span :class="VALUE" dir="ltr">{{ PROFILE.phoneDisplay }}</span>
          </span>
          <LazyVAppIcon
            name="lucide:arrow-up-right"
            class="w-4 h-4 text-text-secondary group-hover/btn:text-accent-ink shrink-0 arrow-nudge-diag"
          />
        </a>

        <!-- Location (not a link) -->
        <div
          class="col-span-2 md:col-span-1 flex items-center gap-3 md:gap-4 p-3 md:p-3.5 rounded-xl border border-border bg-background"
        >
          <span :class="ICON_BOX">
            <LazyVAppIcon name="lucide:map-pin" class="w-4 h-4 md:w-5 md:h-5" />
          </span>
          <span class="min-w-0 flex-1">
            <span :class="LABEL">{{
              t('ui.contactChannels.location')
            }}</span>
            <span :class="VALUE">{{
              t('ui.contactChannels.cairoEgypt')
            }}</span>
          </span>
          <span
            class="text-label-sm font-medium text-accent-ink px-2 py-0.5 rounded bg-accent-soft"
            dir="ltr"
          >
            UTC+2
          </span>
        </div>

        <!-- LinkedIn / GitHub: 2-up chips on mobile, full rows on desktop -->
        <a
          v-for="social in SOCIALS"
          :key="social.name"
          :href="social.href"
          target="_blank"
          rel="noopener noreferrer"
          :class="[ROW, 'justify-center md:justify-start']"
        >
          <span :class="[ICON_BOX, 'hidden md:flex']">
            <LazyVAppIcon :name="social.icon" class="w-5 h-5" />
          </span>
          <LazyVAppIcon
            :name="social.icon"
            class="md:hidden w-4 h-4 text-accent-ink"
          />
          <span class="md:min-w-0 md:flex-1">
            <span :class="[LABEL, 'hidden md:block']">{{ social.name }}</span>
            <span class="md:hidden text-body-sm font-medium text-text-primary">
              {{ social.name }}
            </span>
            <span :class="[VALUE, 'hidden md:block']" dir="ltr">
              {{ social.handle }}
            </span>
          </span>
          <LazyVAppIcon
            name="lucide:external-link"
            class="hidden md:block w-4 h-4 text-text-secondary group-hover/btn:text-accent-ink shrink-0 arrow-nudge-diag"
          />
        </a>
      </div>
    </div>

    <!-- Availability -->
    <div
      class="hidden md:block p-6 rounded-2xl border border-border bg-surface/60 space-y-3"
    >
      <div class="flex items-center gap-2.5">
        <span class="relative flex w-2.5 h-2.5" aria-hidden="true">
          <span
            class="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-60 animate-ping motion-reduce:animate-none"
          />
          <span
            class="relative inline-flex w-2.5 h-2.5 rounded-full bg-emerald-400"
          />
        </span>
        <span class="font-headline text-label-md font-bold text-text-primary">
          {{ t('ui.contactChannels.currentAvailability') }}
        </span>
      </div>
      <VWordReveal class="text-body-sm text-text-secondary leading-relaxed" :text="t('ui.contactChannels.availableForSelectedFrontendFreelanc')" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PROFILE } from "@/data/home";
import type { IconifyName } from "@/types/portfolio";

const { t } = useLocale();

const SOCIALS: { name: string; icon: IconifyName; href: string; handle: string }[] =
  [
    {
      name: "LinkedIn",
      icon: "lucide:linkedin",
      href: PROFILE.linkedinUrl,
      handle: PROFILE.linkedinHandle,
    },
    {
      name: "GitHub",
      icon: "lucide:github",
      href: PROFILE.githubUrl,
      handle: PROFILE.githubHandle,
    },
  ];

// Shared row styling (constants keep the link variants in sync)
const ROW =
  "group/btn flex items-center gap-3 md:gap-4 p-3 md:p-3.5 rounded-xl border border-border bg-background hover:border-accent transition-colors duration-(--duration-fast) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

  const ICON_BOX =
  "w-9 h-9 md:w-10 md:h-10 rounded-lg bg-accent-soft text-accent-ink flex items-center justify-center shrink-0 transition-transform duration-(--duration-fast) group-hover/btn:scale-105";

  const LABEL = "block text-label-sm font-semibold text-text-secondary";

const VALUE =
  "block text-body-sm md:text-body-md font-medium text-text-primary truncate";
</script>
