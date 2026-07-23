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
      <CareerHeroShowcase 
        :data="careerData" 
        programType="Diplomado"
        :duration="careerData.duracion"
      />
      
      <CareerOverview :data="careerData" />
      
      <!-- PLAN DE ESTUDIOS NATIVO PARA DIPLOMADOS (MÓDULOS) -->
      <section class="pg-syllabus-section" id="plan-estudios">
        <div class="uninter-container">
          <div class="syllabus-header animate-header">
            <span class="eyebrow">Estructura curricular</span>
            <h2 class="section-title">Plan de <em>Estudios</em></h2>
            <p class="section-desc">
              Explora los módulos diseñados para brindarte competencias prácticas y aplicadas de inmediato.
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

import CareerHeroShowcase from "~/components/degree/shared/CareerHeroShowcase.vue";
import CareerOverview from "~/components/degree/shared/CareerOverview.vue";
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

const semestersCount = computed(() => {
  if (!careerData.value || !careerData.value.plan) return 0;
  return Object.keys(careerData.value.plan).length;
});

// Set page head title dynamically
useHead(() => {
  const name = careerData.value ? careerData.value.name : "Diplomado";
  return {
    title: `${name} | Diplomados UNINTER`
  };
});
</script>

<style scoped>
/* Syllabus section from posgrados [id].vue */
.pg-syllabus-section {
  background: #f8fafc;
  padding: 5.5rem 0;
  --p: #6D4C41;
  --p-light: #efebe9;
  --pbg: #4e342e;
}
.uninter-container {
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
.syllabus-header {
  text-align: center;
  margin-bottom: 3.5rem;
}
.syllabus-header .eyrow, .syllabus-header .eyebrow {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--p);
  margin-bottom: 0.5rem;
  display: block;
}
.syllabus-header .section-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 3.5vw, 2.6rem);
  font-weight: 800;
  color: #2a1810;
  margin: 0 0 1rem;
}
.syllabus-header .section-title em {
  font-style: italic;
  color: var(--p);
}
.syllabus-header .section-desc {
  font-size: 1.05rem;
  color: #555;
  max-width: 650px;
  margin: 0 auto;
}

.syllabus-grid {
  display: grid;
  gap: 1.5rem;
}
.grid-cols-1 { grid-template-columns: 1fr; }
.grid-cols-2 { grid-template-columns: repeat(2, 1fr); }
.grid-cols-3 { grid-template-columns: repeat(3, 1fr); }

.semestre-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
  transition: transform 0.3s, box-shadow 0.3s;
}
.semestre-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(109, 76, 65, 0.08);
}
.semestre-header {
  background: var(--p);
  padding: 1.25rem 1.5rem;
  color: #ffffff;
}
.semestre-header h3 {
  margin: 0;
  font-size: 1.1rem;
  font-weight: 700;
}
.subjects-list {
  list-style: none;
  padding: 1.5rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
}
.subjects-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}
.subjects-list .bullet {
  color: var(--p);
  font-weight: 900;
  flex-shrink: 0;
}
.subjects-list .subject-name {
  font-size: 0.92rem;
  color: #334155;
  line-height: 1.4;
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
  color: #2a1810;
  margin-bottom: 1.5rem;
}
.btn-return {
  display: inline-block;
  background: var(--p);
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 700;
  transition: background 0.2s;
}
.btn-return:hover {
  background: var(--pd);
}

@media (max-width: 1024px) {
  .syllabus-grid { grid-template-columns: repeat(2, 1fr) !important; }
}
@media (max-width: 768px) {
  .syllabus-grid { grid-template-columns: 1fr !important; }
}
</style>
