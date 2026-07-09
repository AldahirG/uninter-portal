<script setup lang="ts">
import { computed } from "vue";
import { CheckCircle2, ShieldAlert, Award } from "lucide-vue-next";

// Interfaz de los datos que recibirá el componente
export interface Competitor {
  university: string;
  programName: string;
}

export interface ComparisonPoint {
  feature: string;
  uninter: string;
  competitors: string[]; // Texto de desventaja o característica genérica
}

export interface ComparisonData {
  careerName: string;
  competitors: Competitor[];
  comparisonPoints: ComparisonPoint[];
}

const props = defineProps<{
  data: ComparisonData;
}>();
</script>

<template>
  <section class="career-comparison-section">
    <div class="uninter-container">
      <div class="comparison-header animate-header">
        <span class="eyebrow">Ventaja Competitiva</span>
        <h2 class="section-title">
          ¿Por qué estudiar
          <em class="title-accent">{{ data.careerName }}</em> en UNINTER?
        </h2>
        <p class="section-desc">
          Descubre los factores clave que hacen de nuestro programa educativo la mejor elección para tu futuro profesional.
        </p>
      </div>

      <!-- Grid de Ventajas Únicas (Diseño Bento/Cards) -->
      <div class="advantages-grid">
        <div 
          v-for="(point, pIndex) in data.comparisonPoints" 
          :key="'point-' + pIndex"
          class="advantage-card interactive-lift"
        >
          <!-- Encabezado de la Tarjeta (Factor de decisión) -->
          <div class="card-header">
            <div class="feature-badge">
              <Award :size="14" class="badge-icon" />
              <span>{{ point.feature }}</span>
            </div>
          </div>

          <!-- Cuerpo de la Tarjeta -->
          <div class="card-body">
            <!-- Bloque de Ventaja UNINTER -->
            <div class="uninter-advantage-block">
              <div class="check-icon-wrap">
                <CheckCircle2 :size="20" class="check-icon" />
              </div>
              <div class="advantage-text">
                <h4>La Ventaja UNINTER</h4>
                <p>{{ point.uninter }}</p>
              </div>
            </div>

            <!-- Bloque de Contraste Genérico (Otras alternativas) -->
            <div 
              v-if="point.competitors && point.competitors.length" 
              class="contrast-block"
            >
              <div class="contrast-header">
                <ShieldAlert :size="15" class="alert-icon" />
                <span>Otras alternativas en el mercado:</span>
              </div>
              <ul class="contrast-list">
                <li 
                  v-for="(compText, cIndex) in point.competitors" 
                  :key="cIndex"
                >
                  {{ compText }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.career-comparison-section {
  background-color: #f8fafc;
  padding: 6.5rem 0;
  font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
}

.uninter-container {
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.comparison-header {
  text-align: center;
  max-width: 750px;
  margin: 0 auto 4.5rem auto;
}

.eyebrow {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #1565c0;
  margin-bottom: 0.75rem;
  background: rgba(21, 101, 192, 0.08);
  padding: 0.4rem 1rem;
  border-radius: 99px;
}

.section-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 700;
  line-height: 1.15;
  color: #0f3c61;
  letter-spacing: -0.02em;
  margin: 0.5rem 0 1rem 0;
}

.title-accent {
  color: #d84315;
  font-style: italic;
}

.section-desc {
  font-size: 1.05rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

/* GRID DE VENTAJAS */
.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
}

/* TARJETA INDIVIDUAL */
.advantage-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 2.2rem;
  box-shadow: 0 4px 20px rgba(15, 60, 97, 0.02);
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.advantage-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 35px -5px rgba(15, 60, 97, 0.08);
  border-color: #cbd5e1;
}

.card-header {
  margin-bottom: 1.5rem;
}

.feature-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #f1f5f9;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #334155;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.badge-icon {
  color: #1565c0;
}

/* CUERPO Y BLOQUES */
.card-body {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100%;
}

.uninter-advantage-block {
  display: flex;
  gap: 12px;
}

.check-icon-wrap {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.advantage-text h4 {
  font-size: 0.95rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 0.25rem 0;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.advantage-text p {
  font-size: 0.95rem;
  color: #334155;
  line-height: 1.6;
  margin: 0;
}

/* BLOQUE DE CONTRASTE */
.contrast-block {
  background: #f8fafc;
  border: 1px dashed #cbd5e1;
  border-radius: 12px;
  padding: 1.25rem;
  margin-top: auto; /* Empuja el contraste al final del cuerpo de la tarjeta */
}

.contrast-header {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.alert-icon {
  color: #94a3b8;
}

.contrast-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contrast-list li {
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.4;
  position: relative;
  padding-left: 12px;
}

.contrast-list li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #94a3b8;
  font-weight: bold;
}

@media (max-width: 640px) {
  .advantage-card {
    padding: 1.5rem;
  }
}
</style>
