<template>
  <LazyVButton
    :variant="variant"
    :size="size"
    :aria-label="
      theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
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
</script>