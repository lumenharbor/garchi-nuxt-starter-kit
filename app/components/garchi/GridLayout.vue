<template>
  <div :class="['grid gap-4 grid-cols-1 md:grid-cols-2', lgColsClass]" v-bind="$attrs">
    <GarchiComponent v-for="section in children" :key="section.id" :section="section" />
  </div>
</template>

<script setup lang="ts">
import type { GarchiSection } from '@garchicms/garchi-node-sdk'

const props = withDefaults(defineProps<{
  cols?: number | string
  children?: GarchiSection[]
}>(), {
  cols: 3,
  children: () => []
})

const lgColsMap: Record<number, string> = {
  1: 'lg:grid-cols-1',
  2: 'lg:grid-cols-2',
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5'
}

const lgColsClass = computed(() => {
  const n = Math.min(5, Math.max(1, Number(props.cols) || 1))
  return lgColsMap[n]
})
</script>
