<template>
  <div :class="['mx-auto w-full px-4', maxWidthClass]" v-bind="$attrs">
    <GarchiComponent v-for="section in children" :key="section.id" :section="section" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { GarchiSection } from '@garchicms/garchi-node-sdk'

type Size = 'small' | 'medium' | 'large' | 'extra large' | 'extra-large'

const props = withDefaults(defineProps<{
  size?: Size
  children?: GarchiSection[]
}>(), {
  size: 'large',
  children: () => []
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
