<script setup lang="ts">
import { Globe, Briefcase, FlaskConical, Award } from "lucide-vue-next";

const valores = [
  { icon: Globe,        titulo: "Red internacional",      desc: "Vinculación con más de 130 universidades en 25 países para intercambios y estancias de investigación." },
  { icon: Briefcase,    titulo: "Perfil directivo",       desc: "Egresados con habilidades analíticas y directivas para liderar en entornos empresariales globales." },
  { icon: FlaskConical, titulo: "Investigación aplicada", desc: "Laboratorios, proyectos de investigación y vinculación activa con el sector productivo." },
  { icon: Award,        titulo: "Reconocimiento oficial", desc: "Programas con validez SEP y reconocimiento internacional en más de 25 países." },
];
</script>

<template>
  <section class="pg-welcome">
    <!-- Banda superior oscura -->
    <div class="pg-welcome__top">
      <div class="pg-container">
        <div class="pg-welcome__intro">
          <div class="pg-welcome__intro-text">
            <p class="pg-welcome__eyebrow">Bienvenido a</p>
            <h2 class="pg-welcome__title">Comunidad Posgrados UNINTER</h2>
          </div>
          <p class="pg-welcome__desc">
            En Posgrados UNINTER te ofrecemos comodidades únicas: intercambio internacional y relación directa
            con otras culturas del mundo, desarrollo de habilidades analíticas, directivas e investigadoras
            a través de la Universidad Internacional, con más de 40 años de experiencia educativa a nivel
            internacional y amplio reconocimiento mundial. Formamos profesionistas con gran sentido de
            integración, aceptando, respetando y valorando sus diferencias, cualidades y fortalezas,
            contribuyendo a que alcancen el máximo de su potencial profesional.
          </p>
        </div>
      </div>
    </div>

    <!-- Cards de valores -->
    <div class="pg-welcome__cards-wrap">
      <div class="pg-container">
        <div class="pg-welcome__cards">
          <div v-for="v in valores" :key="v.titulo" class="pg-val-card">
            <div class="pg-val-card__icon">
              <component :is="v.icon" :size="24" />
            </div>
            <h3 class="pg-val-card__titulo">{{ v.titulo }}</h3>
            <p class="pg-val-card__desc">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pg-welcome {
  --p: #546E7A;
  --pd: #37474F;
  --pl: #78909C;
  --pbg: #0f1a22;
}
.pg-container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }

.pg-welcome__top { background: var(--pbg); padding: 4.5rem 0 3rem; }
.pg-welcome__intro {
  display: grid; grid-template-columns: 1fr 1.6fr;
  gap: 3rem; align-items: start;
}
.pg-welcome__eyebrow {
  font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--pl); margin: 0 0 0.5rem;
}
.pg-welcome__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 800; color: #fff; margin: 0; line-height: 1.15;
}
.pg-welcome__desc {
  font-size: 0.95rem; line-height: 1.75;
  color: rgba(255,255,255,0.62); margin: 0;
  padding-top: 1.6rem; border-top: 2px solid var(--p);
}

.pg-welcome__cards-wrap { background: #162028; padding: 3.5rem 0; }
.pg-welcome__cards {
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem;
}
.pg-val-card {
  background: #1e2c36;
  border: 1px solid rgba(84,110,122,0.18);
  border-radius: 14px; padding: 1.75rem 1.5rem;
  transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
}
.pg-val-card:hover {
  transform: translateY(-5px);
  border-color: var(--p);
  box-shadow: 0 12px 32px rgba(84,110,122,0.15);
}
.pg-val-card__icon {
  width: 46px; height: 46px; border-radius: 10px;
  background: rgba(84,110,122,0.15); color: var(--pl);
  display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;
}
.pg-val-card__titulo { font-size: 1rem; font-weight: 700; color: #fff; margin: 0 0 0.6rem; }
.pg-val-card__desc { font-size: 0.85rem; color: rgba(255,255,255,0.52); line-height: 1.6; margin: 0; }

@media (max-width: 1024px) {
  .pg-welcome__cards { grid-template-columns: repeat(2, 1fr); }
  .pg-welcome__intro { grid-template-columns: 1fr; gap: 1.5rem; }
}
@media (max-width: 560px) { .pg-welcome__cards { grid-template-columns: 1fr; } }
</style>
