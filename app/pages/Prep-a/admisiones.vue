<script setup lang="ts">
import Navbare from "~/components/navbar/Index.vue";
import PortalFooter from "~/components/layout/Footer.vue";
import FloatingActions from "@/components/portal/FloatingActions.vue";
import {
  FileCheck,
  ClipboardList,
  GraduationCap,
  Award,
  ShieldCheck,
  BookOpen,
} from "lucide-vue-next";

useHead({
  title: "Proceso de Admisión Prepa Abierta Prep-A | UNINTER",
  meta: [
    {
      name: "description",
      content:
        "Inicia tu proceso de admisión a Prepa Abierta UNINTER (Prep-A). Bachillerato flexible, certificación oficial SEP, acompañamiento personalizado y 22 módulos.",
    },
  ],
  script: [
    {
      src: "https://link.superleads.mx/js/form_embed.js",
      defer: true,
    },
  ],
});

const whatsappMessage = encodeURIComponent(
  "¡Hola! Me gustaría iniciar mi proceso de admisión en Prepa Abierta UNINTER (Prep-A) y recibir información sobre fechas, módulos y requisitos.",
);
const whatsappUrl = `https://wa.me/527773579000?text=${whatsappMessage}`;

const stats = [
  { value: "4", label: "Pasos del proceso", icon: "ClipboardList" },
  { value: "100%", label: "Validez Oficial SEP", icon: "ShieldCheck" },
  { value: "22", label: "Módulos del Plan SEP", icon: "BookOpen" },
  { value: "40+", label: "Años de excelencia", icon: "Award" },
];

const pasos = [
  {
    num: "01",
    title: "Agenda una cita con tu asesor educativo",
    desc: "Programa tu cita presencial en Campus Cuernavaca o virtual con tu asesor educativo para conocer el plan modular de Prep-A y dar inicio a tu proceso.",
    items: [],
  },
  {
    num: "02",
    title: "Entrega de Curp del alumno e INE (Alumno o tutor)",
    desc: "Presenta la documentación básica requerida (CURP del aspirante, certificado de secundaria e identificación oficial) para la integración y validación oficial de tu expediente.",
    items: [],
  },
  {
    num: "03",
    title: "Propuesta Académica y Esquema de Módulos",
    desc: "Recibe tu diagnóstico de admisión, calendario de asesorías y propuesta de beca o facilidades de pago adaptadas a tu disponibilidad.",
    items: [],
  },
  {
    num: "04",
    title: "Pago de Inscripción",
    desc: "Realiza el pago de tu inscripción en caja del campus o vía transferencia electrónica para formalizar tu lugar y comenzar tus módulos en Prep-A.",
    items: [],
    notes: [
      "La Inscripción, Acreditación y Certificación son de carácter oficial ante la Secretaría de Educación Pública (SEP).",
      "Certificados extranjeros requieren legalización o apostilla, así como traducción autorizada.",
    ],
  },
];
</script>

