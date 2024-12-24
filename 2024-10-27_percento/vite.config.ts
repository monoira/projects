import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// || automatic image compression upon build
// WARN: Must install libraries named sharp and svgo as -D
// npm i -D sharp svgo
import Sitemap from "vite-plugin-sitemap";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// no need to pass it "/"
const routes = ["/formulas"];

export default defineConfig({
  plugins: [
    react(),

    // || automatic sitemap generation
    Sitemap({
      hostname: "https://percentagecalculator.netlify.app",
      dynamicRoutes: routes,
    }),

    // || image compression. happens when using "npm run build"
    ViteImageOptimizer(),
  ],
});
