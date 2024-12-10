// || automatic sitemap generation upon build
import Sitemap from "vite-plugin-sitemap";

// || automatic image compression upon build ( Must install library named sharp as -D )
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default {
  plugins: [
    // || automatic sitemap generation
    Sitemap({
      hostname: "https://nerdtext.pages.dev/",
    }),

    // || image compression. happens when using "npm run build"
    ViteImageOptimizer(),
  ],
};
