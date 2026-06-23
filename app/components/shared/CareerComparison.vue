<script setup lang="ts">
import { computed } from "vue";
import { CheckCircle2, XCircle, ShieldAlert, Award } from "lucide-vue-next";

// Interfaz de los datos que recibirá el componente
export interface Competitor {
  university: string;
  programName: string;
}

export interface ComparisonPoint {
  feature: string;
  uninter: string;
  competitors: string[]; // Texto de desventaja o característica para cada competidor
}

export interface ComparisonData {
  careerName: string;
  competitors: Competitor[];
  comparisonPoints: ComparisonPoint[];
}

const props = defineProps<{
  data: ComparisonData;
}>();

// Helpers visuales
const getCompetitorClass = (index: number) => {
  return `competitor-col-${index + 1}`;
};
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
          Compara nuestro programa educativo frente a otras opciones y descubre
          el verdadero valor de nuestra excelencia académica.
        </p>
      </div>

      <!-- Contenedor Principal de la Tabla -->
      <div class="comparison-table-wrapper">
        <div class="comparison-table">
          <!-- CABECERAS (ENCABEZADOS DE COLUMNAS) -->
          <div class="table-row table-head">
            <div class="table-cell feature-cell">
              <span>Factor de Decisión</span>
            </div>

            <!-- Columna Estrella: UNINTER -->
            <div class="table-cell uninter-cell uninter-head">
              <div class="brand-badge">La Mejor Opción</div>

              <h3>UNINTER</h3>
              <span class="program-name">{{ data.careerName }}</span>
            </div>

            <!-- Columnas Competidores -->
            <div
              v-for="(comp, i) in data.competitors"
              :key="'head-comp-' + i"
              class="table-cell competitor-cell competitor-head"
              :class="getCompetitorClass(i)"
            >
              <h3>{{ comp.university }}</h3>
              <span class="program-name">{{ comp.programName }}</span>
            </div>
          </div>

          <!-- CUERPO DE LA TABLA (FILAS DE COMPARACIÓN) -->
          <div
            v-for="(point, pIndex) in data.comparisonPoints"
            :key="'point-' + pIndex"
            class="table-row body-row"
          >
            <!-- Título de la Característica -->
            <div class="table-cell feature-cell">
              <strong>{{ point.feature }}</strong>
            </div>

            <!-- Beneficio UNINTER -->
            <div class="table-cell uninter-cell uninter-body">
              <span>{{ point.uninter }}</span>
            </div>

            <!-- Deficiencias Competidores -->
            <div
              v-for="(compText, cIndex) in point.competitors"
              :key="'body-comp-' + pIndex + '-' + cIndex"
              class="table-cell competitor-cell competitor-body"
              :class="getCompetitorClass(cIndex)"
            >
              <span>{{ compText }}</span>
            </div>
          </div>

          <!-- FILA FINAL (CALL TO ACTION) -->
          <div class="table-row footer-row">
            <div class="table-cell feature-cell"></div>
            <div class="table-cell uninter-cell uninter-footer">
              <a href="#beca" class="btn-enroll">
                <Award :size="18" /> Quiero esta ventaja
              </a>
            </div>
            <div
              v-for="(comp, cIndex) in data.competitors"
              :key="'foot-comp-' + cIndex"
              class="table-cell competitor-cell competitor-footer"
            >
              <span class="faded-text">Opción limitada</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* =========================================================
   CONTENEDOR BASE Y TEXTOS
========================================================= */
.career-comparison-section {
  background-color: #ffffff;
  padding: 6rem 0;
  font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
}

.uninter-container {
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.comparison-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem auto;
}

.eyebrow {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #1565c0;
  margin-bottom: 0.75rem;
  background: #e0f2fe;
  padding: 0.35rem 0.9rem;
  border-radius: 20px;
}

.section-title {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: clamp(2rem, 3.5vw, 3rem);
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 1rem 0;
  line-height: 1.15;
}

