import type {
  AboutApproachStep,
  AboutExperienceEntry,
  AboutSkillGroup,
  LocalizedText,
} from "@/types/portfolio";

/** Proper nouns / tool names read the same in both languages. */
const tech = (name: string): LocalizedText => ({ en: name, ar: name });

export const ABOUT_INTRO = {
  eyebrow: { en: "ABOUT", ar: "نبذة" },
  title: {
    en: "A little about how I build.",
    ar: "نبذة بسيطة عن طريقتي في البناء.",
  },
  bio: {
    en: "I'm Amr Mohamed, a frontend developer based in Cairo, Egypt. I have 3+ years of experience building Vue.js and Nuxt.js applications, from customer-facing websites and e-commerce storefronts to admin dashboards. I focus on maintainable interfaces, reusable components, API integration, and accessible Arabic/English experiences.",
    ar: "أنا عمرو محمد، مطور واجهات أمامية مقيم في القاهرة، مصر. لدي أكثر من 3 سنوات من الخبرة في بناء تطبيقات Vue.js وNuxt.js، بدءاً من مواقع العملاء ومتاجر التجارة الإلكترونية وصولاً إلى لوحات التحكم. أركّز على واجهات قابلة للصيانة ومكونات قابلة لإعادة الاستخدام وربط واجهات البرمجة وتجارب عربية/إنجليزية سهلة الوصول.",
  },
  facts: [
    {
      icon: "lucide:map-pin",
      text: { en: "Cairo, Egypt", ar: "القاهرة، مصر" },
    },
    {
      icon: "lucide:code",
      text: {
        en: "Vue.js · Nuxt.js · TypeScript",
        ar: "Vue.js · Nuxt.js · TypeScript",
      },
    },
    {
      icon: "lucide:languages",
      text: {
        en: "Native Arabic · Professional English",
        ar: "العربية لغة أم · إنجليزية بمستوى مهني",
      },
    },
  ],
} as const;

export const ABOUT_APPROACH: {
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  steps: AboutApproachStep[];
} = {
  eyebrow: { en: "METHODOLOGY", ar: "المنهجية" },
  title: { en: "Working approach", ar: "طريقة العمل" },
  description: {
    en: "A systematic engineering process from initial requirement discovery to live API integration and post-launch refinement.",
    ar: "عملية هندسية منظمة من اكتشاف المتطلبات الأولية حتى ربط واجهات البرمجة الفعلي والتحسين بعد الإطلاق.",
  },
  steps: [
    {
      id: "requirements",
      title: { en: "Requirements", ar: "المتطلبات" },
      description: {
        en: "Analyze product specifications, user journeys, edge cases, and business goals before committing to code.",
        ar: "تحليل مواصفات المنتج ورحلات المستخدم والحالات الطرفية وأهداف العمل قبل كتابة أي كود.",
      },
      tag: { en: "Discovery & Planning", ar: "الاكتشاف والتخطيط" },
    },
    {
      id: "architecture",
      title: { en: "Architecture", ar: "البنية البرمجية" },
      description: {
        en: "Establish modular Vue/Nuxt directory hierarchy, reusable component libraries, strict TypeScript types, and Pinia stores.",
        ar: "إرساء هيكل مجلدات معياري لمشاريع Vue/Nuxt ومكتبات مكونات قابلة لإعادة الاستخدام وأنواع TypeScript صارمة ومخازن Pinia.",
      },
      tag: { en: "Architecture & Tokens", ar: "البنية والمتغيرات" },
    },
    {
      id: "ui-apis",
      title: { en: "UI & APIs", ar: "الواجهات وواجهات البرمجة" },
      description: {
        en: "Implement responsive views, payment gateways, and asynchronous REST endpoints with proper loading and validation states.",
        ar: "تنفيذ واجهات متجاوبة وبوابات دفع ونقاط REST غير متزامنة مع حالات تحميل وتحقق سليمة.",
      },
      tag: { en: "Execution & Integration", ar: "التنفيذ والتكامل" },
    },
    {
      id: "delivery",
      title: { en: "Polish & Delivery", ar: "الصقل والتسليم" },
      description: {
        en: "Collaborate actively with backend teammates, squash live UI defects, polish RTL layouts, and guarantee delivery.",
        ar: "التعاون الفعّال مع فريق الخلفية ومعالجة أخطاء الواجهة المباشرة وصقل تخطيطات RTL وضمان التسليم.",
      },
      tag: { en: "Refinement & Delivery", ar: "التحسين والتسليم" },
    },
  ],
};

