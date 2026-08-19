<script setup lang="ts">
import { ref } from "vue";
import {
  Radio,
  Tv,
  Video,
  Camera,
  Briefcase,
  ArrowRight,
  Sparkles,
  Check,
  AlertCircle,
} from "lucide-vue-next";

// Datos de los Media Labs actualizados
const mediaLabs = [
  {
    title: "Cabina de Radio Profesional",
    desc: "Transmite en vivo, graba podcasts y domina la locución en una cabina acústicamente acondicionada y equipada con consolas digitales de última generación.",
    iconName: "Radio",
    tag: "Streaming & FM",
    features: [
      "Consolas de audio digital",
      "Microfonía Shure Pro",
      "Software de automatización",
    ],
  },
  {
    title: "Estudio de Televisión",
    desc: "Aprende dirección de cámaras, producción en vivo, iluminación LED y conducción en un set con ciclorama verde (Chroma Key) profesional.",
    iconName: "Tv",
    tag: "Producción 4K",
    features: [
      "Cámaras profesionales 4K",
      "Set de iluminación DMX",
      "Switchers de video Blackmagic",
    ],
  },
  {
    title: "Isla de Edición Mac",
    desc: "Edita y postproduce tus proyectos cinematográficos y documentales con el software de Adobe y DaVinci Resolve en estaciones Apple iMac de alto rendimiento.",
    iconName: "Video",
    tag: "Postproducción Pro",
    features: [
      "Adobe Creative Cloud",
      "DaVinci Resolve Studio",
      "Procesamiento gráfico veloz",
    ],
  },
  {
    title: "Set de Fotografía Editorial",
    desc: "Domina el manejo de la luz artificial y natural, encuadres, composición y dirección de arte con flashes y difusores profesionales.",
    iconName: "Camera",
    tag: "Estudio Fotográfico",
    features: [
      "Flashes profesionales",
      "Cicloramas de colores",
      "Modificadores de luz",
    ],
  },
  {
    title: "Agencia de Medios In-House",
    desc: "Desarrolla campañas publicitarias reales, estrategias de relaciones públicas y branding para clientes del sector empresarial y social.",
    iconName: "Briefcase",
    tag: "Práctica Real",
    features: [
      "Clientes reales",
      "Estrategia digital",
      "Gestión de reputación",
    ],
  },
];

// Mapeo seguro de íconos para render dinámico en Vue 3
const iconComponents: Record<string, any> = {
  Radio,
  Tv,
  Video,
  Camera,
  Briefcase,
};

// Estados del banner CTA interactivo
const email = ref("");
const isSubmitted = ref(false);
const spotsLeft = ref(7);

const submitForm = () => {
  if (email.value.trim()) {
    isSubmitted.value = true;
    // Simula que se ocupa un lugar para dinamismo visual
    setTimeout(() => {
      if (spotsLeft.value > 1) {
        spotsLeft.value -= 1;
      }
    }, 1500);
  }
};
</script>

