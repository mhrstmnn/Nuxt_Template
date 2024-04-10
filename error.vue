<script setup lang="ts">
const title = 'Nuxt Template'
useHead({ title: `Fehler – ${title}` })

const props = defineProps({
  error: {
    type: Object,
    required: true,
  },
})

let errorMessage: Ref<{ title: string; paragraph: string }>

if (Number(props.error.statusCode) === 404) {
  errorMessage = ref({
    title: 'Nicht gefunden',
    paragraph: 'Diese Seite existiert nicht',
  })
} else {
  errorMessage = ref({
    title: 'Fehler aufgetreten',
    paragraph: 'Ein Fehler ist aufgetreten',
  })
}

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div id="app" class="m-10">
    <AppHeader />
    <div id="error" class="xl:text-xl">
      <h2>{{ errorMessage.title }}</h2>
      <p>{{ errorMessage.paragraph }}</p>
      <p>&larr; <a @click="handleError()">Zurück zur Startseite</a></p>
    </div>
    <AppFooter />
  </div>
</template>
