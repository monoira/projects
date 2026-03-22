import { defineConfig } from "wxt";

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ["@wxt-dev/module-react"],
  manifest: {
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