<template>
  <section class="career-research-section" id="media-labs">
    <div class="uninter-container">
      <!-- Encabezado de la Sección -->
      <div class="research-header animate-header">
        <span class="eyebrow">Experiencia Práctica</span>
        <h2 class="section-title">Media Labs & <em>Proyectos</em></h2>
        <p class="section-desc">
          No te limites a la teoría. En UNINTER aprendes haciendo desde el
          primer día en instalaciones equipadas con la tecnología que demanda la
          industria de la comunicación.
        </p>
      </div>

      <!-- Bento Grid de Laboratorios -->
      <div class="labs-grid">
        <div
          v-for="(lab, index) in mediaLabs"
          :key="index"
          :class="['lab-card', 'interactive-card', `index-${index}`]"
        >
          <!-- Efecto de gradiente de borde en hover -->
          <div class="card-gradient-border"></div>

          <div class="lab-card-header">
            <div class="lab-icon-wrap subtle-blue">
              <component
                :is="iconComponents[lab.iconName]"
                :size="24"
                stroke-width="2"
              />
            </div>
            <span class="lab-tag">{{ lab.tag }}</span>
          </div>

          <div class="lab-card-body">
            <h3>{{ lab.title }}</h3>
            <p>{{ lab.desc }}</p>
          </div>

          <div class="lab-card-footer">
            <span class="features-title">Equipamiento destacado:</span>
            <ul class="features-list">
              <li v-for="(feat, fIdx) in lab.features" :key="fIdx">
                <Check :size="14" class="feat-check" />
                <span>{{ feat }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- BANNER INMERSIVO DE LLAMADO A LA ACCIÓN (CTA) -->
      <div class="admission-cta-card animate-cta">
        <div class="cta-glow-bg"></div>

        <div class="cta-layout">
          <!-- Columna Izquierda: Información y Urgencia -->
          <div class="cta-info-side">
            <div class="cta-eyebrow">
              <Sparkles :size="16" class="sparkle-icon" />
              <span>Admisiones Abiertas</span>
            </div>
            <h3 class="cta-title">
              Sé parte de la generación que define el futuro de los medios
            </h3>

            <!-- Indicador de Lugares con Pulso Dinámico -->
            <div class="spots-indicator">
              <span class="pulse-dot"></span>
              <span class="spots-text">
                Cupo limitado: Quedan
                <strong>{{ spotsLeft }} lugares</strong> para el próximo periodo
              </span>
            </div>
          </div>

          <!-- Columna Derecha: Formulario Simplificado -->
          <div class="cta-form-side">
            <Transition name="fade-slide" mode="out-in">
              <div v-if="!isSubmitted" class="form-container">
                <p class="form-instruction">
                  Ingresa tu correo para recibir información personalizada e
                  iniciar tu registro:
                </p>
                <form @submit.prevent="submitForm" class="sleek-form">
                  <div class="input-wrap">
                    <input
                      type="email"
                      v-model="email"
                      placeholder="correo@ejemplo.com"
                      required
                      class="glass-input"
                    />
                  </div>
                  <button type="submit" class="btn-cta-submit">
                    Comenzar Admisión
                    <ArrowRight :size="18" class="submit-arrow" />
                  </button>
                </form>
              </div>

              <!-- Estado de Éxito al Enviar Formulario -->
              <div v-else class="success-container">
                <div class="success-icon-wrap">
                  <Check :size="32" class="success-check-icon" />
                </div>
                <h4 class="success-title">¡Registro Iniciado!</h4>
                <p class="success-text">
                  Te hemos enviado el folleto digital y los pasos a seguir. Un
                  asesor de admisiones te contactará en breve.
                </p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* =========================================================
   CONTENEDOR BASE
   ========================================================= */
.career-research-section {
  background-color: #f8fafc;
  padding: 7rem 0;
  font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
  overflow: hidden;
}

.uninter-container {
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* =========================================================
   ANIMACIONES DE ENTRADA
   ========================================================= */
@keyframes fadeUpIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-header {
  animation: fadeUpIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-cta {
  animation: fadeUpIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
  opacity: 0;
}

/* Encabezado */
.research-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 5rem auto;
}

.eyebrow {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #1565c0;
  margin-bottom: 0.75rem;
  background: #e0f2fe;
  padding: 0.35rem 0.9rem;
  border-radius: 20px;
}

.section-title {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  color: #0f3c61;
  font-weight: 800;
  margin: 0 0 1rem 0;
}
.section-title em {
  color: #d84315;
  font-style: italic;
}

.section-desc {
  font-size: 1.05rem;
  color: #475569;
  line-height: 1.6;
}

/* =========================================================
   BENTO GRID DE LABORATIOS (Media Labs)
   ========================================================= */
.labs-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  margin-bottom: 5rem;
}

.lab-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Asignaciones de Bento Grid en pantallas grandes */
.lab-card.index-0 {
  grid-column: span 7;
}
.lab-card.index-1 {
  grid-column: span 5;
}
.lab-card.index-2,
.lab-card.index-3,
.lab-card.index-4 {
  grid-column: span 4;
}

/* Efecto de borde degradado animado */
.card-gradient-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #1565c0, #d84315);
  transform: scaleX(0.12);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.lab-card:hover {
  background: #ffffff;
  border-color: #cbd5e1;
  transform: translateY(-8px);
  box-shadow: 0 30px 60px -15px rgba(9, 29, 48, 0.08);
}

.lab-card:hover .card-gradient-border {
  transform: scaleX(1);
}

.lab-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.lab-icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
}

.lab-icon-wrap.subtle-blue {
  background-color: #f0f6fc;
  color: #1565c0;
}

.lab-card:hover .lab-icon-wrap.subtle-blue {
  background-color: #1565c0;
  color: #ffffff;
  transform: scale(1.1) rotate(-5deg);
}

.lab-tag {
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #64748b;
  background: #f1f5f9;
  padding: 0.35rem 0.8rem;
  border-radius: 99px;
  letter-spacing: 0.05em;
  transition: all 0.3s;
}

.lab-card:hover .lab-tag {
  color: #d84315;
  background: rgba(216, 67, 21, 0.08);
}

.lab-card-body h3 {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: 1.5rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 1rem 0;
  letter-spacing: -0.01em;
}

.lab-card-body p {
  font-size: 0.98rem;
  color: #475569;
  line-height: 1.6;
  margin: 0 0 2rem 0;
}

.lab-card-footer {
  margin-top: auto;
  border-top: 1px solid #f1f5f9;
  padding-top: 1.5rem;
}

.features-title {
  display: block;
  font-size: 0.8rem;
  font-weight: 800;
  color: #0f3c61;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.features-list li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.88rem;
  color: #475569;
  font-weight: 500;
}

.feat-check {
  color: #d84315;
  flex-shrink: 0;
}

/* =========================================================
   BANNER DE ADMISIÓN PREMIUM (INMERSIVO)
   ========================================================= */
