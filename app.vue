<script setup lang="ts">
const title = 'Nuxt'
useHead({
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} – ${title}` : title,
})
</script>

<template>
  <div id="app">
    <AppHeader />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <AppFooter />
  </div>
</template>

<style>
#app {
  font-size: 1.5rem;
}
</style>
