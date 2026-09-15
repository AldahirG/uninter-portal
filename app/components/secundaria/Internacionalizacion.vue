<script setup lang="ts">
import { Languages, Globe2, Award, Compass, ArrowRight } from "lucide-vue-next";

const stats = [
  {
    icon: Languages,
    value: "2",
    label: "Idiomas curriculares (Inglés y Francés)",
  },
  { icon: Globe2, value: "25+", label: "Países representados en campus" },
  { icon: Award, value: "100%", label: "Docentes especializados" },
  {
    icon: Compass,
    value: "Oficial",
    label: "Certificaciones Cambridge y DELF",
  },
];

const programas = [
  {
    nombre: "Verano Kids & Teens UNINTER",
    desc: "Campamentos bilingües y de inmersión cultural con actividades recreativas e idiomas.",
  },
  {
    nombre: "Programas Interculturales AFS",
    desc: "Experiencias de intercambio cultural juvenil con estudiantes de diversos países.",
  },
  {
    nombre: "Certificaciones Internacionales",
    desc: "Preparación y acreditación oficial de dominio del inglés y francés desde secundaria.",
  },
  {
    nombre: "Embajadores y Festivales Globales",
    desc: "Muestras gastronómicas, talleres y convivencia con estudiantes internacionales en Cuernavaca.",
  },
];
</script>

<template>
  <section class="inter-section">
    <!-- BANNER HERO -->
    <div class="inter-banner">
      <img
        src="/images/hero/Inter.svg"
        alt="Internacionalización Secundaria SIU UNINTER"
        class="inter-banner__img"
      />
      <div class="inter-banner__overlay"></div>
      <div class="siu-container inter-banner__content">
        <div class="inter-banner__inner">
          <p class="inter-eyebrow">Formación Global desde Secundaria</p>
          <h2 class="inter-title">
            Internacionalización<br />
            <em>a temprana edad</em>
          </h2>
          <p class="inter-desc">
            En SIU Secundaria formamos ciudadanos del mundo. Nuestros
            estudiantes desarrollan un dominio avanzado de idiomas, conviven con
            estudiantes internacionales y adquieren una visión multicultural que
            los prepara para el futuro.
          </p>
        </div>
      </div>
    </div>

    <!-- CUERPO DE LA SECCIÓN -->
    <div class="inter-body">
      <div class="siu-container">
        <!-- ESTADÍSTICAS -->
        <div class="inter-stats">
          <div v-for="e in stats" :key="e.label" class="inter-stat">
            <div class="inter-stat__icon">
              <component :is="e.icon" :size="22" />
            </div>
            <p class="inter-stat__value">{{ e.value }}</p>
            <p class="inter-stat__label">{{ e.label }}</p>
          </div>
        </div>

        <!-- PROGRAMAS Y CONVENIOS -->
        <div class="inter-programs">
          <div class="inter-eyebrow-section">
            <span class="eyebrow-line"></span> VINCULACIÓN Y EXPERIENCIAS
            INTERNACIONALES
          </div>
          <div class="inter-programs__grid">
            <div v-for="e in programas" :key="e.nombre" class="prog-card">
              <ArrowRight :size="16" class="prog-card__icon" />
              <div>
                <p class="prog-card__name">{{ e.nombre }}</p>
                <p class="prog-card__desc">{{ e.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="inter-cta-wrap">
        <a
          href="https://secundaria.uninter.edu.mx/"
          target="_blank"
          rel="noopener noreferrer"
          class="inter-cta"
        >
          Descubre todas las actividades internacionales de SIU →
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.siu-container {
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1.5rem;
}

/* BANNER */
.inter-banner {
  align-items: center;
  background: #1a1500;
  display: flex;
  height: clamp(320px, 45vh, 480px);
  overflow: hidden;
  position: relative;
}

.inter-banner__img {
  height: 100%;
  inset: 0;
  object-fit: cover;
  position: absolute;
  width: 100%;
}

.inter-banner__overlay {
  background: linear-gradient(
    110deg,
    rgba(26, 21, 0, 0.94),
    rgba(26, 21, 0, 0.8) 55%,
    rgba(26, 21, 0, 0.45)
  );
  inset: 0;
  position: absolute;
}

.inter-banner__content {
  position: relative;
  width: 100%;
  z-index: 2;
}

.inter-banner__inner {
  max-width: 600px;
}

.inter-eyebrow {
  color: #ffce52;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  margin: 0 0 0.875rem;
  text-transform: uppercase;
}

.inter-title {
  color: #fff;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 4.5vw, 3.4rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin: 0 0 1.25rem;
}

.inter-title em {
  color: #ffce52;
  font-style: italic;
}

.inter-desc {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.96rem;
  line-height: 1.65;
  margin: 0;
  max-width: 520px;
}

/* BODY */
.inter-body {
  background: #fff;
  padding: 4.5rem 0 5rem;
}

/* STATS */
.inter-stats {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 3.5rem;
}

.inter-stat {
  align-items: center;
  background: #fffdf5;
  border: 1px solid #fce8a6;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.75rem 1rem;
  text-align: center;
  transition:
    box-shadow 0.2s,
    transform 0.2s;
}

.inter-stat:hover {
  box-shadow: 0 10px 28px rgba(236, 171, 0, 0.2);
  border-color: #ecab00;
  transform: translateY(-3px);
}

.inter-stat__icon {
  align-items: center;
  background: rgba(236, 171, 0, 0.14);
  border-radius: 10px;
  color: #c49000;
  display: flex;
  height: 44px;
  justify-content: center;
  width: 44px;
}

.inter-stat__value {
  color: #c49000;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.6rem, 2.5vw, 2.2rem);
  font-weight: 900;
  line-height: 1;
  margin: 0;
}

.inter-stat__label {
  color: #64748b;
  font-size: 0.75rem;
  font-weight: 600;
  margin: 0;
  text-align: center;
}

/* PROGRAMAS */
.inter-programs {
  margin-bottom: 2.5rem;
}

.inter-eyebrow-section {
  align-items: center;
  color: #c49000;
  display: flex;
  font-size: 0.75rem;
  font-weight: 800;
  gap: 0.75rem;
  letter-spacing: 0.14em;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.eyebrow-line {
  background: #ecab00;
  display: block;
  flex-shrink: 0;
  height: 2px;
  width: 24px;
}

.inter-programs__grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
}

.prog-card {
  align-items: flex-start;
  background: #fcfbfa;
  border: 1px solid #f3ede2;
  border-radius: 12px;
  display: flex;
  gap: 0.875rem;
  padding: 1.25rem 1.5rem;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

.prog-card:hover {
  border-color: #ecab00;
  box-shadow: 0 6px 20px rgba(236, 171, 0, 0.14);
}

.prog-card__icon {
  color: #ecab00;
  flex-shrink: 0;
  margin-top: 2px;
}

.prog-card__name {
  color: #0f172a;
  font-size: 0.9rem;
  font-weight: 700;
  margin: 0 0 0.25rem;
}

.prog-card__desc {
  color: #64748b;
  font-size: 0.8rem;
  line-height: 1.5;
  margin: 0;
}

/* CTA */
.inter-cta-wrap {
  text-align: center;
}

.inter-cta {
  color: #c49000;
  font-size: 0.92rem;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s;
}

.inter-cta:hover {
  color: #9a7000;
  text-decoration: underline;
}

@media (max-width: 900px) {
  .inter-stats {
    grid-template-columns: repeat(2, 1fr);
  }
  .inter-programs__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .inter-banner {
    height: clamp(280px, 50vh, 400px);
  }
  .inter-desc {
    display: none;
  }
}
</style>
