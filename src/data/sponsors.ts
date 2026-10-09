/**
 * Patrocinadores vigentes. Para añadir uno: deja su logo (PNG con fondo
 * transparente) en `src/assets/sponsors/` y añade una entrada aquí.
 */
import type { ImageMetadata } from 'astro';
import pioneer from '../assets/sponsors/pioneer.png';
import meyba from '../assets/sponsors/meyba.png';
import necto from '../assets/sponsors/necto.png';
import repsol from '../assets/sponsors/repsol-lubricants.png';
import circuit from '../assets/sponsors/circuit-barcelona-catalunya.png';
import pirelli from '../assets/sponsors/pirelli.png';
import comet from '../assets/brand/comet-white.png';

export interface Sponsor {
  name: string;
  logo: ImageMetadata;
  /** Logo blanco que hay que invertir para mostrarlo sobre fondo claro. */
  invertOnLight?: boolean;
  /** Logos verticales o compactos: se muestran más altos para equilibrar el conjunto. */
  tall?: boolean;
}

export const teamSponsor: Sponsor = { name: 'Pioneer', logo: pioneer };

export const partners: Sponsor[] = [
  { name: 'Meyba', logo: meyba, tall: true },
  { name: 'Necto', logo: necto },
  { name: 'Repsol Lubricants', logo: repsol },
  { name: 'Circuit de Barcelona-Catalunya', logo: circuit },
  { name: 'Pirelli', logo: pirelli },
];

/** Motorista (no es patrocinador). */
export const engineSupplier: Sponsor = { name: 'Comet', logo: comet, invertOnLight: true };
