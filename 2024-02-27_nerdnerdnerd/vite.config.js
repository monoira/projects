// automatic image compression upon build ( Must install library named sharp as -D )
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default {
  plugins: [
    // image compression. happens when using "npm run build"
    ViteImageOptimizer(),
  ],
};
