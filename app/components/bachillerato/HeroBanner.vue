<script setup lang="ts">
import { BookOpen, FlaskConical, Globe, GraduationCap } from "lucide-vue-next";

const stats = [
  { value: "2",     label: "Modalidades disponibles" },
  { value: "3",     label: "Años de duración" },
  { value: "49+",   label: "Materias en inglés" },
  { value: "100%",  label: "Enfoque bilingüe" },
];
</script>

<template>
  <section class="biu-hero">
    <div class="biu-hero__bg">
      <img
        src="/images/hero/licenciaturasPresenciales.jpg"
        alt="Estudiantes BIU UNINTER"
        class="biu-hero__img"
      />
      <div class="biu-hero__overlay"></div>
    </div>

    <!-- Elementos decorativos flotantes -->
    <div class="biu-hero__deco biu-hero__deco--tl" aria-hidden="true">
      <FlaskConical :size="32" />
    </div>
    <div class="biu-hero__deco biu-hero__deco--tr" aria-hidden="true">
      <BookOpen :size="28" />
    </div>
    <div class="biu-hero__deco biu-hero__deco--br" aria-hidden="true">
      <Globe :size="26" />
    </div>

    <!-- Contenido -->
    <div class="biu-container biu-hero__content">
      <div class="biu-hero__inner">
        <!-- Eyebrow -->
        <div class="biu-hero__eyebrow">
          <img src="/images/logo-uninter.png" alt="BIU" class="biu-hero__logo" onerror="this.style.display='none'" />
          <span>Bachillerato Internacional UNINTER</span>
        </div>

        <!-- Tagline -->
        <p class="biu-hero__tagline">CONOCE LO QUE BIU TIENE PARA TI</p>

        <!-- Título principal -->
        <h1 class="biu-hero__title">
          <span class="biu-hero__title-main">BACHILLERATO</span>
          <span class="biu-hero__title-sub">Bilingüe &amp; Multicultural</span>
        </h1>

        <p class="biu-hero__desc">
          Prepárate para el futuro con una formación académica de excelencia
          en un ambiente internacional. Domina el inglés, desarrolla habilidades
          tecnológicas y conecta con el mundo desde Cuernavaca.
        </p>

        <div class="biu-hero__ctas">
          <a
            href="https://biu.uninter.edu.mx/"
            target="_blank"
            class="biu-btn biu-btn--primary"
          >
            Conoce BIU
          </a>
          <a href="#oferta-biu" class="biu-btn biu-btn--ghost">
            Ver modalidades
          </a>
        </div>
      </div>
    </div>

    <!-- Strip de stats -->
    <div class="biu-hero__stats-bar">
      <div class="biu-container biu-hero__stats-inner">
        <div v-for="stat in stats" :key="stat.label" class="biu-stat">
          <span class="biu-stat__value">{{ stat.value }}</span>
          <span class="biu-stat__label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Variables BIU */
.biu-hero {
  --g: #6BAF04;
  --gd: #4A7A02;
  --gl: #7BC905;
  --ga: #A8D86E;
}

.biu-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Hero wrapper */
.biu-hero {
  position: relative;
  height: clamp(520px, 68vh, 680px);
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #0d1f0e;
}

/* Fondo */
.biu-hero__bg {
  position: absolute;
  inset: 0;
}
.biu-hero__img {
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
.biu-hero__overlay {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(115deg, rgba(13,31,14,0.92) 0%, rgba(13,31,14,0.7) 50%, rgba(13,31,14,0.3) 100%),
    linear-gradient(to top, rgba(13,31,14,0.88) 0%, transparent 55%);
}

/* Elementos decorativos */
.biu-hero__deco {
  position: absolute;
  z-index: 2;
  opacity: 0.12;
  color: #A8D86E;
}
.biu-hero__deco--tl { top: 14%; left: 5%; }
.biu-hero__deco--tr { top: 10%; right: 8%; }
.biu-hero__deco--br { bottom: 20%; right: 12%; }

/* Contenido */
.biu-hero__content {
  position: relative;
  z-index: 3;
  width: 100%;
  padding-bottom: 7rem;
}

.biu-hero__inner {
  max-width: 640px;
}

/* Eyebrow */
.biu-hero__eyebrow {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 1rem;
}
.biu-hero__logo {
  height: 32px;
  object-fit: contain;
}
.biu-hero__eyebrow span {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ga);
}

/* Tagline */
.biu-hero__tagline {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.55);
  margin: 0 0 1rem;
}

/* Título */
.biu-hero__title {
  display: flex;
  flex-direction: column;
  margin: 0 0 1.5rem;
  line-height: 1.0;
}
.biu-hero__title-main {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 900;
  color: var(--ga);
  letter-spacing: -0.02em;
  text-shadow: 0 4px 24px rgba(168,216,110,0.25);
}
.biu-hero__title-sub {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.2rem, 2.5vw, 1.9rem);
  font-weight: 600;
  color: rgba(255,255,255,0.9);
  letter-spacing: 0.05em;
  margin-top: 0.25rem;
}

/* Descripción */
.biu-hero__desc {
  font-size: clamp(0.9rem, 1.4vw, 1rem);
  color: rgba(255,255,255,0.68);
  line-height: 1.65;
  margin: 0 0 2rem;
  max-width: 520px;
}

/* CTAs */
.biu-hero__ctas {
  display: flex;
  gap: 0.875rem;
  flex-wrap: wrap;
}
.biu-btn {
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
.biu-btn--primary {
  background: var(--g);
  color: #fff;
  border: 2px solid var(--g);
}
.biu-btn--primary:hover {
  background: var(--gd);
  border-color: var(--gd);
  transform: translateY(-2px);
}
.biu-btn--ghost {
  background: transparent;
  color: #fff;
  border: 2px solid rgba(255,255,255,0.4);
}
.biu-btn--ghost:hover {
  border-color: rgba(255,255,255,0.85);
  background: rgba(255,255,255,0.08);
}

/* Stats strip */
.biu-hero__stats-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255,255,255,0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid rgba(255,255,255,0.12);
  z-index: 4;
}
.biu-hero__stats-inner {
  display: flex;
  align-items: stretch;
}
.biu-stat {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  border-right: 1px solid rgba(255,255,255,0.1);
  gap: 0.2rem;
}
.biu-stat:last-child { border-right: none; }
.biu-stat__value {
  font-size: clamp(1.4rem, 2.5vw, 1.9rem);
  font-weight: 900;
  color: var(--ga);
  line-height: 1;
}
.biu-stat__label {
  font-size: 0.65rem;
  color: rgba(255,255,255,0.55);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .biu-hero { height: clamp(460px, 70vh, 580px); }
  .biu-hero__content { padding-bottom: 11rem; }
  .biu-hero__stats-inner { flex-wrap: wrap; }
  .biu-stat {
    flex: 1 1 50%;
    border-right: none;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
  .biu-stat:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.1); }
  .biu-stat:nth-last-child(-n+2) { border-bottom: none; }
}
@media (max-width: 480px) {
  .biu-hero__ctas { flex-direction: column; }
  .biu-hero__title-main { font-size: clamp(2.5rem, 12vw, 4rem); }
}
</style>
