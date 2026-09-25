<script setup lang="ts">
import Navbare from "~/components/navbar/Index.vue";
import BlogsSection from "~/components/portal/Blogssection.vue";
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
  title: "Proceso de Admisión | UNINTER",
  script: [
    {
      src: "https://link.superleads.mx/js/form_embed.js",
      defer: true,
    },
  ],
});

const whatsappMessage = encodeURIComponent(
  "¡Hola! Me gustaría iniciar mi proceso de admisión en UNINTER y recibir asesoría sobre requisitos, fechas y becas disponibles.",
);
const whatsappUrl = `https://wa.me/527773579000?text=${whatsappMessage}`;

const stats = [
  { value: "4", label: "Pasos del proceso", icon: "ClipboardList" },
  { value: "100%", label: "Validez Oficial SEP", icon: "ShieldCheck" },
  { value: "Todos", label: "Niveles Educativos", icon: "BookOpen" },
  { value: "40+", label: "Años de excelencia", icon: "Award" },
];

const pasos = [
  {
    num: "01",
    title: "Agenda una cita con tu asesor educativo",
    desc: "Programa tu cita presencial o virtual con tu asesor educativo para recibir orientación personalizada y dar inicio a tu proceso de admisión.",
    items: [],
  },
  {
    num: "02",
    title: "Entrega de Curp del alumno e INE (Alumno o tutor)",
    desc: "Presenta la documentación básica requerida para la integración y validación oficial de tu expediente.",
    items: [],
  },
  {
    num: "03",
    title: "Propuesta de Beca",
    desc: "Recibe tu diagnóstico de admisión y la propuesta formal de beca académica (según tu promedio y tipo de escuela de procedencia).",
    items: [],
  },
  {
    num: "04",
    title: "Pago de Inscripción",
    desc: "Realiza el pago de tu inscripción y primera colegiatura en caja del campus o vía transferencia electrónica.",
    items: [],
    notes: [
      "Certificados extranjeros no son válidos sin apostilla.",
      "Cualquier documento en idioma distinto al español requiere traducción oficial por perito autorizado.",
    ],
  },
];
</script>

