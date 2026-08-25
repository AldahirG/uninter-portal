<script setup lang="ts">
import { BookOpen, Atom, Languages, Info } from "lucide-vue-next";
</script>

<template>
  <div class="pa-hero-wrapper">
    <section class="pa-hero">
      <div class="pa-hero__bg">
        <!-- Using a placeholder or generic image as requested -->
        <img
          src="/images/hero/blur/1.jpg"
          alt="Estudiantes Prepa Abierta"
          class="pa-hero__img"
        />
        <div class="pa-hero__overlay"></div>
        <div class="pa-hero__overlay2"></div>
      </div>

      <!-- Elementos decorativos flotantes -->
      <div class="pa-hero__deco pa-hero__deco--tl" aria-hidden="true">
        <Atom :size="34" />
      </div>
      <div class="pa-hero__deco pa-hero__deco--tr" aria-hidden="true">
        <BookOpen :size="30" />
      </div>
      <div class="pa-hero__deco pa-hero__deco--br" aria-hidden="true">
        <Languages :size="28" />
      </div>

      <!-- Contenido -->
      <div class="pa-wrap pa-hero__content">
        <div class="pa-hero__inner">
          <div class="pa-hero__eyebrow">
            <img
              src="/images/hero/logo-blanco.svg"
              alt="UNINTER"
              class="pa-hero__logo-full"
            />
          </div>
          <h1 class="pa-hero__title">
            <span class="pa-hero__title-main">Prepa Abierta</span>
            <span class="pa-hero__title-sub">Centro de Asesoría.</span>
          </h1>

          <p class="pa-hero__desc">
            Formamos jóvenes con visión global, desarrollo de habilidades
            culturales, artísticas y deportivas en un entorno internacional con
            más de 40 años de experiencia educativa.
          </p>

          <div class="pa-hero__ctas">
            <a href="#oferta-prepaA" class="pa-btn-card">
              <div class="btn-icon">
                <BookOpen :size="28" :stroke-width="1.8" />
              </div>
              <span>Ver Plan de Estudios</span>
            </a>
            <a
              href="https://prepaabierta.uninter.edu.mx/"
              target="_blank"
              class="pa-btn-card"
            >
              <div class="btn-icon">
                <Info :size="28" :stroke-width="1.8" />
              </div>
              <span>Conoce Prepa Abierta</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats strip -->
    <div class="pa-hero__stats-bar">
      <div class="pa-wrap pa-hero__stats-inner">
        <!-- 1. 40 Años de Prestigio -->
        <div class="pa-stat">
          <div class="pa-stat__icon">
            <Icon name="mdi:shield-star-outline" size="28" />
          </div>
          <div class="pa-stat__text">
            <span class="pa-stat__value">+40 Años</span>
            <span class="pa-stat__label">de Prestigio</span>
          </div>
        </div>

        <!-- 2. 22 Módulos en el Plan de Estudios -->
        <div class="pa-stat">
          <div class="pa-stat__icon">
            <Icon name="mdi:book-open-page-variant-outline" size="28" />
          </div>
          <div class="pa-stat__text">
            <span class="pa-stat__value">22 Módulos</span>
            <span class="pa-stat__label">en el Plan de Estudios</span>
          </div>
        </div>

        <!-- 3. Actividades Extracurriculares -->
        <div class="pa-stat">
          <div class="pa-stat__icon">
            <Icon name="mdi:basketball" size="28" />
          </div>
          <div class="pa-stat__text">
            <span class="pa-stat__value">Actividades</span>
            <span class="pa-stat__label">Extracurriculares</span>
          </div>
        </div>

        <!-- 4. Modalidades Flexibles -->
        <div class="pa-stat">
          <div class="pa-stat__icon">
            <Icon name="mdi:clock-fast" size="28" />
          </div>
          <div class="pa-stat__text">
            <span class="pa-stat__value">Modalidades</span>
            <span class="pa-stat__label">Flexibles</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Leyenda Oficial SEP -->
    <div class="pa-hero__disclaimer-strip">
      <div class="pa-wrap pa-hero__disclaimer-inner">
        <Icon name="mdi:shield-check-outline" size="18" class="pa-disclaimer-icon" />
        <p class="pa-disclaimer-text">
          La Inscripción, Acreditación y Certificación son responsabilidad exclusiva de la <strong>Secretaría de Educación Pública</strong>.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pa-wrap {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.pa-hero-wrapper {
  --primary-aqua: #51CAB9;
  --dark-teal: #358880;
  --bg-dark: #0a1a18;
  background-color: var(--bg-dark);
}

.pa-hero {
  align-items: center;
  background: transparent;
  display: flex;
  height: clamp(520px, 68vh, 680px);
  overflow: hidden;
  position: relative;
}

.pa-hero__bg {
  inset: 0;
  position: absolute;
}

.pa-hero__img {
  animation: kb-zoom 14s ease-out forwards;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  width: 100%;
}

@keyframes kb-zoom {
  0% { transform: scale(1); }
  100% { transform: scale(1.05); }
}

/* Doble Capa: Blur + Gradiente aqua */
.pa-hero__overlay {
  background: linear-gradient(180deg, rgba(10, 26, 24, 0.4), rgba(10, 26, 24, 0.1) 50%, rgba(10, 26, 24, 0.1));
  inset: 0;
  position: absolute;
}

.pa-hero__overlay2 {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background: linear-gradient(
    90deg,
    rgba(10, 26, 24, 0.9),
    rgba(10, 26, 24, 0.7) 35%,
    rgba(53, 136, 128, 0.25) 50%,
    transparent 65%
  );
  inset: 0;
  mask-image: linear-gradient(90deg, #000, #000 40%, transparent 60%);
  -webkit-mask-image: linear-gradient(90deg, #000, #000 40%, transparent 60%);
  position: absolute;
}

.pa-hero__content {
  position: relative;
  width: 100%;
  z-index: 3;
}

.pa-hero__inner {
  max-width: 640px;
}

.pa-hero__eyebrow {
  align-items: center;
  display: flex;
  margin-bottom: 2rem;
}

.pa-hero__logo-full {
  height: 48px;
  object-fit: contain;
}

.pa-hero__title {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
  margin: 0 0 1.5rem;
}

.pa-hero__title-main {
  color: #51CAB9;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 24px rgba(81, 202, 185, 0.4);
}

.pa-hero__title-sub {
  color: #ffffff;
  font-family: var(--font-sans, "Plus Jakarta Sans", sans-serif);
  font-size: clamp(1.2rem, 2.2vw, 1.85rem);
  font-weight: 800;
  letter-spacing: 0.02em;
  margin-top: 0.35rem;
  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.45);
}

.pa-hero__desc {
  color: rgba(255, 255, 255, 0.85);
  font-size: clamp(0.95rem, 1.4vw, 1.1rem);
  line-height: 1.65;
  margin: 0 0 2.5rem;
  max-width: 520px;
}

.pa-hero__ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
}

/* Botones Apilados (Stacked Cards) */
.pa-btn-card {
  align-items: center;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 12px;
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 0.95rem;
  font-weight: 700;
  gap: 0.65rem;
  justify-content: center;
  min-width: 175px;
  padding: 1.1rem 1.6rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}

.pa-btn-card:hover {
  background: rgba(81, 202, 185, 0.25);
  border-color: #51CAB9;
  color: #51CAB9;
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(81, 202, 185, 0.35);
}

.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ── Elementos Flotantes ── */
.pa-hero__deco {
  position: absolute;
  color: #51CAB9;
  opacity: 0.6;
  animation: float 6s ease-in-out infinite;
  z-index: 2;
  filter: drop-shadow(0 0 10px rgba(81, 202, 185, 0.35));
}
.pa-hero__deco--tl { top: 15%; left: 45%; animation-delay: 0s; }
.pa-hero__deco--tr { top: 25%; right: 15%; animation-delay: 2s; }
.pa-hero__deco--br { bottom: 30%; right: 25%; animation-delay: 4s; }

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(5deg); }
}

