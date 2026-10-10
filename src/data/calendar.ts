/**
 * Calendario de la temporada en curso (temporada 68 de My Racing Career).
 *
 * - `start` / `end`: primer y último día del fin de semana (AAAA-MM-DD).
 * - `raceStart`: hora de salida de la carrera en UTC (hora peninsular − 2 h
 *   en verano, − 1 h en invierno). La usa la cuenta atrás.
 * - `circuit`: nombre de la imagen en `src/assets/circuits/` (sin `.jpg`).
 * - `country`: código ISO del país, para la bandera.
 */
import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/config';

export interface Race {
  round: number;
  name: Record<Lang, string>;
  circuitName: string;
  circuit: string;
  country: string;
  start: string;
  end: string;
  raceStart: string;
}

export const races: Race[] = [
  { round: 1, name: { es: 'Gran Premio de Australia', en: 'Australian Grand Prix', ca: "Gran Premi d'Austràlia" }, circuitName: 'Albert Park', circuit: 'melbourne', country: 'AU', start: '2026-11-04', end: '2026-11-05', raceStart: '2026-11-05T17:00:00Z' },
  { round: 2, name: { es: 'Gran Premio de China', en: 'Chinese Grand Prix', ca: 'Gran Premi de la Xina' }, circuitName: 'Shanghai International Circuit', circuit: 'shanghai', country: 'CN', start: '2026-11-07', end: '2026-11-08', raceStart: '2026-11-08T17:00:00Z' },
  { round: 3, name: { es: 'Gran Premio de Japón', en: 'Japanese Grand Prix', ca: 'Gran Premi del Japó' }, circuitName: 'Suzuka International Racing Course', circuit: 'suzuka', country: 'JP', start: '2026-11-10', end: '2026-11-11', raceStart: '2026-11-11T17:00:00Z' },
  { round: 4, name: { es: 'Gran Premio de Baréin', en: 'Bahrain Grand Prix', ca: 'Gran Premi de Bahrain' }, circuitName: 'Bahrain International Circuit', circuit: 'sakhir', country: 'BH', start: '2026-11-12', end: '2026-11-13', raceStart: '2026-11-13T17:00:00Z' },
  { round: 5, name: { es: 'Gran Premio de Arabia Saudí', en: 'Saudi Arabian Grand Prix', ca: "Gran Premi de l'Aràbia Saudita" }, circuitName: 'Jeddah Corniche Circuit', circuit: 'jeddah', country: 'SA', start: '2026-11-14', end: '2026-11-15', raceStart: '2026-11-15T17:00:00Z' },
  { round: 6, name: { es: 'Gran Premio de Miami', en: 'Miami Grand Prix', ca: 'Gran Premi de Miami' }, circuitName: 'Miami International Autodrome', circuit: 'miami', country: 'US', start: '2026-11-17', end: '2026-11-18', raceStart: '2026-11-18T17:00:00Z' },
  { round: 7, name: { es: 'Gran Premio de Canadá', en: 'Canadian Grand Prix', ca: 'Gran Premi del Canadà' }, circuitName: 'Circuit Gilles Villeneuve', circuit: 'montreal', country: 'CA', start: '2026-11-19', end: '2026-11-20', raceStart: '2026-11-20T17:00:00Z' },
  { round: 8, name: { es: 'Gran Premio de Mónaco', en: 'Monaco Grand Prix', ca: 'Gran Premi de Mònaco' }, circuitName: 'Circuit de Monaco', circuit: 'monaco', country: 'MC', start: '2026-11-21', end: '2026-11-22', raceStart: '2026-11-22T17:00:00Z' },
  { round: 9, name: { es: 'Gran Premio de Barcelona-Catalunya', en: 'Barcelona-Catalunya Grand Prix', ca: 'Gran Premi de Barcelona-Catalunya' }, circuitName: 'Circuit de Barcelona-Catalunya', circuit: 'barcelona', country: 'ES', start: '2026-11-25', end: '2026-11-26', raceStart: '2026-11-26T17:00:00Z' },
  { round: 10, name: { es: 'Gran Premio de Austria', en: 'Austrian Grand Prix', ca: "Gran Premi d'Àustria" }, circuitName: 'Red Bull Ring', circuit: 'spielberg', country: 'AT', start: '2026-11-28', end: '2026-11-29', raceStart: '2026-11-29T17:00:00Z' },
  { round: 11, name: { es: 'Gran Premio de Gran Bretaña', en: 'British Grand Prix', ca: 'Gran Premi de la Gran Bretanya' }, circuitName: 'Silverstone', circuit: 'silverstone', country: 'GB', start: '2026-12-02', end: '2026-12-03', raceStart: '2026-12-03T17:00:00Z' },
  { round: 12, name: { es: 'Gran Premio de Bélgica', en: 'Belgian Grand Prix', ca: 'Gran Premi de Bèlgica' }, circuitName: 'Circuit de Spa-Francorchamps', circuit: 'spa', country: 'BE', start: '2026-12-05', end: '2026-12-06', raceStart: '2026-12-06T17:00:00Z' },
  { round: 13, name: { es: 'Gran Premio de Hungría', en: 'Hungarian Grand Prix', ca: "Gran Premi d'Hongria" }, circuitName: 'Hungaroring', circuit: 'hungaroring', country: 'HU', start: '2026-12-08', end: '2026-12-09', raceStart: '2026-12-09T17:00:00Z' },
  { round: 14, name: { es: 'Gran Premio de los Países Bajos', en: 'Dutch Grand Prix', ca: 'Gran Premi dels Països Baixos' }, circuitName: 'Circuit Park Zandvoort', circuit: 'zandvoort', country: 'NL', start: '2026-12-10', end: '2026-12-11', raceStart: '2026-12-11T17:00:00Z' },
  { round: 15, name: { es: 'Gran Premio de Italia', en: 'Italian Grand Prix', ca: "Gran Premi d'Itàlia" }, circuitName: 'Autodromo Nazionale Monza', circuit: 'monza', country: 'IT', start: '2026-12-12', end: '2026-12-13', raceStart: '2026-12-13T17:00:00Z' },
  { round: 16, name: { es: 'Gran Premio de España', en: 'Spanish Grand Prix', ca: "Gran Premi d'Espanya" }, circuitName: 'Madring', circuit: 'madrid', country: 'ES', start: '2026-12-16', end: '2026-12-17', raceStart: '2026-12-17T17:00:00Z' },
  { round: 17, name: { es: 'Gran Premio de Azerbaiyán', en: 'Azerbaijan Grand Prix', ca: "Gran Premi de l'Azerbaidjan" }, circuitName: 'Baku City Circuit', circuit: 'baku', country: 'AZ', start: '2026-12-19', end: '2026-12-20', raceStart: '2026-12-20T17:00:00Z' },
  { round: 18, name: { es: 'Gran Premio de Singapur', en: 'Singapore Grand Prix', ca: 'Gran Premi de Singapur' }, circuitName: 'Marina Bay Street Circuit', circuit: 'singapore', country: 'SG', start: '2026-12-23', end: '2026-12-24', raceStart: '2026-12-24T17:00:00Z' },
  { round: 19, name: { es: 'Gran Premio de Estados Unidos', en: 'United States Grand Prix', ca: 'Gran Premi dels Estats Units' }, circuitName: 'Circuit of the Americas', circuit: 'austin', country: 'US', start: '2026-12-26', end: '2026-12-27', raceStart: '2026-12-27T17:00:00Z' },
  { round: 20, name: { es: 'Gran Premio de México', en: 'Mexico City Grand Prix', ca: 'Gran Premi de Mèxic' }, circuitName: 'Autódromo Hermanos Rodríguez', circuit: 'mexico', country: 'MX', start: '2026-12-29', end: '2026-12-30', raceStart: '2026-12-30T17:00:00Z' },
  { round: 21, name: { es: 'Gran Premio de São Paulo', en: 'São Paulo Grand Prix', ca: 'Gran Premi de São Paulo' }, circuitName: 'Autódromo José Carlos Pace', circuit: 'interlagos', country: 'BR', start: '2026-12-31', end: '2027-01-01', raceStart: '2027-01-01T17:00:00Z' },
  { round: 22, name: { es: 'Gran Premio de Las Vegas', en: 'Las Vegas Grand Prix', ca: 'Gran Premi de Las Vegas' }, circuitName: 'Las Vegas Strip Circuit', circuit: 'las-vegas', country: 'US', start: '2027-01-02', end: '2027-01-03', raceStart: '2027-01-03T17:00:00Z' },
  { round: 23, name: { es: 'Gran Premio de Catar', en: 'Qatar Grand Prix', ca: 'Gran Premi de Qatar' }, circuitName: 'Lusail International Circuit', circuit: 'losail', country: 'QA', start: '2027-01-06', end: '2027-01-07', raceStart: '2027-01-07T17:00:00Z' },
  { round: 24, name: { es: 'Gran Premio de Abu Dabi', en: 'Abu Dhabi Grand Prix', ca: "Gran Premi d'Abu Dhabi" }, circuitName: 'Yas Marina Circuit', circuit: 'yas-marina', country: 'AE', start: '2027-01-09', end: '2027-01-10', raceStart: '2027-01-10T17:00:00Z' },
];

