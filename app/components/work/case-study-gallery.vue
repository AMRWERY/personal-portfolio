<template>
  <section class="max-w-(--container-max) mx-auto px-5 lg:px-12 py-4 md:py-6">
    <div
      class="rounded-xl lg:rounded-2xl border border-border bg-surface overflow-hidden shadow-2xl"
    >
      <!-- 16:10 media stage -->
      <div
        class="relative w-full aspect-16/10 bg-surface-elevated flex flex-col items-center justify-center p-6 md:p-8 text-center"
        :class="hasGallery && 'border-b border-border'"
      >
        <img
          v-if="stageImage"
          :src="stageImage"
          :alt="stageTitle"
          class="absolute inset-0 w-full h-full object-cover"
        />

        <Transition
          mode="out-in"
          enter-active-class="transition-all duration-(--duration-standard) ease-standard"
          leave-active-class="transition-all duration-(--duration-fast) ease-standard"
          enter-from-class="opacity-0 translate-y-2"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div
            v-if="!stageImage"
            :key="activeIndex"
            class="flex flex-col items-center max-w-md space-y-2 md:space-y-3"
          >
            <div
              class="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-surface border border-border flex items-center justify-center text-accent-ink"
            >
              <LazyVAppIcon
                name="lucide:layout"
                class="w-6 h-6 md:w-8 md:h-8"
              />
            </div>
            <h2
              class="font-headline text-title-lg md:text-headline-sm font-bold text-text-primary text-balance"
            >
              {{ stageTitle }}
            </h2>
            <p
              v-if="stageDescription"
              class="text-body-sm text-text-secondary leading-relaxed"
            >
              {{ stageDescription }}
            </p>
            <div
              class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background border border-border text-label-sm text-text-secondary"
            >
              <LazyVAppIcon
                name="lucide:image"
                class="hidden md:block w-3.5 h-3.5 text-accent-ink"
              />
              <span>{{
                locale === "en"
                  ? "Add real project screenshot"
                  : "أضف لقطة شاشة حقيقية للمشروع"
              }}</span>
            </div>
          </div>
        </Transition>

        <div
          v-if="project.status"
          class="absolute top-3 md:top-5 start-3 md:start-5"
        >
          <LazyVProjectStatusBadge :status="project.status" />
        </div>
      </div>

      <!-- Gallery selector -->
      <div v-if="hasGallery" class="p-3 md:p-6 bg-surface">
        <div class="hidden md:flex items-center justify-between mb-4">
          <span
            class="text-label-sm font-semibold uppercase tracking-wider text-text-secondary"
          >
            {{
              locale === "en"
                ? "Interface Views & App Flows"
                : "واجهات المشروع وتدفقاته"
            }}
          </span>
          <span class="text-label-sm text-text-secondary">
            {{
              locale === "en"
                ? "Click thumbnail to preview stage"
                : "اضغط على المصغّرة للمعاينة"
            }}
          </span>
        </div>

        <!-- Desktop: thumbnail cards -->
        <div
          class="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-4"
          role="tablist"
          :aria-label="
            locale === 'en' ? 'Project screenshot gallery' : 'معرض لقطات المشروع'
          "
        >
          <button
            v-for="(item, index) in gallery"
            :key="index"
            type="button"
            role="tab"
            :aria-selected="activeIndex === index"
            class="group relative rounded-xl border-2 bg-surface-elevated p-3 text-start transition-all duration-(--duration-standard) ease-standard focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
            :class="
              activeIndex === index
                ? 'border-accent -translate-y-0.5'
                : 'border-border hover:border-accent/60'
            "
            @click="activeIndex = index"
          >
            <div
              class="aspect-16/10 bg-background rounded-lg border border-border mb-2.5 flex items-center justify-center transition-colors duration-(--duration-fast)"
              :class="
                activeIndex === index
                  ? 'text-accent-ink'
                  : 'text-text-secondary group-hover:text-accent-ink'
              "
            >
              <LazyVAppIcon :name="item.icon" class="w-5 h-5" />
            </div>
            <div
              class="font-headline text-label-md font-bold text-text-primary group-hover:text-accent-ink transition-colors"
            >
              {{ t(item.title) }}
            </div>
            <div class="text-label-sm text-text-secondary">
              {{ t(item.caption) }}
            </div>
            <span
              class="absolute top-2 end-2 w-2 h-2 rounded-full bg-accent transition-all duration-(--duration-panel) ease-panel"
              :class="activeIndex === index ? 'scale-100 opacity-100' : 'scale-0 opacity-0'"
              aria-hidden="true"
            />
          </button>
        </div>

        <!-- Mobile: scrollable chips -->
        <div
          class="md:hidden flex items-center gap-2 overflow-x-auto no-scrollbar"
          role="tablist"
          :aria-label="
            locale === 'en' ? 'Project screenshot gallery' : 'معرض لقطات المشروع'
          "
        >
          <button
            v-for="(item, index) in gallery"
            :key="index"
            type="button"
            role="tab"
            :aria-selected="activeIndex === index"
            class="shrink-0 px-3 py-1.5 rounded-lg border-2 bg-surface-elevated text-label-sm transition-colors duration-(--duration-standard) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
            :class="
              activeIndex === index
                ? 'border-accent text-accent-ink font-semibold'
                : 'border-border text-text-secondary font-medium'
            "
            @click="activeIndex = index"
          >
            {{ index + 1 }}. {{ t(item.title) }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { CaseStudyProps } from "@/types/work";

const props = defineProps<CaseStudyProps>();

const { locale, t } = useLocale();

const gallery = computed(() => props.project.caseStudy?.gallery ?? []);
const hasGallery = computed(() => gallery.value.length > 0);

const activeIndex = ref(0);
const activeItem = computed(() => gallery.value[activeIndex.value]);

const stageTitle = computed(() =>
  activeItem.value ? t(activeItem.value.stageTitle) : props.project.title,
);
const stageDescription = computed(() =>
  activeItem.value ? t(activeItem.value.stageDescription) : "",
);
const stageImage = computed(
  () => activeItem.value?.screenshotSrc ?? props.project.screenshotSrc,
);
</script>
