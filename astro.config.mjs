// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://dynamic-alfajores-a67778.netlify.app/",
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    domains: ["astro.build"],
  },
});
