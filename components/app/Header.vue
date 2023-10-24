<template>
  <header>
    <h1 class="mt-0"><NuxtLink to="/">Nuxt Starter</NuxtLink></h1>
  </header>
</template>

<style scoped>
header > h1 {
  color: var(--primary-color);

  & > a {
    color: unset;
  }
}
</style>
