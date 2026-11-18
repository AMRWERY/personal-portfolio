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
  | "lucide:folder-search";

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
  href: string;
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
  /** Shown instead of links when the project is private, e.g. "Internal Enterprise" */
  privateNote?: LocalizedText;
  screenshotSrc?: string;
}
