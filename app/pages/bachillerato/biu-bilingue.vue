<script setup lang="ts">
import Navbare from "@/components/navbar/Index.vue";
import AreasEspecializacion from "@/components/bachillerato/biu/AreasEspecializacion.vue";
import Internacionalizacion from "@/components/bachillerato/Internacionalizacion.vue";
import FormRegister from "@/components/bachillerato/FormRegister.vue";
import PortalFooter from "@/components/portal/Footer.vue";

useHead({
  title: "Bachillerato Bilingüe BIU | UNINTER",
  meta: [
    {
      name: "description",
      content:
        "Bachillerato Bilingüe UNINTER — formación integral con inglés B2, certificación TKT Cambridge y modelo Blended-Flex Learning.",
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
      "Lengua y Comunicación I",
      "Matemáticas I",
      "Historia de México I",
      "Química I",
      "Ciencias de la Salud I",
      "Inglés I",
      "Informática I",
      "Activación Física I",
      "Orientación Educativa I",
    ],
  },
  {
    num: "02",
    label: "2do Semestre",
    tipo: "tronco",
    materias: [
      "Lengua y Comunicación II",
      "Matemáticas II",
      "Historia de México II",
      "Química II",
      "Ciencias de la Salud II",
      "Inglés II",
      "Informática II",
      "Activación Física II",
      "Orientación Educativa II",
    ],
  },
  {
    num: "03",
    label: "3er Semestre",
    tipo: "tronco",
    materias: [
      "Literatura I",
      "Matemáticas III",
      "Historia Universal Contemporánea I",
      "Física I",
      "Biología I",
      "Inglés III",
      "Informática III",
      "Activación Física III",
      "Orientación Educativa III",
    ],
  },
  {
    num: "04",
    label: "4to Semestre",
    tipo: "tronco",
    materias: [
      "Literatura II",
      "Matemáticas IV",
      "Historia Universal Contemporánea II",
      "Física II",
      "Biología II",
      "Inglés IV",
      "Informática IV",
      "Activación Física IV",
      "Orientación Educativa IV",
    ],
  },
  {
    num: "05",
    label: "5to Semestre",
    tipo: "area",
    materias: [
      "Según área de especialización: Social Humanístico, Económico Administrativo, Físico Matemático o Químico Biológico",
    ],
  },
  {
    num: "06",
    label: "6to Semestre",
    tipo: "area",
    materias: [
      "Cierre del área especializada + proyecto emprendedor + certificación TKT Cambridge",
    ],
  },
];

/* ── Quick nav ── */
const navLinks = [
  { label: "¿Por qué BIU?", href: "#porque" },
  { label: "Plan de estudios", href: "#plan" },
  { label: "Áreas", href: "#areas" },
  { label: "Perfil de egreso", href: "#egreso" },
  { label: "Admisión", href: "#admision" },
];

function scrollTo(id: string) {
  const el = document.querySelector(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
</script>

<template>
  <div class="biu-page">
    <Navbare />

    <!-- HERO -->
    <div class="biu-hero-wrapper">
      <section class="biu-hero">
        <div class="biu-hero__bg">
          <img
            src="/images/bachillerato/hero/7.jpg"
            alt="BIU Bilingüe UNINTER"
            class="biu-hero__img"
          />
          <div class="biu-hero__overlay"></div>
          <div class="biu-hero__overlay2"></div>
        </div>

        <div class="biu-hero__deco biu-hero__deco--tl" aria-hidden="true">
          <Icon name="lucide:flask-conical" size="32" />
        </div>
        <div class="biu-hero__deco biu-hero__deco--tr" aria-hidden="true">
          <Icon name="lucide:book-open" size="28" />
        </div>
        <div class="biu-hero__deco biu-hero__deco--br" aria-hidden="true">
          <Icon name="lucide:globe" size="26" />
        </div>

        <div class="biu-wrap biu-hero__content">
          <div class="biu-hero__inner">
            <div class="biu-hero__eyebrow">
              <img
                src="/images/hero/logo-blanco.svg"
                alt="Bachillerato Internacional UNINTER"
                class="biu-hero__logo-full"
                onerror="this.style.display = 'none'"
              />
            </div>
            <h1 class="biu-hero__title">
              <span class="biu-hero__title-main">BACHILLERATO</span>
              <span class="biu-hero__title-sub">Bilingüe</span>
            </h1>
            <p class="biu-hero__desc">
              Inglés nivel B2 + Certificación Cambridge TKT + modelo
              Blended-Flex Learning
            </p>
            <div class="biu-hero__ctas-new">
              <a
                href="#admision"
                @click.prevent="scrollTo('#admision')"
                class="biu-btn-card"
              >
                <div class="btn-icon">
                  <Icon name="lucide:info" size="28" />
                </div>
                <span>Iniciar admisión</span>
              </a>
              <a
                href="#plan"
                @click.prevent="scrollTo('#plan')"
                class="biu-btn-card"
              >
                <div class="btn-icon">
                  <Icon name="lucide:book-open" size="28" />
                </div>
                <span>Ver plan de estudios</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div class="biu-hero__stats-bar">
        <div class="biu-wrap biu-hero__stats-inner">
          <div class="biu-stat">
            <div class="biu-stat__icon">
              <Icon name="mdi:translate" size="28" />
            </div>
            <div class="biu-stat__text">
              <span class="biu-stat__value">Nivel B2</span>
              <span class="biu-stat__label">Marco Europeo</span>
            </div>
          </div>
          <div class="biu-stat">
            <div class="biu-stat__icon">
              <Icon name="mdi:certificate-outline" size="28" />
            </div>
            <div class="biu-stat__text">
              <span class="biu-stat__value">TKT Cambridge</span>
              <span class="biu-stat__label">Certificación incluida</span>
            </div>
          </div>
          <div class="biu-stat">
            <div class="biu-stat__icon">
              <Icon name="mdi:earth" size="28" />
            </div>
            <div class="biu-stat__text">
              <span class="biu-stat__value">25+ países</span>
              <span class="biu-stat__label">Intercambios</span>
            </div>
          </div>
          <div class="biu-stat">
            <div class="biu-stat__icon">
              <Icon name="mdi:school-outline" size="28" />
            </div>
            <div class="biu-stat__text">
              <span class="biu-stat__value">Colegios del Mundo</span>
              <span class="biu-stat__label">Bachillerato Internacional</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ══════════════════════════════════════════
         ¿POR QUÉ BILINGÜE?
    ══════════════════════════════════════════ -->
    <section id="porque" class="biu-porque-sec">
      <div class="biu-wrap biu-porque-sec__inner">
        <!-- Left text -->
        <div class="biu-porque-sec__text">
          <p class="biu-eyebrow">Nuestra propuesta</p>
          <h2 class="biu-title">¿Por qué elegir<br /><em>BIU Bilingüe</em>?</h2>
          <p class="biu-body">
            El Bachillerato Bilingüe integra el inglés como segunda lengua de
            forma progresiva en los seis semestres. Al egresar, los estudiantes
            alcanzan el nivel B2 del Marco Común Europeo de Referencia (MCER),
            reconocido en universidades y empresas de todo el mundo.
          </p>
          <p class="biu-body">
            El programa combina formación académica sólida con metodología
            Blended-Flex Learning —clases en línea, presenciales y estudio
            autónomo— garantizando flexibilidad sin sacrificar calidad.
          </p>

          <div class="biu-porque-sec__pills">
            <span
              v-for="tag in [
                'Inglés curricular',
                'TKT Cambridge',
                'Intercambios internacionales',
                'Ambiente multicultural',
                'Becas disponibles',
              ]"
              :key="tag"
              class="biu-pill"
            >
              <Icon name="mdi:check" size="13" /> {{ tag }}
            </span>
          </div>
        </div>

        <!-- Right highlight card -->
        <div class="biu-porque-sec__card">
          <div class="biu-hcard">
            <div class="biu-hcard__header">
              <Icon name="mdi:star-circle-outline" size="28" />
              <span>Lo que te distinguirá</span>
            </div>
            <ul class="biu-hcard__list">
              <li
                v-for="item in [
                  {
                    icon: 'mdi:comment-multiple-outline',
                    text: 'Inglés fluido nivel B2 al egresar',
                  },
                  {
                    icon: 'mdi:certificate-outline',
                    text: 'Certificación TKT de Cambridge incluida',
                  },
                  {
                    icon: 'mdi:earth',
                    text: 'Acceso a intercambios en 25+ países',
                  },
                  {
                    icon: 'mdi:lightning-bolt-outline',
                    text: 'Ventaja competitiva para universidad y trabajo',
                  },
                  {
                    icon: 'mdi:account-group-outline',
                    text: 'Red de egresados UNINTER global',
                  },
                ]"
                :key="item.text"
              >
                <div class="biu-hcard__item-icon">
                  <Icon :name="item.icon" size="16" />
                </div>
                <span>{{ item.text }}</span>
              </li>
            </ul>
            <NuxtLink to="/bachillerato/admisiones" class="biu-hcard__cta">
              Solicitar información →
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════
         PLAN DE ESTUDIOS — TIMELINE VISUAL
    ══════════════════════════════════════════ -->
    <section id="plan" class="biu-plan">
      <div class="biu-wrap">
        <p class="biu-eyebrow biu-eyebrow--center">Estructura curricular</p>
        <h2 class="biu-title biu-title--center">PLAN DE ESTUDIOS</h2>
        <p class="biu-plan__caption">
          Haz clic en cada semestre para ver las materias
        </p>

        <!-- Timeline -->
        <div class="biu-timeline">
          <div
            v-for="(s, i) in semestres"
            :key="i"
            class="biu-timeline__step"
            :class="{
              'biu-timeline__step--active': pasoActivo === i,
              'biu-timeline__step--area': s.tipo === 'area',
            }"
            @click="pasoActivo = i"
          >
            <div class="biu-timeline__num">{{ s.num }}</div>
            <div class="biu-timeline__label">{{ s.label }}</div>
            <span v-if="s.tipo === 'area'" class="biu-timeline__badge-area"
              >Especialización</span
            >
          </div>
          <div class="biu-timeline__bar">
            <div
              class="biu-timeline__bar-fill"
              :style="`width: ${((pasoActivo + 1) / semestres.length) * 100}%`"
            ></div>
          </div>
        </div>

        <!-- Subjects panel -->
        <div
          class="biu-plan__panel"
          :class="{
            'biu-plan__panel--area': semestres[pasoActivo].tipo === 'area',
          }"
        >
          <div class="biu-plan__panel-tag">
            <Icon
              :name="
                semestres[pasoActivo].tipo === 'area'
                  ? 'mdi:star-outline'
                  : 'mdi:book-outline'
              "
              size="14"
            />
            {{
              semestres[pasoActivo].tipo === "area"
                ? "Área de Especialización"
                : "Tronco Común"
            }}
          </div>
          <h3 class="biu-plan__panel-sem">{{ semestres[pasoActivo].label }}</h3>
          <ul
            v-if="semestres[pasoActivo].tipo === 'tronco'"
            class="biu-plan__list"
          >
            <li v-for="m in semestres[pasoActivo].materias" :key="m">
              <Icon
                name="mdi:check-circle-outline"
                size="15"
                class="biu-plan__check"
              />
              {{ m }}
            </li>
          </ul>
          <div v-else class="biu-plan__area-msg">
            <Icon
              name="mdi:information-outline"
              size="20"
              class="biu-plan__area-icon"
            />
            <p>{{ semestres[pasoActivo].materias[0] }}</p>
            <button class="biu-plan__area-btn" @click="scrollTo('#areas')">
              Ver áreas de especialización
              <Icon name="mdi:arrow-down" size="14" />
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════
         ÁREAS DE ESPECIALIZACIÓN
    ══════════════════════════════════════════ -->
    <AreasEspecializacion />

    <!-- ══════════════════════════════════════════
         PERFIL DE EGRESO
    ══════════════════════════════════════════ -->
    <section id="egreso" class="biu-egreso">
      <div class="biu-wrap biu-egreso__inner">
        <div class="biu-egreso__left">
          <p class="biu-eyebrow">Al terminar el programa</p>
          <h2 class="biu-title">PERFIL<br /><em>DE EGRESO</em></h2>
          <p class="biu-body">
            El egresado del Bachillerato Bilingüe UNINTER cuenta con
            competencias académicas, lingüísticas y digitales que lo posicionan
            con ventaja para ingresar a la universidad o al mercado laboral.
          </p>
        </div>
        <div class="biu-egreso__right">
          <div
            v-for="item in [
              {
                icon: 'mdi:comment-text-outline',
                text: 'Comunica ideas con fluidez en inglés nivel B2 según el MCER',
              },
              {
                icon: 'mdi:book-open-page-variant-outline',
                text: 'Analiza y produce textos críticos en español e inglés',
              },
              {
                icon: 'mdi:calculator-variant-outline',
                text: 'Aplica pensamiento matemático y científico',
              },
              {
                icon: 'mdi:laptop',
                text: 'Utiliza tecnologías digitales para el aprendizaje autónomo',
              },
              {
                icon: 'mdi:earth',
                text: 'Convive en ambientes multiculturales con actitud incluyente',
              },
              {
                icon: 'mdi:lightbulb-on-outline',
                text: 'Desarrolla proyectos con creatividad e innovación',
              },
              {
                icon: 'mdi:account-multiple-outline',
                text: 'Trabaja en equipo con liderazgo y responsabilidad',
              },
              {
                icon: 'mdi:school-outline',
                text: 'Preparado para la educación superior universitaria',
              },
            ]"
            :key="item.text"
            class="biu-egreso__item"
          >
            <div class="biu-egreso__icon">
              <Icon :name="item.icon" size="18" />
            </div>
            <span>{{ item.text }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════
         MODELO PEDAGÓGICO
    ══════════════════════════════════════════ -->
    <section class="biu-modelo">
      <div class="biu-modelo__noise" aria-hidden="true"></div>
      <div class="biu-wrap">
        <p class="biu-eyebrow biu-eyebrow--light biu-eyebrow--center">
          Nuestra metodología
        </p>
        <h2 class="biu-title biu-title--white biu-title--center">
          MODELO BLENDED-FLEX<br /><em style="color: var(--gl)">LEARNING</em>
        </h2>
        <div class="biu-modelo__grid">
          <div
            v-for="pilar in [
              {
                icon: 'mdi:monitor-dashboard',
                label: 'En línea',
                desc: 'Plataforma con contenidos interactivos 24/7.',
              },
              {
                icon: 'mdi:account-tie-outline',
                label: 'Presencial',
                desc: 'Sesiones para práctica y socialización académica.',
              },
              {
                icon: 'mdi:book-education-outline',
                label: 'Autónomo',
                desc: 'Materiales para estudio a tu propio ritmo.',
              },
              {
                icon: 'mdi:translate',
                label: 'Inmersión',
                desc: 'Contenidos en inglés con énfasis progresivo.',
              },
              {
                icon: 'mdi:cog-outline',
                label: 'Competencias',
                desc: 'Evaluación que integra conocimientos y actitudes.',
              },
              {
                icon: 'mdi:certificate-outline',
                label: 'TKT',
                desc: 'Preparación Cambridge incluida en el plan.',
              },
            ]"
            :key="pilar.label"
            class="biu-modelo__pilar"
          >
            <div class="biu-modelo__pilar-icon">
              <Icon :name="pilar.icon" size="26" />
            </div>
            <h3>{{ pilar.label }}</h3>
            <p>{{ pilar.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════
         PROCESO DE ADMISIÓN (MINI)
    ══════════════════════════════════════════ -->
    <section id="admision" class="biu-proceso">
      <div class="biu-wrap">
        <p class="biu-eyebrow biu-eyebrow--center">Simple y rápido</p>
        <h2 class="biu-title biu-title--center">PROCESO DE ADMISIÓN</h2>
        <div class="biu-proceso__steps">
          <div
            v-for="(step, i) in [
              {
                icon: 'mdi:form-select',
                label: 'Solicita información',
                desc: 'Llena el formulario o contáctanos por WhatsApp.',
              },
              {
                icon: 'mdi:file-document-edit-outline',
                label: 'Entrega documentos',
                desc: 'CURP, acta de nacimiento, certificado de secundaria.',
              },
              {
                icon: 'mdi:bank-outline',
                label: 'Realiza tu pago',
                desc: 'Pago de inscripción con múltiples opciones.',
              },
              {
                icon: 'mdi:check-decagram-outline',
                label: '¡Eres BIU!',
                desc: 'Accede a tu plataforma e inicia clases.',
              },
            ]"
            :key="step.label"
            class="biu-proceso__step"
          >
            <div class="biu-proceso__step-num">{{ i + 1 }}</div>
            <div
              v-if="i < 3"
              class="biu-proceso__connector"
              aria-hidden="true"
            ></div>
            <div class="biu-proceso__step-icon">
              <Icon :name="step.icon" size="28" />
            </div>
            <h3>{{ step.label }}</h3>
            <p>{{ step.desc }}</p>
          </div>
        </div>
        <div class="biu-proceso__cta-wrap">
          <NuxtLink to="/bachillerato/admisiones" class="biu-proceso__cta">
            Ver proceso completo de admisión
            <Icon name="mdi:arrow-right" size="16" />
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════
         MÁS SOBRE BIU
    ══════════════════════════════════════════ -->
    <section class="biu-mas">
      <div class="biu-wrap">
        <h2 class="biu-title biu-title--center" style="margin-bottom: 2.5rem">
          MÁS SOBRE BACHILLERATO BILINGÜE
        </h2>
        <div class="biu-mas__grid">
          <div class="biu-mas__col">
            <div class="biu-mas__col-head">
              <Icon name="mdi:account-check-outline" size="20" />
              <h3>PERFIL DE INGRESO</h3>
            </div>
            <ul class="biu-mas__list">
              <li
                v-for="item in [
                  'Educación secundaria concluida oficialmente',
                  'Disposición para el aprendizaje del inglés',
                  'Actitud proactiva y autodisciplina para el estudio',
                  'Gusto por la lectura y la comunicación',
                  'Capacidad para trabajar en equipo',
                  'Acceso a dispositivos con conexión a internet',
                  'Interés por formarse en un ambiente multicultural',
                ]"
                :key="item"
              >
                <Icon
                  name="mdi:check-circle-outline"
                  size="15"
                  class="biu-mas__check"
                />
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="biu-mas__col">
            <div class="biu-mas__col-head">
              <Icon name="mdi:trophy-outline" size="20" />
              <h3>TALLERES DEPORTIVOS</h3>
            </div>
            <ul class="biu-mas__list biu-mas__list--2col">
              <li
                v-for="item in [
                  'Basquetbol',
                  'Fútbol soccer',
                  'Fútbol americano',
                  'Voleibol',
                  'Tenis de mesa',
                  'Ajedrez',
                  'Danza',
                  'Atletismo',
                  'Natación',
                  'Artes marciales',
                ]"
                :key="item"
              >
                <Icon
                  name="mdi:check-circle-outline"
                  size="15"
                  class="biu-mas__check"
                />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════
         ¿POR QUÉ ESTUDIAR EN BIU?
    ══════════════════════════════════════════ -->
    <section class="biu-razones">
      <div class="biu-wrap">
        <div class="biu-razones__head-icon">
          <Icon name="mdi:book-open-variant" size="28" />
        </div>
        <h2 class="biu-razones__title">¿POR QUÉ ESTUDIAR EN BIU?</h2>
        <div class="biu-razones__grid">
          <div
            v-for="item in [
              {
                icon: 'mdi:school-outline',
                text: 'Más de 40 años de experiencia en educación de calidad',
              },
              {
                icon: 'mdi:certificate-outline',
                text: 'Certificación TKT Cambridge incluida en el plan de estudios',
              },
              {
                icon: 'mdi:currency-usd',
                text: 'Becas y financiamiento disponibles para todos los estudiantes',
              },
              {
                icon: 'mdi:monitor-dashboard',
                text: 'Plataforma educativa digital de vanguardia 24/7',
              },
              {
                icon: 'mdi:account-star-outline',
                text: 'Docentes certificados internacionalmente',
              },
              {
                icon: 'mdi:earth',
                text: 'Intercambios académicos con más de 25 países',
              },
              {
                icon: 'mdi:account-group-outline',
                text: 'Red de egresados y oportunidades laborales UNINTER',
              },
              {
                icon: 'mdi:shield-check-outline',
                text: 'RVOE oficial avalado por la SEP',
              },
              {
                icon: 'mdi:heart-outline',
                text: 'Ambiente multicultural, diverso e inclusivo',
              },
              {
                icon: 'mdi:arrow-up-bold-circle-outline',
                text: 'Preparación sólida para la universidad',
              },
            ]"
            :key="item.text"
            class="biu-razones__item"
          >
            <Icon :name="item.icon" size="18" class="biu-razones__item-icon" />
            <span>{{ item.text }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════════════════
         INTERNACIONALIZACIÓN / FORM
    ══════════════════════════════════════════ -->
    <Internacionalizacion />
    <FormRegister />
    <PortalFooter />
  </div>
</template>

<style scoped>
.biu-hero-wrapper {
  --g: #bad043;
  --gl: #7bba4f;
  --gd: #459c4a;
  --ga: #bad043;
}
.biu-container {
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1.5rem;
}
.biu-hero-wrapper {
  background-color: #0c2010;
}
.biu-hero {
  align-items: center;
  background: transparent;
  display: flex;
  height: clamp(520px, 68vh, 680px);
  overflow: hidden;
  position: relative;
}
.biu-hero__bg {
  inset: 0;
  position: absolute;
}
.biu-hero__img {
  animation: kb-ee6eb843 14s ease-out forwards;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center top;
  object-position: center top;
  width: 100%;
}

.biu-hero__overlay {
  display: none; /* Apagamos por completo esta capa para que no ensucie la foto */
}

.biu-hero__overlay2 {
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);

  /* Aplicamos el verde oscuro intenso a la izquierda, desvaneciéndose hacia el centro */
  background: linear-gradient(
    90deg,
    rgba(12, 32, 16, 0.95) 0%,
    rgba(12, 32, 16, 0.7) 30%,
    transparent 55%
  );

  inset: 0;
  position: absolute;

  /* La máscara asegura que tanto el blur como el verde mueran exactamente a la mitad */
  -webkit-mask-image: linear-gradient(90deg, #000, #000 35%, transparent 55%);
  mask-image: linear-gradient(90deg, #000, #000 35%, transparent 55%);
}

.biu-hero__deco {
  color: #a8d86e;
  opacity: 0.12;
  position: absolute;
  z-index: 2;
}
.biu-hero__deco--tl {
  left: 5%;
  top: 14%;
}
.biu-hero__deco--tr {
  right: 8%;
  top: 10%;
}
.biu-hero__deco--br {
  bottom: 20%;
  right: 12%;
}
.biu-hero__content {
  position: relative;
  width: 100%;
  z-index: 3;
}
.biu-hero__inner {
  max-width: 640px;
}
.biu-hero__eyebrow {
  align-items: center;
  display: flex;
  margin-bottom: -1.5rem;
}
.biu-hero__logo-full {
  height: 48px;
  -o-object-fit: contain;
  object-fit: contain;
}
.biu-hero__tagline {
  color: #ffffff8c;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  margin: 0 0 1rem;
  text-transform: uppercase;
}
.biu-hero__title {
  display: flex;
  flex-direction: column;
  line-height: 1;
  margin: 0 0 2rem;
}
.biu-hero__title-main {
  color: var(--ga);
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 24px hsla(87, 58%, 64%, 0.25);
}
.biu-hero__title-main,
.biu-hero__title-sub {
  font-family: var(--font-serif, Georgia, serif);
}
.biu-hero__title-sub {
  color: #ffffffe6;
  font-size: clamp(1.2rem, 2.5vw, 1.9rem);
  font-weight: 600;
  letter-spacing: 0.05em;
  margin-top: 1rem;
}
.biu-hero__desc {
  color: #ffffffad;
  font-size: clamp(0.9rem, 1.4vw, 1rem);
  line-height: 1.65;
  margin: 0 0 1.5rem;
  max-width: none;
}
.biu-hero__ctas-new {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1rem;
}
.biu-btn-card {
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
.sticker-line--en {
  background: var(--gl);
  color: #fff;
}
.biu-btn-card:hover {
  background: #bad04326;
  border-color: var(--g);
  color: var(--g);
  transform: translateY(-2px);
}
.btn-icon {
  margin-bottom: 0.1rem;
}
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
@media (max-width: 768px) {
  .biu-hero {
    flex-direction: column;
    height: auto;
    min-height: clamp(500px, 85vh, 800px);
    padding-top: 5rem;
  }
  .biu-hero__content {
    align-items: center;
    display: flex;
    flex: 1;
    padding-bottom: 3rem;
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
  @media (max-width: 480px) {
    .biu-hero__ctas-new {
      flex-direction: row;
      gap: 1rem;
    }
    .biu-btn-card {
      flex: 1;
      padding: 1rem;
    }
    .biu-hero__title-main {
      font-size: clamp(2.5rem, 12vw, 4rem);
    }
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
}

.biu-page {
  --g: #6baf04;
  --gd: #4a7a02;
  --gl: #aad45a;
  --dark: #111a06;
}
.biu-wrap {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
.biu-eyebrow {
  display: block;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--g);
  margin: 0 0 0.6rem;
}
.biu-eyebrow--center {
  text-align: center;
}
.biu-eyebrow--light {
  color: var(--gl);
}
.biu-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.7rem, 3.5vw, 2.6rem);
  font-weight: 900;
  color: #1a2a0a;
  margin: 0 0 1.25rem;
  letter-spacing: 0.02em;
  line-height: 1.1;
}
.biu-title em {
  font-style: italic;
  color: var(--g);
}
.biu-title--center {
  text-align: center;
}
.biu-title--white {
  color: #fff;
}
.biu-body {
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.75;
  margin: 0 0 1rem;
}

/* ═══ QUICK NAV ═══ */
.biu-qnav {
  background: #fff;
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 80px;
  z-index: 200;
}
.biu-qnav__inner {
  display: flex;
  align-items: center;
  gap: 0;
  overflow-x: auto;
  scrollbar-width: none;
}
.biu-qnav__inner::-webkit-scrollbar {
  display: none;
}
.biu-qnav__link {
  background: none;
  border: none;
  padding: 1rem 1.25rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: #64748b;
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  transition: color 0.2s;
  letter-spacing: 0.02em;
}
.biu-qnav__link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--g);
  transform: scaleX(0);
  transition: transform 0.2s;
}
.biu-qnav__link:hover {
  color: var(--gd);
}
.biu-qnav__link:hover::after {
  transform: scaleX(1);
}

/* ═══ STATS ═══ */
.biu-stats {
  background: var(--dark);
  padding: 2.5rem 0;
}
.biu-stats__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
.biu-stats__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
}
.biu-stats__icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(107, 175, 4, 0.12);
  color: var(--g);
  display: flex;
  align-items: center;
  justify-content: center;
}
.biu-stats__num {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 2.4rem;
  font-weight: 900;
  color: #fff;
  line-height: 1;
}
.biu-stats__label {
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.5);
  font-weight: 600;
}

