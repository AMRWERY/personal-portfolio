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

usePageSeo({
  title: () => t("ui.homePage.amrMohamedPersonalPortfolio"),
  description: () => t("ui.homePage.frontendDeveloperInCairoBuilding"),
  jsonLd: (abs) => [
    {
      "@type": "WebSite",
      "@id": abs("/#website"),
      name: "Amr Mohamed | Personal Portfolio",
      url: abs("/"),
      inLanguage: ["en", "ar"],
      author: { "@id": abs("/#person") },
    },
    personSchema(abs),
  ],
});
</script>