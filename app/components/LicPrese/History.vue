<script setup lang="ts">
import { GraduationCap, Globe, Building2, Star } from "lucide-vue-next";

const stats = [
  { icon: Star,        value: "1980",    label: "Año de fundación"              },
  { icon: GraduationCap, value: "71,000+", label: "Egresados mexicanos y extranjeros" },
  { icon: Globe,       value: "130+",    label: "Universidades aliadas en el mundo" },
  { icon: Building2,   value: "25",      label: "Países representados en campus" },
];

const pillars = [
  {
    title: "Formación internacional",
    desc: "Idiomas curriculares, materias en inglés y francés, y certificaciones internacionales incluidas en tu licenciatura.",
  },
  {
    title: "Conexión profesional",
    desc: "Más de 1,500 convenios empresariales para prácticas profesionales desde el primer año.",
  },
  {
    title: "Garantía de calidad",
    desc: "Certificación ISO 9001:2015, acreditación FIMPES y más de 40 años en rankings de las mejores universidades.",
  },
];
</script>

<template>
  <section class="welcome-section">
    <div class="uninter-container">

      <!-- Eyebrow -->
      <div class="section-eyebrow">
        <span class="eyebrow-line"></span>
        COMUNIDAD UNINTER
      </div>

      <!-- Encabezado + descripción -->
      <div class="welcome-top">
        <div class="welcome-text">
          <h2 class="section-title">
            Bienvenido a la<br />
            <span class="title-highlight">comunidad UNINTER</span>
          </h2>
          <p class="section-desc">
            Desde 1980, formamos profesionistas con conocimientos sólidos,
            pensamiento creativo y visión global. Únete a más de
            <strong>71,000 egresados mexicanos y extranjeros</strong> que hoy
            son líderes en sus industrias.
          </p>
        </div>

        <!-- Tarjeta de pilares -->
        <div class="welcome-pillars">
          <div
            v-for="(p, i) in pillars"
            :key="i"
            class="pillar-item"
          >
            <span class="pillar-num">0{{ i + 1 }}</span>
            <div>
              <p class="pillar-title">{{ p.title }}</p>
              <p class="pillar-desc">{{ p.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div class="welcome-stats">
        <div v-for="stat in stats" :key="stat.label" class="stat-card">
          <div class="stat-card__icon">
            <component :is="stat.icon" :size="22" />
          </div>
          <p class="stat-card__value">{{ stat.value }}</p>
          <p class="stat-card__label">{{ stat.label }}</p>
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

.welcome-section {
  padding: 6rem 0 5rem;
  background: #ffffff;
}

/* Eyebrow */
.section-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #0f3c61;
  margin-bottom: 2rem;
}
.eyebrow-line {
  display: block;
  width: 24px;
  height: 2px;
  background: #0f3c61;
  flex-shrink: 0;
}

/* Top grid */
.welcome-top {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
  margin-bottom: 3.5rem;
}

.section-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  line-height: 1.12;
  color: #1e293b;
  margin: 0 0 1.25rem;
  letter-spacing: -0.02em;
}
.title-highlight { color: #0f3c61; }

.section-desc {
  font-size: 1rem;
  color: #475569;
  line-height: 1.72;
  margin: 0;
}
.section-desc strong { color: #0f3c61; font-weight: 700; }

/* Pilares */
.welcome-pillars {
  display: flex;
  flex-direction: column;
  gap: 0;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  overflow: hidden;
}

.pillar-item {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  padding: 1.4rem 1.75rem;
  border-bottom: 1px solid #e2e8f0;
  transition: background 0.2s;
}
.pillar-item:last-child { border-bottom: none; }
.pillar-item:hover { background: #f8fafc; }

.pillar-num {
  font-size: 1.5rem;
  font-weight: 900;
  color: #dceaf7;
  line-height: 1;
  font-family: var(--font-serif, Georgia, serif);
  flex-shrink: 0;
  min-width: 2rem;
}

.pillar-title {
  font-size: 0.9rem;
  font-weight: 700;
  color: #0f3c61;
  margin: 0 0 0.25rem;
}
.pillar-desc {
  font-size: 0.82rem;
  color: #64748b;
  line-height: 1.55;
  margin: 0;
}

/* Stats strip */
.welcome-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: #e2e8f0;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  overflow: hidden;
}

.stat-card {
  background: #f8fafc;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  transition: background 0.2s;
}
.stat-card:hover { background: #fff; }

.stat-card__icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: #1565c018;
  color: #1565c0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.25rem;
}

.stat-card__value {
  font-size: clamp(1.6rem, 2.5vw, 2.1rem);
  font-weight: 900;
  color: #0f3c61;
  margin: 0;
  line-height: 1;
  font-family: var(--font-serif, Georgia, serif);
}

.stat-card__label {
  font-size: 0.72rem;
  color: #64748b;
  font-weight: 600;
  margin: 0;
  line-height: 1.35;
}

/* Responsive */
@media (max-width: 900px) {
  .welcome-top {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .welcome-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .welcome-section { padding: 4rem 0 3.5rem; }
  .welcome-stats { grid-template-columns: repeat(2, 1fr); }
  .stat-card { padding: 1.5rem 1rem; }
}
</style>
