<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <p>
    <strong>HelloWorld-Component:</strong>
    <br />
    {{ props.name ? 'Hallo' : 'Hello' }} {{ props.name ?? 'World' }} … 👋😄
  </p>
</template>
