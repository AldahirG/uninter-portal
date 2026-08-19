<script setup lang="ts">
import { ref } from "vue";
import {
  User,
  Mail,
  Phone,
  Calculator,
  CheckCircle2,
  RefreshCcw,
  Sparkles,
  GraduationCap,
  BookOpen,
  Briefcase,
  Award,
  ArrowRight,
  ShieldCheck,
} from "lucide-vue-next";

// Estados de la calculadora
const step = ref(1);
const isCalculating = ref(false);

const form = ref({
  nivel: "Licenciatura", // Por defecto para evitar clicks extra
  nombre: "",
  apellidos: "",
  correo: "",
  telefono: "",
  avisoPrivacidad: false,
});

// Opciones visuales para reemplazar el viejo <select>
const niveles = [
  { id: "Secundaria Bilingüe", icon: BookOpen, label: "Secundaria" },
  { id: "Bachillerato", icon: GraduationCap, label: "Bachillerato" },
  { id: "Licenciatura", icon: Briefcase, label: "Licenciatura" },
  { id: "Posgrado", icon: Award, label: "Posgrado" },
];

const simularBeca = () => {
  // Efecto de "procesamiento de datos" para dar realismo a la herramienta
  isCalculating.value = true;
  setTimeout(() => {
    isCalculating.value = false;
    step.value = 2;
  }, 1800);
};

const reiniciar = () => {
  form.value = {
    nivel: "Licenciatura",
    nombre: "",
    apellidos: "",
    correo: "",
    telefono: "",
    avisoPrivacidad: false,
  };
  step.value = 1;
};
</script>

