import type { WorkProject } from "@/types/portfolio";
import { CASE_STUDIES } from "@/data/case-studies";

const PROFESSIONAL_CODE95 = {
  en: "Professional · Code95",
  ar: "احترافي · Code95",
};
const PROFESSIONAL_KABRET = {
  en: "Professional · Kabret",
  ar: "احترافي · Kabret",
};
const PERSONAL_BADGE = { en: "Personal Project", ar: "مشروع شخصي" };
const PERSONAL_ROLE = { en: "Personal", ar: "شخصي" };
const FREELANCE_ROLE = {
  en: "Freelance Developer",
  ar: "مطور مستقل",
};
const FRONTEND_ROLE = { en: "Frontend Developer", ar: "مطور واجهات أمامية" };

const LIVE = { en: "Live", ar: "المعاينة" };
const CODE = { en: "Code", ar: "الكود" };

const BASE_PROJECTS: WorkProject[] = [
  // 1 ─────────────────────────────────────────────────────────────
  {
    slug: "lexus-egypt",
    title: "Lexus Egypt — Official Website",
    category: "professional",
    featured: true,
    status: "In progress",
    categoryBadge: PROFESSIONAL_CODE95,
    role: { en: "Project Owner", ar: "مالك التنفيذ" },
    period: { en: "Jul 2025 – Present", ar: "يوليو 2025 – الآن" },
    summary: {
      en: "Owns the frontend of the new Lexus Egypt website from project setup and architecture through UI development and API integration toward launch.",
      ar: "يتولى تطوير الواجهة الأمامية لموقع لكزس مصر الجديد من التأسيس والبنية البرمجية وصولاً إلى بناء الواجهات وربط واجهات البرمجة تمهيداً للإطلاق.",
    },
    highlight: {
      label: { en: "Key Highlights:", ar: "أبرز النقاط:" },
      text: {
        en: "Created frontend from scratch, established component foundations, and leads backend integration.",
        ar: "بناء الواجهة الأمامية من الصفر، وإرساء أساس المكونات، وقيادة التكامل مع الخلفية.",
      },
    },
    stack: ["Nuxt.js", "TypeScript", "REST API", "Tailwind CSS"],
    links: [
      {
        kind: "brand",
        label: { en: "Live Site (Brand)", ar: "الموقع الرسمي" },
        href: "https://www.lexus.com.eg",
      },
    ],
  },
  // 2 ─────────────────────────────────────────────────────────────
  {
    slug: "marca-store",
    title: "Marca Store — E-Commerce",
    category: "freelance",
    featured: true,
    categoryBadge: {
      en: "Freelance · Egypt & KSA",
      ar: "عمل حر · مصر والسعودية",
    },
    role: FREELANCE_ROLE,
    period: { en: "May 2025 – Nov 2025", ar: "مايو 2025 – نوفمبر 2025" },
    summary: {
      en: "Two-app e-commerce frontend for Egypt and Saudi Arabia, delivering a customer storefront and separate admin app connected to Firebase.",
      ar: "واجهة تجارة إلكترونية من تطبيقين لمصر والسعودية: متجر للعملاء وتطبيق إدارة منفصل مرتبطان بخدمة Firebase.",
    },
    highlight: {
      label: { en: "Delivered Metrics:", ar: "ما تم تسليمه:" },
      text: {
        en: "2 apps, 30 pages, 46 reusable components, 21 Pinia stores, 3 account roles (Admin/Employee/Merchant), full Arabic RTL.",
        ar: "تطبيقان، 30 صفحة، 46 مكوناً قابلاً لإعادة الاستخدام، 21 مخزن Pinia، 3 أدوار (مدير/موظف/تاجر)، ودعم كامل للعربية RTL.",
      },
    },
    stack: ["Vue.js", "Vite", "Pinia", "Firebase", "vue-i18n"],
    links: [
      {
        kind: "live",
        label: { en: "Live Store", ar: "المتجر" },
        detailLabel: { en: "Visit Live Storefront", ar: "زيارة المتجر المباشر" },
        href: "https://marca-store-user.vercel.app",
      },
      {
        kind: "repo",
        label: { en: "Store Repo", ar: "مستودع المتجر" },
        detailLabel: { en: "Storefront Repository", ar: "مستودع المتجر" },
        href: "https://github.com/AMRWERY/Marca-Store---user",
      },
      {
        kind: "repo",
        label: { en: "Admin Repo", ar: "مستودع الإدارة" },
        detailLabel: { en: "Admin Repository", ar: "مستودع لوحة الإدارة" },
        href: "https://github.com/AMRWERY/Marca-Store---admin",
      },
    ],
  },
  // 3 ─────────────────────────────────────────────────────────────
  {
    slug: "abdal",
    title: "Abdal — Recruitment Services Platform",
    category: "professional",
    categoryBadge: PROFESSIONAL_CODE95,
    role: FRONTEND_ROLE,
    period: { en: "Jul 2025 – Present", ar: "يوليو 2025 – الآن" },
    summary: {
      en: "Develops and maintains the customer-facing platform for a Saudi recruitment services firm. Integrated Visa, Mada, and STC Pay payment gateways.",
      ar: "يطوّر ويصون منصة العملاء لشركة سعودية لخدمات الاستقدام، مع دمج بوابات الدفع Visa وMada وSTC Pay.",
    },
    stack: ["Vue.js", "REST API", "Payment Gateway", "Bootstrap"],
    links: [
      {
        kind: "live",
        label: { en: "abdal.sa", ar: "abdal.sa" },
        href: "https://abdal.sa",
      },
    ],
  },
  // 4 ─────────────────────────────────────────────────────────────
  {
    slug: "toyota-egypt",
    title: "Toyota Egypt — Official Website",
    category: "professional",
    categoryBadge: PROFESSIONAL_CODE95,
    role: FRONTEND_ROLE,
    period: { en: "Jul 2025 – Present", ar: "يوليو 2025 – الآن" },
    summary: {
      en: "Maintains and improves the official Toyota Egypt website, resolving online payment flow issues and diagnosing frontend bugs for optimal stability.",
      ar: "يصون ويحسّن موقع تويوتا مصر الرسمي، ويعالج مشكلات مسار الدفع الإلكتروني ويشخّص أخطاء الواجهة لضمان الاستقرار.",
    },
    stack: ["Nuxt.js", "REST API", "Payment Gateway", "Tailwind CSS"],
    links: [
      {
        kind: "live",
        label: { en: "toyota.com.eg", ar: "toyota.com.eg" },
        href: "https://toyota.com.eg",
      },
    ],
  },
  // 5 ─────────────────────────────────────────────────────────────
  {
    slug: "attijariwafa-bank",
    title: "Attijariwafa Bank Egypt",
    category: "professional",
    categoryBadge: PROFESSIONAL_CODE95,
    role: FRONTEND_ROLE,
    period: { en: "Jul 2025 – Present", ar: "يوليو 2025 – الآن" },
    summary: {
      en: "Develops new features and maintains the website frontend based on business requirements. Enhanced UI components and fixed bugs for stability.",
      ar: "يطوّر ميزات جديدة ويصون واجهة الموقع وفق متطلبات العمل، مع تحسين مكونات الواجهة ومعالجة الأخطاء لضمان الاستقرار.",
    },
    stack: ["Nuxt.js", "TypeScript", "REST API", "Tailwind CSS"],
    links: [
      {
        kind: "live",
        label: { en: "attijariwafabank.com.eg", ar: "attijariwafabank.com.eg" },
        href: "https://attijariwafabank.com.eg",
      },
    ],
  },
  // 6 ─────────────────────────────────────────────────────────────
  {
    slug: "jai-dashboard",
    title: "Jai Dashboard — Admin Dashboard",
    category: "professional",
    categoryBadge: PROFESSIONAL_KABRET,
    role: FRONTEND_ROLE,
    period: { en: "Jan 2024 – May 2025", ar: "يناير 2024 – مايو 2025" },
    summary: {
      en: "Built and maintained admin dashboard features, working with backend developers to connect screens to REST APIs. Built reusable UI modules.",
      ar: "بنى وصان ميزات لوحة التحكم، وعمل مع مطوري الخلفية لربط الشاشات بواجهات REST، وأنشأ وحدات واجهة قابلة لإعادة الاستخدام.",
    },
    stack: ["Vue.js", "TypeScript", "REST API", "Vuetify"],
    links: [],
    privateNote: { en: "Internal Enterprise", ar: "نظام داخلي للمؤسسة" },
  },
  // 7 ─────────────────────────────────────────────────────────────
  {
    slug: "treat-dashboard",
    title: "Treat Dashboard — Admin Dashboard",
    category: "professional",
    categoryBadge: PROFESSIONAL_KABRET,
    role: FRONTEND_ROLE,
    period: { en: "Jan 2024 – May 2025", ar: "يناير 2024 – مايو 2025" },
    summary: {
      en: "Built and maintained admin dashboard features and connected frontend with backend services using Nuxt.js, TypeScript, and Vuetify.",
      ar: "بنى وصان ميزات لوحة التحكم وربط الواجهة بخدمات الخلفية باستخدام Nuxt.js وTypeScript وVuetify.",
    },
    stack: ["Nuxt.js", "TypeScript", "REST API", "Vuetify"],
    links: [],
    privateNote: { en: "Internal Enterprise", ar: "نظام داخلي للمؤسسة" },
  },
  // 8 ─────────────────────────────────────────────────────────────
  {
    slug: "lugar-store",
    title: "Lugar Store — Furniture E-Commerce",
    category: "freelance",
    categoryBadge: {
      en: "Freelance · Cairo, Egypt",
      ar: "عمل حر · القاهرة، مصر",
    },
    role: FREELANCE_ROLE,
    period: { en: "Dec 2024 – Feb 2025", ar: "ديسمبر 2024 – فبراير 2025" },
    summary: {
      en: "Built from scratch in 3 months across 271 commits: customer shopping flow and admin panel. Catalog, cart, wishlist, checkout, and Arabic RTL.",
      ar: "بُني من الصفر خلال 3 أشهر عبر 271 تعديلاً: تجربة التسوق ولوحة الإدارة، مع الكتالوج والسلة والمفضلة والدفع ودعم العربية RTL.",
    },
    stack: ["Nuxt.js", "Pinia", "Nuxt i18n", "Firebase"],
    links: [
      {
        kind: "live",
        label: LIVE,
        href: "https://lugar-store-furniture.vercel.app",
      },
      {
        kind: "repo",
        label: CODE,
        href: "https://github.com/AMRWERY/lugar-Store-Furniture-",
      },
    ],
  },
  // 9 ─────────────────────────────────────────────────────────────
  {
    slug: "travel-booking",
    title: "Travel Booking — O Tech Company",
    category: "freelance",
    categoryBadge: {
      en: "Freelance · Kuwait (Remote)",
      ar: "عمل حر · الكويت (عن بُعد)",
    },
    role: FREELANCE_ROLE,
    period: { en: "Oct 2023 – Dec 2023", ar: "أكتوبر 2023 – ديسمبر 2023" },
    summary: {
      en: "Developed and maintained frontend features for a travel booking app, collaborating with the client's backend team on REST API integration.",
      ar: "طوّر وصان ميزات الواجهة لتطبيق حجز السفر، وتعاون مع فريق الخلفية لدى العميل في ربط واجهات REST.",
    },
    stack: ["Vue.js", "Bootstrap", "REST API"],
    links: [],
    privateNote: { en: "Client Private", ar: "مشروع خاص بالعميل" },
  },
  // 10 ────────────────────────────────────────────────────────────
  {
    slug: "gym-management",
    title: "Gym Management Dashboard — ASAGTC",
    category: "freelance",
    categoryBadge: {
      en: "Freelance · Cairo, Egypt",
      ar: "عمل حر · القاهرة، مصر",
    },
    role: FREELANCE_ROLE,
    period: { en: "Apr 2023 – Sep 2023", ar: "أبريل 2023 – سبتمبر 2023" },
    summary: {
      en: "Built 100+ views and 38 Vuex store modules with real-time updates via Pusher & Laravel Echo, PDF/Excel/CSV exports, and commitlint standards.",
      ar: "بنى أكثر من 100 واجهة و38 وحدة Vuex مع تحديثات فورية عبر Pusher وLaravel Echo، وتصدير PDF/Excel/CSV، ومعايير commitlint.",
    },
    stack: ["Vue.js", "Vuex", "Pusher", "Tailwind CSS"],
    links: [
      {
        kind: "repo",
        label: CODE,
        href: "https://github.com/AMRWERY/gym-management",
      },
    ],
  },
  // 11 ────────────────────────────────────────────────────────────
  {
    slug: "al-quran",
    title: "Al-Quran — Quran Reader & Audio",
    category: "personal",
    categoryBadge: PERSONAL_BADGE,
    role: PERSONAL_ROLE,
    period: { en: "Aug 2026", ar: "أغسطس 2026" },
    summary: {
      en: "Quran reading and listening application loading Surahs and recitations from public REST APIs. 22 pages, 18 reusable components, and audio streaming.",
      ar: "تطبيق لقراءة القرآن والاستماع إليه يحمّل السور والتلاوات من واجهات REST عامة: 22 صفحة و18 مكوناً وبث صوتي.",
    },
    stack: ["Nuxt.js", "TypeScript", "Tailwind CSS v4", "Pinia"],
    links: [
      { kind: "live", label: LIVE, href: "https://al-quran-silk.vercel.app" },
      {
        kind: "repo",
        label: CODE,
        href: "https://github.com/AMRWERY/Al-Quran",
      },
    ],
  },
  // 12 ────────────────────────────────────────────────────────────
  {
    slug: "ship-it",
    title: "Ship-IT — E-Commerce Platform",
    category: "personal",
    categoryBadge: PERSONAL_BADGE,
    role: PERSONAL_ROLE,
    period: { en: "Jan 2025 – Mar 2025", ar: "يناير 2025 – مارس 2025" },
    summary: {
      en: "Complete platform with customer storefront and admin dashboard. 15 pages, 33 reusable components, 14 stores across 293 commits, and Arabic RTL.",
      ar: "منصة متكاملة بمتجر للعملاء ولوحة إدارة: 15 صفحة و33 مكوناً و14 مخزناً عبر 293 تعديلاً، مع دعم العربية RTL.",
    },
    stack: ["Nuxt.js", "Pinia", "VeeValidate", "Firebase"],
    links: [
      {
        kind: "live",
        label: LIVE,
        href: "https://ship-it-final.vercel.app/en",
      },
      {
        kind: "repo",
        label: CODE,
        href: "https://github.com/AMRWERY/ship-it-final-",
      },
    ],
  },
  // 13 ────────────────────────────────────────────────────────────
  {
    slug: "cospora",
    title: "Cospora — Cosmetics Platform",
    category: "personal",
    categoryBadge: PERSONAL_BADGE,
    role: PERSONAL_ROLE,
    period: { en: "Nov 2024 – Dec 2024", ar: "نوفمبر 2024 – ديسمبر 2024" },
    summary: {
      en: "Cosmetics e-commerce platform with customer and admin interfaces. 18 pages, 43 reusable components, ApexCharts data charts, and SEO with useHead.",
      ar: "منصة تجارة إلكترونية لمستحضرات التجميل بواجهتين للعميل والإدارة: 18 صفحة و43 مكوناً ورسوم ApexCharts وتهيئة SEO عبر useHead.",
    },
    stack: ["Nuxt.js", "ApexCharts", "FormKit", "Firebase"],
    links: [
      { kind: "live", label: LIVE, href: "https://cospora.vercel.app" },
      {
        kind: "repo",
        label: CODE,
        href: "https://github.com/AMRWERY/Cospora",
      },
    ],
  },
  // 14 ────────────────────────────────────────────────────────────
  {
    slug: "islam-app",
    title: "Islam App — Islamic Web Application",
    category: "personal",
    categoryBadge: PERSONAL_BADGE,
    role: PERSONAL_ROLE,
    period: { en: "Jan 2024", ar: "يناير 2024" },
    summary: {
      en: "Islamic content web application using public REST API data. 4 pages and 7 reusable components built with Nuxt.js, Pinia, and Headless UI.",
      ar: "تطبيق ويب للمحتوى الإسلامي يعتمد على بيانات واجهات REST عامة: 4 صفحات و7 مكونات مبنية باستخدام Nuxt.js وPinia وHeadless UI.",
    },
    stack: ["Nuxt.js", "Pinia", "Headless UI", "REST API"],
    links: [
      { kind: "live", label: LIVE, href: "https://islam-app-nuxt.vercel.app" },
      {
        kind: "repo",
        label: CODE,
        href: "https://github.com/AMRWERY/islam-app-nuxt",
      },
    ],
  },
  // 15 ────────────────────────────────────────────────────────────
  {
    slug: "movie-app",
    title: "Movie App",
    category: "personal",
    categoryBadge: PERSONAL_BADGE,
    role: PERSONAL_ROLE,
    period: { en: "Oct 2023", ar: "أكتوبر 2023" },
    summary: {
      en: "Movie search application fetching titles, posters, release years, and plot summaries from the OMDb API. Built with Vue.js, Vite, and Vue Router.",
      ar: "تطبيق للبحث عن الأفلام يجلب العناوين والملصقات وسنوات الإصدار وملخصات القصة من OMDb API، مبني باستخدام Vue.js وVite وVue Router.",
    },
    stack: ["Vue.js", "Vite", "Vue Router", "OMDb API"],
    links: [
      {
        kind: "live",
        label: LIVE,
        href: "https://movie-app-delta-ruby.vercel.app",
      },
      {
        kind: "repo",
        label: CODE,
        href: "https://github.com/AMRWERY/movie-app",
      },
    ],
  },
];

export const WORK_PROJECTS: WorkProject[] = BASE_PROJECTS.map((project) => ({
  ...project,
  caseStudy: CASE_STUDIES[project.slug],
}));

export const getProjectBySlug = (slug: string): WorkProject | undefined =>
  WORK_PROJECTS.find((project) => project.slug === slug);

/** Previous/next project in catalog order, wrapping around at the ends. */
export function getAdjacentProjects(slug: string): {
  previous: WorkProject;
  next: WorkProject;
} {
  const index = Math.max(
    0,
    WORK_PROJECTS.findIndex((project) => project.slug === slug),
  );
  const total = WORK_PROJECTS.length;
  return {
    previous: WORK_PROJECTS[(index - 1 + total) % total]!,
    next: WORK_PROJECTS[(index + 1) % total]!,
  };
}
