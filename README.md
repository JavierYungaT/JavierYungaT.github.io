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

El sitio está en **español** (`/`) y en **inglés** (`/en/`), con un selector ES / EN en la barra de navegación. Todo el texto vive en `src/data/<idioma>/`; no hace falta tocar los componentes. **Cada archivo existe en `es/` y en `en/` con la misma forma**: si cambias algo en un idioma, cámbialo también en el otro (TypeScript avisa si a uno le falta un campo).

| Archivo (en `src/data/es/` y `src/data/en/`) | Contenido                                               |
| -------------------------------------------- | ------------------------------------------------------- |
| `site.ts`                                    | SEO, navegación, títulos de cada sección, contacto y redes |
| `profile.ts`                                 | Hero, cifras y sección "Sobre mí"                       |
| `experience.ts`                              | Experiencia laboral (`current: true` rellena el nodo)   |
| `projects.ts`                                | Proyectos; `featured: true` lo muestra a ancho completo |
| `stack.ts`                                   | Tecnologías con nivel (`stack`) y conocimientos complementarios (`stackExtras`) |
| `education.ts`                               | Título universitario y certificaciones                  |
| `practices.ts`                               | "Cómo construyo software": pestañas con código y la ventana de arquitecturas y patrones (`practicesCatalog`) |

Los textos de la interfaz (botones, etiquetas, textos accesibles) están en `src/i18n/ui.ts`.

Los iconos de proyectos, stack y cifras se eligen por nombre (ver `src/lib/icons.ts`).

Los tipos de cada estructura están en `src/types/content.ts`, así que el editor avisa si falta un campo.

**Casos de estudio:** cada caso es un Markdown por idioma en `src/content/casos/es/` y `src/content/casos/en/`, con el mismo nombre de archivo (por ejemplo `facturacion-sri.md`). El campo `path` de cada uno define su URL: `/proyectos/<path>/` en español y `/en/projects/<path>/` en inglés. Para enlazarlo desde una tarjeta, pon `caseStudy: '<nombre-del-archivo>'` en el proyecto, en ambos idiomas. Los bloques de código del Markdown se resaltan con los colores del sitio.

**Vista previa al compartir:** `public/og.png` y `public/og-en.png` (1200×630) se generan a partir de `scripts/og-image.html` y `scripts/og-image-en.html`. Si cambias tu rol o tu foto, edita esos HTML, ábrelo en Chrome con la ventana a 1200×630 y reemplaza `public/og.png` con una captura.

**Enlaces de proyectos:** cada proyecto tiene `links: { demo: '', repo: '' }`. Al poner una URL aparece el enlace en la tarjeta; si se deja vacío, no se muestra.

**Archivos en `public/`:**

- `public/foto.png`: foto de la tarjeta de perfil del hero (cuadrada, se muestra en círculo). La ruta se cambia en `hero.photo` de `src/data/<idioma>/profile.ts`. Si no existe, se muestra el monograma "JY".
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
