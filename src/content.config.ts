import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.string().optional(),
  }),
});

const roadmap = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/roadmap' }),
  schema: z.object({
    title: z.string(),
    status: z.enum(['done', 'in-progress', 'planned']),
    order: z.number(),
    features: z.array(z.object({
      id: z.string(),
      name: z.string(),
      status: z.enum(['done', 'in-progress', 'planned']),
      progress: z.number().min(0).max(100),
    })).optional(),
  }),
});

const page = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/page' })
});

export const collections = {
  blog,
  roadmap,
  page
};
