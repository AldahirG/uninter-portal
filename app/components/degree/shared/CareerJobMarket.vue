<script setup lang="ts">
import { ref, computed, nextTick } from "vue";
import { X } from "lucide-vue-next";

interface Opportunity {
  title: string;
  description: string;
}

const props = defineProps<{
  careerOpportunities?: Opportunity[];
}>();

const defaultOpportunities: Opportunity[] = [
  {
    title: "Director(a) de Contenido",
    description:
      "Lidera la estrategia editorial, coordina equipos creativos y supervisa la producción de contenidos en múltiples plataformas para garantizar la coherencia y el impacto del mensaje.",
  },
  {
    title: "Estratega de Comunicación Transmedia",
    description:
      "Diseña narrativas complejas que se despliegan a través de múltiples canales y formatos, conectando a las audiencias con historias inmersivas y experiencias interactivas.",
  },
  {
    title: "Consultor(a) de Gestión de Crisis y Riesgo Reputacional",
    description:
      "Asesora a corporativos e individuos para prevenir crisis de imagen, diseñando planes de respuesta inmediata y tácticas para proteger la reputación pública.",
  },
  {
    title: "Director(a) de Comunicación Corporativa",
    description:
      "Gestiona la identidad e imagen corporativa, liderando las relaciones públicas, la comunicación interna y el contacto estratégico con medios y stakeholders.",
  },
  {
    title: "UX Writer & Product Content Strategist",
    description:
      "Define el tono y la voz de productos digitales, creando microtextos y guías de contenido que mejoran la experiencia de usuario y la usabilidad de interfaces.",
  },
  {
    title: "Periodista de Investigación Multimedia",
    description:
      "Investiga y reporta a profundidad utilizando herramientas digitales avanzadas, visualización de datos y plataformas interactivas para contar historias complejas.",
  },
];

const opportunities = computed<Opportunity[]>(() => {
  if (props.careerOpportunities && props.careerOpportunities.length > 0) {
    return props.careerOpportunities.slice(0, 6);
  }
  return defaultOpportunities;
});

const selectedJob = ref<Opportunity | null>(null);
const detailPanelRef = ref<HTMLElement | null>(null);
const sectionRef = ref<HTMLElement | null>(null);

