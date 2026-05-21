<script setup lang="ts">
const pasos = [
  { num: "01", title: "Examen de Admisión y Ficha", desc: "Presenta tu examen de admisión en campus o en línea. Documentación para la ficha:", items: ["Fotografías tamaño credencial", "Pago de inscripción (formato de la ficha)", "Copia de identificación oficial", "Cuota de la ficha de admisión"], notes: null },
  { num: "02", title: "Entrega de Resultados", desc: "Entrega tus resultados en la Dirección de Admisiones el mismo día de tu cita programada.", items: [], notes: null },
  { num: "03", title: "Pago de Inscripción", desc: "Acude a Admisiones y presenta tu credencial con el pago de inscripción y primera colegiatura. También puedes pagar en línea escribiendo a diplomados@uninter.edu.mx. Entrega original y dos copias de:", items: ["Acta de nacimiento", "CURP en formato oficial", "Certificado de estudios previos", "Credencial de elector o pasaporte", "Carta de exposición de motivos"], notes: null },
  { num: "04", title: "Requisitos Documentales", desc: "Toda la documentación oficial debe presentarse en original y copias. En caso de documentos extranjeros, deben estar apostillados.", items: [], notes: ["Los certificados de países extranjeros requieren apostilla y aval de las autoridades educativas locales.", "Toda documentación expedida en el extranjero requiere traducción oficial."] },
];
</script>

<template>
  <section id="proceso-presencial" class="adp-pre">
    <div class="adp-container">
      <div class="adp-pre__head">
        <p class="adp-eyebrow">Modalidad Presencial</p>
        <h2 class="adp-title">Proceso de Admisión <em>Presencial</em></h2>
        <p class="adp-pre__sub">Visítanos en Campus Cuernavaca. Un asesor te acompañará en todo el proceso.</p>
      </div>

      <div class="adp-steps">
        <div v-for="(paso, i) in pasos" :key="paso.num" class="adp-step">
          <div class="adp-step__aside">
            <div class="adp-step__num">{{ paso.num }}</div>
            <div v-if="i < pasos.length - 1" class="adp-step__line"></div>
          </div>
          <div class="adp-step__body">
            <h3 class="adp-step__title">{{ paso.title }}</h3>
            <p class="adp-step__desc">{{ paso.desc }}</p>
            <ul v-if="paso.items.length" class="adp-step__list">
              <li v-for="item in paso.items" :key="item"><span class="adp-step__dot"></span>{{ item }}</li>
            </ul>
            <div v-if="paso.notes?.length" class="adp-step__notebox">
              <p class="adp-step__note-label">Notas importantes:</p>
              <ol><li v-for="note in paso.notes" :key="note">{{ note }}</li></ol>
            </div>
          </div>
        </div>
      </div>

      <div class="adp-pre__contact">
        <div class="adp-contact-item"><Icon name="mdi:email-outline" size="16" /><span>diplomados@uninter.edu.mx</span></div>
        <div class="adp-contact-item"><Icon name="mdi:phone-outline" size="16" /><span>777 357 9000 · 777 357 9001</span></div>
        <div class="adp-contact-item"><Icon name="mdi:clock-outline" size="16" /><span>Lunes a Viernes 8:00–18:00 · Sábados 9:00–13:00</span></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.adp-pre { --p: #6D4C41; --pd: #4E342E; --pl: #A1887F; background: #f0ebe8; padding: 5.5rem 0; }
.adp-container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
.adp-pre__head { text-align: center; margin-bottom: 3.5rem; }
.adp-eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--p); margin: 0 0 0.5rem; }
.adp-title { font-family: var(--font-serif, Georgia, serif); font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 800; color: #2a1810; margin: 0 0 0.75rem; line-height: 1.2; }
.adp-title em { font-style: italic; color: var(--p); }
.adp-pre__sub { font-size: 0.95rem; color: #666; max-width: 480px; margin: 0 auto; }

.adp-steps { display: flex; flex-direction: column; max-width: 820px; margin: 0 auto 3rem; }
.adp-step { display: flex; gap: 1.5rem; }
.adp-step__aside { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
.adp-step__num { width: 48px; height: 48px; border-radius: 50%; background: var(--p); color: #fff; font-size: 0.82rem; font-weight: 900; letter-spacing: 0.06em; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(109,76,65,0.35); flex-shrink: 0; z-index: 1; }
.adp-step__line { width: 2px; flex: 1; min-height: 24px; background: rgba(109,76,65,0.2); margin: 4px 0; }
.adp-step__body { padding: 0 0 2.5rem; flex: 1; }
.adp-step__title { font-family: var(--font-serif, Georgia, serif); font-size: 1.15rem; font-weight: 800; color: #2a1810; margin: 0.5rem 0 0.625rem; }
.adp-step__desc { font-size: 0.9rem; color: #555; line-height: 1.7; margin: 0 0 0.875rem; }
.adp-step__list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.4rem; }
.adp-step__list li { display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.85rem; color: #555; line-height: 1.5; }
.adp-step__dot { width: 6px; height: 6px; min-width: 6px; border-radius: 50%; background: var(--p); margin-top: 0.45em; }
.adp-step__notebox { margin-top: 1rem; background: #fff; border-left: 3px solid var(--p); border-radius: 0 10px 10px 0; padding: 1rem 1.25rem; box-shadow: 0 2px 8px rgba(0,0,0,0.05); }
.adp-step__note-label { font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: var(--p); margin: 0 0 0.5rem; }
.adp-step__notebox ol { padding-left: 1.25rem; margin: 0; display: flex; flex-direction: column; gap: 0.375rem; }
.adp-step__notebox ol li { font-size: 0.82rem; color: #555; line-height: 1.55; }

.adp-pre__contact { display: flex; flex-wrap: wrap; gap: 1.5rem; background: #fff; border-radius: 14px; padding: 1.5rem 2rem; border: 1px solid rgba(109,76,65,0.12); max-width: 820px; margin: 0 auto; }
.adp-contact-item { display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; color: #444; }
.adp-contact-item svg { color: var(--p); flex-shrink: 0; }
</style>
