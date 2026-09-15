<script setup lang="ts">
import {
  Building2,
  GraduationCap,
  Network,
  Globe2,
  ArrowRight,
} from "lucide-vue-next";

const stats = [
  { icon: Building2, value: "130+", label: "Universidades socias en el mundo" },
  {
    icon: GraduationCap,
    value: "Doble",
    label: "Titulación internacional disponible",
  },
  {
    icon: Network,
    value: "Global",
    label: "Cátedras y redes de investigación",
  },
  { icon: Globe2, value: "25", label: "Países con convenio activo" },
];

const programas = [
  {
    nombre: "Convenios de Investigación y Cotutoría",
    desc: "Colaboraciones de posgrado con instituciones como la Universidad Católica Luis Amigó (Medellín, Colombia).",
  },
  {
    nombre: "Doble Grado Internacional",
    desc: "Opciones de titulación conjunta y reconocimiento de créditos en programas de maestría y doctorado.",
  },
  {
    nombre: "Estancias y Pasantías Académicas",
    desc: "Experiencias presenciales e investigación aplicada en universidades líderes de América y Europa.",
  },
  {
    nombre: "Claustro Docente de Alcance Global",
    desc: "Profesores invitados, investigadores SNI y conferencias magistrales con líderes del sector internacional.",
  },
];
</script>

<template>
  <section class="inter-section">
    <!-- BANNER HERO -->
    <div class="inter-banner">
      <img
        src="/images/hero/Inter.svg"
        alt="Internacionalización Posgrados UNINTER"
        class="inter-banner__img"
      />
      <div class="inter-banner__overlay"></div>
      <div class="pg-container inter-banner__content">
        <div class="inter-banner__inner">
          <p class="inter-eyebrow">Investigación y Proyección Global</p>
          <h2 class="inter-title">
            Internacionalización<br />
            <em>de alto impacto</em>
          </h2>
          <p class="inter-desc">
            Nuestros programas de posgrado conectan a profesionales,
            investigadores y líderes con una red global de expertos. Pasantías
            de investigación, estancias doctorales, doble titulación y cátedras
            internacionales con docentes de América y Europa.
          </p>
        </div>
      </div>
    </div>

    <!-- CUERPO DE LA SECCIÓN -->
    <div class="inter-body">
      <div class="pg-container">
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
            <span class="eyebrow-line"></span> ALIANZAS Y VINCULACIÓN
            INTERNACIONAL
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
          Explora los convenios internacionales para posgrados →
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pg-container {
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1.5rem;
}

/* BANNER */
.inter-banner {
  align-items: center;
  background: #0c2010;
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
    rgba(12, 32, 16, 0.95),
    rgba(12, 32, 16, 0.82) 55%,
    rgba(12, 32, 16, 0.48)
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
  max-width: 620px;
}

.inter-eyebrow {
  color: #a8ac44;
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
  color: #a8ac44;
  font-style: italic;
}

.inter-desc {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.96rem;
  line-height: 1.65;
  margin: 0;
  max-width: 540px;
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
  background: #fbfcf5;
  border: 1px solid #e3e8c8;
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
  box-shadow: 0 10px 28px rgba(141, 143, 56, 0.2);
  border-color: #8d8f38;
  transform: translateY(-3px);
}

.inter-stat__icon {
  align-items: center;
  background: #f2f5e1;
  border-radius: 10px;
  color: #6e7025;
  display: flex;
  height: 44px;
  justify-content: center;
  width: 44px;
}

.inter-stat__value {
  color: #444616;
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
  color: #6e7025;
  display: flex;
  font-size: 0.75rem;
  font-weight: 800;
  gap: 0.75rem;
  letter-spacing: 0.14em;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}

.eyebrow-line {
  background: #8d8f38;
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
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  display: flex;
  gap: 0.875rem;
  padding: 1.25rem 1.5rem;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

.prog-card:hover {
  border-color: #8d8f38;
  box-shadow: 0 6px 20px rgba(141, 143, 56, 0.15);
}

.prog-card__icon {
  color: #8d8f38;
  flex-shrink: 0;
  margin-top: 2px;
}

.prog-card__name {
  color: #0f3c61;
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
  color: #6e7025;
  font-size: 0.92rem;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s;
}

.inter-cta:hover {
  color: #444616;
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
