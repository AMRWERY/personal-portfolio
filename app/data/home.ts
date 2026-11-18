import type {
  CapabilityItem,
  ExperiencePreviewItem,
  FeaturedProject,
  ImpactMetric,
  NavItem,
} from "@/types/portfolio";

export const PROFILE = {
  name: "Amr Mohamed",
  monogram: "AM",
  avatarSrc: "", // Set to '/images/avatar.webp' once supplied
  email: "amrmounir2@gmail.com",
  githubUrl: "https://github.com/AMRWERY",
  linkedinUrl: "https://www.linkedin.com/in/amr-mohamed-3a714b1a7",
};

export const NAV_ITEMS: NavItem[] = [
  { key: "home", label: { en: "Home", ar: "الرئيسية" }, to: "/" },
  { key: "work", label: { en: "Work", ar: "أعمالي" }, to: "/work" },
  { key: "about", label: { en: "About", ar: "نبذة عني" }, to: "/about" },
  { key: "contact", label: { en: "Contact", ar: "تواصل معي" }, to: "/contact" },
];

export const HERO_COPY = {
  eyebrow: {
    en: "FRONTEND DEVELOPER · CAIRO, EGYPT",
    ar: "مطور واجهات أمامية · القاهرة، مصر",
  },
  headline: {
    en: "I build thoughtful web experiences with Vue.js & Nuxt.js.",
    ar: "أبني تجارب ويب متقنة باستخدام Vue.js و Nuxt.js.",
  },
  supporting: {
    en: "Frontend Developer with 3+ years of experience building production websites, e-commerce platforms, and admin dashboards. Focused on Vue.js, Nuxt.js, TypeScript, reusable UI, and reliable API integration.",
    ar: "مطور واجهات أمامية بخبرة تتجاوز 3 سنوات في بناء المواقع الإنتاجية ومنصات التجارة الإلكترونية ولوحات التحكم، مع التركيز على Vue.js و Nuxt.js و TypeScript وبناء مكونات قابلة لإعادة الاستخدام وربط واجهات البرمجة.",
  },
  primaryCta: { en: "Explore my work", ar: "استكشف أعمالي" },
  secondaryCta: { en: "Get in touch", ar: "تواصل معي" },
  location: { en: "Based in Cairo, Egypt", ar: "مقيم في القاهرة، مصر" },
};

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    value: "3+",
    label: {
      en: "Years of frontend experience",
      ar: "سنوات خبرة في تطوير الواجهات",
    },
    context: { en: "Professional & Freelance", ar: "عمل احترافي ومستقل" },
    highlight: true,
  },
  {
    value: "30",
    label: {
      en: "Pages in Marca Store's two-app project",
      ar: "صفحة في مشروع متجر Marca Store",
    },
    context: { en: "Storefront & Admin", ar: "المتجر ولوحة الإدارة" },
  },
  {
    value: "46",
    label: {
      en: "Reusable components in Marca Store",
      ar: "مكوناً قابلاً لإعادة الاستخدام في Marca Store",
    },
    context: { en: "21 Pinia Stores · RTL", ar: "21 مخزن Pinia · دعم RTL" },
  },
  {
    value: "100+",
    label: {
      en: "Views in the Gym Management Dashboard",
      ar: "شاشة في لوحة إدارة الصالة الرياضية",
    },
    context: { en: "ASAGTC · Real-Time Echo", ar: "ASAGTC · تحديثات فورية" },
  },
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    slug: "lexus-egypt",
    title: "Lexus Egypt — Official Website",
    mediaLabel: "Lexus Egypt — Official Website",
    status: "In progress",
    categoryBadge: { en: "Professional · Code95", ar: "احترافي · Code95" },
    role: {
      en: "Frontend Developer — Project Owner",
      ar: "مطور واجهات أمامية — مالك التنفيذ",
    },
    summary: {
      en: "Owns the frontend from initial setup and architecture through UI development and API integration toward launch.",
      ar: "تولي تطوير الواجهة الأمامية من التأسيس والبنية البرمجية وصولاً إلى بناء الصفحات وربط واجهات البرمجة حتى الإطلاق.",
    },
    stack: ["Nuxt.js", "TypeScript", "Tailwind CSS"],
  },
  {
    slug: "marca-store",
    title: "Marca Store — E-Commerce Platform",
    mediaLabel: "Marca Store — Storefront & Admin",
    categoryBadge: {
      en: "Freelance · Egypt & KSA",
      ar: "عمل حر · مصر والسعودية",
    },
    role: {
      en: "Freelance Frontend Developer",
      ar: "مطور واجهات أمامية مستقل",
    },
    summary: {
      en: "Two-app e-commerce frontend for Egypt and Saudi Arabia, with 30 pages and 46 reusable components.",
      ar: "منصة تجارة إلكترونية من تطبيقين لمصر والسعودية تضم 30 صفحة و46 مكوناً قابلاً لإعادة الاستخدام.",
    },
    stack: ["Vue.js", "Pinia", "Firebase"],
  },
  {
    slug: "gym-management",
    title: "Gym Management Dashboard — ASAGTC",
    mediaLabel: "Gym Management Dashboard — ASAGTC",
    categoryBadge: {
      en: "Freelance · Cairo, Egypt",
      ar: "عمل حر · القاهرة، مصر",
    },
    role: {
      en: "Freelance Frontend Developer",
      ar: "مطور واجهات أمامية مستقل",
    },
    summary: {
      en: "Dashboard with 100+ views, real-time updates, and report exports. Integrated with backend REST APIs and Laravel Echo.",
      ar: "لوحة تحكم تضم أكثر من 100 شاشة وتحديثات فورية وتصدير التقارير مع تكامل REST API و Laravel Echo.",
    },
    stack: ["Vue.js", "Vuex", "Pusher"],
  },
  {
    slug: "abdal",
    title: "Abdal — Recruitment Services Platform",
    mediaLabel: "Abdal Recruitment Platform",
    categoryBadge: {
      en: "Professional · Saudi Arabia",
      ar: "احترافي · السعودية",
    },
    role: {
      en: "Frontend Developer — Code95",
      ar: "مطور واجهات أمامية — Code95",
    },
    summary: {
      en: "Saudi recruitment platform with Visa, Mada, and STC Pay integrations. Continuous UI bug fixing and feature enhancements.",
      ar: "منصة توظيف واستقدام سعودية مع تكامل Visa و Mada و STC Pay وإصلاح الأعطال وتطوير المزايا.",
    },
    stack: ["Vue.js", "REST API", "Bootstrap"],
  },
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    id: "vue-nuxt",
    icon: "lucide:layers",
    title: {
      en: "Vue.js & Nuxt.js Development",
      ar: "تطوير تطبيقات Vue.js و Nuxt.js",
    },
    description: {
      en: "Production SPAs and SSR web applications built with Vue 3 Composition API, Nuxt 3, and strict TypeScript patterns.",
      ar: "تطبيقات ويب إنتاجية باستخدام Vue 3 Composition API و Nuxt و TypeScript.",
    },
  },
  {
    id: "architecture",
    icon: "lucide:component",
    title: {
      en: "Reusable Components & Frontend Architecture",
      ar: "مكونات قابلة لإعادة الاستخدام وبنية الواجهات",
    },
    description: {
      en: "Structured component libraries, consistent state modules in Pinia, and maintainable Tailwind CSS token systems.",
      ar: "مكتبات مكونات منظمة وإدارة حالة واضحة عبر Pinia وأنظمة تصميم باستخدام Tailwind CSS.",
    },
  },
  {
    id: "ecommerce-dashboards",
    icon: "lucide:shopping-bag",
    title: {
      en: "E-Commerce & Dashboards",
      ar: "المتاجر الإلكترونية ولوحات التحكم",
    },
    description: {
      en: "Customer storefronts, complex filter catalogs, and comprehensive management dashboards with report exports.",
      ar: "واجهات متاجر إلكترونية متكاملة ولوحات تحكم إدارية تدعم تصدير التقارير.",
    },
  },
  {
    id: "rest-api",
    icon: "lucide:network",
    title: {
      en: "REST API Integration",
      ar: "ربط واجهات برمجة التطبيقات (REST API)",
    },
    description: {
      en: "Clean asynchronous API communication, error handling, and real-time events via Pusher and Laravel Echo.",
      ar: "ربط واجهات البرمجة ومعالجة الأخطاء والتحديثات الفورية عبر Pusher و Laravel Echo.",
    },
  },
  {
    id: "i18n-rtl",
    icon: "lucide:languages",
    title: {
      en: "Arabic / English & RTL Interfaces",
      ar: "واجهات عربية وإنجليزية ودعم RTL",
    },
    description: {
      en: "Full bilingual localization using vue-i18n and Nuxt i18n with consistent right-to-left alignment and typography.",
      ar: "توطين كامل باللغتين العربية والإنجليزية عبر vue-i18n و Nuxt i18n مع ضبط اتجاه RTL.",
    },
  },
  {
    id: "payments-rbac",
    icon: "lucide:shield-check",
    title: {
      en: "Payment Integrations & Role-Based Interfaces",
      ar: "بوابات الدفع والصلاحيات متعددة الأدوار",
    },
    description: {
      en: "Checkout flows with Visa, Mada, and STC Pay alongside multi-tier role permissions (Admin, Employee, Merchant).",
      ar: "تدفقات دفع عبر Visa و Mada و STC Pay مع واجهات مبنية على صلاحيات الأدوار.",
    },
  },
];

