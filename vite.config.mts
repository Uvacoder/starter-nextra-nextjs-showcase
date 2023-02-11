import react from "@vitejs/plugin-react";
import path from "node:path";
import url from "node:url";
import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";

import showcaseStoriesPlugin from "./src/cli/utils/vite-plugin-react-showcase.mjs";

export default defineConfig({
  publicDir: url.fileURLToPath(
    new URL("./dist/renderer/public", import.meta.url),
  ),
  server: {
    port: 6006,
  },
  build: {
    outDir: url.fileURLToPath(new URL("./dist/showcase", import.meta.url)),
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  },
  resolve: {
    alias: [
      {
        find: "@showcasejs/internal",
        replacement: "virtual:@showcasejs/internal",
      },
      {
        find: "@showcasejs/root",
        replacement: path.resolve(process.cwd()),
      },
    ],
  },
  plugins: [Inspect(), react(), showcaseStoriesPlugin()],
});
