// @ts-check
import { defineConfig } from 'astro/config';
import remarkSrcAssets from './src/lib/remark-src-assets.mjs';

// Web publicada en GitHub Pages (organización «escuderiapegaso»).
// Si algún día se usa un dominio propio, cambia `site` y añade `public/CNAME`.
export default defineConfig({
  site: 'https://escuderiapegaso.github.io',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  markdown: {
    // Imágenes del texto de las noticias escritas desde el panel /admin/
    remarkPlugins: [remarkSrcAssets],
  },
});
