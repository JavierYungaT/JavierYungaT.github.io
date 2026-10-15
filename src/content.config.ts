import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Casos de estudio: un Markdown por idioma en src/content/casos/<idioma>/.
 * El nombre del archivo es la clave que une las traducciones (y la que usa `caseStudy`
 * en los proyectos); `path` es la URL en ese idioma.
 */
const casos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/casos' }),
  schema: z.object({
    /** Parte final de la URL en ese idioma (no se llama `slug` porque Astro lo usa como id). */
    path: z.string(),
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    period: z.string(),
    context: z.string(),
    stack: z.array(z.string()),
    results: z.array(z.object({ value: z.string(), label: z.string() })),
  }),
});

export const collections = { casos };
