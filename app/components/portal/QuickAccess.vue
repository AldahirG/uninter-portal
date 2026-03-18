<script setup lang="ts">
type QuickLink = {
  title: string
  description: string
  href: string
  color: string
}

const quickLinks: QuickLink[] = [
  {
    title: 'Secundaria',
    description: 'Formación integral desde una etapa temprana.',
    href: 'https://secundaria.uninter.edu.mx',
    color: 'bg-emerald-600',
  },
  {
    title: 'Bachillerato',
    description: 'Base académica sólida para tu futuro.',
    href: 'https://bachillerato.uninter.edu.mx',
    color: 'bg-blue-600',
  },
  {
    title: 'Licenciaturas',
    description: 'Programas profesionales con alto impacto.',
    href: 'https://universidad.uninter.edu.mx',
    color: 'bg-indigo-600',
  },
  {
    title: 'Posgrados',
    description: 'Especialízate y potencia tu perfil profesional.',
    href: 'https://posgrados.uninter.edu.mx',
    color: 'bg-purple-600',
  },
  {
    title: 'Diplomados',
    description: 'Capacitación práctica y actualizada.',
    href: 'https://diplomados.uninter.edu.mx',
    color: 'bg-amber-600',
  },
  {
    title: 'Idiomas',
    description: 'Aprende y certifica un nuevo idioma.',
    href: 'https://idiomas.uninter.edu.mx',
    color: 'bg-red-600',
  },
]
</script>

<template>
  <section class="py-20 bg-muted">
    <div class="container mx-auto">
      
      <h2 class="text-3xl font-bold text-center mb-12">
        Conoce nuestros niveles educativos
      </h2>

      <div
        class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <a
          v-for="item in quickLinks"
          :key="item.title"
          :href="item.href"
          class="group relative rounded-xl p-6 text-white overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl"
          :class="item.color"
        >
          <!-- Overlay hover -->
          <div class="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition"></div>

          <div class="relative z-10">
            <h3 class="text-2xl font-semibold mb-2">
              {{ item.title }}
            </h3>
            <p class="text-sm opacity-90">
              {{ item.description }}
            </p>
          </div>

          <!-- Flecha -->
          <div class="absolute bottom-4 right-4 text-white/80 group-hover:text-white transition">
            →
          </div>
        </a>
      </div>

    </div>
  </section>
</template>
