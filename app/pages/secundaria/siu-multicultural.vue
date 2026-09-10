<script setup lang="ts">
import Navbare from "@/components/navbar/Index.vue";
import Internacionalizacion from "@/components/bachillerato/Internacionalizacion.vue";
import FormRegister from "@/components/secundaria/FormRegister.vue";
import PortalFooter from "@/components/portal/Footer.vue";

useHead({
  title: "Secundaria Multicultural SIU | UNINTER",
  meta: [
    {
      name: "description",
      content:
        "Secundaria Multicultural UNINTER — formación integral de jóvenes inclusivos, aprendizaje de múltiples idiomas, intercambios internacionales y desarrollo sostenible.",
    },
  ],
});

/* ── Plan de estudios timeline ── */
const pasoActivo = ref(0);
const semestres = [
  {
    num: "01",
    label: "1er Semestre",
    tipo: "tronco",
    materias: [
      "Español I",
      "Matemáticas I",
      "Geografía",
      "Biología (Ciencia y Tecnología I)",
      "Inglés y Francés I",
      "Artes (Música/Teatro)",
      "Educación Física I",
      "Orientación y Valores I",
    ],
  },
  {
    num: "02",
    label: "2do Semestre",
    tipo: "tronco",
    materias: [
      "Español I (Cont.)",
      "Matemáticas I (Cont.)",
      "Historia I",
      "Tecnología y Sostenibilidad I",
      "Inglés y Francés I (Cont.)",
      "Artes (Cont.)",
      "Educación Física II",
      "Orientación y Valores II",
    ],
  },
  {
    num: "03",
    label: "3er Semestre",
    tipo: "tronco",
    materias: [
      "Español II",
      "Matemáticas II",
      "Física (Ciencia y Tecnología II)",
      "Historia II",
      "Inglés y Francés II",
      "Artes II",
      "Educación Física III",
      "Formación Cívica y Ética I",
    ],
  },
  {
    num: "04",
    label: "4to Semestre",
    tipo: "tronco",
    materias: [
      "Español II (Cont.)",
      "Matemáticas II (Cont.)",
      "Historia de México",
      "Tecnología y Sostenibilidad II",
      "Inglés y Francés II (Cont.)",
      "Artes II (Cont.)",
      "Educación Física IV",
      "Formación Cívica y Ética I (Cont.)",
    ],
  },
  {
    num: "05",
    label: "5to Semestre",
    tipo: "tronco",
    materias: [
      "Español III",
      "Matemáticas III",
      "Química (Ciencia y Tecnología III)",
      "Historia III",
      "Inglés y Francés III",
      "Artes III",
      "Educación Física V",
      "Formación Cívica y Ética II",
    ],
  },
  {
    num: "06",
    label: "6to Semestre",
    tipo: "tronco",
    materias: [
      "Español III (Cont.)",
      "Matemáticas III (Cont.)",
      "Proyecto de Desarrollo Sostenible",
      "Tecnología III",
      "Certificación de Idiomas",
      "Artes III (Cont.)",
      "Educación Física VI",
      "Formación Cívica y Ética II (Cont.)",
    ],
  },
];

