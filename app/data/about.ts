import type {
  AboutApproachStep,
  AboutExperienceEntry,
  AboutSkillGroup,
  LocalizedText,
} from "@/types/portfolio";

/** Proper nouns / tool names read the same in both languages. */
const tech = (name: string): LocalizedText => ({ en: name, ar: name });

export const ABOUT_INTRO = {
  "eyebrow": "content.aBOUTINTRO.eyebrow",
  "title": "content.aBOUTINTRO.title",
  "bio": "content.aBOUTINTRO.bio",
  "facts": [
    {
      "icon": "lucide:map-pin",
      "text": "content.aBOUTINTRO.facts.0.text"
    },
    {
      "icon": "lucide:code",
      "text": "content.aBOUTINTRO.facts.1.text"
    },
    {
      "icon": "lucide:languages",
      "text": "content.aBOUTINTRO.facts.2.text"
    }
  ]
} as const;

export const ABOUT_APPROACH = {
  "eyebrow": "content.aBOUTAPPROACH.eyebrow",
  "title": "content.aBOUTAPPROACH.title",
  "description": "content.aBOUTAPPROACH.description",
  "steps": [
    {
      "id": "requirements",
      "title": "content.aBOUTAPPROACH.steps.requirements.title",
      "description": "content.aBOUTAPPROACH.steps.requirements.description",
      "tag": "content.aBOUTAPPROACH.steps.requirements.tag"
    },
    {
      "id": "architecture",
      "title": "content.aBOUTAPPROACH.steps.architecture.title",
      "description": "content.aBOUTAPPROACH.steps.architecture.description",
      "tag": "content.aBOUTAPPROACH.steps.architecture.tag"
    },
    {
      "id": "ui-apis",
      "title": "content.aBOUTAPPROACH.steps.uiApis.title",
      "description": "content.aBOUTAPPROACH.steps.uiApis.description",
      "tag": "content.aBOUTAPPROACH.steps.uiApis.tag"
    },
    {
      "id": "delivery",
      "title": "content.aBOUTAPPROACH.steps.delivery.title",
      "description": "content.aBOUTAPPROACH.steps.delivery.description",
      "tag": "content.aBOUTAPPROACH.steps.delivery.tag"
    }
  ]
};

export const ABOUT_EXPERIENCE = {
  "eyebrow": "content.aBOUTEXPERIENCE.eyebrow",
  "title": "content.aBOUTEXPERIENCE.title",
  "description": "content.aBOUTEXPERIENCE.description",
  "entries": [
    {
      "id": "code95",
      "isCurrent": true,
      "period": "content.aBOUTEXPERIENCE.entries.code95.period",
      "title": "content.aBOUTEXPERIENCE.entries.code95.title",
      "badge": "content.aBOUTEXPERIENCE.entries.code95.badge",
      "description": "content.aBOUTEXPERIENCE.entries.code95.description",
      "projectsLabel": "content.aBOUTEXPERIENCE.entries.code95.projectsLabel",
      "projects": [
        {
          "slug": "lexus-egypt",
          "label": "content.aBOUTEXPERIENCE.entries.code95.projects.lexusEgypt.label"
        },
        {
          "slug": "abdal",
          "label": "content.aBOUTEXPERIENCE.entries.code95.projects.abdal.label"
        },
        {
          "slug": "toyota-egypt",
          "label": "content.aBOUTEXPERIENCE.entries.code95.projects.toyotaEgypt.label"
        },
        {
          "slug": "attijariwafa-bank",
          "label": "content.aBOUTEXPERIENCE.entries.code95.projects.attijariwafaBank.label"
        }
      ]
    },
    {
      "id": "kabret",
      "period": "content.aBOUTEXPERIENCE.entries.kabret.period",
      "title": "content.aBOUTEXPERIENCE.entries.kabret.title",
      "badge": "content.aBOUTEXPERIENCE.entries.kabret.badge",
      "description": "content.aBOUTEXPERIENCE.entries.kabret.description",
      "projectsLabel": "content.aBOUTEXPERIENCE.entries.kabret.projectsLabel",
      "projects": [
        {
          "label": "content.aBOUTEXPERIENCE.entries.kabret.projects.0.label"
        },
        {
          "label": "content.aBOUTEXPERIENCE.entries.kabret.projects.1.label"
        }
      ]
    },
    {
      "id": "freelance",
      "period": "content.aBOUTEXPERIENCE.entries.freelance.period",
      "title": "content.aBOUTEXPERIENCE.entries.freelance.title",
      "badge": "content.aBOUTEXPERIENCE.entries.freelance.badge",
      "description": "content.aBOUTEXPERIENCE.entries.freelance.description",
      "projectsLabel": "content.aBOUTEXPERIENCE.entries.freelance.projectsLabel",
      "projects": [
        {
          "slug": "marca-store",
          "label": "content.aBOUTEXPERIENCE.entries.freelance.projects.marcaStore.label"
        },
        {
          "slug": "gym-management",
          "label": "content.aBOUTEXPERIENCE.entries.freelance.projects.gymManagement.label"
        },
        {
          "slug": "lugar-store",
          "label": "content.aBOUTEXPERIENCE.entries.freelance.projects.lugarStore.label"
        },
        {
          "label": "content.aBOUTEXPERIENCE.entries.freelance.projects.3.label"
        }
      ]
    }
  ]
};

