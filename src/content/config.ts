import { defineCollection, z } from "astro:content";

const work = defineCollection({
  type: "content",
  schema: z.object({
    lang: z.enum(["es", "en"]),
    title: z.string(),
    path: z.string(),
    client: z.string(),
    year: z.string(),
    category: z.string(),
    excerpt: z.string(),
    cover: z.string(),
    images: z.array(z.string()).default([]),
    order: z.number().default(0),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    lang: z.enum(["es", "en"]),
    title: z.string(),
    path: z.string(),
    date: z.string(),
    excerpt: z.string(),
    cover: z.string(),
    tags: z.array(z.string()).default([]),
    readingTime: z.number().default(4),
  }),
});

export const collections = { work, blog };
