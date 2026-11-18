import type { ThemeMode } from "@/types/portfolio";

const theme = ref<ThemeMode>("dark");

function applyTheme(mode: ThemeMode): void {
  const root = document.documentElement;
  root.classList.toggle("dark", mode === "dark");
}

export function useTheme() {
  onMounted(() => {
    const saved = localStorage.getItem("portfolio-theme") as ThemeMode | null;
    if (saved === "light" || saved === "dark") {
      theme.value = saved;
    }
    applyTheme(theme.value);
  });

  function toggleTheme(): void {
    theme.value = theme.value === "dark" ? "light" : "dark";
    localStorage.setItem("portfolio-theme", theme.value);
    applyTheme(theme.value);
  }

  return { theme, toggleTheme };
}
