<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import { HelpCircle, X, ChevronDown } from "lucide-vue-next";

// Recibir las preguntas y respuestas específicas de la carrera
const props = defineProps<{
  faq?: Array<{ q: string; a: string }>;
}>();

const isOpen = ref(false);
const activeIndex = ref<number | null>(null);
const showNotification = ref(true);

// FAQs generales de reserva (fallback)
const generalFaq = [
  {
    q: "¿Cómo inicio mi proceso de admisión?",
    a: "Puedes iniciar tu proceso registrándote directamente en nuestra plataforma digital. Deberás presentar tu certificado de bachillerato, acta de nacimiento, CURP y comprobante de domicilio. Un asesor de admisiones te guiará en cada paso.",
  },
  {
    q: "¿Cuentan con programas de becas o financiamiento?",
    a: "Sí, contamos con un sólido programa de becas por promedio académico, becas deportivas, culturales y convenios de apoyo financiero. Te invitamos a utilizar nuestra Calculadora de Becas integrada en el portal principal.",
  },
  {
    q: "¿Cuáles son las opciones de titulación disponibles?",
    a: "Contamos con múltiples opciones de titulación integral de excelencia profesional: titulación automática por promedio sobresaliente, examen general de conocimientos (EGEL/CENEVAL), créditos de maestría, o desarrollo de tesis/proyecto de investigación.",
  },
  {
    q: "¿Tienen convenios de intercambio estudiantil?",
    a: "Sí, UNINTER cuenta con convenios de movilidad académica nacional e internacional con prestigiosas universidades en países como Colombia, España, Italia y Turquía, además de clases espejo y materias impartidas en inglés.",
  },
];

// Determinar el set de preguntas a mostrar
const activeFaq = computed(() => {
  return props.faq && props.faq.length > 0 ? props.faq : generalFaq;
});

function toggleModal() {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    showNotification.value = false; // Quitar notificación al abrir
  }
}

function toggleAccordion(index: number) {
  activeIndex.value = activeIndex.value === index ? null : index;
}

// Ocultar notificación después de unos segundos si no se interactúa
onMounted(() => {
  setTimeout(() => {
    // Si no se ha abierto el modal, atenuamos sutilmente el badge
  }, 8000);
});
</script>

