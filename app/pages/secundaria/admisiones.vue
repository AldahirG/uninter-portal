<script setup lang="ts">
import Navbare from "~/components/navbar/Index.vue";
import BlogsSection from "~/components/portal/Blogssection.vue";
import FormRegister from "~/components/secundaria/FormRegister.vue";
import PortalFooter from "~/components/layout/Footer.vue";
import {
  FileCheck,
  GraduationCap,
  Atom,
  BookOpen,
  Languages,
  Layers,
  Calendar,
  Globe2,
  Activity,
} from "lucide-vue-next";

useHead({ title: "Proceso de Admisión | Secundaria Internacional SIU" });

const stats = [
  { value: "Modalidades", label: "Disponibles", icon: "Layers" },
  { value: "Años de", label: "Duración", icon: "Calendar" },
  { value: "Enfoque", label: "Bilingüe", icon: "Globe" },
  { value: "Actividades", label: "Extracurriculares", icon: "Activity" },
];

const pasos = [
  {
    num: "01",
    title: "Registro del Alumno",
    desc: "Completa tu registro en línea en nuestro portal de admisiones o acude directamente a nuestro campus para asistencia presencial.",
    items: [
      "Llenado de solicitud de admisión de Secundaria",
      "Programación de cita para evaluaciones",
    ],
  },
  {
    num: "02",
    title: "Examen de Diagnóstico y Ubicación",
    desc: "Presenta el examen psicométrico y el diagnóstico del idioma inglés para ubicar al alumno en el nivel correspondiente (Bilingüe o Multicultural).",
    items: [],
  },
  {
    num: "03",
    title: "Entrevista con la Dirección",
    desc: "Entrevista de inducción y orientación con los padres de familia y el alumno a cargo de la Dirección de Secundaria de SIU.",
    items: [],
  },
  {
    num: "04",
    title: "Inscripción y Entrega de Expediente",
    desc: "Formaliza tu ingreso con el pago de inscripción y primera colegiatura, y entregando tu documentación en Control Escolar.",
    items: [
      "Acta de Nacimiento (Original y 2 copias)",
      "Certificado de Primaria o boleta del último grado cursado (Original y 2 copias)",
      "Carta de buena conducta de la escuela de procedencia",
      "Copia de CURP oficial",
      "Copia de comprobante de domicilio reciente",
      "Carta de no adeudo (solo si proviene de colegio privado)",
      "4 fotografías infantil (blanco y negro, papel mate)",
    ],
  },
];
</script>

