<template>
  <div
    class="max-w-(--container-max) mx-auto px-5 lg:px-12 py-10 md:py-20 w-full"
  >
    <!-- Intro -->
    <div class="max-w-2xl mb-8 md:mb-16 space-y-3 md:space-y-4">
      <LazyVEyebrowLabel with-dot>
        {{ locale === "en" ? "CONTACT" : "تواصل" }}
      </LazyVEyebrowLabel>

      <h1
        class="font-headline text-headline-xl-mobile md:text-display-lg-mobile lg:text-display-lg font-bold text-text-primary tracking-tight text-balance"
      >
        {{
          locale === "en"
            ? "Let's build something useful."
            : "لنبنِ شيئاً مفيداً."
        }}
      </h1>

      <p
        class="text-body-md md:text-body-lg text-text-secondary font-light text-pretty"
      >
        {{
          locale === "en"
            ? "Have a role, project, or collaboration in mind? Send me a message."
            : "لديك وظيفة أو مشروع أو فكرة للتعاون؟ أرسل لي رسالة."
        }}
      </p>
    </div>

    <!-- Channels first on mobile; channels left / form right on desktop -->
    <div
      class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start"
    >
      <ContactChannels class="lg:col-span-5" />
      <ContactForm class="lg:col-span-7" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { locale } = useLocale();

useSeoMeta({
  title: () =>
    locale.value === "en"
      ? "Contact — Amr Mohamed · Frontend Developer"
      : "تواصل — عمرو محمد · مطور واجهات أمامية",
  description: () =>
    locale.value === "en"
      ? "Get in touch with Amr Mohamed about frontend roles, Vue.js and Nuxt.js projects, or collaborations."
      : "تواصل مع عمرو محمد بخصوص الوظائف الأمامية ومشاريع Vue.js وNuxt.js أو التعاون.",
});
</script>
