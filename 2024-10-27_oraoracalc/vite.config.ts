import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// || automatic image compression upon build
// WARN: must install libraries named sharp and svgo as -d
// npm i -D sharp svgo
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    react(),

    // image compression. happens when using "npm run build"
    ViteImageOptimizer(),
  ],
});