/* ═══ ¿POR QUÉ? ═══ */
.biu-porque-sec {
  background: #fff;
  padding: 6rem 0;
}
.biu-porque-sec__inner {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 4rem;
  align-items: start;
}
.biu-porque-sec__pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.75rem;
}
.biu-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.76rem;
  font-weight: 700;
  background: rgba(107, 175, 4, 0.09);
  color: var(--gd);
  border: 1px solid rgba(107, 175, 4, 0.2);
  border-radius: 6px;
  padding: 0.3rem 0.75rem;
}

/* Highlight card */
.biu-hcard {
  background: linear-gradient(145deg, #0f1f06 0%, #1a3008 100%);
  border-radius: 20px;
  padding: 2rem;
  position: sticky;
  top: 130px;
}
.biu-hcard__header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--gl);
  font-size: 0.85rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}
.biu-hcard__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  margin-bottom: 1.75rem;
}
.biu-hcard__list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.45;
}
.biu-hcard__item-icon {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: rgba(107, 175, 4, 0.15);
  color: var(--g);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.biu-hcard__cta {
  display: block;
  text-align: center;
  background: var(--g);
  color: #fff;
  text-decoration: none;
  font-size: 0.88rem;
  font-weight: 700;
  padding: 0.875rem;
  border-radius: 10px;
  transition: background 0.2s;
}
.biu-hcard__cta:hover {
  background: var(--gd);
}

/* ═══ PLAN DE ESTUDIOS ═══ */
.biu-plan {
  background: #f8faf3;
  padding: 6rem 0;
}
.biu-plan__caption {
  text-align: center;
  font-size: 0.85rem;
  color: #94a3b8;
  margin: -0.5rem 0 2.5rem;
}

/* Timeline */
.biu-timeline {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0;
  position: relative;
  margin-bottom: 2.5rem;
}
.biu-timeline__bar {
  position: absolute;
  top: 33px;
  z-index: 0;
  left: calc(100% / 12);
  right: calc(100% / 12);
  height: 3px;
  background: #e2e8f0;
  border-radius: 2px;
  overflow: hidden;
}
.biu-timeline__bar-fill {
  height: 100%;
  background: var(--g);
  border-radius: 2px;
  transition: width 0.4s ease;
}
.biu-timeline__step {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.75rem 0.5rem 0;
  position: relative;
  z-index: 1;
  transition: transform 0.2s;
}
.biu-timeline__step:hover {
  transform: translateY(-2px);
}
.biu-timeline__num {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 2.5px solid #e2e8f0;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 800;
  color: #94a3b8;
  transition: all 0.25s;
  position: relative;
  z-index: 1;
}
.biu-timeline__label {
  font-size: 0.72rem;
  font-weight: 700;
  color: #94a3b8;
  text-align: center;
  white-space: nowrap;
  transition: color 0.25s;
}
.biu-timeline__badge-area {
  font-size: 0.6rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--gd);
  background: rgba(107, 175, 4, 0.12);
  border-radius: 4px;
  padding: 0.1rem 0.4rem;
}

