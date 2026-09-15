<script setup lang="ts">
import { Building2, Globe2, Link, Award, ArrowRight } from "lucide-vue-next";

const stats = [
  { icon: Building2, value: "130+", label: "Universidades aliadas" },
  { icon: Globe2, value: "25", label: "Países con convenio" },
  { icon: Link, value: "500+", label: "Convenios internacionales" },
  { icon: Award, value: "Doble", label: "Titulación internacional" },
];

const programas = [
  {
    nombre: "Disney International College Program",
    desc: "Prácticas profesionales remuneradas y formación en Walt Disney World (Florida, USA).",
  },
  {
    nombre: "Université de Toulouse & Rennes",
    desc: "Intercambio académico y doble titulación en universidades de prestigio en Francia.",
  },
  {
    nombre: "University of Utah",
    desc: "Estancias académicas de verano y semestres de intercambio en Estados Unidos.",
  },
  {
    nombre: "Red Santander Universidades",
    desc: "Opciones de movilidad internacional y acceso a becas globales en Iberoamérica.",
  },
];
</script>

<template>
  <section class="inter-section">
    <!-- BANNER HERO -->
    <div class="inter-banner">
      <img
        src="/images/hero/Inter.svg"
        alt="Internacionalización Licenciaturas UNINTER"
        class="inter-banner__img"
      />
      <div class="inter-banner__overlay"></div>
      <div class="uninter-container inter-banner__content">
        <div class="inter-banner__inner">
          <p class="inter-eyebrow">Movilidad Universitaria</p>
          <h2 class="inter-title">
            Internacionalización<br />
            <em>sin fronteras</em>
          </h2>
          <p class="inter-desc">
            En UNINTER Licenciaturas impulsamos tu proyección global desde el
            inicio de tu carrera. Estudia semestres en el extranjero, realiza
            prácticas profesionales internacionales y gradúate con doble
            titulación.
          </p>
        </div>
      </div>
    </div>

    <!-- CUERPO DE LA SECCIÓN -->
    <div class="inter-body">
      <div class="uninter-container">
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
            <span class="eyebrow-line"></span> PROGRAMAS Y CONVENIOS ALIADOS
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
          href="https://universidad.uninter.edu.mx/Internacionalizaci%C3%B3n"
          target="_blank"
          rel="noopener noreferrer"
          class="inter-cta"
        >
          Conoce todos los programas de movilidad universitaria →
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.uninter-container {
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1.5rem;
}

/* BANNER */
.inter-banner {
  align-items: center;
  background: #003b5c;
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
    rgba(0, 59, 92, 0.94),
    rgba(0, 59, 92, 0.8) 55%,
    rgba(0, 59, 92, 0.45)
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
  color: #00b2e3;
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
  color: #00b2e3;
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
  background: #f0f8ff;
  border: 1px solid #b9e0f7;
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
  box-shadow: 0 10px 28px rgba(0, 115, 180, 0.15);
  transform: translateY(-3px);
}

.inter-stat__icon {
  align-items: center;
  background: #e1f3fe;
  border-radius: 10px;
  color: #0073b4;
  display: flex;
  height: 44px;
  justify-content: center;
  width: 44px;
}

.inter-stat__value {
  color: #003b5c;
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
  color: #0073b4;
  display: flex;
  font-size: 0.75rem;
  font-weight: 800;
  gap: 0.75rem;
  letter-spacing: 0.14em;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.eyebrow-line {
  background: #0073b4;
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
  background: #f8f9fb;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  display: flex;
  gap: 0.875rem;
  padding: 1.25rem 1.5rem;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

.prog-card:hover {
  border-color: #7cc5f2;
  box-shadow: 0 6px 20px rgba(0, 115, 180, 0.1);
}

.prog-card__icon {
  color: #0073b4;
  flex-shrink: 0;
  margin-top: 2px;
}

.prog-card__name {
  color: #003b5c;
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
  color: #0073b4;
  font-size: 0.92rem;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s;
}

.inter-cta:hover {
  color: #003b5c;
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
