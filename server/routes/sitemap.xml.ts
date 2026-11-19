import { WORK_PROJECTS } from "../../app/data/work";

const LOCALES = ["en", "ar"];
const STATIC_PATHS = ["", "/work", "/about", "/contact"];

/** Every page in every language, each with hreflang alternates. New projects appear automatically. */
export default defineEventHandler((event) => {
  const origin = String(
    useRuntimeConfig(event).public.siteUrl || getRequestURL(event).origin,
  ).replace(/\/$/, "");

  const paths = [
    ...STATIC_PATHS,
    ...WORK_PROJECTS.map((project) => `/work/${project.slug}`),
  ];

  const entries = paths.flatMap((path) =>
    LOCALES.map((locale) => {
      const links = [
        ...LOCALES.map(
          (alt) =>
            `<xhtml:link rel="alternate" hreflang="${alt}" href="${origin}/${alt}${path}"/>`,
        ),
        `<xhtml:link rel="alternate" hreflang="x-default" href="${origin}/en${path}"/>`,
      ].join("");
      return `<url><loc>${origin}/${locale}${path}</loc>${links}</url>`;
    }),
  );

  setHeader(event, "content-type", "application/xml; charset=utf-8");
  return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries.join("")}</urlset>`;
});
