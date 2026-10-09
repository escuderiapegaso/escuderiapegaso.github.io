// @ts-check
import { defineConfig } from 'astro/config';

// Web publicada en GitHub Pages (organización «escuderiapegaso»).
// Si algún día se usa un dominio propio, cambia `site` y añade `public/CNAME`.
export default defineConfig({
  site: 'https://escuderiapegaso.github.io',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
