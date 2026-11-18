<template>
  <div>
    <hero-section />

    <impact-strip />

    <featured-work-section />

    <capabilities-section />

    <experience-preview-section />

    <skills-and-contact-section />
  </div>
</template>

<script lang="ts" setup>
const { t } = useLocale();

useSeoMeta({
  title: () =>
    t('ui.homePage.amrMohamedPersonalPortfolio'),
  description: () =>
    t('ui.homePage.frontendDeveloperInCairoBuilding'),
});
</script>