/* Active step */
.biu-timeline__step--active .biu-timeline__num {
  background: var(--g);
  border-color: var(--g);
  color: #fff;
  box-shadow: 0 0 0 4px rgba(107, 175, 4, 0.2);
}
.biu-timeline__step--active .biu-timeline__label {
  color: var(--gd);
}
.biu-timeline__step--area .biu-timeline__num {
  border-color: var(--g);
  color: var(--gd);
}
.biu-timeline__step--area.biu-timeline__step--active .biu-timeline__num {
  background: var(--gd);
  border-color: var(--gd);
  color: #fff;
}

/* Panel */
.biu-plan__panel {
  background: #fff;
  border-radius: 16px;
  padding: 2rem 2.5rem;
  border: 1.5px solid rgba(107, 175, 4, 0.15);
  max-width: 640px;
  margin: 0 auto;
  box-shadow: 0 4px 24px rgba(107, 175, 4, 0.07);
  transition: border-color 0.3s;
}
.biu-plan__panel--area {
  border-color: var(--g);
}
.biu-plan__panel-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gd);
  background: rgba(107, 175, 4, 0.1);
  border-radius: 4px;
  padding: 0.2rem 0.6rem;
  margin-bottom: 0.875rem;
}
.biu-plan__panel-sem {
  font-size: 1rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 1.25rem;
}
.biu-plan__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem 1.5rem;
}
.biu-plan__list li {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.84rem;
  color: #334155;
}
.biu-plan__check {
  color: var(--g);
  flex-shrink: 0;
}
.biu-plan__area-msg {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  padding: 1rem 0;
}
.biu-plan__area-icon {
  color: var(--g);
}
.biu-plan__area-msg p {
  font-size: 0.9rem;
  color: #475569;
  margin: 0;
  line-height: 1.6;
}
.biu-plan__area-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--g);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0.65rem 1.25rem;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}
.biu-plan__area-btn:hover {
  background: var(--gd);
}

