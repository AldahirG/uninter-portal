<script setup lang="ts">
import Navbare from "@/components/navbar/Index.vue";
import HeroBanner from "@/components/conocenos/blendedflex/HeroBanner.vue";
import DiagramaPanal from "@/components/conocenos/blendedflex/DiagramaPanal.vue";
import CompetenciasProfesor from "@/components/conocenos/blendedflex/CompetenciasProfesor.vue";
import HerramientasDigitales from "@/components/conocenos/blendedflex/HerramientasDigitales.vue";
import ManifiestoIA from "@/components/conocenos/blendedflex/ManifiestoIA.vue";
import FaqSection from "@/components/conocenos/blendedflex/FaqSection.vue";
import PortalFooter from "@/components/portal/Footer.vue";
import FloatingActions from "@/components/portal/FloatingActions.vue";

useHead({
  title: "Modelo Pedagógico Blended Learning 4.0 | UNINTER",
  meta: [
    {
      name: "description",
      content:
        "Conoce el Modelo Pedagógico Blended Learning 4.0 de UNINTER: educación híbrida centrada en el alumno, facilitadores docentes de excelencia, uso ético de la IA y herramientas digitales UninterVirtual.",
    },
    {
      property: "og:title",
      content: "Modelo Pedagógico Blended Learning 4.0 | UNINTER",
    },
    {
      property: "og:description",
      content:
        "Educación integral y flexible que combina clases presenciales en campus con la potencia de los entornos virtuales y el uso ético de la Inteligencia Artificial.",
    },
  ],
});
</script>

<template>
  <div class="blendedflex-page">
    <Navbare />
    <main>
      <!-- 1. Banner Principal con Estadísticas -->
      <HeroBanner />

      <!-- 2. Diagrama de Panal Interactivo (Profesor - Blended - Alumno - IA) -->
      <DiagramaPanal />

      <!-- 3. Las 6 Competencias del Profesor Facilitador -->
      <CompetenciasProfesor />

      <!-- 4. Ecosistema de Herramientas del Estudiante (Sin Office 365 / OneDrive) -->
      <HerramientasDigitales />

      <!-- 5. Manifiesto Institucional: Uso Ético y Responsable de la IA -->
      <ManifiestoIA />

      <!-- 6. Preguntas Frecuentes y Recorrido de Campus -->
      <FaqSection />
    </main>
    <PortalFooter />
    <FloatingActions />
  </div>
</template>

<style scoped>
.blendedflex-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
}

main {
  flex: 1;
}
</style>
