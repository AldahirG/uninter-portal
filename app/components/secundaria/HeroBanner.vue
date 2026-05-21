<script setup lang="ts">
import { BookOpen, Atom, Languages, GraduationCap } from "lucide-vue-next";

const stats = [
  { value: "2",    label: "Modalidades disponibles" },
  { value: "3",    label: "Años de duración" },
  { value: "100%", label: "Bilingüe" },
  { value: "45+",  label: "Actividades extracurriculares" },
];
</script>

<template>
  <section class="siu-hero">
    <div class="siu-hero__bg">
      <img
        src="/images/hero/licenciaturasPresenciales.jpg"
        alt="Estudiantes SIU UNINTER"
        class="siu-hero__img"
      />
      <div class="siu-hero__overlay"></div>
    </div>

    <!-- Elementos decorativos flotantes -->
    <div class="siu-hero__deco siu-hero__deco--tl" aria-hidden="true">
      <Atom :size="34" />
    </div>
    <div class="siu-hero__deco siu-hero__deco--tr" aria-hidden="true">
      <BookOpen :size="30" />
    </div>
    <div class="siu-hero__deco siu-hero__deco--br" aria-hidden="true">
      <Languages :size="28" />
    </div>

    <!-- Sticker HOLA / HELLO -->
    <div class="siu-hero__sticker siu-hero__sticker--hola" aria-hidden="true">
      <span class="sticker-line">HOLA</span>
      <span class="sticker-arrow">↙</span>
      <span class="sticker-line sticker-line--en">HELLO</span>
    </div>

    <!-- Contenido -->
    <div class="siu-container siu-hero__content">
      <div class="siu-hero__inner">
        <div class="siu-hero__eyebrow">
          <img src="/images/logo-uninter.png" alt="SIU" class="siu-hero__logo" onerror="this.style.display='none'" />
          <span>Secundaria Internacional UNINTER</span>
        </div>

        <p class="siu-hero__tagline">CONOCE LO QUE SIU TIENE PARA TI</p>

        <h1 class="siu-hero__title">
          <span class="siu-hero__title-main">SECUNDARIA</span>
          <span class="siu-hero__title-sub">Bilingüe &amp; Multicultural</span>
        </h1>

        <p class="siu-hero__desc">
          Formamos jóvenes con visión global, desarrollo de habilidades
          culturales, artísticas y deportivas en un entorno internacional
          con más de 40 años de experiencia educativa.
        </p>

        <div class="siu-hero__ctas">
          <a href="https://siu.uninter.edu.mx/" target="_blank" class="siu-btn siu-btn--primary">
            Conoce SIU
          </a>
          <a href="#oferta-siu" class="siu-btn siu-btn--ghost">
            Ver modalidades
          </a>
        </div>
      </div>
    </div>

    <!-- Stats strip -->
    <div class="siu-hero__stats-bar">
      <div class="siu-container siu-hero__stats-inner">
        <div v-for="stat in stats" :key="stat.label" class="siu-stat">
          <span class="siu-stat__value">{{ stat.value }}</span>
          <span class="siu-stat__label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.siu-hero {
  --s: #ECAB00;
  --sd: #C49000;
  --sl: #F5C842;
  --sbg: #1a1500;
}

.siu-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.siu-hero {
  position: relative;
  height: clamp(520px, 68vh, 680px);
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--sbg);
}

.siu-hero__bg {
  position: absolute;
  inset: 0;
}
.siu-hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  animation: kb 14s ease-out forwards;
}
@keyframes kb {
  from { transform: scale(1); }
  to   { transform: scale(1.06); }
}
.siu-hero__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(115deg, rgba(26,18,0,0.93) 0%, rgba(26,18,0,0.72) 50%, rgba(26,18,0,0.3) 100%),
    linear-gradient(to top, rgba(26,18,0,0.9) 0%, transparent 55%);
}

/* Decorativos */
.siu-hero__deco {
  position: absolute;
  z-index: 2;
  opacity: 0.14;
  color: #ECAB00;
}
.siu-hero__deco--tl { top: 14%; left: 5%; }
.siu-hero__deco--tr { top: 10%; right: 8%; }
.siu-hero__deco--br { bottom: 20%; right: 12%; }

