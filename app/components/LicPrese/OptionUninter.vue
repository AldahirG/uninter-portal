<script setup lang="ts">
import { CheckCircle2 } from "lucide-vue-next";

const grupos = [
  {
    titulo: "Calidad y acreditaciones",
    items: [
      "Más de 40 años de calidad educativa.",
      "Por décimo tercer año consecutivo en el ranking de las mejores universidades.",
      "Certificación ISO 9001:2015 en todos nuestros procesos.",
      "Acreditación FIMPES.",
      "Titulación por Excelencia Académica, Tesis, Posgrado, CENEVAL y Experiencia Profesional.",
      "Certificaciones y acreditaciones de acuerdo a cada licenciatura.",
    ],
  },
  {
    titulo: "Internacionalización",
    items: [
      "Intercambios académicos y culturales con más de 130 Universidades en el mundo.",
      "Ambiente multicultural con alumnos provenientes de 25 países.",
      "49 Materias en Inglés y Francés.",
      "Diploma Internacional.",
      "Profesores extranjeros o con perfil internacional.",
      "Certificado internacional: Francia (RIEC, RICP, LRI).",
      "Idiomas curriculares: Inglés y Francés.",
      "Idiomas Extracurriculares: Alemán, Chino, Ruso, Italiano y más.",
      "Materias extracurriculares en el extranjero.",
      "Miembros de asociaciones Internacionales para los estudios.",
    ],
  },
  {
    titulo: "Desarrollo profesional",
    items: [
      "Más de 1,500 vínculos empresariales para prácticas profesionales.",
      "Enlace profesional y voluntariado Internacional.",
      "Programa de tutores y programas personalizados de becas.",
      "Asesorías académicas sin costo.",
      "Congresos, ferias, exposiciones y simposios por licenciatura.",
      "Realización de proyectos enfocados a soluciones reales.",
    ],
  },
  {
    titulo: "Experiencia universitaria",
    items: [
      "Clases multidisciplinarias.",
      "Talleres culturales y deportivos.",
      "Certificación DELF (Diplome D´études en langue francaise).",
      "Certificación TKT (Teaching Knowledge Test).",
    ],
  },
];
</script>

<template>
  <section class="opt-section">
    <!-- Banner superior -->
    <div class="opt-banner">
      <img
        src="/images/hero/licenciaturasPresenciales.jpg"
        alt="UNINTER La Mejor Opción"
        class="opt-banner__img"
      />
      <div class="opt-banner__overlay"></div>
      <div class="opt-banner__content uninter-container">
        <p class="opt-banner__eyebrow">¿Por qué elegirnos?</p>
        <h2 class="opt-banner__title">UNINTER <em>la mejor opción</em></h2>
        <p class="opt-banner__text">
          En UNINTER se han firmado más de 500 convenios con empresas e
          instituciones nacionales e internacionales. Todos los alumnos estudian
          un segundo idioma y tienen acceso a intercambios con organizaciones
          como AFS, Canada Options Education y Latino Australia Education.
        </p>
      </div>
    </div>

    <!-- Grid de razones agrupadas -->
    <div class="opt-reasons">
      <div class="uninter-container">
        <div class="opt-reasons__header">
          <div class="section-eyebrow">
            <span class="eyebrow-line"></span>
            25 RAZONES PARA ELEGIR UNINTER
          </div>
          <h3 class="opt-reasons__title">Conócenos y <em>compáranos</em></h3>
        </div>

        <div class="opt-grid">
          <div v-for="grupo in grupos" :key="grupo.titulo" class="opt-card">
            <h4 class="opt-card__title">{{ grupo.titulo }}</h4>
            <ul class="opt-card__list">
              <li
                v-for="item in grupo.items"
                :key="item"
                class="opt-card__item"
              >
                <CheckCircle2 :size="15" class="opt-card__icon" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.uninter-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ── Banner ───────────────────────────────────────────────── */
.opt-banner {
  position: relative;
  height: clamp(320px, 45vh, 500px);
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #0f3c61;
}

.opt-banner__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.opt-banner__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    110deg,
    rgba(7, 20, 42, 0.92) 0%,
    rgba(10, 30, 60, 0.78) 55%,
    rgba(10, 30, 60, 0.45) 100%
  );
}

.opt-banner__content {
  position: relative;
  z-index: 2;
  width: 100%;
}

.opt-banner__eyebrow {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #60a5fa;
  margin: 0 0 0.75rem;
}

.opt-banner__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 5vw, 3.6rem);
  font-weight: 800;
  color: #fff;
  margin: 0 0 1.25rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
}
.opt-banner__title em {
  font-style: normal;
  color: #60a5fa;
}

.opt-banner__text {
  font-size: clamp(0.88rem, 1.3vw, 1rem);
  color: rgba(255,255,255,0.72);
  line-height: 1.65;
  max-width: 640px;
  margin: 0;
}

/* ── Razones ──────────────────────────────────────────────── */
.opt-reasons {
  background: #f8f9fb;
  padding: 5rem 0;
}

.opt-reasons__header {
  margin-bottom: 3rem;
}

.section-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #0f3c61;
  margin-bottom: 1rem;
}
.eyebrow-line {
  display: block;
  width: 24px;
  height: 2px;
  background: #0f3c61;
  flex-shrink: 0;
}

.opt-reasons__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 800;
  color: #0f3c61;
  margin: 0;
  line-height: 1.15;
  letter-spacing: -0.02em;
}
.opt-reasons__title em {
  font-style: italic;
  color: #1565c0;
}

/* Grid 2×2 */
.opt-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.opt-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem 2rem 2.25rem;
  transition: box-shadow 0.2s, transform 0.2s;
}
.opt-card:hover {
  box-shadow: 0 12px 32px rgba(15,60,97,0.09);
  transform: translateY(-3px);
}

.opt-card__title {
  font-size: 1rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 1.25rem;
  padding-bottom: 0.875rem;
  border-bottom: 2px solid #dceaf7;
}

.opt-card__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.opt-card__item {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.85rem;
  color: #475569;
  line-height: 1.5;
}

.opt-card__icon {
  color: #1565c0;
  flex-shrink: 0;
  margin-top: 1px;
}

/* Responsive */
@media (max-width: 860px) {
  .opt-grid { grid-template-columns: 1fr; }
}

@media (max-width: 560px) {
  .opt-reasons { padding: 3.5rem 0; }
  .opt-banner__text { display: none; }
}
</style>
