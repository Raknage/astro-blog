import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

import { WPLoader } from "./lib/opiskelijakunta";

const blog = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
    image: z.object({
      url: z.url(),
      alt: z.string(),
    }),
  }),
});

const TUOPosts = defineCollection({
  loader: WPLoader({ url: "https://opiskelijakunta.net/wp-json/wp/v2/posts" }),
});

export const collections = { blog, TUOPosts };
