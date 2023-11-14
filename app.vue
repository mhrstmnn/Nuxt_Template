<script setup lang="ts">
const config = useRuntimeConfig()

const title = 'Nuxt Starter'
const description = 'Starter template for new Nuxt projects'
const url = config.public.domain

useHead({
  htmlAttrs: {
    lang: 'de',
    prefix: 'og: https://ogp.me/ns#',
  },
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} – ${title}` : title,
  link: [
    {
      rel: 'canonical',
      href: url,
    },
  ],
})

useSeoMeta({
  ogSiteName: title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogUrl: url,
  ogType: 'website',
  ogLocale: 'de_DE',
  /* ogImage: `${config.public.domain}/og_image.png`,
  ogImageType: 'image/png',
  twitterCard: 'summary_large_image', */
  twitterCreator: '@mhrstmnn',
  author: 'Michael Horstmann',
})
</script>

<template>
  <div id="app" class="m-10">
    <AppHeader />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <AppFooter />
  </div>
</template>
