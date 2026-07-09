<script setup lang="ts">
import Navbare from "@/components/navbar/Index.vue";
import VidaEstudiantil from "@/components/bachillerato/VidaEstudiantil.vue";
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

/* ── Stats count-up on mount ── */
const statsEl = ref<HTMLElement | null>(null);
const statsVisible = ref(false);

const stats = [
  {
    value: 35,
    suffix: "+",
    label: "Años de experiencia",
    icon: "mdi:school-outline",
  },
  { value: 2, suffix: "", label: "Idiomas principales", icon: "mdi:translate" },
  { value: 25, suffix: "+", label: "Países de intercambio", icon: "mdi:earth" },
  {
    value: 6,
    suffix: "",
    label: "Semestres de formación",
    icon: "mdi:calendar-month-outline",
  },
];
const animatedStats = ref(stats.map(() => 0));

onMounted(() => {
  const obs = new IntersectionObserver(
    ([e]) => {
      if (e.isIntersecting && !statsVisible.value) {
        statsVisible.value = true;
        stats.forEach((s, i) => {
          let start = 0;
          const step = Math.ceil(s.value / 40);
          const timer = setInterval(() => {
            start = Math.min(start + step, s.value);
            animatedStats.value[i] = start;
            if (start >= s.value) clearInterval(timer);
          }, 35);
        });
      }
    },
    { threshold: 0.3 },
  );
  if (statsEl.value) obs.observe(statsEl.value);
});

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
    <section class="siu-hero siu-hero--multi">
      <div class="siu-hero__bg">
        <img
          src="/images/Secundaria/hero/17.jpg"
          alt="SIU Multicultural UNINTER"
          class="siu-hero__img"
        />
        <div class="siu-hero__overlay"></div>
        <div class="siu-hero__grain" aria-hidden="true"></div>
      </div>

      <div class="siu-hero__inner siu-wrap">
        <div class="siu-hero__content">
          <div class="siu-hero__badge-row">
            <span class="siu-hero__badge" style="background: #b88a00"
              >SIU MULTICULTURAL</span
            >
            <span class="siu-hero__rvoe">RVOE SECUNDARIA</span>
          </div>

          <h1 class="siu-hero__title">
            Secundaria<br />
            <em style="color: #ffd44d">Multicultural</em>
          </h1>

          <p class="siu-hero__tagline">
            Formación de jóvenes inclusivos + Intercambios internacionales +
            Aprendizaje de múltiples idiomas y desarrollo sostenible
          </p>

          <div class="siu-hero__ctas">
            <a
              href="#admision"
              @click.prevent="scrollTo('#admision')"
              class="siu-hero__cta siu-hero__cta--primary"
              style="background: #b88a00"
            >
              <Icon name="mdi:arrow-right-circle-outline" size="20" />
              Iniciar admisión
            </a>
            <button
              class="siu-hero__cta siu-hero__cta--ghost"
              @click="scrollTo('#plan')"
            >
              <Icon name="mdi:book-open-outline" size="18" />
              Ver plan de estudios
            </button>
          </div>
        </div>

        <div class="siu-hero__chips">
          <div class="siu-hero__chip">
            <Icon
              name="mdi:translate"
              size="20"
              class="siu-hero__chip-icon"
              style="color: #ffd44d"
            />
            <div>
              <strong>Multilingüe</strong>
              <span>Inglés y Francés</span>
            </div>
          </div>
          <div class="siu-hero__chip">
            <Icon
              name="mdi:earth"
              size="20"
              class="siu-hero__chip-icon"
              style="color: #ffd44d"
            />
            <div>
              <strong>Global</strong>
              <span>Intercambio internacional</span>
            </div>
          </div>
          <div class="siu-hero__chip">
            <Icon
              name="mdi:leaf"
              size="20"
              class="siu-hero__chip-icon"
              style="color: #ffd44d"
            />
            <div>
              <strong>Sostenible</strong>
              <span>Actitudes y competencias</span>
            </div>
          </div>
          <div class="siu-hero__chip">
            <Icon
              name="mdi:account-group-outline"
              size="20"
              class="siu-hero__chip-icon"
              style="color: #ffd44d"
            />
            <div>
              <strong>Inclusión</strong>
              <span>Aprecio de diferencias</span>
            </div>
          </div>
        </div>
      </div>

      <div
        class="siu-hero__scroll"
        @click="scrollTo('#quicknav')"
        title="Desplazar"
      >
        <Icon name="mdi:chevron-down" size="22" />
      </div>
    </section>

    <!-- QUICK NAV -->
    <nav id="quicknav" class="siu-qnav" aria-label="Navegación de sección">
      <div class="siu-wrap siu-qnav__inner">
        <button
          v-for="link in navLinks"
          :key="link.href"
          class="siu-qnav__link"
          @click="scrollTo(link.href)"
        >
          {{ link.label }}
        </button>
      </div>
    </nav>

    <!-- STATS STRIP -->
    <div ref="statsEl" class="siu-stats">
      <div class="siu-wrap siu-stats__grid">
        <div v-for="(s, i) in stats" :key="s.label" class="siu-stats__item">
          <div class="siu-stats__icon" style="color: #b88a00">
            <Icon :name="s.icon" size="24" />
          </div>
          <div class="siu-stats__num">{{ animatedStats[i] }}{{ s.suffix }}</div>
          <div class="siu-stats__label">{{ s.label }}</div>
        </div>
      </div>
    </div>

    <!-- ¿POR QUÉ MULTICULTURAL? -->
    <section id="porque" class="siu-porque-sec">
      <div class="siu-wrap siu-porque-sec__inner">
        <div class="siu-porque-sec__text">
          <p class="siu-eyebrow" style="color: #b88a00">Nuestra propuesta</p>
          <h2 class="siu-title">
            ¿Por qué elegir<br /><em style="color: #b88a00"
              >SIU Multicultural</em
            >?
          </h2>
          <p class="siu-body">
            Eje de enseñanza formador de jóvenes inclusivos preparados para
            vivir la educación del futuro. Desarrolla el carácter del discente,
            propicia culturas, actitudes, competencias y desarrollo sostenible,
            entendiendo y aceptando sus diferencias, culturas, razas y
            realidades.
          </p>
          <p class="siu-body">
            Este programa fomenta el aprecio internacional e introduce de manera
            formal el aprendizaje de múltiples lenguas, empoderando a los
            jóvenes para ser ciudadanos activos del mundo.
          </p>

          <div class="siu-porque-sec__pills">
            <span
              v-for="tag in [
                'Multilingüismo',
                'Intercambio cultural',
                'Desarrollo sostenible',
                'Inclusión escolar',
                'Proyectos artísticos',
              ]"
              :key="tag"
              class="siu-pill"
              style="border-color: rgba(184, 138, 0, 0.15)"
            >
              <Icon name="mdi:check" size="13" style="color: #b88a00" />
              {{ tag }}
            </span>
          </div>
        </div>

        <div class="siu-porque-sec__card">
          <div
            class="siu-hcard"
            style="
              border-color: rgba(184, 138, 0, 0.15);
              box-shadow: 0 12px 30px rgba(184, 138, 0, 0.05);
            "
          >
            <div class="siu-hcard__header" style="color: #b88a00">
              <Icon name="mdi:star-circle-outline" size="28" />
              <span>Lo que te distinguirá</span>
            </div>
            <ul class="siu-hcard__list">
              <li
                v-for="item in [
                  {
                    icon: 'mdi:translate',
                    text: 'Enseñanza multilingüe (inglés/francés)',
                  },
                  {
                    icon: 'mdi:earth',
                    text: 'Intercambio cultural internacional',
                  },
                  {
                    icon: 'mdi:leaf',
                    text: 'Proyectos de sustentabilidad ecológica',
                  },
                  {
                    icon: 'mdi:palette',
                    text: 'Actividades artísticas e integradoras',
                  },
                  {
                    icon: 'mdi:account-heart',
                    text: 'Mentalidad abierta e inclusiva',
                  },
                ]"
                :key="item.text"
              >
                <div
                  class="siu-hcard__item-icon"
                  style="background: rgba(184, 138, 0, 0.08); color: #b88a00"
                >
                  <Icon :name="item.icon" size="16" />
                </div>
                <span>{{ item.text }}</span>
              </li>
            </ul>
            <a
              href="#admision"
              @click.prevent="scrollTo('#admision')"
              class="siu-hcard__cta"
              style="background: #b88a00; color: #fff"
            >
              Solicitar información →
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- PLAN DE ESTUDIOS -->
    <section id="plan" class="siu-plan">
      <div class="siu-wrap">
        <p class="siu-eyebrow siu-eyebrow--center" style="color: #b88a00">
          Estructura curricular
        </p>
        <h2 class="siu-title siu-title--center">PLAN DE ESTUDIOS</h2>
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
          <div class="siu-plan__panel-tag" style="color: #b88a00">
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
                style="color: #b88a00"
              />
              {{ m }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- PERFIL DE EGRESO -->
    <section id="egreso" class="siu-egreso">
      <div class="siu-wrap siu-egreso__inner">
        <div class="siu-egreso__left">
          <p class="siu-eyebrow" style="color: #b88a00">
            Al terminar el programa
          </p>
          <h2 class="siu-title">
            PERFIL<br /><em style="color: #b88a00">DE EGRESO</em>
          </h2>
          <p class="siu-body">
            El egresado de la Secundaria Multicultural SIU se destaca por su
            aprecio de la diversidad cultural, su formación multilingüe y sus
            competencias en desarrollo sostenible, preparándolo para ser un
            agente de cambio.
          </p>
        </div>
        <div class="siu-egreso__right">
          <div
            v-for="item in [
              {
                icon: 'mdi:comment-text-outline',
                text: 'Se expresa en múltiples idiomas e interactúa interculturalmente',
              },
              {
                icon: 'mdi:leaf-outline',
                text: 'Lidera e implementa proyectos de desarrollo sustentable',
              },
              {
                icon: 'mdi:earth',
                text: 'Entiende y acepta las diferencias culturales y de realidades',
              },
              {
                icon: 'mdi:laptop',
                text: 'Usa herramientas de tecnología educativa avanzadas',
              },
              {
                icon: 'mdi:hand-heart',
                text: 'Actúa con inclusión, tolerancia y valores éticos',
              },
              {
                icon: 'mdi:school',
                text: 'Listo para ingresar al bachillerato con visión internacional',
              },
            ]"
            :key="item.text"
            class="siu-egreso__item"
          >
            <div class="siu-egreso__icon" style="color: #b88a00">
              <Icon :name="item.icon" size="18" />
            </div>
            <span>{{ item.text }}</span>
          </div>
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
  border: 1px solid rgba(184, 138, 0, 0.15);
  color: var(--siu-dark);
  font-size: 0.8rem;
  font-weight: 700;
  padding: 0.45rem 1rem;
  border-radius: 50px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
}

