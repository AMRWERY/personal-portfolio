import type {
  CapabilityItem,
  CvFile,
  ExperiencePreviewItem,
  FeaturedProject,
  ImpactMetric,
  NavItem,
} from "~/types/portfolio";
import { getProjectBySlug } from "~/data/work";

export const PROFILE = {
  "name": "Amr Mohamed",
  "monogram": "AM",
  "avatarSrc": "/img/personal-photo.png",
  "email": "amrmounir2@gmail.com",
  "phone": "+201022655742",
  "phoneDisplay": "+20 102 265 5742",
  "githubUrl": "https://github.com/AMRWERY",
  "githubHandle": "github.com/AMRWERY",
  "linkedinUrl": "https://www.linkedin.com/in/amr-mohamed-3a714b1a7",
  "linkedinHandle": "in/amr-mohamed-3a714b1a7"
};

export const CV_FILES: CvFile[] = [
  {
    "format": "pdf",
    "label": "content.cvFiles.pdf.label",
    "description": "content.cvFiles.pdf.description",
    "href": "/cv/Amr%20Mohamed%20CV.pdf",
    "filename": "Amr Mohamed CV.pdf"
  },
  {
    "format": "docx",
    "label": "content.cvFiles.docx.label",
    "description": "content.cvFiles.docx.description",
    "href": "/cv/Amr%20Mohamed%20CV.docx",
    "filename": "Amr Mohamed CV.docx"
  }
];

export const NAV_ITEMS: NavItem[] = [
  {
    "key": "home",
    "label": "content.navItems.home.label",
    "to": "/"
  },
  {
    "key": "work",
    "label": "content.navItems.work.label",
    "to": "/work"
  },
  {
    "key": "about",
    "label": "content.navItems.about.label",
    "to": "/about"
  }
];

export const HERO_COPY = {
  "greeting": "content.heroCopy.greeting",
  "greetingName": "content.heroCopy.greetingName",
  "headline": "content.heroCopy.headline",
  "supporting": "content.heroCopy.supporting",
  "primaryCta": "content.heroCopy.primaryCta",
  "secondaryCta": "content.heroCopy.secondaryCta",
  "location": "content.heroCopy.location"
};

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    "value": "3+",
    "label": "content.impactMetrics.0.label",
    "context": "content.impactMetrics.0.context",
    "highlight": true
  },
  {
    "value": "30",
    "label": "content.impactMetrics.1.label",
    "context": "content.impactMetrics.1.context"
  },
  {
    "value": "46",
    "label": "content.impactMetrics.2.label",
    "context": "content.impactMetrics.2.context"
  },
  {
    "value": "100+",
    "label": "content.impactMetrics.3.label",
    "context": "content.impactMetrics.3.context"
  }
];

const FEATURED_BASE: FeaturedProject[] = [
  {
    "slug": "lexus-egypt",
    "title": "Lexus Egypt — Official Website",
    "mediaLabel": "Lexus Egypt — Official Website",
    "status": "In progress",
    "categoryBadge": "content.featuredProjects.lexusEgypt.categoryBadge",
    "role": "content.featuredProjects.lexusEgypt.role",
    "summary": "content.featuredProjects.lexusEgypt.summary",
    "stack": [
      "Nuxt.js",
      "TypeScript",
      "Tailwind CSS"
    ]
  },
  {
    "slug": "toyota-egypt",
    "title": "Toyota Egypt — Official Website",
    "mediaLabel": "Toyota Egypt — Official Website",
    "categoryBadge": "content.workProjects.toyotaEgypt.categoryBadge",
    "role": "content.workProjects.toyotaEgypt.role",
    "summary": "content.workProjects.toyotaEgypt.summary",
    "stack": [
      "Nuxt.js",
      "REST API",
      "Tailwind CSS"
    ]
  },
  {
    "slug": "attijariwafa-bank",
    "title": "Attijariwafa Bank Egypt",
    "mediaLabel": "Attijariwafa Bank Egypt",
    "categoryBadge": "content.workProjects.attijariwafaBank.categoryBadge",
    "role": "content.workProjects.attijariwafaBank.role",
    "summary": "content.workProjects.attijariwafaBank.summary",
    "stack": [
      "Nuxt.js",
      "TypeScript",
      "Tailwind CSS"
    ]
  },
  {
    "slug": "abdal",
    "title": "Abdal — Recruitment Services Platform",
    "mediaLabel": "Abdal Recruitment Platform",
    "categoryBadge": "content.featuredProjects.abdal.categoryBadge",
    "role": "content.featuredProjects.abdal.role",
    "summary": "content.featuredProjects.abdal.summary",
    "stack": [
      "Vue.js",
      "REST API",
      "Bootstrap"
    ]
  },
];

/** Featured cards reuse the image set on the matching project in data/work.ts */
export const FEATURED_PROJECTS: FeaturedProject[] = FEATURED_BASE.map(
  (project) => ({
    ...project,
    screenshotSrc:
      project.screenshotSrc ?? getProjectBySlug(project.slug)?.screenshotSrc,
  }),
);

export const CAPABILITIES: CapabilityItem[] = [
  {
    "id": "vue-nuxt",
    "icon": "lucide:layers",
    "title": "content.capabilities.vueNuxt.title",
    "description": "content.capabilities.vueNuxt.description"
  },
  {
    "id": "architecture",
    "icon": "lucide:component",
    "title": "content.capabilities.architecture.title",
    "description": "content.capabilities.architecture.description"
  },
  {
    "id": "ecommerce-dashboards",
    "icon": "lucide:shopping-bag",
    "title": "content.capabilities.ecommerceDashboards.title",
    "description": "content.capabilities.ecommerceDashboards.description"
  },
  {
    "id": "rest-api",
    "icon": "lucide:network",
    "title": "content.capabilities.restApi.title",
    "description": "content.capabilities.restApi.description"
  },
  {
    "id": "i18n-rtl",
    "icon": "lucide:languages",
    "title": "content.capabilities.i18nRtl.title",
    "description": "content.capabilities.i18nRtl.description"
  },
  {
    "id": "payments-rbac",
    "icon": "lucide:shield-check",
    "title": "content.capabilities.paymentsRbac.title",
    "description": "content.capabilities.paymentsRbac.description"
  }
];

export const EXPERIENCE_PREVIEW: ExperiencePreviewItem[] = [
  {
    "period": "content.experiencePreview.0.period",
    "company": "Code95 Web Technologies",
    "role": "content.experiencePreview.0.role",
    "projectsSummary": "content.experiencePreview.0.projectsSummary",
    "isCurrent": true
  },
  {
    "period": "content.experiencePreview.1.period",
    "company": "Kabret",
    "role": "content.experiencePreview.1.role",
    "projectsSummary": "content.experiencePreview.1.projectsSummary"
  },
  {
    "period": "content.experiencePreview.2.period",
    "company": "Freelance Frontend Projects",
    "role": "content.experiencePreview.2.role",
    "projectsSummary": "content.experiencePreview.2.projectsSummary"
  }
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
  "Vuex"
];
