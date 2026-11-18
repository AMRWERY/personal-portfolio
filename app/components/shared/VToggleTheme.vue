<template>
  <LazyVButton
    :variant="variant"
    :size="size"
    :aria-label="
      theme === 'dark'
        ? t('ui.vToggleTheme.switchToLight')
        : t('ui.vToggleTheme.switchToDark')
    "
    @click="toggleTheme"
  >
    <LazyVAppIcon
      :name="theme === 'dark' ? 'lucide:moon' : 'lucide:sun'"
      class="w-4 h-4"
    />
  </LazyVButton>
</template>

<script lang="ts" setup>
import type { Props } from "~/types/shared/VToggle";

withDefaults(defineProps<Props>(), {
  variant: "outline",
  size: "icon",
});

const { theme, toggleTheme } = useTheme();
const { t } = useLocale();
</script>