export const ABOUT_SKILLS = {
  "eyebrow": "content.aBOUTSKILLS.eyebrow",
  "title": "content.aBOUTSKILLS.title",
  "description": "content.aBOUTSKILLS.description",
  "groups": [
    {
      "id": "frontend-core",
      "icon": "lucide:code",
      "title": "content.aBOUTSKILLS.groups.frontendCore.title",
      "skills": [
        "content.aBOUTSKILLS.groups.frontendCore.skills.0",
        "content.aBOUTSKILLS.groups.frontendCore.skills.1",
        "content.aBOUTSKILLS.groups.frontendCore.skills.2",
        "content.aBOUTSKILLS.groups.frontendCore.skills.3",
        "content.aBOUTSKILLS.groups.frontendCore.skills.4",
        "content.aBOUTSKILLS.groups.frontendCore.skills.5",
        "content.aBOUTSKILLS.groups.frontendCore.skills.6"
      ]
    },
    {
      "id": "ui-styling",
      "icon": "lucide:palette",
      "title": "content.aBOUTSKILLS.groups.uiStyling.title",
      "skills": [
        "content.aBOUTSKILLS.groups.uiStyling.skills.0",
        "content.aBOUTSKILLS.groups.uiStyling.skills.1",
        "content.aBOUTSKILLS.groups.uiStyling.skills.2",
        "content.aBOUTSKILLS.groups.uiStyling.skills.3",
        "content.aBOUTSKILLS.groups.uiStyling.skills.4"
      ]
    },
    {
      "id": "state-forms",
      "icon": "lucide:database",
      "title": "content.aBOUTSKILLS.groups.stateForms.title",
      "skills": [
        "content.aBOUTSKILLS.groups.stateForms.skills.0",
        "content.aBOUTSKILLS.groups.stateForms.skills.1",
        "content.aBOUTSKILLS.groups.stateForms.skills.2",
        "content.aBOUTSKILLS.groups.stateForms.skills.3",
        "content.aBOUTSKILLS.groups.stateForms.skills.4",
        "content.aBOUTSKILLS.groups.stateForms.skills.5"
      ]
    },
    {
      "id": "apis-backend",
      "icon": "lucide:server",
      "title": "content.aBOUTSKILLS.groups.apisBackend.title",
      "skills": [
        "content.aBOUTSKILLS.groups.apisBackend.skills.0",
        "content.aBOUTSKILLS.groups.apisBackend.skills.1",
        "content.aBOUTSKILLS.groups.apisBackend.skills.2",
        "content.aBOUTSKILLS.groups.apisBackend.skills.3",
        "content.aBOUTSKILLS.groups.apisBackend.skills.4",
        "content.aBOUTSKILLS.groups.apisBackend.skills.5"
      ]
    },
    {
      "id": "i18n",
      "icon": "lucide:globe",
      "title": "content.aBOUTSKILLS.groups.i18n.title",
      "skills": [
        "content.aBOUTSKILLS.groups.i18n.skills.0",
        "content.aBOUTSKILLS.groups.i18n.skills.1",
        "content.aBOUTSKILLS.groups.i18n.skills.2",
        "content.aBOUTSKILLS.groups.i18n.skills.3",
        "content.aBOUTSKILLS.groups.i18n.skills.4"
      ]
    },
    {
      "id": "tooling",
      "icon": "lucide:terminal",
      "title": "content.aBOUTSKILLS.groups.tooling.title",
      "skills": [
        "content.aBOUTSKILLS.groups.tooling.skills.0",
        "content.aBOUTSKILLS.groups.tooling.skills.1",
        "content.aBOUTSKILLS.groups.tooling.skills.2",
        "content.aBOUTSKILLS.groups.tooling.skills.3",
        "content.aBOUTSKILLS.groups.tooling.skills.4",
        "content.aBOUTSKILLS.groups.tooling.skills.5",
        "content.aBOUTSKILLS.groups.tooling.skills.6"
      ]
    }
  ],
  "specializations": {
    "title": "content.aBOUTSKILLS.specializations.title",
    "items": [
      "content.aBOUTSKILLS.specializations.items.0",
      "content.aBOUTSKILLS.specializations.items.1",
      "content.aBOUTSKILLS.specializations.items.2",
      "content.aBOUTSKILLS.specializations.items.3",
      "content.aBOUTSKILLS.specializations.items.4",
      "content.aBOUTSKILLS.specializations.items.5",
      "content.aBOUTSKILLS.specializations.items.6"
    ]
  }
};

export const ABOUT_EDUCATION = {
  "eyebrow": "content.aBOUTEDUCATION.eyebrow",
  "title": "content.aBOUTEDUCATION.title",
  "degree": "content.aBOUTEDUCATION.degree",
  "school": "content.aBOUTEDUCATION.school",
  "graduated": "content.aBOUTEDUCATION.graduated"
};

export const ABOUT_LANGUAGES = {
  "eyebrow": "content.aBOUTLANGUAGES.eyebrow",
  "title": "content.aBOUTLANGUAGES.title",
  "items": [
    {
      "name": "content.aBOUTLANGUAGES.items.0.name",
      "level": "content.aBOUTLANGUAGES.items.0.level",
      "highlight": true
    },
    {
      "name": "content.aBOUTLANGUAGES.items.1.name",
      "level": "content.aBOUTLANGUAGES.items.1.level",
      "highlight": false
    }
  ]
};
