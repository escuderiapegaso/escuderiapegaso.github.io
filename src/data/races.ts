/**
 * Carreras: une el calendario, los datos de cada circuito, la parrilla de la
 * temporada y los resultados, y calcula diferencias y puntos.
 */
import type { ImageMetadata } from 'astro';
import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/config';
import { getPath } from '../i18n/routes';
import { races, type Race } from './calendar';
import { season } from './team';

/** Puntos por posición (sin punto por vuelta rápida). */
export const POINTS = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];

/** Id del equipo propio en las parrillas: sus pilotos salen resaltados. */
export const OWN_TEAM = 'pegaso';

export type Grid = CollectionEntry<'grids'>['data'];
export type Team = Grid['teams'][number];
export type GridDriver = Grid['drivers'][number];
export type Circuit = CollectionEntry<'circuits'>['data'];
export type Results = CollectionEntry<'results'>['data'];

/* ---------- Direcciones ---------- */

export function racePath(lang: Lang, race: Race): string {
  return `${getPath(lang, 'races')}${race.circuit}/`;
}

export function raceAlternates(race: Race): Record<Lang, string> {
  return { es: racePath('es', race), en: racePath('en', race), ca: racePath('ca', race) };
}

/* ---------- Carga de datos ---------- */

export async function getCircuit(race: Race): Promise<Circuit | undefined> {
  return (await getEntry('circuits', race.circuit))?.data;
}

export async function getGrid(seasonNumber: number = season.number) {
  const entry = await getEntry('grids', String(seasonNumber));
  if (!entry) throw new Error(`Falta la parrilla de la temporada ${seasonNumber}: src/data/grids/${seasonNumber}.yml`);
  const teams = new Map(entry.data.teams.map((t) => [t.id, t]));
  const drivers = new Map(entry.data.drivers.map((d) => [d.id, d]));
  for (const d of entry.data.drivers) {
    if (!teams.has(d.team)) {
      throw new Error(`Parrilla ${seasonNumber}: el equipo «${d.team}» del piloto «${d.id}» no existe.`);
    }
  }
  return { teams, drivers };
}

export type LoadedGrid = Awaited<ReturnType<typeof getGrid>>;

export async function getResults(race: Race, seasonNumber: number = season.number): Promise<Results> {
  const entry = await getEntry('results', `${seasonNumber}/${race.circuit}`);
  return (
    entry?.data ?? {
      qualifying: { weather: undefined, results: [] },
      race: { weather: undefined, fastestLap: undefined, results: [] },
    }
  );
}

/** Resultados de todas las carreras de la temporada, en el orden del calendario. */
export async function getSeasonResults(seasonNumber: number = season.number) {
  const all = await getCollection('results', (e) => e.id.startsWith(`${seasonNumber}/`));
  const byCircuit = new Map(all.map((e) => [e.id.split('/')[1], e.data]));
  return races.map((race) => ({ race, results: byCircuit.get(race.circuit) }));
}

/* ---------- Tiempos ---------- */

/** Convierte '1:32:45.123', '1:18.456' o '78.456' en milisegundos. */
export function parseTime(text: string): number | undefined {
  const clean = text.replace(/^\+/, '').trim();
  if (!/^\d+(:\d{1,2}){0,2}(\.\d+)?$/.test(clean)) return undefined;
  const parts = clean.split(':');
  let seconds = 0;
  for (const p of parts) seconds = seconds * 60 + Number(p);
  return Math.round(seconds * 1000);
}

