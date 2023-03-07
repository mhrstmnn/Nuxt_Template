// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: { lang: 'de' },
      // title: '',
      meta: [
        // { name: 'description', content: '' },
        // { name: 'keywords', content: '' },
        { name: 'author', content: 'Michael Horstmann' },
      ],
    },
  },
  css: ['normalize.css', '@/assets/css/main.css'],
})
