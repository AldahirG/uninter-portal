<template>
  <Navbare />

  <!-- Impacto -->
  <HeroCarousel />

  <!-- Producto principal -->
  <section class="py-28">
    <OfertaLicenciaturas />
  </section>

  <section class="py-24 bg-muted">
    <OfertaEjecutivas />
  </section>

  <!-- Contexto académico -->
  <section class="py-24">
    <OfertaEducativa />
  </section>

  <!-- Orientación -->
  <section class="py-24 bg-muted">
    <QuickAccess />
  </section>

  <!-- Confianza -->
  <section class="py-24">
    <Diferenciadores />
  </section>

  <!-- Experiencia -->
  <section class="py-28 bg-muted">
    <VidaUniversitaria />
  </section>

  <!-- Conversión -->
  <CTAFinal />

  <FloatingActions />
</template>

<script setup lang="ts">
import Navbare from '@/components/navbar/Index.vue'

import HeroCarousel from '@/components/portal/HeroCarousel.vue'
import OfertaLicenciaturas from '@/components/portal/OfertaLicenciaturas.vue'
import OfertaEjecutivas from '@/components/portal/OfertaEjecutivas.vue'
import OfertaEducativa from '@/components/portal/OfertaEducativa.vue'
import QuickAccess from '@/components/portal/QuickAccess.vue'
import Diferenciadores from '@/components/portal/Diferenciadores.vue'
import VidaUniversitaria from '@/components/portal/VidaUniversitaria.vue'
import CTAFinal from '@/components/portal/CTAFinal.vue'
import FloatingActions from '@/components/portal/FloatingActions.vue'
</script>