/* Hero Section */
.siu-hero {
  position: relative;
  min-height: 95vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  overflow: hidden;
}
.siu-hero__bg {
  position: absolute;
  inset: 0;
  z-index: 1;
}
.siu-hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.siu-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(26, 21, 0, 0.92) 30%,
    rgba(26, 21, 0, 0.4) 100%
  );
}
.siu-hero__grain {
  position: absolute;
  inset: 0;
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
}
.siu-hero__inner {
  position: relative;
  z-index: 2;
  width: 100%;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
}
.siu-hero__content {
  color: var(--siu-white);
}
.siu-hero__badge-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}
.siu-hero__badge {
  background: var(--siu-primary);
  color: var(--siu-white);
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  padding: 0.35rem 0.95rem;
  border-radius: 4px;
}
.siu-hero__rvoe {
  font-size: 0.68rem;
  opacity: 0.7;
}
.siu-hero__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2.8rem, 6vw, 4.8rem);
  font-weight: 800;
  line-height: 1.05;
  margin-bottom: 1.5rem;
}
.siu-hero__title em {
  font-style: italic;
  font-weight: 400;
  color: var(--siu-primary-light);
}
.siu-hero__tagline {
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.5;
  opacity: 0.9;
  max-width: 600px;
  margin-bottom: 2.5rem;
}
.siu-hero__ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.siu-hero__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
}
.siu-hero__cta--primary {
  background: var(--siu-primary);
  color: var(--siu-white);
}
.siu-hero__cta--primary:hover {
  background: var(--siu-primary-light);
  color: var(--siu-dark);
  transform: translateY(-2px);
}
.siu-hero__cta--ghost {
  background: rgba(255, 255, 255, 0.1);
  color: var(--siu-white);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.siu-hero__cta--ghost:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

/* Floating Chips */
.siu-hero__chips {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.siu-hero__chip {
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 1rem 1.25rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--siu-white);
  transition: transform 0.3s;
}
.siu-hero__chip:hover {
  transform: translateX(-6px);
}
.siu-hero__chip-icon {
  color: var(--siu-primary);
}
.siu-hero__chip strong {
  display: block;
  font-size: 0.95rem;
}
.siu-hero__chip span {
  font-size: 0.72rem;
  opacity: 0.7;
}

/* Scroll indicator */
.siu-hero__scroll {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  color: var(--siu-white);
  opacity: 0.6;
  cursor: pointer;
  animation: float 2s infinite ease-in-out;
}
@keyframes float {
  0%,
  100% {
    transform: translate(-50%, 0);
  }
  50% {
    transform: translate(-50%, 8px);
  }
}

/* Quick Nav */
.siu-qnav {
  background: var(--siu-white);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 70px;
  z-index: 99;
}
.siu-qnav__inner {
  display: flex;
  justify-content: center;
  gap: 2rem;
}
.siu-qnav__link {
  background: none;
  border: none;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--siu-gray);
  padding: 1.25rem 0.5rem;
  cursor: pointer;
  position: relative;
  transition: color 0.2s;
}
.siu-qnav__link:hover {
  color: var(--siu-primary);
}

