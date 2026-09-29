<script setup lang="ts">
import { ref } from "vue";
import {
  Globe,
  Languages,
  Mail,
  Calendar,
  Sparkles,
  Users,
  Compass,
  ArrowRight,
  ShieldCheck,
  FileCheck,
  MessageCircle,
} from "lucide-vue-next";

const WA_PHONE = "5217776154241";

// Estadísticas clave de apertura
const stats = [
  { value: "3", label: "Destinos globales (Irlanda, Londres, Japón)", icon: Globe },
  { value: "USA", label: "Programa Pen Pals con escuelas de EE.UU.", icon: Mail },
  { value: "2", label: "Idiomas curriculares (Inglés y Francés)", icon: Languages },
  { value: "MCER", label: "Alineación Cambridge & DELF oficial", icon: ShieldCheck },
];

// Oportunidades de internacionalización para SIU
const oportunidadesSIU = [
  {
    id: "viajes",
    badge: "Movilidad Internacional",
    nombre: "Viajes Académicos Culturales",
    destinos: ["Irlanda 🇮🇪", "Londres 🇬🇧", "Japón 🇯🇵"],
    descripcion:
      "Estancias académicas y recorridos culturales guiados diseñados específicamente para alumnos de secundaria, combinando inmersión en el idioma, visitas a sitios históricos, ciencia y convivencia internacional supervisada.",
    icono: Globe,
    beneficios: [
      "Práctica intensiva del idioma inglés en contextos cotidianos reales.",
      "Talleres culturales, visitas guiadas a museos y centros científicos.",
      "Acompañamiento docente permanente y altos estándares de seguridad institucional.",
    ],
  },
  {
    id: "interculturalidad",
    badge: "Convivencia en Campus",
    nombre: "Clases de Interculturalidad",
    destinos: ["Comunidad UNINTER", "Estudiantes Extranjeros"],
    descripcion:
      "Espacios y talleres regulares dentro de las asignaturas de idiomas donde nuestros alumnos conviven, dialogan y colaboran con estudiantes internacionales que realizan su intercambio en UNINTER Cuernavaca.",
    icono: Languages,
    beneficios: [
      "Desarrollo de fluidez conversacional espontánea sin salir del campus.",
      "Apertura a nuevas tradiciones, perspectivas globales y derribo de barreras culturales.",
      "Amistades multinacionales y fomento de empatía intercultural temprana.",
    ],
  },
  {
    id: "penpals",
    badge: "Experiencias Virtuales",
    nombre: "Pen Pals con Estudiantes de USA",
    destinos: ["Secundarias de Estados Unidos 🇺🇸"],
    descripcion:
      "Programa de correspondencia digital supervisada y proyectos colaborativos en línea con alumnos de secundarias estadounidenses, permitiendo una práctica comunicativa auténtica y enriquecedora.",
    icono: Mail,
    beneficios: [
      "Intercambio virtual bilingüe guiado por docentes de ambos países.",
      "Redacción y comunicación asertiva en entornos digitales seguros.",
      "Conexión directa con la cultura juvenil norteamericana contemporánea.",
    ],
  },
];

