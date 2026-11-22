import type { Locale } from "~/types/supported-locales";

export const useLocale = () => {
  const { locale, t: translate, setLocale } = useI18n();
  const switchLocalePath = useSwitchLocalePath();

  /**
   * Translate a message key from app/i18n/locales/{en,ar}.json.
   * `named` fills {placeholders}, e.g. t("ui.caseStudyPage.title", { title }).
   */
  const t = (key: string, named?: Record<string, unknown>): string =>
    named ? translate(key, named) : translate(key);

  /** Crossfades between languages so the dir/lang flip is never seen as a jump. */
  const toggleLocale = async () => {
    const next: Locale = locale.value === "en" ? "ar" : "en";
    await withViewTransition(async () => {
        await setLocale(next);
        const path = switchLocalePath(next);
        if (path) await navigateTo(path);
      });
  };

  return { locale, t, toggleLocale };
};