/* ═══ PERFIL EGRESO ═══ */
.biu-egreso {
  background: #fff;
  padding: 6rem 0;
}
.biu-egreso__inner {
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 5rem;
  align-items: start;
}
.biu-egreso__left {
  position: sticky;
  top: 130px;
}
.biu-egreso__right {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.875rem;
}
.biu-egreso__item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  background: #f8faf3;
  border-radius: 12px;
  padding: 1rem 1.125rem;
  border: 1px solid rgba(107, 175, 4, 0.1);
}
.biu-egreso__icon {
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: rgba(107, 175, 4, 0.12);
  color: var(--g);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.biu-egreso__item span {
  font-size: 0.83rem;
  color: #334155;
  line-height: 1.5;
  padding-top: 0.1rem;
}

/* ═══ MODELO ═══ */
.biu-modelo {
  background: var(--dark);
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
}
.biu-modelo__noise {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Ccircle cx='30' cy='30' r='1' fill='rgba(107,175,4,0.08)'/%3E%3C/svg%3E");
  background-size: 60px 60px;
}
.biu-modelo__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  position: relative;
}
.biu-modelo__pilar {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(107, 175, 4, 0.15);
  border-radius: 14px;
  padding: 1.75rem 1.5rem;
  transition:
    border-color 0.25s,
    background 0.25s;
}
.biu-modelo__pilar:hover {
  border-color: rgba(107, 175, 4, 0.4);
  background: rgba(107, 175, 4, 0.05);
}
.biu-modelo__pilar-icon {
  width: 52px;
  height: 52px;
  border-radius: 12px;
  background: rgba(107, 175, 4, 0.12);
  color: var(--g);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}
