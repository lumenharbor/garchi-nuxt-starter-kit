<template>
  <div class="prose max-w-none" v-html="sanitized" />
</template>

<script setup lang="ts">
import sanitizeHtml from 'sanitize-html'

const props = withDefaults(defineProps<{
  content?: string
}>(), {
  content: ''
})

const allowedIframeHostnames = [
  'www.youtube.com',
  'youtube.com',
  'www.youtube-nocookie.com',
  'youtube-nocookie.com',
  'player.vimeo.com',
  'www.loom.com',
  'loom.com'
]

const sanitized = computed(() =>
  sanitizeHtml(props.content || '', {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      'img',
      'iframe',
      'video',
      'source',
      'figure',
      'figcaption',
      'h1',
      'h2',
      'span'
    ]),
    allowedAttributes: {
      '*': ['class', 'id', 'style'],
      a: ['href', 'name', 'target', 'rel'],
      img: ['src', 'srcset', 'alt', 'title', 'width', 'height', 'loading'],
      iframe: [
        'src',
        'width',
        'height',
        'frameborder',
        'allow',
        'allowfullscreen',
        'loading',
        'referrerpolicy',
        'title'
      ],
      video: ['src', 'controls', 'poster', 'width', 'height'],
      source: ['src', 'type']
    },
    allowedSchemes: ['http', 'https', 'mailto', 'tel', 'data'],
    allowedSchemesByTag: {
      img: ['http', 'https', 'data']
    },
    allowedIframeHostnames,
    transformTags: {
      a: (tagName, attribs) => ({
        tagName: 'a',
        attribs: {
          ...attribs,
          rel: attribs.rel || 'noopener noreferrer'
        }
      })
    }
  })
)
</script>
