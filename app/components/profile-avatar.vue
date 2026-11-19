<template>
  <!-- Compact circle (header, 28–32px): a tighter crop on the face so it stays recognisable -->
  <span
    v-if="variant === 'compact'"
    class="hidden min-[480px]:flex w-7 h-7 md:w-8 md:h-8 rounded-full bg-accent-soft border border-accent/40 overflow-hidden items-center justify-center shrink-0 transition-transform duration-(--duration-fast) ease-standard group-hover:scale-105 motion-reduce:transition-none"
  >
    <img
      v-if="showRealImage()"
      :src="src"
      :alt="altText"
      width="32"
      height="32"
      class="w-full h-full object-cover max-w-none [transform:translate(-18%,79%)_scale(2.6)]"
      @error="hasImageError = true"
    />
    <span v-else class="font-headline font-bold text-accent-ink text-label-sm">
      {{ monogram }}
    </span>
  </span>

  <!-- Editorial 4:5 portrait (Home hero + About). Same photo, same crop, only the size differs. -->
  <div
    v-else
    class="relative aspect-4/5 rounded-2xl bg-surface border border-border shadow-xl overflow-hidden"
    :class="
      size === 'md'
        ? 'w-60 sm:w-72 md:w-[420px] lg:w-64 xl:w-80 2xl:w-[22rem]'
        : 'w-64 sm:w-[300px] md:w-[400px] lg:w-[340px]'
    "
  >
    <img
      v-if="showRealImage()"
      :src="src"
      :alt="altText"
      :width="size === 'md' ? 208 : 340"
      :height="size === 'md' ? 260 : 425"
      decoding="async"
      :loading="size === 'md' ? 'lazy' : 'eager'"
      :fetchpriority="size === 'md' ? 'auto' : 'high'"
      class="absolute inset-0 w-full h-full object-cover [object-position:78%_top]"
      @error="hasImageError = true"
    />

    <!-- Placeholder: the AM monogram inside the exact final frame -->
    <div
      v-else
      class="absolute inset-0 flex flex-col items-center justify-center text-center p-4"
    >
      <div
        class="rounded-xl bg-background border border-border flex items-center justify-center shadow-inner mb-3"
        :class="size === 'md' ? 'w-16 h-16' : 'w-20 h-20 lg:w-24 lg:h-24'"
      >
        <span
          class="font-headline font-bold text-accent-ink tracking-tighter"
          :class="
            size === 'md'
              ? 'text-headline-md'
              : 'text-headline-lg lg:text-display-lg'
          "
        >
          {{ monogram }}
        </span>
      </div>
      <p
        class="font-headline font-bold text-text-primary"
        :class="size === 'md' ? 'text-body-md' : 'text-headline-sm'"
      >
        {{ name }}
      </p>
      <p class="text-body-sm text-text-secondary mt-0.5 font-medium">
        {{ roleText }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Props } from "~/types/profile-avatar";

const props = withDefaults(defineProps<Props>(), {
  variant: "hero",
  size: "lg",
  src: "",
  monogram: "AM",
  name: "Amr Mohamed",
});

const { t } = useLocale();

// Defaults come from the locale files so the alt text / role follow the language
const altText = computed(() => props.alt ?? t("ui.profileAvatar.alt"));
const roleText = computed(() => props.role ?? t("ui.profileAvatar.role"));

const hasImageError = ref(false);

const showRealImage = () => Boolean(props.src) && !hasImageError.value;
</script>