/* ── Quick nav ── */
const navLinks = [
  { label: "¿Por qué SIU?", href: "#porque" },
  { label: "Plan de estudios", href: "#plan" },
  { label: "Perfil de egreso", href: "#egreso" },
  { label: "Admisión", href: "#admision" },
];

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <div class="siu-page">
    <Navbare />

    <!-- HERO -->
    <div class="siu-hero-wrapper">
      <section class="siu-hero">
        <div class="siu-hero__bg">
          <picture class="siu-hero__picture biu-hero__picture dp-hero__picture">
            <source
              media="(max-width: 768px)"
              srcset="/images/Secundaria/heroMobile/9.jpg"
            />
            <img
              src="/images/Secundaria/hero/17.jpg"
              alt="SIU Multicultural UNINTER"
              class="siu-hero__img dp-hero__img"
            />
          </picture>
          <div class="siu-hero__overlay"></div>
          <div class="siu-hero__overlay2"></div>
        </div>

        <div class="siu-wrap siu-hero__content">
          <div class="siu-hero__inner">
            <div class="siu-hero__eyebrow">
              <!-- <img
                src="/images/hero/logo-blanco.svg"
                alt="Secundaria Internacional UNINTER"
                class="siu-hero__logo-full"
                onerror="this.style.display = 'none'"
              /> -->
            </div>
            <h1 class="siu-hero__title">
              <span class="siu-hero__title-main">SECUNDARIA</span>
              <span class="siu-hero__title-sub">Multicultural</span>
            </h1>
            <p class="siu-hero__desc">
              Un programa que integra pensamiento crítico y experiencias
              interculturales, con materias académicas en inglés y chino
              mandarín como segundo idioma.
            </p>
            <div class="siu-hero__ctas-new">
              <a
                href="#plan"
                @click.prevent="scrollTo('#plan')"
                class="siu-btn-card"
              >
                <div class="btn-icon">
                  <Icon name="mdi:book-open-variant" size="28" />
                </div>
                <span>Ver plan de estudios</span>
              </a>
              <a
                href="#admision"
                @click.prevent="scrollTo('#admision')"
                class="siu-btn-card"
              >
                <div class="btn-icon">
                  <Icon name="mdi:info" size="28" />
                </div>
                <span>Iniciar admisión</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div class="siu-hero__stats-bar">
        <div class="siu-wrap siu-hero__stats-inner">
          <div class="siu-stat">
            <div class="siu-stat__icon">
              <Icon name="mdi:book-open-variant" size="28" />
            </div>
            <div class="siu-stat__text">
              <span class="siu-stat__value">Aprendizaje</span>
              <span class="siu-stat__label">Académico en inglés</span>
            </div>
          </div>
          <div class="siu-stat">
            <div class="siu-stat__icon">
              <Icon name="mdi:translate" size="28" />
            </div>
            <div class="siu-stat__text">
              <span class="siu-stat__value">2 lenguas</span>
              <span class="siu-stat__label">Ingles + Chino mandarín</span>
            </div>
          </div>
          <div class="siu-stat">
            <div class="siu-stat__icon">
              <Icon name="mdi:certificate-outline" size="28" />
            </div>
            <div class="siu-stat__text">
              <span class="siu-stat__value">PET</span>
              <span class="siu-stat__label"
                >Preparación para certificación</span
              >
            </div>
          </div>
          <div class="siu-stat">
            <div class="siu-stat__icon">
              <Icon name="mdi:check-circle-outline" size="28" />
            </div>
            <div class="siu-stat__text">
              <span class="siu-stat__value">SEP</span>
              <span class="siu-stat__label">Acreditación a nivel nacional</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ¿POR QUÉ MULTICULTURAL? -->
    <section id="porque" class="siu-porque-sec">
      <div class="siu-wrap siu-porque-sec__inner">
        <div class="siu-porque-sec__text">
          <p class="siu-eyebrow" style="color: #ffc71c">Nuestra propuesta</p>
          <h2 class="siu-title">
            ¿Por qué elegir<br /><em style="color: #ffc71c"
              >SIU Multicultural</em
            >?
          </h2>
          <p class="siu-body">
            Lleva el aprendizaje de idiomas un paso más allá: los estudiantes
            cursan materias académicas en inglés, incorporan chino mandarín como
            segunda lengua extranjera y desarrollan habilidades de pensamiento
            que fortalecen su preparación académica.
          </p>
        </div>

        <div class="siu-porque-sec__card">
          <div
            class="siu-hcard"
            style="
              border-color: rgba(184, 138, 0, 0.15);
              box-shadow: 0 12px 30px rgba(184, 138, 0, 0.05);
            "
          >
            <div class="siu-hcard__header" style="color: #ffc71c">
              <Icon name="mdi:star-circle-outline" size="28" />
              <span>Lo que te distinguirá</span>
            </div>
            <ul class="siu-hcard__list">
              <li
                v-for="item in [
                  {
                    icon: 'mdi:translate',
                    text: 'Materias académicas impartidas en inglés',
                  },
                  {
                    icon: 'mdi:earth',
                    text: 'Inglés y chino mandarín',
                  },
                  {
                    icon: 'mdi:certificate-outline',
                    text: 'Preparación para certificación PET',
                  },
                  {
                    icon: 'mdi:brain',
                    text: 'Pensamiento crítico y habilidades cognitivas',
                  },
                  {
                    icon: 'mdi:account-group-outline',
                    text: 'Experiencias interculturales',
                  },
                ]"
                :key="item.text"
              >
                <div
                  class="siu-hcard__item-icon"
                  style="background: rgba(184, 138, 0, 0.08); color: #ffc71c"
                >
                  <Icon :name="item.icon" size="16" />
                </div>
                <span style="color: #0f3c61">{{ item.text }}</span>
              </li>
            </ul>
            <a
              href="#admision"
              @click.prevent="scrollTo('#admision')"
              class="siu-hcard__cta"
            >
              Solicitar información →
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="egreso" class="siu-egreso">
      <div class="siu-wrap siu-egreso__inner">
        <div class="siu-egreso__left">
          <p class="siu-eyebrow" style="color: #ffc71c">
            Al terminar el programa
          </p>
          <h2 class="siu-title">
            PERFIL<br /><em style="color: #ffc71c">DE EGRESO</em>
          </h2>
          <p class="siu-body">
            El egresado de la Secundaria Multicultural SIU cuenta con bases
            académicas sólidas, habilidades de pensamiento y una formación
            intercultural que le permite continuar su preparación con mayor
            apertura, autonomía y capacidad de adaptación.
          </p>
        </div>
        <div class="siu-egreso__right">
          <div
            v-for="item in [
              {
                icon: 'mdi:comment-text-outline',
                text: 'Comunicarse en inglés y desarrollar conocimientos de chino mandarín',
              },
              {
                icon: 'mdi:brain',
                text: 'Analizar información y resolver situaciones con pensamiento crítico',
              },
              {
                icon: 'mdi:account-group-outline',
                text: 'Relacionarse con respeto en contextos culturales diversos',
              },
              {
                icon: 'mdi:laptop',
                text: 'Utilizar herramientas tecnológicas como apoyo para su aprendizaje',
              },
              {
                icon: 'mdi:hand-heart',
                text: 'Actuar con responsabilidad social y conciencia ambiental',
              },
              {
                icon: 'mdi:school',
                text: 'Continuar su formación en bachillerato con bases académicas sólidas',
              },
            ]"
            :key="item.text"
            class="siu-egreso__item"
          >
            <div class="siu-egreso__icon" style="color: #ffc71c">
              <Icon :name="item.icon" size="18" />
            </div>
            <span style="color: #0f3c61">{{ item.text }}</span>
          </div>
        </div>
      </div>
    </section>

    <section id="plan" class="siu-plan">
      <div class="siu-wrap">
        <p class="siu-eyebrow siu-eyebrow--center" style="color: #b88a00">
          Estructura curricular
        </p>
        <h2 class="siu-title siu-title--center" style="color: #0f3c61">
          PLAN DE ESTUDIOS
        </h2>
        <p class="siu-plan__caption">
          Haz clic en cada semestre para ver las materias
        </p>

        <div class="siu-timeline">
          <div
            v-for="(s, i) in semestres"
            :key="i"
            class="siu-timeline__step"
            :class="{ 'siu-timeline__step--active': pasoActivo === i }"
            @click="pasoActivo = i"
          >
            <div class="siu-timeline__num">{{ s.num }}</div>
            <div class="siu-timeline__label">{{ s.label }}</div>
          </div>
          <div class="siu-timeline__bar">
            <div
              class="siu-timeline__bar-fill"
              :style="`width: ${((pasoActivo + 1) / semestres.length) * 100}%; background:#B88A00`"
            ></div>
          </div>
        </div>

        <div class="siu-plan__panel">
          <div class="siu-plan__panel-tag">
            <Icon name="mdi:book-outline" size="14" />
            Tronco Común Académico
          </div>
          <h3 class="siu-plan__panel-sem">{{ semestres[pasoActivo].label }}</h3>
          <ul class="siu-plan__list">
            <li v-for="m in semestres[pasoActivo].materias" :key="m">
              <Icon
                name="mdi:check-circle-outline"
                size="15"
                class="siu-plan__check"
              />
              {{ m }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- INTERNACIONALIZACIÓN 
    <Internacionalizacion /> -->

    <!-- FORMULARIO DE REGISTRO -->
    <section id="admision" class="siu-register-sec">
      <FormRegister />
    </section>

    <PortalFooter />
  </div>
</template>

<style scoped>
.siu-egreso__eyebrow {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #ffce52;
  margin: 0 0 0.75rem;
}
.siu-plan__eyebrow {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #ffce52;
  text-align: center;
  margin: 0 0 0.5rem;
}
.siu-porque-sec__eyebrow {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #ffce52;
  margin: 0 0 0.75rem;
}
/* Variables & Base Styles */
.siu-page {
  --siu-primary: #b88a00;
  --siu-primary-light: #ffd44d;
  --siu-dark: #1a1500;
  --siu-gray: #555;
  --siu-light: #f8f5ee;
  --siu-white: #ffffff;
  font-family: "Inter", sans-serif;
  color: var(--siu-dark);
  background: var(--siu-white);
}

.siu-wrap {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.siu-eyebrow {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--siu-primary);
  margin-bottom: 0.75rem;
  display: block;
}
.siu-eyebrow--center {
  text-align: center;
}
.siu-eyebrow--light {
  color: var(--siu-primary-light);
}

.siu-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 5vw, 3rem);
  color: #0f3c61;
  font-weight: 800;
  line-height: 1.15;
  margin: 0 0 1.5rem;
}
.siu-title em {
  font-style: italic;
  font-weight: 400;
  color: var(--siu-primary);
}
.siu-title--center {
  text-align: center;
}
.siu-title--white {
  color: var(--siu-white);
}

