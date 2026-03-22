import { defineConfig } from "wxt";
import { amazonUrls } from "./constants/amazonUrls";

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-react"],
  manifest: {
    description:
      "Cleans Amazon Kindle URLs by removing excess parameters for a cleaner, more readable and bookmarkable format.",
    permissions: ["activeTab"],
    host_permissions: amazonUrls as unknown as string[],
    host_permissions_reason:
      "The extension accesses amazon.com and regional amazon sites to identify and clean Kindle book URLs by removing tracking and session parameters, making the URLs cleaner and more bookmarkable.",
    // For Chrome Web Store compliance
    reason_for_remote_code:
      "This extension does not use remote code execution. All functionality is contained within local scripts.",
    browser_specific_settings: {
      gecko: {
        id: "wxt-erecle@gmail.com",
        data_collection_permissions: {
          required: ["none"],
        },
      },
    },
  },
});
