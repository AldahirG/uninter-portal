<template>
  <section class="adm-welcome">
    <div class="adm-welcome__top">
      <div class="adm-container">
        <div class="adm-welcome__intro">
          <div>
            <p class="adm-eyebrow">Proceso de Admisión</p>
            <h2 class="adm-title">Dos modalidades,<br /><em>una sola meta</em></h2>
          </div>
          <p class="adm-desc">
            Contamos con un proceso de admisión presencial y en línea, adaptándonos a tu libre
            conveniencia. Nuestro equipo de asesores educativos te guiará en cada paso para
            facilitar tu ingreso a los programas de Posgrado UNINTER.
          </p>
        </div>
      </div>
    </div>
    <div class="adm-welcome__cards-wrap">
      <div class="adm-container adm-welcome__cards">
        <a href="#proceso-presencial" class="adm-wcard">
          <div class="adm-wcard__icon"><Icon name="mdi:school-outline" size="26" /></div>
          <h3 class="adm-wcard__title">Admisión Presencial</h3>
          <p class="adm-wcard__desc">Visítanos en Campus Cuernavaca. Un asesor te acompañará en cada paso del proceso.</p>
          <span class="adm-wcard__link">Ver proceso →</span>
        </a>
        <a href="#proceso-linea" class="adm-wcard">
          <div class="adm-wcard__icon"><Icon name="mdi:laptop" size="26" /></div>
          <h3 class="adm-wcard__title">Admisión en Línea</h3>
          <p class="adm-wcard__desc">Completa tu proceso de admisión 100% digital desde cualquier lugar del mundo.</p>
          <span class="adm-wcard__link">Ver proceso →</span>
        </a>
        <div class="adm-wcard adm-wcard--contact">
          <div class="adm-wcard__icon"><Icon name="mdi:phone-outline" size="26" /></div>
          <h3 class="adm-wcard__title">¿Necesitas ayuda?</h3>
          <p class="adm-wcard__desc">777 357 9000 · 777 357 9001<br />admisiones@uninter.edu.mx</p>
          <span class="adm-wcard__link">Lun–Vie 8:00–18:00</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.adm-welcome { --p: #546E7A; --pl: #78909C; --pbg: #0f1a22; }
.adm-container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
.adm-welcome__top { background: var(--pbg); padding: 4.5rem 0 3rem; }
.adm-welcome__intro { display: grid; grid-template-columns: 1fr 1.6fr; gap: 3rem; align-items: start; }
.adm-eyebrow { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--pl); margin: 0 0 0.5rem; }
.adm-title { font-family: var(--font-serif, Georgia, serif); font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 800; color: #fff; margin: 0; line-height: 1.15; }
.adm-title em { font-style: italic; color: var(--pl); }
.adm-desc { font-size: 0.95rem; line-height: 1.75; color: rgba(255,255,255,0.6); margin: 0; padding-top: 1.6rem; border-top: 2px solid var(--p); }
.adm-welcome__cards-wrap { background: #162028; padding: 3rem 0; }
.adm-welcome__cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.adm-wcard {
  background: #1e2c36; border: 1px solid rgba(84,110,122,0.18); border-radius: 14px; padding: 1.75rem;
  display: flex; flex-direction: column; gap: 0.75rem; text-decoration: none;
  transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s; cursor: pointer;
}
.adm-wcard:hover { transform: translateY(-4px); border-color: var(--p); box-shadow: 0 10px 28px rgba(84,110,122,0.14); }
.adm-wcard--contact { cursor: default; }
.adm-wcard--contact:hover { transform: none; }
.adm-wcard__icon { width: 48px; height: 48px; border-radius: 12px; background: rgba(84,110,122,0.15); color: var(--pl); display: flex; align-items: center; justify-content: center; }
.adm-wcard__title { font-family: var(--font-serif, Georgia, serif); font-size: 1.05rem; font-weight: 800; color: #fff; margin: 0; }
.adm-wcard__desc { font-size: 0.85rem; color: rgba(255,255,255,0.52); line-height: 1.6; margin: 0; flex: 1; }
.adm-wcard__link { font-size: 0.8rem; font-weight: 700; color: var(--pl); letter-spacing: 0.04em; }
@media (max-width: 768px) {
  .adm-welcome__intro { grid-template-columns: 1fr; gap: 1.5rem; }
  .adm-welcome__cards { grid-template-columns: 1fr; }
}
</style>
