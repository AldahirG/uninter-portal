<template>
  <div class="career-dynamic-page">
    <NavbarIndex />

    <!-- Cargando o Estado de Error -->
    <div v-if="!careerData" class="not-found-container">
      <h2>Licenciatura no encontrada</h2>
      <NuxtLink to="/" class="btn-return">Regresar al Inicio</NuxtLink>
    </div>

    <!-- Contenido de la Carrera -->
    <main v-else>
      <CareerHeroShowcase 
        :data="careerData" 
        :duration="careerData?.duration" 
        :programType="careerData?.programType" 
      />
      <CareerOverview :data="careerData" />
      <CareerJobMarket :careerOpportunities="careerData?.careerOpportunities" />
      <CareerSyllabus :careerId="careerData.id" :syllabusDescription="planDescription" />
      <CareerInternationalization 
        v-if="careerData?.internationalization" 
        :data="careerData.internationalization" 
        :careerName="careerData.name"
      />
      <CareerProfiles 
        :admissionProfile="careerData?.admissionProfile" 
        :graduateProfile="careerData?.graduateProfile" 
      />
      <CareerCertifications :certificaciones="careerData?.powerSkills" :careerSlug="careerSlug" />
      <CareerResearch
        :labs="careerData?.techArsenal"
        :projectsBlogUrl="careerData?.projectsBlogUrl"
      />

      <CareerFAQ :faq="careerData.faq" />

      <CareerAdmissionCTA />
    </main>

    <FloatingActions />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import NavbarIndex from "~/components/navbar/Index.vue";
import FloatingActions from "~/components/portal/FloatingActions.vue";

import CareerHeroShowcase from "~/components/degree/shared/CareerHeroShowcase.vue";
import CareerOverview from "~/components/degree/shared/CareerOverview.vue";
import CareerJobMarket from "~/components/degree/shared/CareerJobMarket.vue";
import CareerSyllabus from "~/components/degree/shared/CareerSyllabus.vue";
import CareerInternationalization from "~/components/degree/shared/CareerInternationalization.vue";
import CareerProfiles from "~/components/degree/shared/CareerProfiles.vue";
import CareerCertifications from "~/components/degree/shared/CareerCertifications.vue";
import CareerResearch from "~/components/degree/shared/CareerResearch.vue";
import CareerFAQ from "~/components/degree/shared/CareerFAQ.vue";
import CareerAdmissionCTA from "~/components/degree/shared/CareerAdmissionCTA.vue";

// Data JSONs
import carrerasDB from "~/assets/data/carreras.json";
import comparisonsDB from "~/assets/data/comparisons.json";

const route = useRoute();

// El parámetro dinámico viene de la URL: /carreras/derecho -> derecho
const careerSlug = computed(() => {
  return (route.params.id as string) || "";
});

// Extraer data base de la carrera usando el slug
const careerData = computed(() => {
  return (carrerasDB as Record<string, any>)[careerSlug.value] || null;
});

// Extraer data comparativa si existe (también usa slugs)
const comparisonData = computed(() => {
  return (comparisonsDB as Record<string, any>)[careerSlug.value] || null;
});

// Obtener la ventaja del plan de estudios de la comparativa o el local del JSON
const planDescription = computed(() => {
  if (careerData.value?.syllabusDescription) return careerData.value.syllabusDescription;
  if (!comparisonData.value?.comparisonPoints) return "";
  const pt = comparisonData.value.comparisonPoints.find(
    (p: any) => p.feature.toLowerCase() === "plan de estudios"
  );
  return pt ? pt.uninter : "";
});

// Configurar metadatos para SEO automáticos
useHead(() => ({
  title: careerData.value ? `${careerData.value.name} | UNINTER` : "Licenciatura | UNINTER",
}));
</script>

<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  text-align: center;
}
.not-found-container h2 {
  font-family: var(--font-serif, Georgia, serif);
  color: #0f3c61;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}
.btn-return {
  background: #1565c0;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
}
</style>
