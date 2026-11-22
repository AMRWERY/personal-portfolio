<template>
  <LazyVButton
    :variant="variant"
    :size="size"
    :aria-label="label"
    @click="toggleTheme"
  >
    <!--
      The server can't know the visitor's stored theme, so the icon is client-only
      (otherwise the server's "light" icon would be kept after hydration).
    -->
    <ClientOnly>
      <Transition
        mode="out-in"
        enter-active-class="transition-standard"
        enter-from-class="opacity-0 rotate-90 scale-50"
        leave-active-class="transition-fast"
        leave-to-class="opacity-0 -rotate-90 scale-50"
      >
        <LazyVAppIcon
          :key="theme"
          :name="theme === 'dark' ? 'lucide:moon' : 'lucide:sun'"
          class="w-4 h-4"
        />
      </Transition>
      <template #fallback>
        <span class="inline-block w-4 h-4" aria-hidden="true" />
      </template>
    </ClientOnly>
  </LazyVButton>
</template>

<script lang="ts" setup>
import type { Props } from "~/types/shared/VToggle";

const { t } = useLocale();

const { theme, toggleTheme } = useTheme();

withDefaults(defineProps<Props>(), {
  variant: "outline",
  size: "icon",
});

// Neutral label until mounted: the real one depends on the stored theme, which the
// server doesn't know. After mount it names the action the button will perform.
const isMounted = ref(false);

onMounted(() => {
  isMounted.value = true;
});

const label = computed(() => {
  if (!isMounted.value) return t("ui.vToggleTheme.toggle");
  return theme.value === "dark"
    ? t("ui.vToggleTheme.switchToLight")
    : t("ui.vToggleTheme.switchToDark");
});
</script>