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
import { weatherTypes } from './data/weather';

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

/* ---------- Carreras ---------- */

/** Número opcional: vacío = sin dato. */
const optionalNumber = z.preprocess(
  (v) => (v === '' || v === null ? undefined : typeof v === 'string' ? Number(v.replace(',', '.')) : v),
  z.number().optional()
);

const record = z
  .object({
    time: optionalText,
    driver: optionalText,
    team: optionalText,
    season: optionalNumber,
  })
  .nullish()
  .transform((r) => (r && r.time ? r : undefined));

/** Datos fijos de cada circuito: src/data/circuits/<circuito>.yml (se editan en /admin/) */
const circuits = defineCollection({
  loader: glob({ pattern: '*.yml', base: './src/data/circuits' }),
  schema: z.object({
    city: optionalText,
    length: optionalNumber,
    laps: optionalNumber,
    qualiRecord: record,
    raceRecord: record,
  }),
});

/** Parrilla de cada temporada: src/data/grids/<temporada>.yml */
const grids = defineCollection({
  loader: glob({ pattern: '*.yml', base: './src/data/grids' }),
  schema: z.object({
    teams: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        color: z.string().regex(/^#[0-9a-fA-F]{6}$/, 'El color debe ir así: \'#a50034\''),
        emblem: optionalText,
      })
    ),
    drivers: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        country: optionalText,
        number: optionalNumber,
        team: z.string(),
        helmet: optionalText,
      })
    ),
  }),
});

/** Clima: si no se ha elegido el tipo, se trata como «pendiente». */
const weather = z.preprocess(
  (w) => (w && typeof w === 'object' && (w as { type?: unknown }).type ? w : undefined),
  z.object({ type: z.enum(weatherTypes), chance: optionalNumber }).optional()
);

/** Tiempo como texto ('1:18.456', '+5.321'); se aceptan también números. */
const timeText = z
  .union([z.string(), z.number()])
  .nullish()
  .transform((v) => (v === null || v === undefined || v === '' ? undefined : String(v).trim()));

/** Resultados de cada GP: src/data/results/<temporada>/<circuito>.yml */
const results = defineCollection({
  loader: glob({ pattern: '*/*.yml', base: './src/data/results' }),
  schema: z.object({
    qualifying: z
      .object({
        weather,
        results: z
          .array(z.object({ driver: z.string(), time: timeText }))
          .nullish()
          .transform((v) => v ?? []),
      })
      .nullish()
      .transform((v) => v ?? { weather: undefined, results: [] }),
    race: z
      .object({
        weather,
        fastestLap: optionalText,
        results: z
          .array(
            z.object({
              driver: z.string(),
              laps: optionalNumber,
              time: timeText,
              dnf: z.boolean().nullish().transform((v) => v ?? false),
            })
          )
          .nullish()
          .transform((v) => v ?? []),
      })
      .nullish()
      .transform((v) => v ?? { weather: undefined, fastestLap: undefined, results: [] }),
  }),
});

export const collections = { news, circuits, grids, results };
