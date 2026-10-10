/**
 * Categorías de las noticias. Cada una coincide con una sección de la web,
 * así que su nombre visible sale de las traducciones de esa sección.
 * Si añades una, añádela también en `public/admin/config.yml` (campo «Categoría»).
 */
export const newsCategories = ['team', 'car', 'races', 'ddp', 'open-series', 'sponsors'] as const;

export type NewsCategory = (typeof newsCategories)[number];
