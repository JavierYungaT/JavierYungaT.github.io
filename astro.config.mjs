// @ts-check
import { defineConfig } from 'astro/config';
import codeTheme from './src/lib/esmeralda-code-theme.json' with { type: 'json' };

// Sitio de usuario de GitHub Pages: se publica en la raíz, sin `base`.
export default defineConfig({
  site: 'https://javieryungat.github.io',
  // Español en la raíz (/) e inglés en /en/.
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
  markdown: {
    // Mismo tema de colores que los bloques de código del sitio.
    shikiConfig: { theme: /** @type {any} */ (codeTheme) },
  },
});
