<template>
  <div>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      src: 'https://garchi.co.uk/script/index.es.js',
      defer: true,
    },
  ],
})
</script>