/* Stats */
.siu-stats {
  background: var(--siu-light);
  padding: 3rem 0;
}
.siu-stats__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}
.siu-stats__item {
  text-align: center;
}
.siu-stats__icon {
  color: var(--siu-primary);
  margin-bottom: 0.5rem;
}
.siu-stats__num {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 0.25rem;
}
.siu-stats__label {
  font-size: 0.82rem;
  color: var(--siu-gray);
}

/* Why Choose Section */
.siu-porque-sec {
  padding: 6rem 0;
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
  background: var(--siu-primary);
  color: var(--siu-white);
  font-weight: 700;
  padding: 0.75rem;
  border-radius: 8px;
  text-decoration: none;
}

/* Plan de estudios */
.siu-plan {
  background: #faf9f6;
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
  background: var(--siu-white);
  border: 2px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: 700;
  margin: 0 auto 0.5rem;
  transition: all 0.3s;
}
.siu-timeline__step--active .siu-timeline__num {
  background: var(--siu-primary);
  border-color: var(--siu-primary);
  color: var(--siu-white);
  box-shadow: 0 4px 12px rgba(184, 138, 0, 0.3);
}
.siu-timeline__label {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--siu-gray);
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
  color: var(--siu-primary);
  margin-bottom: 0.75rem;
}
.siu-plan__panel-sem {
  font-size: 1.4rem;
  font-weight: 800;
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
}
.siu-plan__check {
  color: var(--siu-primary);
}

/* Egreso */
.siu-egreso {
  padding: 6rem 0;
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
}
.siu-egreso__icon {
  width: 32px;
  height: 32px;
  background: var(--siu-light);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--siu-primary);
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
</style>
