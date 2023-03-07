<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    required: false,
  },
})
</script>

<template>
  <p>Hello {{ props.name ?? 'World' }}</p>
</template>
