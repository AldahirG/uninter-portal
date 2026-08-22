<script setup lang="ts">
import { ref, computed, defineProps } from "vue";
import {
  Sparkles,
  X,
  CheckCircle2,
  Star,
  Award,
  GraduationCap,
  ScrollText,
  Rocket,
  Briefcase,
  Camera,
  Mic,
  PenTool,
  MessageCircle,
  Scale,
  BookOpen,
  Landmark,
  Compass,
  Ruler,
  Home,
  Building,
  Cpu,
  Wrench,
  Settings,
  Palette,
  Pencil,
  Image as ImageIcon,
  FlaskConical,
  Calculator,
  Lightbulb,
  PieChart,
} from "lucide-vue-next";

// Props dinámicos: recibe las powerSkills del JSON
const props = defineProps<{
  certificaciones: Array<{
    title: string;
    description: string;
    topJobs: string[];
  }>;
  careerSlug?: string;
}>();

// Estado del Modal
const activeCertIndex = ref<number | null>(null);

const openModal = (index: number) => {
  activeCertIndex.value = index;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  activeCertIndex.value = null;
  document.body.style.overflow = "";
};

const currentCert = computed(() => {
  if (activeCertIndex.value === null || !props.certificaciones) return null;
  return props.certificaciones[activeCertIndex.value];
});

const careerIcons = computed(() => {
  const slug = props.careerSlug || "";
  if (slug.includes("comunicacion"))
    return [Camera, Mic, PenTool, MessageCircle];
  if (slug.includes("derecho") || slug.includes("leyes"))
    return [Scale, BookOpen, Landmark, ScrollText];
  if (slug.includes("arquitectura")) return [Compass, Ruler, Home, Building];
  if (slug.includes("mecatronica") || slug.includes("ingenieria"))
    return [Cpu, Wrench, Settings, Rocket];
  if (slug.includes("diseno")) return [Palette, Pencil, ImageIcon, Lightbulb];

  // Default fallback (Ciencias, mate, general)
  return [FlaskConical, Calculator, PieChart, GraduationCap];
});

const gridClass = computed(() => {
  const len = props.certificaciones?.length || 0;
  if (len === 1) return "grid-1";
  if (len === 2) return "grid-2";
  if (len === 3) return "grid-3";
  if (len === 4) return "grid-4";
  return "grid-more";
});
</script>

