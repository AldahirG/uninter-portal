<template>
  <div class="career-dynamic-page">
    <NavbarIndex />

    <!-- Cargando o Estado de Error -->
    <div v-if="!careerData" class="not-found-container">
      <h2>Diplomado no encontrado</h2>
      <NuxtLink to="/diplomados" class="btn-return">Ver todos los diplomados</NuxtLink>
    </div>

    <!-- Contenido del Diplomado -->
    <main v-else>
      <DiplomadoHeroShowcase 
        :data="careerData" 
        programType="Diplomado"
        :duration="careerData.duracion"
        :modality="programModality"
      />
      
      <!-- PERFILES DE INGRESO Y EGRESO -->
      <DiplomadoOverview :data="careerData" />
      
      <!-- PLAN DE ESTUDIOS ADAPTABLE PARA DIPLOMADOS -->
      <DiplomadoSyllabus :data="careerData" />

      <!-- Formulario de admisiones -->
      <FormRegister id="contacto" />
    </main>

    <FloatingActions />
    <PortalFooter />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import NavbarIndex from "~/components/navbar/Index.vue";
import FloatingActions from "~/components/portal/FloatingActions.vue";
import PortalFooter from "~/components/layout/Footer.vue";

import DiplomadoHeroShowcase from "~/components/degree/diplomados/DiplomadoHeroShowcase.vue";
import DiplomadoOverview from "~/components/degree/diplomados/DiplomadoOverview.vue";
import DiplomadoSyllabus from "~/components/degree/diplomados/DiplomadoSyllabus.vue";
import FormRegister from "~/components/diplomados/FormRegister.vue";

// Data JSON
import diplomadosDB from "~/assets/data/diplomados.json";

const route = useRoute();

// Parameter matches slug: e.g., diplomado-creatividad-publicidad
const careerSlug = computed(() => {
  return (route.params.id as string) || "";
});

// Extract data base from the JSON
const careerData = computed(() => {
  const db = (diplomadosDB as any).default || diplomadosDB;
  return db[careerSlug.value] || null;
});

const programModality = computed(() => {
  if (!careerSlug.value) return 'Híbrido';
  if (careerSlug.value.includes('-en-linea')) {
    return 'Híbrido y en Línea';
  }
  return 'Híbrido';
});

// Set page head title dynamically
useHead(() => {
  const name = careerData.value ? `Diplomado en ${careerData.value.name}` : "Diplomado";
  return {
    title: `${name} | Diplomados UNINTER`
  };
});
</script>

<style scoped>
.career-dynamic-page {
  background-color: #ffffff;
  min-height: 100vh;
}

/* Error / Not Found */
.not-found-container {
  padding: 8rem 2rem;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.not-found-container h2 {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 2rem;
  color: #0f3c61;
  margin-bottom: 1.5rem;
}

.btn-return {
  display: inline-block;
  background: #ea580c;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  transition: background 0.2s;
}

.btn-return:hover {
  background: #c2410c;
}
</style>
