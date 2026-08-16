import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// This tells Astro: "every .md file inside src/content/songs is a song"
const songs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/songs' }),
  schema: z.object({
    title: z.string(),
    singer: z.string().optional(),
    category: z.string().optional(),
    date: z.coerce.date().optional(),
    description: z.string().optional(),
  }),
});

export const collections = { songs };