.biu-modelo__pilar h3 {
  font-size: 0.92rem;
  font-weight: 800;
  color: #fff;
  margin: 0 0 0.4rem;
}
.biu-modelo__pilar p {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.5);
  line-height: 1.55;
  margin: 0;
}

/* ═══ PROCESO ADMISIÓN ═══ */
.biu-proceso {
  background: #f8faf3;
  padding: 6rem 0;
}
.biu-proceso__steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  position: relative;
  margin-bottom: 3rem;
}
.biu-proceso__step {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 1rem;
  position: relative;
}
.biu-proceso__step-num {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--g);
  color: #fff;
  font-size: 0.8rem;
  font-weight: 900;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}
.biu-proceso__connector {
  position: absolute;
  top: 18px;
  left: calc(50% + 18px);
  right: calc(-50% + 18px);
  height: 2px;
  background: rgba(107, 175, 4, 0.25);
  z-index: 0;
}
.biu-proceso__step-icon {
  width: 70px;
  height: 70px;
  border-radius: 16px;
  background: #fff;
  border: 1.5px solid rgba(107, 175, 4, 0.15);
  color: var(--g);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  box-shadow: 0 4px 16px rgba(107, 175, 4, 0.08);
}
.biu-proceso__step h3 {
  font-size: 0.88rem;
  font-weight: 800;
  color: #1e293b;
  margin: 0 0 0.375rem;
}
.biu-proceso__step p {
  font-size: 0.8rem;
  color: #64748b;
  line-height: 1.55;
  margin: 0;
}
.biu-proceso__cta-wrap {
  display: flex;
  justify-content: center;
}
.biu-proceso__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--g);
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.9rem 2rem;
  border-radius: 10px;
  transition:
    background 0.2s,
    transform 0.2s;
}
.biu-proceso__cta:hover {
  background: var(--gd);
  transform: translateY(-2px);
}

