<template>
  <div>
    <AboutIntro />

    <AboutApproach />

    <AboutExperience />

    <AboutSkills />

    <AboutEducationLanguages />

    <WorkCtaSection
      :eyebrow="'ui.aboutPage.collaborate'"
      :title="'ui.aboutPage.letsBuildSomethingReliableTogether'"
      :description="'ui.aboutPage.whetherYouHaveAnUpcoming'"
    />
  </div>
</template>

<script lang="ts" setup>
const { t } = useLocale();

useSeoMeta({
  title: () =>
    t('ui.aboutPage.aboutAmrMohamed'),
  description: () =>
    t('ui.aboutPage.frontendDeveloperInCairoWith'),
});
</script>
