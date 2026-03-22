import { amazonUrls } from "../constants/amazonUrls";

export default defineContentScript({
  matches: amazonUrls as unknown as string[],
  main() {
    console.log("Hello content.");
  },
});
