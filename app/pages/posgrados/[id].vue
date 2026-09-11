<template>
  <div class="career-dynamic-page">
    <NavbarIndex />

    <!-- Cargando o Estado de Error -->
    <div v-if="!careerData" class="not-found-container">
      <h2>Posgrado no encontrado</h2>
      <NuxtLink :to="notFoundReturnLink" class="btn-return">{{ notFoundReturnText }}</NuxtLink>
    </div>

    <!-- Contenido del Posgrado -->
    <main v-else>
      <PosgradoHeroShowcase 
        :data="careerData" 
        :programType="programTypeName"
        :duration="durationText"
      />
      
      <PosgradoOverview :data="careerData" />
      
      <!-- PLAN DE ESTUDIOS NATIVO PARA POSGRADOS -->
      <section class="pg-syllabus-section" id="plan-estudios">
        <div class="uninter-container">
          <div class="syllabus-header animate-header">
            <span class="eyebrow">Orden probable</span>
            <h2 class="section-title">Plan de <em>Estudios</em></h2>
            <p class="section-desc">
              Explora las materias estructuradas para brindarte un perfil de especialización del más alto nivel académico.
            </p>
          </div>

          <div class="syllabus-grid" :class="'grid-cols-' + Math.min(semestersCount, 3)">
            <div 
              v-for="(materias, semestre) in careerData.plan" 
              :key="semestre"
              class="semestre-card"
            >
              <div class="semestre-header">
                <h3>{{ semestre }}</h3>
              </div>
              <ul class="subjects-list">
                <li v-for="(materia, idx) in materias" :key="idx">
                  <span class="bullet">•</span>
                  <span class="subject-name">{{ materia }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <PosgradoAreas :data="careerData" />
      
      <PosgradoProfiles :data="careerData" />

      <PosgradoCertifications 
        v-if="careerData.certificaciones && careerData.certificaciones.length" 
        :certificaciones="careerData.certificaciones" 
      />
      
      <PosgradoResearch
        v-if="careerData.experienciaPractica && careerData.experienciaPractica.length"
        :labs="careerData.experienciaPractica"
        projectsBlogUrl="https://blogs.uninter.edu.mx/ESCAT/index.php/category/proyectos/"
      />

      <PosgradoFAQ v-if="careerData.faq && careerData.faq.length" :faq="careerData.faq" />

      <PosgradoAdmissionCTA />
    </main>

    <FloatingActions />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import NavbarIndex from "~/components/navbar/Index.vue";
import FloatingActions from "~/components/portal/FloatingActions.vue";

import PosgradoHeroShowcase from "~/components/degree/posgrados/PosgradoHeroShowcase.vue";
import PosgradoOverview from "~/components/degree/posgrados/PosgradoOverview.vue";
import PosgradoAreas from "~/components/degree/posgrados/PosgradoAreas.vue";
import PosgradoProfiles from "~/components/degree/posgrados/PosgradoProfiles.vue";
import PosgradoCertifications from "~/components/degree/posgrados/PosgradoCertifications.vue";
import PosgradoResearch from "~/components/degree/posgrados/PosgradoResearch.vue";
import PosgradoAdmissionCTA from "~/components/degree/posgrados/PosgradoAdmissionCTA.vue";
import PosgradoFAQ from "~/components/degree/posgrados/PosgradoFAQ.vue";

// Data JSON
import posgradosDB from "~/assets/data/posgrados.json";

const route = useRoute();

// Parameter matches slug: esp-criminalistica, maes-admin-direc, etc.
const careerSlug = computed(() => {
  return (route.params.id as string) || "";
});

// Extract data base from the JSON
const careerData = computed(() => {
  return (posgradosDB as Record<string, any>)[careerSlug.value] || null;
});

// Compute program type label (Especialidad, Maestría, Doctorado)
const programTypeName = computed(() => {
  if (!careerData.value) return "Posgrado";
  const type = careerData.value.type;
  if (type === "especialidad") return "Especialidad";
  if (type === "maestria") return "Maestría";
  if (type === "doctorado") return "Doctorado";
  return "Posgrado";
});

// Count semesters
const semestersCount = computed(() => {
  if (!careerData.value?.plan) return 0;
  return Object.keys(careerData.value.plan).length;
});

// Compute duration text
const durationText = computed(() => {
  const count = semestersCount.value;
  if (count === 1) return "1 Semestre";
  return `${count} Semestres`;
});

const notFoundReturnLink = computed(() => {
  if (careerSlug.value.startsWith("doc-")) return "/posgrados/doctorados";
  if (careerSlug.value.startsWith("maes-")) return "/posgrados/maestrias";
  return "/posgrados/especialidades";
});

const notFoundReturnText = computed(() => {
  if (careerSlug.value.startsWith("doc-")) return "Ver Doctorados";
  if (careerSlug.value.startsWith("maes-")) return "Ver Maestrías";
  return "Ver Especialidades";
});

// Configure dynamic page SEO metadata
useHead(() => ({
  title: careerData.value ? `${careerData.value.name} | UNINTER` : "Posgrados | UNINTER",
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
  background: #8f9a3e;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.2s;
}
.btn-return:hover {
  background: #37474F;
}

/* Plan de estudios (Syllabus) styles */
.pg-syllabus-section {
  padding: 6rem 0;
  background: #f8fafc;
  scroll-margin-top: 80px;
}

.uninter-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.syllabus-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem auto;
}

.syllabus-header .eyebrow {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #8f9a3e;
  margin-bottom: 0.75rem;
  display: block;
}

.syllabus-header .section-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2.2rem, 5vw, 3rem);
  font-weight: 800;
  line-height: 1.15;
  color: #0f3c61;
  margin: 0 0 1.25rem 0;
}

.syllabus-header .section-title em {
  font-style: italic;
  color: #8f9a3e;
}

.syllabus-header .section-desc {
  font-size: 1.05rem;
  line-height: 1.6;
  color: #64748b;
  margin: 0;
}

/* Grids based on semesters count */
.syllabus-grid {
  display: grid;
  gap: 2rem;
  align-items: start;
}

.grid-cols-1 {
  grid-template-columns: 1fr;
  max-width: 600px;
  margin: 0 auto;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
  max-width: 1000px;
  margin: 0 auto;
}

.grid-cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

.semestre-card {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
  padding: 2.5rem;
  transition: all 0.3s ease;
}

.semestre-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(143, 154, 62, 0.08);
  border-color: rgba(143, 154, 62, 0.15);
}

.semestre-header {
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 1.25rem;
  margin-bottom: 1.5rem;
}

.semestre-header h3 {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.35rem;
  font-weight: 700;
  color: #0f3c61;
  margin: 0;
}

.subjects-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.subjects-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.98rem;
  line-height: 1.4;
  color: #475569;
  font-weight: 500;
}

.subjects-list .bullet {
  color: #8f9a3e;
  font-size: 1.2rem;
  line-height: 0.8;
}

.subjects-list .subject-name {
  flex: 1;
}

@media (max-width: 968px) {
  .grid-cols-3, .grid-cols-2 {
    grid-template-columns: 1fr;
    max-width: 600px;
    margin: 0 auto;
  }
}
</style>
