# javier.yunga — Portafolio

Portafolio personal de Javier Yunga, desarrollador de software. Sitio estático de una sola página hecho con [Astro](https://astro.build), TypeScript y CSS propio.

Publicado en **https://javieryungat.github.io**

## Correr en local

Requiere Node.js 22.12 o superior.

```bash
npm install
npm run dev        # http://localhost:4321
```

Otros comandos:

| Comando           | Qué hace                                              |
| ----------------- | ----------------------------------------------------- |
| `npm run build`   | Revisa tipos (`astro check`) y genera el sitio en `dist/` |
| `npm run preview` | Sirve `dist/` para revisar el build final             |

## Editar el contenido

Todo el texto vive en `src/data/`; no hace falta tocar los componentes.

| Archivo                  | Contenido                                                   |
| ------------------------ | ----------------------------------------------------------- |
| `src/data/site.ts`       | SEO, navegación, títulos de cada sección, contacto y redes  |
| `src/data/profile.ts`    | Hero, cifras y sección "Sobre mí"                           |
| `src/data/experience.ts` | Experiencia laboral (`current: true` rellena el nodo)       |
| `src/data/projects.ts`   | Proyectos; `featured: true` lo muestra a ancho completo     |
| `src/data/stack.ts`      | Tecnologías por columna con su nivel                        |
| `src/data/education.ts`  | Título universitario y certificaciones                      |
| `src/data/practices.ts`  | Sección "Cómo construyo software": pestañas con código      |

Los iconos de proyectos, stack y cifras se eligen por nombre (ver `src/lib/icons.ts`).

Los tipos de cada estructura están en `src/types/content.ts`, así que el editor avisa si falta un campo.

**Casos de estudio:** cada caso es un archivo Markdown en `src/content/casos/` (por ejemplo `facturacion-sri.md`) y se publica en `/proyectos/<nombre-del-archivo>`. Para enlazarlo desde una tarjeta, pon `caseStudy: '<nombre-del-archivo>'` en el proyecto de `src/data/projects.ts`. Los bloques de código del Markdown se resaltan con los colores del sitio.

**Vista previa al compartir:** `public/og.png` (1200×630) se genera a partir de `scripts/og-image.html`. Si cambias tu rol o tu foto, edita ese HTML, ábrelo en Chrome con la ventana a 1200×630 y reemplaza `public/og.png` con una captura.

**Enlaces de proyectos:** cada proyecto tiene `links: { demo: '', repo: '' }`. Al poner una URL aparece el enlace en la tarjeta; si se deja vacío, no se muestra.

**Archivos en `public/`:**

- `public/foto.png`: foto de la tarjeta de perfil del hero (cuadrada, se muestra en círculo). La ruta se cambia en `hero.photo` de `src/data/profile.ts`. Si no existe, se muestra el monograma "JY".
- `public/cv.pdf`: archivo que descarga el botón "Descargar CV".

## Desplegar en GitHub Pages

El workflow `.github/workflows/deploy.yml` compila y publica el sitio en cada push a `main`.

Configuración única en el repositorio `JavierYungaT.github.io`: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Alternativa: Vercel

1. Entra a [vercel.com/new](https://vercel.com/new) e importa el repositorio.
2. Vercel detecta Astro automáticamente (build `npm run build`, salida `dist`).
3. Cambia `site` en `astro.config.mjs` al dominio de Vercel para que las URL canónicas y Open Graph sean correctas.

## Estructura

```
src/
  components/   Una sección por componente + piezas reutilizables
                (Section, Button, TagList, Icon, CodeWindow, NeuralCanvas)
  data/         Contenido editable
  layouts/      <head>, SEO, fuentes y tema
  lib/          Iconos (icons.ts) y hash estilo git de la experiencia
  pages/        index.astro ensambla las secciones
  styles/       Tokens de color (claro/oscuro) y estilos base
  types/        Tipos del contenido
```
