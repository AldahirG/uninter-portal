import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: {
    enabled: true
  },

  experimental: {
    appManifest: false,
    viewTransition: true
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" }
  },

  css: [
    "~/assets/css/tailwind.css",

    // ✅ Swiper CSS (IMPORTANTE)
    "swiper/css",
    "swiper/css/navigation",
    "swiper/css/pagination",
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    "@nuxt/image",
    "shadcn-nuxt",
    "@vueuse/nuxt",
    "@nuxt/icon",
    "@nuxt/fonts",
  ],

  icon: {
    serverBundle: {
      collections: ["lucide", "mdi"],
    }
  },

  nitro: {
    prerender: {
      failOnError: false,
    }
  }
})