.admission-cta-card {
  position: relative;
  background: linear-gradient(135deg, #0c2b46 0%, #0f3c61 100%);
  border-radius: 28px;
  padding: 4.5rem;
  color: #ffffff;
  box-shadow: 0 35px 70px -15px rgba(9, 29, 48, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
}

.cta-glow-bg {
  position: absolute;
  top: 50%;
  right: -100px;
  transform: translateY(-50%);
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(216, 67, 21, 0.25) 0%,
    transparent 70%
  );
  border-radius: 50%;
  pointer-events: none;
  z-index: 1;
}

.cta-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

.cta-info-side {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.cta-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #fde68a;
  background: rgba(253, 230, 138, 0.1);
  padding: 0.4rem 1rem;
  border-radius: 50px;
  border: 1px solid rgba(253, 230, 138, 0.15);
  margin-bottom: 1.5rem;
}

.sparkle-icon {
  color: #fde68a;
}

.cta-title {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 800;
  line-height: 1.2;
  margin: 0 0 2rem 0;
  letter-spacing: -0.02em;
}

/* Indicador de Lugares con Efecto de Pulso */
.spots-indicator {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: rgba(0, 0, 0, 0.2);
  padding: 0.75rem 1.25rem;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.pulse-dot {
  width: 10px;
  height: 10px;
  background-color: #ef4444;
  border-radius: 50%;
  display: inline-block;
  position: relative;
}

.pulse-dot::after {
  content: "";
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 2px solid #ef4444;
  animation: pulseGlow 1.8s infinite ease-in-out;
}

@keyframes pulseGlow {
  0% {
    transform: scale(0.9);
    opacity: 1;
  }
  100% {
    transform: scale(1.8);
    opacity: 0;
  }
}

.spots-text {
  font-size: 0.9rem;
  color: #e2e8f0;
}
.spots-text strong {
  color: #ff7a59;
}

/* Columna de Formulario */
.cta-form-side {
  width: 100%;
}

.form-container {
  display: flex;
  flex-direction: column;
}

.form-instruction {
  font-size: 0.95rem;
  color: #cbd5e1;
  line-height: 1.5;
  margin: 0 0 1.5rem 0;
}

.sleek-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input-wrap {
  width: 100%;
}

.glass-input {
  width: 100%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 1.1rem 1.5rem;
  border-radius: 14px;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s;
  box-sizing: border-box;
}

.glass-input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.12);
  border-color: #ff7a59;
  box-shadow: 0 0 0 3px rgba(216, 67, 21, 0.2);
}

.glass-input::placeholder {
  color: #94a3b8;
}

/* Botón de Envíos en Formulario */
.btn-cta-submit {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #d84315;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  padding: 1.1rem;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(216, 67, 21, 0.35);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
}

.btn-cta-submit::before {
  content: "";
  position: absolute;
  top: 0;
  left: -150%;
  width: 80%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  transform: skewX(-25deg);
}

.btn-cta-submit:hover {
  background-color: #e64a19;
  transform: translateY(-2px);
  box-shadow: 0 15px 30px rgba(216, 67, 21, 0.5);
}

.btn-cta-submit:hover::before {
  left: 150%;
  transition: left 0.8s ease-in-out;
}

.btn-cta-submit:hover .submit-arrow {
  transform: translateX(4px);
}

.submit-arrow {
  transition: transform 0.3s ease;
}

/* Contenedor de Éxito */
.success-container {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  text-align: center;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.success-icon-wrap {
  width: 64px;
  height: 64px;
  background: rgba(16, 185, 129, 0.15);
  border: 1px solid rgba(16, 185, 129, 0.3);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem auto;
  color: #10b981;
}

.success-check-icon {
  animation: scaleBounce 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

@keyframes scaleBounce {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}

.success-title {
  font-size: 1.4rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 0.75rem 0;
}

.success-text {
  font-size: 0.95rem;
  color: #cbd5e1;
  line-height: 1.6;
  margin: 0;
}

/* Transiciones */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(15px);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}

/* =========================================================
   RESPONSIVE
   ========================================================= */
@media (max-width: 1024px) {
  .labs-grid {
    gap: 1.5rem;
  }
  .lab-card.index-0,
  .lab-card.index-1 {
    grid-column: span 12;
  }
  .lab-card.index-2,
  .lab-card.index-3,
  .lab-card.index-4 {
    grid-column: span 6;
  }
  .cta-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .career-research-section {
    padding: 5rem 0;
  }
  .admission-cta-card {
    padding: 3rem 2rem;
    border-radius: 24px;
  }
  .lab-card {
    padding: 2.5rem 1.75rem;
    border-radius: 20px;
  }
}

@media (max-width: 640px) {
  .lab-card.index-2,
  .lab-card.index-3,
  .lab-card.index-4 {
    grid-column: span 12;
  }
  .features-list {
    gap: 0.75rem;
  }
  .lab-card-body h3 {
    font-size: 1.35rem;
  }
}
</style>
