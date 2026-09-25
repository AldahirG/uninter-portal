<script setup lang="ts">
import {
  HeartHandshake,
  MonitorCheck,
  Compass,
  Laptop2,
  ClipboardCheck,
  Bot,
  Sparkles,
} from "lucide-vue-next";
import data from "@/assets/data/blendedLearning.json";

const competencias = data.roles.profesor.competencias;
</script>

<template>
  <section class="prof-section">
    <div class="uninter-container">
      <div class="section-heading">
        <div class="section-eyebrow">
          <span class="eyebrow-line"></span>
          EL DOCENTE EN LA ERA 4.0
        </div>
        <h2 class="section-title">
          El Profesor: <em>Facilitador del Conocimiento</em>
        </h2>
        <p class="section-subtitle">
          En el modelo Blended Learning 4.0, el claustro docente de UNINTER fortalece 6 competencias clave para guiar el aprendizaje dinámico, el pensamiento crítico y la integración ética de nuevas tecnologías.
        </p>
      </div>

      <div class="comp-grid">
        <div
          v-for="comp in competencias"
          :key="comp.id"
          class="comp-card"
          :class="{ 'comp-card--ia': comp.id === 'etica-ia' }"
          :style="{ '--accent-color': comp.color }"
        >
          <div class="comp-card__top">
            <div class="comp-icon" :style="{ backgroundColor: `${comp.color}15`, color: comp.color }">
              <Bot v-if="comp.id === 'etica-ia'" :size="24" />
              <HeartHandshake v-else-if="comp.id === 'engagement'" :size="24" />
              <MonitorCheck v-else-if="comp.id === 'alfabetizacion-digital-prof'" :size="24" />
              <Compass v-else-if="comp.id === 'metodologia-ensenanza'" :size="24" />
              <Laptop2 v-else-if="comp.id === 'hardware-software-prof'" :size="24" />
              <ClipboardCheck v-else :size="24" />
            </div>
            <span v-if="comp.id === 'etica-ia'" class="ia-badge">
              <Sparkles :size="13" />
              Nueva Competencia
            </span>
          </div>

          <h3 class="comp-title">{{ comp.nombre }}</h3>
          <p class="comp-desc">{{ comp.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.prof-section {
  padding: 5rem 0;
  background-color: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

.uninter-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section-heading {
  max-width: 820px;
  margin-bottom: 3.5rem;
}

.section-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #1a237e;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
}

.eyebrow-line {
  display: block;
  width: 24px;
  height: 2px;
  background: #1a237e;
}

.section-title {
  color: #0f172a;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 800;
  line-height: 1.18;
  letter-spacing: -0.02em;
  margin: 0 0 1rem;
}

.section-title em {
  color: #1a237e;
  font-style: normal;
}

.section-subtitle {
  color: #475569;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
}

.comp-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.comp-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
  position: relative;
}

.comp-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-color, #1a237e);
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.08);
}

.comp-card--ia {
  background: linear-gradient(145deg, #ffffff 0%, #f0fdfa 100%);
  border-color: #5eead4;
}

.comp-card__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.comp-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ia-badge {
  background: #ccfbf1;
  color: #0f766e;
  font-size: 0.72rem;
  font-weight: 800;
  padding: 0.3rem 0.65rem;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  letter-spacing: 0.02em;
}

.comp-title {
  color: #0f172a;
  font-size: 1.2rem;
  font-weight: 800;
  margin: 0 0 0.65rem;
  line-height: 1.3;
}

.comp-desc {
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.55;
  margin: 0;
}

@media (max-width: 1024px) {
  .comp-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .comp-grid {
    grid-template-columns: 1fr;
  }
}
</style>
