<template>
  <div
    class="flex items-center gap-2 md:gap-2.5 overflow-x-auto no-scrollbar pb-1 md:flex-wrap md:overflow-visible"
    role="tablist"
    :aria-label="
      locale === 'en'
        ? 'Filter projects by category'
        : 'تصفية المشاريع حسب الفئة'
    "
  >
    <button
      v-for="option in options"
      :key="option.value"
      type="button"
      role="tab"
      :aria-selected="modelValue === option.value"
      class="shrink-0 inline-flex items-center gap-1.5 md:gap-2 px-3.5 py-1.5 md:px-4 md:py-2 rounded-full font-headline text-label-sm md:text-label-md border transition-all duration-(--duration-fast) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
      :class="
        modelValue === option.value
          ? 'font-semibold bg-accent text-on-accent border-accent'
          : 'font-medium bg-surface-elevated text-text-secondary border-border hover:border-accent hover:text-text-primary'
      "
      @click="emit('update:modelValue', option.value)"
    >
      <LazyVAppIcon
        v-if="modelValue === option.value"
        name="lucide:check"
        class="w-3 h-3 md:w-3.5 md:h-3.5"
      />
      <span>{{ t(option.label) }} ({{ option.count }})</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import type { WorkFilter, WorkFilterBarProps } from "@/types/work";

const { locale, t } = useLocale();

defineProps<WorkFilterBarProps & { modelValue: WorkFilter }>();

const emit = defineEmits<{
  "update:modelValue": [value: WorkFilter];
}>();
</script>
