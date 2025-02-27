// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import typograf from "astro-typograf";

// https://penkin-repo.github.io/fortune/  

export default defineConfig({
  site: 'https://penkin-repo.github.io/fortune/ ',
  base: '/fortune/', 
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  // integrations: [typograf()],
});