.title-accent {
  color: #d84315;
  font-style: italic;
}

.section-desc {
  font-size: 1.1rem;
  color: #64748b;
  line-height: 1.6;
}

/* =========================================================
   ESTRUCTURA DE LA TABLA (FLEXBOX)
========================================================= */
.comparison-table-wrapper {
  width: 100%;
  overflow-x: auto;
  padding-bottom: 2rem;
}

.comparison-table {
  display: flex;
  flex-direction: column;
  min-width: 900px;
  background: #f8fafc;
  border-radius: 24px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
}

/* FILAS DE LA TABLA (Flexbox para forzar horizontalidad) */
.table-row {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
}

.body-row {
  border-bottom: 1px solid #e2e8f0;
  transition: background-color 0.3s ease;
}
.body-row:hover {
  background-color: #ffffff;
}
.body-row:last-child {
  border-bottom: none;
}

/* CELDAS Y PROPORCIONES */
.table-cell {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* 1. Celda de Características (Izquierda) */
.feature-cell {
  flex: 1.2;
  background: transparent;
  color: #0f3c61;
  font-size: 1.05rem;
  border-right: 1px solid #e2e8f0;
}

/* 2. Columna UNINTER (Estrella) */
.uninter-cell {
  flex: 1.6;
  background: linear-gradient(to bottom, #eff6ff, #ffffff);
  border-left: 2px solid #3b82f6;
  border-right: 2px solid #3b82f6;
  position: relative;
  box-shadow: 0 10px 30px -10px rgba(59, 130, 246, 0.15);
  z-index: 2;
}

/* Headings UNINTER */
.uninter-head {
  background: linear-gradient(135deg, #0f3c61, #1565c0);
  color: #fff;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  text-align: center;
  padding: 2.5rem 1.5rem;
  border: none;
  transform: translateY(-10px);
  box-shadow: 0 15px 30px -5px rgba(15, 60, 97, 0.3);
}

.brand-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: #d84315;
  color: #fff;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.3rem 1rem;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(216, 67, 21, 0.4);
  white-space: nowrap;
}

.uninter-head h3 {
  font-size: 1.8rem;
  font-weight: 900;
  margin: 0 0 0.2rem 0;
  letter-spacing: -0.02em;
}
.uninter-head .program-name {
  font-size: 0.95rem;
  color: #93c5fd;
  font-weight: 600;
}

/* Cuerpo UNINTER */
.uninter-body {
  flex-direction: row;
  align-items: flex-start;
  gap: 12px;
  font-size: 1rem;
  font-weight: 700;
  color: #0f3c61;
}

.icon-positive {
  color: #10b981;
  flex-shrink: 0;
  margin-top: 2px;
}

/* Footer UNINTER */
.uninter-footer {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom: 2px solid #3b82f6;
  text-align: center;
  align-items: center;
}

.btn-enroll {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #d84315;
  color: #fff;
  padding: 0.8rem 1.5rem;
  border-radius: 99px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(216, 67, 21, 0.3);
}
.btn-enroll:hover {
  background: #bf360c;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(216, 67, 21, 0.4);
}

/* 3. Columnas Competidores */
.competitor-cell {
  flex: 1;
  background: transparent;
  color: #64748b;
  text-align: center;
  border-right: 1px solid #e2e8f0;
}
.competitor-cell:last-child {
  border-right: none;
}

.competitor-head {
  padding: 2.5rem 1rem 1rem 1rem;
}
.competitor-head h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #475569;
  margin: 0 0 0.3rem 0;
}
.competitor-head .program-name {
  font-size: 0.85rem;
  color: #94a3b8;
}

.competitor-body {
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  text-align: left;
  gap: 8px;
  font-size: 0.9rem;
}

.icon-warning {
  color: #94a3b8;
  flex-shrink: 0;
  margin-top: 2px;
}

.footer-row {
  background: #f1f5f9;
}
.faded-text {
  font-size: 0.8rem;
  color: #cbd5e1;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
</style>
