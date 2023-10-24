<script setup lang="ts">
import Package from '../../package.json'
</script>

<template>
  <footer>
    Version: {{ Package.version }}
    <br />
    Theme: <ToggleColorMode />
    <br />
    <br />
    &copy; {{ new Date().getFullYear() }}
    <NuxtLink to="https://links.hrstmnn.de" target="_blank"
      >Michael Horstmann</NuxtLink
    >
    <br />
    <NuxtLink to="https://hrstmnn.de/impressum/" target="_blank"
      >Impressum</NuxtLink
    >
    und
    <NuxtLink to="https://hrstmnn.de/datenschutz/" target="_blank"
      >Datenschutz</NuxtLink
    >
  </footer>
</template>

<style scoped>
footer {
  margin-top: 2rem;
  font-size: 1rem;
  filter: invert(10%);
}
</style>
