import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  site: 'https://www.artimind.art',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