export const ABOUT_EXPERIENCE: {
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  entries: AboutExperienceEntry[];
} = {
  eyebrow: { en: "CAREER HISTORY", ar: "المسيرة المهنية" },
  title: { en: "Experience timeline", ar: "الخط الزمني للخبرة" },
  description: {
    en: "Track record across agency development, internal dashboards, and multi-market e-commerce platforms.",
    ar: "سجل من العمل في تطوير الوكالات ولوحات التحكم الداخلية ومنصات التجارة الإلكترونية متعددة الأسواق.",
  },
  entries: [
    {
      id: "code95",
      isCurrent: true,
      period: {
        en: "Jul 2025 – Present · Cairo, Egypt",
        ar: "يوليو 2025 – الآن · القاهرة، مصر",
      },
      title: {
        en: "Code95 Web Technologies",
        ar: "Code95 Web Technologies",
      },
      badge: { en: "Frontend Developer", ar: "مطور واجهات أمامية" },
      description: {
        en: "Leads frontend development for enterprise clients across automotive, banking, and recruitment industries. Owns project setups, UI architecture, payment gateway implementations, and REST API integration.",
        ar: "يقود تطوير الواجهات الأمامية لعملاء من المؤسسات في قطاعات السيارات والبنوك والاستقدام، ويتولى تأسيس المشاريع وبنية الواجهة وتنفيذ بوابات الدفع وربط واجهات REST.",
      },
      projectsLabel: {
        en: "Associated Client Projects:",
        ar: "مشاريع العملاء المرتبطة:",
      },
      projects: [
        {
          slug: "lexus-egypt",
          label: {
            en: "Lexus Egypt (Project Owner · In progress)",
            ar: "Lexus Egypt (مالك المشروع · قيد التنفيذ)",
          },
        },
        {
          slug: "abdal",
          label: {
            en: "Abdal (Visa / Mada / STC Pay)",
            ar: "Abdal (Visa / Mada / STC Pay)",
          },
        },
        {
          slug: "toyota-egypt",
          label: {
            en: "Toyota Egypt (Payment Flow)",
            ar: "Toyota Egypt (مسار الدفع)",
          },
        },
        {
          slug: "attijariwafa-bank",
          label: {
            en: "Attijariwafa Bank Egypt",
            ar: "Attijariwafa Bank Egypt",
          },
        },
      ],
    },
    {
      id: "kabret",
      period: {
        en: "Jan 2024 – May 2025 · Cairo, Egypt",
        ar: "يناير 2024 – مايو 2025 · القاهرة، مصر",
      },
      title: { en: "Kabret", ar: "Kabret" },
      badge: { en: "Frontend Developer", ar: "مطور واجهات أمامية" },
      description: {
        en: "Engineered and maintained internal admin dashboard features. Collaborated with backend developers to integrate complex data screens with REST APIs, built reusable Vuetify UI components, and debugged state synchronization issues.",
        ar: "طوّر وصان ميزات لوحات التحكم الإدارية الداخلية، وتعاون مع مطوري الخلفية لربط شاشات البيانات المعقدة بواجهات REST، وبنى مكونات Vuetify قابلة لإعادة الاستخدام، وعالج مشكلات مزامنة الحالة.",
      },
      projectsLabel: {
        en: "Associated Internal Projects:",
        ar: "المشاريع الداخلية المرتبطة:",
      },
      projects: [
        {
          label: {
            en: "Jai Dashboard (Admin Modules · Vuetify)",
            ar: "Jai Dashboard (وحدات الإدارة · Vuetify)",
          },
        },
        {
          label: {
            en: "Treat Dashboard (Nuxt.js · TypeScript)",
            ar: "Treat Dashboard (Nuxt.js · TypeScript)",
          },
        },
      ],
    },
    {
      id: "freelance",
      period: {
        en: "Apr 2023 – Nov 2025 · Part-Time & Independent",
        ar: "أبريل 2023 – نوفمبر 2025 · عمل جزئي ومستقل",
      },
      title: {
        en: "Freelance Frontend Developer",
        ar: "مطور واجهات أمامية مستقل",
      },
      badge: { en: "Contract Engagements", ar: "تعاقدات مستقلة" },
      description: {
        en: "Delivered custom web applications, multi-market e-commerce platforms, and real-time operations dashboards for clients in Egypt, Kuwait, and Saudi Arabia.",
        ar: "سلّم تطبيقات ويب مخصصة ومنصات تجارة إلكترونية متعددة الأسواق ولوحات عمليات لحظية لعملاء في مصر والكويت والسعودية.",
      },
      projectsLabel: {
        en: "Key Delivered Projects:",
        ar: "أبرز المشاريع المسلَّمة:",
      },
      projects: [
        {
          slug: "marca-store",
          label: {
            en: "Marca Store (2 apps · 30 pages · 46 components)",
            ar: "Marca Store (تطبيقان · 30 صفحة · 46 مكوناً)",
          },
        },
        {
          slug: "gym-management",
          label: {
            en: "Gym Management Dashboard (100+ views · Echo)",
            ar: "Gym Management Dashboard (+100 واجهة · Echo)",
          },
        },
        {
          slug: "lugar-store",
          label: {
            en: "Lugar Store (Furniture E-Commerce)",
            ar: "Lugar Store (تجارة إلكترونية للأثاث)",
          },
        },
        {
          label: {
            en: "Travel Booking Website — O Tech (Kuwait)",
            ar: "موقع حجز السفر — O Tech (الكويت)",
          },
        },
      ],
    },
  ],
};

