<script setup lang="ts">
import { BookOpen, Award, Briefcase, GraduationCap } from "lucide-vue-next";

const stats = [
  { value: "100+",  label: "Diplomados y cursos" },
  { value: "16",    label: "Áreas de especialización" },
  { value: "ICPM",  label: "Cert. internacional" },
  { value: "40+",   label: "Años de experiencia" },
];
</script>

<template>
  <section class="dp-hero">
    <div class="dp-hero__bg">
      <img
        src="/images/hero/licenciaturasPresenciales.jpg"
        alt="Diplomados UNINTER"
        class="dp-hero__img"
      />
      <div class="dp-hero__overlay"></div>
    </div>

    <div class="dp-hero__deco dp-hero__deco--tl" aria-hidden="true"><BookOpen :size="34" /></div>
    <div class="dp-hero__deco dp-hero__deco--tr" aria-hidden="true"><Award :size="30" /></div>
    <div class="dp-hero__deco dp-hero__deco--br" aria-hidden="true"><Briefcase :size="28" /></div>

    <div class="dp-hero__sticker" aria-hidden="true">
      <span class="dp-sticker-line">CERT.</span>
      <span class="dp-sticker-arrow">↙</span>
      <span class="dp-sticker-line dp-sticker-line--accent">ICPM</span>
    </div>

    <div class="dp-container dp-hero__content">
      <div class="dp-hero__inner">
        <div class="dp-hero__eyebrow">
          <img src="/images/logo-uninter.png" alt="UNINTER" class="dp-hero__logo" onerror="this.style.display='none'" />
          <span>Diplomados UNINTER</span>
        </div>

        <p class="dp-hero__tagline">ACTUALIZA TU PERFIL PROFESIONAL</p>

        <h1 class="dp-hero__title">
          <span class="dp-hero__title-main">DIPLOMADOS</span>
          <span class="dp-hero__title-sub">Cursos · Certificaciones · Especialización</span>
        </h1>

        <p class="dp-hero__desc">
          Programas de actualización profesional con valor curricular y certificaciones
          internacionales. Flexibles, prácticos y avalados por SEP.
        </p>

        <div class="dp-hero__ctas">
          <NuxtLink to="/diplomados/admisiones" class="dp-btn dp-btn--primary">
            Proceso de Admisión
          </NuxtLink>
          <a href="https://diplomados.uninter.edu.mx/" target="_blank" class="dp-btn dp-btn--ghost">
            Ver catálogo
          </a>
        </div>
      </div>
    </div>

    <div class="dp-hero__stats-bar">
      <div class="dp-container dp-hero__stats-inner">
        <div v-for="stat in stats" :key="stat.label" class="dp-stat">
          <span class="dp-stat__value">{{ stat.value }}</span>
          <span class="dp-stat__label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.dp-hero {
  --p: #6D4C41; --pd: #4E342E; --pl: #A1887F; --pbg: #180f0c;
  position: relative; height: clamp(520px, 68vh, 680px);
  display: flex; align-items: center; overflow: hidden; background: var(--pbg);
}
.dp-container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }

.dp-hero__bg { position: absolute; inset: 0; }
.dp-hero__img { width: 100%; height: 100%; object-fit: cover; object-position: center top; animation: kb 14s ease-out forwards; }
@keyframes kb { from { transform: scale(1); } to { transform: scale(1.06); } }
.dp-hero__overlay {
  position: absolute; inset: 0;
  background:
    linear-gradient(115deg, rgba(24,15,12,0.95) 0%, rgba(24,15,12,0.75) 50%, rgba(24,15,12,0.32) 100%),
    linear-gradient(to top, rgba(24,15,12,0.95) 0%, transparent 55%);
}

.dp-hero__deco { position: absolute; z-index: 2; opacity: 0.12; color: var(--pl); }
.dp-hero__deco--tl { top: 14%; left: 5%; }
.dp-hero__deco--tr { top: 10%; right: 8%; }
.dp-hero__deco--br { bottom: 20%; right: 12%; }

