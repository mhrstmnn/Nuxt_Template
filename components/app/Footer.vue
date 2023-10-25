<script setup lang="ts">
import Package from '../../package.json'
</script>

<template>
  <footer class="mt-8 xl:mt-10">
    <p class="mb-0 font-light leading-relaxed">
      Version: {{ Package.version }}
      <br />
      Theme: <ToggleColorMode class="font-light" />
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
    </p>
  </footer>
</template>
