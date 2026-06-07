import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://dynamic-alfajores-a67778.netlify.app/",

  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    domains: ["opiskelijakunta.net", "astro.build"],
  },

  integrations: [react()],
});
