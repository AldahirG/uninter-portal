<script setup lang="ts">
import HeroBanner from '~/components/prep-a/HeroBanner.vue'

useHead({
  title: 'Prepa Abierta - UNINTER',
  meta: [
    { name: 'description', content: 'Prepa Abierta UNINTER. Formamos jóvenes con visión global.' }
  ]
})
</script>

<template>
  <div>
    <HeroBanner />
    <!-- Demás componentes irán aquí debajo (e.g. sección de planes de estudio) -->
    <section id="oferta-prepaA" style="min-height: 50vh; padding: 4rem 1.5rem; background: #fff;">
      <div style="max-width: 1280px; margin: 0 auto; text-align: center;">
        <h2 style="font-size: 2rem; color: #348A81; font-weight: 800; margin-bottom: 1rem;">Plan de Estudios</h2>
        <p style="color: #666; max-width: 600px; margin: 0 auto;">Explora la oferta académica de nuestra Prepa Abierta. Flexibilidad, prestigio y calidad internacional.</p>
      </div>
    </section>
  </div>
</template>