<template>
  <section class="calc-premium-section">
    <div class="calc-container">
      <!-- CONTENEDOR PRINCIPAL DIVIDIDO -->
      <div class="calc-wrapper">
        <!-- PANEL IZQUIERDO: PROPUESTA DE VALOR -->
        <div class="calc-info-panel">
          <div class="info-content">
            <div class="badge-trust">
              <ShieldCheck :size="16" class="text-gold" /> Herramienta Oficial
            </div>
            <h2 class="info-title">
              Descubre cuánto puedes ahorrar en tu <em>futuro.</em>
            </h2>
            <p class="info-desc">
              Utiliza nuestra calculadora inteligente y obtén un estimado
              inmediato de tu porcentaje de beca.
              <strong>Sin costo, sin compromiso y en menos de 1 minuto.</strong>
            </p>

            <ul class="info-benefits">
              <li>
                <CheckCircle2 :size="20" class="benefit-icon" /> Resultados
                inmediatos
              </li>
              <li>
                <CheckCircle2 :size="20" class="benefit-icon" /> Becas por
                mérito académico y deportivo
              </li>
              <li>
                <CheckCircle2 :size="20" class="benefit-icon" /> Asesoría
                personalizada tras tu cálculo
              </li>
            </ul>
          </div>

          <!-- Elemento decorativo de fondo -->
          <div class="calc-orb"></div>
        </div>

        <!-- PANEL DERECHO: LA CALCULADORA -->
        <div class="calc-tool-panel">
          <Transition name="slide-fade" mode="out-in">
            <!-- PASO 1: FORMULARIO INTERACTIVO -->
            <div v-if="step === 1" class="calc-step">
              <div class="step-header">
                <h3>Calculadora de Becas</h3>
                <p>Completa los datos para realizar tu simulación</p>
              </div>

              <form @submit.prevent="simularBeca" class="calc-form">
                <!-- SELECTOR VISUAL DE NIVEL -->
                <div class="form-group">
                  <label class="form-label">¿Qué nivel te interesa?</label>
                  <div class="visual-selector">
                    <button
                      v-for="nvl in niveles"
                      :key="nvl.id"
                      type="button"
                      class="selector-card"
                      :class="{ 'is-selected': form.nivel === nvl.id }"
                      @click="form.nivel = nvl.id"
                    >
                      <component
                        :is="nvl.icon"
                        :size="22"
                        class="selector-icon"
                      />
                      <span>{{ nvl.label }}</span>
                    </button>
                  </div>
                </div>

                <!-- INPUTS PERSONALES -->
                <div class="form-group">
                  <label class="form-label">Tus Datos</label>

                  <div class="input-grid">
                    <div class="input-wrap">
                      <User :size="18" class="input-icon" />
                      <input
                        type="text"
                        v-model="form.nombre"
                        placeholder="Nombre(s)"
                        required
                        class="premium-input"
                      />
                    </div>
                    <div class="input-wrap">
                      <User :size="18" class="input-icon" />
                      <input
                        type="text"
                        v-model="form.apellidos"
                        placeholder="Apellidos"
                        required
                        class="premium-input"
                      />
                    </div>
                  </div>

                  <div class="input-grid mt-3">
                    <div class="input-wrap">
                      <Mail :size="18" class="input-icon" />
                      <input
                        type="email"
                        v-model="form.correo"
                        placeholder="Correo electrónico"
                        required
                        class="premium-input"
                      />
                    </div>
                    <div class="input-wrap">
                      <Phone :size="18" class="input-icon" />
                      <input
                        type="tel"
                        v-model="form.telefono"
                        placeholder="WhatsApp / Teléfono"
                        required
                        class="premium-input"
                      />
                    </div>
                  </div>
                </div>

                <!-- PRIVACIDAD -->
                <div class="privacy-wrap">
                  <input
                    type="checkbox"
                    id="privacidad"
                    v-model="form.avisoPrivacidad"
                    required
                    class="custom-checkbox"
                  />
                  <label for="privacidad">
                    Acepto el <a href="#">aviso de privacidad</a> para el
                    cálculo de mi beca.
                  </label>
                </div>

                <!-- BOTÓN INTELIGENTE -->
                <button
                  type="submit"
                  class="submit-btn"
                  :class="{ 'is-loading': isCalculating }"
                  :disabled="isCalculating || !form.avisoPrivacidad"
                >
                  <span v-if="!isCalculating" class="btn-content">
                    <Calculator :size="18" /> Calcular mi Beca
                  </span>
                  <span v-else class="btn-content">
                    <RefreshCcw :size="18" class="spin-icon" /> Analizando
                    perfil...
                  </span>
                </button>
              </form>
            </div>

            <!-- PASO 2: RESULTADO TIPO TICKET/VOUCHER -->
            <div v-else class="calc-step result-step">
              <div class="result-header">
                <div class="success-icon-wrap">
                  <Sparkles :size="32" class="text-gold" />
                </div>
                <h3>¡Cálculo Exitoso, {{ form.nombre }}!</h3>
                <p>
                  Basado en tu perfil para <strong>{{ form.nivel }}</strong
                  >, este es tu estimado:
                </p>
              </div>

              <!-- VOUCHER DE BECA -->
              <div class="scholarship-voucher">
                <div class="voucher-left">
                  <span>Beca Autorizada</span>
                  <strong>60%</strong>
                </div>
                <div class="voucher-right">
                  <small>Válido para inscripción</small>
                  <span>Ciclo 2026</span>
                </div>
                <div class="voucher-cutouts"></div>
              </div>

              <div class="result-actions">
                <p class="next-steps-text">
                  Un asesor te contactará por WhatsApp para hacer válido este
                  porcentaje.
                </p>
                <a href="#" class="claim-btn">
                  Reclamar Beca Ahora <ArrowRight :size="18" />
                </a>
                <button @click="reiniciar" class="reset-link">
                  Volver a calcular
                </button>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* =========================================================
   CONTENEDOR GLOBAL
========================================================= */
.calc-premium-section {
  background-color: #f1f5f9; /* Gris azulado muy tenue */
  padding: 5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
}

