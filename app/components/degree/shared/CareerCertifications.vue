<script setup lang="ts">
import { ref, computed, defineProps } from "vue";
import { Sparkles, Award, CheckCircle2, X } from "lucide-vue-next";

// Props dinámicos: recibe las certificaciones del JSON
const props = defineProps<{
  certificaciones: Array<{
    title: string;
    desc: string;
    modalDesc?: string;
    icon: string;
    badge: string;
    courses: string[];
    jobs: string[];
  }>;
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
</script>

<template>
  <section class="career-certifications-section">
    <div class="uninter-container">
      <div class="certs-header animate-header">
        <span class="eyebrow">Diferenciadores UNINTER</span>
        <h2 class="section-title">Certificados de <em>Egreso</em></h2>
        <p class="section-desc">
          Potencializa tus competencias con una especialización integrada que mejora tu perfil académico, elevando tu competitividad para destacar en el mercado laboral.
        </p>
      </div>

      <div class="certs-grid">
        <div
          v-for="(cert, index) in certificaciones"
          :key="index"
          class="cert-card interactive-card stagger-card"
        >
          <div class="card-glow-border"></div>
          
          <div class="cert-card-header">
            <span class="cert-badge">{{ cert.badge }}</span>
            <span class="cert-icon-visual">{{ cert.icon }}</span>
          </div>

          <div class="cert-info">
            <h3>{{ cert.title }}</h3>
            <p>{{ cert.desc }}</p>
          </div>

          <div class="cert-footer">
            <button class="cert-btn" @click="openModal(index)">
              Ver plan de certificación <Sparkles :size="16" class="btn-icon" />
            </button>
          </div>
        </div>
      </div>

      <div class="certs-disclaimer">
        <p>
          * Un certificado es un documento oficial con valor curricular que te entrega UNINTER al concluir las asignaturas requeridas, validando tus competencias profesionales ante la exigencia de la industria.
        </p>
      </div>
    </div>

    <!-- MODAL PREMIUM DETALLADO (GLASSMORPHISM OVERLAY) -->
    <Transition name="fade">
      <div v-if="activeCertIndex !== null && currentCert" class="modal-overlay" @click.self="closeModal">
        <div class="modal-container">
          <!-- Botón de Cerrar -->
          <button class="modal-close-btn" @click="closeModal">
            <X :size="22" />
          </button>

          <div class="modal-header">
            <span class="modal-cert-icon">{{ currentCert.icon }}</span>
            <div>
              <span class="modal-badge">{{ currentCert.badge }}</span>
              <h3>{{ currentCert.title }}</h3>
            </div>
          </div>

          <div class="modal-desc-wrap">
            <p v-for="(paragraph, pIdx) in (currentCert.modalDesc || currentCert.desc).split('\n')" :key="pIdx" class="modal-desc">
              {{ paragraph }}
            </p>
          </div>

          <div class="modal-content-grid">
            <!-- Bloque de Materias -->
            <div class="modal-section-block">
              <h4>Materias del Programa</h4>
              <ul class="modal-list">
                <li v-for="(course, idx) in currentCert.courses" :key="idx">
                  <CheckCircle2 :size="18" class="list-dot-icon color-blue" />
                  <span>{{ course }}</span>
                </li>
              </ul>
            </div>

            <!-- Bloque de Salidas Laborales -->
            <div class="modal-section-block">
              <h4>¿En qué podrás trabajar?</h4>
              <ul class="modal-list">
                <li v-for="(job, idx) in currentCert.jobs" :key="idx">
                  <Award :size="18" class="list-dot-icon color-orange" />
                  <span>{{ job }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="modal-actions">
            <button class="modal-confirm-btn" @click="closeModal">Entendido</button>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
/* =========================================================
   CONTENEDOR BASE
========================================================= */
.career-certifications-section {
  background-color: #ffffff;
  padding: 7rem 0;
  font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
}

.uninter-container {
  max-width: 1100px;
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
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #1565c0;
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
  color: #d84315;
  font-style: italic;
}

.section-desc {
  font-size: 1.05rem;
  color: #475569;
  max-width: 650px;
  margin: 0 auto;
  line-height: 1.6;
}

/* =========================================================
   GRID DE CERTIFICADOS (Estilo Credencial Premium)
========================================================= */
.certs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
  gap: 2.5rem;
  margin-bottom: 4.5rem;
}

.cert-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  padding: 3.5rem 3rem;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Línea decorativa superior naranja */
.card-glow-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #d84315, #ff7a59);
  transform: scaleX(0.15);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.cert-card:hover {
  background: #ffffff;
  border-color: #cbd5e1;
  transform: translateY(-8px);
  box-shadow: 0 30px 50px -15px rgba(9, 29, 48, 0.12);
}

.cert-card:hover .card-glow-border {
  transform: scaleX(1);
}

.cert-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.cert-badge {
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #d84315;
  background: rgba(216, 67, 21, 0.08);
  padding: 0.4rem 1rem;
  border-radius: 999px;
  letter-spacing: 0.05em;
}

.cert-icon-visual {
  width: 54px;
  height: 54px;
  background: #ffffff;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
  transition: transform 0.4s ease;
}

.cert-card:hover .cert-icon-visual {
  transform: scale(1.1) rotate(3deg);
  box-shadow: 0 8px 15px rgba(15, 60, 97, 0.08);
}

.cert-info h3 {
  font-size: 1.45rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 1.2rem 0;
  letter-spacing: -0.01em;
}

.cert-info p {
  font-size: 0.98rem;
  color: #475569;
  line-height: 1.65;
  margin-bottom: 2.5rem;
  min-height: 80px;
}

/* Botón interactivo */
.cert-btn {
  width: 100%;
  background: #0f3c61;
  color: #ffffff;
  border: none;
  padding: 1.1rem;
  border-radius: 14px;
  font-weight: 700;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 5px 15px rgba(15, 60, 97, 0.15);
}

.cert-btn:hover {
  background: #1565c0;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(21, 101, 192, 0.25);
}

.cert-btn:hover .btn-icon {
  transform: rotate(15deg) scale(1.15);
  color: #fde68a;
}

.btn-icon {
  transition: transform 0.3s ease, color 0.3s ease;
}

/* Disclaimer inferior */
.certs-disclaimer {
  text-align: center;
  font-size: 0.82rem;
  color: #94a3b8;
  max-width: 800px;
  margin: 0 auto;
  border-top: 1px solid #e2e8f0;
  padding-top: 2.5rem;
  line-height: 1.5;
}

/* =========================================================
   MODAL PREMIUM DETALLADO (Estilo Spatial UI)
========================================================= */
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
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  box-shadow: 0 50px 100px -20px rgba(9, 29, 48, 0.5);
  max-width: 680px;
  width: 100%;
  padding: 3.5rem;
  position: relative;
  overflow: hidden;
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
  width: 44px;
  height: 44px;
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
  transform: rotate(90deg);
}