<template>
  <section
    class="career-certifications-section"
    v-if="certificaciones && certificaciones.length"
  >
    <div class="uninter-container">
      <div class="certs-header animate-header">
        <span class="eyebrow">POWER SKILLS & CERTIFICACIONES</span>
        <h2 class="section-title">Certificados de <em>Alto Valor</em></h2>
        <p class="section-desc">
          Especialízate desde la licenciatura y adquiere las habilidades
          precisas que los reclutadores corporativos buscan para los puestos de
          mayor liderazgo.
        </p>
      </div>

      <div class="certs-grid" :class="gridClass">
        <div
          v-for="(cert, index) in certificaciones"
          :key="index"
          class="cert-card interactive-card stagger-card"
        >
          <div class="card-glow-border"></div>

          <!-- Elementos flotantes decorativos en hover (Outline & detrás de la card) -->
          <span class="float-shape float-icon-1"
            ><component :is="careerIcons[0]" :size="32" stroke-width="1.5"
          /></span>
          <span class="float-shape float-icon-2"
            ><component :is="careerIcons[1]" :size="32" stroke-width="1.5"
          /></span>
          <span class="float-shape float-icon-3"
            ><component :is="careerIcons[2]" :size="32" stroke-width="1.5"
          /></span>
          <span class="float-shape float-icon-4"
            ><component :is="careerIcons[3]" :size="32" stroke-width="1.5"
          /></span>
          <!-- Formas geométricas adicionales -->
          <span class="float-shape geom-shape geom-circle-1"></span>
          <span class="float-shape geom-shape geom-circle-2"></span>
          <span class="float-shape geom-shape geom-circle-3"></span>
          <span class="float-shape geom-shape geom-square-1"></span>
          <span class="float-shape geom-shape geom-square-2"></span>
          <span class="float-shape geom-shape geom-triangle-1"></span>

          <div class="cert-card-content">
            <div class="cert-card-header">
              <span class="cert-badge">CERTIFICACIÓN</span>
              <span class="cert-icon-visual">
                <Star :size="24" fill="#fbbf24" color="#000" stroke-width="2" />
              </span>
            </div>

            <div class="cert-info">
              <h3>{{ cert.title }}</h3>
              <p>{{ cert.description }}</p>
            </div>

            <div class="cert-footer">
              <button class="cert-btn" @click="openModal(index)">
                Ver posiciones Top <Sparkles :size="16" class="btn-icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL PREMIUM DETALLADO (GLASSMORPHISM OVERLAY) -->
    <Transition name="fade">
      <div
        v-if="activeCertIndex !== null && currentCert"
        class="modal-overlay"
        @click.self="closeModal"
      >
        <div class="modal-container">
          <!-- Botón de Cerrar -->
          <button class="modal-close-btn" @click="closeModal">
            <X :size="22" />
          </button>

          <div class="modal-header">
            <span class="modal-cert-icon">
              <Star :size="36" fill="#fbbf24" color="#000" stroke-width="2" />
            </span>
            <div>
              <span class="modal-badge">Power Skill</span>
              <h3>{{ currentCert.title }}</h3>
            </div>
          </div>

          <div class="modal-desc-wrap">
            <p class="modal-desc">
              {{ currentCert.description }}
            </p>
          </div>

          <div class="modal-content-grid">
            <!-- Bloque de Salidas Laborales -->
            <div class="modal-section-block">
              <h4>
                <Award :size="18" class="heading-icon" />
                TOP JOBS (PUESTOS EJECUTIVOS)
              </h4>
              <ul class="modal-list">
                <li v-for="(job, idx) in currentCert.topJobs" :key="idx">
                  <CheckCircle2 :size="18" class="list-dot-icon color-blue" />
                  <span>{{ job }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="modal-actions">
            <button class="modal-confirm-btn" @click="closeModal">
              Entendido
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
/* =========================================================
   CONTENEDOR BASE
======================================================== */
.career-certifications-section {
  background-color: #ffffff;
  padding: 7rem 0;
  font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
}

.uninter-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Header */
.certs-header {
  text-align: center;
  margin-bottom: 4.5rem;
}

.eyebrow {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #1976d2;
  margin-bottom: 0.75rem;
  background: #f0f6fc;
  padding: 0.35rem 0.9rem;
  border-radius: 20px;
}

.section-title {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: clamp(2.2rem, 3.5vw, 3rem);
  color: #0f3c61;
  font-weight: 800;
  margin: 0 0 1rem 0;
}
.section-title em {
  color: #1976d2; /* Blue instead of orange */
  font-style: normal;
}

.section-desc {
  font-size: 1.05rem;
  color: #475569;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

/* =========================================================
   GRID DE CERTIFICADOS DINÁMICO
======================================================== */
.certs-grid {
  display: grid;
  gap: 2.5rem;
  justify-content: center;
  margin-bottom: 4.5rem;
}

.certs-grid.grid-1 {
  grid-template-columns: minmax(320px, 500px);
}
.certs-grid.grid-2 {
  grid-template-columns: repeat(2, minmax(320px, 1fr));
}
.certs-grid.grid-3 {
  grid-template-columns: repeat(3, minmax(320px, 1fr));
}
.certs-grid.grid-4 {
  grid-template-columns: repeat(2, minmax(320px, 1fr));
}
.certs-grid.grid-more {
  grid-template-columns: repeat(3, minmax(320px, 1fr));
}

/* =========================================================
   TARJETAS
======================================================== */
.cert-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  height: 100%;
  position: relative;
}

.cert-card-content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-glow-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
  background: linear-gradient(90deg, #1565c0 0%, #ff7a59 100%);
  transform: scaleX(0.15);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  z-index: 11;
}

.cert-card:hover .card-glow-border {
  transform: scaleX(1);
}

/* =========================================================
   ELEMENTOS FLOTANTES
======================================================== */
.float-shape {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: -1; /* Para que aparezcan por detrás de la tarjeta */
  color: #cbd5e1; /* Gris claro para el outline */
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.float-icon-1 {
  top: 10px;
  right: 25%;
  transform: translateY(20px) scale(0.3) rotate(-30deg);
}

.float-icon-2 {
  top: 30%;
  right: 10px;
  transform: translateX(-20px) scale(0.3) rotate(20deg);
}

.float-icon-3 {
  bottom: 10px;
  right: 15%;
  transform: translateY(-20px) scale(0.3) rotate(-15deg);
}

.float-icon-4 {
  top: 45%;
  left: 10px;
  transform: translateX(20px) scale(0.3) rotate(-25deg);
}

/* Geometric shapes */
.geom-shape {
  border: 2px solid #e2e8f0;
}
.geom-circle-1 {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  top: 15%;
  right: 10px;
  transform: scale(0);
}
.geom-circle-2 {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #e2e8f0;
  border: none;
  bottom: 15%;
  left: 10px;
  transform: scale(0);
}
.geom-circle-3 {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #cbd5e1;
  border: none;
  top: 40%;
  right: 0;
  transform: scale(0);
}
.geom-square-1 {
  width: 14px;
  height: 14px;
  border-radius: 3px;
  top: 10px;
  left: 20%;
  transform: scale(0) rotate(45deg);
}
.geom-square-2 {
  width: 10px;
  height: 10px;
  border-radius: 2px;
  bottom: 25%;
  right: 20px;
  transform: scale(0) rotate(15deg);
}
.geom-triangle-1 {
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 10px solid #e2e8f0;
  border-top: none;
  background: transparent;
  border-radius: 0;
  bottom: 0px;
  left: 25%;
  transform: scale(0) rotate(-20deg);
}

/* Hover effects */
.cert-card:hover .float-icon-1 {
  opacity: 0.6;
  transform: translateY(-35px) scale(1) rotate(10deg);
  transition-delay: 0.05s;
  color: #94a3b8;
}

.cert-card:hover .float-icon-2 {
  opacity: 0.6;
  transform: translateX(35px) scale(1) rotate(-10deg);
  transition-delay: 0.1s;
  color: #94a3b8;
}

.cert-card:hover .float-icon-3 {
  opacity: 0.6;
  transform: translateY(35px) scale(1) rotate(15deg);
  transition-delay: 0.15s;
  color: #94a3b8;
}

.cert-card:hover .float-icon-4 {
  opacity: 0.6;
  transform: translateX(-35px) scale(1) rotate(20deg);
  transition-delay: 0.2s;
  color: #94a3b8;
}

/* Geometric hover */
.cert-card:hover .geom-circle-1 {
  opacity: 1;
  transform: translate(25px, -20px) scale(1);
  transition-delay: 0.1s;
}
.cert-card:hover .geom-circle-2 {
  opacity: 1;
  transform: translate(-25px, 20px) scale(1);
  transition-delay: 0.15s;
}
.cert-card:hover .geom-circle-3 {
  opacity: 1;
  transform: translate(20px, 0px) scale(1);
  transition-delay: 0.05s;
}
.cert-card:hover .geom-square-1 {
  opacity: 1;
  transform: translate(-20px, -25px) scale(1) rotate(60deg);
  transition-delay: 0.05s;
}
.cert-card:hover .geom-square-2 {
  opacity: 1;
  transform: translate(15px, 25px) scale(1) rotate(45deg);
  transition-delay: 0.12s;
}
.cert-card:hover .geom-triangle-1 {
  opacity: 1;
  transform: translate(-10px, 25px) scale(1) rotate(-60deg);
  transition-delay: 0.18s;
}

.cert-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
}

.cert-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.cert-badge {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #1565c0;
  background: rgba(21, 101, 192, 0.1);
  padding: 0.4rem 1rem;
  border-radius: 999px;
  letter-spacing: 0.05em;
}

.cert-icon-visual {
  width: 48px;
  height: 48px;
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
}

.cert-info {
  flex-grow: 1;
}

.cert-info h3 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #0f3c61;
  margin: 0 0 1.2rem 0;
  line-height: 1.3;
}