<template>
  <div class="adm-page">
    <Navbare />

    <!-- ══════════════════════════════════════════
         HERO SECTION (68% VIEWPORT CON BLUR GRADIENTE)
    ══════════════════════════════════════════ -->
    <div class="adm-hero-wrapper">
      <section class="adm-hero-section">
        <div class="adm-hero-slide">
          <!-- Fotografía de fondo limpia -->
          <img
            src="/images/hero/admision.jpg"
            alt="Proceso de Admisión Licenciaturas UNINTER"
            class="adm-hero-slide__img"
          />

          <!-- Capa de Blur Gradiente Horizontal Transparente -->
          <div class="adm-hero-slide__blur-overlay"></div>

          <div class="adm-hero-content uninter-container">
            <div class="adm-hero-inner">
              <h1 class="adm-hero-title">
                Proceso de<br />
                <span class="adm-hero-title__accent">admisión</span>
              </h1>

              <p class="adm-hero-subtitle">
                Completa tu proceso paso a paso, consulta tu beca y asegura tu
                lugar.
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

      <!-- BARRA DE ESTADÍSTICAS (LIQUID GLASS BAR) -->
      <div class="adm-stats-bar">
        <div class="uninter-container adm-stats__inner">
          <div v-for="stat in stats" :key="stat.label" class="adm-stat">
            <div class="adm-stat__icon">
              <ClipboardList v-if="stat.icon === 'ClipboardList'" size="28" />
              <ShieldCheck v-else-if="stat.icon === 'ShieldCheck'" size="28" />
              <BookOpen v-else-if="stat.icon === 'BookOpen'" size="28" />
              <Award v-else-if="stat.icon === 'Award'" size="28" />
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
         BIENVENIDA (FONDO BLANCO / CARDS BLANCAS)
    ══════════════════════════════════════════ -->
    <section class="adm-welcome">
      <div class="adm-welcome__top">
        <div class="uninter-container">
          <div class="adm-welcome__intro">
            <div>
              <p class="adm-eyebrow">Admisiones</p>
              <h2 class="adm-title">
                Comienza tu admisión<br /><em>a UNINTER</em>
              </h2>
            </div>
            <p class="adm-desc">
              Universidad Internacional te brinda una formación de excelencia en
              todos sus niveles educativos en un ambiente multicultural. El
              proceso de admisión es ágil y cuenta con el apoyo continuo de un
              asesor asignado que resolverá cualquier duda sobre requisitos,
              becas y trámites de ingreso para secundaria, bachillerato,
              licenciaturas o posgrados.
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
              Entrega de papeles en el Campus Cuernavaca y entrevista con tu
              asesor.
            </p>
            <span class="adm-wcard__link">Ver proceso →</span>
          </a>
          <a href="#registro" class="adm-wcard">
            <div class="adm-wcard__icon">
              <Icon name="mdi:laptop" size="26" />
            </div>
            <h3 class="adm-wcard__title">Proceso en Línea</h3>
            <p class="adm-wcard__desc">
              Completa tu registro y carga tu documentación en formato digital.
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
            <h3 class="adm-wcard__title">¿Dudas o Consultas?</h3>
            <p class="adm-wcard__desc">
              Chatea directamente con nuestro equipo de admisiones y recibe
              asesoría inmediata para iniciar tu proceso.
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
          <p class="adm-eyebrow">Proceso Presencial</p>
          <h2 class="adm-title adm-title--dark">
            Proceso y Requisitos de <em>Ingreso</em>
          </h2>
          <p class="adm-pre__sub">
            Sigue estas 4 sencillas etapas para formalizar tu inscripción en
            cualquier nivel educativo.
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
            <Icon name="mdi:email-outline" size="16" /><span
              >admisiones@uninter.edu.mx</span
            >
          </div>
          <div class="adm-contact-item">
            <Icon name="mdi:phone-outline" size="16" /><span
              >777 357 9000 ext. 1</span
            >
          </div>
          <div class="adm-contact-item">
            <Icon name="mdi:clock-outline" size="16" /><span
              >Lun-Vie 8:00–18:00 · Sáb 9:00–13:00</span
            >
          </div>
        </div>
      </div>
    </section>

    <!-- BLOGS (comentada temporalmente) -->
    <!-- <BlogsSection /> -->

    <!-- ══════════════════════════════════════════
         REGISTRO (FORMULARIO SUPERLEADS EXCLUSIVO DE ESTA VISTA)
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
              src="https://link.superleads.mx/widget/form/6Eb1HzKNQtIl2AxJZwz7"
              style="
                width: 100%;
                height: 100%;
                border: none;
                border-radius: 4px;
              "
              id="inline-6Eb1HzKNQtIl2AxJZwz7"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="FormAdmisionLic"
              data-height="1147"
              data-layout-iframe-id="inline-6Eb1HzKNQtIl2AxJZwz7"
              data-form-id="6Eb1HzKNQtIl2AxJZwz7"
              data-cookie-consent="true"
              data-cookie-consent-provider="auto"
              title="FormAdmisionLic"
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
   HERO SECTION (68% VIEWPORT)
