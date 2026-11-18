<template>
  <div>
    <AboutIntro />

    <AboutApproach />

    <AboutExperience />

    <AboutSkills />

    <AboutEducationLanguages />

    <WorkCtaSection
      :eyebrow="{ en: 'COLLABORATE', ar: 'لنتعاون' }"
      :title="{
        en: 'Let\'s build something reliable together.',
        ar: 'لنبنِ معاً شيئاً موثوقاً.',
      }"
      :description="{
        en: 'Whether you have an upcoming project, need frontend consulting, or are hiring for a Vue.js/Nuxt.js role, I\'d love to connect.',
        ar: 'سواء كان لديك مشروع قادم أو تحتاج استشارة في الواجهات الأمامية أو توظف لدور Vue.js/Nuxt.js، يسعدني التواصل.',
      }"
    />
  </div>
</template>

<script lang="ts" setup>
const { locale } = useLocale();

useSeoMeta({
  title: () =>
    locale.value === "en"
      ? "About Amr Mohamed — Frontend Developer"
      : "عن عمرو محمد — مطور واجهات أمامية",
  description: () =>
    locale.value === "en"
      ? "Frontend developer in Cairo with 3+ years building Vue.js and Nuxt.js applications: websites, e-commerce storefronts, and admin dashboards."
      : "مطور واجهات أمامية في القاهرة بخبرة تتجاوز 3 سنوات في بناء تطبيقات Vue.js وNuxt.js: مواقع ومتاجر إلكترونية ولوحات تحكم.",
});
</script>