/* ═══ MÁS SOBRE ═══ */
.biu-mas {
  background: #fff;
  padding: 5.5rem 0;
}
.biu-mas__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
}
.biu-mas__col {
  background: #f8faf3;
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(107, 175, 4, 0.12);
}
.biu-mas__col-head {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(107, 175, 4, 0.12);
  color: var(--g);
}
.biu-mas__col-head h3 {
  font-size: 0.8rem;
  font-weight: 900;
  letter-spacing: 0.06em;
  color: #334155;
  margin: 0;
}
.biu-mas__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.biu-mas__list--2col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem 1rem;
}
.biu-mas__list li {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.84rem;
  color: #475569;
}
.biu-mas__check {
  color: var(--g);
  flex-shrink: 0;
}

/* ═══ ¿POR QUÉ ESTUDIAR? ═══ */
.biu-razones {
  background: #111a06;
  padding: 6rem 0;
  text-align: center;
}
.biu-razones__head-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(107, 175, 4, 0.12);
  color: var(--g);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
}
.biu-razones__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  font-weight: 900;
  color: #fff;
  letter-spacing: 0.05em;
  margin: 0 0 3rem;
}
.biu-razones__grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1rem;
  text-align: left;
}
.biu-razones__item {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(107, 175, 4, 0.12);
  border-radius: 12px;
  padding: 1.125rem;
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  transition:
    border-color 0.2s,
    background 0.2s;
}
.biu-razones__item:hover {
  border-color: rgba(107, 175, 4, 0.35);
  background: rgba(107, 175, 4, 0.05);
}
.biu-razones__item-icon {
  color: var(--g);
  flex-shrink: 0;
  margin-top: 2px;
}
.biu-razones__item span {
  font-size: 0.81rem;
  color: rgba(255, 255, 255, 0.68);
  line-height: 1.55;
}