═══════════════════════════════════════════ */
.adm-hero-section {
  --h: clamp(520px, 68vh, 680px);
  background: #001a2e;
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

.adm-hero-slide__img {
  height: 100%;
  inset: 0;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  width: 100%;
  transform: none;
}

/* ═══ CAPA DE BLUR GRADIENTE TRANSPARENTE ═══ */
.adm-hero-slide__blur-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  -webkit-backdrop-filter: blur(14px);
  backdrop-filter: blur(14px);
  background: linear-gradient(
    90deg,
    rgba(0, 26, 46, 0.6) 0%,
    rgba(0, 26, 46, 0.35) 30%,
    rgba(0, 26, 46, 0.1) 45%,
    transparent 58%
  );
  -webkit-mask-image: linear-gradient(
    90deg,
    #000 0%,
    #000 35%,
    transparent 58%
  );
  mask-image: linear-gradient(90deg, #000 0%, #000 35%, transparent 58%);
  pointer-events: none;
}

.adm-hero-content {
  position: relative;
  width: 100%;
  z-index: 2;
  padding-bottom: 2rem;
}

.adm-hero-inner {
  max-width: 620px;
}

.adm-hero-logo-full {
  filter: brightness(0) invert(1);
  height: 46px;
  margin-bottom: 1.25rem;
  -o-object-fit: contain;
  object-fit: contain;
}

.adm-hero__breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
  margin-bottom: 1rem;
}

.adm-hero__breadcrumb a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

.adm-hero__breadcrumb a:hover {
  color: #00b2e3;
}

.adm-breadcrumb-active {
  color: #00b2e3;
}

.adm-hero-title {
  color: #ffffff;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.06;
  margin: 0 0 1.25rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
}

.adm-hero-title__accent {
  color: #00b2e3;
}

.adm-hero-subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: clamp(0.95rem, 1.4vw, 1.08rem);
  line-height: 1.65;
  margin: 0 0 2rem;
  max-width: 520px;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.35);
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
  background: rgba(0, 178, 227, 0.25);
  border-color: #00b2e3;
  color: #00b2e3;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 178, 227, 0.25);
}

/* ═══════════════════════════════════════════
   LIQUID GLASS STATS BAR
═══════════════════════════════════════════ */
.adm-stats-bar {
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
  background-attachment: fixed;
  background-color: #001a2ef2;
  background-image: radial-gradient(
    circle at 50% 50%,
    rgba(0, 178, 227, 0.15) 0,
    transparent 60%
  );
  background-position: 50%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(0, 178, 227, 0.3);
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
  border-right: 1px solid rgba(0, 178, 227, 0.3);
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
  color: #00b2e3;
  display: flex;
  justify-content: center;
}

.adm-stat__text {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}

.adm-stat__value {
  color: #ffffff;
  font-size: clamp(1.1rem, 1.3vw, 1.4rem);
  font-weight: 800;
  line-height: 1.2;
}

.adm-stat__label {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.88rem;
  font-weight: 500;
  letter-spacing: normal;
  margin-top: 0;
  text-align: left;
  text-transform: none;
}

/* ═══════════════════════════════════════════
   BIENVENIDA & TARJETAS (FONDO BLANCO / CARDS BLANCAS)
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
  color: #0084d1;
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
  color: #0084d1;
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
  border-top: 2.5px solid #0084d1;
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
  border-color: #0084d1;
  box-shadow: 0 14px 30px rgba(0, 132, 209, 0.12);
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
  background: rgba(0, 132, 209, 0.1);
  color: #0084d1;
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
  color: #0084d1;
  letter-spacing: 0.02em;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  transition:
    gap 0.2s ease,
    color 0.2s ease;
}

.adm-wcard:hover .adm-wcard__link {
  color: #005f96;
  gap: 0.45rem;
}

/* ═══════════════════════════════════════════
   STEPS & TIMELINE
═══════════════════════════════════════════ */
.adm-pre {
  --p: #0f3c61;
  --pd: #0b2943;
  --pl: #0084d1;
  background: #f8fafc;
  padding: 5.5rem 0;
}

.adm-pre__head {
  text-align: center;
  margin-bottom: 3.5rem;
}

.adm-pre__sub {
  font-size: 0.95rem;
  color: #64748b;
  max-width: 480px;
  margin: 0.5rem auto 0;
}

.adm-steps {
  display: flex;
  flex-direction: column;
  max-width: 820px;
  margin: 0 auto 3rem;
}

