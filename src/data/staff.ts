/** Personal del equipo (src/content/staff/). */
import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/config';

export type StaffEntry = CollectionEntry<'staff'>;

/** Personas publicadas de un idioma, por orden y luego por nombre. */
export async function getStaff(lang: Lang): Promise<StaffEntry[]> {
  const all = await getCollection('staff', (e) => !e.data.draft && e.id.startsWith(`${lang}/`));
  return all.sort(
    (a, b) => (a.data.order ?? 999) - (b.data.order ?? 999) || a.data.name.localeCompare(b.data.name)
  );
}

/** Iniciales para cuando no hay foto, p. ej. «NC». */
export function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter((w) => /^\p{L}/u.test(w))
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}