<template>
  <div class="career-faq-wrapper">
    <!-- Botón Gatillo Flotante (FAB) -->
    <button
      @click="toggleModal"
      class="faq-trigger-btn"
      :class="{ 'faq-trigger-btn--active': isOpen }"
      aria-label="Preguntas Frecuentes"
    >
      <HelpCircle v-if="!isOpen" :size="24" />
      <X v-else :size="24" />

      <!-- Badge de Notificación -->
      <span
        v-if="showNotification"
        class="faq-notification-badge"
        aria-hidden="true"
      >
        <span class="faq-notification-ping"></span>
        <span class="faq-notification-dot"></span>
      </span>

      <span class="faq-tooltip">Preguntas</span>
    </button>

    <!-- Modal con Efecto Glassmorphism -->
    <Transition name="glass-fade">
      <div v-if="isOpen" class="faq-modal-overlay" @click.self="toggleModal">
        <div class="faq-modal-card">
          <!-- Cabecera del Modal -->
          <div class="faq-modal-header">
            <div>
              <span class="faq-eyebrow">Dudas comunes</span>
              <h2 class="faq-modal-title">Preguntas <em>Frecuentes</em></h2>
            </div>
            <button
              @click="toggleModal"
              class="faq-close-btn"
              aria-label="Cerrar FAQ"
            >
              <X :size="20" />
            </button>
          </div>

          <!-- Listado en Formato Acordeón -->
          <div class="faq-modal-body">
            <div
              v-for="(item, idx) in activeFaq"
              :key="idx"
              class="faq-item"
              :class="{ 'faq-item--expanded': activeIndex === idx }"
            >
              <!-- Pregunta -->
              <button
                @click="toggleAccordion(idx)"
                class="faq-question-btn"
                :aria-expanded="activeIndex === idx"
              >
                <span>{{ item.q }}</span>
                <ChevronDown class="faq-chevron" :size="18" />
              </button>

              <!-- Respuesta (Expandible) -->
              <div
                class="faq-answer-wrapper"
                :style="{ 'max-height': activeIndex === idx ? '300px' : '0px' }"
              >
                <div class="faq-answer-content">
                  <p>{{ item.a }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Pie del Modal -->
          <div class="faq-modal-footer">
            <p>¿Tienes otra duda? Escríbenos directamente por WhatsApp.</p>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* =========================================================
   BOTÓN GATILLO FLOTANTE (FAB)
   ========================================================= */
.career-faq-wrapper {
  position: relative;
  z-index: 9999;
}

.faq-trigger-btn {
  position: fixed;
  bottom: calc(
    6.5rem + env(safe-area-inset-bottom, 0px)
  ); /* arriba del botón principal */
  right: 1.75rem;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #0f3c61;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  box-shadow: 0 4px 16px rgba(15, 60, 97, 0.35);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    background-color 0.2s,
    box-shadow 0.2s;
  outline: none;
}

.faq-trigger-btn:hover {
  transform: scale(1.08) translateY(-2px);
  background-color: #1565c0;
  box-shadow: 0 6px 20px rgba(21, 101, 192, 0.45);
}

.faq-trigger-btn--active {
  background-color: #c62828 !important;
  box-shadow: 0 6px 20px rgba(198, 40, 40, 0.4) !important;
  border-color: rgba(255, 255, 255, 0.2);
}

/* Badge de Notificación */
.faq-notification-badge {
  position: absolute;
  top: 2px;
  right: 2px;
  display: flex;
  width: 12px;
  height: 12px;
}

.faq-notification-ping {
  position: absolute;
  display: inline-flex;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #f59e0b;
  opacity: 0.75;
  animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.faq-notification-dot {
  position: relative;
  display: inline-flex;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: #f59e0b;
}

@keyframes ping {
  75%,
  100% {
    transform: scale(2.5);
    opacity: 0;
  }
}

/* Tooltip */
.faq-tooltip {
  position: absolute;
  right: 70px;
  background: rgba(15, 60, 97, 0.95);
  color: #fff;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 700;
  white-space: nowrap;
  opacity: 0;
  transform: translateX(10px);
  transition:
    opacity 0.3s,
    transform 0.3s;
  pointer-events: none;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

.faq-trigger-btn:hover .faq-tooltip {
  opacity: 1;
  transform: translateX(0);
}

/* =========================================================
   MODAL GLASSMORPHISM
   ========================================================= */
.faq-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(
    0,
    0,
    0,
    0.45
  ); /* neutral dark overlay shadow, no blue tint */
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  z-index: 9998;
}

.faq-modal-card {
  width: 100%;
  max-width: 620px;
  background: rgba(255, 255, 255, 0.45); /* pure white glassmorphism */
  backdrop-filter: blur(30px) saturate(180%);
  -webkit-backdrop-filter: blur(30px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 24px;
  box-shadow:
    0 30px 60px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: modalScaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  color: #111827;
  position: relative;
}

@keyframes modalScaleIn {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Cabecera */
.faq-modal-header {
  padding: 2.5rem 2.5rem 1.75rem 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.faq-eyebrow {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #222428;
  margin-bottom: 0.4rem;
}

.faq-modal-title {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: 1.8rem;
  font-weight: 850;
  margin: 0;
  color: #111827;
  letter-spacing: -0.01em;
}

.faq-modal-title em {
  color: #1565c0;
  font-style: italic;
}

.faq-close-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.08);
  color: #1f2937;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background-color 0.2s,
    color 0.2s;
}

.faq-close-btn:hover {
  background: rgba(0, 0, 0, 0.08);
  color: #111827;
}

/* Cuerpo / Acordeón */
.faq-modal-body {
  padding: 2rem 2.5rem;
  max-height: 420px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

/* Scrollbar personalizado para el modal */
.faq-modal-body::-webkit-scrollbar {
  width: 6px;
}
.faq-modal-body::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.02);
}
.faq-modal-body::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
  border-radius: 3px;
}

.faq-item {
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  overflow: hidden;
  transition:
    background-color 0.25s,
    border-color 0.25s,
    box-shadow 0.25s;
  flex-shrink: 0;
}

.faq-item:hover {
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(0, 0, 0, 0.12);
}

.faq-item--expanded {
  background: #ffffff !important;
  border-color: #1565c0 !important;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
}

.faq-question-btn {
  width: 100%;
  background: transparent;
  border: none;
  color: #1f2937;
  padding: 1.4rem 1.75rem;
  text-align: left;
  font-size: 0.98rem;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  outline: none;
}

.faq-chevron {
  color: #4b5563;
  transition:
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    color 0.3s;
  flex-shrink: 0;
}

.faq-item--expanded .faq-chevron {
  transform: rotate(180deg);
  color: #1565c0;
}

/* Animación de apertura del acordeón */
.faq-answer-wrapper {
  overflow: hidden;
  transition: max-height 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.faq-answer-content {
  padding: 0.5rem 1.75rem 1.5rem 1.75rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.faq-answer-content p {
  margin: 0;
  font-size: 0.92rem;
  color: #4b5563;
  line-height: 1.65;
}

/* Pie de página */
.faq-modal-footer {
  padding: 1.75rem 2.5rem 2.5rem 2.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  text-align: center;
}

.faq-modal-footer p {
  margin: 0;
  font-size: 0.85rem;
  color: #222428;
  line-height: 1.45;
}

/* =========================================================
   ANIMACIONES DE TRANSICIÓN (FADE)
   ========================================================= */
.glass-fade-enter-active {
  transition:
    opacity 0.3s,
    backdrop-filter 0.3s;
}
.glass-fade-leave-active {
  transition:
    opacity 0.2s,
    backdrop-filter 0.2s;
}
.glass-fade-enter-from,
.glass-fade-leave-to {
  opacity: 0;
  backdrop-filter: blur(0px);
}

/* Responsividad para pantallas pequeñas */
@media (max-width: 640px) {
  .faq-trigger-btn {
    right: 1.25rem;
    bottom: calc(5.5rem + env(safe-area-inset-bottom, 0px));
    width: 48px;
    height: 48px;
  }
  .faq-modal-overlay {
    padding: 1rem;
  }
  .faq-modal-card {
    max-height: 90vh;
  }
  .faq-modal-header {
    padding: 2rem 1.75rem 1.25rem 1.75rem;
  }
  .faq-modal-body {
    padding: 1.25rem 1.75rem;
  }
  .faq-question-btn {
    padding: 1.2rem 1.35rem;
    font-size: 0.9rem;
  }
  .faq-answer-content {
    padding: 0.4rem 1.35rem 1.25rem 1.35rem;
  }
}
</style>
