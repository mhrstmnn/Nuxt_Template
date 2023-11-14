// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['normalize.css', '~/assets/css/main.css'],
  modules: ['@nuxtjs/color-mode', '@unocss/nuxt'],
  colorMode: { classSuffix: '' },
  runtimeConfig: {
    public: {
      domain: process.env.NUXT_DOMAIN || 'https://example.com',
    },
  },
})
