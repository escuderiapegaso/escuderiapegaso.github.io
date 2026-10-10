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
  home: {
    discover: string;
    newsLabel: string;
    slide: string;
    goTo: string;
    pause: string;
    play: string;
    driversTitle: string;
  };
  calendar: {
    title: string;
    nextRace: string;
    units: { d: string; h: string; m: string; s: string };
    unitsLong: { d: string; h: string; m: string; s: string };
    viewAll: string;
    discoverRace: string;
    round: string;
    prev: string;
    next: string;
    finished: string;
  };
  article: { back: string; published: string; more: string; viewAll: string };
  newsList: { intro: string; filter: string; all: string; loadMore: string; empty: string; results: string };
  races: {
    intro: string;
    done: string;
    next: string;
    winner: string;
    location: string;
    length: string;
    laps: string;
    distance: string;
    qualiRecord: string;
    raceRecord: string;
    map: string;
    weather: string;
    chance: string;
    qualifying: string;
    race: string;
    pending: string;
    noResults: string;
    startsIn: string;
    finished: string;
    ownTitle: string;
    allRaces: string;
    prevRace: string;
    nextRace: string;
    cols: { pos: string; driver: string; team: string; time: string; gap: string; laps: string; points: string };
    lapDown: string;
    lapsDown: string;
    dnf: string;
    fastestLap: string;
    ownDriver: string;
  };
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
      discover: 'Descubrir',
      newsLabel: 'Últimas noticias',
      slide: 'Noticia {n} de {total}',
      goTo: 'Ver noticia {n}',
      pause: 'Pausar el pase de noticias',
      play: 'Reanudar el pase de noticias',
      driversTitle: 'Nuestros pilotos',
    },
    calendar: {
      title: 'Calendario temporada {season}',
      nextRace: 'La próxima carrera empieza en',
      units: { d: 'DD', h: 'HH', m: 'MM', s: 'SS' },
      unitsLong: { d: 'días', h: 'horas', m: 'minutos', s: 'segundos' },
      viewAll: 'Ver todo',
      discoverRace: 'Descubre la carrera',
      round: 'Ronda {n}',
      prev: 'Carreras anteriores',
      next: 'Carreras siguientes',
      finished: 'Temporada finalizada',
    },
    article: { back: 'Todas las noticias', published: 'Publicado el', more: 'Más noticias', viewAll: 'Ver todas' },
    newsList: {
      intro: 'Toda la actualidad de la Escudería Pegaso: carreras, coche, pilotos y mucho más.',
      filter: 'Filtrar por categoría',
      all: 'Todas',
      loadMore: 'Ver más noticias',
      empty: 'Todavía no hay noticias en esta categoría.',
      results: '{n} noticias',
    },
    races: {
      intro: 'Los {n} Grandes Premios de la temporada {season}, con la clasificación y la carrera de cada uno.',
      done: 'Disputada',
      next: 'Próxima',
      winner: 'Ganador',
      location: 'Ubicación',
      length: 'Longitud',
      laps: 'Vueltas',
      distance: 'Distancia',
      qualiRecord: 'Récord de clasificación',
      raceRecord: 'Récord de carrera',
      map: 'Circuito',
      weather: 'Previsión meteorológica',
      chance: 'Probabilidad',
      qualifying: 'Clasificación',
      race: 'Carrera',
      pending: 'Pendiente',
      noResults: 'Resultados disponibles tras la sesión.',
      startsIn: 'La carrera empieza en',
      finished: 'Finalizada',
      ownTitle: 'Escudería Pegaso en este Gran Premio',
      allRaces: 'Todas las carreras',
      prevRace: 'Gran Premio anterior',
      nextRace: 'Gran Premio siguiente',
      cols: { pos: 'Pos.', driver: 'Piloto', team: 'Equipo', time: 'Tiempo', gap: 'Diferencia', laps: 'Vueltas', points: 'Puntos' },
      lapDown: '+1 vuelta',
      lapsDown: '+{n} vueltas',
      dnf: 'DNF',
      fastestLap: 'Vuelta rápida',
      ownDriver: 'Piloto de la Escudería Pegaso',
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
      discover: 'Discover',
      newsLabel: 'Latest news',
      slide: 'Story {n} of {total}',
      goTo: 'Show story {n}',
      pause: 'Pause news slideshow',
      play: 'Resume news slideshow',
      driversTitle: 'Our drivers',
    },
    calendar: {
      title: 'Season {season} race calendar',
      nextRace: 'Next race starts in',
      units: { d: 'DD', h: 'HH', m: 'MM', s: 'SS' },
      unitsLong: { d: 'days', h: 'hours', m: 'minutes', s: 'seconds' },
      viewAll: 'View all',
      discoverRace: 'Discover the race',
      round: 'Round {n}',
      prev: 'Previous races',
      next: 'Next races',
      finished: 'Season finished',
    },
    article: { back: 'All news', published: 'Published on', more: 'More news', viewAll: 'View all' },
    newsList: {
      intro: 'The latest from Escudería Pegaso: races, the car, our drivers and more.',
      filter: 'Filter by category',
      all: 'All',
      loadMore: 'Load more news',
      empty: 'There is no news in this category yet.',
      results: '{n} stories',
    },
    races: {
      intro: 'All {n} Grands Prix of season {season}, with qualifying and race results for each one.',
      done: 'Completed',
      next: 'Next',
      winner: 'Winner',
      location: 'Location',
      length: 'Lap length',
      laps: 'Laps',
      distance: 'Race distance',
      qualiRecord: 'Qualifying record',
      raceRecord: 'Race record',
      map: 'Circuit',
      weather: 'Weather forecast',
      chance: 'Chance',
      qualifying: 'Qualifying',
      race: 'Race',
      pending: 'Pending',
      noResults: 'Results available after the session.',
      startsIn: 'Race starts in',
      finished: 'Finished',
      ownTitle: 'Escudería Pegaso at this Grand Prix',
      allRaces: 'All races',
      prevRace: 'Previous Grand Prix',
      nextRace: 'Next Grand Prix',
      cols: { pos: 'Pos.', driver: 'Driver', team: 'Team', time: 'Time', gap: 'Gap', laps: 'Laps', points: 'Points' },
      lapDown: '+1 lap',
      lapsDown: '+{n} laps',
      dnf: 'DNF',
      fastestLap: 'Fastest lap',
      ownDriver: 'Escudería Pegaso driver',
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
      discover: 'Descobreix',
      newsLabel: 'Últimes notícies',
      slide: 'Notícia {n} de {total}',
      goTo: 'Mostra la notícia {n}',
      pause: 'Atura el passi de notícies',
      play: 'Reprèn el passi de notícies',
      driversTitle: 'Els nostres pilots',
    },
    calendar: {
      title: 'Calendari temporada {season}',
      nextRace: 'La propera cursa comença en',
      units: { d: 'DD', h: 'HH', m: 'MM', s: 'SS' },
      unitsLong: { d: 'dies', h: 'hores', m: 'minuts', s: 'segons' },
      viewAll: 'Veure-ho tot',
      discoverRace: 'Descobreix la cursa',
      round: 'Ronda {n}',
      prev: 'Curses anteriors',
      next: 'Curses següents',
      finished: 'Temporada acabada',
    },
    article: { back: 'Totes les notícies', published: 'Publicat el', more: 'Més notícies', viewAll: 'Veure-les totes' },
    newsList: {
      intro: "Tota l'actualitat de l'Escudería Pegaso: curses, cotxe, pilots i molt més.",
      filter: 'Filtra per categoria',
      all: 'Totes',
      loadMore: 'Mostra més notícies',
      empty: 'Encara no hi ha notícies en aquesta categoria.',
      results: '{n} notícies',
    },
    races: {
      intro: 'Els {n} Grans Premis de la temporada {season}, amb la classificació i la cursa de cadascun.',
      done: 'Disputada',
      next: 'Propera',
      winner: 'Guanyador',
      location: 'Ubicació',
      length: 'Longitud',
      laps: 'Voltes',
      distance: 'Distància',
      qualiRecord: 'Rècord de classificació',
      raceRecord: 'Rècord de cursa',
      map: 'Circuit',
      weather: 'Previsió meteorològica',
      chance: 'Probabilitat',
      qualifying: 'Classificació',
      race: 'Cursa',
      pending: 'Pendent',
      noResults: 'Resultats disponibles després de la sessió.',
      startsIn: 'La cursa comença en',
      finished: 'Acabada',
      ownTitle: "L'Escudería Pegaso en aquest Gran Premi",
      allRaces: 'Totes les curses',
      prevRace: 'Gran Premi anterior',
      nextRace: 'Gran Premi següent',
      cols: { pos: 'Pos.', driver: 'Pilot', team: 'Equip', time: 'Temps', gap: 'Diferència', laps: 'Voltes', points: 'Punts' },
      lapDown: '+1 volta',
      lapsDown: '+{n} voltes',
      dnf: 'DNF',
      fastestLap: 'Volta ràpida',
      ownDriver: "Pilot de l'Escudería Pegaso",
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