.siu-body {
  font-size: 1rem;
  line-height: 1.65;
  color: var(--siu-gray);
  margin-bottom: 1.25rem;
}

.siu-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: #fdfbf7;
  border: 1px solid rgba(184, 138, 0, 0.15);
  color: #0f3c61;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.45rem 1rem;
  border-radius: 50px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
}

/* Hero Section */
.siu-porque-sec {
  padding: 6rem 0;
  background: #ffffff;
}
.siu-porque-sec__inner {
  display: grid;
  grid-template-columns: 1.12fr 0.88fr;
  gap: 4rem;
  align-items: center;
}
.siu-porque-sec__pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 1.75rem;
}
.siu-hcard {
  background: #fdfbf7;
  border: 1px solid rgba(184, 138, 0, 0.15);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 12px 30px rgba(184, 138, 0, 0.05);
}
.siu-hcard__header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--siu-primary);
  font-weight: 800;
  margin-bottom: 1.5rem;
}
.siu-hcard__list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.siu-hcard__list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  color: #0f3c61;
}
.siu-hcard__item-icon {
  width: 28px;
  height: 28px;
  background: rgba(184, 138, 0, 0.08);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--siu-primary);
}
.siu-hcard__cta {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #ffce52 0%, #ffce52 70%, #00b6ec 100%);
  color: #0f172a;
  border: 1px solid #ffce52;
  font-weight: 700;
  padding: 0.75rem;
  border-radius: 8px;
  text-decoration: none;
  transition:
    opacity 0.2s,
    transform 0.2s;
}
.siu-hcard__cta:hover {
  transform: translateY(-2px);
  background: linear-gradient(135deg, #ffce52 0%, #ffce52 30%, #00b6ec 100%);
}

/* Plan de estudios */
.siu-plan {
  background: #fdfaf4;
  padding: 6.5rem 0;
}
.siu-plan__caption {
  text-align: center;
  font-size: 0.85rem;
  color: var(--siu-gray);
  margin-bottom: 2.5rem;
}
.siu-timeline {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 3.5rem;
}
.siu-timeline__step {
  z-index: 2;
  text-align: center;
  cursor: pointer;
}
.siu-timeline__num {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #ffffff;
  border: 2px solid #ddd;
  color: #0f3c61;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 700;
  margin: 0 auto 0.5rem;
  transition: all 0.3s;
}
.siu-timeline__step--active .siu-timeline__num {
  background: #ffce52;
  border-color: #ffce52;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(255, 206, 82, 0.3);
}
.siu-timeline__label {
  font-size: 0.75rem;
  font-weight: 700;
  color: #0f3c61;
}
.siu-timeline__bar {
  position: absolute;
  top: 20px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #ddd;
  z-index: 1;
}
.siu-timeline__bar-fill {
  height: 100%;
  background: var(--siu-primary);
  transition: width 0.3s;
}
.siu-plan__panel {
  background: var(--siu-white);
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 2.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.02);
}
.siu-plan__panel-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #ffce52;
  margin-bottom: 0.75rem;
}
.siu-plan__panel-sem {
  font-size: 1.4rem;
  font-weight: 800;
  color: #0f3c61;
  margin-bottom: 1.5rem;
}
.siu-plan__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}
.siu-plan__list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #0f3c61;
}
.siu-plan__check {
  color: #ffce52;
}

