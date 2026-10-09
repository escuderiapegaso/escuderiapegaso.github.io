/** Utilidades para leer las noticias de `src/content/news/`. */
import { getCollection, type CollectionEntry } from 'astro:content';
import { langs, type Lang } from '../i18n/config';
import { getPath } from '../i18n/routes';

export type NewsEntry = CollectionEntry<'news'>;

/** Separa el id «es/mi-noticia» en idioma y nombre. */
export function splitId(entry: NewsEntry): { lang: Lang; slug: string } {
  const [lang, ...rest] = entry.id.split('/');
  return { lang: lang as Lang, slug: rest.join('/') };
}

/** Noticias publicadas de un idioma, de la más reciente a la más antigua. */
export async function getNews(lang: Lang): Promise<NewsEntry[]> {
  const all = await getCollection('news', (e) => !e.data.draft && splitId(e).lang === lang);
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/** Dirección de una noticia, p. ej. `/es/noticias/mi-noticia/`. */
export function newsPath(lang: Lang, slug: string): string {
  return `${getPath(lang, 'news')}${slug}/`;
}

/**
 * Direcciones de la misma noticia en cada idioma. Si falta la traducción,
 * el selector de idioma lleva a la sección de noticias de ese idioma.
 */
export async function newsAlternates(slug: string): Promise<Record<Lang, string>> {
  const all = await getCollection('news', (e) => !e.data.draft);
  const available = new Set(all.map((e) => e.id));
  return Object.fromEntries(
    langs.map((l) => [l, available.has(`${l}/${slug}`) ? newsPath(l, slug) : getPath(l, 'news')])
  ) as Record<Lang, string>;
}

/** Fecha larga en el idioma indicado, p. ej. «7 de octubre de 2026». */
export function formatDate(date: Date, lang: Lang): string {
  const locale = { es: 'es-ES', en: 'en-GB', ca: 'ca-ES' }[lang];
  return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(date);
}
