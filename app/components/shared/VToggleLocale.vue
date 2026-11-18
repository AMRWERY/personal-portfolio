<template>
  <LazyVButton
    :variant="variant"
    :size="size"
    :aria-label="
      locale === 'en'
        ? 'Switch language to Arabic'
        : 'Switch language to English'
    "
    @click="toggleLocale"
  >
    {{ locale === "en" ? "ع" : "EN" }}
  </LazyVButton>
</template>

<script lang="ts" setup>
import type { Props } from "~/types/shared/VToggle";

withDefaults(defineProps<Props>(), {
  variant: "outline",
  size: "sm",
});

const { locale, toggleLocale } = useLocale();
</script>