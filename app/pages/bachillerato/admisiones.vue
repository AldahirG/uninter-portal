<script setup lang="ts">
import Navbare from "~/components/navbar/Index.vue";
import BlogsSection from "~/components/portal/Blogssection.vue";
import FormRegister from "~/components/bachillerato/FormRegister.vue";
import PortalFooter from "~/components/layout/Footer.vue";
import {
  FileCheck,
  GraduationCap,
  Layers,
  Calendar,
  BookOpen,
  Globe2,
  ShieldCheck,
} from "lucide-vue-next";

useHead({ title: "Proceso de Admisión | Bachillerato Internacional BIU" });

const stats = [
  { value: "Modalidades", label: "Disponibles", icon: "Layers" },
  { value: "Años de", label: "Duración", icon: "Calendar" },
  { value: "Materias en", label: "Inglés", icon: "BookOpen" },
  { value: "Enfoque", label: "Bilingüe", icon: "Globe" },
  { value: "Validez", label: "SEP RVOE", icon: "ShieldCheck" },
];

const pasos = [
  {
    num: "01",
    title: "Registro de Solicitud",
    desc: "Completa tu registro digital en nuestro portal de aspirantes o solicita apoyo directo a un asesor de admisiones de Bachillerato.",
    items: [
      "Llenado de solicitud de ingreso",
      "Agenda para examen psicométrico y diagnóstico",
    ],
  },
  {
    num: "02",
    title: "Evaluaciones de Diagnóstico",
    desc: "Presenta tu examen psicométrico y el diagnóstico de nivelación de idioma inglés en línea o presencial en nuestras instalaciones.",
    items: [],
  },
  {
    num: "03",
    title: "Entrevista Familiar",
    desc: "Conversa con la Dirección y Coordinación Académica de BIU en compañía de tus padres o tutores para conocer a detalle el modelo internacional y resolver dudas.",
    items: [],
  },
  {
    num: "04",
    title: "Inscripción y Entrega de Documentos",
    desc: "Realiza el pago de tu inscripción y primera mensualidad en caja o transferencia, y entrega los documentos en Control Escolar.",
    items: [
      "Acta de Nacimiento (Original y 2 copias)",
      "Certificado de Secundaria o boleta oficial de 3er año (Original y 2 copias)",
      "Carta de buena conducta de la secundaria de procedencia",
      "Copia de CURP oficial",
      "Copia de comprobante de domicilio reciente",
      "Carta de no adeudo (solo si proviene de escuela privada)",
      "4 fotografías infantil (blanco y negro, papel mate)",
    ],
  },
];
</script>