/* ═══ RESPONSIVE ═══ */
@media (max-width: 1200px) {
  .biu-razones__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media (max-width: 1024px) {
  .biu-hero__inner {
    grid-template-columns: 1fr;
  }
  .biu-hero__chips {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .biu-porque-sec__inner {
    grid-template-columns: 1fr;
  }
  .biu-hcard {
    position: static;
  }
  .biu-egreso__inner {
    grid-template-columns: 1fr;
  }
  .biu-egreso__left {
    position: static;
  }
  .biu-modelo__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .biu-proceso__steps {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  .biu-proceso__connector {
    display: none;
  }
  .biu-proceso__step-num {
    margin-bottom: 0.75rem;
  }
}
@media (max-width: 768px) {
  .biu-stats__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .biu-egreso__right {
    grid-template-columns: 1fr;
  }
  .biu-timeline {
    grid-template-columns: repeat(3, 1fr);
  }
  .biu-mas__grid {
    grid-template-columns: 1fr;
  }
  .biu-razones__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 540px) {
  .biu-hero__chips {
    flex-direction: column;
  }
  .biu-stats__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .biu-modelo__grid {
    grid-template-columns: 1fr;
  }
  .biu-proceso__steps {
    grid-template-columns: 1fr;
  }
  .biu-timeline {
    grid-template-columns: repeat(2, 1fr);
  }
  .biu-plan__list {
    grid-template-columns: 1fr;
  }
  .biu-razones__grid {
    grid-template-columns: 1fr;
  }
  .biu-mas__list--2col {
    grid-template-columns: 1fr;
  }
}
</style>
/* trigger hmr 1787340517971 */
