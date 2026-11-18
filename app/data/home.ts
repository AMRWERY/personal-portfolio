import type {
  CapabilityItem,
  CvFile,
  ExperiencePreviewItem,
  FeaturedProject,
  ImpactMetric,
  NavItem,
} from "@/types/portfolio";

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
    "label": "content.cVFILES.pdf.label",
    "description": "content.cVFILES.pdf.description",
    "href": "/cv/Amr%20Mohamed%20CV.pdf",
    "filename": "Amr Mohamed CV.pdf"
  },
  {
    "format": "docx",
    "label": "content.cVFILES.docx.label",
    "description": "content.cVFILES.docx.description",
    "href": "/cv/Amr%20Mohamed%20CV.docx",
    "filename": "Amr Mohamed CV.docx"
  }
];

export const NAV_ITEMS: NavItem[] = [
  {
    "key": "home",
    "label": "content.nAVITEMS.home.label",
    "to": "/"
  },
  {
    "key": "work",
    "label": "content.nAVITEMS.work.label",
    "to": "/work"
  },
  {
    "key": "about",
    "label": "content.nAVITEMS.about.label",
    "to": "/about"
  }
];

export const HERO_COPY = {
  "greeting": "content.hEROCOPY.greeting",
  "headline": "content.hEROCOPY.headline",
  "supporting": "content.hEROCOPY.supporting",
  "primaryCta": "content.hEROCOPY.primaryCta",
  "secondaryCta": "content.hEROCOPY.secondaryCta",
  "location": "content.hEROCOPY.location"
};

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    "value": "3+",
    "label": "content.iMPACTMETRICS.0.label",
    "context": "content.iMPACTMETRICS.0.context",
    "highlight": true
  },
  {
    "value": "30",
    "label": "content.iMPACTMETRICS.1.label",
    "context": "content.iMPACTMETRICS.1.context"
  },
  {
    "value": "46",
    "label": "content.iMPACTMETRICS.2.label",
    "context": "content.iMPACTMETRICS.2.context"
  },
  {
    "value": "100+",
    "label": "content.iMPACTMETRICS.3.label",
    "context": "content.iMPACTMETRICS.3.context"
  }
];

export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    "slug": "lexus-egypt",
    "title": "Lexus Egypt — Official Website",
    "mediaLabel": "Lexus Egypt — Official Website",
    "status": "In progress",
    "categoryBadge": "content.fEATUREDPROJECTS.lexusEgypt.categoryBadge",
    "role": "content.fEATUREDPROJECTS.lexusEgypt.role",
    "summary": "content.fEATUREDPROJECTS.lexusEgypt.summary",
    "stack": [
      "Nuxt.js",
      "TypeScript",
      "Tailwind CSS"
    ]
  },
  {
    "slug": "marca-store",
    "title": "Marca Store — E-Commerce Platform",
    "mediaLabel": "Marca Store — Storefront & Admin",
    "categoryBadge": "content.fEATUREDPROJECTS.marcaStore.categoryBadge",
    "role": "content.fEATUREDPROJECTS.marcaStore.role",
    "summary": "content.fEATUREDPROJECTS.marcaStore.summary",
    "stack": [
      "Vue.js",
      "Pinia",
      "Firebase"
    ]
  },
  {
    "slug": "gym-management",
    "title": "Gym Management Dashboard — ASAGTC",
    "mediaLabel": "Gym Management Dashboard — ASAGTC",
    "categoryBadge": "content.fEATUREDPROJECTS.gymManagement.categoryBadge",
    "role": "content.fEATUREDPROJECTS.gymManagement.role",
    "summary": "content.fEATUREDPROJECTS.gymManagement.summary",
    "stack": [
      "Vue.js",
      "Vuex",
      "Pusher"
    ]
  },
  {
    "slug": "abdal",
    "title": "Abdal — Recruitment Services Platform",
    "mediaLabel": "Abdal Recruitment Platform",
    "categoryBadge": "content.fEATUREDPROJECTS.abdal.categoryBadge",
    "role": "content.fEATUREDPROJECTS.abdal.role",
    "summary": "content.fEATUREDPROJECTS.abdal.summary",
    "stack": [
      "Vue.js",
      "REST API",
      "Bootstrap"
    ]
  }
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    "id": "vue-nuxt",
    "icon": "lucide:layers",
    "title": "content.cAPABILITIES.vueNuxt.title",
    "description": "content.cAPABILITIES.vueNuxt.description"
  },
  {
    "id": "architecture",
    "icon": "lucide:component",
    "title": "content.cAPABILITIES.architecture.title",
    "description": "content.cAPABILITIES.architecture.description"
  },
  {
    "id": "ecommerce-dashboards",
    "icon": "lucide:shopping-bag",
    "title": "content.cAPABILITIES.ecommerceDashboards.title",
    "description": "content.cAPABILITIES.ecommerceDashboards.description"
  },
  {
    "id": "rest-api",
    "icon": "lucide:network",
    "title": "content.cAPABILITIES.restApi.title",
    "description": "content.cAPABILITIES.restApi.description"
  },
  {
    "id": "i18n-rtl",
    "icon": "lucide:languages",
    "title": "content.cAPABILITIES.i18nRtl.title",
    "description": "content.cAPABILITIES.i18nRtl.description"
  },
  {
    "id": "payments-rbac",
    "icon": "lucide:shield-check",
    "title": "content.cAPABILITIES.paymentsRbac.title",
    "description": "content.cAPABILITIES.paymentsRbac.description"
  }
];

export const EXPERIENCE_PREVIEW: ExperiencePreviewItem[] = [
  {
    "period": "content.eXPERIENCEPREVIEW.0.period",
    "company": "Code95 Web Technologies",
    "role": "content.eXPERIENCEPREVIEW.0.role",
    "projectsSummary": "content.eXPERIENCEPREVIEW.0.projectsSummary",
    "isCurrent": true
  },
  {
    "period": "content.eXPERIENCEPREVIEW.1.period",
    "company": "Kabret",
    "role": "content.eXPERIENCEPREVIEW.1.role",
    "projectsSummary": "content.eXPERIENCEPREVIEW.1.projectsSummary"
  },
  {
    "period": "content.eXPERIENCEPREVIEW.2.period",
    "company": "Freelance Frontend Projects",
    "role": "content.eXPERIENCEPREVIEW.2.role",
    "projectsSummary": "content.eXPERIENCEPREVIEW.2.projectsSummary"
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
