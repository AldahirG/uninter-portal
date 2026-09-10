<script setup lang="ts">
import { Award, GraduationCap, Globe, Building2 } from "lucide-vue-next";

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
      <div class="section-eyebrow">
        <span class="eyebrow-line"></span> COMUNIDAD UNINTER
      </div>

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

        <div class="welcome-pillars">
          <div v-for="(pillar, i) in pillars" :key="i" class="pillar-item">
            <span class="pillar-num">0{{ i + 1 }}</span>
            <div>
              <p class="pillar-title">{{ pillar.title }}</p>
              <p class="pillar-desc">{{ pillar.desc }}</p>
            </div>
          </div>
        </div>
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
.welcome-section {
  background: #fff;
  padding: 6rem 0 5rem;
}
.section-eyebrow {
  align-items: center;
  color: #003b5c;
  display: flex;
  font-size: 0.72rem;
  font-weight: 800;
  gap: 0.75rem;
  letter-spacing: 0.14em;
  margin-bottom: 2 rem;
  text-transform: uppercase;
}
.eyebrow-line {
  background: #003b5c;
  display: block;
  flex-shrink: 0;
  height: 2px;
  width: 24px;
}
.welcome-top {
  align-items: start;
  display: grid;
  gap: 4rem;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 3.5rem;
}
.section-title {
  color: #0f3c61;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.12;
  margin: 0 0 1.25rem;
}
.title-highlight {
  color: #00b2e3;
}
.section-desc {
  color: #475569;
  font-size: 1rem;
  line-height: 1.72;
  margin: 0;
}
.section-desc strong {
  color: #003b5c;
  font-weight: 700;
}
.welcome-pillars {
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 0;
  overflow: hidden;
}
.pillar-item {
  align-items: flex-start;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  gap: 1.25rem;
  padding: 1.4rem 1.75rem;
  transition: background 0.2s;
}
.pillar-item:last-child {
  border-bottom: none;
}
.pillar-item:hover {
  background: #f8fafc;
}
.pillar-num {
  color: #dceaf7;
  flex-shrink: 0;
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 1;
  min-width: 2rem;
}
.pillar-title {
  color: #003b5c;
  font-size: 0.9rem;
  font-weight: 700;
  margin: 0 0 0.25rem;
}
.pillar-desc {
  color: #4a657a;
  font-size: 0.82rem;
  line-height: 1.55;
  margin: 0;
}
.welcome-stats {
  background: #e2e8f0;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  display: grid;
  gap: 1px;
  grid-template-columns: repeat(4, 1fr);
  overflow: hidden;
}
.stat-card {
  align-items: center;
  background: #f8fafc;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: background 0.2s;
}
.stat-card:hover {
  background: #fff;
}
.stat-card__icon {
  align-items: center;
  background: #0073b418;
  border-radius: 10px;
  color: #0073b4;
  display: flex;
  height: 44px;
  justify-content: center;
  margin-bottom: 0.25rem;
  width: 44px;
}
.stat-card__value {
  color: #003b5c;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.6rem, 2.5vw, 2.1rem);
  font-weight: 900;
  line-height: 1;
  margin: 0;
}
.stat-card__label {
  color: #4a657a;
  font-size: 0.72rem;
  font-weight: 600;
  line-height: 1.35;
  margin: 0;
}
@media (max-width: 900px) {
  .welcome-top {
    gap: 2.5rem;
    grid-template-columns: 1fr;
  }
  .welcome-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 560px) {
  .welcome-section {
    padding: 4rem 0 3.5rem;
  }
  .welcome-stats {
    grid-template-columns: repeat(2, 1fr);
  }
  .stat-card {
    padding: 1.5rem 1rem;
  }
}
</style>
