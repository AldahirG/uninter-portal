<script setup lang="ts">
import { computed } from "vue";
import {
  Globe,
  GraduationCap,
  Calendar,
  Languages,
  Users,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
  FileCheck,
  MessageCircle,
} from "lucide-vue-next";

const props = withDefaults(
  defineProps<{
    tipo?: "especialidad" | "maestria" | "doctorado" | "all";
  }>(),
  {
    tipo: "all",
  }
);

const WA_PHONE = "5217776154241";

// Título dinámico según nivel de posgrado
const seccionTitulo = computed(() => {
  if (props.tipo === "maestria") return "Maestrías";
  if (props.tipo === "especialidad") return "Especialidades";
  if (props.tipo === "doctorado") return "Doctorados";
  return "Posgrados";
});

// Estadísticas clave de apertura
const stats = computed(() => [
  { value: "130+", label: "Universidades socias en el mundo", icon: Building2 },
  {
    value: props.tipo === "maestria" ? "Doble" : "Global",
    label: props.tipo === "maestria" ? "Titulación internacional en Maestrías" : "Convenios de movilidad y estancias",
    icon: GraduationCap,
  },
  { value: "3", label: "Destinos culturales (Irlanda, Londres, Japón)", icon: Globe },
  { value: "1 Sem - 1 Año", label: "Duración de intercambios académicos", icon: Calendar },
]);

// Catálogo base de oportunidades
const todasLasOportunidades = [
  {
    id: "doble-titulacion",
    badge: "Exclusivo Maestrías",
    nombre: "Doble Titulación Internacional",
    destinos: ["Universidades Socias Internacionales"],
    descripcion:
      "Programa de titulación simultánea que te permite obtener el grado académico de Maestría por UNINTER y el título homólogo avalado por una universidad socia internacional en América o Europa, multiplicando tu competitividad laboral en mercados globales.",
    icono: GraduationCap,
    solomMaestrias: true,
    beneficios: [
      "Obtención de dos grados académicos oficiales con reconocimiento transfronterizo.",
      "Convalidación ágil de créditos y materias del plan curricular.",
      "Apertura para ejercer profesionalmente y liderar proyectos a nivel internacional.",
    ],
  },
  {
    id: "viajes-culturales",
    badge: "Movilidad Académica",
    nombre: "Viajes Académicos Culturales",
    destinos: ["Irlanda 🇮🇪", "Londres 🇬🇧", "Japón 🇯🇵"],
    descripcion:
      "Estancias intensivas y visitas de prospección académica en sedes universitarias, centros tecnológicos y distritos financieros en el extranjero, combinando aprendizaje vivencial, diplomacia corporativa y networking con directivos internacionales.",
    icono: Globe,
    solomMaestrias: false,
    beneficios: [
      "Inmersión en ecosistemas de innovación tecnológica y alta dirección.",
      "Visitas institucionales a organismos internacionales y corporativos multinacionales.",
      "Enriquecimiento cultural y desarrollo de visión estratégica global.",
    ],
  },
  {
    id: "intercambios-academicos",
    badge: "Estancias Formales",
    nombre: "Intercambios Académicos Semestrales o Anuales",
    destinos: ["1 Semestre o hasta 1 Año Completo"],
    descripcion:
      "Posibilidad de cursar un semestre o hasta un año escolar completo en instituciones de educación superior extranjeras en convenio, revalidando materias curriculares y viviendo una experiencia académica integral en el país anfitrión.",
    icono: Calendar,
    solomMaestrias: false,
    beneficios: [
      "Revalidación y acreditación oficial de materias en tu plan de posgrado.",
      "Acceso a bibliotecas especializadas, cátedras de investigadores y laboratorios de punta.",
      "Dominio de idiomas profesionales y networking con posgraduados de todo el mundo.",
    ],
  },
  {
    id: "clases-interculturalidad",
    badge: "Networking en Campus",
    nombre: "Clases de Interculturalidad con Alumnos de Intercambio",
    destinos: ["Campus Cuernavaca", "Entornos Híbridos"],
    descripcion:
      "Integración activa en seminarios, cátedras y talleres de posgrado donde colaboran estudiantes e investigadores extranjeros de intercambio, fomentando el debate multicultural y el análisis comparativo de marcos regulatorios y empresariales.",
    icono: Languages,
    solomMaestrias: false,
    beneficios: [
      "Intercambio de mejores prácticas profesionales y casos de estudio globales.",
      "Desarrollo de habilidades de negociación multicultural y diplomacia ejecutiva.",
      "Creación de redes de contacto internacionales duraderas desde el aula.",
    ],
  },
  {
    id: "estudiantes-campus",
    badge: "Comunidad Científica",
    nombre: "Estudiantes e Investigadores Internacionales en Campus",
    destinos: ["Comunidad Global UNINTER"],
    descripcion:
      "UNINTER recibe permanentemente a docentes visitantes, conferencistas magistrales y estudiantes de posgrado de diversos continentes, consolidando un ambiente académico cosmopolita y de alto nivel intelectual en nuestras instalaciones.",
    icono: Users,
    solomMaestrias: false,
    beneficios: [
      "Cátedras magistrales impartidas por profesores y expertos extranjeros invitados.",
      "Participación en coloquios, foros de investigación y simposios internacionales.",
      "Vínculo directo con instituciones académicas y centros de investigación asociados.",
    ],
  },
];

