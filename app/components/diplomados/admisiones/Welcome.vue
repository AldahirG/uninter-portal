<template>
  <section class="adp-wl">
    <div class="adp-wl__top">
      <div class="adp-container">
        <div class="adp-wl__intro">
          <div>
            <p class="adp-eyebrow">Proceso de Admisión</p>
            <h2 class="adp-title">Dos modalidades,<br /><em>una sola meta</em></h2>
          </div>
          <p class="adp-desc">Contamos con proceso presencial y en línea. Nuestros asesores te guiarán en cada paso para facilitar tu inscripción a los diplomados y cursos de UNINTER.</p>
        </div>
      </div>
    </div>
    <div class="adp-wl__cards-wrap">
      <div class="adp-container adp-wl__cards">
        <a href="#proceso-presencial" class="adp-wcard">
          <div class="adp-wcard__icon"><Icon name="mdi:school-outline" size="26" /></div>
          <h3 class="adp-wcard__title">Admisión Presencial</h3>
          <p class="adp-wcard__desc">Visítanos en Campus Cuernavaca. Un asesor te acompañará en cada paso del proceso.</p>
          <span class="adp-wcard__link">Ver proceso →</span>
        </a>
        <a href="#proceso-linea" class="adp-wcard">
          <div class="adp-wcard__icon"><Icon name="mdi:laptop" size="26" /></div>
          <h3 class="adp-wcard__title">Admisión en Línea</h3>
          <p class="adp-wcard__desc">Completa tu proceso 100% digital desde cualquier lugar. Rápido y sin complicaciones.</p>
          <span class="adp-wcard__link">Ver proceso →</span>
        </a>
        <div class="adp-wcard adp-wcard--contact">
          <div class="adp-wcard__icon"><Icon name="mdi:phone-outline" size="26" /></div>
          <h3 class="adp-wcard__title">¿Necesitas ayuda?</h3>
          <p class="adp-wcard__desc">777 357 9000 · 777 357 9001<br />diplomados@uninter.edu.mx</p>
          <span class="adp-wcard__link">Lun–Vie 8:00–18:00</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.adp-wl { --p: #6D4C41; --pl: #A1887F; --pbg: #180f0c; }
.adp-container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
.adp-wl__top { background: var(--pbg); padding: 4.5rem 0 3rem; }
.adp-wl__intro { display: grid; grid-template-columns: 1fr 1.6fr; gap: 3rem; align-items: start; }
.adp-eyebrow { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--pl); margin: 0 0 0.5rem; }
.adp-title { font-family: var(--font-serif, Georgia, serif); font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 800; color: #fff; margin: 0; line-height: 1.15; }
.adp-title em { font-style: italic; color: var(--pl); }
.adp-desc { font-size: 0.95rem; line-height: 1.75; color: rgba(255,255,255,0.6); margin: 0; padding-top: 1.6rem; border-top: 2px solid var(--p); }
.adp-wl__cards-wrap { background: #221510; padding: 3rem 0; }
.adp-wl__cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.adp-wcard { background: #2c1a12; border: 1px solid rgba(109,76,65,0.22); border-radius: 14px; padding: 1.75rem; display: flex; flex-direction: column; gap: 0.75rem; text-decoration: none; transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s; cursor: pointer; }
.adp-wcard:hover { transform: translateY(-4px); border-color: var(--p); box-shadow: 0 10px 28px rgba(109,76,65,0.18); }
.adp-wcard--contact { cursor: default; }
.adp-wcard--contact:hover { transform: none; }
.adp-wcard__icon { width: 48px; height: 48px; border-radius: 12px; background: rgba(109,76,65,0.18); color: var(--pl); display: flex; align-items: center; justify-content: center; }
.adp-wcard__title { font-family: var(--font-serif, Georgia, serif); font-size: 1.05rem; font-weight: 800; color: #fff; margin: 0; }
.adp-wcard__desc { font-size: 0.85rem; color: rgba(255,255,255,0.52); line-height: 1.6; margin: 0; flex: 1; }
.adp-wcard__link { font-size: 0.8rem; font-weight: 700; color: var(--pl); letter-spacing: 0.04em; }
@media (max-width: 768px) { .adp-wl__intro { grid-template-columns: 1fr; gap: 1.5rem; } .adp-wl__cards { grid-template-columns: 1fr; } }
</style>