const circuitImages = import.meta.glob<ImageMetadata>('../assets/circuits/*.jpg', { eager: true, import: 'default' });

/** Imagen del circuito de una carrera. */
export function circuitImage(race: Race): ImageMetadata {
  const img = circuitImages[`../assets/circuits/${race.circuit}.jpg`];
  if (!img) throw new Error(`Falta la imagen del circuito: src/assets/circuits/${race.circuit}.jpg`);
  return img;
}

/** Rango de fechas del fin de semana, p. ej. «09 – 11 oct.» o «30 oct. – 01 nov.». */
export function formatWeekend(race: Race, lang: Lang): string {
  const locale = { es: 'es-ES', en: 'en-GB', ca: 'ca-ES' }[lang];
  const d = (s: string) => new Date(`${s}T12:00:00Z`);
  const day = new Intl.DateTimeFormat(locale, { day: '2-digit', timeZone: 'UTC' });
  const month = new Intl.DateTimeFormat(locale, { month: 'long', timeZone: 'UTC' });
  const a = d(race.start);
  const b = d(race.end);
  if (a.getUTCMonth() === b.getUTCMonth()) {
    return `${day.format(a)} – ${day.format(b)} ${month.format(b)}`;
  }
  return `${day.format(a)} ${month.format(a)} – ${day.format(b)} ${month.format(b)}`;
}

/** Índice de la próxima carrera respecto a una fecha (o -1 si la temporada ha terminado). */
export function nextRaceIndex(now: Date = new Date()): number {
  return races.findIndex((r) => new Date(r.raceStart).getTime() > now.getTime());
}
