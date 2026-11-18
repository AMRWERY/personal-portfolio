<template>
  <div ref="rootRef" class="relative w-full sm:w-auto" @keydown.esc="close(true)">
    <LazyVButton
      variant="outline"
      class="w-full sm:w-auto"
      aria-haspopup="true"
      aria-controls="cv-download-list"
      :aria-expanded="open"
      @click="open = !open"
    >
      <LazyVAppIcon name="lucide:download" class="w-4 h-4" />
      <span>{{ locale === "en" ? "Download CV" : "تحميل السيرة الذاتية" }}</span>
      <LazyVAppIcon
        name="lucide:chevron-down"
        class="w-4 h-4 transition-transform duration-(--duration-fast) motion-reduce:transition-none"
        :class="open && 'rotate-180'"
      />
    </LazyVButton>

    <Transition
      enter-active-class="transition-ui duration-(--duration-fast) ease-standard motion-reduce:transition-none"
      enter-from-class="opacity-0 -translate-y-1"
      leave-active-class="transition-ui duration-(--duration-fast) ease-standard motion-reduce:transition-none"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <ul
        v-if="open"
        id="cv-download-list"
        class="absolute start-0 top-full mt-2 z-30 w-full sm:w-72 p-1.5 rounded-xl border border-border bg-surface shadow-xl"
      >
        <li v-for="file in CV_FILES" :key="file.format">
          <a
            :href="file.href"
            :download="file.filename"
            class="group/btn flex items-center gap-3 min-h-11 p-2.5 rounded-lg hover:bg-surface-elevated transition-colors duration-(--duration-fast) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            @click="open = false"
          >
            <span
              class="w-9 h-9 rounded-lg bg-accent-soft text-accent-ink flex items-center justify-center shrink-0"
            >
              <LazyVAppIcon name="lucide:file-text" class="w-4 h-4" />
            </span>
            <span class="min-w-0 flex-1">
              <span
                class="block text-body-sm font-semibold text-text-primary"
                dir="ltr"
                :class="locale === 'ar' && 'text-end'"
              >
                {{ t(file.label) }}
              </span>
              <span class="block text-label-sm font-normal normal-case tracking-normal text-text-secondary">
                {{ t(file.description) }}
              </span>
            </span>
            <LazyVAppIcon
              name="lucide:download"
              class="w-4 h-4 text-text-secondary group-hover/btn:text-accent-ink shrink-0 arrow-nudge-down"
            />
          </a>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
import { CV_FILES } from "@/data/home";

const { locale, t } = useLocale();

const rootRef = ref<HTMLElement | null>(null);
const open = ref(false);

function close(returnFocus = false): void {
  if (!open.value) return;
  open.value = false;
  if (returnFocus) rootRef.value?.querySelector("button")?.focus();
}

// Click/tap anywhere else dismisses the list
onClickOutside(rootRef, () => close());
</script>