const selectJob = async (job: Opportunity) => {
  selectedJob.value = job;
  await nextTick();
  if (window.innerWidth <= 820 && detailPanelRef.value) {
    detailPanelRef.value.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

const closeDetail = () => {
  selectedJob.value = null;
  if (window.innerWidth <= 820 && sectionRef.value) {
    sectionRef.value.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
</script>

<template>
  <section class="career-job-market" ref="sectionRef" id="campo-laboral">
    <div class="uninter-container">
      <!-- Encabezado -->
      <div class="job-market-header">
        <h2 class="section-title">
          ¿En qué puedo <span class="title-accent">trabajar?</span>
        </h2>
      </div>

      <!-- Escenario Unificado: Píldoras persistentes con animación de transición fluida -->
      <div class="job-market-stage" :class="{ 'is-detailed': selectedJob }">
        <!-- Contenedor de Píldoras -->
        <div class="pills-wrapper">
          <button
            v-for="(job, index) in opportunities"
            :key="'pill-' + index"
            class="job-pill"
            :class="[
              'pill-pos-' + index,
              { 'is-active': selectedJob?.title === job.title }
            ]"
            @click="selectJob(job)"
          >
            {{ job.title }}
          </button>
        </div>

        <!-- Tarjeta de Detalle (Aparece suavemente a la derecha) -->
        <Transition name="detail-fade">
          <div
            v-if="selectedJob"
            class="detail-card-wrapper"
            ref="detailPanelRef"
          >
            <div class="detail-card">
              <button
                class="btn-close"
                @click="closeDetail"
                aria-label="Cerrar detalle"
              >
                <X :size="20" stroke-width="2.5" />
              </button>
              <h3 class="detail-title">{{ selectedJob.title }}</h3>
              <p class="detail-desc">
                {{ selectedJob.description }}
              </p>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.career-job-market {
  background-color: #ffffff;
  font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
  overflow: hidden;
  padding: 5.5rem 0 6.5rem;
  position: relative;
}

.uninter-container {
  margin: 0 auto;
  max-width: 1100px;
  padding: 0 1.5rem;
  width: 100%;
}

/* ═══ ENCABEZADO ═══ */
.job-market-header {
  margin-bottom: 4rem;
  text-align: center;
}

.section-title {
  color: #0f3c61;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2.3rem, 4.2vw, 3.2rem);
  font-weight: 800;
  letter-spacing: -0.01em;
  line-height: 1.2;
  margin: 0;
}

.title-accent {
  color: #0084d1;
}

/* ═══ ESCENARIO UNIFICADO (TRANSICIÓN CONTINUA) ═══ */
.job-market-stage {
  align-items: flex-start;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 820px;
  min-height: 440px;
  position: relative;
  transition: max-width 0.65s cubic-bezier(0.22, 1, 0.36, 1),
              gap 0.65s cubic-bezier(0.22, 1, 0.36, 1);
}

.job-market-stage.is-detailed {
  gap: 2.25rem;
  max-width: 880px;
}

/* ═══ CONTENEDOR DE PÍLDORAS ═══ */
.pills-wrapper {
  height: 420px;
  position: relative;
  transition: width 0.65s cubic-bezier(0.22, 1, 0.36, 1);
  width: 100%;
}

.is-detailed .pills-wrapper {
  flex-shrink: 0;
  width: 320px;
}

/* ═══ PÍLDORA (ESTILO GLASSMORPHISM & ANIMACIÓN FLUIDA) ═══ */
.job-pill {
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  background: radial-gradient(
    circle at 20% 50%,
    rgba(0, 132, 209, 0.08) 0%,
    rgba(255, 255, 255, 0.88) 85%
  );
  border: 1px solid rgba(0, 132, 209, 0.2);
  border-radius: 9999px;
  box-shadow: 0 8px 24px rgba(0, 132, 209, 0.06),
    inset 0 1px 3px rgba(255, 255, 255, 0.9);
  box-sizing: border-box;
  color: #0f3c61;
  cursor: pointer;
  display: inline-block;
  font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
  font-size: 0.96rem;
  font-weight: 700;
  outline: none;
  padding: 0.85rem 1.8rem;
  position: absolute;
  transition: top 0.65s cubic-bezier(0.22, 1, 0.36, 1),
              left 0.65s cubic-bezier(0.22, 1, 0.36, 1),
              width 0.65s cubic-bezier(0.22, 1, 0.36, 1),
              background 0.3s ease,
              border-color 0.3s ease,
              color 0.3s ease,
              box-shadow 0.3s ease;
  user-select: none;
  white-space: nowrap;
  z-index: 2;
}

.job-pill:hover {
  background: radial-gradient(
    circle at 20% 50%,
    rgba(0, 132, 209, 0.14) 0%,
    rgba(255, 255, 255, 0.96) 85%
  );
  border-color: rgba(0, 132, 209, 0.45);
  box-shadow: 0 12px 28px rgba(0, 132, 209, 0.14),
    inset 0 1px 4px rgba(255, 255, 255, 1);
  z-index: 10;
}

.job-pill.is-active {
  background: #f0f9ff !important;
  border-color: #0084d1 !important;
  box-shadow: 0 8px 25px rgba(0, 132, 209, 0.16),
    inset 0 0 12px rgba(0, 132, 209, 0.06);
  color: #0084d1 !important;
  z-index: 5;
}

/* ═══ ESTADO 1: POSICIONES FLOTANTES DISPERSAS EN EL CENTRO ═══ */
.pill-pos-0 { top: 4%;  left: 14%; width: auto; }
.pill-pos-1 { top: 22%; left: 52%; width: auto; }
.pill-pos-2 { top: 42%; left: 32%; width: auto; }
.pill-pos-3 { top: 60%; left: 8%;  width: auto; }
.pill-pos-4 { top: 76%; left: 56%; width: auto; }
.pill-pos-5 { top: 92%; left: 30%; width: auto; }

/* Animación de flotación libre en estado 1 */
@keyframes floatCloud {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
}

.job-market-stage:not(.is-detailed) .job-pill {
  animation: floatCloud 5s ease-in-out infinite;
}

.job-market-stage:not(.is-detailed) .pill-pos-0 { animation-delay: 0s; }
.job-market-stage:not(.is-detailed) .pill-pos-1 { animation-delay: 1.2s; }
.job-market-stage:not(.is-detailed) .pill-pos-2 { animation-delay: 2.4s; }
.job-market-stage:not(.is-detailed) .pill-pos-3 { animation-delay: 0.6s; }
.job-market-stage:not(.is-detailed) .pill-pos-4 { animation-delay: 1.8s; }
.job-market-stage:not(.is-detailed) .pill-pos-5 { animation-delay: 3s; }

/* ═══ ESTADO 2: POSICIONES APILADAS EN COLUMNA + FLOTACIÓN SUAVE ═══ */
.is-detailed .pill-pos-0 { top: 0px;   left: 0; width: 100%; text-align: center; white-space: normal; }
.is-detailed .pill-pos-1 { top: 66px;  left: 0; width: 100%; text-align: center; white-space: normal; }
.is-detailed .pill-pos-2 { top: 132px; left: 0; width: 100%; text-align: center; white-space: normal; }
.is-detailed .pill-pos-3 { top: 198px; left: 0; width: 100%; text-align: center; white-space: normal; }
.is-detailed .pill-pos-4 { top: 264px; left: 0; width: 100%; text-align: center; white-space: normal; }
.is-detailed .pill-pos-5 { top: 330px; left: 0; width: 100%; text-align: center; white-space: normal; }

/* Flotación continua incluso estando apiladas */
@keyframes floatStack {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-4px); }
  100% { transform: translateY(0px); }
}

.is-detailed .job-pill {
  animation: floatStack 4.5s ease-in-out infinite;
}

.is-detailed .pill-pos-0 { animation-delay: 0s; }
.is-detailed .pill-pos-1 { animation-delay: 0.75s; }
.is-detailed .pill-pos-2 { animation-delay: 1.5s; }
.is-detailed .pill-pos-3 { animation-delay: 2.25s; }
.is-detailed .pill-pos-4 { animation-delay: 3s; }
.is-detailed .pill-pos-5 { animation-delay: 3.75s; }

/* ═══ TARJETA DE DETALLE DERECHA ═══ */
.detail-card-wrapper {
  flex: 1;
  max-width: 500px;
}

.detail-card {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  box-shadow: 0 15px 40px rgba(15, 60, 97, 0.08);
  padding: 3rem 2.5rem;
  position: relative;
  text-align: center;
}

.btn-close {
  background: rgba(15, 60, 97, 0.05);
  border: none;
  border-radius: 50%;
  color: #475569;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  position: absolute;
  right: 1.25rem;
  top: 1.25rem;
  transition: all 0.2s ease;
  width: 32px;
}

.btn-close:hover {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  transform: scale(1.08);
}

.detail-title {
  color: #0f3c61;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.35rem, 2vw, 1.65rem);
  font-weight: 800;
  line-height: 1.35;
  margin: 0;
}

.detail-desc {
  color: #334155;
  font-size: 0.98rem;
  line-height: 1.7;
  margin: 1.5rem 0 0;
}

/* ═══ TRANSICIÓN SUAVE DE LA TARJETA ═══ */
.detail-fade-enter-active,
.detail-fade-leave-active {
  transition: opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1),
              transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.detail-fade-enter-from,
.detail-fade-leave-to {
  opacity: 0;
  transform: translateX(30px) scale(0.97);
}

/* ═══ RESPONSIVE ═══ */
@media (max-width: 820px) {
  .job-market-header {
    margin-bottom: 2.5rem;
  }
  .job-market-stage {
    flex-direction: column;
    max-width: 100%;
    min-height: auto;
  }
  .pills-wrapper {
    height: 520px;
    margin: 0 auto;
    max-width: 360px;
  }
  .is-detailed .pills-wrapper {
    height: 420px;
    margin-bottom: 1.5rem;
    width: 100%;
  }
  .detail-card-wrapper {
    max-width: 100%;
    width: 100%;
  }
  .detail-card {
    padding: 2.25rem 1.75rem;
  }
}
</style>
