// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@vueuse/nuxt/module",
    "@vueuse/motion/nuxt",
    "@nuxtjs/i18n",
    "@nuxt/icon/module",
  ],
  compatibilityDate: "2025-07-15",
  runtimeConfig: {
    // Private, server-only. Set NUXT_CONTACT_WEBHOOK_URL to an endpoint that
    // accepts a JSON POST (Formspree, Web3Forms, Slack/Discord webhook, etc.).
    contactWebhookUrl: "",
  },
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  pinia: {
    storesDirs: ["./app/stores/**"],
  },
  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL || "",
    locales: [
      {
        code: "en",
        language: "en-US",
        file: "en.json",
        name: "English",
        dir: "ltr",
      },
      {
        code: "ar",
        language: "ar-EG",
        file: "ar.json",
        name: "عربي",
        dir: "rtl",
      },
    ],
    defaultLocale: "en",
    strategy: "prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      fallbackLocale: "en",
      redirectOn: "root",
    },
    bundle: {},
  },
  css: ["~/assets/css/main.css"],
  components: [
    {
      path: "components",
      // path: resolve(layerDir, "components"),
      pathPrefix: false,
    },
  ],
  app: {
    head: {
      title: "Amr Mohamed | Personal Portfolio",
      script: [
        {
          // Apply the theme before first paint (stored choice, else device preference)
          // so there is no light/dark flash. Mirrors useTheme()/useDark storage key.
          innerHTML: `try{var s=localStorage.getItem('portfolio-theme-mode');var d=s==='dark'||(s!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d)}catch(e){}`,
          tagPosition: "head",
        },
      ],
      noscript: [],
      link: [{}],
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
});