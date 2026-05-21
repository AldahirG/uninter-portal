<script setup lang="ts">
import { BookOpen, Award, FlaskConical, GraduationCap } from "lucide-vue-next";

const stats = [
  { value: "40+",  label: "Años de experiencia" },
  { value: "6",    label: "Áreas de conocimiento" },
  { value: "130+", label: "Universidades socias" },
  { value: "25",   label: "Países de intercambio" },
];
</script>

<template>
  <section class="pg-hero">
    <div class="pg-hero__bg">
      <img
        src="/images/hero/licenciaturasPresenciales.jpg"
        alt="Estudiantes Posgrados UNINTER"
        class="pg-hero__img"
      />
      <div class="pg-hero__overlay"></div>
    </div>

    <!-- Decorativos -->
    <div class="pg-hero__deco pg-hero__deco--tl" aria-hidden="true"><GraduationCap :size="34" /></div>
    <div class="pg-hero__deco pg-hero__deco--tr" aria-hidden="true"><BookOpen :size="30" /></div>
    <div class="pg-hero__deco pg-hero__deco--br" aria-hidden="true"><FlaskConical :size="28" /></div>

    <!-- Sticker DOCTORADOS -->
    <div class="pg-hero__sticker" aria-hidden="true">
      <span class="pg-sticker-line">DR.</span>
      <span class="pg-sticker-arrow">↙</span>
      <span class="pg-sticker-line pg-sticker-line--accent">MSC.</span>
    </div>

    <!-- Contenido -->
    <div class="pg-container pg-hero__content">
      <div class="pg-hero__inner">
        <div class="pg-hero__eyebrow">
          <img src="/images/logo-uninter.png" alt="UNINTER" class="pg-hero__logo" onerror="this.style.display='none'" />
          <span>Posgrados UNINTER</span>
        </div>

        <p class="pg-hero__tagline">CONOCE LO QUE POSGRADOS TIENE PARA TI</p>

        <h1 class="pg-hero__title">
          <span class="pg-hero__title-main">POSGRADOS</span>
          <span class="pg-hero__title-sub">Especialidades · Maestrías · Doctorados</span>
        </h1>

        <p class="pg-hero__desc">
          Impulsa tu desarrollo profesional con programas de excelencia
          académica a nivel internacional. Más de 40 años formando líderes
          con visión global y perfil investigador.
        </p>

        <div class="pg-hero__ctas">
          <NuxtLink to="/posgrados/admisiones" class="pg-btn pg-btn--primary">
            Proceso de Admisión
          </NuxtLink>
          <a href="https://posgrados.uninter.edu.mx/" target="_blank" class="pg-btn pg-btn--ghost">
            Ver programas
          </a>
        </div>
      </div>
    </div>

    <!-- Stats strip -->
    <div class="pg-hero__stats-bar">
      <div class="pg-container pg-hero__stats-inner">
        <div v-for="stat in stats" :key="stat.label" class="pg-stat">
          <span class="pg-stat__value">{{ stat.value }}</span>
          <span class="pg-stat__label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pg-hero {
  --p: #546E7A;
  --pd: #37474F;
  --pl: #78909C;
  --pbg: #0f1a22;
  position: relative;
  height: clamp(520px, 68vh, 680px);
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--pbg);
}
.pg-container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }

.pg-hero__bg { position: absolute; inset: 0; }
.pg-hero__img {
  width: 100%; height: 100%; object-fit: cover; object-position: center top;
  animation: kb 14s ease-out forwards;
}
@keyframes kb { from { transform: scale(1); } to { transform: scale(1.06); } }
.pg-hero__overlay {
  position: absolute; inset: 0;
  background:
    linear-gradient(115deg, rgba(15,26,34,0.94) 0%, rgba(15,26,34,0.74) 50%, rgba(15,26,34,0.3) 100%),
    linear-gradient(to top, rgba(15,26,34,0.92) 0%, transparent 55%);
}

/* Decorativos */
.pg-hero__deco { position: absolute; z-index: 2; opacity: 0.12; color: var(--pl); }
.pg-hero__deco--tl { top: 14%; left: 5%; }
.pg-hero__deco--tr { top: 10%; right: 8%; }
.pg-hero__deco--br { bottom: 20%; right: 12%; }

