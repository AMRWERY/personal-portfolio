import type { WorkProject } from "~/types/portfolio";
import { CASE_STUDIES } from "~/data/case-studies";

const BASE_PROJECTS: WorkProject[] = [
  {
    "slug": "lexus-egypt",
    "screenshotSrc": "/img/projects/Lexus.png",
    "title": "Lexus Egypt — Official Website",
    "category": "professional",
    "featured": true,
    "status": "In progress",
    "categoryBadge": "content.workProjects.lexusEgypt.categoryBadge",
    "role": "content.workProjects.lexusEgypt.role",
    "period": "content.workProjects.lexusEgypt.period",
    "summary": "content.workProjects.lexusEgypt.summary",
    "highlight": {
      "label": "content.workProjects.lexusEgypt.highlight.label",
      "text": "content.workProjects.lexusEgypt.highlight.text"
    },
    "stack": [
      "Nuxt.js",
      "TypeScript",
      "REST API",
      "Tailwind CSS"
    ],
    "links": [
      {
        "kind": "brand",
        "label": "content.workProjects.lexusEgypt.links.0.label",
        "href": "https://www.lexus.com.eg"
      }
    ]
  },
  {
    "slug": "toyota-egypt",
    "screenshotSrc": "/img/projects/Toyota-Egypt.png",
    "title": "Toyota Egypt — Official Website",
    "category": "professional",
    "categoryBadge": "content.workProjects.toyotaEgypt.categoryBadge",
    "role": "content.workProjects.toyotaEgypt.role",
    "period": "content.workProjects.toyotaEgypt.period",
    "summary": "content.workProjects.toyotaEgypt.summary",
    "stack": [
      "Nuxt.js",
      "REST API",
      "Payment Gateway",
      "Tailwind CSS"
    ],
    "links": [
      {
        "kind": "live",
        "label": "content.workProjects.toyotaEgypt.links.0.label",
        "href": "https://toyota.com.eg"
      }
    ]
  },
  {
    "slug": "attijariwafa-bank",
    "screenshotSrc": "/img/projects/Attijariwafa-Bank-Egypt.png",
    "title": "Attijariwafa Bank Egypt",
    "category": "professional",
    "categoryBadge": "content.workProjects.attijariwafaBank.categoryBadge",
    "role": "content.workProjects.attijariwafaBank.role",
    "period": "content.workProjects.attijariwafaBank.period",
    "summary": "content.workProjects.attijariwafaBank.summary",
    "stack": [
      "Nuxt.js",
      "TypeScript",
      "REST API",
      "Tailwind CSS"
    ],
    "links": [
      {
        "kind": "live",
        "label": "content.workProjects.attijariwafaBank.links.0.label",
        "href": "https://attijariwafabank.com.eg"
      }
    ]
  },
  {
    "slug": "abdal",
    "screenshotSrc": "/img/projects/Abdal-Human-Resources.png",
    "title": "Abdal — Recruitment Services Platform",
    "category": "professional",
    "categoryBadge": "content.workProjects.abdal.categoryBadge",
    "role": "content.workProjects.abdal.role",
    "period": "content.workProjects.abdal.period",
    "summary": "content.workProjects.abdal.summary",
    "stack": [
      "Vue.js",
      "REST API",
      "Payment Gateway",
      "Bootstrap"
    ],
    "links": [
      {
        "kind": "live",
        "label": "content.workProjects.abdal.links.0.label",
        "href": "https://abdal.sa"
      }
    ]
  },
  {
    "slug": "marca-store",
    "title": "Marca Store — E-Commerce",
    "category": "freelance",
    "featured": true,
    "categoryBadge": "content.workProjects.marcaStore.categoryBadge",
    "role": "content.workProjects.marcaStore.role",
    "period": "content.workProjects.marcaStore.period",
    "summary": "content.workProjects.marcaStore.summary",
    "highlight": {
      "label": "content.workProjects.marcaStore.highlight.label",
      "text": "content.workProjects.marcaStore.highlight.text"
    },
    "stack": [
      "Vue.js",
      "Vite",
      "Pinia",
      "Firebase",
      "vue-i18n"
    ],
    "links": [
      {
        "kind": "live",
        "label": "content.workProjects.marcaStore.links.0.label",
        "detailLabel": "content.workProjects.marcaStore.links.0.detailLabel",
        "href": "https://marca-store-user.vercel.app"
      },
      {
        "kind": "repo",
        "label": "content.workProjects.marcaStore.links.1.label",
        "detailLabel": "content.workProjects.marcaStore.links.1.detailLabel",
        "href": "https://github.com/AMRWERY/Marca-Store---user"
      },
      {
        "kind": "repo",
        "label": "content.workProjects.marcaStore.links.2.label",
        "detailLabel": "content.workProjects.marcaStore.links.2.detailLabel",
        "href": "https://github.com/AMRWERY/Marca-Store---admin"
      }
    ]
  },
  {
    "slug": "jai-dashboard",
    "title": "Jai Dashboard — Admin Dashboard",
    "category": "professional",
    "categoryBadge": "content.workProjects.jaiDashboard.categoryBadge",
    "role": "content.workProjects.jaiDashboard.role",
    "period": "content.workProjects.jaiDashboard.period",
    "summary": "content.workProjects.jaiDashboard.summary",
    "stack": [
      "Vue.js",
      "TypeScript",
      "REST API",
      "Vuetify"
    ],
    "links": [],
    "privateNote": "content.workProjects.jaiDashboard.privateNote"
  },
  {
    "slug": "treat-dashboard",
    "title": "Treat Dashboard — Admin Dashboard",
    "category": "professional",
    "categoryBadge": "content.workProjects.treatDashboard.categoryBadge",
    "role": "content.workProjects.treatDashboard.role",
    "period": "content.workProjects.treatDashboard.period",
    "summary": "content.workProjects.treatDashboard.summary",
    "stack": [
      "Nuxt.js",
      "TypeScript",
      "REST API",
      "Vuetify"
    ],
    "links": [],
    "privateNote": "content.workProjects.treatDashboard.privateNote"
  },
  {
    "slug": "lugar-store",
    "title": "Lugar Store — Furniture E-Commerce",
    "category": "freelance",
    "categoryBadge": "content.workProjects.lugarStore.categoryBadge",
    "role": "content.workProjects.lugarStore.role",
    "period": "content.workProjects.lugarStore.period",
    "summary": "content.workProjects.lugarStore.summary",
    "stack": [
      "Nuxt.js",
      "Pinia",
      "Nuxt i18n",
      "Firebase"
    ],
    "links": [
      {
        "kind": "live",
        "label": "content.workProjects.lugarStore.links.0.label",
        "href": "https://lugar-store-furniture.vercel.app"
      },
      {
        "kind": "repo",
        "label": "content.workProjects.lugarStore.links.1.label",
        "href": "https://github.com/AMRWERY/lugar-Store-Furniture-"
      }
    ]
  },
  {
    "slug": "travel-booking",
    "title": "Travel Booking — O Tech Company",
    "category": "freelance",
    "categoryBadge": "content.workProjects.travelBooking.categoryBadge",
    "role": "content.workProjects.travelBooking.role",
    "period": "content.workProjects.travelBooking.period",
    "summary": "content.workProjects.travelBooking.summary",
    "stack": [
      "Vue.js",
      "Bootstrap",
      "REST API"
    ],
    "links": [],
    "privateNote": "content.workProjects.travelBooking.privateNote"
  },
  {
    "slug": "gym-management",
    "title": "Gym Management Dashboard — ASAGTC",
    "category": "freelance",
    "categoryBadge": "content.workProjects.gymManagement.categoryBadge",
    "role": "content.workProjects.gymManagement.role",
    "period": "content.workProjects.gymManagement.period",
    "summary": "content.workProjects.gymManagement.summary",
    "stack": [
      "Vue.js",
      "Vuex",
      "Pusher",
      "Tailwind CSS"
    ],
    "links": [
      {
        "kind": "repo",
        "label": "content.workProjects.gymManagement.links.0.label",
        "href": "https://github.com/AMRWERY/gym-management"
      }
    ]
  },
  {
    "slug": "al-quran",
    "screenshotSrc": "/img/projects/Al-Quran.png",
    "title": "Al-Quran — Quran Reader & Audio",
    "category": "personal",
    "categoryBadge": "content.workProjects.alQuran.categoryBadge",
    "role": "content.workProjects.alQuran.role",
    "period": "content.workProjects.alQuran.period",
    "summary": "content.workProjects.alQuran.summary",
    "stack": [
      "Nuxt.js",
      "TypeScript",
      "Tailwind CSS v4",
      "Pinia"
    ],
    "links": [
      {
        "kind": "live",
        "label": "content.workProjects.alQuran.links.0.label",
        "href": "https://al-quran-silk.vercel.app"
      },
      {
        "kind": "repo",
        "label": "content.workProjects.alQuran.links.1.label",
        "href": "https://github.com/AMRWERY/Al-Quran"
      }
    ]
  },
  {
    "slug": "ship-it",
    "title": "Ship-IT — E-Commerce Platform",
    "category": "personal",
    "categoryBadge": "content.workProjects.shipIt.categoryBadge",
    "role": "content.workProjects.shipIt.role",
    "period": "content.workProjects.shipIt.period",
    "summary": "content.workProjects.shipIt.summary",
    "stack": [
      "Nuxt.js",
      "Pinia",
      "VeeValidate",
      "Firebase"
    ],
    "links": [
      {
        "kind": "live",
        "label": "content.workProjects.shipIt.links.0.label",
        "href": "https://ship-it-final.vercel.app/en"
      },
      {
        "kind": "repo",
        "label": "content.workProjects.shipIt.links.1.label",
        "href": "https://github.com/AMRWERY/ship-it-final-"
      }
    ]
  },
  {
    "slug": "cospora",
    "screenshotSrc": "/img/projects/Cospora.png",
    "title": "Cospora — Cosmetics Platform",
    "category": "personal",
    "categoryBadge": "content.workProjects.cospora.categoryBadge",
    "role": "content.workProjects.cospora.role",
    "period": "content.workProjects.cospora.period",
    "summary": "content.workProjects.cospora.summary",
    "stack": [
      "Nuxt.js",
      "ApexCharts",
      "FormKit",
      "Firebase"
    ],
    "links": [
      {
        "kind": "live",
        "label": "content.workProjects.cospora.links.0.label",
        "href": "https://cospora.vercel.app"
      },
      {
        "kind": "repo",
        "label": "content.workProjects.cospora.links.1.label",
        "href": "https://github.com/AMRWERY/Cospora"
      }
    ]
  },
  {
    "slug": "islam-app",
    "screenshotSrc": "/img/projects/Islam-App-Quran.png",
    "title": "Islam App — Islamic Web Application",
    "category": "personal",
    "categoryBadge": "content.workProjects.islamApp.categoryBadge",
    "role": "content.workProjects.islamApp.role",
    "period": "content.workProjects.islamApp.period",
    "summary": "content.workProjects.islamApp.summary",
    "stack": [
      "Nuxt.js",
      "Pinia",
      "Headless UI",
      "REST API"
    ],
    "links": [
      {
        "kind": "live",
        "label": "content.workProjects.islamApp.links.0.label",
        "href": "https://islam-app-nuxt.vercel.app"
      },
      {
        "kind": "repo",
        "label": "content.workProjects.islamApp.links.1.label",
        "href": "https://github.com/AMRWERY/islam-app-nuxt"
      }
    ]
  },
  {
    "slug": "movie-app",
    "screenshotSrc": "/img/projects/Movie-App.png",
    "title": "Movie App",
    "category": "personal",
    "categoryBadge": "content.workProjects.movieApp.categoryBadge",
    "role": "content.workProjects.movieApp.role",
    "period": "content.workProjects.movieApp.period",
    "summary": "content.workProjects.movieApp.summary",
    "stack": [
      "Vue.js",
      "Vite",
      "Vue Router",
      "OMDb API"
    ],
    "links": [
      {
        "kind": "live",
        "label": "content.workProjects.movieApp.links.0.label",
        "href": "https://movie-app-delta-ruby.vercel.app"
      },
      {
        "kind": "repo",
        "label": "content.workProjects.movieApp.links.1.label",
        "href": "https://github.com/AMRWERY/movie-app"
      }
    ]
  }
];

export const WORK_PROJECTS: WorkProject[] = BASE_PROJECTS.map((project) => ({
  ...project,
  caseStudy: CASE_STUDIES[project.slug],
}));

export const getProjectBySlug = (slug: string): WorkProject | undefined =>
  WORK_PROJECTS.find((project) => project.slug === slug);

/** Previous/next project in catalog order, wrapping around at the ends. */
export const getAdjacentProjects = (
  slug: string,
): {
  previous: WorkProject;
  next: WorkProject;
} => {
  const index = Math.max(
    0,
    WORK_PROJECTS.findIndex((project) => project.slug === slug),
  );
  const total = WORK_PROJECTS.length;
  return {
    previous: WORK_PROJECTS[(index - 1 + total) % total]!,
    next: WORK_PROJECTS[(index + 1) % total]!,
  };
};
