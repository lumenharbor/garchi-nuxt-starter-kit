<template>
  <component
    v-bind="{
      ...section.props,
      subsections: section.children
    }"
    :is="Component"
  />
</template>

<script setup lang="ts">
import type { GarchiSection } from '@garchicms/garchi-node-sdk'

const props = defineProps<{
  section: GarchiSection
}>()

const Component = resolveComponent(props.section.name)
</script>
