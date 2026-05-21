<script setup lang="ts">
import { Globe, Users, Lightbulb, Trophy } from "lucide-vue-next";

const valores = [
  {
    icon: Globe,
    titulo: "Visión internacional",
    desc: "Formación con perspectiva global desde secundaria, conectando culturas y fomentando la apertura al mundo.",
  },
  {
    icon: Users,
    titulo: "Comunidad multicultural",
    desc: "Convive con jóvenes de distintas culturas, razas, lenguas y realidades en un ambiente de integración y respeto.",
  },
  {
    icon: Lightbulb,
    titulo: "Tecnología integrada",
    desc: "Herramientas digitales, laboratorios de innovación y metodologías activas que desarrollan el pensamiento crítico.",
  },
  {
    icon: Trophy,
    titulo: "Desarrollo deportivo",
    desc: "Programas atléticos, artísticos y culturales que complementan la formación académica integral del alumno.",
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
            <h2 class="siu-welcome__title">Comunidad SIU UNINTER</h2>
          </div>
          <p class="siu-welcome__desc">
            En SIU te ofrecemos comodidades únicas: intercambio internacional y relación directa con otras culturas a través de la
            Universidad Internacional, con más de 40 años de experiencia educativa a nivel internacional y amplio reconocimiento
            mundial. Somos respuesta a las necesidades de la comunidad monterense, formando jóvenes con gran sentido de integración
            y permanencia. De esta manera formamos integralmente a los jóvenes, entendiendo y aceptando sus diferencias, cualidades
            y fortalezas, y contribuyendo con la formación de sus alumnos para alcanzar el clima fin para que puedan crecer.
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
  --s: #ECAB00;
  --sd: #C49000;
  --sbg: #1a1500;
}
.siu-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Banda superior oscura */
.siu-welcome__top {
  background: var(--sbg);
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
  color: #fff;
  margin: 0;
  line-height: 1.15;
}
.siu-welcome__desc {
  font-size: 0.95rem;
  line-height: 1.75;
  color: rgba(255,255,255,0.65);
  margin: 0;
  padding-top: 1.6rem;
  border-top: 2px solid var(--s);
}

/* Cards */
.siu-welcome__cards-wrap {
  background: #212121;
  padding: 3.5rem 0;
}
.siu-welcome__cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.siu-val-card {
  background: #2a2a2a;
  border: 1px solid rgba(236,171,0,0.15);
  border-radius: 14px;
  padding: 1.75rem 1.5rem;
  transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s;
}
.siu-val-card:hover {
  transform: translateY(-5px);
  border-color: var(--s);
  box-shadow: 0 12px 32px rgba(236,171,0,0.12);
}
.siu-val-card__icon {
  width: 46px;
  height: 46px;
  border-radius: 10px;
  background: rgba(236,171,0,0.12);
  color: var(--s);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}
.siu-val-card__titulo {
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.6rem;
}
.siu-val-card__desc {
  font-size: 0.85rem;
  color: rgba(255,255,255,0.55);
  line-height: 1.6;
  margin: 0;
}

@media (max-width: 1024px) {
  .siu-welcome__cards { grid-template-columns: repeat(2, 1fr); }
  .siu-welcome__intro { grid-template-columns: 1fr; gap: 1.5rem; }
}
@media (max-width: 560px) {
  .siu-welcome__cards { grid-template-columns: 1fr; }
}
</style>