.dp-hero__sticker {
  position: absolute; z-index: 3;
  display: flex; flex-direction: column; align-items: center; gap: 0.1rem;
  transform: rotate(-8deg); opacity: 0.85; top: 16%; right: 28%;
}
.dp-sticker-line {
  background: #fff; color: var(--pbg);
  font-size: clamp(0.9rem, 2vw, 1.2rem); font-weight: 900;
  letter-spacing: 0.1em; padding: 0.25rem 0.9rem;
  border-radius: 6px; box-shadow: 2px 3px 8px rgba(0,0,0,0.35); line-height: 1;
}
.dp-sticker-line--accent { background: var(--p); color: #fff; }
.dp-sticker-arrow { font-size: 1.2rem; color: #fff; font-weight: 900; line-height: 1; }

.dp-hero__content { position: relative; z-index: 3; width: 100%; padding-bottom: 7rem; }
.dp-hero__inner { max-width: 640px; }

.dp-hero__eyebrow { display: flex; align-items: center; gap: 0.625rem; margin-bottom: 1rem; }
.dp-hero__logo { height: 32px; object-fit: contain; }
.dp-hero__eyebrow span { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--pl); }
.dp-hero__tagline { font-size: 0.78rem; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; color: rgba(255,255,255,0.5); margin: 0 0 1rem; }
.dp-hero__title { display: flex; flex-direction: column; margin: 0 0 1.5rem; line-height: 1.0; }
.dp-hero__title-main { font-family: var(--font-serif, Georgia, serif); font-size: clamp(3rem, 7vw, 5.5rem); font-weight: 900; color: var(--pl); letter-spacing: -0.02em; text-shadow: 0 4px 24px rgba(161,136,127,0.3); }
.dp-hero__title-sub { font-family: var(--font-serif, Georgia, serif); font-size: clamp(1rem, 2vw, 1.5rem); font-weight: 600; color: rgba(255,255,255,0.85); letter-spacing: 0.05em; margin-top: 0.25rem; }
.dp-hero__desc { font-size: clamp(0.9rem, 1.4vw, 1rem); color: rgba(255,255,255,0.62); line-height: 1.65; margin: 0 0 2rem; max-width: 520px; }
.dp-hero__ctas { display: flex; gap: 0.875rem; flex-wrap: wrap; }
.dp-btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.8rem 2rem; border-radius: 8px; font-size: 0.9rem; font-weight: 700; text-decoration: none; transition: all 0.2s; cursor: pointer; }
.dp-btn--primary { background: var(--p); color: #fff; border: 2px solid var(--p); }
.dp-btn--primary:hover { background: var(--pd); border-color: var(--pd); transform: translateY(-2px); }
.dp-btn--ghost { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,0.4); }
.dp-btn--ghost:hover { border-color: rgba(255,255,255,0.85); background: rgba(255,255,255,0.08); }

.dp-hero__stats-bar { position: absolute; bottom: 0; left: 0; right: 0; background: rgba(255,255,255,0.06); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); border-top: 1px solid rgba(255,255,255,0.1); z-index: 4; }
.dp-hero__stats-inner { display: flex; align-items: stretch; }
.dp-stat { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1rem 1.5rem; border-right: 1px solid rgba(255,255,255,0.08); gap: 0.2rem; }
.dp-stat:last-child { border-right: none; }
.dp-stat__value { font-size: clamp(1.4rem, 2.5vw, 1.9rem); font-weight: 900; color: var(--pl); line-height: 1; }
.dp-stat__label { font-size: 0.65rem; color: rgba(255,255,255,0.5); font-weight: 600; text-transform: uppercase; letter-spacing: 0.07em; text-align: center; }

@media (max-width: 768px) {
  .dp-hero { height: clamp(460px, 70vh, 580px); }
  .dp-hero__content { padding-bottom: 11rem; }
  .dp-hero__sticker { display: none; }
  .dp-hero__stats-inner { flex-wrap: wrap; }
  .dp-stat { flex: 1 1 50%; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.08); }
  .dp-stat:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.08); }
  .dp-stat:nth-last-child(-n+2) { border-bottom: none; }
}
</style>
