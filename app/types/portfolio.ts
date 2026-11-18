export type ThemeMode = "dark" | "light";
export type ProjectStatus = "In progress";

/**
 * Iconify icon IDs sourced from https://icon-sets.iconify.design/
 */
export type IconifyName =
  | "lucide:moon"
  | "lucide:sun"
  | "lucide:menu"
  | "lucide:x"
  | "lucide:arrow-right"
  | "lucide:arrow-up"
  | "lucide:arrow-up-right"
  | "lucide:map-pin"
  | "lucide:image"
  | "lucide:layers"
  | "lucide:component"
  | "lucide:shopping-bag"
  | "lucide:network"
  | "lucide:languages"
  | "lucide:shield-check"
  | "lucide:mail"
  | "lucide:github"
  | "lucide:linkedin"
  | "lucide:external-link"
  | "lucide:check"
  | "lucide:info"
  | "lucide:folder-search"
  | "lucide:layout"
  | "lucide:layout-dashboard"
  | "lucide:users"
  | "lucide:arrow-left"
  | "lucide:alert-circle"
  | "lucide:code"
  | "lucide:palette"
  | "lucide:database"
  | "lucide:server"
  | "lucide:globe"
  | "lucide:terminal"
  | "lucide:sparkles"
  | "lucide:graduation-cap"
  | "lucide:phone"
  | "lucide:send"
  | "lucide:circle-check"
  | "lucide:triangle-alert"
  | "lucide:rotate-ccw"
  | "lucide:download"
  | "lucide:chevron-down"
  | "lucide:file-text";

export interface CvFile {
  format: "pdf" | "docx";
  label: LocalizedText;
  description: LocalizedText;
  /** Public URL (already URL-encoded) */
  href: string;
  /** Suggested name for the saved file */
  filename: string;
}

export interface LocalizedText {
  en: string;
  ar: string;
}

export interface NavItem {
  label: LocalizedText;
  to: string;
  key: "home" | "work" | "about" | "contact";
}

export interface ImpactMetric {
  value: string;
  label: LocalizedText;
  context: LocalizedText;
  highlight?: boolean;
}

export interface FeaturedProject {
  slug: string;
  title: string;
  mediaLabel: string;
  categoryBadge: LocalizedText;
  role: LocalizedText;
  summary: LocalizedText;
  stack: string[];
  status?: ProjectStatus;
  screenshotSrc?: string;
  screenshotAlt?: LocalizedText;
}

export interface CapabilityItem {
  id: string;
  icon: IconifyName;
  title: LocalizedText;
  description: LocalizedText;
}

export interface ExperiencePreviewItem {
  period: LocalizedText;
  company: string;
  role: LocalizedText;
  projectsSummary: LocalizedText;
  isCurrent?: boolean;
}

export type ProjectCategory = "professional" | "freelance" | "personal";

export interface ProjectLink {
  kind: "live" | "repo" | "brand";
  label: LocalizedText;
  /** Longer label used on the case-study page; falls back to `label` */
  detailLabel?: LocalizedText;
  href: string;
}

export interface CaseStudyGalleryItem {
  icon: IconifyName;
  /** Thumbnail title, e.g. "Storefront Home" */
  title: LocalizedText;
  /** Thumbnail caption, e.g. "Customer Interface" */
  caption: LocalizedText;
  /** Headline shown on the media stage when selected */
  stageTitle: LocalizedText;
  /** Description shown on the media stage when selected */
  stageDescription: LocalizedText;
  screenshotSrc?: string;
}

export interface CaseStudyContribution {
  icon: IconifyName;
  title: LocalizedText;
  text: LocalizedText;
}

export interface CaseStudyMetric {
  value: string;
  label: LocalizedText;
  hint?: LocalizedText;
}

/** Optional extra content for /work/[slug]. Sections with no data are hidden. */
export interface CaseStudy {
  /** Pill above the title, e.g. "Freelance · E-Commerce Platform" */
  typeLabel?: LocalizedText;
  /** Second pill, e.g. "Egypt & Saudi Arabia" */
  market?: LocalizedText;
  deliverable?: LocalizedText;
  /** Longer intro paragraph; falls back to the project summary */
  intro?: LocalizedText;
  gallery?: CaseStudyGalleryItem[];
  contributions?: CaseStudyContribution[];
  metrics?: CaseStudyMetric[];
  /** Full stack list; falls back to the project's card stack */
  stack?: string[];
  /** Status / accuracy note shown under the contributions */
  note?: LocalizedText;
}

export interface WorkProject {
  slug: string;
  title: string;
  category: ProjectCategory;
  /** Pill on the media stage, e.g. "Professional · Code95" */
  categoryBadge: LocalizedText;
  role: LocalizedText;
  period: LocalizedText;
  summary: LocalizedText;
  /** Extra callout, shown on featured (wide) cards only */
  highlight?: { label: LocalizedText; text: LocalizedText };
  stack: string[];
  status?: ProjectStatus;
  /** Wide, two-column card at the top of the grid */
  featured?: boolean;
  links: ProjectLink[];
  caseStudy?: CaseStudy;
  /** Shown instead of links when the project is private, e.g. "Internal Enterprise" */
  privateNote?: LocalizedText;
  screenshotSrc?: string;
}

export interface AboutApproachStep {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  /** Short footer label, e.g. "Discovery & Planning" */
  tag: LocalizedText;
}

export interface AboutProjectChip {
  label: LocalizedText;
  /** When set, the chip links to /work/<slug> */
  slug?: string;
}

export interface AboutExperienceEntry {
  id: string;
  period: LocalizedText;
  title: LocalizedText;
  badge: LocalizedText;
  description: LocalizedText;
  projectsLabel: LocalizedText;
  projects: AboutProjectChip[];
  isCurrent?: boolean;
}

export interface AboutSkillGroup {
  id: string;
  icon: IconifyName;
  title: LocalizedText;
  skills: LocalizedText[];
}
