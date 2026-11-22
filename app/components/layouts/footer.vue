<template>
  <footer
    class="border-t border-border bg-background py-10 lg:py-12 transition-colors duration-(--duration-standard)"
  >
    <div class="max-w-(--container-max) mx-auto px-5 lg:px-12 space-y-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-1 text-center md:text-start">
          <div
            class="flex flex-wrap items-center justify-center md:justify-start gap-2"
          >
            <span class="font-headline font-bold text-text-primary">
              {{ PROFILE.name }}
            </span>
            <span class="text-text-muted" aria-hidden="true">·</span>
            <span class="text-body-sm text-text-secondary">
              {{ t("ui.footer.tagline") }}
            </span>
          </div>
          <VWordReveal
            class="text-body-sm text-text-secondary"
            :text="t('ui.footer.basedInCairoEgyptBilingual')"
          />
        </div>

        <div
          class="flex flex-wrap items-center justify-center gap-6 text-body-sm text-text-secondary"
        >
          <a
            :href="PROFILE.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-link"
          >
            <LazyVAppIcon name="lucide:github" class="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <a
            :href="PROFILE.linkedinUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="footer-link"
          >
            <LazyVAppIcon name="lucide:linkedin" class="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            :href="`mailto:${PROFILE.email}`"
            class="footer-link"
          >
            <LazyVAppIcon name="lucide:mail" class="w-4 h-4" />
            <span>{{ t("ui.footer.email") }}</span>
          </a>
        </div>
      </div>

      <div
        class="pt-6 border-t border-border/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-label-sm text-text-muted"
      >
        <div class="flex flex-wrap items-center justify-center gap-4">
          <span>© {{ currentYear }} {{ PROFILE.name }}</span>
          <nav
            :aria-label="t('ui.footer.footerNavigation')"
            class="flex items-center gap-4"
          >
            <nuxt-link-locale
              v-for="item in NAV_ITEMS"
              :key="item.key"
              :to="item.to"
              class="hover:text-text-primary transition-colors inline-flex items-center min-h-11 lg:pointer-fine:min-h-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            >
              {{ t(item.label) }}
            </nuxt-link-locale>
          </nav>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { NAV_ITEMS, PROFILE } from "~/data/home";

const { locale, t } = useLocale();

const currentYear = new Date().getFullYear();

const scrollToTop = (): void => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  window.scrollTo({
    top: 0,
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
};
</script>