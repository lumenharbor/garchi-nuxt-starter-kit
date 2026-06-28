<template>
  <div :class="['mx-auto w-full px-4', maxWidthClass]" v-bind="$attrs">
    <GarchiComponent v-for="section in subsections" :key="section.id" :section="section" />
  </div>
</template>

<script setup lang="ts">
import type { GarchiSection } from '@garchicms/garchi-node-sdk'

type Size = 'small' | 'medium' | 'large' | 'extra large' | 'extra-large'

const props = withDefaults(defineProps<{
  size?: Size
  subsections?: GarchiSection[]
}>(), {
  size: 'large',
  subsections: () => []
})

const sizeMap: Record<string, string> = {
  small: 'max-w-md',
  medium: 'max-w-xl',
  large: 'max-w-3xl',
  'extra large': 'max-w-7xl',
  'extra-large': 'max-w-7xl'
}

const maxWidthClass = computed(() => sizeMap[props.size] || sizeMap.large)
</script>
