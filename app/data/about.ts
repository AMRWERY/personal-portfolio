import type {
  AboutApproachStep,
  AboutExperienceEntry,
  AboutSkillGroup,
  LocalizedText,
} from "~/types/portfolio";

/** Proper nouns / tool names read the same in both languages. */
const tech = (name: string): LocalizedText => ({ en: name, ar: name });

export const ABOUT_INTRO = {
  "eyebrow": "content.aboutIntro.eyebrow",
  "title": "content.aboutIntro.title",
  "bio": "content.aboutIntro.bio",
  "facts": [
    {
      "icon": "lucide:map-pin",
      "text": "content.aboutIntro.facts.0.text"
    },
    {
      "icon": "lucide:code",
      "text": "content.aboutIntro.facts.1.text"
    },
    {
      "icon": "lucide:languages",
      "text": "content.aboutIntro.facts.2.text"
    }
  ]
} as const;

export const ABOUT_APPROACH = {
  "eyebrow": "content.aboutApproach.eyebrow",
  "title": "content.aboutApproach.title",
  "description": "content.aboutApproach.description",
  "steps": [
    {
      "id": "requirements",
      "title": "content.aboutApproach.steps.requirements.title",
      "description": "content.aboutApproach.steps.requirements.description",
      "tag": "content.aboutApproach.steps.requirements.tag"
    },
    {
      "id": "architecture",
      "title": "content.aboutApproach.steps.architecture.title",
      "description": "content.aboutApproach.steps.architecture.description",
      "tag": "content.aboutApproach.steps.architecture.tag"
    },
    {
      "id": "ui-apis",
      "title": "content.aboutApproach.steps.uiApis.title",
      "description": "content.aboutApproach.steps.uiApis.description",
      "tag": "content.aboutApproach.steps.uiApis.tag"
    },
    {
      "id": "delivery",
      "title": "content.aboutApproach.steps.delivery.title",
      "description": "content.aboutApproach.steps.delivery.description",
      "tag": "content.aboutApproach.steps.delivery.tag"
    }
  ]
};

export const ABOUT_EXPERIENCE = {
  "eyebrow": "content.aboutExperience.eyebrow",
  "title": "content.aboutExperience.title",
  "description": "content.aboutExperience.description",
  "entries": [
    {
      "id": "code95",
      "isCurrent": true,
      "period": "content.aboutExperience.entries.code95.period",
      "title": "content.aboutExperience.entries.code95.title",
      "badge": "content.aboutExperience.entries.code95.badge",
      "description": "content.aboutExperience.entries.code95.description",
      "projectsLabel": "content.aboutExperience.entries.code95.projectsLabel",
      "projects": [
        {
          "slug": "lexus-egypt",
          "label": "content.aboutExperience.entries.code95.projects.lexusEgypt.label"
        },
        {
          "slug": "abdal",
          "label": "content.aboutExperience.entries.code95.projects.abdal.label"
        },
        {
          "slug": "toyota-egypt",
          "label": "content.aboutExperience.entries.code95.projects.toyotaEgypt.label"
        },
        {
          "slug": "attijariwafa-bank",
          "label": "content.aboutExperience.entries.code95.projects.attijariwafaBank.label"
        }
      ]
    },
    {
      "id": "kabret",
      "period": "content.aboutExperience.entries.kabret.period",
      "title": "content.aboutExperience.entries.kabret.title",
      "badge": "content.aboutExperience.entries.kabret.badge",
      "description": "content.aboutExperience.entries.kabret.description",
      "projectsLabel": "content.aboutExperience.entries.kabret.projectsLabel",
      "projects": [
        {
          "label": "content.aboutExperience.entries.kabret.projects.0.label"
        },
        {
          "label": "content.aboutExperience.entries.kabret.projects.1.label"
        }
      ]
    },
    {
      "id": "freelance",
      "period": "content.aboutExperience.entries.freelance.period",
      "title": "content.aboutExperience.entries.freelance.title",
      "badge": "content.aboutExperience.entries.freelance.badge",
      "description": "content.aboutExperience.entries.freelance.description",
      "projectsLabel": "content.aboutExperience.entries.freelance.projectsLabel",
      "projects": [
        {
          "slug": "marca-store",
          "label": "content.aboutExperience.entries.freelance.projects.marcaStore.label"
        },
        {
          "slug": "gym-management",
          "label": "content.aboutExperience.entries.freelance.projects.gymManagement.label"
        },
        {
          "slug": "lugar-store",
          "label": "content.aboutExperience.entries.freelance.projects.lugarStore.label"
        },
        {
          "label": "content.aboutExperience.entries.freelance.projects.3.label"
        }
      ]
    }
  ]
};

