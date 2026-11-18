<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
// Keep <html lang/dir> in sync with the active locale so Arabic renders right-to-left
const { locale } = useI18n();

useHead({
  htmlAttrs: {
    lang: () => locale.value,
    dir: () => (locale.value === "ar" ? "rtl" : "ltr"),
  },
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition:
    opacity var(--duration-standard) var(--ease-standard),
    translate var(--duration-standard) var(--ease-standard);
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  translate: 0 0.5rem;
}

.layout-enter-active,
.layout-leave-active {
  transition: opacity var(--duration-standard) var(--ease-standard);
}

.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}
</style>