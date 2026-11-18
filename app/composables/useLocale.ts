import type { Locale, LocalizedText } from "~/types/portfolio";

export function useLocale() {
  const { locale, setLocale } = useI18n();
  const switchLocalePath = useSwitchLocalePath();

  /** Pick the string for the active locale from an { en, ar } object. */
  const t = (text: LocalizedText): string =>
    text[locale.value as Locale] ?? text.en;

  async function toggleLocale() {
    const next: Locale = locale.value === "en" ? "ar" : "en";
    await setLocale(next);
    const path = switchLocalePath(next);
    if (path) await navigateTo(path);
  }

  return { locale, t, toggleLocale };
}
