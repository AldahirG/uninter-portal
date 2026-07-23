<script setup lang="ts">
import Navbare     from "~/components/navbar/Index.vue";
import BlogsSection from "~/components/portal/Blogssection.vue";
import FormRegister from "~/components/secundaria/FormRegister.vue";
import PortalFooter from "~/components/layout/Footer.vue";
import { FileCheck, ClipboardList, GraduationCap } from "lucide-vue-next";

useHead({ title: "Proceso de Admisión | Secundaria Internacional SIU" });

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
  <div>
    <Navbare />

    <!-- HERO -->
    <section class="adm-hero">
      <div class="adm-hero__bg">
        <img
          src="/images/hero/licenciaturas.jpg"
          alt="Proceso de Admisión SIU Secundaria"
          class="adm-hero__img"
        />
        <div class="adm-hero__overlay"></div>
      </div>

      <div class="adm-hero__deco adm-hero__deco--tl" aria-hidden="true"><GraduationCap :size="34" /></div>
      <div class="adm-hero__deco adm-hero__deco--tr" aria-hidden="true"><FileCheck :size="30" /></div>
      <div class="adm-hero__deco adm-hero__deco--br" aria-hidden="true"><ClipboardList :size="28" /></div>

      <div class="adm-container adm-hero__content">
        <div class="adm-hero__inner">
          <div class="adm-hero__eyebrow">
            <img src="/images/logo-uninter.png" alt="UNINTER" class="adm-hero__logo" onerror="this.style.display='none'" />
            <span>Secundaria Internacional SIU</span>
          </div>

          <nav class="adm-hero__breadcrumb" aria-label="Breadcrumb">
            <NuxtLink to="/">Inicio</NuxtLink>
            <span>/</span>
            <NuxtLink to="/secundaria">Secundaria</NuxtLink>
            <span>/</span>
            <span>Admisiones</span>
          </nav>

          <h1 class="adm-hero__title">
            <span class="adm-hero__title-main">PROCESO DE</span>
            <span class="adm-hero__title-accent">ADMISIÓN</span>
          </h1>

          <p class="adm-hero__desc">
            Formación bilingüe y multicultural para tus hijos. Te apoyamos en cada paso de su ingreso a SIU.
          </p>

          <div class="adm-hero__ctas">
            <a href="#requisitos" class="adm-btn adm-btn--primary">Requisitos SIU</a>
            <a href="#registro"    class="adm-btn adm-btn--ghost">Inscríbete Ahora</a>
          </div>
        </div>
      </div>

      <div class="adm-hero__stats-bar">
        <div class="adm-container adm-hero__stats-inner">
          <div class="adm-stat"><span class="adm-stat__value">4</span><span class="adm-stat__label">Pasos del proceso</span></div>
          <div class="adm-stat"><span class="adm-stat__value">100%</span><span class="adm-stat__label">Validez oficial SEP</span></div>
          <div class="adm-stat"><span class="adm-stat__value">2</span><span class="adm-stat__label">Modalidades disponibles</span></div>
        </div>
      </div>
    </section>

    <!-- BIENVENIDA -->
    <section class="adm-welcome">
      <div class="adm-welcome__top">
        <div class="adm-container">
          <div class="adm-welcome__intro">
            <div>
              <p class="adm-eyebrow">Admisiones SIU</p>
              <h2 class="adm-title">Un ambiente óptimo<br /><em>para tus hijos</em></h2>
            </div>
            <p class="adm-desc">
              La Secundaria Internacional SIU ofrece un modelo académico innovador centrado en valores y el dominio de idiomas. Recibe el soporte de nuestros asesores en cada trámite del proceso de incorporación.
            </p>
          </div>
        </div>
      </div>
      <div class="adm-welcome__cards-wrap">
        <div class="adm-container adm-welcome__cards">
          <a href="#requisitos" class="adm-wcard">
            <div class="adm-wcard__icon"><Icon name="mdi:school-outline" size="26" /></div>
            <h3 class="adm-wcard__title">Proceso Físico</h3>
            <p class="adm-wcard__desc">Agenda una cita guiada en el campus y conoce nuestro laboratorio de idiomas.</p>
            <span class="adm-wcard__link">Ver proceso →</span>
          </a>
          <a href="#registro" class="adm-wcard">
            <div class="adm-wcard__icon"><Icon name="mdi:laptop" size="26" /></div>
            <h3 class="adm-wcard__title">Registro Digital</h3>
            <p class="adm-wcard__desc">Llena el formulario de Superleads y agenda tus exámenes en línea.</p>
            <span class="adm-wcard__link">Registrarse →</span>
          </a>
          <div class="adm-wcard adm-wcard--contact">
            <div class="adm-wcard__icon"><Icon name="mdi:phone-outline" size="26" /></div>
            <h3 class="adm-wcard__title">Contacto SIU</h3>
            <p class="adm-wcard__desc">777 357 9000 ext. 3<br />admisiones@uninter.edu.mx</p>
            <span class="adm-wcard__link">Lunes a Sábado</span>
          </div>
        </div>
      </div>
    </section>

    <!-- PASOS & REQUISITOS -->
    <section id="requisitos" class="adm-pre">
      <div class="adm-container">
        <div class="adm-pre__head">
          <p class="adm-eyebrow">Admisión</p>
          <h2 class="adm-title">Etapas de Ingreso a <em>Secundaria</em></h2>
          <p class="adm-pre__sub">Sigue estos sencillos pasos para formalizar la inscripción.</p>
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
            </div>
          </div>
        </div>

        <div class="adm-pre__contact">
          <div class="adm-contact-item"><Icon name="mdi:email-outline" size="16" /><span>siu@uninter.edu.mx</span></div>
          <div class="adm-contact-item"><Icon name="mdi:phone-outline" size="16" /><span>777 357 9000 ext. 3</span></div>
          <div class="adm-contact-item"><Icon name="mdi:clock-outline" size="16" /><span>Lun-Vie 8:00–18:00 · Sáb 9:00–13:00</span></div>
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
/* HERO */
.adm-hero {
  --p: #e65100;
  --pd: #b73d00;
  --pl: #ff7d47;
  --pbg: #210d02;
  position: relative;
  height: clamp(500px, 65vh, 640px);
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--pbg);
}
.adm-container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }

