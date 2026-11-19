export interface Props {
  /** The sentence to reveal, one word at a time. */
  text: string;
  /** Element to render, e.g. "p" or "span". */
  tag?: string;
  /** Delay before the first word, in ms. */
  delay?: number;
  /** Gap between consecutive words, in ms. */
  step?: number;
}
