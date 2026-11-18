export type Locale = "en" | "ar";
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
  | "lucide:linkedin";

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