export const ABOUT_SKILLS = {
  "eyebrow": "content.aboutSkills.eyebrow",
  "title": "content.aboutSkills.title",
  "description": "content.aboutSkills.description",
  "groups": [
    {
      "id": "frontend-core",
      "icon": "lucide:code",
      "title": "content.aboutSkills.groups.frontendCore.title",
      "skills": [
        "content.aboutSkills.groups.frontendCore.skills.0",
        "content.aboutSkills.groups.frontendCore.skills.1",
        "content.aboutSkills.groups.frontendCore.skills.2",
        "content.aboutSkills.groups.frontendCore.skills.3",
        "content.aboutSkills.groups.frontendCore.skills.4",
        "content.aboutSkills.groups.frontendCore.skills.5",
        "content.aboutSkills.groups.frontendCore.skills.6"
      ]
    },
    {
      "id": "ui-styling",
      "icon": "lucide:palette",
      "title": "content.aboutSkills.groups.uiStyling.title",
      "skills": [
        "content.aboutSkills.groups.uiStyling.skills.0",
        "content.aboutSkills.groups.uiStyling.skills.1",
        "content.aboutSkills.groups.uiStyling.skills.2",
        "content.aboutSkills.groups.uiStyling.skills.3",
        "content.aboutSkills.groups.uiStyling.skills.4"
      ]
    },
    {
      "id": "state-forms",
      "icon": "lucide:database",
      "title": "content.aboutSkills.groups.stateForms.title",
      "skills": [
        "content.aboutSkills.groups.stateForms.skills.0",
        "content.aboutSkills.groups.stateForms.skills.1",
        "content.aboutSkills.groups.stateForms.skills.2",
        "content.aboutSkills.groups.stateForms.skills.3",
        "content.aboutSkills.groups.stateForms.skills.4",
        "content.aboutSkills.groups.stateForms.skills.5"
      ]
    },
    {
      "id": "apis-backend",
      "icon": "lucide:server",
      "title": "content.aboutSkills.groups.apisBackend.title",
      "skills": [
        "content.aboutSkills.groups.apisBackend.skills.0",
        "content.aboutSkills.groups.apisBackend.skills.1",
        "content.aboutSkills.groups.apisBackend.skills.2",
        "content.aboutSkills.groups.apisBackend.skills.3",
        "content.aboutSkills.groups.apisBackend.skills.4",
        "content.aboutSkills.groups.apisBackend.skills.5"
      ]
    },
    {
      "id": "i18n",
      "icon": "lucide:globe",
      "title": "content.aboutSkills.groups.i18n.title",
      "skills": [
        "content.aboutSkills.groups.i18n.skills.0",
        "content.aboutSkills.groups.i18n.skills.1",
        "content.aboutSkills.groups.i18n.skills.2",
        "content.aboutSkills.groups.i18n.skills.3",
        "content.aboutSkills.groups.i18n.skills.4"
      ]
    },
    {
      "id": "tooling",
      "icon": "lucide:terminal",
      "title": "content.aboutSkills.groups.tooling.title",
      "skills": [
        "content.aboutSkills.groups.tooling.skills.0",
        "content.aboutSkills.groups.tooling.skills.1",
        "content.aboutSkills.groups.tooling.skills.2",
        "content.aboutSkills.groups.tooling.skills.3",
        "content.aboutSkills.groups.tooling.skills.4",
        "content.aboutSkills.groups.tooling.skills.5",
        "content.aboutSkills.groups.tooling.skills.6"
      ]
    }
  ],
  "specializations": {
    "title": "content.aboutSkills.specializations.title",
    "items": [
      "content.aboutSkills.specializations.items.0",
      "content.aboutSkills.specializations.items.1",
      "content.aboutSkills.specializations.items.2",
      "content.aboutSkills.specializations.items.3",
      "content.aboutSkills.specializations.items.4",
      "content.aboutSkills.specializations.items.5",
      "content.aboutSkills.specializations.items.6"
    ]
  }
};

export const ABOUT_EDUCATION = {
  "eyebrow": "content.aboutEducation.eyebrow",
  "title": "content.aboutEducation.title",
  "degree": "content.aboutEducation.degree",
  "school": "content.aboutEducation.school",
  "graduated": "content.aboutEducation.graduated"
};

export const ABOUT_LANGUAGES = {
  "eyebrow": "content.aboutLanguages.eyebrow",
  "title": "content.aboutLanguages.title",
  "items": [
    {
      "name": "content.aboutLanguages.items.0.name",
      "level": "content.aboutLanguages.items.0.level",
      "highlight": true
    },
    {
      "name": "content.aboutLanguages.items.1.name",
      "level": "content.aboutLanguages.items.1.level",
      "highlight": false
    }
  ]
};
