// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxtjs/i18n", "@nuxt/ui-pro"],
  css: ["~/assets/css/main.css"],
});
