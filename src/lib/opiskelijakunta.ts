import type { Posts } from "./WPTypes";
import type { Loader } from "astro/loaders";
import { z } from "astro/zod";

async function fetchWPPosts(url: URL, page = 1, per_page = 10): Promise<Posts> {
  const res = await fetch(`${url}?page=${page}&per_page=${per_page}`);
  const data = await res.json();
  return data;
}

export function WPLoader(options: { url: string }) {
  const feedUrl = new URL(options.url);

  return {
    name: "wp-loader",
    schema: z.object({
      id: z.coerce.string(),
      date: z.coerce.date(),
      date_gmt: z.coerce.date(),
      guid: z
        .object({
          rendered: z.string(),
        })
        .optional(),
      modified: z.coerce.date(),
      modified_gmt: z.coerce.date(),
      slug: z.string(),
      status: z.string(),
      type: z.string(),
      link: z.url(),
      title: z.object({ rendered: z.string() }),
      content: z.object({
        rendered: z.string(),
        protected: z.boolean(),
      }),
      excerpt: z.object({
        rendered: z.string(),
        protected: z.boolean(),
      }),
      author: z.number(),
      featured_media: z.number(),
      sticky: z.boolean(),
    }),
    load: async ({ store, parseData }) => {
      const posts = await fetchWPPosts(feedUrl);

      if (import.meta.env.DEV) {
        store.clear();
      }

      for (const post of posts) {
        const id = String(post.id);
        const data = await parseData({
          id,
          data: post,
        });

        store.set({
          id,
          data,
        });
      }
    },
  } satisfies Loader;
}
