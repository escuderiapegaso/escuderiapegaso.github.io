import type { Lang } from './config';

/**
 * Mapa de páginas de la web. Cada clave identifica una página y define su
 * dirección (slug) en cada idioma. Para crear una página nueva:
 *   1. Añade aquí su clave y slugs.
 *   2. Añade su título en `ui.ts` (pages.<clave>).
 *   3. Crea su vista en `src/views/` y regístrala en `src/pages/[lang]/[...slug].astro`.
 */
export const routes = {
  home: { es: '', en: '', ca: '' },
  car: { es: 'coche', en: 'car', ca: 'cotxe' },
  team: { es: 'equipo', en: 'team', ca: 'equip' },
  'team/john-cannon': { es: 'equipo/john-cannon', en: 'team/john-cannon', ca: 'equip/john-cannon' },
  'team/remco-raveel': { es: 'equipo/remco-raveel', en: 'team/remco-raveel', ca: 'equip/remco-raveel' },
  'team/nicorz': { es: 'equipo/nicorz', en: 'team/nicorz', ca: 'equip/nicorz' },
  news: { es: 'noticias', en: 'news', ca: 'noticies' },
  races: { es: 'carreras', en: 'races', ca: 'curses' },
  history: { es: 'historia', en: 'history', ca: 'historia' },
  ddp: {
    es: 'programa-desarrollo-pilotos',
    en: 'driver-development-programme',
    ca: 'programa-desenvolupament-pilots',
  },
  'open-series': { es: 'open-series', en: 'open-series', ca: 'open-series' },
  sponsors: { es: 'patrocinadores', en: 'partners', ca: 'patrocinadors' },
  fanclub: { es: 'fanclub', en: 'fan-club', ca: 'fanclub' },
  shop: { es: 'tienda', en: 'store', ca: 'botiga' },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof routes;

/** Antepone la ruta base del sitio (necesaria si se publica en un subdirectorio). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}

/** Dirección completa de una página en un idioma, p. ej. `/es/coche/`. */
export function getPath(lang: Lang, key: RouteKey): string {
  const slug = routes[key][lang];
  return withBase(slug ? `/${lang}/${slug}/` : `/${lang}/`);
}