.adm-step {
  display: flex;
  gap: 1.5rem;
}

.adm-step__aside {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

.adm-step__num {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #0f3c61;
  color: #ffffff;
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.06em;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(15, 60, 97, 0.25);
  flex-shrink: 0;
  z-index: 1;
}

.adm-step__line {
  width: 2px;
  flex: 1;
  min-height: 24px;
  background: rgba(15, 60, 97, 0.2);
  margin: 4px 0;
}

.adm-step__body {
  padding: 0 0 2.5rem 0;
  flex: 1;
}

.adm-step__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.15rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0.5rem 0 0.625rem;
}

.adm-step__desc {
  font-size: 0.9rem;
  color: #334155;
  line-height: 1.7;
  margin: 0 0 0.875rem;
}

.adm-step__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.adm-step__list li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #334155;
  line-height: 1.5;
}

.adm-step__dot {
  width: 6px;
  height: 6px;
  min-width: 6px;
  border-radius: 50%;
  background: #0084d1;
  margin-top: 0.45em;
}

.adm-step__notebox {
  margin-top: 1rem;
  background: #ffffff;
  border-left: 3px solid #0084d1;
  border-radius: 0 10px 10px 0;
  padding: 1rem 1.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.adm-step__note-label {
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #0f3c61;
  margin: 0 0 0.5rem;
}

.adm-step__notebox ol {
  padding-left: 1.25rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
}

.adm-step__notebox ol li {
  font-size: 0.82rem;
  color: #334155;
  line-height: 1.55;
}

.adm-pre__contact {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1.5rem;
  background: #ffffff;
  border-radius: 14px;
  padding: 1.5rem 2rem;
  border: 1px solid #e2e8f0;
  max-width: 820px;
  margin: 0 auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
}

.adm-contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #334155;
}

.adm-contact-item svg {
  color: #0084d1;
  flex-shrink: 0;
}

/* ═══════════════════════════════════════════
   RESPONSIVE
═══════════════════════════════════════════ */
@media (max-width: 768px) {
  .adm-hero-section {
    --h: auto;
  }
  .adm-hero-slide {
    min-height: clamp(440px, 65vh, 580px);
    padding: 3.5rem 0;
  }
  .adm-hero-slide__blur-overlay {
    -webkit-mask-image: none;
    mask-image: none;
    background: rgba(0, 26, 46, 0.65);
  }
  .adm-stats__inner {
    flex-wrap: wrap;
    gap: 1rem 0;
  }
  .adm-stat {
    flex: 1 1 50%;
    border-right: none;
    border-bottom: 1px solid rgba(0, 178, 227, 0.2);
    justify-content: center;
    padding: 0.75rem 0.5rem;
  }
  .adm-stat:nth-child(odd) {
    border-right: 1px solid rgba(0, 178, 227, 0.3);
  }
  .adm-stat:nth-last-child(-n + 2) {
    border-bottom: none;
  }
  .adm-welcome__intro {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .adm-welcome__cards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .adm-hero-ctas {
    flex-direction: column;
  }
  .adm-btn-stacked,
  .adm-stat {
    justify-content: center;
  }
  .adm-stat {
    border-bottom: 1px solid rgba(0, 178, 227, 0.2) !important;
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
  background: #eef2f6;
  padding: 5rem 0;
  scroll-margin-top: 80px;
}
.reg-card {
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 24px 60px rgba(0, 59, 92, 0.12);
  display: flex;
  min-height: 580px;
  overflow: hidden;
}
.reg-mascot-side {
  align-items: center;
  background: linear-gradient(145deg, #1a73e8, #003b5c);
  display: flex;
  flex: 0.75;
  justify-content: center;
  overflow: hidden;
  position: relative;
}
.reg-mascot-side:before {
  background: radial-gradient(
    circle at 30% 70%,
    hsla(0, 0%, 100%, 0.07) 0,
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
