import type { ThemeMode } from "@/types/portfolio";

/**
 * Light/dark theme.
 * - First visit: follows the device (`prefers-color-scheme`).
 * - After the user toggles: their choice is stored and wins over the device.
 * `useDark` toggles the `dark` class on <html>, which Tailwind's dark variant uses.
 * Toggling reveals the new theme as a circle growing from the clicked button.
 */
export function useTheme() {
  const isDark = useDark({ storageKey: "portfolio-theme-mode" });

  const theme = computed<ThemeMode>(() => (isDark.value ? "dark" : "light"));

  async function toggleTheme(event?: MouseEvent): Promise<void> {
    // Centre of the pressed button (works for keyboard activation too)
    const button = (event?.target as HTMLElement | null)?.closest("button");
    const rect = button?.getBoundingClientRect();
    const origin = rect
      ? { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
      : undefined;

    await withViewTransition(
      () => {
        isDark.value = !isDark.value;
      },
      { kind: "theme", origin },
    );
  }

  return { theme, toggleTheme };
}
