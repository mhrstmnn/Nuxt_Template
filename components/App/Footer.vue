<template>
  <footer>
    &copy; {{ new Date().getFullYear() }} Michael Horstmann<br />
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
  margin-top: 3rem;
  font-size: 1rem;
  filter: invert(10%);
}
</style>
