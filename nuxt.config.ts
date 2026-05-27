import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  runtimeConfig: {
    GARCHI_API_URL: "https://garchi.co.uk/api/v2",
    GARCHI_API_KEY: "your_api_key",
    GARCHI_PREVIEW_TOKEN: "your_preview_token_from_space_settings",
  },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },
  components: {
    dirs: [
      {
        path: "~/components/garchi",
        global: true,
      },
      "~/components",
    ],
  },
  experimental: {
    componentIslands: true,
  },
});
