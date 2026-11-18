<template>
  <section
    ref="sectionRef"
    class="md:border-t md:border-border md:bg-surface-elevated/50 dark:md:bg-surface/40 py-6 md:py-20 lg:py-28 transition-all duration-(--duration-enter) ease-enter"
    :class="isVisible ? 'reveal-in' : 'reveal-out'"
  >
    <div class="max-w-(--container-max) mx-auto px-5 lg:px-12">
      <div class="max-w-2xl mb-5 md:mb-12">
        <LazyVEyebrowLabel class="hidden md:inline-flex mb-2">
          {{ locale === "en" ? "CORE SERVICES" : "مجالات العمل" }}
        </LazyVEyebrowLabel>
        <h2
          class="font-headline text-headline-sm md:text-headline-lg lg:text-headline-xl font-bold text-text-primary tracking-tight"
        >
          {{ locale === "en" ? "Capabilities" : "القدرات الهندسية" }}
        </h2>
        <p class="hidden md:block text-body-md text-text-secondary mt-2">
          {{
            locale === "en"
              ? "Hands-on frontend engineering focused on architecture, reusable interfaces, and robust backend collaboration."
              : "تطوير واجهات أمامية يركز على البنية البرمجية والمكونات القابلة لإعادة الاستخدام والتعاون الوثيق مع فرق الخلفية."
          }}
        </p>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
      >
        <div
          v-for="item in CAPABILITIES"
          :key="item.id"
          class="p-4 md:p-6 rounded-xl md:rounded-2xl border border-border bg-surface transition-all duration-(--duration-fast) hover:border-border/80 flex md:block items-start gap-3"
        >
          <div
            class="md:w-10 md:h-10 md:rounded-xl md:bg-accent-soft md:border md:border-accent/30 text-accent-ink flex items-center justify-center md:mb-4 shrink-0 mt-0.5 md:mt-0"
          >
            <LazyVAppIcon :name="item.icon" class="w-5 h-5" />
          </div>
          <div>
            <h3
              class="font-headline text-body-md md:text-title-lg font-bold text-text-primary md:mb-2"
            >
              {{ t(item.title) }}
            </h3>
            <p
              class="text-body-sm text-text-secondary leading-relaxed mt-1 md:mt-0"
            >
              {{ t(item.description) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { CAPABILITIES } from "@/data/home";

const { locale, t } = useLocale();

const sectionRef = ref<HTMLElement | null>(null);

const { isVisible } = useRevealOnce(sectionRef);
</script>