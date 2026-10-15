import type { CollectionEntry } from 'astro:content';
import { casePath, languages, type Lang } from '@/i18n';

type Caso = CollectionEntry<'casos'>;

/** Separa el id "es/facturacion-sri" en idioma y clave común entre traducciones. */
function parseId(id: string): { lang: Lang; key: string } {
  const [lang, ...rest] = id.split('/');
  return { lang: lang as Lang, key: rest.join('/') };
}

/** Rutas estáticas de los casos de un idioma, con la URL de cada traducción. */
export function caseStudyPaths(lang: Lang, casos: Caso[]) {
  return casos
    .filter((caso) => parseId(caso.id).lang === lang)
    .map((caso) => {
      const { key } = parseId(caso.id);
      const alternates: Partial<Record<Lang, string>> = {};
      for (const code of Object.keys(languages) as Lang[]) {
        const translation = casos.find((other) => other.id === `${code}/${key}`);
        if (translation) alternates[code] = casePath(code, translation.data.path);
      }
      return { params: { slug: caso.data.path }, props: { caso, alternates } };
    });
}
