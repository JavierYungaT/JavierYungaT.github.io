import * as en from '@/data/en';
import * as es from '@/data/es';
import { ui } from './ui';

export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

/** Configuración por idioma que no es contenido editable. */
export const localeInfo = {
  es: { htmlLang: 'es', ogLocale: 'es_EC', home: '/', casesPath: '/proyectos' },
  en: { htmlLang: 'en', ogLocale: 'en_US', home: '/en/', casesPath: '/en/projects' },
} satisfies Record<Lang, { htmlLang: string; ogLocale: string; home: string; casesPath: string }>;

const content = { es, en } satisfies Record<Lang, typeof es>;

/** Convierte `Astro.currentLocale` en un idioma soportado. */
export function getLang(locale: string | undefined): Lang {
  return locale && locale in languages ? (locale as Lang) : defaultLang;
}

/** Contenido (src/data/<idioma>) y textos de interfaz (src/i18n/ui.ts) de un idioma. */
export function useI18n(locale: string | undefined) {
  const lang = getLang(locale);
  return { lang, c: content[lang], t: ui[lang], info: localeInfo[lang] };
}

/** URL de un caso de estudio a partir de su slug en ese idioma. */
export function casePath(lang: Lang, slug: string): string {
  return `${localeInfo[lang].casesPath}/${slug}/`;
}

/** Ruta del ancla de una sección en la página principal del idioma. */
export function sectionPath(lang: Lang, id: string): string {
  return `${localeInfo[lang].home}#${id}`;
}
