<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} – Nuxt` : 'Nuxt'
  },
})
</script>

<template>
  <div id="app">
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>

<style>
#app {
  font-size: 1.5rem;
}

#app a {
  text-decoration: none;
}
</style>
