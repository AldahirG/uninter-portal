<script setup lang="ts">
import { Globe, Users, Lightbulb, Trophy } from "lucide-vue-next";

const valores = [
  {
    icon: Users,
    titulo: "Excelencia académica",
    desc: "Un modelo educativo que fortalece conocimientos, pensamiento crítico y habilidades para continuar con éxito su trayectoria académica",
  },
  {
    icon: Globe,
    titulo: "Formación internacional",
    desc: "Preparación para oportunidades internacionales. Idiomas, convivencia multicultural y experiencias que amplían la visión y las oportunidades de nuestros estudiantes.",
  },
  {
    icon: Lightbulb,
    titulo: "Innovación en el aprendizaje",
    desc: "Tecnología, laboratorios y metodologías activas que impulsan la creatividad, la resolución de problemas y el pensamiento crítico.",
  },
  {
    icon: Trophy,
    titulo: "Desarrollo integral",
    desc: "Actividades deportivas, artísticas y culturales que fortalecen disciplina, confianza, liderazgo y trabajo en equipo.",
  },
];
</script>

<template>
  <section class="siu-welcome">
    <!-- Banda superior -->
    <div class="siu-welcome__top">
      <div class="siu-container">
        <div class="siu-welcome__intro">
          <div class="siu-welcome__intro-text">
            <p class="siu-welcome__eyebrow">Bienvenido a</p>
            <h2 class="siu-welcome__title">
              Comunidad SIU
              <span class="siu-welcome__title-highlight">UNINTER</span>
            </h2>
          </div>
          <p class="siu-welcome__desc">
            Aquí comienza una historia sin fronteras. <br />
            En SIU, nuestros estudiantes no solo se preparan académicamente:
            aprenden a desenvolverse en el mundo. <br />
            Crecer en un ambiente internacional les permite aprender idiomas,
            convivir con otras culturas, ganar confianza y desarrollar una
            visión global que los prepara para las oportunidades del futuro.
            <br />
            Porque el futuro exige más que buenas calificaciones: exige estar
            preparado para el mundo.
          </p>
        </div>
      </div>
    </div>

    <!-- Cards de valores -->
    <div class="siu-welcome__cards-wrap">
      <div class="siu-container">
        <div class="siu-welcome__cards">
          <div v-for="v in valores" :key="v.titulo" class="siu-val-card">
            <div class="siu-val-card__icon">
              <component :is="v.icon" :size="24" />
            </div>
            <h3 class="siu-val-card__titulo">{{ v.titulo }}</h3>
            <p class="siu-val-card__desc">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.siu-welcome {
  --s: #ecab00;
  --sd: #c49000;
  --sbg: #1a1500;
}
.siu-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Banda superior clara */
.siu-welcome__top {
  background: #ffffff;
  padding: 4.5rem 0 3rem;
}
.siu-welcome__intro {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: 3rem;
  align-items: start;
}
.siu-welcome__eyebrow {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--s);
  margin: 0 0 0.5rem;
}
.siu-welcome__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 800;
  color: #0f172a;
  margin: 0;
  line-height: 1.15;
}
.siu-welcome__title-highlight {
  color: #0f3c61;
}
.siu-welcome__desc {
  font-size: 0.95rem;
  line-height: 1.75;
  color: #475569;
  margin: 0;
  padding-top: 1.6rem;
  border-top: 2px solid var(--s);
}

/* Cards - Fondo crema */
.siu-welcome__cards-wrap {
  background: #fffdf5;
  padding: 3.5rem 0 5rem;
}
.siu-welcome__cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.siu-val-card {
  background: #fff;
  border-radius: 14px;
  padding: 1.75rem 1.5rem;
  transition:
    transform 0.25s,
    box-shadow 0.25s;
  position: relative;
  z-index: 1;
}
.siu-val-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 14px;
  padding: 1px;
  background: rgba(236, 171, 0, 0.15);
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
  transition: background 0.3s;
  z-index: -1;
}
.siu-val-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(236, 171, 0, 0.12);
}
.siu-val-card:hover::before {
  background: linear-gradient(135deg, #ffce52 0%, #ffce52 60%, #00b6ec 100%);
}
.siu-val-card__icon {
  width: 46px;
  height: 46px;
  border-radius: 10px;
  background: rgba(236, 171, 0, 0.12);
  color: var(--s);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}
.siu-val-card__titulo {
  font-size: 1rem;
  font-weight: 700;
  color: #0f172a;
  margin: 0 0 0.6rem;
}
.siu-val-card__desc {
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 1024px) {
  .siu-welcome__cards {
    grid-template-columns: repeat(2, 1fr);
  }
  .siu-welcome__intro {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
@media (max-width: 560px) {
  .siu-welcome__cards {
    grid-template-columns: 1fr;
  }
}
</style>
