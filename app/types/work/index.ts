import type {
  LocalizedText,
  ProjectCategory,
  WorkProject,
} from "@/types/portfolio";

export type WorkFilter = "all" | ProjectCategory;

export interface WorkProjectCardProps {
  project: WorkProject;
}

export interface WorkFilterOption {
  value: WorkFilter;
  label: LocalizedText;
  count: number;
}

export interface WorkFilterBarProps {
  options: WorkFilterOption[];
}

export interface CaseStudyProps {
  project: WorkProject;
}

export interface CaseStudyPagerProps {
  previous: WorkProject;
  next: WorkProject;
}

export interface WorkCtaSectionProps {
  eyebrow?: LocalizedText;
  title?: LocalizedText;
  description?: LocalizedText;
  primaryLabel?: LocalizedText;
}