function contactWhatsApp(programaNombre: string) {
  const text = `¡Hola! Vengo del portal de Secundaria SIU UNINTER y me gustaría recibir más información sobre el programa de internacionalización: *${programaNombre}*. ¿Podrían orientarme sobre requisitos y fechas?`;
  const url = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

function openWhatsAppGeneral() {
  const text =
    "¡Hola! Vengo del portal de Secundaria SIU UNINTER y me gustaría agendar una visita o recibir información general sobre las oportunidades de internacionalización (viajes, clases de interculturalidad y Pen Pals).";
  const url = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}
</script>

<template>
  <section class="inter-section" id="internacionalizacion-siu">
    <!-- 1. HERO BANNER FULL-WIDTH (AMARILLO OPACO / ÁMBAR ELEGANTE) -->
    <div class="inter-banner">
      <img
        src="/images/stock/Inter.jpg"
        alt="Internacionalización Secundaria SIU UNINTER"
        class="inter-banner__img"
        onerror="this.src='/images/hero/Inter.svg'"
      />
      <div class="inter-banner__overlay"></div>
      <div class="siu-container inter-banner__content">
        <div class="inter-banner__inner">
          <div class="inter-eyebrow">
            <span class="eyebrow-line"></span>
            PROYECCIÓN GLOBAL & CIUDADANÍA MUNDIAL
          </div>
          <h2 class="inter-title">
            Oportunidades de<br />
            <em>Internacionalización para SIU</em>
          </h2>
          <p class="inter-desc">
            En SIU Secundaria formamos ciudadanos del mundo desde temprana edad.
            Nuestros alumnos desarrollan un dominio natural del inglés y francés,
            conviven con estudiantes extranjeros y participan en experiencias
            culturales internacionales que transforman su visión del futuro.
          </p>
        </div>
      </div>
    </div>

    <!-- 2. FRANJA DE INDICADORES DE IMPACTO -->
    <div class="inter-stats-bar">
      <div class="siu-container">
        <div class="inter-stats-grid">
          <div v-for="st in stats" :key="st.label" class="stat-pill">
            <div class="stat-pill__icon">
              <component :is="st.icon" :size="22" />
            </div>
            <div class="stat-pill__info">
              <span class="stat-pill__value">{{ st.value }}</span>
              <span class="stat-pill__label">{{ st.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 3. BLOQUE DE PROGRAMAS DE INTERNACIONALIZACIÓN SIU -->
    <div class="inter-block">
      <div class="siu-container">
        <div class="section-heading">
          <div class="siu-eyebrow">
            <span class="eyebrow-line-gold"></span> VINCULACIÓN INTERNACIONAL SIU
          </div>
          <h3 class="section-title">
            Programas diseñados para <em>abrir sus alas al mundo</em>
          </h3>
          <p class="section-subtitle">
            Estrategias pedagógicas de vanguardia que combinan aprendizaje vivencial,
            habilidades sociolingüísticas y tecnologías de conexión global desde secundaria.
          </p>
        </div>

        <!-- Grid de Tarjetas de Oportunidades -->
        <div class="siu-grid">
          <div
            v-for="op in oportunidadesSIU"
            :key="op.id"
            class="siu-card"
          >
            <div class="siu-card__header">
              <span class="siu-card__badge">{{ op.badge }}</span>
              <div class="siu-card__icon-box">
                <component :is="op.icono" :size="20" />
              </div>
            </div>

            <div class="siu-card__body">
              <h4 class="siu-card__title">{{ op.nombre }}</h4>
              
              <div class="siu-card__destinos">
                <span
                  v-for="(dest, dIdx) in op.destinos"
                  :key="dIdx"
                  class="destino-pill"
                >
                  {{ dest }}
                </span>
              </div>

              <p class="siu-card__desc">{{ op.descripcion }}</p>

              <div class="siu-card__beneficios">
                <h5 class="beneficios-title">
                  <Sparkles :size="15" /> Beneficios formativos
                </h5>
                <ul class="beneficios-list">
                  <li v-for="(b, bIdx) in op.beneficios" :key="bIdx">
                    <span class="b-bullet"></span>
                    <span>{{ b }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="siu-card__footer">
              <button
                type="button"
                class="btn-siu-card"
                @click="contactWhatsApp(op.nombre)"
              >
                <span>Solicitar informes</span>
                <MessageCircle :size="16" />
              </button>
            </div>
          </div>
        </div>

        <!-- NOTA INFORMATIVA DE RESPALDO INSTITUCIONAL -->
        <div class="siu-footnote">
          <div class="footnote-inner">
            <div class="footnote-icon">
              <FileCheck :size="24" />
            </div>
            <div class="footnote-text">
              <p class="footnote-title">
                Acompañamiento docente, seguridad y orientación para familias
              </p>
              <p class="footnote-desc">
                Todos nuestros programas internacionales cuentan con lineamientos estrictos de supervisión, seguro de viajero y seguimiento formativo personalizado. Conoce cómo tu hijo puede formar parte de estas experiencias.
              </p>
            </div>
            <button
              type="button"
              class="footnote-btn"
              @click="openWhatsAppGeneral"
            >
              <MessageCircle :size="18" />
              <span>Contactar a un Asesor</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.inter-section {
  position: relative;
  background-color: #ffffff;
  color: #1e293b;
  overflow: hidden;
}

.siu-container {
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1.5rem;
}

/* ── 1. Hero Banner Full-Width (Amarillo Opaco / Ámbar Profundo) ── */
.inter-banner {
  align-items: center;
  background: #1e1906;
  display: flex;
  min-height: clamp(340px, 46vh, 460px);
  overflow: hidden;
  position: relative;
}

.inter-banner__img {
  height: 100%;
  inset: 0;
  object-fit: cover;
  object-position: center center;
  position: absolute;
  width: 100%;
  opacity: 0.38;
}

.inter-banner__overlay {
  background: linear-gradient(
    115deg,
    rgba(30, 24, 6, 0.96) 0%,
    rgba(42, 33, 8, 0.90) 45%,
    rgba(22, 17, 4, 0.65) 100%
  );
  inset: 0;
  position: absolute;
}

.inter-banner__content {
  position: relative;
  width: 100%;
  z-index: 2;
  padding-top: 3.5rem;
  padding-bottom: 3.5rem;
}

.inter-banner__grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 2.5rem;
}

.inter-banner__inner {
  max-width: 660px;
}

.inter-eyebrow {
  color: #facc15;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  margin: 0 0 1rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.eyebrow-line {
  background: #facc15;
  display: block;
  flex-shrink: 0;
  height: 2px;
  width: 26px;
}

.inter-title {
  color: #ffffff;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2.1rem, 4.2vw, 3.4rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.12;
  margin: 0 0 1.25rem;
}

.inter-title em {
  color: #fde047;
  font-style: normal;
}

.inter-desc {
  color: rgba(255, 255, 255, 0.88);
  font-size: 1rem;
  line-height: 1.65;
  margin: 0;
}

/* ── Burbujas Flotantes (Amarillo Opaco Glassmorphism) ── */
.inter-floating-bubbles {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
}

.inter-bubble {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: rgba(36, 29, 7, 0.72);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(250, 204, 21, 0.35);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 1rem 1.25rem;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.inter-bubble:hover {
  transform: translateY(-3px) scale(1.01);
  border-color: rgba(250, 204, 21, 0.7);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.5), 0 0 20px rgba(250, 204, 21, 0.2);
}

.inter-bubble--1 {
  animation: floatBubbleSIU 5s ease-in-out infinite;
}

.inter-bubble--2 {
  animation: floatBubbleSIU 5.8s ease-in-out infinite 0.7s;
  margin-left: 1.5rem;
}

.inter-bubble--3 {
  animation: floatBubbleSIU 6.2s ease-in-out infinite 1.4s;
}

@keyframes floatBubbleSIU {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

.inter-bubble__icon-wrap {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(250, 204, 21, 0.15);
  border: 1px solid rgba(250, 204, 21, 0.4);
  color: #fde047;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.inter-bubble__info {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.inter-bubble__badge {
  color: #facc15;
  font-size: 0.68rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.inter-bubble__title {
  color: #ffffff;
  font-size: 0.96rem;
  font-weight: 700;
  margin: 0;
  line-height: 1.3;
}

.inter-bubble__desc {
  color: rgba(255, 255, 255, 0.82);
  font-size: 0.82rem;
  line-height: 1.4;
  margin: 0;
}

.inter-bubble__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.35rem;
}

.bubble-tag {
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.2rem 0.55rem;
  border-radius: 999px;
  backdrop-filter: blur(4px);
}

/* ── 2. Franja de Estadísticas ── */
.inter-stats-bar {
  background: #fffdf0;
  border-top: 1px solid #fef08a;
  border-bottom: 1px solid #fef08a;
  padding: 1.5rem 0;
}

.inter-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.stat-pill {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #ffffff;
  border: 1px solid #fef08a;
  border-radius: 14px;
  padding: 1rem 1.25rem;
  box-shadow: 0 2px 8px rgba(202, 138, 4, 0.06);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.stat-pill:hover {
  transform: translateY(-2px);
  border-color: #facc15;
  box-shadow: 0 4px 16px rgba(202, 138, 4, 0.12);
}

.stat-pill__icon {
  background: #fefce8;
  color: #ca8a04;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stat-pill__info {
  display: flex;
  flex-direction: column;
}

.stat-pill__value {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.45rem;
  font-weight: 800;
  color: #854d0e;
  line-height: 1.1;
}

.stat-pill__label {
  font-size: 0.78rem;
  color: #713f12;
  font-weight: 500;
  line-height: 1.3;
}

/* ── 3. Bloque de Contenido y Tarjetas ── */
.inter-block {
  padding: 4.5rem 0 5rem;
  background: #fafaf9;
}

.section-heading {
  text-align: center;
  max-width: 780px;
  margin: 0 auto 3.5rem;
}

.siu-eyebrow {
  color: #ca8a04;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  margin: 0 auto 0.75rem;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
}

.eyebrow-line-gold {
  background: #ca8a04;
  display: block;
  height: 2px;
  width: 24px;
}

.section-title {
  color: #1c1917;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.8rem, 3.2vw, 2.6rem);
  font-weight: 800;
  letter-spacing: -0.01em;
  margin: 0 0 1rem;
}

.section-title em {
  color: #b45309;
  font-style: italic;
}

.section-subtitle {
  color: #57534e;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
}

/* ── Grid de Tarjetas SIU ── */
.siu-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3.5rem;
}

.siu-card {
  background: #ffffff;
  border: 1px solid #fef08a;
  border-radius: 20px;
  padding: 2rem 1.75rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.siu-card:hover {
  transform: translateY(-4px);
  border-color: #facc15;
  box-shadow: 0 12px 32px rgba(202, 138, 4, 0.15);
}

.siu-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.siu-card__badge {
  background: #fefce8;
  color: #854d0e;
  border: 1px solid #fef08a;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  letter-spacing: 0.05em;
}

.siu-card__icon-box {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #fffbeb;
  color: #d97706;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #fde68a;
}

.siu-card__title {
  color: #1c1917;
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.35rem;
  font-weight: 800;
  line-height: 1.25;
  margin: 0 0 0.85rem;
}

.siu-card__destinos {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1rem;
}

.destino-pill {
  background: #f5f5f4;
  color: #44403c;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
  border: 1px solid #e7e5e4;
}

.siu-card__desc {
  color: #57534e;
  font-size: 0.88rem;
  line-height: 1.55;
  margin: 0 0 1.5rem;
}

.siu-card__beneficios {
  margin-top: auto;
  padding-top: 1.25rem;
  border-top: 1px dashed #e7e5e4;
  margin-bottom: 1.5rem;
}

.beneficios-title {
  color: #854d0e;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin: 0 0 0.75rem;
}

.beneficios-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.beneficios-list li {
  color: #44403c;
  font-size: 0.82rem;
  line-height: 1.45;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.b-bullet {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #d97706;
  margin-top: 6px;
  flex-shrink: 0;
}

.siu-card__footer {
  margin-top: 0.5rem;
}

.btn-siu-card {
  width: 100%;
  background: #fefce8;
  border: 1px solid #fef08a;
  color: #854d0e;
  font-weight: 700;
  font-size: 0.88rem;
  padding: 0.75rem 1rem;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
}

.btn-siu-card:hover {
  background: #ca8a04;
  color: #ffffff;
  border-color: #ca8a04;
  box-shadow: 0 4px 14px rgba(202, 138, 4, 0.25);
}

/* ── Footnote / Respaldo ── */
.siu-footnote {
  background: #ffffff;
  border: 1px solid #fef08a;
  border-radius: 16px;
  padding: 1.5rem 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
}

.footnote-inner {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.footnote-icon {
  width: 48px;
  height: 48px;
  background: #fefce8;
  color: #d97706;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.footnote-text {
  flex: 1;
}

.footnote-title {
  color: #1c1917;
  font-size: 0.98rem;
  font-weight: 800;
  margin: 0 0 0.35rem;
}

.footnote-desc {
  color: #57534e;
  font-size: 0.85rem;
  line-height: 1.5;
  margin: 0;
}

.footnote-btn {
  background: #ca8a04;
  color: #ffffff;
  border: none;
  font-weight: 700;
  font-size: 0.88rem;
  padding: 0.8rem 1.4rem;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  white-space: nowrap;
  flex-shrink: 0;
  transition: all 0.2s ease;
}

.footnote-btn:hover {
  background: #a16207;
  box-shadow: 0 4px 14px rgba(161, 98, 7, 0.3);
}

/* ── Responsividad ── */
@media (max-width: 1024px) {
  .siu-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 960px) {
  .inter-banner__grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .inter-bubble--2 {
    margin-left: 0;
  }
  .inter-stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .footnote-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 640px) {
  .siu-grid {
    grid-template-columns: 1fr;
  }
  .inter-stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
