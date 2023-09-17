<script setup lang="ts">
const config = useRuntimeConfig()
const route = useRoute()

const title = 'Testseite'
const description = 'Dies ist eine Testseite'
const url = `${config.public.domain}${route.fullPath}`

useHead({
  link: [
    {
      rel: 'canonical',
      href: url,
    },
  ],
})

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
  ogUrl: url,
})
</script>

<template>
  <!-- <h2>{{ title }}</h2> -->
  <p>{{ description }}</p>
  <NuxtLink to="/">&larr; Startseite</NuxtLink>
</template>
