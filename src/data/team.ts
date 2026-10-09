/**
 * Datos de la temporada en curso. Actualiza este archivo al empezar cada temporada.
 */
import type { RouteKey } from '../i18n/routes';

export const season = {
  number: 68,
  car: {
    model: 'Pegaso 268',
    chassis: 'Pegaso 268/3',
  },
  powerUnit: 'Comet 007/1',
};

export interface Person {
  id: string;
  name: string;
  /** Código ISO de país (ES, CA, BE...). Opcional. */
  country?: string;
  /** Dorsal, solo pilotos. */
  number?: number;
  role: 'driver' | 'teamPrincipal';
  page: RouteKey;
}

export const drivers: Person[] = [
  { id: 'john-cannon', name: 'John Cannon', country: 'CA', number: 10, role: 'driver', page: 'team/john-cannon' },
  { id: 'remco-raveel', name: 'Remco Raveel', country: 'BE', number: 17, role: 'driver', page: 'team/remco-raveel' },
];

export const teamPrincipal: Person = {
  id: 'nicorz',
  name: 'Nicolás Carrasco',
  role: 'teamPrincipal',
  page: 'team/nicorz',
};

/** Entradas del submenú «Equipo», en orden. */
export const teamMenu: { key: RouteKey; label?: string }[] = [
  { key: 'team' }, // Visión general (texto traducido en ui.ts)
  { key: 'team/john-cannon', label: 'John Cannon' },
  { key: 'team/remco-raveel', label: 'Remco Raveel' },
  { key: 'team/nicorz', label: 'nicorz' },
];
