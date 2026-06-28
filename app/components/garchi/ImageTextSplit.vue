<template>
  <section class="relative overflow-hidden bg-white py-24 px-6 lg:py-32" v-bind="$attrs">
    <!-- Background decoration -->
    <div class="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-slate-50/50" />

    <div class="relative mx-auto max-w-7xl">
      <div
        class="flex flex-col gap-14"
        :class="[
          !isStacked ? 'lg:flex-row lg:items-center lg:gap-20' : '',
          !isStacked && !imageFirst ? 'lg:flex-row-reverse' : '',
        ]"
      >
        <template v-if="imageFirst">
          <div v-if="image" :class="['relative', isStacked ? 'w-full' : 'w-full lg:w-1/2']">
            <div class="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-100 to-indigo-100 opacity-60 blur-2xl" />
            <div class="relative overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
              <img
                :src="image"
                alt=""
                class="w-full object-cover transition-transform duration-700 will-change-transform hover:scale-[1.03]"
                style="min-height: 360px;"
              />
              <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/8" />
            </div>
          </div>
          <div :class="['flex flex-col justify-center', isStacked ? 'w-full' : 'w-full lg:w-1/2']">
            <div class="mb-6 flex items-center gap-3">
              <div class="h-px w-10 bg-violet-400" />
              <span class="text-xs font-semibold uppercase tracking-widest text-violet-500">Our story</span>
            </div>
            <h2 v-if="title" class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl leading-[1.1]">{{ title }}</h2>
            <div
              v-if="sanitized"
              class="mt-6 prose prose-slate prose-lg max-w-none prose-p:text-slate-500 prose-p:leading-relaxed prose-p:mt-4 prose-a:text-violet-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-800 prose-strong:font-semibold prose-li:text-slate-500"
              v-html="sanitized"
            />
          </div>
        </template>

        <template v-else>
          <div :class="['flex flex-col justify-center', isStacked ? 'w-full' : 'w-full lg:w-1/2']">
            <div class="mb-6 flex items-center gap-3">
              <div class="h-px w-10 bg-violet-400" />
              <span class="text-xs font-semibold uppercase tracking-widest text-violet-500">Our story</span>
            </div>
            <h2 v-if="title" class="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl leading-[1.1]">{{ title }}</h2>
            <div
              v-if="sanitized"
              class="mt-6 prose prose-slate prose-lg max-w-none prose-p:text-slate-500 prose-p:leading-relaxed prose-p:mt-4 prose-a:text-violet-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-800 prose-strong:font-semibold prose-li:text-slate-500"
              v-html="sanitized"
            />
          </div>
          <div v-if="image" :class="['relative', isStacked ? 'w-full' : 'w-full lg:w-1/2']">
            <div class="absolute -inset-4 rounded-3xl bg-gradient-to-br from-violet-100 to-indigo-100 opacity-60 blur-2xl" />
            <div class="relative overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] ring-1 ring-black/5">
              <img
                :src="image"
                alt=""
                class="w-full object-cover transition-transform duration-700 will-change-transform hover:scale-[1.03]"
                style="min-height: 360px;"
              />
              <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/8" />
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import sanitizeHtml from 'sanitize-html'

type ImagePosition = 'left' | 'right' | 'top' | 'bottom'

const props = withDefaults(defineProps<{
  image?: string
  title?: string
  body?: string
  image_position?: ImagePosition
}>(), {
  image_position: 'left'
})

const isStacked = computed(() =>
  props.image_position === 'top' || props.image_position === 'bottom'
)

const imageFirst = computed(() =>
  props.image_position === 'left' || props.image_position === 'top'
)

const sanitized = computed(() =>
  props.body
    ? sanitizeHtml(props.body, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['h1', 'h2', 'span']),
        allowedAttributes: { '*': ['class'], a: ['href', 'target', 'rel'] },
        transformTags: {
          a: (tagName, attribs) => ({
            tagName: 'a',
            attribs: { ...attribs, rel: attribs.rel || 'noopener noreferrer' }
          })
        }
      })
    : ''
)
</script>
