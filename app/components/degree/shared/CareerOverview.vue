<script setup lang="ts">
import { defineProps } from "vue";
import { UserCheck, Briefcase, Target } from "lucide-vue-next";

// Props dinámicos
const props = defineProps<{
  data: {
    name: string;
    description: string;
    ingreso: string;
    egreso: string;
  }
}>();
</script>

<template>
  <section class="career-overview-section" id="perfil-ingreso">
    <div class="uninter-container">
      <div class="overview-header animate-header">
        <span class="eyebrow">Panorama de la Carrera</span>
        <h2 class="section-title">¿Estás listo para el <em>reto?</em></h2>
      </div>

      <div class="bento-grid">
        <!-- Tarjeta de Objetivo (Glass Ligero con Borde en Movimiento simulado) -->
        <div class="bento-card card-objective clean-glow-card stagger-1">
          <div class="card-glow-bg-light"></div>
          <div class="card-content">
            <div class="card-icon-wrap primary-icon-light">
              <Target :size="28" stroke-width="2" />
            </div>
            <h3>El Estudiante UNINTER</h3>
            <p>
              {{ data?.description }}
            </p>
          </div>
        </div>

        <!-- Tarjeta de Perfil de Ingreso -->
        <div class="bento-card card-profile accent-border stagger-2">
          <div class="card-header-inline">
            <div class="card-icon-wrap subtle-blue">
              <UserCheck :size="24" stroke-width="2" />
            </div>
            <h3>Perfil de Ingreso</h3>
          </div>
          <div class="text-block">
            <p>{{ data?.ingreso }}</p>
          </div>
        </div>

        <!-- Tarjeta de Mercado Laboral -->
        <div class="bento-card card-labor accent-border stagger-3">
          <div class="card-header-inline">
            <div class="card-icon-wrap subtle-blue">
              <Briefcase :size="24" stroke-width="2" />
            </div>
            <h3>Mercado Laboral</h3>
          </div>
          <div class="text-block">
            <p class="card-subtitle">Al egresar, tendrás las puertas abiertas como líder en:</p>
            <p>{{ data?.egreso }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* =========================================================
   CONTENEDOR BASE
========================================================= */
.career-overview-section {
  background-color: #f8fafc;
  padding: 7rem 0;
  font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
  overflow: hidden;
}

.uninter-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* =========================================================
   ANIMACIONES DE ENTRADA
========================================================= */
@keyframes fadeUpIn {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-header {
  animation: fadeUpIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.stagger-1 {
  animation: fadeUpIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
  opacity: 0;
}
.stagger-2 {
  animation: fadeUpIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
  opacity: 0;
}
.stagger-3 {
  animation: fadeUpIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards;
  opacity: 0;
}

/* =========================================================
   ENCABEZADO
========================================================= */
.overview-header {
  margin-bottom: 4rem;
  text-align: center;
}

.eyebrow {
  display: inline-block;
  font-size: 0.8rem;
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
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 800;
  color: #0f3c61;
  margin: 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.section-title em {
  color: #d84315;
  font-style: italic;
}

/* =========================================================
   BENTO GRID ASIMÉTRICO
========================================================= */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  align-items: stretch;
}

.bento-card {
  background: #ffffff;
  border-radius: 24px;
  padding: 3rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 30px -10px rgba(15, 60, 97, 0.05);
  position: relative;
  transition:
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.4s ease;
}

.card-objective {
  grid-column: span 5;
}
.card-profile {
  grid-column: span 7;
}
.card-labor {
  grid-column: span 12;
}

/* =========================================================
   TARJETA OBJETIVO CLARA (CLEAN GLOW EFFECTS)
========================================================= */
.clean-glow-card {
  background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
  color: #0f3c61;
  border: 1px solid rgba(21, 101, 192, 0.15);
  overflow: hidden;
}

.clean-glow-card h3 {
  color: #0f3c61 !important;
}

.clean-glow-card p {
  color: #475569 !important;
}

.card-glow-bg-light {
  position: absolute;
  top: -50px;
  right: -50px;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(21, 101, 192, 0.1) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
  transition: transform 0.6s ease;
}

.clean-glow-card:hover .card-glow-bg-light {
  transform: scale(1.3) translate(-10%, 10%);
}

.clean-glow-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 30px 60px -15px rgba(21, 101, 192, 0.15);
  border-color: rgba(21, 101, 192, 0.3);
}

.clean-glow-card .card-content {
  position: relative;
  z-index: 2;
}

.primary-icon-light {
  background: linear-gradient(135deg, #1565c0, #3b82f6) !important;
  color: #ffffff !important;
  box-shadow: 0 8px 20px rgba(21, 101, 192, 0.2);
}

.clean-glow-card:hover .primary-icon-light {
  transform: scale(1.1) rotate(5deg);
}

/* =========================================================
   TARJETAS ACCENT BORDER CON HOVER DINÁMICO
========================================================= */
.accent-border {
  overflow: hidden;
}

.accent-border::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 0%;
  height: 4px;
  background-color: #d84315;
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  transform: translateX(-50%);
}

.accent-border:hover {
  transform: translateY(-6px);
  box-shadow: 0 25px 50px -12px rgba(15, 60, 97, 0.12);
  border-color: #cbd5e1;
}

.accent-border:hover::before {
  width: 100%;
}

/* =========================================================
   ESTILOS INTERNOS DE LAS TARJETAS
========================================================= */
.card-icon-wrap {
  width: 56px;
  height: 56px;
  background-color: #0f3c61;
  color: #ffffff;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.card-icon-wrap.subtle-blue {
  background-color: #f0f6fc;
  color: #1565c0;
}

.accent-border:hover .card-icon-wrap.subtle-blue {
  background-color: #1565c0;
  color: #ffffff;
  transform: scale(1.08) rotate(-5deg);
}

.card-header-inline {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 2.25rem;
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 1.5rem;
}

.card-header-inline .card-icon-wrap {
  margin-bottom: 0;
  width: 50px;
  height: 50px;
  border-radius: 12px;
}

.bento-card h3 {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: 1.8rem;
  font-weight: 700;
  color: #0f3c61;
  margin: 0;
  line-height: 1.2;
}

.bento-card p {
  font-size: 1.05rem;
  color: #475569;
  line-height: 1.7;
  margin: 0;
}

.card-subtitle {
  font-weight: 600;
  color: #334155 !important;
  margin-bottom: 1.5rem !important;
}

/* =========================================================
   LISTAS INTERACTIVAS (CHIPS GLASSMOPHISM)
========================================================= */
.custom-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.list-item {
  background: rgba(15, 60, 97, 0.02);
  border: 1px solid rgba(15, 60, 97, 0.05);
  border-radius: 14px;
  padding: 1.1rem 1.4rem;
  display: flex;
  align-items: flex-start;
  gap: 14px;
  font-size: 0.98rem;
  color: #334155;
  line-height: 1.5;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.list-item:hover {
  background: #ffffff;
  border-color: rgba(216, 67, 21, 0.3);
  transform: translateY(-2px) translateX(4px);
  box-shadow: 0 10px 20px -10px rgba(216, 67, 21, 0.15);
  color: #0f3c61;
}

.grid-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

.check-icon {
  color: #1565c0;
  flex-shrink: 0;
  margin-top: 2px;
  transition: transform 0.3s ease;
}

.list-item:hover .check-icon {
  transform: scale(1.2);
}

.check-icon.accent-orange {
  color: #d84315;
}

/* =========================================================
   RESPONSIVE
========================================================= */
@media (max-width: 1024px) {
  .card-objective,
  .card-profile {
    grid-column: span 12;
  }
}

@media (max-width: 768px) {
  .career-overview-section {
    padding: 5rem 0;
  }
  .bento-grid {
    gap: 1.5rem;
  }
  .bento-card {
    padding: 2.25rem 1.75rem;
    border-radius: 20px;
  }
  .grid-list {
    grid-template-columns: 1fr;
  }
  .bento-card h3 {
    font-size: 1.55rem;
  }
}
</style>

