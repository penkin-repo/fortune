// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import typograf from "astro-typograf";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // integrations: [typograf()],
});
