import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Casos de estudio: un archivo Markdown por proyecto en src/content/casos/. */
const casos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/casos' }),
  schema: z.object({
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
