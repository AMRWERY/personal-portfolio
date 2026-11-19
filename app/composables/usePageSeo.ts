import { PROFILE } from "@/data/home";

interface PageSeoOptions {
  /** Full <title>, already localised (getter so it follows the language). */
  title: () => string;
  description: () => string;
  /** Social preview image, site-relative (e.g. "/img/projects/Lexus.png"). Defaults to the portrait. */
  image?: string;
  imageAlt?: () => string;
  type?: "website" | "article" | "profile";
  /** Hide from search engines. */
  noindex?: boolean;
  /** Structured data (schema.org). Receives a helper that makes a path absolute. */
  jsonLd?: (abs: (path: string) => string) => Record<string, unknown>[];
}

const OG_LOCALE: Record<string, string> = { en: "en_US", ar: "ar_EG" };

/**
 * One place for every page's SEO: title, description, Open Graph, Twitter card,
 * canonical + hreflang links and JSON-LD. Pages only pass their own title/description.
 *
 * Absolute URLs use NUXT_PUBLIC_SITE_URL when set, otherwise the host serving the request.
 */
export function usePageSeo(options: PageSeoOptions) {
  const { locale, locales } = useI18n();
  const route = useRoute();
  const switchLocalePath = useSwitchLocalePath();
  const config = useRuntimeConfig();
  const requestUrl = useRequestURL();

  const origin = computed(() =>
    String(config.public.siteUrl || requestUrl.origin).replace(/\/$/, ""),
  );
  const abs = (path: string) =>
    /^https?:\/\//.test(path) ? path : `${origin.value}${path}`;

  const codes = computed(() =>
    locales.value.map((l) => (typeof l === "string" ? l : l.code)),
  );
  const canonical = computed(() => abs(route.path.replace(/(.)\/$/, "$1")));
  const image = computed(() => abs(options.image ?? PROFILE.avatarSrc));
  const imageAlt = computed(() => options.imageAlt?.() ?? PROFILE.name);

  useSeoMeta({
    title: options.title,
    description: options.description,
    robots: options.noindex ? "noindex, nofollow" : "index, follow",
    author: PROFILE.name,
    ogType: options.type ?? "website",
    ogSiteName: PROFILE.name,
    ogTitle: options.title,
    ogDescription: options.description,
    ogUrl: () => canonical.value,
    ogLocale: () => OG_LOCALE[locale.value] ?? locale.value,
    ogImage: () => image.value,
    ogImageAlt: () => imageAlt.value,
    twitterCard: options.image ? "summary_large_image" : "summary",
    twitterTitle: options.title,
    twitterDescription: options.description,
    twitterImage: () => image.value,
    twitterImageAlt: () => imageAlt.value,
  });

  useHead(() => {
    const alternates = codes.value
      .map((code) => ({ code, path: switchLocalePath(code as "en" | "ar") }))
      .filter((a) => a.path);

    return {
      link: [
        { rel: "canonical", href: canonical.value },
        ...alternates.map((a) => ({
          rel: "alternate",
          hreflang: a.code,
          href: abs(a.path),
        })),
        ...(alternates.length
          ? [
              {
                rel: "alternate",
                hreflang: "x-default",
                href: abs(
                  alternates.find((a) => a.code === "en")?.path ??
                    alternates[0]!.path,
                ),
              },
            ]
          : []),
      ],
      meta: codes.value
        .filter((code) => code !== locale.value)
        .map((code) => ({
          property: "og:locale:alternate",
          content: OG_LOCALE[code] ?? code,
        })),
      script: (options.jsonLd?.(abs) ?? []).map((schema) => ({
        type: "application/ld+json",
        // "<" escaped so structured data can never close the script tag
        innerHTML: JSON.stringify({ "@context": "https://schema.org", ...schema }).replace(
          /</g,
          "\\u003c",
        ),
      })),
    };
  });
}

/** schema.org Person for the site owner. */
export function personSchema(abs: (path: string) => string) {
  return {
    "@type": "Person",
    "@id": abs("/#person"),
    name: PROFILE.name,
    jobTitle: "Frontend Developer",
    url: abs("/"),
    image: abs(PROFILE.avatarSrc),
    email: PROFILE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressCountry: "EG",
    },
    sameAs: [PROFILE.githubUrl, PROFILE.linkedinUrl],
    knowsAbout: ["Vue.js", "Nuxt.js", "TypeScript", "Tailwind CSS", "REST APIs"],
  };
}