<template>
  <div class="biu-adm-page">
    <Navbare />

    <!-- ══════════════════════════════════════════
         HERO SECTION (68% VIEWPORT CON BLUR GRADIENTE BIU)
    ══════════════════════════════════════════ -->
    <div class="biu-hero-wrapper">
      <section class="biu-hero-section">
        <div class="biu-hero-slide">
          <!-- Fotografía de fondo limpia de Bachillerato -->
          <img
            src="/images/bachillerato/hero/2.jpg"
            alt="Proceso de Admisión BIU Bachillerato"
            class="biu-hero-slide__img"
          />

          <!-- Capas de Contraste y Blur Idénticas a Bachillerato -->
          <div class="biu-hero-slide__overlay"></div>
          <div class="biu-hero-slide__overlay2"></div>

          <div class="biu-hero-content biu-container">
            <div class="biu-hero-inner">
              <div class="biu-hero-eyebrow">
                <img
                  src="/images/hero/logo-blanco.svg"
                  alt="Bachillerato Internacional BIU"
                  class="biu-hero-logo-full"
                />
              </div>

              <nav class="biu-hero__breadcrumb" aria-label="Breadcrumb">
                <NuxtLink to="/">Inicio</NuxtLink>
                <span>/</span>
                <NuxtLink to="/bachillerato">Bachillerato</NuxtLink>
                <span>/</span>
                <span class="biu-breadcrumb-active">Admisiones</span>
              </nav>

              <h1 class="biu-hero-title">
                Proceso de<br />
                <span class="biu-hero-title__accent">admisión</span>
              </h1>

              <p class="biu-hero-subtitle">
                Construye tu futuro internacional. Te asesoramos durante todo tu proceso de inscripción y convocatorias de becas en BIU.
              </p>

              <div class="biu-hero-ctas">
                <a
                  href="#requisitos"
                  class="biu-btn-stacked"
                >
                  <FileCheck :size="22" />
                  <span>Requisitos BIU</span>
                </a>
                <a
                  href="#registro"
                  class="biu-btn-stacked"
                >
                  <GraduationCap :size="22" />
                  <span>Inscríbete Aquí</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- BARRA DE ESTADÍSTICAS (EXACTA A /bachillerato) -->
      <div class="biu-hero__stats-bar">
        <div class="biu-container biu-hero__stats-inner">
          <div v-for="stat in stats" :key="stat.label" class="biu-stat">
            <div class="biu-stat__icon">
              <component
                :is="
                  stat.icon === 'Layers'
                    ? Layers
                    : stat.icon === 'Calendar'
                      ? Calendar
                      : stat.icon === 'BookOpen'
                        ? BookOpen
                        : stat.icon === 'Globe'
                          ? Globe2
                          : ShieldCheck
                "
                :size="28"
              />
            </div>
            <div class="biu-stat__text">
              <span class="biu-stat__value">{{ stat.value }}</span>
              <span class="biu-stat__label">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ══════════════════════════════════════════
         BIENVENIDA (FONDO BLANCO / CARDS BLANCAS)
    ══════════════════════════════════════════ -->
    <section class="biu-welcome">
      <div class="biu-welcome__top">
        <div class="biu-container">
          <div class="biu-welcome__intro">
            <div>
              <p class="biu-eyebrow">Admisiones BIU</p>
              <h2 class="biu-title">Un ambiente global<br /><em>para tu crecimiento</em></h2>
            </div>
            <p class="biu-desc">
              El Bachillerato Internacional de UNINTER combina exigencia académica de clase mundial con el desarrollo de competencias multiculturales. Agenda tu cita y conoce nuestras modalidades Bilingüe y Multicultural.
            </p>
          </div>
        </div>
      </div>
      <div class="biu-welcome__cards-wrap">
        <div class="biu-container biu-welcome__cards">
          <a href="#requisitos" class="biu-wcard">
            <div class="biu-wcard__icon"><Icon name="mdi:school-outline" size="26" /></div>
            <h3 class="biu-wcard__title">Admisión en Campus</h3>
            <p class="biu-wcard__desc">Agenda tu visita personalizada y realiza tu examen de ubicación de inglés.</p>
            <span class="biu-wcard__link">Ver proceso →</span>
          </a>
          <a href="#registro" class="biu-wcard">
            <div class="biu-wcard__icon"><Icon name="mdi:laptop" size="26" /></div>
            <h3 class="biu-wcard__title">Admisión Digital</h3>
            <p class="biu-wcard__desc">Carga digital de documentos y entrevista virtual con coordinación.</p>
            <span class="biu-wcard__link">Registrarse →</span>
          </a>
          <div class="biu-wcard biu-wcard--contact">
            <div class="biu-wcard__icon"><Icon name="mdi:phone-outline" size="26" /></div>
            <h3 class="biu-wcard__title">Contacto BIU</h3>
            <p class="biu-wcard__desc">777 357 9000 ext. 2<br />admisiones@uninter.edu.mx</p>
            <span class="biu-wcard__link">Lunes a Sábado</span>
          </div>
        </div>
      </div>
    </section>

    <!-- PASOS & REQUISITOS -->
    <section id="requisitos" class="biu-pre">
      <div class="biu-container">
        <div class="biu-pre__head">
          <p class="biu-eyebrow">Etapas</p>
          <h2 class="biu-title biu-title--dark">Proceso de Ingreso a <em>Bachillerato</em></h2>
          <p class="biu-pre__sub">Sigue estos sencillos pasos para formar parte de la comunidad BIU.</p>
        </div>

        <div class="biu-steps">
          <div v-for="(paso, i) in pasos" :key="paso.num" class="biu-step">
            <div class="biu-step__aside">
              <div class="biu-step__num">{{ paso.num }}</div>
              <div v-if="i < pasos.length - 1" class="biu-step__line"></div>
            </div>
            <div class="biu-step__body">
              <h3 class="biu-step__title">{{ paso.title }}</h3>
              <p class="biu-step__desc">{{ paso.desc }}</p>
              <ul v-if="paso.items.length" class="biu-step__list">
                <li v-for="item in paso.items" :key="item">
                  <span class="biu-step__dot"></span>{{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="biu-pre__contact">
          <div class="biu-contact-item"><Icon name="mdi:email-outline" size="16" /><span>admisiones@uninter.edu.mx</span></div>
          <div class="biu-contact-item"><Icon name="mdi:phone-outline" size="16" /><span>777 357 9000 ext. 2</span></div>
          <div class="biu-contact-item"><Icon name="mdi:clock-outline" size="16" /><span>Lun-Vie 8:00–18:00 · Sáb 9:00–13:00</span></div>
        </div>
      </div>
    </section>

    <!-- BLOGS -->
    <BlogsSection />

    <!-- REGISTRO -->
    <section id="registro">
      <FormRegister />
    </section>

    <PortalFooter />
  </div>
</template>

<style scoped>
.biu-hero-wrapper {
  --g: #bad043;
  --gl: #7bba4f;
  --gd: #459c4a;
  --ga: #bad043;
  background-color: #0c2010;
}

.biu-container {
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1.5rem;
}

/* ═══════════════════════════════════════════
   HERO SECTION BIU (68% VIEWPORT)
═══════════════════════════════════════════ */
.biu-hero-section {
  --h: clamp(520px, 68vh, 680px);
  background: transparent;
  overflow: hidden;
  position: relative;
}

.biu-hero-slide {
  align-items: center;
  display: flex;
  height: var(--h);
  position: relative;
  width: 100%;
}

.biu-hero-slide__img {
  animation: kb-biu 14s ease-out forwards;
  height: 100%;
  inset: 0;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  width: 100%;
}

@keyframes kb-biu {
  0% { transform: scale(1); }
  100% { transform: scale(1.06); }
}

/* ═══ CAPAS DE CONTRASTE Y BLUR IDÉNTICAS A BACHILLERATO ═══ */
.biu-hero-slide__overlay {
  background: linear-gradient(180deg, #0c201066, #0c20101a 50%, #0c20101a);
  inset: 0;
  position: absolute;
  z-index: 1;
}

.biu-hero-slide__overlay2 {
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  background: linear-gradient(
    90deg,
    rgba(12, 32, 16, 0.85),
    rgba(12, 32, 16, 0.6) 30%,
    rgba(12, 32, 16, 0.1) 45%,
    transparent 60%
  );
  inset: 0;
  -webkit-mask-image: linear-gradient(90deg, #000, #000 35%, transparent 55%);
  mask-image: linear-gradient(90deg, #000, #000 35%, transparent 55%);
  position: absolute;
  z-index: 1;
  pointer-events: none;
}

.biu-hero-content {
  position: relative;
  width: 100%;
  z-index: 2;
  padding-bottom: 2rem;
}

.biu-hero-inner {
  max-width: 620px;
}

.biu-hero-logo-full {
  filter: brightness(0) invert(1);
  height: 46px;
  margin-bottom: 1.25rem;
  -o-object-fit: contain;
  object-fit: contain;
}

.biu-hero__breadcrumb {
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

.biu-hero__breadcrumb a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

.biu-hero__breadcrumb a:hover {
  color: #bad043;
}

.biu-breadcrumb-active {
  color: #bad043;
}

.biu-hero-title {
  color: #ffffff;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.06;
  margin: 0 0 1.25rem;
}

.biu-hero-title__accent {
  color: #bad043;
}

.biu-hero-subtitle {
  color: rgba(255, 255, 255, 0.92);
  font-size: clamp(0.95rem, 1.4vw, 1.08rem);
  line-height: 1.65;
  margin: 0 0 2rem;
  max-width: 520px;
}

.biu-hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 0.875rem;
}

.biu-btn-stacked {
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

.biu-btn-stacked:hover {
  background: rgba(186, 208, 67, 0.25);
  border-color: #bad043;
  color: #bad043;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(186, 208, 67, 0.25);
}

/* ═══════════════════════════════════════════
   LIQUID GLASS STATS BAR (EXACTA A /bachillerato)
═══════════════════════════════════════════ */
.biu-hero__stats-bar {
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
  background-attachment: fixed;
  background-color: #0c2010d9;
  background-image: radial-gradient(
    circle at 50% 50%,
    rgba(186, 208, 67, 0.15) 0,
    transparent 60%
  );
  background-position: 50%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(186, 208, 67, 0.3);
  box-shadow: 0 4px 30px #00000080;
  padding: 1.5rem 0;
  position: relative;
}

.biu-hero__stats-inner {
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}

.biu-stat {
  align-items: center;
  border-right: 1px solid rgba(186, 208, 67, 0.3);
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  padding: 0 1.5rem;
}

.biu-stat:last-child {
  border-right: none;
}

.biu-stat__icon {
  align-items: center;
  color: var(--g);
  display: flex;
  justify-content: center;
}

.biu-stat__text {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}

.biu-stat__value {
  color: #fff;
  font-size: clamp(1.1rem, 1.3vw, 1.4rem);
  font-weight: 800;
  line-height: 1.2;
}

.biu-stat__label {
  color: #fffc;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: left;
}

/* ═══════════════════════════════════════════
   BIENVENIDA & TARJETAS (FONDO BLANCO / CARDS BLANCAS)
═══════════════════════════════════════════ */
.biu-welcome {
  background-color: #ffffff;
  padding: 5rem 0 5.5rem;
}

.biu-welcome__top {
  margin-bottom: 3.5rem;
}

.biu-welcome__intro {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3.5rem;
  align-items: start;
}

.biu-eyebrow {
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #4a7a02;
  margin: 0 0 0.6rem;
}

.biu-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 3.6vw, 2.9rem);
  font-weight: 800;
  color: #0f3c61;
  margin: 0;
  line-height: 1.12;
  letter-spacing: -0.01em;
}

.biu-title em {
  font-style: italic;
  color: #4a7a02;
}

.biu-title--dark {
  color: #0f3c61;
}

.biu-desc {
  font-size: 0.98rem;
  line-height: 1.75;
  color: #1e293b;
  margin: 0;
  padding-top: 1.5rem;
  border-top: 2.5px solid #bad043;
}

.biu-welcome__cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.biu-wcard {
  background: #ffffff;
  border: 1.5px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  text-decoration: none;
  box-shadow: 0 4px 16px rgba(15, 60, 97, 0.04);
  transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.biu-wcard:hover {
  transform: translateY(-4px);
  border-color: #bad043;
  box-shadow: 0 14px 30px rgba(186, 208, 67, 0.18);
}

.biu-wcard--contact {
  cursor: default;
}

.biu-wcard--contact:hover {
  transform: none;
  border-color: #e2e8f0;
  box-shadow: 0 4px 16px rgba(15, 60, 97, 0.04);
}

.biu-wcard__icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(186, 208, 67, 0.15);
  color: #4a7a02;
  display: flex;
  align-items: center;
  justify-content: center;
}

.biu-wcard__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.15rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0;
}

.biu-wcard__desc {
  font-size: 0.88rem;
  color: #334155;
  line-height: 1.6;
  margin: 0;
  flex: 1;
}

.biu-wcard__link {
  font-size: 0.84rem;
  font-weight: 700;
  color: #4a7a02;
  letter-spacing: 0.02em;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  transition: gap 0.2s ease, color 0.2s ease;
}

.biu-wcard:hover .biu-wcard__link {
  color: #2e7d32;
  gap: 0.45rem;
}

/* ═══════════════════════════════════════════
   STEPS & TIMELINE
═══════════════════════════════════════════ */
.biu-pre {
  background-color: #f8faf4;
  padding: 5.5rem 0;
}

.biu-pre__head {
  text-align: center;
  margin-bottom: 3.5rem;
}

.biu-pre__sub {
  font-size: 0.95rem;
  color: #4b5d44;
  max-width: 480px;
  margin: 0.5rem auto 0;
}

.biu-steps {
  display: flex;
  flex-direction: column;
  max-width: 820px;
  margin: 0 auto 3rem;
}

.biu-step {
  display: flex;
  gap: 1.5rem;
}

.biu-step__aside {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

.biu-step__num {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #2e7d32;
  color: #ffffff;
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.06em;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(46, 125, 50, 0.25);
  flex-shrink: 0;
  z-index: 1;
}

.biu-step__line {
  width: 2px;
  flex: 1;
  min-height: 24px;
  background: rgba(46, 125, 50, 0.2);
  margin: 4px 0;
}

.biu-step__body {
  padding: 0 0 2.5rem 0;
  flex: 1;
}

.biu-step__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.15rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0.5rem 0 0.625rem;
}

.biu-step__desc {
  font-size: 0.9rem;
  color: #334155;
  line-height: 1.7;
  margin: 0 0 0.875rem;
}

.biu-step__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.biu-step__list li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #334155;
  line-height: 1.5;
}

.biu-step__dot {
  width: 6px;
  height: 6px;
  min-width: 6px;
  border-radius: 50%;
  background: #bad043;
  margin-top: 0.45em;
}

.biu-pre__contact {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1.5rem;
  background: #ffffff;
  border-radius: 14px;
  padding: 1.5rem 2rem;
  border: 1px solid #edf4e6;
  max-width: 820px;
  margin: 0 auto;
  box-shadow: 0 4px 14px rgba(46, 125, 50, 0.03);
}

.biu-contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #334155;
}

.biu-contact-item svg {
  color: #2e7d32;
  flex-shrink: 0;
}

/* ═══════════════════════════════════════════
   RESPONSIVE
═══════════════════════════════════════════ */
@media (max-width: 768px) {
  .biu-hero-section { --h: auto; }
  .biu-hero-slide {
    min-height: clamp(440px, 65vh, 580px);
    padding: 3.5rem 0;
  }
  .biu-hero-slide__overlay2 {
    -webkit-mask-image: none;
    mask-image: none;
    background: rgba(12, 32, 16, 0.85);
  }
  .biu-hero__stats-bar {
    position: relative;
    width: 100%;
  }
  .biu-hero__stats-inner {
    flex-wrap: wrap;
    gap: 1rem 0;
  }
  .biu-stat {
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
    border-right: none;
    flex: 1 1 50%;
    padding: 1rem 0.5rem;
  }
  .biu-stat:nth-child(odd) {
    border-right: 1px solid hsla(0, 0%, 100%, 0.1);
  }
  .biu-stat:nth-last-child(-n + 2) {
    border-bottom: none;
  }
  .biu-welcome__intro { grid-template-columns: 1fr; gap: 1.5rem; }
  .biu-welcome__cards { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  .biu-hero-ctas { flex-direction: column; }
  .biu-btn-stacked, .biu-stat { justify-content: center; }
  .biu-stat {
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1) !important;
    border-right: none !important;
    flex: 1 1 100%;
    padding: 1rem 1.5rem;
  }
  .biu-stat:last-child {
    border-bottom: none !important;
  }
}
</style>