<template>
  <div class="adm-page">
    <Navbare />

    <!-- ══════════════════════════════════════════
         HERO SECTION PREPA ABIERTA (PREP-A)
    ══════════════════════════════════════════ -->
    <div class="adm-hero-wrapper">
      <section class="adm-hero-section">
        <div class="adm-hero-slide">
          <picture class="adm-hero-picture">
            <source
              media="(max-width: 768px)"
              srcset="/images/prep-A/heroMobile/23.png"
            />
            <img
              src="/images/prep-A/hero/PREPa.png"
              alt="Proceso de Admisión Prepa Abierta UNINTER"
              class="adm-hero-slide__img"
            />
          </picture>

          <!-- Capa de Blur Gradiente Horizontal Transparente con Tinte Teal -->
          <div class="adm-hero-slide__blur-overlay"></div>

          <div class="adm-hero-content uninter-container">
            <div class="adm-hero-inner">
              <h1 class="adm-hero-title">
                Proceso de<br />
                <span class="adm-hero-title__accent">admisión Prep-A</span>
              </h1>

              <p class="adm-hero-subtitle">
                Termina tu bachillerato a tu propio ritmo con el respaldo, asesoría docente
                y calidad académica internacional de UNINTER. Inicia tu proceso hoy.
              </p>

              <div class="adm-hero-ctas">
                <a href="#requisitos" class="adm-btn-stacked">
                  <FileCheck :size="22" />
                  <span>Requisitos de Admisión</span>
                </a>
                <a href="#registro" class="adm-btn-stacked">
                  <GraduationCap :size="22" />
                  <span>Registrarse Ahora</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- BARRA DE ESTADÍSTICAS (LIQUID GLASS BAR CON ACENTO TEAL PREP-A) -->
      <div class="adm-stats-bar">
        <div class="uninter-container adm-stats__inner">
          <div v-for="stat in stats" :key="stat.label" class="adm-stat">
            <div class="adm-stat__icon">
              <ClipboardList v-if="stat.icon === 'ClipboardList'" :size="28" />
              <ShieldCheck v-else-if="stat.icon === 'ShieldCheck'" :size="28" />
              <BookOpen v-else-if="stat.icon === 'BookOpen'" :size="28" />
              <Award v-else-if="stat.icon === 'Award'" :size="28" />
            </div>
            <div class="adm-stat__text">
              <span class="adm-stat__value">{{ stat.value }}</span>
              <span class="adm-stat__label">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ══════════════════════════════════════════
         BIENVENIDA
    ══════════════════════════════════════════ -->
    <section class="adm-welcome">
      <div class="adm-welcome__top">
        <div class="uninter-container">
          <div class="adm-welcome__intro">
            <div>
              <p class="adm-eyebrow">Admisiones Prepa Abierta</p>
              <h2 class="adm-title">
                Comienza tu admisión<br /><em>a Prepa Abierta Prep-A</em>
              </h2>
            </div>
            <p class="adm-desc">
              Prepa Abierta UNINTER te brinda la flexibilidad que necesitas para concluir tu educación
              media superior sin descuidar tus proyectos personales o laborales. Contarás con asesoría
              personalizada, horarios flexibles y acompañamiento constante en cada uno de los 22 módulos oficiales.
            </p>
          </div>
        </div>
      </div>
      <div class="adm-welcome__cards-wrap">
        <div class="uninter-container adm-welcome__cards">
          <a href="#requisitos" class="adm-wcard">
            <div class="adm-wcard__icon">
              <Icon name="mdi:school-outline" size="26" />
            </div>
            <h3 class="adm-wcard__title">Admisión Presencial</h3>
            <p class="adm-wcard__desc">
              Conoce nuestro Campus Cuernavaca, entrega tu documentación básica y recibe asesoría con tu familia.
            </p>
            <span class="adm-wcard__link">Ver proceso →</span>
          </a>
          <a href="#registro" class="adm-wcard">
            <div class="adm-wcard__icon">
              <Icon name="mdi:laptop" size="26" />
            </div>
            <h3 class="adm-wcard__title">Proceso en Línea</h3>
            <p class="adm-wcard__desc">
              Completa tu pre-registro digital desde casa y un asesor de Prep-A se pondrá en contacto contigo de inmediato.
            </p>
            <span class="adm-wcard__link">Registrarse →</span>
          </a>
          <a
            :href="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="adm-wcard adm-wcard--whatsapp"
          >
            <div class="adm-wcard__icon adm-wcard__icon--wa">
              <Icon name="mdi:whatsapp" size="26" />
            </div>
            <h3 class="adm-wcard__title">¿Dudas sobre Prep-A?</h3>
            <p class="adm-wcard__desc">
              Chatea directamente con el equipo de admisiones de Prepa Abierta y resuelve tus preguntas al instante.
            </p>
            <span class="adm-wcard__link adm-wcard__link--wa">
              Iniciar en WhatsApp →
            </span>
          </a>
        </div>
      </div>
    </section>

    <!-- PASOS & REQUISITOS -->
    <section id="requisitos" class="adm-pre">
      <div class="uninter-container">
        <div class="adm-pre__head">
          <p class="adm-eyebrow">Etapas de Ingreso</p>
          <h2 class="adm-title adm-title--dark">
            Proceso y Requisitos de <em>Prep-A</em>
          </h2>
          <p class="adm-pre__sub">
            Sigue estas 4 sencillas etapas para formalizar tu inscripción en Prepa Abierta UNINTER.
          </p>
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

        <div class="adm-pre__contact">
          <div class="adm-contact-item">
            <Icon name="mdi:email-outline" size="16" /><span>admisiones@uninter.edu.mx</span>
          </div>
          <div class="adm-contact-item">
            <Icon name="mdi:phone-outline" size="16" /><span>777 357 9000 ext. 1</span>
          </div>
          <div class="adm-contact-item">
            <Icon name="mdi:clock-outline" size="16" /><span>Lun-Vie 8:00–18:00 · Sáb 9:00–13:00</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════
         REGISTRO (FORMULARIO SUPERLEADS EXCLUSIVO PREP-A)
         (Cambiar el atributo src del iframe para actualizar el formulario)
    ══════════════════════════════════════════ -->
    <section id="registro" class="reg-section">
      <div class="uninter-container">
        <div class="reg-card">
          <div class="reg-mascot-side">
            <div class="mascot-wrap">
              <img
                src="/images/forms/legi-mascot.png"
                alt="Mascota Legi UNINTER"
                class="mascot-img"
              />
            </div>
          </div>
          <div class="reg-form-side">
            <iframe
              src="https://link.superleads.mx/widget/form/e1Bde2MfuZcjtc6lWtEN"
              style="width: 100%; height: 580px; border: none; border-radius: 4px; overflow: hidden;"
              id="inline-e1Bde2MfuZcjtc6lWtEN"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="FormAdmisionPrepA"
              data-height="1189"
              data-layout-iframe-id="inline-e1Bde2MfuZcjtc6lWtEN"
              data-form-id="e1Bde2MfuZcjtc6lWtEN"
              data-cookie-consent="true"
              data-cookie-consent-provider="auto"
              title="FormAdmisionPrepA"
            >
            </iframe>
          </div>
        </div>
      </div>
    </section>

    <PortalFooter />
    <FloatingActions />
  </div>
