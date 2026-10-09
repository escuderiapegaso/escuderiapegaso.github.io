export const languages = {
  es: { label: 'Castellano', short: 'ES', htmlLang: 'es-ES', ogLocale: 'es_ES' },
  en: { label: 'English', short: 'EN', htmlLang: 'en-GB', ogLocale: 'en_GB' },
  ca: { label: 'Català', short: 'CA', htmlLang: 'ca-ES', ogLocale: 'ca_ES' },
} as const;

export type Lang = keyof typeof languages;

export const langs = Object.keys(languages) as Lang[];
export const defaultLang: Lang = 'es';

export function isLang(value: string | undefined): value is Lang {
  return !!value && value in languages;
}
