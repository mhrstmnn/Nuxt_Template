// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'de' },
    },
  },
  css: ['normalize.css', '@/assets/css/main.css'],
  runtimeConfig: {
    public: {
      domain: process.env.NUXT_DOMAIN || 'https://example.com',
    },
  },
  modules: ['@unocss/nuxt'],
})
