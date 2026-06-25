import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { routes, SITE } from "../i18n/ui";
import { services } from "../data/services";

export const GET: APIRoute = async () => {
  const urls = new Set<string>();

  // Static pages from routes
  (["es", "en"] as const).forEach((lang) => {
    Object.values(routes[lang]).forEach((p) => urls.add(SITE + p));
  });

  // Service detail pages
  (["es", "en"] as const).forEach((lang) => {
    services[lang].forEach((s) => urls.add(`${SITE}${routes[lang].services}${s.slug}/`));
  });

  // Work + blog from collections
  const work = await getCollection("work");
  work.forEach((e) => urls.add(`${SITE}${routes[e.data.lang].work}${e.data.path}/`));
  const blog = await getCollection("blog");
  blog.forEach((e) => urls.add(`${SITE}${routes[e.data.lang].blog}${e.data.path}/`));

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...urls].map((u) => `  <url><loc>${u}</loc></url>`).join("\n")}
</urlset>`;

  return new Response(body, { headers: { "Content-Type": "application/xml" } });
};
