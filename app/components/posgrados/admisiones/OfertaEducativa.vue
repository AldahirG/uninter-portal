<script setup lang="ts">
const pasos = [
  {
    num: "01",
    title: "Examen de Admisión y Ficha",
    desc: "Presenta tu examen de admisión en el campus o en línea. Si tienes el nivel de inglés requerido, puedes omitir el examen. Documentación requerida para la ficha:",
    items: [
      "Fotografías tamaño credencial",
      "Pago de inscripción (formato de la ficha)",
      "Copia de acta de nacimiento y último certificado",
      "Cuota de la ficha de admisión",
    ],
    note: null,
  },
  {
    num: "02",
    title: "Entrega de Resultados",
    desc: "Entrega tus resultados en la Dirección de Admisiones. Con antelación el mismo día de tu cita programada.",
    items: [],
    note: null,
  },
  {
    num: "03",
    title: "Pago de Inscripción",
    desc: "Acude a la Dirección de Admisiones y presenta tu credencial junto con el pago de inscripción y primera colegiatura. También puedes realizar tu pago en línea escribiendo a admisiones@uninter.edu.mx. Entrega original y dos copias de:",
    items: [
      "Acta de nacimiento",
      "CURP en formato oficial",
      "Certificado de estudios previos (bachillerato / licenciatura)",
      "Título universitario o carta de pasante",
      "Credencial de elector o pasaporte",
      "Carta de exposición de motivos",
    ],
    note: null,
  },
  {
    num: "04",
    title: "Requisitos Documentales",
    desc: "Toda la documentación oficial debe presentarse en original y copias. En caso de documentos extranjeros, deben estar apostillados.",
    items: [],
    notes: [
      "Los certificados originales de países extranjeros no son válidos sin apostilla. Las autoridades educativas del lugar de origen deben avalarlos.",
      "Toda documentación oficial expedida en el extranjero requiere traducción por parte oficial, embajada, consulado o institución con equivalentes notariales.",
    ],
  },
];
</script>

<template>
  <section id="proceso-presencial" class="adm-pre">
    <div class="adm-container">
      <div class="adm-pre__head">
        <p class="adm-eyebrow">Modalidad Presencial</p>
        <h2 class="adm-title">Proceso de Admisión <em>Presencial</em></h2>
        <p class="adm-pre__sub">Visítanos en Campus Cuernavaca. Un asesor te acompañará en todo el proceso.</p>
      </div>

      <div class="adm-steps">
        <div v-for="(paso, i) in pasos" :key="paso.num" class="adm-step">
          <div class="adm-step__aside">
            <div class="adm-step__num">{{ paso.num }}</div>
            <div v-if="i < pasos.length - 1" class="adm-step__line"></div>
          </div>
          <div class="adm-step__body">
            <h3 class="adm-step__title">{{ paso.title }}</h3>
            <p class="adm-step__desc">{{ paso.desc }}</p>
            <ul v-if="paso.items.length" class="adm-step__list">
              <li v-for="item in paso.items" :key="item">
                <span class="adm-step__dot"></span>{{ item }}
              </li>
            </ul>
            <div v-if="paso.notes?.length" class="adm-step__notebox">
              <p class="adm-step__note-label">Notas importantes:</p>
              <ol>
                <li v-for="note in paso.notes" :key="note">{{ note }}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <!-- Contacto -->
      <div class="adm-pre__contact">
        <div class="adm-contact-item"><Icon name="mdi:email-outline" size="16" /><span>admisiones@uninter.edu.mx</span></div>
        <div class="adm-contact-item"><Icon name="mdi:phone-outline" size="16" /><span>777 357 9000 · 777 357 9001</span></div>
        <div class="adm-contact-item"><Icon name="mdi:clock-outline" size="16" /><span>Lunes a Viernes 8:00–18:00 · Sábados 9:00–13:00</span></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.adm-pre { --p: #546E7A; --pd: #37474F; --pl: #78909C; background: #f0f2f4; padding: 5.5rem 0; }
.adm-container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
.adm-pre__head { text-align: center; margin-bottom: 3.5rem; }
.adm-eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--p); margin: 0 0 0.5rem; }
.adm-title { font-family: var(--font-serif, Georgia, serif); font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 800; color: #1a2530; margin: 0 0 0.75rem; line-height: 1.2; }
.adm-title em { font-style: italic; color: var(--p); }
.adm-pre__sub { font-size: 0.95rem; color: #666; max-width: 480px; margin: 0 auto; }

/* Timeline */
.adm-steps { display: flex; flex-direction: column; max-width: 820px; margin: 0 auto 3rem; }
.adm-step { display: flex; gap: 1.5rem; }
.adm-step__aside { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
.adm-step__num {
  width: 48px; height: 48px; border-radius: 50%;
  background: var(--p); color: #fff;
  font-size: 0.82rem; font-weight: 900; letter-spacing: 0.06em;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 12px rgba(84,110,122,0.3); flex-shrink: 0; z-index: 1;
}
.adm-step__line { width: 2px; flex: 1; min-height: 24px; background: rgba(84,110,122,0.2); margin: 4px 0; }

.adm-step__body { padding: 0 0 2.5rem 0; flex: 1; }
.adm-step__title { font-family: var(--font-serif, Georgia, serif); font-size: 1.15rem; font-weight: 800; color: #1a2530; margin: 0.5rem 0 0.625rem; }
.adm-step__desc { font-size: 0.9rem; color: #555; line-height: 1.7; margin: 0 0 0.875rem; }
.adm-step__list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.4rem; }
.adm-step__list li { display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.85rem; color: #555; line-height: 1.5; }
.adm-step__dot { width: 6px; height: 6px; min-width: 6px; border-radius: 50%; background: var(--p); margin-top: 0.45em; }
.adm-step__notebox {
  margin-top: 1rem; background: #fff; border-left: 3px solid var(--p);
  border-radius: 0 10px 10px 0; padding: 1rem 1.25rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.adm-step__note-label { font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: var(--p); margin: 0 0 0.5rem; }
.adm-step__notebox ol { padding-left: 1.25rem; margin: 0; display: flex; flex-direction: column; gap: 0.375rem; }
.adm-step__notebox ol li { font-size: 0.82rem; color: #555; line-height: 1.55; }

/* Contacto */
.adm-pre__contact {
  display: flex; flex-wrap: wrap; gap: 1.5rem;
  background: #fff; border-radius: 14px; padding: 1.5rem 2rem;
  border: 1px solid rgba(84,110,122,0.12); max-width: 820px; margin: 0 auto;
}
.adm-contact-item { display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; color: #444; }
.adm-contact-item svg { color: var(--p); flex-shrink: 0; }
</style>