<template>
  <div class="siu-adm-page">
    <Navbare />

    <!-- ══════════════════════════════════════════
         HERO SECTION (68% VIEWPORT CON BLUR GRADIENTE SIU)
    ══════════════════════════════════════════ -->
    <div class="siu-hero-wrapper">
      <section class="siu-hero-section">
        <div class="siu-hero-slide">
          <!-- Fotografía de fondo limpia de Secundaria -->
          <img
            src="/images/Secundaria/hero/16.jpg"
            alt="Proceso de Admisión SIU Secundaria"
            class="siu-hero-slide__img"
          />

          <!-- Capas de Contraste y Blur Idénticas a Secundaria -->
          <div class="siu-hero-slide__overlay"></div>
          <div class="siu-hero-slide__overlay2"></div>

          <!-- Elementos decorativos flotantes -->
          <div class="siu-hero__deco siu-hero__deco--tl" aria-hidden="true">
            <Atom :size="34" />
          </div>
          <div class="siu-hero__deco siu-hero__deco--tr" aria-hidden="true">
            <BookOpen :size="30" />
          </div>
          <div class="siu-hero__deco siu-hero__deco--br" aria-hidden="true">
            <Languages :size="28" />
          </div>

          <!-- Sticker HOLA / HELLO -->
          <div class="siu-hero__sticker siu-hero__sticker--hola" aria-hidden="true">
            <span class="sticker-line">HOLA</span>
            <span class="sticker-arrow">↙</span>
            <span class="sticker-line sticker-line--en">HELLO</span>
          </div>

          <div class="siu-hero-content siu-container">
            <div class="siu-hero-inner">
              <div class="siu-hero-eyebrow">
                <img
                  src="/images/hero/logo-blanco.svg"
                  alt="Secundaria Internacional SIU"
                  class="siu-hero-logo-full"
                />
              </div>

              <nav class="siu-hero__breadcrumb" aria-label="Breadcrumb">
                <NuxtLink to="/">Inicio</NuxtLink>
                <span>/</span>
                <NuxtLink to="/secundaria">Secundaria</NuxtLink>
                <span>/</span>
                <span class="siu-breadcrumb-active">Admisiones</span>
              </nav>

              <h1 class="siu-hero-title">
                Proceso de<br />
                <span class="siu-hero-title__accent">admisión</span>
              </h1>

              <p class="siu-hero-subtitle">
                Formación bilingüe y multicultural para tus hijos. Te apoyamos y asesoramos en cada paso de su ingreso a SIU.
              </p>

              <div class="siu-hero-ctas">
                <a
                  href="#requisitos"
                  class="siu-btn-stacked"
                >
                  <FileCheck :size="22" />
                  <span>Requisitos SIU</span>
                </a>
                <a
                  href="#registro"
                  class="siu-btn-stacked"
                >
                  <GraduationCap :size="22" />
                  <span>Inscríbete Ahora</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- BARRA DE ESTADÍSTICAS (LIQUID GLASS BAR SIU) -->
      <div class="siu-hero__stats-bar">
        <div class="siu-container siu-hero__stats-inner">
          <div v-for="stat in stats" :key="stat.label" class="siu-stat">
            <div class="siu-stat__icon">
              <component
                :is="
                  stat.icon === 'Layers'
                    ? Layers
                    : stat.icon === 'Calendar'
                      ? Calendar
                      : stat.icon === 'Globe'
                        ? Globe2
                        : Activity
                "
                :size="28"
              />
            </div>
            <div class="siu-stat__text">
              <span class="siu-stat__value">{{ stat.value }}</span>
              <span class="siu-stat__label">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ══════════════════════════════════════════
         BIENVENIDA (FONDO BLANCO / CARDS BLANCAS)
    ══════════════════════════════════════════ -->
    <section class="siu-welcome">
      <div class="siu-welcome__top">
        <div class="siu-container">
          <div class="siu-welcome__intro">
            <div>
              <p class="siu-eyebrow">Admisiones SIU</p>
              <h2 class="siu-title">Un ambiente óptimo<br /><em>para tus hijos</em></h2>
            </div>
            <p class="siu-desc">
              La Secundaria Internacional SIU ofrece un modelo académico innovador centrado en valores y el dominio de idiomas. Recibe el soporte de nuestros asesores en cada trámite del proceso de incorporación.
            </p>
          </div>
        </div>
      </div>
      <div class="siu-welcome__cards-wrap">
        <div class="siu-container siu-welcome__cards">
          <a href="#requisitos" class="siu-wcard">
            <div class="siu-wcard__icon"><Icon name="mdi:school-outline" size="26" /></div>
            <h3 class="siu-wcard__title">Proceso Físico</h3>
            <p class="siu-wcard__desc">Agenda una cita guiada en el campus y conoce nuestro laboratorio de idiomas.</p>
            <span class="siu-wcard__link">Ver proceso →</span>
          </a>
          <a href="#registro" class="siu-wcard">
            <div class="siu-wcard__icon"><Icon name="mdi:laptop" size="26" /></div>
            <h3 class="siu-wcard__title">Registro Digital</h3>
            <p class="siu-wcard__desc">Llena el formulario de registro y agenda tus evaluaciones diagnósticas.</p>
            <span class="siu-wcard__link">Registrarse →</span>
          </a>
          <div class="siu-wcard siu-wcard--contact">
            <div class="siu-wcard__icon"><Icon name="mdi:phone-outline" size="26" /></div>
            <h3 class="siu-wcard__title">Contacto SIU</h3>
            <p class="siu-wcard__desc">777 357 9000 ext. 3<br />admisiones@uninter.edu.mx</p>
            <span class="siu-wcard__link">Lunes a Sábado</span>
          </div>
        </div>
      </div>
    </section>

    <!-- PASOS & REQUISITOS -->
    <section id="requisitos" class="siu-pre">
      <div class="siu-container">
        <div class="siu-pre__head">
          <p class="siu-eyebrow">Etapas</p>
          <h2 class="siu-title siu-title--dark">Etapas de Ingreso a <em>Secundaria</em></h2>
          <p class="siu-pre__sub">Sigue estos sencillos pasos para formar parte de la comunidad SIU.</p>
        </div>

        <div class="siu-steps">
          <div v-for="(paso, i) in pasos" :key="paso.num" class="siu-step">
            <div class="siu-step__aside">
              <div class="siu-step__num">{{ paso.num }}</div>
              <div v-if="i < pasos.length - 1" class="siu-step__line"></div>
            </div>
            <div class="siu-step__body">
              <h3 class="siu-step__title">{{ paso.title }}</h3>
              <p class="siu-step__desc">{{ paso.desc }}</p>
              <ul v-if="paso.items.length" class="siu-step__list">
                <li v-for="item in paso.items" :key="item">
                  <span class="siu-step__dot"></span>{{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="siu-pre__contact">
          <div class="siu-contact-item"><Icon name="mdi:email-outline" size="16" /><span>siu@uninter.edu.mx</span></div>
          <div class="siu-contact-item"><Icon name="mdi:phone-outline" size="16" /><span>777 357 9000 ext. 3</span></div>
          <div class="siu-contact-item"><Icon name="mdi:clock-outline" size="16" /><span>Lun-Vie 8:00–18:00 · Sáb 9:00–13:00</span></div>
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
.siu-hero-wrapper {
  --s: #ecab00;
  --sd: #c49000;
  --sl: #f5c842;
  --sbg: #1a1500;
  --sa: #fceeb5;
  --s-blue: #00b6ec;
  --s-blue-dark: #0091d7;
  background-color: var(--sbg);
}

.siu-container {
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1.5rem;
}

/* ═══════════════════════════════════════════
   HERO SECTION SIU (68% VIEWPORT)
═══════════════════════════════════════════ */
.siu-hero-section {
  --h: clamp(520px, 68vh, 680px);
  background: transparent;
  overflow: hidden;
  position: relative;
}

.siu-hero-slide {
  align-items: center;
  display: flex;
  height: var(--h);
  position: relative;
  width: 100%;
}

.siu-hero-slide__img {
  animation: kb-siu 14s ease-out forwards;
  height: 100%;
  inset: 0;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center top;
  object-position: center top;
  position: absolute;
  width: 100%;
}

@keyframes kb-siu {
  0% { transform: scale(1); }
  100% { transform: scale(1.06); }
}

/* ═══ CAPAS DE CONTRASTE Y BLUR IDÉNTICAS A SECUNDARIA ═══ */
.siu-hero-slide__overlay {
  background: linear-gradient(180deg, #1a150066, #1a15001a 50%, #1a15001a);
  inset: 0;
  position: absolute;
  z-index: 1;
}

.siu-hero-slide__overlay2 {
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  background: linear-gradient(
    90deg,
    rgba(26, 21, 0, 0.85),
    rgba(26, 21, 0, 0.6) 30%,
    rgba(26, 21, 0, 0.1) 45%,
    transparent 60%
  );
  inset: 0;
  -webkit-mask-image: linear-gradient(90deg, #000, #000 35%, transparent 55%);
  mask-image: linear-gradient(90deg, #000, #000 35%, transparent 55%);
  position: absolute;
  z-index: 1;
  pointer-events: none;
}

/* Decorativos Flotantes */
.siu-hero__deco {
  position: absolute;
  z-index: 2;
  opacity: 0.14;
  color: #ecab00;
}
.siu-hero__deco--tl {
  top: 14%;
  left: 5%;
}
.siu-hero__deco--tr {
  top: 10%;
  right: 8%;
}
.siu-hero__deco--br {
  bottom: 20%;
  right: 12%;
}

/* Sticker HOLA/HELLO */
.siu-hero__sticker {
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  transform: rotate(-8deg);
  opacity: 0.88;
}
.siu-hero__sticker--hola {
  top: 16%;
  right: 28%;
}
.sticker-line {
  background: #fff;
  color: #1a1500;
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  font-weight: 900;
  letter-spacing: 0.08em;
  padding: 0.25rem 0.9rem;
  border-radius: 6px;
  box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.35);
  line-height: 1;
}
.sticker-line--en {
  background: #00a8e8;
  color: #fff;
}
.sticker-arrow {
  font-size: 1.2rem;
  color: #fff;
  font-weight: 900;
  line-height: 1;
}

.siu-hero-content {
  position: relative;
  width: 100%;
  z-index: 3;
  padding-bottom: 2rem;
}

.siu-hero-inner {
  max-width: 620px;
}

.siu-hero-logo-full {
  filter: brightness(0) invert(1);
  height: 46px;
  margin-bottom: 1.25rem;
  -o-object-fit: contain;
  object-fit: contain;
}

.siu-hero__breadcrumb {
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

.siu-hero__breadcrumb a {
  color: inherit;
  text-decoration: none;
  transition: color 0.2s ease;
}

.siu-hero__breadcrumb a:hover {
  color: var(--s);
}

.siu-breadcrumb-active {
  color: var(--s);
}

.siu-hero-title {
  color: #ffffff;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.06;
  margin: 0 0 1.25rem;
}

.siu-hero-title__accent {
  color: var(--s);
}

.siu-hero-subtitle {
  color: rgba(255, 255, 255, 0.92);
  font-size: clamp(0.95rem, 1.4vw, 1.08rem);
  line-height: 1.65;
  margin: 0 0 2rem;
  max-width: 520px;
}

.siu-hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 0.875rem;
}

.siu-btn-stacked {
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

.siu-btn-stacked:hover {
  background: rgba(5, 173, 220, 0.2);
  border-color: #05addc;
  color: #05addc;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(5, 173, 220, 0.25);
}

/* ═══════════════════════════════════════════
   LIQUID GLASS STATS BAR (EXACTA A /secundaria)
═══════════════════════════════════════════ */
.siu-hero__stats-bar {
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
  background-attachment: fixed;
  background-color: #1a1500d9;
  background-image: radial-gradient(
    circle at 50% 50%,
    rgba(255, 206, 82, 0.15) 0,
    transparent 60%
  );
  background-position: 50%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(255, 206, 82, 0.3);
  box-shadow: 0 4px 30px #00000080;
  padding: 1.5rem 0;
  position: relative;
}

.siu-hero__stats-inner {
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}

.siu-stat {
  align-items: center;
  border-right: 1px solid rgba(255, 206, 82, 0.3);
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  padding: 0 1.5rem;
}

.siu-stat:last-child {
  border-right: none;
}

.siu-stat__icon {
  align-items: center;
  color: var(--s);
  display: flex;
  justify-content: center;
}

.siu-stat__text {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}

.siu-stat__value {
  color: #fff;
  font-size: clamp(1.1rem, 1.3vw, 1.4rem);
  font-weight: 800;
  line-height: 1.2;
}

.siu-stat__label {
  color: #fffc;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: left;
}

/* ═══════════════════════════════════════════
   BIENVENIDA & TARJETAS (FONDO BLANCO / CARDS BLANCAS)
═══════════════════════════════════════════ */
.siu-welcome {
  background-color: #ffffff;
  padding: 5rem 0 5.5rem;
}

.siu-welcome__top {
  margin-bottom: 3.5rem;
}

.siu-welcome__intro {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 3.5rem;
  align-items: start;
}

.siu-eyebrow {
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #c49000;
  margin: 0 0 0.6rem;
}

.siu-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 3.6vw, 2.9rem);
  font-weight: 800;
  color: #0f3c61;
  margin: 0;
  line-height: 1.12;
  letter-spacing: -0.01em;
}

.siu-title em {
  font-style: italic;
  color: #c49000;
}

.siu-title--dark {
  color: #0f3c61;
}

.siu-desc {
  font-size: 0.98rem;
  line-height: 1.75;
  color: #1e293b;
  margin: 0;
  padding-top: 1.5rem;
  border-top: 2.5px solid #ecab00;
}

.siu-welcome__cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.siu-wcard {
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

.siu-wcard:hover {
  transform: translateY(-4px);
  border-color: #ecab00;
  box-shadow: 0 14px 30px rgba(236, 171, 0, 0.18);
}

.siu-wcard--contact {
  cursor: default;
}

.siu-wcard--contact:hover {
  transform: none;
  border-color: #e2e8f0;
  box-shadow: 0 4px 16px rgba(15, 60, 97, 0.04);
}

.siu-wcard__icon {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(236, 171, 0, 0.15);
  color: #c49000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.siu-wcard__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.15rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0;
}

.siu-wcard__desc {
  font-size: 0.88rem;
  color: #334155;
  line-height: 1.6;
  margin: 0;
  flex: 1;
}

.siu-wcard__link {
  font-size: 0.84rem;
  font-weight: 700;
  color: #c49000;
  letter-spacing: 0.02em;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  transition: gap 0.2s ease, color 0.2s ease;
}

.siu-wcard:hover .siu-wcard__link {
  color: #05addc;
  gap: 0.45rem;
}

/* ═══════════════════════════════════════════
   STEPS & TIMELINE
═══════════════════════════════════════════ */
.siu-pre {
  background-color: #fbfaf6;
  padding: 5.5rem 0;
}

.siu-pre__head {
  text-align: center;
  margin-bottom: 3.5rem;
}

.siu-pre__sub {
  font-size: 0.95rem;
  color: #5c5543;
  max-width: 480px;
  margin: 0.5rem auto 0;
}

.siu-steps {
  display: flex;
  flex-direction: column;
  max-width: 820px;
  margin: 0 auto 3rem;
}

.siu-step {
  display: flex;
  gap: 1.5rem;
}

.siu-step__aside {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

.siu-step__num {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #c49000;
  color: #ffffff;
  font-size: 0.82rem;
  font-weight: 900;
  letter-spacing: 0.06em;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(196, 144, 0, 0.25);
  flex-shrink: 0;
  z-index: 1;
}

.siu-step__line {
  width: 2px;
  flex: 1;
  min-height: 24px;
  background: rgba(196, 144, 0, 0.2);
  margin: 4px 0;
}

.siu-step__body {
  padding: 0 0 2.5rem 0;
  flex: 1;
}

.siu-step__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.15rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0.5rem 0 0.625rem;
}

.siu-step__desc {
  font-size: 0.9rem;
  color: #334155;
  line-height: 1.7;
  margin: 0 0 0.875rem;
}

.siu-step__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.siu-step__list li {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #334155;
  line-height: 1.5;
}

.siu-step__dot {
  width: 6px;
  height: 6px;
  min-width: 6px;
  border-radius: 50%;
  background: #ecab00;
  margin-top: 0.45em;
}

.siu-pre__contact {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 1.5rem;
  background: #ffffff;
  border-radius: 14px;
  padding: 1.5rem 2rem;
  border: 1px solid #f0ede4;
  max-width: 820px;
  margin: 0 auto;
  box-shadow: 0 4px 14px rgba(196, 144, 0, 0.03);
}

.siu-contact-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #334155;
}

.siu-contact-item svg {
  color: #c49000;
  flex-shrink: 0;
}

/* ═══════════════════════════════════════════
   RESPONSIVE
═══════════════════════════════════════════ */
@media (max-width: 768px) {
  .siu-hero-section { --h: auto; }
  .siu-hero-slide {
    min-height: clamp(440px, 65vh, 580px);
    padding: 3.5rem 0;
  }
  .siu-hero-slide__overlay2 {
    -webkit-mask-image: none;
    mask-image: none;
    background: rgba(26, 21, 0, 0.85);
  }
  .siu-hero__stats-bar {
    position: relative;
    width: 100%;
  }
  .siu-hero__stats-inner {
    flex-wrap: wrap;
    gap: 1rem 0;
  }
  .siu-stat {
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
    border-right: none;
    flex: 1 1 50%;
    padding: 1rem 0.5rem;
  }
  .siu-stat:nth-child(odd) {
    border-right: 1px solid hsla(0, 0%, 100%, 0.1);
  }
  .siu-stat:nth-last-child(-n + 2) {
    border-bottom: none;
  }
  .siu-hero__sticker--hola {
    display: none;
  }
  .siu-welcome__intro { grid-template-columns: 1fr; gap: 1.5rem; }
  .siu-welcome__cards { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  .siu-hero-ctas { flex-direction: column; }
  .siu-btn-stacked, .siu-stat { justify-content: center; }
  .siu-stat {
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1) !important;
    border-right: none !important;
    flex: 1 1 100%;
    padding: 1rem 1.5rem;
  }
  .siu-stat:last-child {
    border-bottom: none !important;
  }
}
</style>
