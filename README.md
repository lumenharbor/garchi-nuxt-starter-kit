# Garchi CMS — Nuxt Starter Kit

A Nuxt starter kit for [Garchi CMS](https://garchi.co.uk), a cloud-based
headless CMS with a full-write MCP server. Clone it, add an API key, and you
have a Nuxt app rendering content from Garchi — with the option of letting
an AI agent author that content for you.

Use it as the base for a new project, or as a reference for wiring Garchi into
an existing one.

## Requirements

- Node.js 20+
- A free Garchi account — [sign up](https://garchi.co.uk)

## Quick start

```bash
git clone https://github.com/lumenharbor/garchi-nuxt-starter-kit.git
cd garchi-nuxt-starter-kit
npm install
```

Credentials live in `runtimeConfig` in `nuxt.config.ts` 

**There's no `.env` to copy. Open it and replace the placeholders:**

```ts
runtimeConfig: {
  GARCHI_API_URL: "https://garchi.co.uk/api/v2",
  GARCHI_API_KEY: "your_api_key",
  GARCHI_PREVIEW_TOKEN: "your_preview_token_from_space_settings",
  GARCHI_SPACE_UID: "your_space_uid",
},
```

| Key | Where to find it |
|-----|------------------|
| `GARCHI_API_KEY` | Dashboard → Settings → API Keys |
| `GARCHI_SPACE_UID` | Dashboard → your space |
| `GARCHI_PREVIEW_TOKEN` | Dashboard → Space Settings — lets you render unpublished content |

These sit at the top level of `runtimeConfig`, so they're server-only. Nuxt
never exposes them to the browser.

```bash
npm run dev
```

Visit `http://localhost:3000` to see the example page rendering live content.

