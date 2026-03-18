<template>
  <section
    id="oferta"
    class="py-20 bg-white"
  >
    <div class="container mx-auto">

      <!-- Título -->
      <div class="max-w-3xl mb-14">
        <h2 class="text-4xl font-bold text-primary mb-4">
          Oferta Educativa
        </h2>
        <p class="text-lg text-muted-foreground">
          En UNINTER contamos con una amplia variedad de programas académicos
          diseñados para acompañarte en cada etapa de tu formación.
        </p>
      </div>

      <!-- Categorías -->
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="item in categories"
          :key="item.title"
          class="rounded-xl border p-6 hover:shadow-lg transition"
        >
          <h3 class="text-xl font-semibold mb-2">
            {{ item.title }}
          </h3>
          <p class="text-sm text-muted-foreground mb-4">
            {{ item.description }}
          </p>
          <a
            :href="item.href"
            class="text-primary font-medium hover:underline"
          >
            Ver más →
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
type Category = {
  title: string
  description: string
  href: string
}

const categories: Category[] = [
  {
    title: 'Licenciaturas',
    description: 'Programas profesionales en diversas áreas del conocimiento.',
    href: '/licenciaturas',
  },
  {
    title: 'Licenciaturas Ejecutivas',
    description: 'Modalidades flexibles para quienes trabajan.',
    href: '/ejecutivas',
  },
  {
    title: 'Posgrados',
    description: 'Especialidades y maestrías para impulsar tu carrera.',
    href: 'https://posgrados.uninter.edu.mx',
  },
  {
    title: 'Diplomados',
    description: 'Capacitación práctica y actualización profesional.',
    href: 'https://diplomados.uninter.edu.mx',
  },
]
</script>