/* Sticker HOLA/HELLO */
.siu-hero__sticker {
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  transform: rotate(-8deg);
  opacity: 0.88;
}
.siu-hero__sticker--hola {
  top: 16%;
  right: 28%;
}
.sticker-line {
  background: #fff;
  color: #1a1500;
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  font-weight: 900;
  letter-spacing: 0.08em;
  padding: 0.25rem 0.9rem;
  border-radius: 6px;
  box-shadow: 2px 3px 8px rgba(0,0,0,0.35);
  line-height: 1;
}
.sticker-line--en {
  background: var(--s);
  color: #fff;
}
.sticker-arrow {
  font-size: 1.2rem;
  color: #fff;
  font-weight: 900;
  line-height: 1;
}

/* Contenido */
.siu-hero__content {
  position: relative;
  z-index: 3;
  width: 100%;
  padding-bottom: 7rem;
}
.siu-hero__inner {
  max-width: 640px;
}

.siu-hero__eyebrow {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 1rem;
}
.siu-hero__logo {
  height: 32px;
  object-fit: contain;
}
.siu-hero__eyebrow span {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--sl);
}

.siu-hero__tagline {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.5);
  margin: 0 0 1rem;
}

.siu-hero__title {
  display: flex;
  flex-direction: column;
  margin: 0 0 1.5rem;
  line-height: 1.0;
}
.siu-hero__title-main {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 900;
  color: var(--s);
  letter-spacing: -0.02em;
  text-shadow: 0 4px 24px rgba(236,171,0,0.3);
}
.siu-hero__title-sub {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.2rem, 2.5vw, 1.9rem);
  font-weight: 600;
  color: rgba(255,255,255,0.9);
  letter-spacing: 0.05em;
  margin-top: 0.25rem;
}

.siu-hero__desc {
  font-size: clamp(0.9rem, 1.4vw, 1rem);
  color: rgba(255,255,255,0.65);
  line-height: 1.65;
  margin: 0 0 2rem;
  max-width: 520px;
}

.siu-hero__ctas {
  display: flex;
  gap: 0.875rem;
  flex-wrap: wrap;
}
.siu-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
}
.siu-btn--primary {
  background: var(--s);
  color: #1a1500;
  border: 2px solid var(--s);
}
.siu-btn--primary:hover {
  background: var(--sd);
  border-color: var(--sd);
  transform: translateY(-2px);
}
.siu-btn--ghost {
  background: transparent;
  color: #fff;
  border: 2px solid rgba(255,255,255,0.4);
}
.siu-btn--ghost:hover {
  border-color: rgba(255,255,255,0.85);
  background: rgba(255,255,255,0.08);
}

/* Stats strip */
.siu-hero__stats-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255,255,255,0.07);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid rgba(255,255,255,0.12);
  z-index: 4;
}
.siu-hero__stats-inner {
  display: flex;
  align-items: stretch;
}
.siu-stat {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  border-right: 1px solid rgba(255,255,255,0.1);
  gap: 0.2rem;
}
.siu-stat:last-child { border-right: none; }
.siu-stat__value {
  font-size: clamp(1.4rem, 2.5vw, 1.9rem);
  font-weight: 900;
  color: var(--s);
  line-height: 1;
}
.siu-stat__label {
  font-size: 0.65rem;
  color: rgba(255,255,255,0.55);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  text-align: center;
}

@media (max-width: 768px) {
  .siu-hero { height: clamp(460px, 70vh, 580px); }
  .siu-hero__content { padding-bottom: 11rem; }
  .siu-hero__sticker--hola { display: none; }
  .siu-hero__stats-inner { flex-wrap: wrap; }
  .siu-stat {
    flex: 1 1 50%;
    border-right: none;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
  .siu-stat:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.1); }
  .siu-stat:nth-last-child(-n+2) { border-bottom: none; }
}
@media (max-width: 480px) {
  .siu-hero__ctas { flex-direction: column; }
  .siu-hero__title-main { font-size: clamp(2.5rem, 12vw, 4rem); }
}
</style>
