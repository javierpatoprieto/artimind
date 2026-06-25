import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  site: 'https://www.artimind.art',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
});
