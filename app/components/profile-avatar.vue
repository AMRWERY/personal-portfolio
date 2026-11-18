<template>
  <!-- Compact Circular Header Variant (28–32px) -->
  <div
    v-if="variant === 'compact'"
    class="w-7 h-7 md:w-8 md:h-8 rounded-full bg-accent-soft border border-accent/40 overflow-hidden flex items-center justify-center shrink-0 transition-transform duration-(--duration-fast) group-hover:scale-105"
  >
    <img
      v-if="showRealImage()"
      :src="src"
      :alt="alt"
      class="w-full h-full object-cover object-top"
      @error="hasImageError = true"
    />
    <span v-else class="font-headline font-bold text-accent-ink text-label-sm">
      {{ monogram }}
    </span>
  </div>

  <!-- Editorial 4:5 Portrait Frame (Home Hero & About) -->
  <div
    v-else
    class="relative w-64 sm:w-[300px] lg:w-full lg:max-w-[340px] aspect-4/5 rounded-xl lg:rounded-2xl bg-surface border border-border shadow-xl lg:shadow-2xl overflow-hidden flex flex-col items-center justify-between text-center"
    :class="showRealImage() ? '' : 'p-5 lg:p-6'"
  >
    <img
      v-if="showRealImage()"
      :src="src"
      :alt="alt"
      class="w-full h-full object-cover object-top"
      @error="hasImageError = true"
    />

    <!-- Final-Size AM Monogram Fallback -->
    <template v-else>
      <div class="flex flex-col items-center my-auto">
        <div
          class="w-20 h-20 lg:w-24 lg:h-24 rounded-xl lg:rounded-2xl bg-background border border-border flex items-center justify-center mb-3 lg:mb-4 shadow-inner"
        >
          <span
            class="font-headline text-headline-lg lg:text-display-lg font-bold text-accent-ink tracking-tighter"
          >
            {{ monogram }}
          </span>
        </div>
        <p class="font-headline text-headline-sm font-bold text-text-primary">
          {{ name }}
        </p>
        <p class="text-body-sm text-text-secondary mt-0.5 lg:mt-1 font-medium">
          {{ role }}
        </p>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { Props } from "~/types/profile-avatar";

const props = withDefaults(defineProps<Props>(), {
  variant: "hero",
  src: "",
  alt: "Portrait of Amr Mohamed",
  monogram: "AM",
  name: "Amr Mohamed",
  role: "Frontend Developer",
});

const hasImageError = ref(false);

const showRealImage = () => Boolean(props.src) && !hasImageError.value;
</script>