// Filtrar según el nivel de posgrado: "Doble titulación" SOLO aparece para Maestrías (o si es "all")
const oportunidadesFiltradas = computed(() => {
  if (props.tipo === "maestria" || props.tipo === "all") {
    return todasLasOportunidades;
  }
  // En Especialidades y Doctorados se excluye la Doble Titulación de Maestrías
  return todasLasOportunidades.filter((op) => !op.solomMaestrias);
});

function contactWhatsApp(programaNombre: string) {
  const text = `¡Hola! Vengo del portal de Posgrados UNINTER (${seccionTitulo.value}) y me gustaría recibir información detallada sobre la oportunidad de internacionalización: *${programaNombre}*. ¿Podrían orientarme sobre convenios, requisitos y convocatorias abiertas?`;
  const url = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

function openWhatsAppGeneral() {
  const text = `¡Hola! Vengo del portal de Posgrados UNINTER y me gustaría contactar a un asesor académico para conocer las convocatorias vigentes de movilidad internacional, viajes culturales y convenios para ${seccionTitulo.value}.`;
  const url = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}
</script>

<template>
  <section class="inter-section" id="internacionalizacion-posgrados">
    <!-- 1. HERO BANNER FULL-WIDTH (AZUL MARINO EJECUTIVO & ILUMINACIÓN DORADA) -->
    <div class="inter-banner">
      <img
        src="/images/stock/Inter.jpg"
        alt="Internacionalización Posgrados UNINTER"
        class="inter-banner__img"
        onerror="this.src='/images/hero/Inter.svg'"
      />
      <div class="inter-banner__overlay"></div>
      <div class="pg-container inter-banner__content">
        <div class="inter-banner__inner">
          <div class="inter-eyebrow">
            <span class="eyebrow-line"></span>
            PROYECCIÓN GLOBAL & VINCULACIÓN ACADÉMICA
          </div>
          <h2 class="inter-title">
            Oportunidades de<br />
            <em>Internacionalización para {{ seccionTitulo }}</em>
          </h2>
          <p class="inter-desc">
            En Posgrados UNINTER impulsamos la investigación, el liderazgo corporativo
            y la proyección global de nuestros estudiantes. Accede a convenios con
            universidades de prestigio en América y Europa, estancias de investigación
            y experiencias vivenciales diseñadas para transformar tu perfil profesional.
          </p>
        </div>
      </div>
    </div>

    <!-- 2. FRANJA DE INDICADORES DE IMPACTO -->
    <div class="inter-stats-bar">
      <div class="pg-container">
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

    <!-- 3. BLOQUE DE PROGRAMAS DE INTERNACIONALIZACIÓN DE POSGRADOS -->
    <div class="inter-block">
      <div class="pg-container">
        <div class="section-heading">
          <div class="pg-eyebrow">
            <span class="eyebrow-line-gold"></span> VINCULACIÓN GLOBAL ESTRATÉGICA
          </div>
          <h3 class="section-title">
            Programas internacionales para <em>{{ seccionTitulo }}</em>
          </h3>
          <p class="section-subtitle">
            Opciones curriculares y vivenciales adaptadas a profesionales de alto rendimiento que buscan trascender fronteras e impulsar su liderazgo en sectores de vanguardia.
          </p>
        </div>

        <!-- Grid de Tarjetas de Oportunidades -->
        <div class="pg-grid" :class="{ 'pg-grid--4': oportunidadesFiltradas.length === 4, 'pg-grid--5': oportunidadesFiltradas.length === 5 }">
          <div
            v-for="op in oportunidadesFiltradas"
            :key="op.id"
            class="pg-card"
          >
            <div class="pg-card__header">
              <span class="pg-card__badge" :class="{ 'badge--gold': op.solomMaestrias }">{{ op.badge }}</span>
              <div class="pg-card__icon-box" :class="{ 'icon-box--gold': op.solomMaestrias }">
                <component :is="op.icono" :size="20" />
              </div>
            </div>

            <div class="pg-card__body">
              <h4 class="pg-card__title">{{ op.nombre }}</h4>
              
              <div class="pg-card__destinos">
                <span
                  v-for="(dest, dIdx) in op.destinos"
                  :key="dIdx"
                  class="destino-pill"
                >
                  {{ dest }}
                </span>
              </div>

              <p class="pg-card__desc">{{ op.descripcion }}</p>

              <div class="pg-card__beneficios">
                <h5 class="beneficios-title">
                  <Sparkles :size="15" /> Aportación curricular y profesional
                </h5>
                <ul class="beneficios-list">
                  <li v-for="(b, bIdx) in op.beneficios" :key="bIdx">
                    <span class="b-bullet"></span>
                    <span>{{ b }}</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="pg-card__footer">
              <button
                type="button"
                class="btn-pg-card"
                :class="{ 'btn-pg-card--gold': op.solomMaestrias }"
                @click="contactWhatsApp(op.nombre)"
              >
                <span>Solicitar informes y requisitos</span>
                <MessageCircle :size="16" />
              </button>
            </div>
          </div>
        </div>

        <!-- NOTA INFORMATIVA DE RESPALDO INSTITUCIONAL -->
        <div class="pg-footnote">
          <div class="footnote-inner">
            <div class="footnote-icon">
              <FileCheck :size="24" />
            </div>
            <div class="footnote-text">
              <p class="footnote-title">
                Asesoría personalizada en convocatorias, trámites y becas de movilidad
              </p>
              <p class="footnote-desc">
                La Dirección de Posgrados y el Departamento de Internacionalización UNINTER te orientan en la postulación a convenios bilaterales, revalidación de materias y aplicación a apoyos institucionales.
              </p>
            </div>
            <button
              type="button"
              class="footnote-btn"
              @click="openWhatsAppGeneral"
            >
              <MessageCircle :size="18" />
              <span>Contactar a Vinculación de Posgrados</span>
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

.pg-container {
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1.5rem;
}

/* ── 1. Hero Banner Full-Width (Azul Marino Ejecutivo) ── */
.inter-banner {
  align-items: center;
  background: #07192e;
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
    rgba(7, 25, 46, 0.96) 0%,
    rgba(11, 32, 60, 0.90) 45%,
    rgba(5, 17, 33, 0.65) 100%
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
  color: #f4ea80;
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
  background: #f4ea80;
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
  color: #f6ec8d;
  font-style: normal;
}

.inter-desc {
  color: rgba(255, 255, 255, 0.88);
  font-size: 1rem;
  line-height: 1.65;
  margin: 0;
}

/* ── Burbujas Flotantes (Azul Marino + Oro Glassmorphism) ── */
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
  background: rgba(11, 30, 56, 0.72);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(244, 234, 128, 0.35);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  padding: 1rem 1.25rem;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.inter-bubble:hover {
  transform: translateY(-3px) scale(1.01);
  border-color: rgba(244, 234, 128, 0.75);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.55), 0 0 20px rgba(244, 234, 128, 0.25);
}

