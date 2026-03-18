<script setup lang="ts">
type Feature = {
  title: string
  description: string
  icon: string
}

const features: Feature[] = [
  {
    title: 'Atención personalizada',
    description: 'Acompañamiento académico y administrativo durante tu formación.',
    icon: 'mdi:account-heart-outline',
  },
  {
    title: 'Modalidades flexibles',
    description: 'Programas escolarizados, ejecutivos y opciones híbridas.',
    icon: 'mdi:calendar-clock',
  },
  {
    title: 'Docentes especializados',
    description: 'Profesionales con experiencia en su campo.',
    icon: 'mdi:school-outline',
  },
  {
    title: 'Vinculación profesional',
    description: 'Prácticas, convenios y oportunidades laborales.',
    icon: 'mdi:briefcase-outline',
  },
  {
    title: 'Actividades culturales y deportivas',
    description: 'Formación integral dentro y fuera del aula.',
    icon: 'mdi:soccer',
  },
  {
    title: 'Enfoque humano',
    description: 'Educación centrada en el desarrollo integral del estudiante.',
    icon: 'mdi:heart-outline',
  },
]
</script>

<template>
  <section class="py-24 bg-muted">
    <div class="container mx-auto">

      <!-- Título -->
      <div class="max-w-3xl mb-16">
        <h2 class="text-4xl font-bold mb-4">
          ¿Por qué elegir UNINTER?
        </h2>
        <p class="text-lg text-muted-foreground">
          En UNINTER nos enfocamos en brindar una educación de calidad,
          con un modelo académico que responde a las necesidades actuales.
        </p>
      </div>

      <!-- Grid de diferenciadores -->
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="item in features"
          :key="item.title"
          class="rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition"
        >
          <div class="mb-4 text-primary">
            <Icon :name="item.icon" size="32" />
          </div>

          <h3 class="text-xl font-semibold mb-2">
            {{ item.title }}
          </h3>

          <p class="text-sm text-muted-foreground">
            {{ item.description }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>
