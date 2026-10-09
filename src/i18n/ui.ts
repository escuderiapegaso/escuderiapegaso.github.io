import type { Lang } from './config';
import type { RouteKey } from './routes';

type PageKey = Exclude<RouteKey, `team/${string}`>;

interface UIStrings {
  site: { name: string; description: string };
  pages: Record<PageKey, string>;
  nav: { ddpShort: string; teamOverview: string; menu: string; close: string; skip: string; language: string; main: string };
  countries: Record<string, string>;
  common: {
    season: string;
    chassis: string;
    powerUnit: string;
    drivers: string;
    teamPrincipal: string;
    driver: string;
    sideView: string;
  };
  home: { kicker: string; lead: string; cta: string; factsTitle: string };
  footer: { partners: string; teamSponsor: string; powerUnit: string; explore: string; disclaimer: string };
  comingSoon: { title: string; text: string; back: string };
  notFound: { title: string; text: string };
}

export const ui: Record<Lang, UIStrings> = {
  es: {
    site: {
      name: 'Escudería Pegaso',
      description: 'Web oficial de la Escudería Pegaso, equipo de Fórmula 1 en My Racing Career.',
    },
    pages: {
      home: 'Inicio',
      car: 'El coche',
      team: 'Equipo',
      news: 'Noticias',
      races: 'Carreras',
      history: 'Historia',
      ddp: 'Programa de Desarrollo de Pilotos',
      'open-series': 'Open Series',
      sponsors: 'Patrocinadores',
      fanclub: 'Fanclub',
      shop: 'Tienda',
    },
    nav: {
      ddpShort: 'Desarrollo de pilotos',
      teamOverview: 'Visión general',
      menu: 'Menú',
      close: 'Cerrar menú',
      skip: 'Saltar al contenido',
      language: 'Idioma',
      main: 'Navegación principal',
    },
    countries: { ES: 'España', CA: 'Canadá', BE: 'Bélgica' },
    common: {
      season: 'Temporada',
      chassis: 'Chasis',
      powerUnit: 'Unidad de potencia',
      drivers: 'Pilotos',
      teamPrincipal: 'Director del equipo',
      driver: 'Piloto',
      sideView: 'vista lateral',
    },
    home: {
      kicker: 'Temporada {season}',
      lead: 'El nuevo monoplaza de la Escudería Pegaso ya rueda en pista.',
      cta: 'Descubre el coche',
      factsTitle: 'Temporada {season} de un vistazo',
    },
    footer: {
      partners: 'Socios oficiales',
      teamSponsor: 'Patrocinador principal',
      powerUnit: 'Unidad de potencia',
      explore: 'Explora',
      disclaimer:
        'La Escudería Pegaso es un equipo ficticio del juego de gestión My Racing Career. Las marcas y logotipos que aparecen pertenecen a sus respectivos propietarios y se usan solo como ambientación, sin afiliación real.',
    },
    comingSoon: {
      title: 'Página en construcción',
      text: 'Estamos preparando esta sección. Vuelve pronto.',
      back: 'Volver al inicio',
    },
    notFound: { title: 'Página no encontrada', text: 'La página que buscas no existe o ha cambiado de dirección.' },
  },

  en: {
    site: {
      name: 'Escudería Pegaso',
      description: 'Official website of Escudería Pegaso, a Formula 1 team in My Racing Career.',
    },
    pages: {
      home: 'Home',
      car: 'The car',
      team: 'Team',
      news: 'News',
      races: 'Races',
      history: 'History',
      ddp: 'Driver Development Programme',
      'open-series': 'Open Series',
      sponsors: 'Partners',
      fanclub: 'Fan Club',
      shop: 'Store',
    },
    nav: {
      ddpShort: 'Driver development',
      teamOverview: 'Overview',
      menu: 'Menu',
      close: 'Close menu',
      skip: 'Skip to content',
      language: 'Language',
      main: 'Main navigation',
    },
    countries: { ES: 'Spain', CA: 'Canada', BE: 'Belgium' },
    common: {
      season: 'Season',
      chassis: 'Chassis',
      powerUnit: 'Power unit',
      drivers: 'Drivers',
      teamPrincipal: 'Team Principal',
      driver: 'Driver',
      sideView: 'side view',
    },
    home: {
      kicker: 'Season {season}',
      lead: "Escudería Pegaso's new challenger is out on track.",
      cta: 'Discover the car',
      factsTitle: 'Season {season} at a glance',
    },
    footer: {
      partners: 'Official partners',
      teamSponsor: 'Team sponsor',
      powerUnit: 'Power unit',
      explore: 'Explore',
      disclaimer:
        'Escudería Pegaso is a fictional team in the management game My Racing Career. All trademarks and logos shown belong to their respective owners and are used for immersion only, with no real affiliation.',
    },
    comingSoon: {
      title: 'Under construction',
      text: "We're preparing this section. Check back soon.",
      back: 'Back to home',
    },
    notFound: { title: 'Page not found', text: "The page you're looking for doesn't exist or has moved." },
  },

  ca: {
    site: {
      name: 'Escudería Pegaso',
      description: "Web oficial de l'Escudería Pegaso, equip de Fórmula 1 a My Racing Career.",
    },
    pages: {
      home: 'Inici',
      car: 'El cotxe',
      team: 'Equip',
      news: 'Notícies',
      races: 'Curses',
      history: 'Història',
      ddp: 'Programa de Desenvolupament de Pilots',
      'open-series': 'Open Series',
      sponsors: 'Patrocinadors',
      fanclub: 'Fanclub',
      shop: 'Botiga',
    },
    nav: {
      ddpShort: 'Desenvolupament de pilots',
      teamOverview: 'Visió general',
      menu: 'Menú',
      close: 'Tanca el menú',
      skip: 'Salta al contingut',
      language: 'Idioma',
      main: 'Navegació principal',
    },
    countries: { ES: 'Espanya', CA: 'Canadà', BE: 'Bèlgica' },
    common: {
      season: 'Temporada',
      chassis: 'Xassís',
      powerUnit: 'Unitat de potència',
      drivers: 'Pilots',
      teamPrincipal: "Director de l'equip",
      driver: 'Pilot',
      sideView: 'vista lateral',
    },
    home: {
      kicker: 'Temporada {season}',
      lead: "El nou monoplaça de l'Escudería Pegaso ja roda a la pista.",
      cta: 'Descobreix el cotxe',
      factsTitle: "La temporada {season} d'un cop d'ull",
    },
    footer: {
      partners: 'Socis oficials',
      teamSponsor: 'Patrocinador principal',
      powerUnit: 'Unitat de potència',
      explore: 'Explora',
      disclaimer:
        "L'Escudería Pegaso és un equip fictici del joc de gestió My Racing Career. Les marques i els logotips que hi apareixen pertanyen als seus respectius propietaris i s'utilitzen només com a ambientació, sense cap afiliació real.",
    },
    comingSoon: {
      title: 'Pàgina en construcció',
      text: 'Estem preparant aquesta secció. Torna aviat.',
      back: "Torna a l'inici",
    },
    notFound: { title: 'Pàgina no trobada', text: "La pàgina que busques no existeix o ha canviat d'adreça." },
  },
};

/** Sustituye marcadores del tipo `{season}` por sus valores. */
export function fill(text: string, values: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (_, k: string) => String(values[k] ?? `{${k}}`));
}

export function useTranslations(lang: Lang): UIStrings {
  return ui[lang];
}
