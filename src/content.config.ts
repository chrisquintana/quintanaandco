import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const businessSchema = z.object({
  name: z.string(),
  slug: z.string(),
  category: z.string(),
  status: z.enum(['Active', 'Launching', 'Future Venture']),
  year: z.number().optional(),
  description: z.string(),
  longDescription: z.string().optional(),
  featured: z.boolean().default(false),
  order: z.number().default(0),
  image: z.string().optional(),
  website: z.string().url().optional(),
  external: z.boolean().default(false),
  cta: z.string(),
});

const journalSchema = z.object({
  title: z.string(),
  date: z.date(),
  category: z.string(),
  excerpt: z.string(),
  image: z.string().optional(),
});

export const collections = {
  'businesses': defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: './src/content/businesses' }),
    schema: businessSchema,
  }),
  'journal': defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: './src/content/journal' }),
    schema: journalSchema,
  }),
};
