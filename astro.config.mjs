import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), sitemap()],
  output: 'static',
  adapter: vercel({
    imageService: false,
    webAnalytics: {
      enabled: true,
    },
  }),
});
