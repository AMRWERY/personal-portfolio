import type { ThemeMode } from "@/types/portfolio";

/**
 * Light/dark theme.
 * - First visit: follows the device (`prefers-color-scheme`).
 * - After the user toggles: their choice is stored and wins over the device.
 * `useDark` toggles the `dark` class on <html>, which Tailwind's dark variant uses.
 * Toggling crossfades the whole page in ~200ms.
 */
export function useTheme() {
  const isDark = useDark({ storageKey: "portfolio-theme-mode" });

  const theme = computed<ThemeMode>(() => (isDark.value ? "dark" : "light"));

  /** Background, surfaces, text and borders crossfade together (~200ms). */
  async function toggleTheme(): Promise<void> {
    await withViewTransition(() => {
      isDark.value = !isDark.value;
    });
  }

  return { theme, toggleTheme };
}
