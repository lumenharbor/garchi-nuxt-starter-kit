<template>
  <section class="relative py-24 px-6 bg-white lg:py-32" v-bind="$attrs">
    <!-- Subtle radial background -->
    <div class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(139,92,246,0.04),transparent)]" />

    <div class="relative mx-auto max-w-7xl">
      <div v-if="section_title || section_subtitle" class="mb-16 text-center">
        <template v-if="section_title">
          <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-3.5 py-1.5">
            <div class="h-1.5 w-1.5 rounded-full bg-violet-500" />
            <span class="text-xs font-semibold uppercase tracking-widest text-violet-600">Features</span>
          </div>
          <h2 class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {{ section_title }}
          </h2>
        </template>
        <p v-if="section_subtitle" class="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-500">
          {{ section_subtitle }}
        </p>
      </div>

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <GarchiComponent v-for="section in subsections" :key="section.id" :section="section" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { GarchiSection } from '@garchicms/garchi-node-sdk'

defineProps<{
  section_title?: string
  section_subtitle?: string
  subsections?: GarchiSection[]
}>()
</script>
