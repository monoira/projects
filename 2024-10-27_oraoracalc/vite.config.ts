import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// || automatic image compression upon build
// WARN: must install libraries named sharp and svgo as dev dependencies
// npm install vite-plugin-image-optimizer sharp svgo -D
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    react(),

    // image compression. happens when using "npm run build"
    ViteImageOptimizer(),
  ],
});
