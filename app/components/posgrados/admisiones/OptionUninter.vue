<script setup lang="ts">
const pasos = [
  { num: "01", title: "Crea tu cuenta en el portal", desc: "Ingresa al portal de admisiones en línea, regístrate con tu correo electrónico y completa tu perfil con datos personales y académicos." },
  { num: "02", title: "Carga tu documentación digital", desc: "Sube en formato PDF o JPG todos los documentos requeridos: acta de nacimiento, CURP, certificados, fotografía y carta de motivos." },
  { num: "03", title: "Examen y entrevista virtual", desc: "Realiza tu examen de admisión en línea y agenda tu entrevista virtual con un asesor académico de Posgrados UNINTER." },
  { num: "04", title: "Pago y confirmación de matrícula", desc: "Realiza el pago de inscripción y primera colegiatura vía transferencia bancaria o pago en línea. Recibirás tu número de matrícula por correo." },
];
</script>

<template>
  <section id="proceso-linea" class="adm-online">
    <div class="adm-container">
      <div class="adm-online__head">
        <p class="adm-eyebrow">Modalidad en Línea</p>
        <h2 class="adm-title">Proceso de Admisión <em>en Línea</em></h2>
        <p class="adm-online__sub">
          Es la nueva normalidad. Desde cualquier lugar, completa tu proceso de admisión
          100% digital sin necesidad de acudir al campus. Fácil, rápido y seguro.
        </p>
      </div>

      <div class="adm-online__grid">
        <div v-for="paso in pasos" :key="paso.num" class="adm-ocard">
          <span class="adm-ocard__num">{{ paso.num }}</span>
          <h3 class="adm-ocard__title">{{ paso.title }}</h3>
          <p class="adm-ocard__desc">{{ paso.desc }}</p>
        </div>
      </div>

      <div class="adm-online__cta">
        <a href="https://posgrados.uninter.edu.mx/Admisiones" target="_blank" class="adm-btn adm-btn--primary">
          Iniciar proceso en línea →
        </a>
        <a href="mailto:admisiones@uninter.edu.mx" class="adm-btn adm-btn--ghost">
          admisiones@uninter.edu.mx
        </a>
      </div>

      <!-- Nota al pie -->
      <div class="adm-online__note">
        <Icon name="mdi:information-outline" size="16" />
        <span>
          Toda la documentación oficial expedida en el extranjero y/o aquel derivado de institución ajena a la Dirección de Admisiones deberá contar con la validación necesaria.
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.adm-online { --p: #546E7A; --pd: #37474F; --pl: #78909C; --pbg: #0f1a22; background: var(--pbg); padding: 5.5rem 0; }
.adm-container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
.adm-online__head { text-align: center; margin-bottom: 3rem; }
.adm-eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--pl); margin: 0 0 0.5rem; }
.adm-title { font-family: var(--font-serif, Georgia, serif); font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 800; color: #fff; margin: 0 0 0.75rem; line-height: 1.2; }
.adm-title em { font-style: italic; color: var(--pl); }
.adm-online__sub { font-size: 0.95rem; color: rgba(255,255,255,0.52); max-width: 520px; margin: 0 auto; line-height: 1.65; }

.adm-online__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; margin-bottom: 3rem; }
.adm-ocard {
  background: rgba(255,255,255,0.04); border: 1px solid rgba(84,110,122,0.18);
  border-radius: 16px; padding: 1.75rem;
  display: flex; flex-direction: column; gap: 0.75rem;
  transition: background 0.2s, border-color 0.2s;
}
.adm-ocard:hover { background: rgba(84,110,122,0.1); border-color: var(--p); }
.adm-ocard__num { font-family: var(--font-serif, Georgia, serif); font-size: 2.8rem; font-weight: 900; color: rgba(84,110,122,0.28); line-height: 1; }
.adm-ocard__title { font-family: var(--font-serif, Georgia, serif); font-size: 1rem; font-weight: 800; color: #fff; margin: 0; line-height: 1.3; }
.adm-ocard__desc { font-size: 0.83rem; color: rgba(255,255,255,0.52); line-height: 1.65; margin: 0; }

.adm-online__cta { display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem; }
.adm-btn {
  display: inline-flex; align-items: center; gap: 0.5rem;
  font-size: 0.88rem; font-weight: 700; padding: 0.8rem 1.75rem; border-radius: 8px;
  text-decoration: none; transition: all 0.2s;
}
.adm-btn--primary { background: var(--p); color: #fff; }
.adm-btn--primary:hover { background: var(--pd); }
.adm-btn--ghost { background: transparent; color: rgba(255,255,255,0.65); border: 1.5px solid rgba(255,255,255,0.2); }
.adm-btn--ghost:hover { border-color: var(--pl); color: var(--pl); }

.adm-online__note {
  display: flex; align-items: flex-start; gap: 0.5rem; max-width: 680px; margin: 0 auto;
  font-size: 0.8rem; color: rgba(255,255,255,0.35); line-height: 1.6;
}
.adm-online__note svg { color: var(--pl); flex-shrink: 0; margin-top: 0.1rem; }

@media (max-width: 1024px) { .adm-online__grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .adm-online__grid { grid-template-columns: 1fr; } }
</style>
