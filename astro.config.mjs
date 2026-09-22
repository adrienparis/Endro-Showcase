// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/roadmap': '/roadmap/endro',
  },
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
    routing: {
        prefixDefaultLocale: true
    }
  },

  integrations: [mdx()],
});