export const EXPERIENCE_PREVIEW: ExperiencePreviewItem[] = [
  {
    period: { en: "Jul 2025 – Present", ar: "يوليو 2025 – الآن" },
    company: "Code95 Web Technologies",
    role: { en: "Frontend Developer", ar: "مطور واجهات أمامية" },
    projectsSummary: {
      en: "Key projects: Lexus Egypt, Abdal, Toyota Egypt, Attijariwafa Bank Egypt.",
      ar: "أبرز المشاريع: Lexus Egypt، Abdal، Toyota Egypt، Attijariwafa Bank Egypt.",
    },
    isCurrent: true,
  },
  {
    period: { en: "Jan 2024 – May 2025", ar: "يناير 2024 – مايو 2025" },
    company: "Kabret",
    role: { en: "Frontend Developer", ar: "مطور واجهات أمامية" },
    projectsSummary: {
      en: "Key projects: Jai Dashboard, Treat Dashboard admin modules.",
      ar: "أبرز المشاريع: لوحة تحكم Jai، لوحة تحكم Treat.",
    },
  },
  {
    period: { en: "Apr 2023 – Nov 2025", ar: "أبريل 2023 – نوفمبر 2025" },
    company: "Freelance Frontend Projects",
    role: { en: "Part-time Engagements", ar: "مشاريع عمل حر" },
    projectsSummary: {
      en: "Key projects: Marca Store (2 apps), Gym Management Dashboard, Lugar Store.",
      ar: "أبرز المشاريع: Marca Store، لوحة إدارة الصالة الرياضية، Lugar Store.",
    },
  },
];

export const SKILLS_PREVIEW = [
  "Vue.js",
  "Nuxt.js",
  "TypeScript",
  "JavaScript",
  "Pinia",
  "Tailwind CSS",
  "REST APIs",
  "Firebase",
  "Vuex",
];