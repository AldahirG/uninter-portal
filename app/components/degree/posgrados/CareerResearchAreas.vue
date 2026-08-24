<script setup lang="ts">
import { computed } from "vue";
import { BookOpen, Search, Target, Award } from "lucide-vue-next";

const props = defineProps<{
  data: any;
}>();

// Áreas de Conocimiento
const hasAreasConocimiento = computed(() => {
  return props.data?.hasOwnProperty('areas_conocimiento');
});
const areasConocimientoText = computed(() => {
  if (props.data?.areas_conocimiento && props.data.areas_conocimiento.trim() !== '') {
    return props.data.areas_conocimiento;
  }
  return "[Pendiente: Añadir información de 'areas_conocimiento' en el JSON]";
});

// Líneas de Investigación
const hasLineasInvestigacion = computed(() => {
  return props.data?.lineas_investigacion && props.data.lineas_investigacion.length > 0;
});
const lineasInvestigacion = computed(() => props.data?.lineas_investigacion || []);

// Áreas de Enfoque
const hasAreasEnfoque = computed(() => {
  return props.data?.areas_enfoque && props.data.areas_enfoque.length > 0;
});
const areasEnfoque = computed(() => props.data?.areas_enfoque || []);

// Áreas de Especialización
const hasAreasEspecializacion = computed(() => {
  return props.data?.areas_especializacion && props.data.areas_especializacion.length > 0;
});
const areasEspecializacion = computed(() => props.data?.areas_especializacion || []);

// ¿Mostrar la sección completa?
const showSection = computed(() => {
  return hasAreasConocimiento.value || hasLineasInvestigacion.value || hasAreasEnfoque.value || hasAreasEspecializacion.value;
});

// Contar las tarjetas activas para ajustar el grid
const activeCardsCount = computed(() => {
  let count = 0;
  if (hasAreasConocimiento.value) count++;
  if (hasLineasInvestigacion.value) count++;
  if (hasAreasEnfoque.value) count++;
  if (hasAreasEspecializacion.value) count++;
  return count;
});
</script>

<template>
  <section v-if="showSection" class="pg-research-areas-section">
    <div class="uninter-container">
      <div class="section-header">
        <h2 class="section-title">Áreas de Especialización e <em class="title-accent">Investigación</em></h2>
      </div>

      <div class="cards-grid" :class="`cards-${activeCardsCount}`">
        
        <!-- Áreas de Conocimiento -->
        <div v-if="hasAreasConocimiento" class="research-card">
          <div class="card-icon-wrapper">
            <BookOpen class="card-icon" />
          </div>
          <h3 class="card-title">Áreas de Conocimiento</h3>
          <p class="card-text">
            {{ areasConocimientoText }}
          </p>
        </div>

        <!-- Líneas de Investigación -->
        <div v-if="hasLineasInvestigacion" class="research-card">
          <div class="card-icon-wrapper">
            <Search class="card-icon" />
          </div>
          <h3 class="card-title">Líneas de Investigación</h3>
          <ul class="card-list">
            <li v-for="(item, idx) in lineasInvestigacion" :key="idx">
              <span class="bullet">•</span>
              <span class="list-text">{{ item }}</span>
            </li>
          </ul>
        </div>

        <!-- Áreas de Enfoque -->
        <div v-if="hasAreasEnfoque" class="research-card">
          <div class="card-icon-wrapper">
            <Target class="card-icon" />
          </div>
          <h3 class="card-title">Áreas de Enfoque</h3>
          <ul class="card-list">
            <li v-for="(item, idx) in areasEnfoque" :key="idx">
              <span class="bullet">•</span>
              <span class="list-text">{{ item }}</span>
            </li>
          </ul>
        </div>

        <!-- Áreas de Especialización -->
        <div v-if="hasAreasEspecializacion" class="research-card">
          <div class="card-icon-wrapper">
            <Award class="card-icon" />
          </div>
          <h3 class="card-title">Áreas de Especialización</h3>
          <ul class="card-list">
            <li v-for="(item, idx) in areasEspecializacion" :key="idx">
              <span class="bullet">•</span>
              <span class="list-text">{{ item }}</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.pg-research-areas-section {
  background-color: #ffffff;
  padding: 5rem 0;
  font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
}

.uninter-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-title {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: clamp(2rem, 4vw, 2.8rem);
  color: #0f3c61;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;
}

.section-title .title-accent {
  color: var(--p, #8F9A3E);
  font-style: normal;
}

.cards-grid {
  display: grid;
  gap: 2rem;
}

.cards-1 { grid-template-columns: 1fr; max-width: 800px; margin: 0 auto; }
.cards-2 { grid-template-columns: repeat(2, 1fr); max-width: 1000px; margin: 0 auto; }
.cards-3 { grid-template-columns: repeat(3, 1fr); }
.cards-4 { grid-template-columns: repeat(2, 1fr); max-width: 1000px; margin: 0 auto; }

.research-card {
  background-color: #f8fafc;
  border-radius: 16px;
  padding: 2.5rem 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  border-top: 4px solid var(--p, #8F9A3E);
}

.research-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(15, 60, 97, 0.06);
}

.card-icon-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background-color: rgba(15, 60, 97, 0.05);
  margin-bottom: 1.5rem;
}

.card-icon {
  width: 24px;
  height: 24px;
  color: var(--p, #8F9A3E);
}

.card-title {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: 1.4rem;
  color: #0f3c61;
  font-weight: 800;
  margin: 0 0 1.25rem 0;
  line-height: 1.3;
}

.card-text {
  font-size: 1.05rem;
  color: #475569;
  line-height: 1.6;
  margin: 0;
}

.card-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.card-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.bullet {
  color: var(--p, #8F9A3E);
  font-weight: 900;
  flex-shrink: 0;
  font-size: 1.2rem;
  line-height: 1.2;
}

.list-text {
  font-size: 1rem;
  color: #475569;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .cards-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .research-card {
    padding: 2rem 1.5rem;
  }
}
</style>
