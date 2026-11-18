export interface Props {
  variant?: "hero" | "compact";
  /** "lg": Home hero (~340px wide on desktop). "md": About intro (~208px). Hero variant only. */
  size?: "lg" | "md";
  src?: string;
  alt?: string;
  monogram?: string;
  name?: string;
  role?: string;
}
