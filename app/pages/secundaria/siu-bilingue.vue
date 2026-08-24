<script setup lang="ts">
import Navbare from "@/components/navbar/Index.vue";
import FormRegister from "@/components/secundaria/FormRegister.vue";
import PortalFooter from "@/components/portal/Footer.vue";

useHead({
  title: "Secundaria Bilingüe SIU | UNINTER",
  meta: [
    {
      name: "description",
      content:
        "Secundaria Bilingüe UNINTER — clases 100% en inglés y español, inmersión lingüística total, profesores nativos y modelo educativo de excelencia.",
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
      "Inglés I",
      "Artes (Música/Danza)",
      "Educación Física I",
      "Orientación y Tutoría I",
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
      "Tecnología I",
      "Inglés I (Cont.)",
      "Artes (Cont.)",
      "Educación Física II",
      "Orientación y Tutoría II",
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
      "Inglés II",
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
      "Tecnología II",
      "Inglés II (Cont.)",
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
      "Inglés III",
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
      "Proyecto de Ciencias",
      "Tecnología III",
      "Inglés Avanzado",
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
        <img src="/images/Secundaria/hero/15.jpg" alt="SIU Bilingüe UNINTER" class="siu-hero__img">
        <div class="siu-hero__overlay"></div>
        <div class="siu-hero__overlay2"></div>
      </div>
      
      <div class="siu-wrap siu-hero__content">
        <div class="siu-hero__inner">
          <div class="siu-hero__eyebrow">
            <img src="/images/hero/logo-blanco.svg" alt="Secundaria Internacional UNINTER" class="siu-hero__logo-full" onerror="this.style.display = 'none'">
          </div>
          <h1 class="siu-hero__title">
            <span class="siu-hero__title-main">SECUNDARIA</span>
            <span class="siu-hero__title-sub">Bilingüe</span>
          </h1>
          <p class="siu-hero__desc">
            Clases 100% en inglés y español con profesores nativos certificados e inmersión lingüística total para una formación integral de primer nivel.
          </p>
          <div class="siu-hero__ctas-new">
            <a href="#plan" @click.prevent="scrollTo('#plan')" class="siu-btn-card">
              <div class="btn-icon"><Icon name="mdi:book-open-variant" size="28" /></div>
              <span>Ver plan de estudios</span>
            </a>
            <a href="#admision" @click.prevent="scrollTo('#admision')" class="siu-btn-card">
              <div class="btn-icon"><Icon name="mdi:form-textbox" size="28" /></div>
              <span>Iniciar admisión</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <div class="siu-hero__stats-bar">
      <div class="siu-wrap siu-hero__stats-inner">
        <div class="siu-stat">
          <div class="siu-stat__icon"><Icon name="mdi:layers" size="28" /></div>
          <div class="siu-stat__text">
            <span class="siu-stat__value">35+</span>
            <span class="siu-stat__label">Años de experiencia</span>
          </div>
        </div>
        <div class="siu-stat">
          <div class="siu-stat__icon"><Icon name="mdi:translate" size="28" /></div>
          <div class="siu-stat__text">
            <span class="siu-stat__value">2</span>
            <span class="siu-stat__label">Idiomas principales</span>
          </div>
        </div>
        <div class="siu-stat">
          <div class="siu-stat__icon"><Icon name="mdi:account-group" size="28" /></div>
          <div class="siu-stat__text">
            <span class="siu-stat__value">100%</span>
            <span class="siu-stat__label">Nativos</span>
          </div>
        </div>
        <div class="siu-stat">
          <div class="siu-stat__icon"><Icon name="mdi:school-outline" size="28" /></div>
          <div class="siu-stat__text">
            <span class="siu-stat__value">SEP</span>
            <span class="siu-stat__label">RVOE Oficial</span>
          </div>
        </div>
      </div>
    </div>
  </div>

    <!-- ¿POR QUÉ BILINGÜE? -->
    <section id="porque" class="siu-porque-sec">
      <div class="siu-wrap siu-porque-sec__inner">
        <div class="siu-porque-sec__text">
          <p class="siu-eyebrow">Nuestra propuesta</p>
          <h2 class="siu-title" style="color: #0f3c61;">¿Por qué elegir<br /><em style="color: #ffce52; font-style: italic;">SIU Bilingüe</em><span style="color: #0f3c61;">?</span></h2>
          <p class="siu-body">
            Contamos con el programa educativo en SIU Uninter diseñado para
            apoyar, ayudar y obtener los mejores beneficios que los alumnos
            pueden alcanzar a nivel de secundaria. Fomentamos un ambiente
            dinámico y retador.
          </p>
          <p class="siu-body">
            El plan bilingüe de secundaria prepara a los jóvenes para un futuro
            global, combinando clases teórico-prácticas y desarrollo tecnológico
            con el dominio del idioma inglés de forma nativa.
          </p>

          <div class="siu-porque-sec__pills">
            <span
              v-for="tag in [
                'Clases Bilingües',
                'Docentes Nativos',
                'Laboratorio de ciencias',
                'Talleres artísticos',
                'Formación en valores',
              ]"
              :key="tag"
              class="siu-pill" style="color: #0f3c61;"
            >
              <Icon name="mdi:check" size="13" style="color: #0f3c61;" /> {{ tag }}
            </span>
          </div>
        </div>

        <div class="siu-porque-sec__card">
          <div class="siu-hcard">
            <div class="siu-hcard__header">
              <Icon name="mdi:star-circle-outline" size="28" />
              <span>Lo que te distinguirá</span>
            </div>
            <ul class="siu-hcard__list">
              <li
                v-for="item in [
                  {
                    icon: 'mdi:comment-multiple-outline',
                    text: 'Clases 100% en inglés y español',
                  },
                  {
                    icon: 'mdi:certificate-outline',
                    text: 'Preparación para exámenes internacionales',
                  },
                  {
                    icon: 'mdi:earth',
                    text: 'Inmersión lingüística y cultural total',
                  },
                  {
                    icon: 'mdi:lightning-bolt-outline',
                    text: 'Programas de intercambio en el extranjero',
                  },
                  {
                    icon: 'mdi:account-group-outline',
                    text: 'Formación con tecnología y valores',
                  },
                ]"
                :key="item.text"
              >
                <div class="siu-hcard__item-icon">
                  <Icon :name="item.icon" size="16" />
                </div>
                <span style="color: #0f3c61;">{{ item.text }}</span>
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
          <p class="siu-eyebrow">Al terminar el programa</p>
          <h2 class="siu-title" style="color: #0f3c61;">PERFIL<br /><em style="color: #ffce52; font-style: italic;">DE EGRESO</em></h2>
          <p class="siu-body">
            El egresado de la Secundaria Bilingüe SIU cuenta con sólidas bases
            académicas, habilidades científicas y el dominio fluido del idioma
            inglés para ingresar con éxito a la preparatoria de su elección.
          </p>
        </div>
        <div class="siu-egreso__right">
          <div
            v-for="item in [
              {
                icon: 'mdi:comment-text-outline',
                text: 'Comunica ideas y redacta con fluidez en inglés y español',
              },
              {
                icon: 'mdi:calculator-variant-outline',
                text: 'Resuelve problemas lógicos y matemáticos estructurados',
              },
              {
                icon: 'mdi:flask-outline',
                text: 'Aplica el método científico en laboratorios',
              },
              {
                icon: 'mdi:laptop',
                text: 'Utiliza herramientas tecnológicas de forma ética y responsable',
              },
              {
                icon: 'mdi:account-multiple-outline',
                text: 'Colabora de forma asertiva en proyectos escolares',
              },
              {
                icon: 'mdi:lightbulb-on-outline',
                text: 'Desarrolla el pensamiento crítico e innovador',
              },
            ]"
            :key="item.text"
            class="siu-egreso__item"
          >
            <div class="siu-egreso__icon">
              <Icon :name="item.icon" size="18" />
            </div>
            <span style="color: #0f3c61;">{{ item.text }}</span>
          </div>
        </div>
      </div>
    </section>

    <section id="plan" class="siu-plan">
      <div class="siu-wrap">
        <p class="siu-eyebrow siu-eyebrow--center">Estructura curricular</p>
        <h2 class="siu-title siu-title--center" style="color: #0f3c61;">PLAN DE ESTUDIOS</h2>
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
              :style="`width: ${((pasoActivo + 1) / semestres.length) * 100}%`"
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

    <!-- FORMULARIO DE REGISTRO -->
    <section id="admision" class="siu-register-sec">
      <FormRegister />
    </section>

    <PortalFooter />
  </div>
</template>

<style scoped>
.siu-egreso__eyebrow { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #ffce52; margin: 0 0 0.75rem; }
.siu-plan__eyebrow { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #ffce52; text-align: center; margin: 0 0 0.5rem; }
.siu-porque-sec__eyebrow { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #ffce52; margin: 0 0 0.75rem; }
/* Variables & Base Styles */
.siu-page {
  --siu-primary: #ecab00;
  --siu-primary-light: #f5c842;
  --siu-dark: #1a1500;
  --siu-gray: #555;
  --siu-light: #f8f5ee;
  --siu-white: #ffffff;
  font-family: "Inter", sans-serif;
  color: var(--siu-dark);
  background: var(--siu-white);
  overflow-x: hidden;
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
  border: 1px solid rgba(236, 171, 0, 0.15);
  color: var(--siu-dark);
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.45rem 1rem;
  border-radius: 50px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
}

/* Hero Section */
.siu-porque-sec { padding: 6rem 0; background: #ffffff; }
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
  border: 1px solid rgba(236, 171, 0, 0.15);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 12px 30px rgba(236, 171, 0, 0.05);
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
}
.siu-hcard__item-icon {
  width: 28px;
  height: 28px;
  background: rgba(236, 171, 0, 0.08);
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
  transition: opacity 0.2s, transform 0.2s;
}
.siu-hcard__cta:hover {
  transform: translateY(-2px);
  background: linear-gradient(135deg, #ffce52 0%, #ffce52 30%, #00b6ec 100%);
}

/* Plan de estudios */
.siu-plan { background: #fdfaf4; padding: 6.5rem 0; }
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
.siu-timeline__num { width: 42px; height: 42px; border-radius: 50%; background: #ffffff; border: 2px solid #ddd; color: #0f3c61; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; font-weight: 700; margin: 0 auto 0.5rem; transition: all 0.3s; }
.siu-timeline__step--active .siu-timeline__num { background: #ffce52; border-color: #ffce52; color: #ffffff; box-shadow: 0 4px 12px rgba(255, 206, 82, 0.3); }
.siu-timeline__label { font-size: 0.75rem; font-weight: 700; color: #0f3c61; }
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
.siu-plan__panel-tag { display: inline-flex; align-items: center; gap: 0.35rem; font-size: 0.72rem; font-weight: 800; letter-spacing: 0.05em; text-transform: uppercase; color: #ffce52; margin-bottom: 0.75rem; }
.siu-plan__panel-sem { font-size: 1.4rem; font-weight: 800; color: #0f3c61; margin-bottom: 1.5rem; }
.siu-plan__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
}
.siu-plan__list li { display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: #0f3c61; }
.siu-plan__check { color: #ffce52; }

/* Egreso */
.siu-egreso { padding: 6rem 0; background: #ffffff; }
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
.siu-egreso__item { display: flex; gap: 0.75rem; font-size: 0.88rem; line-height: 1.5; color: #0f3c61; }
.siu-egreso__icon { width: 32px; height: 32px; background: #fdfaf4; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: #ffce52; flex-shrink: 0; }

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

.siu-hero-wrapper{--s:#ffce52;--sd:#e6b949;--sl:#ffe48f;--sbg:#1a1500;--sa:#fceeb5;--s-blue:#00b6ec;--s-blue-dark:#0091d7;background-color:var(--sbg)}
.siu-hero-wrapper{background-color:#1a1500}
.siu-hero{align-items:center;background:transparent;display:flex;height:clamp(520px,68vh,680px);overflow:hidden;position:relative}
.siu-hero__bg{inset:0;position:absolute}
.siu-hero__img{animation:kb-6f81a179 14s ease-out forwards;height:100%;-o-object-fit:cover;object-fit:cover;-o-object-position:center top;object-position:center top;width:100%}
.siu-hero__overlay{background:linear-gradient(180deg,#1a150066,#1a15001a 50%,#1a15001a);inset:0;position:absolute}
.siu-hero__overlay2{-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);background:linear-gradient(90deg,rgba(26,21,0,.85),rgba(26,21,0,.6) 30%,rgba(26,21,0,.1) 45%,transparent 60%);inset:0;-webkit-mask-image:linear-gradient(90deg,#000,#000 35%,transparent 55%);mask-image:linear-gradient(90deg,#000,#000 35%,transparent 55%);position:absolute}
.siu-hero__content{position:relative;width:100%;z-index:3}
.siu-hero__inner{max-width:640px}
.siu-hero__eyebrow{align-items:center;display:flex;margin-bottom:2rem}
.siu-hero__logo-full{height:48px;-o-object-fit:contain;object-fit:contain}
.siu-hero__title{display:flex;flex-direction:column;line-height:1;margin:0 0 2rem}
.siu-hero__title-main{color:var(--s);font-size:clamp(3rem,7vw,5.5rem);font-weight:900;letter-spacing:-.02em;text-shadow:0 4px 24px hsla(43,100%,66%,.25)}
.siu-hero__title-main,.siu-hero__title-sub{font-family:var(--font-serif,Georgia,serif)}
.siu-hero__title-sub{color:#ffffffe6;font-size:clamp(1.2rem,2.5vw,1.9rem);font-weight:600;letter-spacing:.05em;margin-top:1rem}
.siu-hero__desc{color:#ffffffad;font-size:clamp(.9rem,1.4vw,1rem);line-height:1.65;margin:0 0 3rem;max-width:520px}
.siu-hero__ctas-new{display:flex;flex-wrap:wrap;gap:1.5rem;margin-top:1rem}
.siu-btn-card{align-items:center;background:transparent;border:1px solid hsla(0,0%,100%,.4);border-radius:12px;color:#fff;display:flex;flex-direction:column;font-size:.95rem;font-weight:600;gap:.5rem;justify-content:center;min-width:140px;padding:1rem 2.5rem;text-decoration:none;transition:all .3s ease}
.siu-btn-card:hover {
  background: rgba(5, 173, 220, 0.15);
  border-color: #05addc;
  color: #05addc;
  transform: translateY(-2px);
}
.btn-icon{margin-bottom:.1rem}
.siu-hero__stats-bar{backdrop-filter:blur(16px) saturate(150%);-webkit-backdrop-filter:blur(16px) saturate(150%);background-attachment:fixed;background-color:#1a1500d9;background-image:radial-gradient(circle at 50% 50%,rgba(255,206,82,.15) 0,transparent 60%);background-position:50%;border-bottom:1px solid rgba(0,0,0,.5);border-top:1px solid rgba(255,206,82,.3);box-shadow:0 4px 30px #00000080;padding:1.5rem 0;position:relative}
.siu-hero__stats-inner{align-items:center;display:flex;justify-content:space-between;position:relative;z-index:2}
.siu-stat{align-items:center;border-right:1px solid rgba(255,206,82,.3);display:flex;flex:1;flex-direction:row;gap:1rem;justify-content:center;padding:0 1.5rem}
.siu-stat:last-child{border-right:none}
.siu-stat__icon{align-items:center;color:var(--s);display:flex;justify-content:center}
.siu-stat__text{align-items:flex-start;display:flex;flex-direction:column}
.siu-stat__value{color:#fff;font-size:clamp(1.1rem,1.3vw,1.4rem);font-weight:800;line-height:1.2}
.siu-stat__label{color:#fffc;font-size:.9rem;font-weight:500;text-align:left}
@media(max-width:768px){
  .siu-hero{flex-direction:column;height:auto;min-height:clamp(500px,85vh,800px);padding-top:5rem}
  .siu-hero__content{align-items:center;display:flex;flex:1;padding-bottom:3rem}
  .siu-hero__stats-bar{position:relative;width:100%}
  .siu-hero__stats-inner{flex-wrap:wrap;gap:1rem 0}
  .siu-stat{border-bottom:1px solid hsla(0,0%,100%,.1);border-right:none;flex:1 1 50%;padding:1rem .5rem}
  .siu-stat:nth-child(odd){border-right:1px solid hsla(0,0%,100%,.1)}
  .siu-stat:nth-last-child(-n+2){border-bottom:none}
}
@media(max-width:480px){
  .siu-hero__ctas-new{flex-direction:row;gap:1rem}
  .siu-btn-card{flex:1;padding:1rem}
  .siu-hero__title-main{font-size:clamp(2.5rem,12vw,4rem)}
  .siu-stat{border-bottom:1px solid hsla(0,0%,100%,.1)!important;border-right:none!important;flex:1 1 100%;padding:1rem 1.5rem}
  .siu-stat:last-child{border-bottom:none!important}
}

</style>
