<script setup lang="ts">
import { FileCheck, ClipboardList, GraduationCap } from "lucide-vue-next";
</script>

<template>
  <section class="adm-hero">
    <div class="adm-hero__bg">
      <img
        src="/images/hero/licenciaturasPresenciales.jpg"
        alt="Proceso de Admisión Posgrados UNINTER"
        class="adm-hero__img"
      />
      <div class="adm-hero__overlay"></div>
    </div>

    <div class="adm-hero__deco adm-hero__deco--tl" aria-hidden="true"><GraduationCap :size="34" /></div>
    <div class="adm-hero__deco adm-hero__deco--tr" aria-hidden="true"><FileCheck :size="30" /></div>
    <div class="adm-hero__deco adm-hero__deco--br" aria-hidden="true"><ClipboardList :size="28" /></div>

    <div class="adm-container adm-hero__content">
      <div class="adm-hero__inner">
        <div class="adm-hero__eyebrow">
          <img src="/images/logo-uninter.png" alt="UNINTER" class="adm-hero__logo" onerror="this.style.display='none'" />
          <span>Posgrados UNINTER</span>
        </div>

        <nav class="adm-hero__breadcrumb" aria-label="Breadcrumb">
          <NuxtLink to="/">Inicio</NuxtLink>
          <span>/</span>
          <NuxtLink to="/posgrados">Posgrados</NuxtLink>
          <span>/</span>
          <span>Admisiones</span>
        </nav>

        <h1 class="adm-hero__title">
          <span class="adm-hero__title-main">PROCESO DE</span>
          <span class="adm-hero__title-accent">ADMISIÓN</span>
        </h1>

        <p class="adm-hero__desc">
          Contamos con un proceso de admisión presencial y en línea,
          adaptándonos a tu libre conveniencia.
        </p>

        <div class="adm-hero__ctas">
          <a href="#proceso-presencial" class="adm-btn adm-btn--primary">Admisión Presencial</a>
          <a href="#proceso-linea"      class="adm-btn adm-btn--ghost">Admisión en Línea</a>
        </div>
      </div>
    </div>

    <div class="adm-hero__stats-bar">
      <div class="adm-container adm-hero__stats-inner">
        <div class="adm-stat"><span class="adm-stat__value">2</span><span class="adm-stat__label">Modalidades de admisión</span></div>
        <div class="adm-stat"><span class="adm-stat__value">4</span><span class="adm-stat__label">Pasos del proceso</span></div>
        <div class="adm-stat"><span class="adm-stat__value">100%</span><span class="adm-stat__label">Validez oficial SEP</span></div>
        <div class="adm-stat"><span class="adm-stat__value">7</span><span class="adm-stat__label">Programas disponibles</span></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.adm-hero {
  --p: #546E7A;
  --pd: #37474F;
  --pl: #78909C;
  --pbg: #0f1a22;
  position: relative;
  height: clamp(500px, 65vh, 640px);
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--pbg);
}
.adm-container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }

.adm-hero__bg { position: absolute; inset: 0; }
.adm-hero__img {
  width: 100%; height: 100%; object-fit: cover; object-position: center top;
  animation: kb 14s ease-out forwards;
}
@keyframes kb { from { transform: scale(1); } to { transform: scale(1.06); } }
.adm-hero__overlay {
  position: absolute; inset: 0;
  background:
    linear-gradient(115deg, rgba(15,26,34,0.95) 0%, rgba(15,26,34,0.76) 50%, rgba(15,26,34,0.32) 100%),
    linear-gradient(to top, rgba(15,26,34,0.92) 0%, transparent 55%);
}

.adm-hero__deco { position: absolute; z-index: 2; opacity: 0.1; color: var(--pl); }
.adm-hero__deco--tl { top: 14%; left: 5%; }
.adm-hero__deco--tr { top: 10%; right: 8%; }
.adm-hero__deco--br { bottom: 22%; right: 12%; }

.adm-hero__content { position: relative; z-index: 3; width: 100%; padding-bottom: 7rem; }
.adm-hero__inner { max-width: 620px; }

.adm-hero__eyebrow {
  display: flex; align-items: center; gap: 0.625rem; margin-bottom: 0.75rem;
}
.adm-hero__logo { height: 30px; object-fit: contain; }
.adm-hero__eyebrow span { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--pl); }

.adm-hero__breadcrumb {
  display: flex; align-items: center; gap: 0.45rem;
  font-size: 0.68rem; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase;
  color: rgba(255,255,255,0.38); margin-bottom: 1.25rem;
}
.adm-hero__breadcrumb a { color: inherit; text-decoration: none; transition: color 0.2s; }
.adm-hero__breadcrumb a:hover { color: var(--pl); }

.adm-hero__title { display: flex; flex-direction: column; margin: 0 0 1.25rem; line-height: 1; }
.adm-hero__title-main {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.6rem, 3.5vw, 2.8rem); font-weight: 700;
  color: rgba(255,255,255,0.85); letter-spacing: 0.04em;
}
.adm-hero__title-accent {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(3rem, 7vw, 5.5rem); font-weight: 900;
  color: var(--pl); letter-spacing: -0.02em;
  text-shadow: 0 4px 24px rgba(120,144,156,0.3);
}

.adm-hero__desc {
  font-size: clamp(0.9rem, 1.4vw, 1rem); color: rgba(255,255,255,0.6);
  line-height: 1.65; margin: 0 0 2rem; max-width: 480px;
}
.adm-hero__ctas { display: flex; gap: 0.875rem; flex-wrap: wrap; }
.adm-btn {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 0.8rem 2rem; border-radius: 8px;
  font-size: 0.9rem; font-weight: 700; text-decoration: none; transition: all 0.2s;
}
.adm-btn--primary { background: var(--p); color: #fff; border: 2px solid var(--p); }
.adm-btn--primary:hover { background: var(--pd); border-color: var(--pd); transform: translateY(-2px); }
.adm-btn--ghost { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,0.35); }
.adm-btn--ghost:hover { border-color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.07); }

.adm-hero__stats-bar {
  position: absolute; bottom: 0; left: 0; right: 0;
  background: rgba(255,255,255,0.06); backdrop-filter: blur(12px);
  border-top: 1px solid rgba(255,255,255,0.09); z-index: 4;
}
.adm-hero__stats-inner { display: flex; align-items: stretch; }
.adm-stat {
  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: 1rem 1.5rem; border-right: 1px solid rgba(255,255,255,0.07); gap: 0.2rem;
}
.adm-stat:last-child { border-right: none; }
.adm-stat__value { font-size: clamp(1.4rem, 2.5vw, 1.9rem); font-weight: 900; color: var(--pl); line-height: 1; }
.adm-stat__label { font-size: 0.63rem; color: rgba(255,255,255,0.48); font-weight: 600; text-transform: uppercase; letter-spacing: 0.07em; text-align: center; }

@media (max-width: 768px) {
  .adm-hero { height: auto; min-height: 540px; padding-top: 5rem; }
  .adm-hero__content { padding-bottom: 11rem; }
  .adm-hero__stats-inner { flex-wrap: wrap; }
  .adm-stat { flex: 1 1 50%; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.07); }
  .adm-stat:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.07); }
  .adm-stat:nth-last-child(-n+2) { border-bottom: none; }
}
</style>
