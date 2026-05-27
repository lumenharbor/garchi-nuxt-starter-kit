<template>
  <main class="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden font-mono">

    <!-- Ambient grid -->
    <div
      class="pointer-events-none absolute inset-0 opacity-[0.04]"
      :style="{
        backgroundImage: 'linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)',
        backgroundSize: '48px 48px',
      }"
    />

    <!-- Top-right accent blob -->
    <div class="pointer-events-none absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-[#ff3c3c] opacity-[0.12] blur-[100px]" />
    <!-- Bottom-left accent blob -->
    <div class="pointer-events-none absolute -bottom-32 -left-32 w-[360px] h-[360px] rounded-full bg-[#ff3c3c] opacity-[0.07] blur-[90px]" />

    <!-- Header -->
    <header class="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/[0.06]">
      <div class="flex items-center gap-3">
        <span class="w-2 h-2 rounded-full bg-[#ff3c3c] animate-pulse" />
        <span class="text-xs uppercase tracking-[0.25em] text-white/40">Starter Kit</span>
      </div>
      <a
        href="https://garchi.co.uk"
        target="_blank"
        rel="noopener noreferrer"
        class="opacity-70 hover:opacity-100 transition-opacity"
      >
        <img src="/garchi_logo.svg" alt="Garchi Logo" width="80" height="20" class="brightness-0 invert" />
      </a>
    </header>

    <!-- Hero -->
    <section class="relative z-10 px-8 pt-20 pb-16 max-w-4xl">
      <p class="text-xs uppercase tracking-[0.3em] text-[#ff3c3c] mb-5">
        Garchi CMS × Nuxt
      </p>
      <h1 class="text-[clamp(2.8rem,6vw,5rem)] font-bold leading-[1.05] tracking-tight mb-6">
        Your content,<br />
        <span class="text-white/20">your structure,</span><br />
        your rules.
      </h1>
      <p class="text-white/40 text-base max-w-md leading-relaxed">
        An API-first headless CMS built for developers who think in components. Get set up in minutes.
      </p>
      <div class="mt-6 inline-flex items-center gap-2 rounded-full border border-[#ff3c3c]/30 bg-[#ff3c3c]/[0.07] px-4 py-1.5">
        <span class="w-1.5 h-1.5 rounded-full bg-[#ff3c3c]" />
        <span class="text-[11px] uppercase tracking-[0.2em] text-[#ff3c3c]">MCP-native — AI agent ready</span>
      </div>
    </section>

    <!-- Steps -->
    <section class="relative z-10 px-8 pb-20">
      <div class="max-w-2xl divide-y divide-white/[0.06] border-t border-white/[0.06]">
        <div
          v-for="step in steps"
          :key="step.num"
          class="group flex items-start gap-6 py-5 hover:bg-white/[0.02] -mx-4 px-4 transition-colors duration-200 rounded-sm"
        >
          <span class="shrink-0 text-[#ff3c3c] text-xs mt-0.5 tabular-nums">{{ step.num }}</span>
          <p class="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
            {{ step.pre }}
            <code
              v-if="step.code"
              class="text-white bg-white/[0.08] border border-white/[0.1] rounded px-1.5 py-0.5 text-xs font-mono"
            >{{ step.code }}</code>
            <a
              v-if="step.link"
              :href="step.link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[#ff3c3c] underline underline-offset-2 decoration-[#ff3c3c]/40 hover:decoration-[#ff3c3c] transition-colors"
            >{{ step.link.label }}</a>
            {{ step.post }}
          </p>
        </div>
      </div>
    </section>

    <!-- Cards -->
    <section class="relative z-10 px-8 pb-24">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl">

        <a
          href="https://garchi.co.uk/documentation"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.03] p-6 hover:border-[#ff3c3c]/40 hover:bg-white/[0.05] transition-all duration-300"
        >
          <div class="absolute top-0 right-0 w-24 h-24 bg-[#ff3c3c] opacity-0 group-hover:opacity-[0.05] blur-2xl transition-opacity duration-500 rounded-full" />
          <p class="text-[10px] uppercase tracking-[0.25em] text-white/25 mb-3">01 / Learn</p>
          <h2 class="text-lg font-semibold mb-2 flex items-center gap-2">
            Documentation
            <span class="text-white/20 group-hover:text-[#ff3c3c] group-hover:translate-x-1 inline-block transition-all duration-200">→</span>
          </h2>
          <p class="text-sm text-white/35 leading-relaxed">
            In-depth reference for features, API endpoints, and usage patterns.
          </p>
        </a>

        <a
          href="https://garchi.co.uk/signup"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative overflow-hidden rounded-lg border border-white/[0.08] bg-white/[0.03] p-6 hover:border-[#ff3c3c]/40 hover:bg-white/[0.05] transition-all duration-300"
        >
          <div class="absolute top-0 right-0 w-24 h-24 bg-[#ff3c3c] opacity-0 group-hover:opacity-[0.05] blur-2xl transition-opacity duration-500 rounded-full" />
          <p class="text-[10px] uppercase tracking-[0.25em] text-white/25 mb-3">02 / Start</p>
          <h2 class="text-lg font-semibold mb-2 flex items-center gap-2">
            Sign Up Free
            <span class="text-white/20 group-hover:text-[#ff3c3c] group-hover:translate-x-1 inline-block transition-all duration-200">→</span>
          </h2>
          <p class="text-sm text-white/35 leading-relaxed">
            Create an account and start building your content structure instantly.
          </p>
        </a>

        <a
          href="https://garchi.co.uk/mcp-docs"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative overflow-hidden rounded-lg border border-[#ff3c3c]/20 bg-[#ff3c3c]/[0.04] p-6 hover:border-[#ff3c3c]/50 hover:bg-[#ff3c3c]/[0.08] transition-all duration-300"
        >
          <div class="absolute top-0 right-0 w-28 h-28 bg-[#ff3c3c] opacity-0 group-hover:opacity-[0.08] blur-2xl transition-opacity duration-500 rounded-full" />
          <p class="text-[10px] uppercase tracking-[0.25em] text-[#ff3c3c]/60 mb-3">03 / Agents</p>
          <h2 class="text-lg font-semibold mb-2 flex items-center gap-2">
            MCP Integration
            <span class="text-white/20 group-hover:text-[#ff3c3c] group-hover:translate-x-1 inline-block transition-all duration-200">→</span>
          </h2>
          <p class="text-sm text-white/35 leading-relaxed">
            Connect AI agents to your content via the native MCP server. No extra glue code.
          </p>
        </a>

      </div>
    </section>

    <!-- Footer -->
    <footer class="relative z-10 px-8 py-4 border-t border-white/[0.06] flex items-center justify-between">
      <span class="text-[10px] uppercase tracking-[0.25em] text-white/20">Garchi CMS</span>
      <span class="text-[10px] text-white/20">API-first · Headless · MCP-native</span>
    </footer>

  </main>
</template>

<script setup>
useHead({
  script: [
    {
      src: 'https://garchi.co.uk/script/index.es.js',
      defer: true,
    },
  ],
})

const steps = [
  { num: '01', pre: 'Provide your api key in ', code: '.env', post: '' },
  { num: '02', pre: 'Create your first page on ', link: { href: 'https://garchi.co.uk', label: 'Garchi CMS' }, post: '' },
  { num: '03', pre: 'Check out ', code: 'components/garchi', post: ' folder for example components' },
  { num: '04', pre: 'Check out ', code: 'types/garchi.d.ts', post: ' for types' },
  { num: '05', pre: 'Check out ', code: 'utils/garchi.ts', post: ' for helper functions' },
]
</script>