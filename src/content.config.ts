/**
 * Colecciones de contenido.
 *
 * Noticias: un archivo Markdown por noticia e idioma, en
 *   src/content/news/<idioma>/<nombre-de-la-noticia>.md
 * El nombre del archivo debe ser el mismo en los tres idiomas: así la web
 * sabe que son la misma noticia traducida (selector de idioma).
 *
 * Lo normal es crearlas desde el panel /admin/, que sigue esta estructura.
 * Las imágenes van en src/assets/news/ y se citan como /src/assets/news/foto.jpg.
 */
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { newsCategories } from './data/newsCategories';

/** Texto opcional: un campo vacío se trata como si no existiera. */
const optionalText = z
  .string()
  .nullish()
  .transform((v) => (v && v.trim() ? v.trim() : undefined));

const news = defineCollection({
  loader: glob({ pattern: '*/*.md', base: './src/content/news' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Fecha de publicación (AAAA-MM-DD). Las más recientes salen primero. */
      date: z.coerce.date(),
      /** Sección a la que pertenece. Sirve para filtrar y como rótulo por defecto. */
      category: z.enum(newsCategories),
      /** Rótulo pequeño sobre el título, p. ej. «Gran Premio de Singapur». Si falta, se usa la categoría. */
      tag: optionalText,
      /** Entradilla: una o dos frases que resumen la noticia. */
      excerpt: z.string(),
      /** Imagen principal. Ideal 16:9 y al menos 1920 px de ancho. */
      image: image(),
      imageAlt: z.string(),
      /** Encuadre de la imagen (CSS object-position), p. ej. «50% 50%» (centro). */
      imagePosition: optionalText,
      /** Borrador: no se publica. */
      draft: z.boolean().nullish().transform((v) => v ?? false),
    }),
});

export const collections = { news };
