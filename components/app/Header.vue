<template>
  <header>
    <h1 class="mt-0 mb-6 xl:mb-8 font-extrabold xl:text-4xl">
      <NuxtLink to="/">Nuxt Template</NuxtLink>
    </h1>
  </header>
</template>

<style scoped>
header > h1 {
  color: var(--primary-color);

  & > a {
    color: unset;

    &:hover {
      border-bottom: none;
    }
  }
}
</style>