/* ── Barra de Estadísticas (Liquid Glass Bar) ── */
.pa-hero__stats-bar {
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
  background-attachment: fixed;
  background-color: rgba(10, 26, 24, 0.85); /* Fondo Base Oscuro */
  background-image: radial-gradient(
    circle at 50% 50%,
    rgba(81, 202, 185, 0.18) 0, /* Destello Radial Central */
    transparent 65%
  );
  background-position: 50%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  border-top: 2px solid rgba(81, 202, 185, 0.35);
  box-shadow: 
    0 -10px 30px rgba(53, 136, 128, 0.2), 
    inset 0 20px 40px rgba(81, 202, 185, 0.05);
  padding: 1.75rem 0;
  position: relative;
  z-index: 10;
}

.pa-hero__stats-inner {
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}

.pa-stat {
  align-items: center;
  border-right: 1px solid rgba(81, 202, 185, 0.25); /* Separadores luminosos */
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 1.2rem;
  justify-content: center;
  padding: 0 1.5rem;
}
.pa-stat:last-child {
  border-right: none;
}

.pa-stat__icon {
  align-items: center;
  color: #51CAB9;
  display: flex;
  justify-content: center;
}

.pa-stat__text {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}

.pa-stat__value {
  color: #fff;
  font-size: clamp(1.1rem, 1.4vw, 1.3rem);
  font-weight: 800;
  line-height: 1.1;
}

.pa-stat__label {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.85rem;
  font-weight: 600;
  margin-top: 0.2rem;
}

/* ── Franja de Leyenda Oficial SEP ── */
.pa-hero__disclaimer-strip {
  background: #061210;
  border-top: 1px solid rgba(81, 202, 185, 0.2);
  padding: 0.75rem 0;
  position: relative;
  z-index: 10;
}

.pa-hero__disclaimer-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  text-align: center;
}

.pa-disclaimer-icon {
  color: #51CAB9;
  flex-shrink: 0;
}

.pa-disclaimer-text {
  font-size: 0.82rem;
  color: rgba(255, 255, 255, 0.82);
  margin: 0;
  line-height: 1.45;
  letter-spacing: 0.01em;
}

.pa-disclaimer-text strong {
  color: #51CAB9;
  font-weight: 700;
}

@media (max-width: 992px) {
  .pa-hero__stats-inner { flex-wrap: wrap; gap: 1.5rem 0; }
  .pa-stat { flex: 1 1 50%; border-right: none; border-bottom: 1px solid rgba(81, 202, 185, 0.2); padding-bottom: 1.5rem; }
  .pa-stat:nth-child(odd) { border-right: 1px solid rgba(81, 202, 185, 0.2); }
  .pa-stat:nth-last-child(-n+2) { border-bottom: none; padding-bottom: 0; }
}

@media (max-width: 640px) {
  .pa-hero__title-main { font-size: 2.8rem; }
  .pa-hero__title-sub { font-size: 1.15rem; }
  .pa-hero__disclaimer-inner { flex-direction: column; gap: 0.35rem; }
  .pa-stat { flex: 1 1 100%; border-right: none !important; border-bottom: 1px solid rgba(81, 202, 185, 0.2) !important; padding-bottom: 1.25rem !important; }
  .pa-stat:last-child { border-bottom: none !important; padding-bottom: 0 !important; }
  .pa-hero__deco { display: none; }
}
</style>