export const ABOUT_SKILLS: {
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  groups: AboutSkillGroup[];
  specializations: { title: LocalizedText; items: LocalizedText[] };
} = {
  eyebrow: { en: "TOOLSET", ar: "الأدوات" },
  title: { en: "Technical skills", ar: "المهارات التقنية" },
  description: {
    en: "Verified technical proficiencies grouped by domain. Strictly no progress bars or decorative percentages.",
    ar: "مهارات تقنية موثقة مجمّعة حسب المجال، دون أشرطة تقدم أو نسب مئوية تزيينية.",
  },
  groups: [
    {
      id: "frontend-core",
      icon: "lucide:code",
      title: { en: "Frontend Core", ar: "أساسيات الواجهة الأمامية" },
      skills: [
        tech("Vue.js"),
        tech("Nuxt.js"),
        tech("Composition API"),
        tech("TypeScript"),
        tech("JavaScript (ES6+)"),
        tech("HTML5"),
        tech("CSS3"),
      ],
    },
    {
      id: "ui-styling",
      icon: "lucide:palette",
      title: { en: "UI & Styling", ar: "الواجهات والتنسيق" },
      skills: [
        tech("Tailwind CSS"),
        tech("Vuetify"),
        tech("Bootstrap"),
        tech("Headless UI"),
        { en: "Responsive Design", ar: "التصميم المتجاوب" },
      ],
    },
    {
      id: "state-forms",
      icon: "lucide:database",
      title: { en: "State, Routing & Forms", ar: "الحالة والتوجيه والنماذج" },
      skills: [
        tech("Pinia"),
        tech("Vuex"),
        tech("Vue Router"),
        tech("VeeValidate"),
        tech("Vuelidate"),
        tech("VueUse"),
      ],
    },
    {
      id: "apis-backend",
      icon: "lucide:server",
      title: { en: "APIs & Backend Services", ar: "واجهات البرمجة وخدمات الخلفية" },
      skills: [
        { en: "REST API Integration", ar: "ربط واجهات REST" },
        tech("Firebase"),
        tech("Supabase"),
        tech("Pusher"),
        tech("Laravel Echo"),
        { en: "Real-Time Updates", ar: "التحديثات اللحظية" },
      ],
    },
    {
      id: "i18n",
      icon: "lucide:globe",
      title: { en: "Internationalization (i18n)", ar: "التعريب (i18n)" },
      skills: [
        tech("vue-i18n"),
        tech("Nuxt i18n"),
        { en: "Arabic / English", ar: "العربية / الإنجليزية" },
        { en: "RTL Layouts", ar: "تخطيطات RTL" },
        { en: "Locale Switching", ar: "تبديل اللغة" },
      ],
    },
    {
      id: "tooling",
      icon: "lucide:terminal",
      title: { en: "Tooling & Workflow", ar: "الأدوات وسير العمل" },
      skills: [
        tech("Vite"),
        tech("Git"),
        tech("GitHub"),
        tech("GitLab"),
        tech("Husky"),
        tech("Commitlint"),
        tech("Vercel"),
      ],
    },
  ],
  specializations: {
    title: {
      en: "Additional Domain Specializations",
      ar: "تخصصات إضافية",
    },
    items: [
      {
        en: "Payment Gateway Integration (Visa, Mada, STC Pay)",
        ar: "ربط بوابات الدفع (Visa وMada وSTC Pay)",
      },
      {
        en: "Role-Based Access Control (RBAC)",
        ar: "التحكم بالوصول حسب الأدوار (RBAC)",
      },
      {
        en: "SEO Meta Management (useHead)",
        ar: "إدارة بيانات SEO الوصفية (useHead)",
      },
      {
        en: "ApexCharts Data Visualization",
        ar: "عرض البيانات عبر ApexCharts",
      },
      { en: "PDF / Excel / CSV Export", ar: "تصدير PDF / Excel / CSV" },
      { en: "Frontend Debugging", ar: "تصحيح أخطاء الواجهة الأمامية" },
      {
        en: "AI-Assisted Development (Cursor, Claude Code)",
        ar: "التطوير بمساعدة الذكاء الاصطناعي (Cursor وClaude Code)",
      },
    ],
  },
};

export const ABOUT_EDUCATION = {
  eyebrow: { en: "EDUCATION", ar: "التعليم" },
  title: { en: "Academic Background", ar: "الخلفية الأكاديمية" },
  degree: { en: "Bachelor of Law (LL.B.)", ar: "بكالوريوس الحقوق (LL.B.)" },
  school: { en: "Cairo University, Egypt", ar: "جامعة القاهرة، مصر" },
  graduated: { en: "Graduated 2012", ar: "تخرج عام 2012" },
};

export const ABOUT_LANGUAGES = {
  eyebrow: { en: "COMMUNICATION", ar: "التواصل" },
  title: { en: "Languages", ar: "اللغات" },
  items: [
    {
      name: { en: "Arabic", ar: "العربية" },
      level: { en: "Native", ar: "لغة أم" },
      highlight: true,
    },
    {
      name: { en: "English", ar: "الإنجليزية" },
      level: {
        en: "Professional working proficiency",
        ar: "كفاءة عمل مهنية",
      },
      highlight: false,
    },
  ],
};
