/**
 * Tipos de clima. Cada uno tiene su icono en `src/assets/weather/<tipo>.png`
 * y su nombre en los tres idiomas.
 */
import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/config';

export const weatherTypes = [
  'sunny',
  'mostly-sunny',
  'partly-cloudy',
  'cloudy',
  'drizzle',
  'light-rain',
  'showers',
  'rain',
  'storm',
  'heavy-storm',
] as const;

export type WeatherType = (typeof weatherTypes)[number];

export const weatherLabels: Record<WeatherType, Record<Lang, string>> = {
  sunny: { es: 'Soleado', en: 'Sunny', ca: 'Assolellat' },
  'mostly-sunny': { es: 'Mayormente soleado', en: 'Mostly sunny', ca: 'Majoritàriament assolellat' },
  'partly-cloudy': { es: 'Parcialmente nublado', en: 'Partly cloudy', ca: 'Parcialment ennuvolat' },
  cloudy: { es: 'Nublado', en: 'Cloudy', ca: 'Ennuvolat' },
  drizzle: { es: 'Llovizna', en: 'Drizzle', ca: 'Plugim' },
  'light-rain': { es: 'Lluvia ligera', en: 'Light rain', ca: 'Pluja lleugera' },
  showers: { es: 'Chubascos', en: 'Showers', ca: 'Ruixats' },
  rain: { es: 'Lluvia', en: 'Rain', ca: 'Pluja' },
  storm: { es: 'Tormenta', en: 'Storm', ca: 'Tempesta' },
  'heavy-storm': { es: 'Tormenta fuerte', en: 'Heavy storm', ca: 'Tempesta forta' },
};

const icons = import.meta.glob<ImageMetadata>('../assets/weather/*.png', { eager: true, import: 'default' });

export function weatherIcon(type: WeatherType): ImageMetadata {
  const img = icons[`../assets/weather/${type}.png`];
  if (!img) throw new Error(`Falta el icono del clima: src/assets/weather/${type}.png`);
  return img;
}
