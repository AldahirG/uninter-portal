<script setup lang="ts">
import { UserCheck, Briefcase, CheckCircle2, Target } from "lucide-vue-next";

// Datos extraídos de las imágenes de referencia para LCO
const perfilIngreso = [
  "Creatividad e interés por los medios de comunicación masiva.",
  "Pasión por producir proyectos audiovisuales (cine, radio, TV).",
  "Disposición para trabajar en equipos multidisciplinarios.",
  "Facilidad para aprender herramientas tecnológicas de producción.",
  "Comunicación ética, responsable y objetiva.",
];

const mercadoLaboral = [
  "Producción, administración y análisis de métricas en Redes Sociales.",
  "Creación de emprendimientos: podcast, vlog, cortometrajes y streaming.",
  "Agencias de publicidad y relaciones públicas internacionales.",
  "Empresas productoras de radio, televisión y cine.",
  "Oficinas de prensa, comunicación social y corporativa.",
];
</script>

<template>
  <section class="career-overview-section" id="overview">
    <div class="uninter-container">
      <div class="overview-header animate-header">
        <span class="eyebrow">Panorama de la Carrera</span>
        <h2 class="section-title">¿Estás listo para el <em>reto?</em></h2>
      </div>

      <div class="bento-grid">
        <div class="bento-card card-objective sweep-hover stagger-1">
          <div class="sweep-background"></div>
          <div class="card-content">
            <div class="card-icon-wrap primary-icon">
              <Target :size="28" stroke-width="2" />
            </div>
            <h3>El Comunicador UNINTER</h3>
            <p>
              Nuestros egresados son líderes capaces de plantear, diseñar y
              administrar sistemas de comunicación. Haciendo uso de un fuerte
              conocimiento teórico y metodológico, producirás con ética y
              responsabilidad materiales audiovisuales que transformen el
              entorno en radio, televisión, cine y plataformas digitales.
            </p>
          </div>
        </div>

        <div class="bento-card card-profile accent-border stagger-2">
          <div class="card-header-inline">
            <div class="card-icon-wrap subtle-blue">
              <UserCheck :size="24" stroke-width="2" />
            </div>
            <h3>Perfil de Ingreso</h3>
          </div>
          <ul class="custom-list">
            <li
              v-for="(item, index) in perfilIngreso"
              :key="'ingreso-' + index"
              class="list-item"
            >
              <CheckCircle2 :size="18" class="check-icon" />
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>

        <div class="bento-card card-labor accent-border stagger-3">
          <div class="card-header-inline">
            <div class="card-icon-wrap subtle-blue">
              <Briefcase :size="24" stroke-width="2" />
            </div>
            <h3>Mercado Laboral</h3>
          </div>
          <p class="card-subtitle">
            Al egresar, tendrás las puertas abiertas en:
          </p>
          <ul class="custom-list grid-list">
            <li
              v-for="(item, index) in mercadoLaboral"
              :key="'labor-' + index"
              class="list-item"
            >
              <CheckCircle2 :size="18" class="check-icon accent-orange" />
              <span>{{ item }}</span>
            </li>
          </ul>
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
  padding: 6rem 0;
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
  overflow: hidden; /* Necesario para animaciones limpias */
}

.uninter-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* =========================================================
   ANIMACIONES DE ENTRADA (EL "PUNCH")
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

/* Stagger (Efecto Cascada) para las tarjetas */
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
  margin-bottom: 3.5rem;
}

.eyebrow {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #1565c0;
  margin-bottom: 0.75rem;
  background: #f0f6fc;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
}

.section-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 800;
  color: #0f3c61;
  margin: 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.section-title em {
  color: #1565c0;
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

/* Tarjetas Base */
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

/* Tamaños en el Grid */
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
   EFECTOS DE HOVER (LA MAGIA)
========================================================= */

/* 1. Efecto Sweep (Para la tarjeta principal) */
.sweep-hover {
  overflow: hidden;
  border: 1px solid rgba(15, 60, 97, 0.1);
}
.sweep-background {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0f3c61; /* Azul institucional */
  transition: top 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 0;
}
.sweep-hover:hover .sweep-background {
  top: 0;
}
.sweep-hover .card-content {
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
}

/* Cambios de color en hover para el Sweep */
.sweep-hover:hover h3,
.sweep-hover:hover p {
  color: #ffffff;
}
.sweep-hover:hover .primary-icon {
  background-color: #ffffff;
  color: #0f3c61;
  transform: scale(1.1);
}

/* 2. Efecto Accent Border (Para las demás tarjetas) */
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
  background-color: #d84315; /* Naranja institucional */
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  transform: translateX(-50%);
}
.accent-border:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px -12px rgba(15, 60, 97, 0.15);
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
  transition: all 0.4s ease;
}

.card-icon-wrap.subtle-blue {
  background-color: #f0f6fc;
  color: #1565c0;
}

.card-header-inline {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 2rem;
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
  font-family: var(--font-serif, Georgia, serif);
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
   LISTAS LIMPIAS CON ÍCONOS
========================================================= */
.custom-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

/* Lista animada en hover */
.list-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 0.95rem;
  color: #334155;
  line-height: 1.5;
  font-weight: 500;
  transition: transform 0.3s ease;
}
.bento-card:hover .list-item:nth-child(even) {
  transform: translateX(5px);
}
.bento-card:hover .list-item:nth-child(odd) {
  transform: translateX(3px);
}

.grid-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.check-icon {
  color: #1565c0;
  flex-shrink: 0;
  margin-top: 2px;
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
    padding: 4rem 0;
  }
  .bento-grid {
    gap: 1.5rem;
  }
  .bento-card {
    padding: 2rem 1.5rem;
    border-radius: 16px;
  }
  .grid-list {
    grid-template-columns: 1fr;
  }
  .bento-card h3 {
    font-size: 1.5rem;
  }
}
</style>
