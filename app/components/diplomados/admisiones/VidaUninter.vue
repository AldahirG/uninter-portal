<script setup lang="ts">
const nacionales = [
  "Acta de nacimiento (original y 2 copias)",
  "CURP en formato oficial",
  "Certificado de estudios previos",
  "Credencial de elector o pasaporte vigente",
  "Fotografías tamaño credencial (fondo blanco)",
  "Carta de exposición de motivos (opcional)",
];
const internacionales = [
  "Acta de nacimiento apostillada y traducida",
  "Certificado de estudios apostillado",
  "Pasaporte vigente (copia certificada)",
  "Visa o permiso de estancia vigente (si aplica)",
  "Traducción oficial de todos los documentos",
  "Validación de estudios por SEP (si aplica)",
];
</script>

<template>
  <section class="adp-req">
    <div class="adp-container">
      <div class="adp-req__head">
        <p class="adp-eyebrow">Documentación Requerida</p>
        <h2 class="adp-title">Requisitos <em>generales</em></h2>
      </div>

      <div class="adp-req__grid">
        <div class="adp-rdoc">
          <div class="adp-rdoc__head">
            <div class="adp-rdoc__icon"><Icon name="mdi:flag-outline" size="20" /></div>
            <h3 class="adp-rdoc__title">Documentos Nacionales</h3>
          </div>
          <ul class="adp-rdoc__list">
            <li v-for="doc in nacionales" :key="doc">
              <Icon name="mdi:check-circle-outline" size="15" class="adp-rdoc__check" />{{ doc }}
            </li>
          </ul>
        </div>

        <div class="adp-rdoc">
          <div class="adp-rdoc__head">
            <div class="adp-rdoc__icon"><Icon name="mdi:earth" size="20" /></div>
            <h3 class="adp-rdoc__title">Documentos Internacionales</h3>
          </div>
          <ul class="adp-rdoc__list">
            <li v-for="doc in internacionales" :key="doc">
              <Icon name="mdi:check-circle-outline" size="15" class="adp-rdoc__check" />{{ doc }}
            </li>
          </ul>
          <div class="adp-rdoc__note">
            <Icon name="mdi:information-outline" size="13" />
            Toda documentación extranjera requiere apostilla y traducción oficial certificada.
          </div>
        </div>

        <div class="adp-rdoc adp-rdoc--dark">
          <div class="adp-rdoc__head">
            <div class="adp-rdoc__icon adp-rdoc__icon--light"><Icon name="mdi:headset" size="20" /></div>
            <h3 class="adp-rdoc__title adp-rdoc__title--light">Contacto Admisiones</h3>
          </div>
          <div class="adp-contact-list">
            <div class="adp-contact-row"><Icon name="mdi:phone-outline" size="15" /><span>777 357 9000</span></div>
            <div class="adp-contact-row"><Icon name="mdi:phone-outline" size="15" /><span>777 357 9001 (Admisiones)</span></div>
            <div class="adp-contact-row"><Icon name="mdi:email-outline" size="15" /><span>diplomados@uninter.edu.mx</span></div>
            <div class="adp-contact-row"><Icon name="mdi:clock-outline" size="15" /><span>Lun–Vie 8:00–18:00 · Sáb 9:00–13:00</span></div>
            <div class="adp-contact-row"><Icon name="mdi:map-marker-outline" size="15" /><span>Sur No. 124, Col. San Jerónimo, Cuernavaca</span></div>
          </div>
          <a href="https://diplomados.uninter.edu.mx/Admisiones" target="_blank" class="adp-rdoc__cta">Portal de Admisiones →</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.adp-req { --p: #6D4C41; --pd: #4E342E; --pl: #A1887F; --pbg: #180f0c; background: #f0ebe8; padding: 5.5rem 0; }
.adp-container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
.adp-req__head { text-align: center; margin-bottom: 3rem; }
.adp-eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--p); margin: 0 0 0.5rem; }
.adp-title { font-family: var(--font-serif, Georgia, serif); font-size: clamp(1.8rem, 3.5vw, 2.5rem); font-weight: 800; color: #2a1810; margin: 0; }
.adp-title em { font-style: italic; color: var(--p); }
.adp-req__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.adp-rdoc { background: #fff; border-radius: 16px; padding: 1.75rem; border: 1px solid rgba(109,76,65,0.1); display: flex; flex-direction: column; gap: 1rem; }
.adp-rdoc--dark { background: var(--pbg); }
.adp-rdoc__head { display: flex; align-items: center; gap: 0.75rem; }
.adp-rdoc__icon { width: 40px; height: 40px; border-radius: 10px; background: rgba(109,76,65,0.1); color: var(--p); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.adp-rdoc__icon--light { background: rgba(109,76,65,0.2); color: var(--pl); }
.adp-rdoc__title { font-family: var(--font-serif, Georgia, serif); font-size: 1rem; font-weight: 800; color: #2a1810; margin: 0; }
.adp-rdoc__title--light { color: #fff; }
.adp-rdoc__list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; }
.adp-rdoc__list li { display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.84rem; color: #555; line-height: 1.5; }
.adp-rdoc__check { color: var(--p); flex-shrink: 0; margin-top: 0.05rem; }
.adp-rdoc__note { display: flex; align-items: flex-start; gap: 0.4rem; font-size: 0.78rem; color: var(--p); background: rgba(109,76,65,0.07); border-radius: 8px; padding: 0.625rem 0.75rem; line-height: 1.5; }
.adp-contact-list { display: flex; flex-direction: column; gap: 0.625rem; flex: 1; }
.adp-contact-row { display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.84rem; color: rgba(255,255,255,0.65); }
.adp-contact-row svg { color: var(--pl); flex-shrink: 0; margin-top: 0.1rem; }
.adp-rdoc__cta { display: flex; align-items: center; justify-content: center; padding: 0.7rem 1.25rem; border-radius: 8px; background: var(--p); color: #fff; font-size: 0.83rem; font-weight: 700; text-decoration: none; transition: background 0.2s; }
.adp-rdoc__cta:hover { background: var(--pd); }
@media (max-width: 1024px) { .adp-req__grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 640px)  { .adp-req__grid { grid-template-columns: 1fr; } }
</style>
