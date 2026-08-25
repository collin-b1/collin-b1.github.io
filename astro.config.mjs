// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://collinb.me",
  integrations: [],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          loadPaths: ["src/styles"],
          additionalData: '@use "breakpoints" as *;',
        },
      },
    },
  },
});
