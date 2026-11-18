<template>
  <div class="space-y-1.5 md:space-y-2">
    <div class="flex items-center justify-between gap-3">
      <label
        :for="id"
        class="block font-headline text-label-sm md:text-label-md font-semibold text-text-primary"
      >
        {{ label }}
        <span v-if="required" class="text-accent-ink" aria-hidden="true">*</span>
      </label>
      <span v-if="optionalLabel" class="text-label-sm text-text-secondary">
        {{ optionalLabel }}
      </span>
    </div>

    <slot :described-by="error ? errorId : undefined" :invalid="!!error" />

    <p
      v-if="error"
      :id="errorId"
      role="alert"
      class="text-body-sm text-rose-600 dark:text-rose-400 font-medium flex items-center gap-1.5"
    >
      <LazyVAppIcon
        name="lucide:alert-circle"
        class="w-3.5 h-3.5 md:w-4 md:h-4"
      />
      <span>{{ error }}</span>
    </p>
  </div>
</template>

<script lang="ts" setup>
import type { Props } from "~/types/shared/VFormField";

const props = withDefaults(defineProps<Props>(), {
  required: false,
  optionalLabel: undefined,
  error: undefined,
});

const errorId = computed(() => `${props.id}-error`);
</script>
