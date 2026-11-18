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
    "typeLabel": "content.cASESTUDIES.lexusEgypt.typeLabel",
    "market": "content.cASESTUDIES.lexusEgypt.market",
    "deliverable": "content.cASESTUDIES.lexusEgypt.deliverable",
    "intro": "content.cASESTUDIES.lexusEgypt.intro",
    "contributions": [
      {
        "icon": "lucide:layers",
        "title": "content.cASESTUDIES.lexusEgypt.contributions.0.title",
        "text": "content.cASESTUDIES.lexusEgypt.contributions.0.text"
      },
      {
        "icon": "lucide:component",
        "title": "content.cASESTUDIES.lexusEgypt.contributions.1.title",
        "text": "content.cASESTUDIES.lexusEgypt.contributions.1.text"
      },
      {
        "icon": "lucide:network",
        "title": "content.cASESTUDIES.lexusEgypt.contributions.2.title",
        "text": "content.cASESTUDIES.lexusEgypt.contributions.2.text"
      }
    ],
    "note": "content.cASESTUDIES.lexusEgypt.note"
  },
  "marca-store": {
    "typeLabel": "content.cASESTUDIES.marcaStore.typeLabel",
    "market": "content.cASESTUDIES.marcaStore.market",
    "deliverable": "content.cASESTUDIES.marcaStore.deliverable",
    "intro": "content.cASESTUDIES.marcaStore.intro",
    "gallery": [
      {
        "icon": "lucide:shopping-bag",
        "title": "content.cASESTUDIES.marcaStore.gallery.0.title",
        "caption": "content.cASESTUDIES.marcaStore.gallery.0.caption",
        "stageTitle": "content.cASESTUDIES.marcaStore.gallery.0.stageTitle",
        "stageDescription": "content.cASESTUDIES.marcaStore.gallery.0.stageDescription"
      },
      {
        "icon": "lucide:layout-dashboard",
        "title": "content.cASESTUDIES.marcaStore.gallery.1.title",
        "caption": "content.cASESTUDIES.marcaStore.gallery.1.caption",
        "stageTitle": "content.cASESTUDIES.marcaStore.gallery.1.stageTitle",
        "stageDescription": "content.cASESTUDIES.marcaStore.gallery.1.stageDescription"
      },
      {
        "icon": "lucide:users",
        "title": "content.cASESTUDIES.marcaStore.gallery.2.title",
        "caption": "content.cASESTUDIES.marcaStore.gallery.2.caption",
        "stageTitle": "content.cASESTUDIES.marcaStore.gallery.2.stageTitle",
        "stageDescription": "content.cASESTUDIES.marcaStore.gallery.2.stageDescription"
      },
      {
        "icon": "lucide:languages",
        "title": "content.cASESTUDIES.marcaStore.gallery.3.title",
        "caption": "content.cASESTUDIES.marcaStore.gallery.3.caption",
        "stageTitle": "content.cASESTUDIES.marcaStore.gallery.3.stageTitle",
        "stageDescription": "content.cASESTUDIES.marcaStore.gallery.3.stageDescription"
      }
    ],
    "contributions": [
      {
        "icon": "lucide:layers",
        "title": "content.cASESTUDIES.marcaStore.contributions.0.title",
        "text": "content.cASESTUDIES.marcaStore.contributions.0.text"
      },
      {
        "icon": "lucide:component",
        "title": "content.cASESTUDIES.marcaStore.contributions.1.title",
        "text": "content.cASESTUDIES.marcaStore.contributions.1.text"
      },
      {
        "icon": "lucide:shield-check",
        "title": "content.cASESTUDIES.marcaStore.contributions.2.title",
        "text": "content.cASESTUDIES.marcaStore.contributions.2.text"
      },
      {
        "icon": "lucide:languages",
        "title": "content.cASESTUDIES.marcaStore.contributions.3.title",
        "text": "content.cASESTUDIES.marcaStore.contributions.3.text"
      }
    ],
    "metrics": [
      {
        "value": "2",
        "label": "content.cASESTUDIES.marcaStore.metrics.0.label",
        "hint": "content.cASESTUDIES.marcaStore.metrics.0.hint"
      },
      {
        "value": "30",
        "label": "content.cASESTUDIES.marcaStore.metrics.1.label",
        "hint": "content.cASESTUDIES.marcaStore.metrics.1.hint"
      },
      {
        "value": "46",
        "label": "content.cASESTUDIES.marcaStore.metrics.2.label",
        "hint": "content.cASESTUDIES.marcaStore.metrics.2.hint"
      },
      {
        "value": "21",
        "label": "content.cASESTUDIES.marcaStore.metrics.3.label",
        "hint": "content.cASESTUDIES.marcaStore.metrics.3.hint"
      }
    ],
    "stack": [
      "Vue.js 3",
      "Vite",
      "Pinia",
      "Tailwind CSS",
      "vue-i18n",
      "VeeValidate",
      "Firebase",
      "REST APIs"
    ]
  },
  "gym-management": {
    "metrics": [
      {
        "value": "100+",
        "label": "content.cASESTUDIES.gymManagement.metrics.0.label"
      },
      {
        "value": "38",
        "label": "content.cASESTUDIES.gymManagement.metrics.1.label"
      }
    ]
  },
  "lugar-store": {
    "metrics": [
      {
        "value": "271",
        "label": "content.cASESTUDIES.lugarStore.metrics.0.label"
      },
      {
        "value": "3",
        "label": "content.cASESTUDIES.lugarStore.metrics.1.label",
        "hint": "content.cASESTUDIES.lugarStore.metrics.1.hint"
      }
    ]
  },
  "ship-it": {
    "metrics": [
      {
        "value": "15",
        "label": "content.cASESTUDIES.shipIt.metrics.0.label"
      },
      {
        "value": "33",
        "label": "content.cASESTUDIES.shipIt.metrics.1.label"
      },
      {
        "value": "14",
        "label": "content.cASESTUDIES.shipIt.metrics.2.label"
      },
      {
        "value": "293",
        "label": "content.cASESTUDIES.shipIt.metrics.3.label"
      }
    ]
  },
  "cospora": {
    "metrics": [
      {
        "value": "18",
        "label": "content.cASESTUDIES.cospora.metrics.0.label"
      },
      {
        "value": "43",
        "label": "content.cASESTUDIES.cospora.metrics.1.label"
      }
    ]
  },
  "al-quran": {
    "metrics": [
      {
        "value": "22",
        "label": "content.cASESTUDIES.alQuran.metrics.0.label"
      },
      {
        "value": "18",
        "label": "content.cASESTUDIES.alQuran.metrics.1.label"
      }
    ]
  },
  "islam-app": {
    "metrics": [
      {
        "value": "4",
        "label": "content.cASESTUDIES.islamApp.metrics.0.label"
      },
      {
        "value": "7",
        "label": "content.cASESTUDIES.islamApp.metrics.1.label"
      }
    ]
  }
};
