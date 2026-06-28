<template>
  <section class="py-20 px-6 lg:py-24" v-bind="$attrs">
    <div class="mx-auto max-w-3xl">
      <MarkdownRenderer :content="content" />
    </div>
  </section>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  content?: string
}>(), { content: '' })
</script>