.modal-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #f1f5f9;
}

.modal-cert-icon {
  font-size: 2.8rem;
  width: 72px;
  height: 72px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-badge {
  font-size: 0.75rem;
  font-weight: 800;
  color: #1565c0;
  background: rgba(21, 101, 192, 0.08);
  padding: 0.35rem 0.9rem;
  border-radius: 99px;
  letter-spacing: 0.05em;
  display: inline-block;
  margin-bottom: 0.5rem;
}

.modal-header h3 {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: 1.75rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0;
}

.modal-desc {
  font-size: 1.05rem;
  color: #475569;
  line-height: 1.65;
  margin-bottom: 2.5rem;
}

.modal-content-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  margin-bottom: 3rem;
}

.modal-section-block h4 {
  font-size: 0.9rem;
  font-weight: 800;
  color: #0f3c61;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 1.25rem 0;
  border-left: 3px solid #d84315;
  padding-left: 8px;
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
  font-size: 0.92rem;
  color: #334155;
  font-weight: 500;
  line-height: 1.4;
}

.list-dot-icon {
  flex-shrink: 0;
  margin-top: 1px;
}
.list-dot-icon.color-blue { color: #1565c0; }
.list-dot-icon.color-orange { color: #d84315; }

.modal-actions {
  display: flex;
  justify-content: flex-end;
}

.modal-confirm-btn {
  background: #d84315;
  color: #ffffff;
  border: none;
  padding: 0.9rem 2.2rem;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.2s ease;
  box-shadow: 0 5px 15px rgba(216, 67, 21, 0.25);
}
.modal-confirm-btn:hover {
  background: #ea580c;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(216, 67, 21, 0.35);
}

/* Transiciones de Modal */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active .modal-container {
  animation: modalScaleUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.fade-leave-active .modal-container {
  animation: modalScaleDown 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes modalScaleUp {
  from {
    transform: scale(0.92) translateY(20px);
  }
  to {
    transform: scale(1) translateY(0);
  }
}
@keyframes modalScaleDown {
  from {
    transform: scale(1) translateY(0);
  }
  to {
    transform: scale(0.92) translateY(20px);
  }
}

/* =========================================================
   RESPONSIVE
========================================================= */
@media (max-width: 768px) {
  .certs-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .cert-card {
    padding: 2.5rem 2rem;
  }
  .modal-container {
    padding: 2.5rem 1.5rem;
  }
  .modal-content-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
