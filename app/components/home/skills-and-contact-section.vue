<template>
  <section
    ref="sectionRef"
    class="max-w-(--container-max) mx-auto px-5 lg:px-12 pb-16 lg:pb-24 space-y-10 lg:space-y-16 transition-all duration-(--duration-enter) ease-enter"
    :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'"
  >
    <!-- Skills Tag Row -->
    <div>
      <span
        class="hidden md:block font-headline text-label-sm font-semibold text-text-secondary uppercase tracking-wider text-center mb-4"
      >
        {{ locale === "en" ? "TECHNOLOGY FOCUS" : "التقنيات الأساسية" }}
      </span>
      <div
        class="flex flex-wrap items-center justify-center gap-2 md:gap-3 max-w-4xl mx-auto"
      >
        <LazyVTechBadge
          v-for="skill in SKILLS_PREVIEW"
          :key="skill"
          :label="skill"
          size="md"
        />
      </div>
    </div>

    <!-- Final Contact CTA Panel -->
    <div
      class="rounded-2xl lg:rounded-3xl border border-border bg-surface p-6 md:p-10 lg:p-16 text-center shadow-xl lg:shadow-2xl relative overflow-hidden"
    >
      <div class="relative z-10 max-w-2xl mx-auto space-y-4 lg:space-y-6">
        <span
          class="hidden md:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-soft text-accent-ink text-label-sm font-semibold uppercase tracking-wider"
        >
          {{ locale === "en" ? "GET IN TOUCH" : "تواصل معي" }}
        </span>

        <h2
          class="font-headline text-headline-sm md:text-headline-lg lg:text-headline-xl font-bold text-text-primary tracking-tight"
        >
          {{
            locale === "en"
              ? "Have a project or role in mind? Let's talk."
              : "هل لديك مشروع أو فرصة عمل في ذهنك؟ لنتحدث."
          }}
        </h2>

        <p
          class="text-body-sm md:text-body-lg text-text-secondary font-light leading-relaxed"
        >
          {{
            locale === "en"
              ? "Always glad to discuss Vue.js and Nuxt.js web applications, e-commerce platforms, or frontend architecture."
              : "يسعدني دائماً مناقشة مشاريع الويب ومنصات التجارة الإلكترونية وبناء الواجهات باستخدام Vue.js و Nuxt.js."
          }}
        </p>

        <div
          class="pt-2 lg:pt-4 flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <LazyVButton to="/contact" size="lg" class="w-full sm:w-auto">
            <span>{{ locale === "en" ? "Send a message" : "أرسل رسالة" }}</span>
            <LazyVAppIcon
              name="lucide:arrow-right"
              class="w-4 h-4 rtl:rotate-180 arrow-nudge-x"
            />
          </LazyVButton>

          <LazyVButton
            :href="`mailto:${PROFILE.email}`"
            variant="secondary"
            size="lg"
            class="w-full sm:w-auto"
          >
            <LazyVAppIcon name="lucide:mail" class="w-4 h-4 text-accent-ink" />
            <span>{{ PROFILE.email }}</span>
          </LazyVButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { PROFILE, SKILLS_PREVIEW } from "@/data/home";

const { locale } = useLocale();

const sectionRef = ref<HTMLElement | null>(null);

const { isVisible } = useRevealOnce(sectionRef);
</script>