.inter-bubble--1 {
  animation: floatBubblePG 5s ease-in-out infinite;
}

.inter-bubble--2 {
  animation: floatBubblePG 5.8s ease-in-out infinite 0.7s;
  margin-left: 1.5rem;
}

.inter-bubble--3 {
  animation: floatBubblePG 6.2s ease-in-out infinite 1.4s;
}

@keyframes floatBubblePG {
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
  background: rgba(244, 234, 128, 0.15);
  border: 1px solid rgba(244, 234, 128, 0.4);
  color: #f4ea80;
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
  color: #f4ea80;
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
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
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
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 1rem 1.25rem;
  box-shadow: 0 2px 8px rgba(7, 25, 46, 0.05);
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.stat-pill:hover {
  transform: translateY(-2px);
  border-color: #3b82f6;
  box-shadow: 0 4px 16px rgba(7, 25, 46, 0.1);
}

.stat-pill__icon {
  background: rgba(7, 25, 46, 0.06);
  color: #07192e;
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
  font-size: 1.4rem;
  font-weight: 800;
  color: #07192e;
  line-height: 1.1;
}

.stat-pill__label {
  font-size: 0.78rem;
  color: #475569;
  font-weight: 500;
  line-height: 1.3;
}

/* ── 3. Bloque de Contenido y Tarjetas ── */
.inter-block {
  padding: 4.5rem 0 5rem;
  background: #f8fafc;
}

.section-heading {
  text-align: center;
  max-width: 780px;
  margin: 0 auto 3.5rem;
}

.pg-eyebrow {
  color: #07192e;
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
  background: #d4af37;
  display: block;
  height: 2px;
  width: 24px;
}

.section-title {
  color: #0f172a;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.8rem, 3.2vw, 2.6rem);
  font-weight: 800;
  letter-spacing: -0.01em;
  margin: 0 0 1rem;
}

.section-title em {
  color: #0284c7;
  font-style: italic;
}

.section-subtitle {
  color: #64748b;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
}

/* ── Grid de Tarjetas Posgrados ── */
.pg-grid {
  display: grid;
  gap: 2rem;
  margin-bottom: 3.5rem;
}

.pg-grid--4 {
  grid-template-columns: repeat(2, 1fr);
}

.pg-grid--5 {
  grid-template-columns: repeat(3, 1fr);
}

.pg-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 2rem 1.75rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
}