</template>

<style scoped>
.uninter-container {
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1.5rem;
}

/* ═══════════════════════════════════════════
   HERO SECTION (TEMA TEAL PREPA ABIERTA PREP-A)
═══════════════════════════════════════════ */
.adm-hero-section {
  --h: clamp(520px, 68vh, 680px);
  background: #0a1a18;
  overflow: hidden;
  position: relative;
}

.adm-hero-slide {
  align-items: center;
  display: flex;
  height: var(--h);
  position: relative;
  width: 100%;
}

.adm-hero-picture {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.adm-hero-slide__img {
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  object-position: center top;
}

/* ═══ CAPA DE BLUR GRADIENTE TRANSPARENTE CON TINTE TEAL ═══ */
.adm-hero-slide__blur-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  -webkit-backdrop-filter: blur(14px);
  backdrop-filter: blur(14px);
  background: linear-gradient(
    90deg,
    rgba(10, 26, 24, 0.75) 0%,
    rgba(10, 26, 24, 0.5) 30%,
    rgba(53, 136, 128, 0.15) 48%,
    transparent 60%
  );
  -webkit-mask-image: linear-gradient(
    90deg,
    #000 0%,
    #000 35%,
    transparent 60%
  );
  mask-image: linear-gradient(90deg, #000 0%, #000 35%, transparent 60%);
  pointer-events: none;
}

.adm-hero-content {
  position: relative;
  width: 100%;
  z-index: 2;
  padding-top: 1.5rem;
  padding-bottom: 2rem;
}

.adm-hero-inner {
  max-width: 620px;
}

.adm-hero-title {
  color: #ffffff;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2.2rem, 4.5vw, 3.8rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.08;
  margin: 0 0 1.25rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}

.adm-hero-title__accent {
  color: #51cab9;
}

.adm-hero-subtitle {
  color: rgba(255, 255, 255, 0.92);
  font-family: var(--font-sans, "Plus Jakarta Sans", sans-serif);
  font-size: clamp(0.95rem, 1.3vw, 1.08rem);
  line-height: 1.65;
  margin: 0 0 2rem;
  max-width: 530px;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.4);
}

.adm-hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 0.875rem;
}