.calc-container {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.calc-wrapper {
  display: flex;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 25px 50px -12px rgba(15, 60, 97, 0.15);
  overflow: hidden;
  min-height: 600px;
}

/* =========================================================
   PANEL IZQUIERDO: PROPUESTA DE VALOR
========================================================= */
.calc-info-panel {
  flex: 0.85;
  background: linear-gradient(145deg, #0f3c61, #1565c0);
  color: #ffffff;
  padding: 4rem 3rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

.calc-orb {
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0) 70%
  );
  top: -100px;
  left: -100px;
  border-radius: 50%;
  pointer-events: none;
}

.info-content {
  position: relative;
  z-index: 2;
}

.badge-trust {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.text-gold {
  color: #fbbf24;
}

.info-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 3vw, 2.8rem);
  font-weight: 800;
  line-height: 1.1;
  margin: 0 0 1rem 0;
}
.info-title em {
  color: #93c5fd;
  font-style: italic;
}

.info-desc {
  font-size: 1.05rem;
  color: #e2e8f0;
  line-height: 1.6;
  margin-bottom: 2.5rem;
}

.info-benefits {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.info-benefits li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.95rem;
  font-weight: 500;
}
.benefit-icon {
  color: #4ade80;
  flex-shrink: 0;
}

/* =========================================================
   PANEL DERECHO: HERRAMIENTA CALCULADORA
========================================================= */
.calc-tool-panel {
  flex: 1.15;
  padding: 4rem 3.5rem;
  background: #ffffff;
  position: relative;
}

.calc-step {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.step-header {
  margin-bottom: 2rem;
}
.step-header h3 {
  font-size: 1.8rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 0.25rem 0;
}
.step-header p {
  font-size: 0.95rem;
  color: #64748b;
  margin: 0;
}

.calc-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.form-label {
  font-size: 0.9rem;
  font-weight: 700;
  color: #334155;
}
.mt-3 {
  margin-top: 0.75rem;
}

/* Selector Visual de Tarjetas */
.visual-selector {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.75rem;
}

.selector-card {
  background: #f8fafc;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  padding: 1rem 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #64748b;
}

.selector-card:hover {
  border-color: #cbd5e1;
  background: #ffffff;
  transform: translateY(-2px);
}
.selector-card span {
  font-size: 0.75rem;
  font-weight: 700;
  text-align: center;
}
.selector-icon {
  transition: transform 0.2s;
}

/* Estado Activo del Selector */
.selector-card.is-selected {
  background: #eff6ff;
  border-color: #3b82f6;
  color: #1e40af;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
}
.selector-card.is-selected .selector-icon {
  transform: scale(1.1);
  color: #3b82f6;
}

/* Inputs Premium */
.input-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.input-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 1rem;
  color: #94a3b8;
  pointer-events: none;
  transition: color 0.3s;
}

.premium-input {
  width: 100%;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 0.9rem 1rem 0.9rem 2.8rem;
  font-size: 0.95rem;
  color: #1e293b;
  transition: all 0.2s;
  outline: none;
}
.premium-input::placeholder {
  color: #94a3b8;
}
.premium-input:focus {
  background: #ffffff;
  border-color: #1565c0;
  box-shadow: 0 0 0 4px rgba(21, 101, 192, 0.1);
}
.premium-input:focus + .input-icon,
.input-wrap:focus-within .input-icon {
  color: #1565c0;
}

/* Privacidad */
.privacy-wrap {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-top: 0.5rem;
}
.custom-checkbox {
  margin-top: 0.2rem;
  width: 16px;
  height: 16px;
  cursor: pointer;
  accent-color: #1565c0;
}
.privacy-wrap label {
  font-size: 0.75rem;
  color: #64748b;
  line-height: 1.4;
}
.privacy-wrap a {
  color: #1565c0;
  text-decoration: underline;
  font-weight: 600;
}

