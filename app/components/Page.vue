<template>
  <GarchiComponent
    v-for="section in page?.sections"
    :key="section.id"
    :section="section"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  slug: string;
}>();

const { data: page } = await useFetch("/api/garchipage", {
  method: "POST",
  body: {
    slug: props.slug,
  },
});

useHead({
  title: page?.value?.title || "Garchi Nuxt Starter Kit",
  meta: [
    {
      name: "description",
      content: page?.value?.description || "Garchi Nuxt Starter Kit",
    },
    { property: "og:title", content: page?.value?.title || "Garchi Nuxt Starter Kit" },
    { property: "og:description", content: page?.value?.description || "Garchi Nuxt Starter Kit" },
  ],
});
</script>

<style scoped></style>
