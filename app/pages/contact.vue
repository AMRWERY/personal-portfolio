<template>
  <div
    class="max-w-(--container-max) mx-auto px-5 lg:px-12 py-10 md:py-20 w-full"
  >
    <!-- Intro -->
    <div class="max-w-2xl mb-8 md:mb-16 space-y-3 md:space-y-4">
      <LazyVEyebrowLabel with-dot>
        {{ t('ui.contactPage.contact') }}
      </LazyVEyebrowLabel>

      <h1
        class="font-headline text-headline-xl-mobile md:text-display-lg-mobile lg:text-display-lg font-bold text-text-primary tracking-tight text-balance"
      >
        {{
          t('ui.contactPage.letsBuildSomethingUseful')
        }}
      </h1>

      <VWordReveal
        class="text-body-md md:text-body-lg text-text-secondary font-light text-pretty"
       :text="t('ui.contactPage.haveARoleProjectOr')" />
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
const { t } = useLocale();

useSeoMeta({
  title: () =>
    t('ui.contactPage.contactAmrMohamed'),
  description: () =>
    t('ui.contactPage.getInTouchWithAmr'),
});
</script>