/* Botón Inteligente */
.submit-btn {
  background: linear-gradient(135deg, #1565c0, #0f3c61);
  color: #fff;
  border: none;
  border-radius: 12px;
  padding: 1.1rem;
  margin-top: 0.5rem;
  font-size: 1.05rem;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px -5px rgba(21, 101, 192, 0.4);
}
.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 15px 25px -5px rgba(21, 101, 192, 0.5);
  background: linear-gradient(135deg, #1e40af, #0c2e4e);
}
.submit-btn:disabled {
  background: #cbd5e1;
  box-shadow: none;
  cursor: not-allowed;
}
.btn-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.spin-icon {
  animation: spin 1s linear infinite;
}
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

/* =========================================================
   PANTALLA DE RESULTADO (TICKET/VOUCHER)
========================================================= */
.result-step {
  text-align: center;
  justify-content: center;
  align-items: center;
}

.success-icon-wrap {
  width: 80px;
  height: 80px;
  background: #fffbeb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  box-shadow: 0 10px 25px rgba(251, 191, 36, 0.3);
}

.result-header h3 {
  font-size: 2.2rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 0.5rem 0;
}
.result-header p {
  font-size: 1.1rem;
  color: #475569;
  margin: 0 0 2rem 0;
}

/* El Voucher Dorado */
.scholarship-voucher {
  display: flex;
  background: linear-gradient(135deg, #0f3c61, #1565c0);
  border-radius: 16px;
  color: #fff;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px -10px rgba(15, 60, 97, 0.3);
  margin-bottom: 2.5rem;
  width: 100%;
  max-width: 450px;
}

/* Efecto visual de boleto perforado */
.voucher-cutouts::before,
.voucher-cutouts::after {
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  background: #ffffff;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
}
.voucher-cutouts::before {
  left: -15px;
}
.voucher-cutouts::after {
  right: -15px;
}

.voucher-left {
  flex: 1;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-right: 2px dashed rgba(255, 255, 255, 0.3);
}
.voucher-left span {
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #fbbf24;
}
.voucher-left strong {
  font-size: 4.5rem;
  font-weight: 900;
  line-height: 1;
  margin-top: 0.2rem;
}

.voucher-right {
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  min-width: 120px;
}
.voucher-right small {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.8);
}
.voucher-right span {
  font-weight: 800;
  font-size: 1.1rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
}

/* Acciones Finales */
.result-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 450px;
}
.next-steps-text {
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
}

.claim-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #fbbf24;
  color: #92400e;
  font-size: 1.1rem;
  font-weight: 800;
  padding: 1.1rem;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.2s;
}
.claim-btn:hover {
  background: #f59e0b;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(245, 158, 11, 0.3);
}

.reset-link {
  background: transparent;
  border: none;
  color: #94a3b8;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.2s;
  margin-top: 0.5rem;
}
.reset-link:hover {
  color: #0f3c61;
}

/* Animación de Transición */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* =========================================================
   RESPONSIVE
========================================================= */
@media (max-width: 900px) {
  .calc-wrapper {
    flex-direction: column;
    min-height: auto;
  }
  .calc-info-panel {
    padding: 3rem 2rem;
    flex: none;
  }
  .calc-tool-panel {
    padding: 3rem 2rem;
    flex: none;
  }
  .visual-selector {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .calc-tool-panel {
    padding: 2.5rem 1.25rem;
  }
  .input-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .mt-3 {
    margin-top: 1rem;
  }
  .info-title {
    font-size: 1.8rem;
  }
  .step-header h3 {
    font-size: 1.5rem;
  }

  .scholarship-voucher {
    flex-direction: column;
    text-align: center;
  }
  .voucher-left {
    border-right: none;
    border-bottom: 2px dashed rgba(255, 255, 255, 0.3);
    padding: 1.5rem;
  }
  .voucher-right {
    padding: 1.5rem;
  }
  .voucher-cutouts::before {
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 2px;
    border-radius: 0;
    background: transparent;
    border-bottom: 2px dashed #fff;
  }
  .voucher-cutouts::after {
    display: none;
  }
}
</style>
