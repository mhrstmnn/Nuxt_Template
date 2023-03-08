<template>
  <footer>
    &copy; {{ new Date().getFullYear() }} Michael Horstmann<br />
    <a href="https://hrstmnn.de/impressum/" target="_blank">Impressum</a> und
    <a href="https://hrstmnn.de/datenschutz/" target="_blank">Datenschutz</a>
  </footer>
</template>

<style scoped>
footer {
  margin-top: 3rem;
  font-size: 1rem;
  filter: invert(30%);
}
</style>