/* Sticker */
.pg-hero__sticker {
  position: absolute; z-index: 3;
  display: flex; flex-direction: column; align-items: center; gap: 0.1rem;
  transform: rotate(-8deg); opacity: 0.85;
  top: 16%; right: 28%;
}
.pg-sticker-line {
  background: #fff; color: var(--pbg);
  font-size: clamp(0.9rem, 2vw, 1.2rem); font-weight: 900;
  letter-spacing: 0.1em; padding: 0.25rem 0.9rem;
  border-radius: 6px; box-shadow: 2px 3px 8px rgba(0,0,0,0.35); line-height: 1;
}
.pg-sticker-line--accent { background: var(--p); color: #fff; }
.pg-sticker-arrow { font-size: 1.2rem; color: #fff; font-weight: 900; line-height: 1; }

/* Contenido */
.pg-hero__content { position: relative; z-index: 3; width: 100%; padding-bottom: 7rem; }
.pg-hero__inner { max-width: 640px; }

.pg-hero__eyebrow {
  display: flex; align-items: center; gap: 0.625rem; margin-bottom: 1rem;
}
.pg-hero__logo { height: 32px; object-fit: contain; }
.pg-hero__eyebrow span {
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em;
  text-transform: uppercase; color: var(--pl);
}
.pg-hero__tagline {
  font-size: 0.78rem; font-weight: 700; letter-spacing: 0.18em;
  text-transform: uppercase; color: rgba(255,255,255,0.5); margin: 0 0 1rem;
}
.pg-hero__title { display: flex; flex-direction: column; margin: 0 0 1.5rem; line-height: 1.0; }
.pg-hero__title-main {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(3rem, 7vw, 5.5rem); font-weight: 900;
  color: var(--pl); letter-spacing: -0.02em;
  text-shadow: 0 4px 24px rgba(120,144,156,0.3);
}
.pg-hero__title-sub {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1rem, 2vw, 1.6rem); font-weight: 600;
  color: rgba(255,255,255,0.85); letter-spacing: 0.05em; margin-top: 0.25rem;
}
.pg-hero__desc {
  font-size: clamp(0.9rem, 1.4vw, 1rem); color: rgba(255,255,255,0.62);
  line-height: 1.65; margin: 0 0 2rem; max-width: 520px;
}
.pg-hero__ctas { display: flex; gap: 0.875rem; flex-wrap: wrap; }
.pg-btn {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 0.8rem 2rem; border-radius: 8px;
  font-size: 0.9rem; font-weight: 700; text-decoration: none;
  transition: all 0.2s; cursor: pointer;
}
.pg-btn--primary { background: var(--p); color: #fff; border: 2px solid var(--p); }
.pg-btn--primary:hover { background: var(--pd); border-color: var(--pd); transform: translateY(-2px); }
.pg-btn--ghost { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,0.4); }
.pg-btn--ghost:hover { border-color: rgba(255,255,255,0.85); background: rgba(255,255,255,0.08); }

/* Stats */
.pg-hero__stats-bar {
  position: absolute; bottom: 0; left: 0; right: 0;
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid rgba(255,255,255,0.1); z-index: 4;
}
.pg-hero__stats-inner { display: flex; align-items: stretch; }
.pg-stat {
  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: 1rem 1.5rem; border-right: 1px solid rgba(255,255,255,0.08); gap: 0.2rem;
}
.pg-stat:last-child { border-right: none; }
.pg-stat__value { font-size: clamp(1.4rem, 2.5vw, 1.9rem); font-weight: 900; color: var(--pl); line-height: 1; }
.pg-stat__label { font-size: 0.65rem; color: rgba(255,255,255,0.5); font-weight: 600; text-transform: uppercase; letter-spacing: 0.07em; text-align: center; }

@media (max-width: 768px) {
  .pg-hero { height: clamp(460px, 70vh, 580px); }
  .pg-hero__content { padding-bottom: 11rem; }
  .pg-hero__sticker { display: none; }
  .pg-hero__stats-inner { flex-wrap: wrap; }
  .pg-stat { flex: 1 1 50%; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.08); }
  .pg-stat:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.08); }
  .pg-stat:nth-last-child(-n+2) { border-bottom: none; }
}
</style>
