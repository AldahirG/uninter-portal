<script setup lang="ts">
import { useColorMode } from "@vueuse/core"
import { Moon, Sun } from "lucide-vue-next"

const mode = useColorMode()

/*
  Función que genera el mismo dropdown para todos los grados
*/
const baseChildren = (slug: string, label: string) => [
  {
    label: `Página ${label}`,
    href: `/${slug}`,
  },
  {
    label: "Folletos",
    href: `/${slug}/folletos`,
  },
  {
    label: "Admisiones",
    href: `/${slug}/admisiones`,
  },
  {
    label: "Test Vocacional",
    href: "/test-vocacional",
  },
  {
    label: "Calcula tu Beca",
    href: "/beca",
  },
]

const programs = [
  {
    label: "Universidad",
    slug: "universidad",
    color: "bg-blue-600",
  },
  {
    label: "Bachillerato",
    slug: "bachillerato",
    color: "bg-green-600",
  },
  {
    label: "Secundaria",
    slug: "secundaria",
    color: "bg-orange-500",
  },
  {
    label: "Posgrados",
    slug: "posgrados",
    color: "bg-gray-500",
  },
  {
    label: "Diplomados",
    slug: "diplomados",
    color: "bg-red-700",
  },
  {
    label: "Spanish School",
    slug: "spanish-school",
    color: "bg-orange-600",
  },
  {
    label: "Verano Kids",
    slug: "verano-kids",
    color: "bg-purple-600",
  },
  {
    label: "Prepa Abierta",
    slug: "prepa-abierta",
    color: "bg-emerald-600",
  },
  {
    label: "Eventos",
    slug: "eventos",
    color: "bg-blue-900",
  },
  {
    label: "Internacionalización",
    slug: "internacionalizacion",
    color: "bg-red-600",
  },
  {
    label: "Centro de Idiomas",
    slug: "centro-idiomas",
    color: "bg-blue-500",
  },
]
</script>

<template>
  <header class="w-full bg-white shadow-sm">

    <!-- TOP BAR -->
    <div class="border-b">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <!-- Logo + Subtitulo -->
        <div class="flex items-center gap-4">
          <Logo />
          <div class="hidden md:block text-sm text-gray-500">
            Secundaria · Bachillerato · Licenciatura · Ingeniería · Posgrado
          </div>
        </div>

        <!-- Contacto + redes -->
        <div class="flex items-center gap-5">
          <span class="text-sm font-semibold tracking-wide">CONTACTO</span>

          <div class="flex gap-4 text-lg">
            <Icon name="mdi:facebook" />
            <Icon name="mdi:instagram" />
            <Icon name="mdi:youtube" />
            <Icon name="mdi:linkedin" />
            <Icon name="mdi:tiktok" />
          </div>

          <button
            class="ml-4 p-2 rounded-md border"
            @click="mode = mode === 'light' ? 'dark' : 'light'"
          >
            <Moon v-if="mode === 'light'" />
            <Sun v-else />
          </button>
        </div>

      </div>
    </div>

    <!-- PROGRAM NAV -->
    <nav class="w-full bg-white border-b">

      <div class="max-w-7xl mx-auto">

<ul class="flex justify-center items-stretch flex-nowrap">

        <li
  v-for="program in programs"
  :key="program.slug"
  class="relative group border-r border-white last:border-r-0"
>


            <!-- Botón principal -->
<button
  class="px-6 py-3 text-xs font-semibold uppercase text-white transition duration-200 whitespace-nowrap"
  :class="program.color"
>
  {{ program.label }}
</button>


            <!-- Dropdown -->
            <div
              class="absolute left-1/2 -translate-x-1/2 top-full mt-1
                     opacity-0 invisible
                     group-hover:opacity-100 group-hover:visible
                     transition duration-200
                     bg-white shadow-lg border rounded-md min-w-[220px] z-50"
            >
              <ul>
                <li
                  v-for="child in baseChildren(program.slug, program.label)"
                  :key="child.label"
                  class="border-b last:border-none"
                >
                  <NuxtLink
                    :to="child.href"
                    class="block px-4 py-3 text-sm hover:bg-gray-100 transition"
                  >
                    {{ child.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>

          </li>

        </ul>

      </div>

    </nav>

  </header>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

</style>
