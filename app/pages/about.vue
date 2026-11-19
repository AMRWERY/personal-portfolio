<template>
  <div>
    <about-intro />

    <about-approach />

    <about-experience />

    <about-skills />

    <about-education-languages />

    <work-cta-section
      :eyebrow="'ui.aboutPage.collaborate'"
      :title="'ui.aboutPage.letsBuildSomethingReliableTogether'"
      :description="'ui.aboutPage.whetherYouHaveAnUpcoming'"
    />
  </div>
</template>

<script lang="ts" setup>
const { t } = useLocale();

usePageSeo({
  title: () => t("ui.aboutPage.aboutAmrMohamed"),
  description: () => t("ui.aboutPage.frontendDeveloperInCairoWith"),
  type: "profile",
  jsonLd: (abs) => [
    {
      "@type": "ProfilePage",
      url: abs("/about"),
      mainEntity: personSchema(abs),
    },
  ],
});
</script>