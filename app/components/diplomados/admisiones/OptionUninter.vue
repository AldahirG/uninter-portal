<script setup lang="ts">
const pasos = [
  { num: "01", title: "Crea tu cuenta en el portal", desc: "Ingresa al portal de admisiones en línea, regístrate con tu correo y completa tu perfil con datos personales y académicos." },
  { num: "02", title: "Carga tu documentación digital", desc: "Sube en PDF o JPG los documentos requeridos: identificación oficial, CURP, certificado de estudios y fotografía." },
  { num: "03", title: "Entrevista con asesor virtual", desc: "Agenda tu entrevista virtual con un asesor de Diplomados UNINTER para resolver dudas y confirmar el programa de tu interés." },
  { num: "04", title: "Pago y confirmación de inscripción", desc: "Realiza el pago de inscripción vía transferencia o pago en línea. Recibirás tu número de matrícula por correo electrónico." },
];
</script>

<template>
  <section id="proceso-linea" class="adp-ol">
    <div class="adp-container">
      <div class="adp-ol__head">
        <p class="adp-eyebrow">Modalidad en Línea</p>
        <h2 class="adp-title">Proceso de Admisión <em>en Línea</em></h2>
        <p class="adp-ol__sub">Desde cualquier lugar, completa tu proceso de admisión 100% digital. Fácil, rápido y seguro.</p>
      </div>

      <div class="adp-ol__grid">
        <div v-for="paso in pasos" :key="paso.num" class="adp-ocard">
          <span class="adp-ocard__num">{{ paso.num }}</span>
          <h3 class="adp-ocard__title">{{ paso.title }}</h3>
          <p class="adp-ocard__desc">{{ paso.desc }}</p>
        </div>
      </div>

      <div class="adp-ol__cta">
        <a href="https://diplomados.uninter.edu.mx/Admisiones" target="_blank" class="adp-btn adp-btn--primary">Iniciar proceso en línea →</a>
        <a href="mailto:diplomados@uninter.edu.mx" class="adp-btn adp-btn--ghost">diplomados@uninter.edu.mx</a>
      </div>

      <div class="adp-ol__note">
        <Icon name="mdi:information-outline" size="16" />
        <span>Toda la documentación oficial expedida en el extranjero deberá contar con apostilla y traducción certificada por autoridad competente.</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.adp-ol { --p: #6D4C41; --pd: #4E342E; --pl: #A1887F; --pbg: #180f0c; background: var(--pbg); padding: 5.5rem 0; }
.adp-container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
.adp-ol__head { text-align: center; margin-bottom: 3rem; }
.adp-eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--pl); margin: 0 0 0.5rem; }
.adp-title { font-family: var(--font-serif, Georgia, serif); font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 800; color: #fff; margin: 0 0 0.75rem; line-height: 1.2; }
.adp-title em { font-style: italic; color: var(--pl); }
.adp-ol__sub { font-size: 0.95rem; color: rgba(255,255,255,0.52); max-width: 520px; margin: 0 auto; line-height: 1.65; }

.adp-ol__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; margin-bottom: 3rem; }
.adp-ocard { background: rgba(255,255,255,0.04); border: 1px solid rgba(109,76,65,0.22); border-radius: 16px; padding: 1.75rem; display: flex; flex-direction: column; gap: 0.75rem; transition: background 0.2s, border-color 0.2s; }
.adp-ocard:hover { background: rgba(109,76,65,0.1); border-color: var(--p); }
.adp-ocard__num { font-family: var(--font-serif, Georgia, serif); font-size: 2.8rem; font-weight: 900; color: rgba(109,76,65,0.3); line-height: 1; }
.adp-ocard__title { font-family: var(--font-serif, Georgia, serif); font-size: 1rem; font-weight: 800; color: #fff; margin: 0; line-height: 1.3; }
.adp-ocard__desc { font-size: 0.83rem; color: rgba(255,255,255,0.52); line-height: 1.65; margin: 0; }

.adp-ol__cta { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem; }
.adp-btn { display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.88rem; font-weight: 700; padding: 0.8rem 1.75rem; border-radius: 8px; text-decoration: none; transition: all 0.2s; }
.adp-btn--primary { background: var(--p); color: #fff; }
.adp-btn--primary:hover { background: var(--pd); }
.adp-btn--ghost { background: transparent; color: rgba(255,255,255,0.65); border: 1.5px solid rgba(255,255,255,0.2); }
.adp-btn--ghost:hover { border-color: var(--pl); color: var(--pl); }

.adp-ol__note { display: flex; align-items: flex-start; gap: 0.5rem; max-width: 680px; margin: 0 auto; font-size: 0.8rem; color: rgba(255,255,255,0.35); line-height: 1.6; }
.adp-ol__note svg { color: var(--pl); flex-shrink: 0; margin-top: 0.1rem; }

@media (max-width: 1024px) { .adp-ol__grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px)  { .adp-ol__grid { grid-template-columns: 1fr; } }
</style>
