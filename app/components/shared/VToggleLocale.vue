<template>
  <LazyVButton
    :variant="variant"
    :size="size"
    :aria-label="
      t('ui.vToggleLocale.switchLanguageToArabic')
    "
    @click="toggleLocale"
  >
    {{ t('ui.vToggleLocale.text') }}
  </LazyVButton>
</template>

<script lang="ts" setup>
import type { Props } from "~/types/shared/VToggle";

withDefaults(defineProps<Props>(), {
  variant: "outline",
  size: "sm",
});

const { toggleLocale, t } = useLocale();
</script>