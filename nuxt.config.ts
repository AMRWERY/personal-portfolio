// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt/module",
    "@vueuse/motion/nuxt",
    "@nuxtjs/i18n",
    "@nuxt/icon/module",
  ],
  compatibilityDate: "2025-07-15",
  runtimeConfig: {
    // Private, server-only. Contact form messages are emailed through Gmail SMTP.
    // NUXT_GMAIL_USER         = your Gmail address (sender and recipient)
    // NUXT_GMAIL_APP_PASSWORD = a Google "App password" (needs 2-Step Verification)
    gmailUser: "",
    gmailAppPassword: "",
    public: {
      // Public origin used for canonical / Open Graph / sitemap URLs, e.g. https://amr.dev
      // Falls back to the host serving the request when empty.
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "",
    },
  },
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()],
  },
  i18n: {
    // Locale files, vue-i18n config and detector live in app/i18n (resolved from the project root)
    restructureDir: "app/i18n",
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
      link: [
        // Space Grotesk (variable, 300–700). preconnect first so the font request starts early.
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap",
        },
      ],
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