export interface Props {
  /** Display value, e.g. "30", "3+" or "100+". The number counts up; any prefix/suffix stays put. */
  value: string;
  /** Begin counting when this turns true (e.g. when the section scrolls into view). */
  start?: boolean;
  /** Count duration in ms. */
  duration?: number;
  /** Delay before counting begins, in ms (use for staggering). */
  delay?: number;
}