.adm-hero__bg { position: absolute; inset: 0; }
.adm-hero__img {
  width: 100%; height: 100%; object-fit: cover; object-position: center top;
}
.adm-hero__overlay {
  position: absolute; inset: 0;
  background:
    linear-gradient(115deg, rgba(33,13,2,0.95) 0%, rgba(33,13,2,0.76) 50%, rgba(33,13,2,0.32) 100%),
    linear-gradient(to top, rgba(33,13,2,0.92) 0%, transparent 55%);
}

.adm-hero__deco { position: absolute; z-index: 2; opacity: 0.1; color: var(--pl); }
.adm-hero__deco--tl { top: 14%; left: 5%; }
.adm-hero__deco--tr { top: 10%; right: 8%; }
.adm-hero__deco--br { bottom: 22%; right: 12%; }

.adm-hero__content { position: relative; z-index: 3; width: 100%; padding-bottom: 7rem; }
.adm-hero__inner { max-width: 620px; }

.adm-hero__eyebrow {
  display: flex; align-items: center; gap: 0.625rem; margin-bottom: 0.75rem;
}
.adm-hero__logo { height: 30px; object-fit: contain; }
.adm-hero__eyebrow span { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--pl); }

.adm-hero__breadcrumb {
  display: flex; align-items: center; gap: 0.45rem;
  font-size: 0.68rem; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase;
  color: rgba(255,255,255,0.38); margin-bottom: 1.25rem;
}
.adm-hero__breadcrumb a { color: inherit; text-decoration: none; transition: color 0.2s; }
.adm-hero__breadcrumb a:hover { color: var(--pl); }

.adm-hero__title { display: flex; flex-direction: column; margin: 0 0 1.25rem; line-height: 1; }
.adm-hero__title-main {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.6rem, 3.5vw, 2.8rem); font-weight: 700;
  color: rgba(255,255,255,0.85); letter-spacing: 0.04em;
}
.adm-hero__title-accent {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(3rem, 7vw, 5.5rem); font-weight: 900;
  color: var(--pl); letter-spacing: -0.02em;
  text-shadow: 0 4px 24px rgba(230,81,0,0.3);
}