.pg-card:hover {
  transform: translateY(-4px);
  border-color: #94a3b8;
  box-shadow: 0 12px 32px rgba(7, 25, 46, 0.12);
}

.pg-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.pg-card__badge {
  background: #eff6ff;
  color: #1e40af;
  border: 1px solid #dbeafe;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  letter-spacing: 0.05em;
}

.badge--gold {
  background: #fefce8;
  color: #854d0e;
  border-color: #fef08a;
}

.pg-card__icon-box {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #eff6ff;
  color: #1d4ed8;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #bfdbfe;
}

.icon-box--gold {
  background: #fefce8;
  color: #b45309;
  border-color: #fde68a;
}

.pg-card__title {
  color: #07192e;
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.35rem;
  font-weight: 800;
  line-height: 1.25;
  margin: 0 0 0.85rem;
}

.pg-card__destinos {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1rem;
}

.destino-pill {
  background: #f1f5f9;
  color: #334155;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
  border: 1px solid #e2e8f0;
}

.pg-card__desc {
  color: #475569;
  font-size: 0.88rem;
  line-height: 1.55;
  margin: 0 0 1.5rem;
}

.pg-card__beneficios {
  margin-top: auto;
  padding-top: 1.25rem;
  border-top: 1px dashed #e2e8f0;
  margin-bottom: 1.5rem;
}

.beneficios-title {
  color: #0f172a;
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
  color: #334155;
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
  background: #0284c7;
  margin-top: 6px;
  flex-shrink: 0;
}

.pg-card__footer {
  margin-top: 0.5rem;
}

.btn-pg-card {
  width: 100%;
  background: #07192e;
  border: 1px solid #07192e;
  color: #ffffff;
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

.btn-pg-card:hover {
  background: #0b2545;
  border-color: #0b2545;
  box-shadow: 0 4px 14px rgba(7, 25, 46, 0.3);
}

.btn-pg-card--gold {
  background: #854d0e;
  border-color: #854d0e;
}

.btn-pg-card--gold:hover {
  background: #a16207;
  border-color: #a16207;
  box-shadow: 0 4px 14px rgba(161, 98, 7, 0.3);
}

/* ── Footnote / Respaldo ── */
.pg-footnote {
  background: #ffffff;
  border: 1px solid #e2e8f0;
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
  background: #eff6ff;
  color: #1e40af;
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
  color: #07192e;
  font-size: 0.98rem;
  font-weight: 800;
  margin: 0 0 0.35rem;
}

.footnote-desc {
  color: #64748b;
  font-size: 0.85rem;
  line-height: 1.5;
  margin: 0;
}

.footnote-btn {
  background: #07192e;
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
  background: #0284c7;
  box-shadow: 0 4px 14px rgba(2, 132, 199, 0.3);
}

/* ── Responsividad ── */
@media (max-width: 1024px) {
  .pg-grid--5,
  .pg-grid--4 {
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
  .pg-grid--5,
  .pg-grid--4 {
    grid-template-columns: 1fr;
  }
  .inter-stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
