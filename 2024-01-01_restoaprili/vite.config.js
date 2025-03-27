// automatic image compression upon build ( Must install libraries named sharp and svgo as -D )
// npm i -D svgo sharp
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default {
  plugins: [
    // image compression. happens when using "npm run build"
    ViteImageOptimizer(),
  ],
};