.adm-hero__desc {
  font-size: clamp(0.9rem, 1.4vw, 1rem); color: rgba(255,255,255,0.6);
  line-height: 1.65; margin: 0 0 2rem; max-width: 480px;
}
.adm-hero__ctas { display: flex; gap: 0.875rem; flex-wrap: wrap; }
.adm-btn {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 0.8rem 2rem; border-radius: 8px;
  font-size: 0.9rem; font-weight: 700; text-decoration: none; transition: all 0.2s;
}
.adm-btn--primary { background: var(--p); color: #fff; border: 2px solid var(--p); }
.adm-btn--primary:hover { background: var(--pd); border-color: var(--pd); transform: translateY(-2px); }
.adm-btn--ghost { background: transparent; color: #fff; border: 2px solid rgba(255,255,255,0.35); }
.adm-btn--ghost:hover { border-color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.07); }

.adm-hero__stats-bar {
  position: absolute; bottom: 0; left: 0; right: 0;
  background: rgba(255,255,255,0.06); backdrop-filter: blur(12px);
  border-top: 1px solid rgba(255,255,255,0.09); z-index: 4;
}
.adm-hero__stats-inner { display: flex; align-items: stretch; justify-content: space-around; }
.adm-stat {
  flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center;
  padding: 1rem 1.5rem; border-right: 1px solid rgba(255,255,255,0.07); gap: 0.2rem;
}
.adm-stat:last-child { border-right: none; }
.adm-stat__value { font-size: clamp(1.4rem, 2.5vw, 1.9rem); font-weight: 900; color: var(--pl); line-height: 1; }
.adm-stat__label { font-size: 0.63rem; color: rgba(255,255,255,0.48); font-weight: 600; text-transform: uppercase; letter-spacing: 0.07em; text-align: center; }

/* WELCOME */
.adm-welcome {
  --p: #e65100;
  --pl: #ff7d47;
  --pbg: #210d02;
}
.adm-welcome__top { background: var(--pbg); padding: 4.5rem 0 3rem; }
.adm-welcome__intro { display: grid; grid-template-columns: 1fr 1.6fr; gap: 3rem; align-items: start; }
.adm-eyebrow { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--pl); margin: 0 0 0.5rem; }
.adm-title { font-family: var(--font-serif, Georgia, serif); font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 800; color: #fff; margin: 0; line-height: 1.15; }
.adm-title em { font-style: italic; color: var(--pl); }
.adm-desc { font-size: 0.95rem; line-height: 1.75; color: rgba(255,255,255,0.6); margin: 0; padding-top: 1.6rem; border-top: 2px solid var(--p); }
.adm-welcome__cards-wrap { background: #2b1406; padding: 3rem 0; }
.adm-welcome__cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.adm-wcard {
  background: #361b0c; border: 1px solid rgba(230,81,0,0.18); border-radius: 14px; padding: 1.75rem;
  display: flex; flex-direction: column; gap: 0.75rem; text-decoration: none;
  transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s; cursor: pointer;
}
.adm-wcard:hover { transform: translateY(-4px); border-color: var(--p); box-shadow: 0 10px 28px rgba(230,81,0,0.14); }
.adm-wcard--contact { cursor: default; }
.adm-wcard--contact:hover { transform: none; }
.adm-wcard__icon { width: 48px; height: 48px; border-radius: 12px; background: rgba(230,81,0,0.15); color: var(--pl); display: flex; align-items: center; justify-content: center; }
.adm-wcard__title { font-family: var(--font-serif, Georgia, serif); font-size: 1.05rem; font-weight: 800; color: #fff; margin: 0; }
.adm-wcard__desc { font-size: 0.85rem; color: rgba(255,255,255,0.52); line-height: 1.6; margin: 0; flex: 1; }
.adm-wcard__link { font-size: 0.8rem; font-weight: 700; color: var(--pl); letter-spacing: 0.04em; }

/* STEPS & TIMELINE */
.adm-pre { --p: #e65100; --pd: #b73d00; --pl: #ff7d47; background: #fdfaf8; padding: 5.5rem 0; }
.adm-pre__head { text-align: center; margin-bottom: 3.5rem; }
.adm-pre__sub { font-size: 0.95rem; color: #555; max-width: 480px; margin: 0 auto; }

.adm-steps { display: flex; flex-direction: column; max-width: 820px; margin: 0 auto 3rem; }
.adm-step { display: flex; gap: 1.5rem; }
.adm-step__aside { display: flex; flex-direction: column; align-items: center; flex-shrink: 0; }
.adm-step__num {
  width: 48px; height: 48px; border-radius: 50%;
  background: var(--p); color: #fff;
  font-size: 0.82rem; font-weight: 900; letter-spacing: 0.06em;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 4px 12px rgba(230,81,0,0.3); flex-shrink: 0; z-index: 1;
}
.adm-step__line { width: 2px; flex: 1; min-height: 24px; background: rgba(230,81,0,0.2); margin: 4px 0; }

.adm-step__body { padding: 0 0 2.5rem 0; flex: 1; }
.adm-step__title { font-family: var(--font-serif, Georgia, serif); font-size: 1.15rem; font-weight: 800; color: #1a2530; margin: 0.5rem 0 0.625rem; }
.adm-step__desc { font-size: 0.9rem; color: #555; line-height: 1.7; margin: 0 0 0.875rem; }
.adm-step__list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 0.4rem; }
.adm-step__list li { display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.85rem; color: #555; line-height: 1.5; }
.adm-step__dot { width: 6px; height: 6px; min-width: 6px; border-radius: 50%; background: var(--p); margin-top: 0.45em; }

.adm-pre__contact {
  display: flex; flex-wrap: wrap; justify-content: space-around; gap: 1.5rem;
  background: #fff; border-radius: 14px; padding: 1.5rem 2rem;
  border: 1px solid rgba(230,81,0,0.12); max-width: 820px; margin: 0 auto;
}
.adm-contact-item { display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; color: #444; }
.adm-contact-item svg { color: var(--p); flex-shrink: 0; }

@media (max-width: 768px) {
  .adm-hero { height: auto; min-height: 540px; padding-top: 5rem; }
  .adm-hero__content { padding-bottom: 11rem; }
  .adm-hero__stats-inner { flex-wrap: wrap; }
  .adm-stat { flex: 1 1 50%; border-right: none; border-bottom: 1px solid rgba(255,255,255,0.07); }
  .adm-stat:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.07); }
  .adm-stat:nth-last-child(-n+2) { border-bottom: none; }
  .adm-welcome__intro { grid-template-columns: 1fr; gap: 1.5rem; }
  .adm-welcome__cards { grid-template-columns: 1fr; }
}
</style>
