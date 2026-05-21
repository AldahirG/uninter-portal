<script setup lang="ts">
const stats = [
  { value: "2",    label: "Modalidades" },
  { value: "4",    label: "Pasos" },
  { value: "SEP",  label: "Aval oficial" },
  { value: "100+", label: "Programas" },
];
</script>

<template>
  <section class="adp-hero">
    <div class="adp-hero__bg">
      <img src="/images/hero/licenciaturasPresenciales.jpg" alt="Admisiones Diplomados" class="adp-hero__img" />
      <div class="adp-hero__overlay"></div>
    </div>

    <div class="adp-container adp-hero__content">
      <div class="adp-hero__inner">
        <nav class="adp-hero__breadcrumb" aria-label="breadcrumb">
          <NuxtLink to="/" class="adp-hero__bc-link">Inicio</NuxtLink>
          <span class="adp-hero__bc-sep">›</span>
          <NuxtLink to="/diplomados" class="adp-hero__bc-link">Diplomados</NuxtLink>
          <span class="adp-hero__bc-sep">›</span>
          <span class="adp-hero__bc-current">Admisiones</span>
        </nav>

        <p class="adp-hero__tagline">PROCESO DE ADMISIÓN</p>
        <h1 class="adp-hero__title">
          <span class="adp-hero__title-sm">PROCESO DE</span>
          <span class="adp-hero__title-main">ADMISIÓN</span>
          <span class="adp-hero__title-sub">Diplomados · Cursos · Certificaciones</span>
        </h1>
        <p class="adp-hero__desc">Dos vías de ingreso: presencial en Campus Cuernavaca o 100% en línea. Proceso sencillo, rápido y sin complicaciones.</p>

        <div class="adp-hero__ctas">
          <a href="#proceso-presencial" class="adp-btn adp-btn--primary">Ver proceso presencial</a>
          <a href="#proceso-linea" class="adp-btn adp-btn--ghost">Ver proceso en línea</a>
        </div>
      </div>
    </div>

    <div class="adp-hero__stats-bar">
      <div class="adp-container adp-hero__stats-inner">
        <div v-for="stat in stats" :key="stat.label" class="adp-stat">
          <span class="adp-stat__value">{{ stat.value }}</span>
          <span class="adp-stat__label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.adp-hero {
  --p: #6D4C41; --pd: #4E342E; --pl: #A1887F; --pbg: #180f0c;
  position: relative; min-height: 540px;
  display: flex; align-items: center; overflow: hidden; background: var(--pbg);
  padding-top: 2rem;
}
.adp-container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
.adp-hero__bg { position: absolute; inset: 0; }
.adp-hero__img { width: 100%; height: 100%; object-fit: cover; animation: kb 14s ease-out forwards; }
@keyframes kb { from{transform:scale(1)} to{transform:scale(1.06)} }
.adp-hero__overlay { position: absolute; inset: 0; background: linear-gradient(115deg, rgba(24,15,12,0.96) 0%, rgba(24,15,12,0.78) 55%, rgba(24,15,12,0.35) 100%), linear-gradient(to top, rgba(24,15,12,0.95) 0%, transparent 55%); }

.adp-hero__content { position: relative; z-index: 3; width: 100%; padding-bottom: 7rem; }
.adp-hero__inner { max-width: 620px; }

.adp-hero__breadcrumb { display: flex; align-items: center; gap: 0.4rem; margin-bottom: 1.25rem; }
.adp-hero__bc-link { font-size: 0.72rem; color: rgba(255,255,255,0.5); text-decoration: none; transition: color 0.2s; }
.adp-hero__bc-link:hover { color: #fff; }
.adp-hero__bc-sep { font-size: 0.72rem; color: rgba(255,255,255,0.3); }
.adp-hero__bc-current { font-size: 0.72rem; color: var(--pl); font-weight: 700; }

.adp-hero__tagline { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.4); margin: 0 0 0.75rem; }
.adp-hero__title { display: flex; flex-direction: column; margin: 0 0 1.25rem; line-height: 1; }
.adp-hero__title-sm { font-size: clamp(0.9rem, 2vw, 1.1rem); font-weight: 700; color: rgba(255,255,255,0.65); letter-spacing: 0.15em; text-transform: uppercase; margin-bottom: 0.25rem; }
.adp-hero__title-main { font-family: var(--font-serif, Georgia, serif); font-size: clamp(2.8rem, 6.5vw, 5rem); font-weight: 900; color: var(--pl); letter-spacing: -0.02em; text-shadow: 0 4px 24px rgba(161,136,127,0.3); }
.adp-hero__title-sub { font-family: var(--font-serif, Georgia, serif); font-size: clamp(0.9rem, 1.8vw, 1.3rem); font-weight: 600; color: rgba(255,255,255,0.75); margin-top: 0.25rem; }
.adp-hero__desc { font-size: 0.92rem; color: rgba(255,255,255,0.58); line-height: 1.65; margin: 0 0 2rem; }
.adp-hero__ctas { display: flex; gap: 0.875rem; flex-wrap: wrap; }
.adp-btn { display: inline-flex; align-items: center; padding: 0.75rem 1.75rem; border-radius: 8px; font-size: 0.88rem; font-weight: 700; text-decoration: none; transition: all 0.2s; }
.adp-btn--primary { background: var(--p); color: #fff; border: 2px solid var(--p); }
.adp-btn--primary:hover { background: var(--pd); border-color: var(--pd); transform: translateY(-2px); }
.adp-btn--ghost { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,0.35); }
.adp-btn--ghost:hover { border-color: rgba(255,255,255,0.8); }

.adp-hero__stats-bar { position: absolute; bottom: 0; left: 0; right: 0; background: rgba(255,255,255,0.06); backdrop-filter: blur(12px); border-top: 1px solid rgba(255,255,255,0.09); z-index: 4; }
.adp-hero__stats-inner { display: flex; align-items: stretch; }
.adp-stat { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 1rem 1.5rem; border-right: 1px solid rgba(255,255,255,0.07); gap: 0.2rem; }
.adp-stat:last-child { border-right: none; }
.adp-stat__value { font-size: clamp(1.4rem, 2.5vw, 1.9rem); font-weight: 900; color: var(--pl); line-height: 1; }
.adp-stat__label { font-size: 0.63rem; color: rgba(255,255,255,0.48); font-weight: 600; text-transform: uppercase; letter-spacing: 0.07em; text-align: center; }

@media (max-width: 768px) {
  .adp-hero { min-height: auto; padding-top: 5rem; }
  .adp-hero__content { padding-bottom: 11rem; }
  .adp-hero__stats-inner { flex-wrap: wrap; }
  .adp-stat { flex: 1 1 50%; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.07); }
  .adp-stat:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.07); }
  .adp-stat:nth-last-child(-n+2) { border-bottom: none; }
}
</style>