/* Egreso */
.siu-egreso {
  padding: 6rem 0;
  background: #ffffff;
}
.siu-egreso__inner {
  display: grid;
  grid-template-columns: 0.88fr 1.12fr;
  gap: 4rem;
  align-items: center;
}
.siu-egreso__right {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}
.siu-egreso__item {
  display: flex;
  gap: 0.75rem;
  font-size: 0.88rem;
  line-height: 1.5;
  color: #0f3c61;
}
.siu-egreso__icon {
  width: 32px;
  height: 32px;
  background: #fdf9f2;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffce52;
  flex-shrink: 0;
}

/* Form */
.siu-register-sec {
  padding: 5rem 0;
  background: #fdfcf9;
}

@media (max-width: 991px) {
  .siu-hero__inner {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .siu-hero__chips {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  .siu-porque-sec__inner {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .siu-egreso__inner {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .siu-stats__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .siu-plan__list {
    grid-template-columns: 1fr;
  }
  .siu-egreso__right {
    grid-template-columns: 1fr;
  }
  .siu-qnav__inner {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .siu-qnav__link {
    padding: 0.75rem 0.5rem;
  }
}

.siu-hero-wrapper {
  --s: #ffce52;
  --sd: #e6b949;
  --sl: #ffe48f;
  --sbg: #1a1500;
  --sa: #fceeb5;
  --s-blue: #00b6ec;
  --s-blue-dark: #0091d7;
  background-color: var(--sbg);
}
.siu-hero-wrapper {
  background-color: #1a1500;
}
.siu-hero {
  align-items: center;
  background: transparent;
  display: flex;
  height: clamp(520px, 68vh, 680px);
  overflow: hidden;
  position: relative;
}
.siu-hero__bg {
  inset: 0;
  position: absolute;
}
.siu-hero__picture,
.dp-hero__picture {
  display: block;
  width: 100%;
  height: 100%;
}
.siu-hero__img {
  animation: kb-6f81a179 14s ease-out forwards;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center top;
  object-position: center top;
  width: 100%;
}
.siu-hero__overlay {
  background: linear-gradient(180deg, #1a150066, #1a15001a 50%, #1a15001a);
  inset: 0;
  position: absolute;
}
.siu-hero__overlay2 {
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
}
.siu-hero__content {
  position: relative;
  width: 100%;
  z-index: 3;
}
.siu-hero__inner {
  max-width: 640px;
}
.siu-hero__eyebrow {
  align-items: center;
  display: flex;
  margin-bottom: 2rem;
}
.siu-hero__logo-full {
  height: 48px;
  -o-object-fit: contain;
  object-fit: contain;
}
.siu-hero__title {
  display: flex;
  flex-direction: column;
  line-height: 1;
  margin: 0 0 2rem;
}
.siu-hero__title-main {
  color: var(--s);
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 24px hsla(43, 100%, 66%, 0.25);
}
.siu-hero__title-main,
.siu-hero__title-sub {
  font-family: var(--font-serif, Georgia, serif);
}
.siu-hero__title-sub {
  color: #ffffffe6;
  font-size: clamp(1.2rem, 2.5vw, 1.9rem);
  font-weight: 600;
  letter-spacing: 0.05em;
  margin-top: 1rem;
}
.siu-hero__desc {
  color: #ffffffad;
  font-size: clamp(0.9rem, 1.4vw, 1rem);
  line-height: 1.65;
  margin: 0 0 3rem;
  max-width: 520px;
}
.siu-hero__ctas-new {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1rem;
}
.siu-btn-card {
  align-items: center;
  background: transparent;
  border: 1px solid hsla(0, 0%, 100%, 0.4);
  border-radius: 12px;
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 0.95rem;
  font-weight: 600;
  gap: 0.5rem;
  justify-content: center;
  min-width: 140px;
  padding: 1rem 2.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
}
.siu-btn-card:hover {
  background: rgba(5, 173, 220, 0.15);
  border-color: #05addc;
  color: #05addc;
  transform: translateY(-2px);
}
.btn-icon {
  margin-bottom: 0.1rem;
}
.siu-hero__stats-bar {
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
  background-attachment: fixed;
  background-color: #dbb100;
  background-image: radial-gradient(
    circle at 50% 50%,
    rgba(255, 206, 0, 0.55) 0,
    rgba(255, 206, 0, 0.25) 35%,
    transparent 65%
  );
  background-position: 50%;
  border-top: 1px solid rgba(255, 206, 82, 0.3);
  border-bottom: 1px solid #8f7400;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
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
  color: #002041;
  display: flex;
  justify-content: center;
}
.siu-stat__text {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}
.siu-stat__value {
  color: #003366;
  font-size: clamp(1.1rem, 1.3vw, 1.4rem);
  font-weight: 800;
  line-height: 1.2;
}
.siu-stat__label {
  color: #003366;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: left;
}
@media (max-width: 768px) {
  .siu-hero {
    height: auto;
    min-height: clamp(620px, 88vh, 760px);
    padding: 5rem 0 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
  .siu-hero__img {
    object-position: center center;
    animation: none;
  }
  .siu-hero__overlay2 {
    background: linear-gradient(
      0deg,
      rgba(26, 21, 0, 0.94) 0%,
      rgba(26, 21, 0, 0.8) 32%,
      rgba(26, 21, 0, 0.4) 52%,
      rgba(26, 21, 0, 0.08) 70%,
      transparent 85%
    );
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    mask-image: none;
    -webkit-mask-image: none;
  }
  .siu-hero__content {
    padding-bottom: 0.5rem;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .siu-hero__inner {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 520px;
  }
  .siu-hero__eyebrow {
    justify-content: center;
    margin-bottom: 0.75rem;
  }
  .siu-hero__logo-full {
    height: 40px;
  }
  .siu-hero__title {
    align-items: center;
    text-align: center;
    margin-bottom: 0.75rem;
  }
  .siu-hero__title-main {
    font-size: clamp(2.3rem, 10vw, 3.4rem);
    text-align: center;
  }
  .siu-hero__title-sub {
    font-size: clamp(1rem, 3.8vw, 1.3rem);
    text-align: center;
    margin-top: 0.35rem;
  }
  .siu-hero__desc {
    text-align: center;
    margin: 0 auto 1.5rem;
    font-size: 0.9rem;
    line-height: 1.55;
    max-width: 440px;
  }
  .siu-hero__ctas-new {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    gap: 0.85rem;
  }
  .siu-btn-card {
    flex: 1;
    min-width: 135px;
    padding: 0.9rem 0.75rem;
    font-size: 0.88rem;
    gap: 0.45rem;
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
}

@media (max-width: 480px) {
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

@media (max-width: 380px) {
  .siu-hero__ctas-new {
    flex-direction: column;
    gap: 0.6rem;
  }
  .siu-btn-card {
    width: 100%;
    flex-direction: row;
    padding: 0.75rem 1rem;
    gap: 0.6rem;
  }
}
</style>
