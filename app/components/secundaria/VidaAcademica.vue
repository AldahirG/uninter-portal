<script setup lang="ts">
import { Quote, Lightbulb, Globe, Music, Dumbbell, FlaskConical } from "lucide-vue-next";

const pilares = [
  { icon: FlaskConical, label: "Ciencias y Tecnología" },
  { icon: Globe,        label: "Internacionalización" },
  { icon: Music,        label: "Arte y Cultura" },
  { icon: Dumbbell,     label: "Deporte y Bienestar" },
];
</script>

<template>
  <section class="siu-va">
    <!-- Sección principal -->
    <div class="siu-va__main">
      <div class="siu-container siu-va__grid">
        <!-- Texto izquierda -->
        <div class="siu-va__left">
          <p class="siu-va__eyebrow">Vida académica</p>
          <h2 class="siu-va__title">
            En SIU te ofrecemos<br />
            <em class="siu-va__accent">experiencias únicas</em>
          </h2>
          <p class="siu-va__text">
            En SIU te ofrecemos comodidades únicas: intercambio internacional y relación directa con
            otras culturas a través de la Universidad Internacional, con más de 40 años de experiencia
            educativa a nivel internacional y amplio reconocimiento mundial.
          </p>
          <p class="siu-va__text">
            La Universidad Internacional, con más de 40 años de experiencia educativa a nivel
            internacional y amplio reconocimiento mundial, es la respuesta a las necesidades de la
            comunidad monterense, formando jóvenes con gran sentido de integración y permanencia.
          </p>
          <blockquote class="siu-va__quote">
            <Quote :size="20" class="siu-va__quote-icon" aria-hidden="true" />
            Alumno en tránsito integral es un proceso, entendiendo y desarrollando sus conocimientos y
            habilidades propias de su clase y edad, fortaleciendo sus diferencias, cualidades y
            fortalezas, y contribuyendo con la formación de sus alumnos.
          </blockquote>
          <p class="siu-va__text siu-va__text--muted">
            Nuestra SEP cuenta con el Registro de Validez Oficial de Educación: RVOE 27100178
          </p>
        </div>

        <!-- Imagen derecha -->
        <div class="siu-va__img-wrap">
          <img
            src="/images/hero/licenciaturas.jpg"
            alt="Vida académica SIU"
            class="siu-va__img"
            loading="lazy"
          />
          <div class="siu-va__img-badge">
            <span class="badge-num">40+</span>
            <span class="badge-lbl">años de<br />experiencia</span>
          </div>
        </div>
      </div>
    </div>

    <!-- MDCT — Pilares académicos -->
    <div class="siu-va__pillars">
      <div class="siu-container">
        <div class="siu-va__pillars-inner">
          <div class="siu-va__pillars-text">
            <p class="siu-va__pillars-eyebrow">Modelo Académico</p>
            <h3 class="siu-va__pillars-title">Blended-Flex Learning</h3>
            <p class="siu-va__pillars-desc">
              UNINTER es la manera conceptualizada es nuestro modelo pedagógico a
              través del cual formamos alumnos capaces de aprender en cualquier momento,
              desarrollando tanto el potencial y el activo como un equilibrio de
              competencias.
            </p>
          </div>
          <div class="siu-va__pillars-grid">
            <div v-for="p in pilares" :key="p.label" class="siu-pilar">
              <div class="siu-pilar__icon">
                <component :is="p.icon" :size="22" />
              </div>
              <span class="siu-pilar__label">{{ p.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.siu-va {
  --s: #ECAB00;
  --sd: #C49000;
  --sbg: #1a1500;
}
.siu-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Sección principal */
.siu-va__main {
  background: #fff;
  padding: 5.5rem 0;
}
.siu-va__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.siu-va__eyebrow {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--s);
  margin: 0 0 0.6rem;
}
.siu-va__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 800;
  color: #1a1500;
  margin: 0 0 1.5rem;
  line-height: 1.2;
}
.siu-va__accent {
  font-style: italic;
  color: var(--s);
}
.siu-va__text {
  font-size: 0.92rem;
  color: #555;
  line-height: 1.72;
  margin: 0 0 1rem;
}
.siu-va__text--muted {
  font-size: 0.8rem;
  color: #999;
  margin-top: 1.25rem;
}

.siu-va__quote {
  border-left: 3px solid var(--s);
  padding: 1rem 1.25rem;
  background: #fffbf0;
  border-radius: 0 10px 10px 0;
  margin: 1.5rem 0;
  font-size: 0.88rem;
  color: #444;
  line-height: 1.7;
  font-style: italic;
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}
.siu-va__quote-icon {
  color: var(--s);
  flex-shrink: 0;
  margin-top: 0.1rem;
}

/* Imagen derecha */
.siu-va__img-wrap {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0,0,0,0.12);
}
.siu-va__img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  display: block;
}
.siu-va__img-badge {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
  background: var(--s);
  color: #1a1500;
  border-radius: 12px;
  padding: 0.75rem 1.25rem;
  text-align: center;
  box-shadow: 0 4px 16px rgba(236,171,0,0.35);
}
.badge-num {
  display: block;
  font-size: 1.8rem;
  font-weight: 900;
  line-height: 1;
}
.badge-lbl {
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  line-height: 1.3;
}

/* Pilares */
.siu-va__pillars {
  background: var(--sbg);
  padding: 4rem 0;
}
.siu-va__pillars-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}
.siu-va__pillars-eyebrow {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--s);
  margin: 0 0 0.5rem;
}
.siu-va__pillars-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.5rem, 3vw, 2.1rem);
  font-weight: 800;
  color: #fff;
  margin: 0 0 1rem;
}
.siu-va__pillars-desc {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.6);
  line-height: 1.7;
  margin: 0;
}

.siu-va__pillars-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}
.siu-pilar {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(236,171,0,0.15);
  border-radius: 12px;
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
  text-align: center;
  transition: background 0.2s, border-color 0.2s;
}
.siu-pilar:hover {
  background: rgba(236,171,0,0.08);
  border-color: var(--s);
}
.siu-pilar__icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(236,171,0,0.12);
  color: var(--s);
  display: flex;
  align-items: center;
  justify-content: center;
}
.siu-pilar__label {
  font-size: 0.82rem;
  font-weight: 700;
  color: rgba(255,255,255,0.85);
}

@media (max-width: 1024px) {
  .siu-va__grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .siu-va__pillars-inner { grid-template-columns: 1fr; }
}
</style>
