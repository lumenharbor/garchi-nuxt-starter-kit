<template>
  <component
    :is="link_url ? 'a' : 'div'"
    :href="link_url || undefined"
    class="group relative flex flex-col rounded-2xl border border-slate-100 bg-white p-7 transition-all duration-300 hover:border-slate-200 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1"
    v-bind="$attrs"
  >
    <!-- Icon -->
    <div class="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 text-slate-600 ring-1 ring-slate-100 transition-all duration-300 group-hover:bg-violet-50 group-hover:text-violet-600 group-hover:ring-violet-100">
      <Icon :icon-node="iconNode" class="h-5 w-5" />
    </div>

    <!-- Title -->
    <h3 class="mb-2.5 text-[15px] font-semibold leading-snug text-slate-900">{{ title }}</h3>

    <!-- Description -->
    <div
      v-if="sanitized"
      class="flex-1 text-[14px] leading-relaxed text-slate-500"
      v-html="sanitized"
    />

    <!-- Link -->
    <div
      v-if="link_url"
      class="mt-5 flex items-center gap-1 text-[13px] font-semibold text-violet-600 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:gap-2"
    >
      Learn more
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
      </svg>
    </div>

    <!-- Bottom accent line on hover -->
    <div class="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
  </component>
</template>

<script setup lang="ts">
import * as LucideIcons from 'lucide-vue-next'
import type { LucideIcon } from 'lucide-vue-next'
import sanitizeHtml from 'sanitize-html'

const props = defineProps<{
  icon?: string
  title: string
  description?: string
  link_url?: string
}>()

function toPascalCase(str: string): string {
  return str
    .split(/[-_\s]+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
}

const iconNode = computed((): LucideIcon | null => {
  const name = props.icon || 'Star'
  return (LucideIcons as Record<string, unknown>)[toPascalCase(name)] as LucideIcon | null ?? null
})

const sanitized = computed(() =>
  props.description
    ? sanitizeHtml(props.description, {
        allowedTags: ['p', 'br', 'strong', 'em', 'a', 'span'],
        allowedAttributes: { a: ['href', 'target', 'rel'], '*': ['class'] },
      })
    : ''
)
</script>
