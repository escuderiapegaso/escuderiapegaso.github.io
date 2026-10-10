# Resultados

**Lo normal es editarlos desde el panel: https://escuderiapegaso.github.io/admin/ → «Resultados · T68».**
Lo que sigue explica el formato de los archivos, por si alguna vez hay que tocarlos a mano.

Un archivo por Gran Premio y temporada: `src/data/results/<temporada>/<circuito>.yml`.
El nombre del circuito es el mismo que en `src/data/calendar.ts` (melbourne, shanghai…).

## Clima

Uno para la clasificación y otro para la carrera, con el tipo y el porcentaje que da MRC:

```yaml
qualifying:
  weather: { type: partly-cloudy, chance: 70 }
```

Tipos: `sunny`, `mostly-sunny`, `partly-cloudy`, `cloudy`, `drizzle`, `light-rain`,
`showers`, `rain`, `storm`, `heavy-storm`.

## Resultados

En orden, del primero al último. `driver` es el `id` del piloto en la parrilla
de esa temporada (`src/data/grids/68.yml`).

```yaml
qualifying:
  weather: { type: sunny, chance: 90 }
  results:
    - { driver: john-cannon, time: '1:18.456' }
    - { driver: remco-raveel, time: '1:18.789' }

race:
  weather: { type: rain, chance: 40 }
  fastestLap: remco-raveel
  results:
    - { driver: john-cannon, laps: 58, time: '1:32:45.123' }
    - { driver: piloto-b, laps: 58, time: '+5.321' }
    - { driver: piloto-c, laps: 57 }
    - { driver: remco-raveel, laps: 31, dnf: true }
```

- Los tiempos van siempre entre comillas.
- El tiempo puede ser el total (`'1:32:45.123'`) o la diferencia con el primero (`'+5.321'`).
  La web calcula la columna que falte.
- Si un piloto termina con vueltas de menos, basta con poner sus vueltas: saldrá «+1 vuelta».
- Los abandonos llevan `dnf: true` y van al final.
- Los puntos (25-18-15-12-10-8-6-4-2-1) se calculan solos.
- `fastestLap` es opcional y no da puntos.

Si escribes mal el `id` de un piloto, la web no se publica y avisa de cuál es.
