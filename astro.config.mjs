// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import cobalt2 from "./cobalt2.json";

import mdx from "@astrojs/mdx";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  integrations: [expressiveCode({ themes: [cobalt2] }), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
