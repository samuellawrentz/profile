import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    date: z.coerce.date(),
    path: z.string(),
    tags: z.array(z.string()).default([]),
    description: z.string().optional(),
    heroImage: image().optional(),
    published: z.boolean().optional().default(false),
    type: z.string().default("blog"),
  }),
});

const hacks = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/hacks" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    path: z.string(),
    description: z.string().optional(),
    type: z.literal("hack").default("hack"),
    tags: z.array(z.string()).default([]),
    heroImage: image().optional(),
    date: z.coerce.date().optional(),
    published: z.boolean().optional().default(true),
  }),
});

export const collections = { blog, hacks };