.cert-info p {
  font-size: 0.98rem;
  color: #475569;
  line-height: 1.65;
  margin-bottom: 2.5rem;
}

/* Botón interactivo */
.cert-btn {
  width: 100%;
  background: #0f3c61;
  color: #ffffff;
  border: none;
  padding: 1.1rem;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
}

.cert-card:hover .cert-btn {
  background: #0099cc; /* Claro / Cyan al hacer hover en la card */
}

.cert-btn:hover {
  filter: brightness(1.1);
  transform: translateY(-2px);
}

/* =========================================================
   MODAL
======================================================== */
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(9, 29, 48, 0.65);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.modal-container {
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 50px 100px -20px rgba(9, 29, 48, 0.5);
  max-width: 650px;
  width: 100%;
  padding: 3rem;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-close-btn {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: #f1f5f9;
  border: none;
  color: #64748b;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}
.modal-close-btn:hover {
  background: #e2e8f0;
  color: #0f3c61;
}

.modal-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #f1f5f9;
}

.modal-cert-icon {
  width: 64px;
  height: 64px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
}

.modal-badge {
  font-size: 0.75rem;
  font-weight: 700;
  color: #1976d2;
  background: rgba(25, 118, 210, 0.1);
  padding: 0.3rem 0.8rem;
  border-radius: 99px;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.modal-header h3 {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: 1.5rem;
  font-weight: 700;
  color: #0f3c61;
  margin: 0;
}

.modal-desc {
  font-size: 1.05rem;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.modal-section-block h4 {
  font-size: 0.85rem;
  font-weight: 700;
  color: #1565c0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.modal-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.modal-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.95rem;
  color: #334155;
  line-height: 1.4;
}

.list-dot-icon {
  flex-shrink: 0;
  margin-top: 2px;
}
.list-dot-icon.color-blue {
  color: #1565c0;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;
}

.modal-confirm-btn {
  background: #0f3c61;
  color: #ffffff;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.2s ease;
}
.modal-confirm-btn:hover {
  background: #1565c0;
}

/* Transiciones de Modal */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* =========================================================
   RESPONSIVE
======================================================== */
@media (max-width: 1024px) {
  .certs-grid.grid-3,
  .certs-grid.grid-more {
    grid-template-columns: repeat(2, minmax(320px, 1fr));
  }
}
@media (max-width: 768px) {
  .certs-grid.grid-2,
  .certs-grid.grid-3,
  .certs-grid.grid-4,
  .certs-grid.grid-more {
    grid-template-columns: 1fr;
  }
  .cert-card {
    padding: 2.5rem 1.5rem;
  }
  .modal-container {
    padding: 2rem 1.5rem;
  }
}
</style>