.adm-btn-stacked {
  align-items: center;
  border-radius: 12px;
  cursor: pointer;
  display: inline-flex;
  font-family: var(--font-sans, "Plus Jakarta Sans", sans-serif);
  font-size: 0.9rem;
  font-weight: 700;
  justify-content: center;
  text-decoration: none;
  transition: all 0.2s ease;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: #ffffff;
  flex-direction: column;
  gap: 0.45rem;
  padding: 1.1rem 2rem;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.adm-btn-stacked:hover {
  background: rgba(81, 202, 185, 0.25);
  border-color: #51cab9;
  color: #51cab9;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(81, 202, 185, 0.3);
}

/* ═══════════════════════════════════════════
   LIQUID GLASS STATS BAR (PREP-A TEAL GLOW)
═══════════════════════════════════════════ */
.adm-stats-bar {
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
  background-attachment: fixed;
  background-color: #0a1a18f2;
  background-image: radial-gradient(
    circle at 50% 50%,
    rgba(81, 202, 185, 0.22) 0,
    transparent 60%
  );
  background-position: 50%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(81, 202, 185, 0.35);
  box-shadow: 0 4px 30px #00000080;
  padding: 1.35rem 0;
  position: relative;
  z-index: 10;
}

.adm-stats__inner {
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
}

.adm-stat {
  align-items: center;
  border-right: 1px solid rgba(81, 202, 185, 0.3);
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  padding: 0 1.5rem;
}

.adm-stat:last-child {
  border-right: none;
}

.adm-stat__icon {
  align-items: center;
  color: #51cab9;
  display: flex;
  justify-content: center;
  flex-shrink: 0;
}

.adm-stat__text {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}

.adm-stat__value {
  color: #ffffff;
  font-family: var(
    --font-sans,
    "Plus Jakarta Sans",
    system-ui,
    -apple-system,
    sans-serif
  );
  font-size: clamp(1.1rem, 1.3vw, 1.4rem);
  font-weight: 800;
  line-height: 1.2;
}

.adm-stat__label {
  color: rgba(255, 255, 255, 0.82);
  font-family: var(
    --font-sans,
    "Plus Jakarta Sans",
    system-ui,
    -apple-system,
    sans-serif
  );
  font-size: 0.88rem;
  font-weight: 500;
  letter-spacing: normal;
  margin-top: 0;
  text-align: left;
}

/* ═══════════════════════════════════════════
   BIENVENIDA & TARJETAS
═══════════════════════════════════════════ */
.adm-welcome {
  background-color: #ffffff;
  padding: 5rem 0 5.5rem;
}

.adm-welcome__top {
  margin-bottom: 3.5rem;
}

.adm-welcome__intro {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3.5rem;
  align-items: start;
}

.adm-eyebrow {
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #358880;
  margin: 0 0 0.6rem;
}

.adm-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 3.6vw, 2.9rem);
  font-weight: 800;
  color: #0f3c61;
  margin: 0;
  line-height: 1.12;
  letter-spacing: -0.01em;
}

.adm-title em {
  font-style: italic;
  color: #358880;
}

.adm-title--dark {
  color: #0f3c61;
}

.adm-desc {
  font-size: 0.98rem;
  line-height: 1.75;
  color: #1e293b;
  margin: 0;
  padding-top: 1.5rem;
  border-top: 2.5px solid #51cab9;
}

.adm-welcome__cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.adm-wcard {
  background: #ffffff;
  border: 1.5px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(15, 60, 97, 0.04);
  transition:
    transform 0.2s ease,
    border-color 0.2s ease,
    box-shadow 0.2s ease;
  cursor: pointer;
}

.adm-wcard:hover {
  transform: translateY(-4px);
  border-color: #358880;
  box-shadow: 0 14px 30px rgba(53, 136, 128, 0.15);
}

.adm-wcard--whatsapp:hover {
  transform: translateY(-4px);
  border-color: #25d366;
  box-shadow: 0 14px 30px rgba(37, 211, 102, 0.16);
}

.adm-wcard__icon--wa {
  background: rgba(37, 211, 102, 0.12);
  color: #16a34a;
}

.adm-wcard__link--wa {
  color: #15803d;
  font-weight: 700;
}

.adm-wcard__icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(53, 136, 128, 0.1);
  color: #358880;
  display: flex;
  align-items: center;
  justify-content: center;
}

.adm-wcard__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.15rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0;
}

.adm-wcard__desc {
  font-size: 0.88rem;
  color: #334155;
  line-height: 1.6;
  margin: 0;
  flex: 1;
}

.adm-wcard__link {
  font-size: 0.84rem;
  font-weight: 700;
  color: #358880;
  letter-spacing: 0.02em;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  transition:
    gap 0.2s ease,
    color 0.2s ease;
}

.adm-wcard:hover .adm-wcard__link {
  color: #0f3c61;
  gap: 0.45rem;
}

/* ═══════════════════════════════════════════
   STEPS & TIMELINE
═══════════════════════════════════════════ */
.adm-pre {
  background: #f0f7f6;
  padding: 5rem 0 5.5rem;
}

.adm-pre__head {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 3.5rem;
}

.adm-pre__sub {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-top: 0.5rem;
}

.adm-steps {
  display: flex;
  flex-direction: column;
  max-width: 820px;
  margin: 0 auto 3.5rem;
}

.adm-step {
  display: flex;
  gap: 2rem;
}

.adm-step__aside {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

.adm-step__num {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #358880;
  color: #ffffff;
  font-size: 1.15rem;
  font-weight: 800;
  font-family: var(--font-serif, Georgia, serif);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(53, 136, 128, 0.3);
}

.adm-step__line {
  width: 2px;
  flex: 1;
  min-height: 48px;
  background: #cbd5e1;
  margin: 0.5rem 0;
}

.adm-step__body {
  padding-bottom: 2.75rem;
  flex: 1;
}

.adm-step__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.25rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 0.5rem;
}

