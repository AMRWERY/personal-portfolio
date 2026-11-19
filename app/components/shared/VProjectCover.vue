<template>
  <div
    class="absolute inset-0 flex flex-col items-center justify-center p-4 lg:p-6 text-center overflow-hidden"
  >
    <!-- Default background: shown whenever the project has no image (or it fails to load) -->
    <div class="project-cover-bg absolute inset-0" aria-hidden="true" />

    <img
      v-if="source && !failed"
      ref="img"
      :src="source"
      :alt="alt"
      class="absolute inset-0 w-full h-full object-cover transition-[opacity,scale] duration-(--duration-standard) group-hover:scale-[1.02]"
      :class="loaded ? 'opacity-100' : 'opacity-0'"
      @load="loaded = true"
      @error="failed = true"
    />

    <!-- Placeholder content (icon + title), only while there is no image -->
    <div v-if="!loaded" class="relative flex flex-col items-center">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  /** Image URL (e.g. /img/projects/name.png). Without it the default background is shown. */
  src?: string;
  alt: string;
}>();

const source = computed(() => props.src || undefined);

const img = ref<HTMLImageElement | null>(null);
const loaded = ref(false);
const failed = ref(false);

// The image can finish (or fail) before hydration, so the events above were missed
onMounted(() => {
  const el = img.value;
  if (!el?.complete) return;
  if (el.naturalWidth > 0) loaded.value = true;
  else failed.value = true;
});

watch(source, () => {
  loaded.value = false;
  failed.value = false;
});
</script>

<style scoped>
.project-cover-bg {
  background-color: var(--surface-elevated);
  background-image:
    radial-gradient(
      120% 90% at 85% 0%,
      color-mix(in srgb, var(--color-accent) 22%, transparent),
      transparent 60%
    ),
    linear-gradient(var(--border-subtle) 1px, transparent 1px),
    linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px);
  background-size:
    100% 100%,
    32px 32px,
    32px 32px;
  background-position:
    0 0,
    -1px -1px,
    -1px -1px;
}
</style>