/** Milisegundos a texto: '1:32:45.123', '1:18.456' o '5.321'. */
export function formatTime(ms: number): string {
  const total = Math.round(ms);
  const h = Math.floor(total / 3_600_000);
  const m = Math.floor((total % 3_600_000) / 60_000);
  const s = Math.floor((total % 60_000) / 1000);
  const frac = String(total % 1000).padStart(3, '0');
  if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}.${frac}`;
  if (m > 0) return `${m}:${String(s).padStart(2, '0')}.${frac}`;
  return `${s}.${frac}`;
}

/* ---------- Filas de las tablas ---------- */

export interface Row {
  /** Posición, o undefined si abandonó. */
  pos?: number;
  driver: GridDriver;
  team: Team;
  /** Tiempo a mostrar ('—' si no hay). */
  time?: string;
  /** Diferencia con el primero: '+5.321', o vueltas perdidas. */
  gap?: string;
  lapsDown?: number;
  laps?: number;
  points?: number;
  dnf?: boolean;
  fastestLap?: boolean;
  own: boolean;
}

function lookup(grid: LoadedGrid, id: string, where: string) {
  const driver = grid.drivers.get(id);
  if (!driver) {
    throw new Error(
      `${where}: el piloto «${id}» no está en la parrilla. Revisa el id en src/data/grids/${season.number}.yml.`
    );
  }
  return { driver, team: grid.teams.get(driver.team)! };
}

/**
 * Tiempo total y diferencia de una fila, a partir de lo que se haya escrito:
 * el tiempo total o la diferencia con el primero.
 */
function timing(text: string | undefined, leaderMs: number | undefined, isLeader: boolean) {
  if (!text) return {};
  const ms = parseTime(text);
  if (ms === undefined) return { time: text };
  if (isLeader) return { time: formatTime(ms), ms };
  if (text.startsWith('+')) {
    return { time: leaderMs !== undefined ? formatTime(leaderMs + ms) : undefined, gap: `+${formatTime(ms)}` };
  }
  return { time: formatTime(ms), gap: leaderMs !== undefined ? `+${formatTime(ms - leaderMs)}` : undefined };
}

export function qualifyingRows(results: Results, grid: LoadedGrid, where: string): Row[] {
  const list = results.qualifying.results;
  const leaderMs = list[0]?.time ? parseTime(list[0].time) : undefined;
  return list.map((r, i) => {
    const { driver, team } = lookup(grid, r.driver, where);
    const t = timing(r.time, leaderMs, i === 0);
    return { pos: i + 1, driver, team, time: t.time, gap: t.gap, own: team.id === OWN_TEAM };
  });
}

export function raceRows(results: Results, grid: LoadedGrid, where: string): Row[] {
  const { results: list, fastestLap } = results.race;
  const leader = list[0];
  const leaderMs = leader?.time ? parseTime(leader.time) : undefined;
  const leaderLaps = leader?.laps;
  let pos = 0;
  return list.map((r, i) => {
    const { driver, team } = lookup(grid, r.driver, where);
    const own = team.id === OWN_TEAM;
    const laps = r.laps ?? (r.dnf ? undefined : leaderLaps);
    const base = { driver, team, laps, own, fastestLap: fastestLap === r.driver };
    if (r.dnf) return { ...base, dnf: true };
    pos++;
    const points = POINTS[pos - 1] ?? 0;
    const lapsDown = leaderLaps !== undefined && laps !== undefined && laps < leaderLaps ? leaderLaps - laps : 0;
    if (lapsDown > 0) return { ...base, pos, points, lapsDown };
    const t = timing(r.time, leaderMs, i === 0);
    return { ...base, pos, points, time: t.time, gap: t.gap };
  });
}

/** Puntos de un piloto en una carrera. */
export function pointsFor(rows: Row[], driverId: string): number {
  return rows.find((r) => r.driver.id === driverId)?.points ?? 0;
}

/* ---------- Imágenes de la parrilla ---------- */

const helmets = import.meta.glob<ImageMetadata>('../assets/helmets/*.{png,webp,jpg}', { eager: true, import: 'default' });
const emblems = import.meta.glob<ImageMetadata>('../assets/teams/*.{png,webp,jpg,svg}', { eager: true, import: 'default' });

/**
 * Busca una imagen por su nombre. Acepta «casco.png», «casco» (sin extensión)
 * o la ruta completa que guarda el panel («/src/assets/helmets/casco.png»).
 */
function pick(files: Record<string, ImageMetadata>, folder: string, name?: string) {
  if (!name) return undefined;
  const wanted = name.split('/').pop()!.toLowerCase();
  const base = (f: string) => f.split('/').pop()!.toLowerCase();
  const match = Object.entries(files).find(
    ([f]) => base(f) === wanted || base(f).replace(/\.\w+$/, '') === wanted
  );
  if (!match) throw new Error(`No encuentro la imagen «${name}» en src/assets/${folder}/. Revisa el nombre en la parrilla.`);
  return match[1];
}

export const helmetImage = (d: GridDriver) => pick(helmets, 'helmets', d.helmet);
export const emblemImage = (t: Team) => pick(emblems, 'teams', t.emblem);

/** Nombre del país en el idioma indicado (p. ej. «Bélgica»). */
export function countryName(code: string, lang: Lang): string {
  try {
    return new Intl.DisplayNames([lang], { type: 'region' }).of(code.toUpperCase()) ?? code;
  } catch {
    return code;
  }
}
