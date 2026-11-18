import type { CaseStudy, CaseStudyMetric } from "@/types/portfolio";

/**
 * Extra content for /work/[slug], keyed by project slug.
 * Only facts already present in the CV / project summaries belong here —
 * sections without an entry are simply not rendered on the page.
 */

/** Metric shorthand for numbers already stated in a project's summary. */
const metric = (
  value: string,
  en: string,
  ar: string,
  hintEn?: string,
  hintAr?: string,
): CaseStudyMetric => ({
  value,
  label: { en, ar },
  hint: hintEn && hintAr ? { en: hintEn, ar: hintAr } : undefined,
});

export const CASE_STUDIES: Record<string, CaseStudy> = {
  "lexus-egypt": {
    typeLabel: {
      en: "Professional · Official Website",
      ar: "احترافي · موقع رسمي",
    },
    market: { en: "Egypt", ar: "مصر" },
    deliverable: {
      en: "New Official Website (Frontend)",
      ar: "الموقع الرسمي الجديد (الواجهة الأمامية)",
    },
    intro: {
      en: "Owns the frontend from initial project setup, architecture, and workflow through UI component development and REST API integration. Leads ongoing development toward launch.",
      ar: "يتولى الواجهة الأمامية من تأسيس المشروع وبنيته وسير العمل، مروراً ببناء مكونات الواجهة وربط واجهات REST، ويقود التطوير المستمر نحو الإطلاق.",
    },
    contributions: [
      {
        icon: "lucide:layers",
        title: {
          en: "Frontend From Scratch",
          ar: "واجهة أمامية من الصفر",
        },
        text: {
          en: "Created the frontend from the ground up: project setup, architecture, and development workflow.",
          ar: "أنشأ الواجهة الأمامية من الأساس: تأسيس المشروع والبنية البرمجية وسير العمل.",
        },
      },
      {
        icon: "lucide:component",
        title: {
          en: "Component Foundations",
          ar: "أساس المكونات",
        },
        text: {
          en: "Established the component foundations the rest of the interface is built on.",
          ar: "أرسى أساس المكونات الذي تُبنى عليه بقية الواجهة.",
        },
      },
      {
        icon: "lucide:network",
        title: {
          en: "Backend Integration",
          ar: "التكامل مع الخلفية",
        },
        text: {
          en: "Leads integration with the backend REST APIs.",
          ar: "يقود التكامل مع واجهات REST الخاصة بالخلفية.",
        },
      },
    ],
    note: {
      en: "Project status: the work covers frontend architecture and development and remains actively in progress. The new website has not launched yet.",
      ar: "حالة المشروع: يشمل العمل بنية الواجهة الأمامية وتطويرها ولا يزال قيد التنفيذ. لم يُطلق الموقع الجديد بعد.",
    },
  },

  "marca-store": {
    typeLabel: {
      en: "Freelance · E-Commerce Platform",
      ar: "عمل حر · منصة تجارة إلكترونية",
    },
    market: { en: "Egypt & Saudi Arabia", ar: "مصر والسعودية" },
    deliverable: {
      en: "Two Production Web Applications",
      ar: "تطبيقان ويب إنتاجيان",
    },
    intro: {
      en: "Built the full frontend for a two-market e-commerce business across Egypt and Saudi Arabia. Delivered a customer-facing storefront alongside a comprehensive admin portal connected to Firebase for real-time inventory, order processing, and customer management.",
      ar: "بنى الواجهة الأمامية الكاملة لنشاط تجارة إلكترونية يخدم سوقي مصر والسعودية. سلّم متجراً موجهاً للعملاء ولوحة إدارة شاملة مرتبطة بخدمة Firebase لإدارة المخزون والطلبات والعملاء لحظياً.",
    },
    gallery: [
      {
        icon: "lucide:shopping-bag",
        title: { en: "Storefront Home", ar: "الصفحة الرئيسية للمتجر" },
        caption: { en: "Customer Interface", ar: "واجهة العميل" },
        stageTitle: {
          en: "Marca Store — Customer Storefront Preview",
          ar: "Marca Store — معاينة متجر العملاء",
        },
        stageDescription: {
          en: "Product catalog, category filters, cart, and bilingual Arabic/English checkout flow.",
          ar: "كتالوج المنتجات وفلاتر الفئات والسلة ومسار دفع ثنائي اللغة بالعربية والإنجليزية.",
        },
      },
      {
        icon: "lucide:layout-dashboard",
        title: { en: "Admin Dashboard", ar: "لوحة الإدارة" },
        caption: { en: "Orders & Products", ar: "الطلبات والمنتجات" },
        stageTitle: {
          en: "Marca Store — Admin Management Backoffice",
          ar: "Marca Store — لوحة الإدارة الخلفية",
        },
        stageDescription: {
          en: "Complete order fulfillment lifecycle, inventory tracking, and Firebase authentication.",
          ar: "دورة تنفيذ الطلبات كاملة وتتبع المخزون ومصادقة Firebase.",
        },
      },
      {
        icon: "lucide:users",
        title: { en: "Role Permissions", ar: "صلاحيات الأدوار" },
        caption: {
          en: "Admin/Employee/Merchant",
          ar: "مدير/موظف/تاجر",
        },
        stageTitle: {
          en: "Marca Store — Three-Tier Account Permissions",
          ar: "Marca Store — صلاحيات الحسابات بثلاثة مستويات",
        },
        stageDescription: {
          en: "Role-based dashboards restricting sensitive product manipulation for Admin, Employee, and Merchant.",
          ar: "لوحات مبنية على الأدوار تقيّد العمليات الحساسة على المنتجات لكل من المدير والموظف والتاجر.",
        },
      },
      {
        icon: "lucide:languages",
        title: { en: "Arabic RTL Layout", ar: "تخطيط العربية RTL" },
        caption: { en: "vue-i18n Alignment", ar: "محاذاة vue-i18n" },
        stageTitle: {
          en: "Marca Store — Arabic RTL Localization Layout",
          ar: "Marca Store — تخطيط التعريب بالعربية RTL",
        },
        stageDescription: {
          en: "Pixel-perfect right-to-left UI mirroring using vue-i18n and localized VeeValidate forms.",
          ar: "عكس دقيق للواجهة من اليمين إلى اليسار باستخدام vue-i18n ونماذج VeeValidate المعرّبة.",
        },
      },
    ],
    contributions: [
      {
        icon: "lucide:layers",
        title: {
          en: "Dual-Application Frontend Architecture",
          ar: "بنية واجهة أمامية بتطبيقين",
        },
        text: {
          en: "Architected two separate web clients from scratch using Vue.js and Vite: a customer shopping interface and an internal business admin portal.",
          ar: "صمّم عميلي ويب منفصلين من الصفر باستخدام Vue.js وVite: واجهة تسوق للعملاء وبوابة إدارة داخلية للأعمال.",
        },
      },
      {
        icon: "lucide:component",
        title: {
          en: "46 Modular Components & 21 Pinia Stores",
          ar: "46 مكوناً و21 مخزن Pinia",
        },
        text: {
          en: "Standardized UI elements across catalog cards, modals, checkout inputs, and dynamic charts with modular Pinia state management for cart, wishlist, auth, and order flow.",
          ar: "وحّد عناصر الواجهة عبر بطاقات الكتالوج والنوافذ وحقول الدفع والرسوم الديناميكية، مع إدارة حالة معيارية باستخدام Pinia للسلة والمفضلة والمصادقة ومسار الطلب.",
        },
      },
      {
        icon: "lucide:shield-check",
        title: {
          en: "Three-Tier Role-Based Access Control (RBAC)",
          ar: "تحكم بالوصول على ثلاثة مستويات (RBAC)",
        },
        text: {
          en: "Enforced granular permissions for Admin, Employee, and Merchant accounts within the management backoffice, restricting product manipulation and order approvals.",
          ar: "طبّق صلاحيات دقيقة لحسابات المدير والموظف والتاجر داخل لوحة الإدارة، مع تقييد تعديل المنتجات واعتماد الطلبات.",
        },
      },
      {
        icon: "lucide:languages",
        title: {
          en: "Bilingual Localization & Full RTL Support",
          ar: "تعريب ثنائي اللغة ودعم كامل لاتجاه RTL",
        },
        text: {
          en: "Integrated vue-i18n for English and Arabic with automated right-to-left layout switching, mirrored navigation, and localized validation rules with VeeValidate.",
          ar: "دمج vue-i18n للإنجليزية والعربية مع تبديل تلقائي لاتجاه التخطيط وتنقل معكوس وقواعد تحقق معرّبة عبر VeeValidate.",
        },
      },
    ],
    metrics: [
      metric("2", "Apps Delivered", "تطبيقات مُسلَّمة", "Storefront & Admin", "المتجر والإدارة"),
      metric("30", "Total Pages", "إجمالي الصفحات", "Both applications", "في التطبيقين"),
      metric("46", "Components", "مكوناً", "Reusable library", "مكتبة قابلة لإعادة الاستخدام"),
      metric("21", "Pinia Stores", "مخزن Pinia", "State management", "إدارة الحالة"),
    ],
    stack: [
      "Vue.js 3",
      "Vite",
      "Pinia",
      "Tailwind CSS",
      "vue-i18n",
      "VeeValidate",
      "Firebase",
      "REST APIs",
    ],
  },

  // Metrics below only restate numbers already given in each project's summary.
  "gym-management": {
    metrics: [
      metric("100+", "Views", "واجهة"),
      metric("38", "Vuex Store Modules", "وحدة Vuex"),
    ],
  },
  "lugar-store": {
    metrics: [
      metric("271", "Commits", "تعديلاً"),
      metric("3", "Months", "أشهر", "Built from scratch", "بُني من الصفر"),
    ],
  },
  "ship-it": {
    metrics: [
      metric("15", "Pages", "صفحة"),
      metric("33", "Components", "مكوناً"),
      metric("14", "Stores", "مخزناً"),
      metric("293", "Commits", "تعديلاً"),
    ],
  },
  cospora: {
    metrics: [
      metric("18", "Pages", "صفحة"),
      metric("43", "Components", "مكوناً"),
    ],
  },
  "al-quran": {
    metrics: [
      metric("22", "Pages", "صفحة"),
      metric("18", "Components", "مكوناً"),
    ],
  },
  "islam-app": {
    metrics: [
      metric("4", "Pages", "صفحات"),
      metric("7", "Components", "مكونات"),
    ],
  },
};