.adm-step__desc {
  font-size: 0.92rem;
  color: #475569;
  line-height: 1.65;
  margin: 0;
}

.adm-step__notebox {
  margin-top: 1rem;
  background: #e2f1ef;
  border-left: 3px solid #358880;
  padding: 0.85rem 1.15rem;
  border-radius: 0 8px 8px 0;
}

.adm-step__note-label {
  font-size: 0.78rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #358880;
  margin: 0 0 0.4rem;
}

.adm-step__notebox ol {
  margin: 0;
  padding-left: 1.2rem;
  font-size: 0.83rem;
  color: #334155;
  line-height: 1.5;
}

.adm-pre__contact {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
}

.adm-contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.88rem;
  color: #475569;
  font-weight: 600;
}

/* ═══════════════════════════════════════════
   RESPONSIVE
═══════════════════════════════════════════ */
@media (max-width: 900px) {
  .adm-welcome__intro {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .adm-welcome__cards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .adm-hero-section {
    --h: auto;
  }
  .adm-hero-slide {
    height: auto;
    min-height: clamp(500px, 80svh, 640px);
    padding: 3.5rem 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
  .adm-hero-slide__blur-overlay {
    background: linear-gradient(
      0deg,
      rgba(10, 26, 24, 0.95) 0%,
      rgba(10, 26, 24, 0.85) 35%,
      rgba(53, 136, 128, 0.45) 55%,
      transparent 85%
    );
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    mask-image: none;
    -webkit-mask-image: none;
  }
  .adm-hero-inner {
    text-align: center;
    margin: 0 auto;
  }
  .adm-hero-subtitle {
    margin: 0 auto 1.25rem;
  }
  .adm-hero-ctas {
    justify-content: center;
  }
  .adm-stats__inner {
    flex-wrap: wrap;
    gap: 1rem 0;
  }
  .adm-stat {
    border-bottom: 1px solid rgba(81, 202, 185, 0.2);
    border-right: none;
    flex: 1 1 50%;
    justify-content: center;
    padding: 0.75rem 0.5rem;
  }
  .adm-stat:nth-child(odd) {
    border-right: 1px solid rgba(81, 202, 185, 0.3);
  }
  .adm-stat:nth-last-child(-n + 2) {
    border-bottom: none;
  }
}

@media (max-width: 480px) {
  .adm-stat {
    border-bottom: 1px solid rgba(81, 202, 185, 0.2) !important;
    border-right: none !important;
    flex: 1 1 100%;
    padding: 0.85rem 1.5rem;
  }
  .adm-stat:last-child {
    border-bottom: none !important;
  }
}

/* ═══════════════════════════════════════════
   SECCIÓN DE REGISTRO SUPERLEADS
═══════════════════════════════════════════ */
.reg-section {
  background: #f0f7f6;
  padding: 5rem 0;
  scroll-margin-top: 80px;
}
.reg-card {
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 24px 60px rgba(53, 136, 128, 0.15);
  display: flex;
  min-height: 580px;
  overflow: hidden;
  border: 1px solid rgba(81, 202, 185, 0.25);
}
.reg-mascot-side {
  align-items: center;
  background: linear-gradient(145deg, #51cab9, #0f3c61);
  display: flex;
  flex: 0.75;
  justify-content: center;
  overflow: hidden;
  position: relative;
}
.reg-mascot-side:before {
  background: radial-gradient(
    circle at 30% 70%,
    rgba(255, 255, 255, 0.15) 0,
    transparent 60%
  );
  content: "";
  inset: 0;
  position: absolute;
}
.mascot-wrap {
  max-width: 300px;
  position: relative;
  width: 85%;
  z-index: 1;
}
.mascot-img {
  filter: drop-shadow(0 20px 30px rgba(0, 0, 0, 0.35));
  height: auto;
  -o-object-fit: contain;
  object-fit: contain;
  width: 100%;
}
.reg-form-side {
  flex: 1.25;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
}
@media (max-width: 900px) {
  .reg-card {
    flex-direction: column;
  }
  .reg-mascot-side {
    min-height: 200px;
    padding: 2.5rem 0;
  }
  .mascot-wrap {
    width: 50%;
  }
  .reg-form-side {
    padding: 2.5rem 1.75rem;
  }
}
@media (max-width: 560px) {
  .reg-section {
    padding: 3rem 0;
  }
  .reg-form-side {
    padding: 2rem 1.25rem;
  }
}
</style>
