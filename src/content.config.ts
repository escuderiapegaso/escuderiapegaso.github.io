/**
 * Colecciones de contenido.
 *
 * Noticias: un archivo Markdown por noticia e idioma, en
 *   src/content/news/<idioma>/<nombre-de-la-noticia>.md
 * El nombre del archivo debe ser el mismo en los tres idiomas: así la web
 * sabe que son la misma noticia traducida (selector de idioma).
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/news' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Fecha de publicación (AAAA-MM-DD). Las más recientes salen primero. */
      date: z.coerce.date(),
      /** Rótulo pequeño sobre el título, p. ej. «Gran Premio de Singapur». */
      tag: z.string().optional(),
      /** Entradilla: una o dos frases que resumen la noticia. */
      excerpt: z.string(),
      /** Imagen principal. Ideal 16:9 y al menos 1920 px de ancho. */
      image: image(),
      imageAlt: z.string(),
      /** Encuadre de la imagen en la portada (CSS object-position), p. ej. «60% 50%». */
      imagePosition: z.string().default('50% 50%'),
      /** Borrador: no se publica. */
      draft: z.boolean().default(false),
    }),
});

export const collections = { news };
