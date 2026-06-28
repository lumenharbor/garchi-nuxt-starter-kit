<template>
  <component :is="iconNode" v-if="iconNode" :class="className" />
</template>

<script setup lang="ts">
import type { LucideIcon } from 'lucide-vue-next'

defineProps<{
  iconNode?: LucideIcon | null
  className?: string
}>()
</script>
