<template>
  <Page :slug="slug" />
</template>

<script setup lang="ts">
const route = useRoute()

const slug = computed(() => {
  const params = route.params.slug
  if (!params || (Array.isArray(params) && params.length === 0)) return '/'
  return Array.isArray(params) ? params.join('/') : String(params)
})
</script>
