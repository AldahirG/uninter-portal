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
        :modality="programModality"
      />
      
      <CareerOverview :data="careerData" />
      
      <!-- PLAN DE ESTUDIOS NATIVO PARA DIPLOMADOS (MÓDULOS) -->
      <!-- Accordion Syllabus Section -->
    <section id="plan-estudios" class="pg-syllabus-section">
      <div class="uninter-container">
        <div class="syllabus-header">
          <span class="eyebrow">Plan de Estudios</span>
          <h2 class="section-title">Contenido <em>Temático</em></h2>
          <p class="section-desc">Estructura del programa diseñada para brindarte los conocimientos prácticos y teóricos necesarios.</p>
        </div>

        <div class="syllabus-layout">
          <!-- Accordion List -->
          <div class="syllabus-list">
            <details class="syllabus-module" v-for="(subjects, semester) in careerData.plan" :key="semester" open>
              <summary class="module-header">
                <span class="module-title">{{ semester }}</span>
                <span class="module-icon"></span>
              </summary>
              <div class="module-content">
                <ul class="subject-list">
                  <li v-for="(subject, idx) in subjects" :key="idx">
                    <span class="subject-bullet"></span>
                    {{ subject }}
                  </li>
                </ul>
              </div>
            </details>
          </div>

          <!-- Duration Card -->
          <div class="syllabus-sidebar">
            <div class="duration-card">
              <div class="duration-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>Duración del Programa</h3>
              <p class="duration-value">{{ semestersCount }} Módulos</p>
              <p class="duration-desc">El diplomado está estructurado para completarse a tu propio ritmo dentro del tiempo establecido.</p>
            </div>
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

const programModality = computed(() => {
  if (!careerSlug.value) return 'Híbrido';
  if (careerSlug.value.includes('-en-linea')) {
    return 'Híbrido y en Línea';
  }
  return 'Híbrido';
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

/* Syllabus Layout (Accordion + Sidebar) */
.syllabus-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: start;
}
@media (min-width: 992px) {
  .syllabus-layout {
    grid-template-columns: 1fr 320px;
    gap: 3rem;
  }
}

/* Accordion List */
.syllabus-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.syllabus-module {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
}
.syllabus-module[open] {
  border-color: #cbd5e1;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.05);
}
.module-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  background: #ffffff;
  cursor: pointer;
  user-select: none;
  font-weight: 700;
  color: #1e293b;
  font-size: 1.1rem;
  transition: background 0.2s;
  list-style: none; /* Hide default arrow */
}
.module-header::-webkit-details-marker {
  display: none;
}
.module-header:hover {
  background: #f8fafc;
}
.syllabus-module[open] .module-header {
  border-bottom: 1px solid #e2e8f0;
  background: #f8fafc;
  color: var(--p);
}
.module-icon {
  width: 20px;
  height: 20px;
  position: relative;
}
.module-icon::before, .module-icon::after {
  content: '';
  position: absolute;
  background: currentColor;
  border-radius: 2px;
  transition: transform 0.3s ease;
}
.module-icon::before {
  top: 9px;
  left: 2px;
  width: 16px;
  height: 2px;
}
.module-icon::after {
  top: 2px;
  left: 9px;
  width: 2px;
  height: 16px;
}
.syllabus-module[open] .module-icon::after {
  transform: rotate(90deg);
  opacity: 0;
}

.module-content {
  padding: 1.5rem;
  background: #ffffff;
}
.subject-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.subject-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.4;
}
.subject-bullet {
  flex-shrink: 0;
  width: 6px;
  height: 6px;
  background: #f59e0b;
  border-radius: 50%;
  margin-top: 0.45rem;
}

/* Sidebar Duration Card */
.duration-card {
  background: var(--p);
  color: #ffffff;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(109, 76, 65, 0.2);
  position: sticky;
  top: 6rem;
}
.duration-icon {
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
}
.duration-card h3 {
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  opacity: 0.9;
  margin: 0 0 0.5rem;
}
.duration-value {
  font-size: 2rem;
  font-weight: 800;
  color: #fde68a;
  margin: 0 0 1rem;
  font-family: var(--font-serif, Georgia, serif);
}
.duration-desc {
  font-size: 0.9rem;
  opacity: 0.8;
  line-height: 1.5;
  margin: 0;
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
