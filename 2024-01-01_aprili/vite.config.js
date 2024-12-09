// || automatic sitemap generation upon build
import Sitemap from "vite-plugin-sitemap";

// || automatic image compression upon build ( Must install libraries named sharp and svgo as -D )
// npm i -D svgo sharp
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default {
  plugins: [
    // || automatic sitemap generation
    Sitemap({
      hostname: "https://aprili-restaurant.pages.dev/",
    }),

    // || image compression. happens when using "npm run build"
    ViteImageOptimizer(),
  ],
};
