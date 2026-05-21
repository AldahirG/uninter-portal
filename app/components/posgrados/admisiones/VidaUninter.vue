<script setup lang="ts">
const nacionales = [
  "Acta de nacimiento (original y 2 copias)",
  "CURP en formato oficial",
  "Certificado de estudios previos (bachillerato / licenciatura)",
  "Título universitario o carta de pasante",
  "Credencial de elector o pasaporte vigente",
  "Fotografías tamaño credencial (fondo blanco)",
];
const internacionales = [
  "Acta de nacimiento apostillada y traducida",
  "Certificado de estudios apostillado",
  "Título universitario apostillado y traducido",
  "Pasaporte vigente (copia certificada)",
  "Visa o permiso de estancia vigente (si aplica)",
  "Traducción oficial de todos los documentos",
];
</script>

<template>
  <section class="adm-req">
    <div class="adm-container">
      <div class="adm-req__head">
        <p class="adm-eyebrow">Documentación Requerida</p>
        <h2 class="adm-title">Requisitos <em>generales</em></h2>
      </div>

      <div class="adm-req__grid">
        <div class="adm-rdoc">
          <div class="adm-rdoc__head">
            <div class="adm-rdoc__icon-wrap"><Icon name="mdi:flag-outline" size="20" /></div>
            <h3 class="adm-rdoc__title">Documentos Nacionales</h3>
          </div>
          <ul class="adm-rdoc__list">
            <li v-for="doc in nacionales" :key="doc">
              <Icon name="mdi:check-circle-outline" size="15" class="adm-rdoc__check" />{{ doc }}
            </li>
          </ul>
        </div>

        <div class="adm-rdoc">
          <div class="adm-rdoc__head">
            <div class="adm-rdoc__icon-wrap"><Icon name="mdi:earth" size="20" /></div>
            <h3 class="adm-rdoc__title">Documentos Internacionales</h3>
          </div>
          <ul class="adm-rdoc__list">
            <li v-for="doc in internacionales" :key="doc">
              <Icon name="mdi:check-circle-outline" size="15" class="adm-rdoc__check" />{{ doc }}
            </li>
          </ul>
          <div class="adm-rdoc__note">
            <Icon name="mdi:information-outline" size="13" />
            Toda documentación extranjera requiere apostilla y traducción oficial certificada.
          </div>
        </div>

        <div class="adm-rdoc adm-rdoc--dark">
          <div class="adm-rdoc__head">
            <div class="adm-rdoc__icon-wrap adm-rdoc__icon-wrap--light"><Icon name="mdi:headset" size="20" /></div>
            <h3 class="adm-rdoc__title adm-rdoc__title--light">Contacto Admisiones</h3>
          </div>
          <div class="adm-contact-list">
            <div class="adm-contact-row"><Icon name="mdi:phone-outline" size="15" /><span>777 357 9000</span></div>
            <div class="adm-contact-row"><Icon name="mdi:phone-outline" size="15" /><span>777 357 9001 (Admisiones)</span></div>
            <div class="adm-contact-row"><Icon name="mdi:email-outline" size="15" /><span>admisiones@uninter.edu.mx</span></div>
            <div class="adm-contact-row"><Icon name="mdi:clock-outline" size="15" /><span>Lun–Vie 8:00–18:00 · Sáb 9:00–13:00</span></div>
            <div class="adm-contact-row"><Icon name="mdi:map-marker-outline" size="15" /><span>Su No Arroyo No. 124, Col. San Jerónimo, Cuernavaca</span></div>
          </div>
          <a href="https://posgrados.uninter.edu.mx/Admisiones" target="_blank" class="adm-rdoc__cta">
            Portal de Admisiones →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.adm-req { --p: #546E7A; --pd: #37474F; --pl: #78909C; --pbg: #0f1a22; background: #f0f2f4; padding: 5.5rem 0; }
.adm-container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
.adm-req__head { text-align: center; margin-bottom: 3rem; }
.adm-eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--p); margin: 0 0 0.5rem; }
.adm-title { font-family: var(--font-serif, Georgia, serif); font-size: clamp(1.8rem, 3.5vw, 2.5rem); font-weight: 800; color: #1a2530; margin: 0; }
.adm-title em { font-style: italic; color: var(--p); }

.adm-req__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.adm-rdoc {
  background: #fff; border-radius: 16px; padding: 1.75rem;
  border: 1px solid rgba(84,110,122,0.1);
  display: flex; flex-direction: column; gap: 1rem;
}
.adm-rdoc--dark { background: var(--pbg); }
.adm-rdoc__head { display: flex; align-items: center; gap: 0.75rem; }
.adm-rdoc__icon-wrap {
  width: 40px; height: 40px; border-radius: 10px;
  background: rgba(84,110,122,0.1); color: var(--p);
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.adm-rdoc__icon-wrap--light { background: rgba(84,110,122,0.2); color: var(--pl); }
.adm-rdoc__title { font-family: var(--font-serif, Georgia, serif); font-size: 1rem; font-weight: 800; color: #1a2530; margin: 0; }
.adm-rdoc__title--light { color: #fff; }

.adm-rdoc__list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.5rem; }
.adm-rdoc__list li { display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.84rem; color: #555; line-height: 1.5; }
.adm-rdoc__check { color: var(--p); flex-shrink: 0; margin-top: 0.05rem; }
.adm-rdoc__note { display: flex; align-items: flex-start; gap: 0.4rem; font-size: 0.78rem; color: var(--p); background: rgba(84,110,122,0.07); border-radius: 8px; padding: 0.625rem 0.75rem; line-height: 1.5; }

.adm-contact-list { display: flex; flex-direction: column; gap: 0.625rem; flex: 1; }
.adm-contact-row { display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.84rem; color: rgba(255,255,255,0.65); }
.adm-contact-row svg { color: var(--pl); flex-shrink: 0; margin-top: 0.1rem; }

.adm-rdoc__cta {
  display: flex; align-items: center; justify-content: center;
  padding: 0.7rem 1.25rem; border-radius: 8px;
  background: var(--p); color: #fff;
  font-size: 0.83rem; font-weight: 700; text-decoration: none; transition: background 0.2s;
}
.adm-rdoc__cta:hover { background: var(--pd); }

@media (max-width: 1024px) { .adm-req__grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 640px) { .adm-req__grid { grid-template-columns: 1fr; } }
</style>
