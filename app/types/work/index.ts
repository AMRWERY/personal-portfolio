import type { ProjectCategory, WorkProject } from "@/types/portfolio";

export type WorkFilter = "all" | ProjectCategory;

export interface WorkProjectCardProps {
  project: WorkProject;
}

export interface WorkFilterOption {
  value: WorkFilter;
  label: { en: string; ar: string };
  count: number;
}

export interface WorkFilterBarProps {
  options: WorkFilterOption[];
}
