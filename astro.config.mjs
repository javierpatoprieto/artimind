import { defineConfig } from 'astro/config';

// https://astro.build
export default defineConfig({
  site: 'https://artimind.art',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
