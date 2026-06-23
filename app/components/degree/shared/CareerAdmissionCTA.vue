<script setup lang="ts">
import { ref, computed } from "vue";
import {
  Sparkles,
  ArrowRight,
  Calculator,
  CheckCircle2,
  MessageCircle,
  School,
  GraduationCap,
} from "lucide-vue-next";

// ==========================================
// ESTADO Y NAVEGACIÓN DEL WIZARD
// ==========================================
const currentStep = ref(1);

// ==========================================
// PASO 1: DATOS DEL LEAD
// ==========================================
const leadData = ref({
  nombres: "",
  apellidos: "",
  correo: "",
  telefono: "",
});

const isStep1Valid = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/; // Validación estricta de 10 dígitos
  return (
    leadData.value.nombres.trim().length > 0 &&
    leadData.value.apellidos.trim().length > 0 &&
    emailRegex.test(leadData.value.correo) &&
    phoneRegex.test(leadData.value.telefono)
  );
});

const goToStep2 = () => {
  if (isStep1Valid.value) {
    currentStep.value = 2;
  }
};

// ==========================================
// PASO 2: PERFIL ACADÉMICO
// ==========================================
const academicData = ref({
  nivel: "Licenciatura",
  carrera: "",
  escuelaProcedencia: "",
  tipoEscuela: "Publica", // 'Publica' o 'Privada'
  promedio: 8.0,
});

const isStep2Valid = computed(() => {
  return (
    academicData.value.carrera !== "" &&
    academicData.value.escuelaProcedencia.trim().length > 0
  );
});

// Opciones dinámicas
const carrerasPorNivel: Record<string, string[]> = {
  "Secundaria (SIU)": ["Secundaria Bilingüe", "Secundaria Multicultural"],
  "Preparatoria (BIU)": ["Bachillerato General", "Bachillerato Bilingüe"],
  Licenciatura: [
    "Comunicación",
    "Arquitectura",
    "Derecho",
    "Administración",
    "Diseño Gráfico",
    "Ingeniería en Sistemas",
  ],
  Posgrado: ["Maestría en Mercadotecnia", "Maestría en Educación"],
};

const goToStep3 = () => {
  if (isStep2Valid.value) {
    currentStep.value = 3;
  }
};

// ==========================================
// PASO 3: LÓGICA FINANCIERA Y ALGORITMO
// ==========================================
// Matriz extraída del archivo PreciosCarrera.xlsx
const pricingMatrix: Record<string, number> = {
  "Secundaria (SIU)": 8556,
  "Preparatoria (BIU)": 10463,
  Licenciatura: 10463,
  Posgrado: 12634,
};

// Algoritmo de Beca según reglas de negocio
const scholarshipPercentage = computed(() => {
  const prom = Number(academicData.value.promedio);
  const isPublica = academicData.value.tipoEscuela === "Publica";
  let beca = 25;

  if (prom < 8.0) {
    beca = 25; // Tope mínimo
  } else if (prom >= 8.0 && prom < 9.0) {
    if (isPublica) {
      beca = 28 + ((prom - 8.0) / 0.9) * 2; // de 28% a 30%
    } else {
      beca = 25 + ((prom - 8.0) / 0.9) * 3; // de 25% a 28%
    }
  } else if (prom >= 9.0) {
    if (isPublica) {
      beca = 33 + ((prom - 9.0) / 1.0) * 2; // de 33% a 35%
    } else {
      beca = 30 + ((prom - 9.0) / 1.0) * 2; // de 30% a 32%
    }
  }

  // REGLA DE ORO: Limitar estrictamente entre 25% y 35%
  return Math.round(Math.max(25, Math.min(35, beca)));
});

// Cálculos financieros finales
const basePrice = computed(
  () => pricingMatrix[academicData.value.nivel] || 10463,
);
const discountAmount = computed(
  () => basePrice.value * (scholarshipPercentage.value / 100),
);
const finalPrice = computed(() => basePrice.value - discountAmount.value);

// Generador de Enlace WhatsApp
const whatsappLink = computed(() => {
  const wappNumber = "527774234426"; // Número solicitado con código de México (+52)
  const message = `¡Hola! Soy ${leadData.value.nombres} ${leadData.value.apellidos}.
Acabo de cotizar la ${academicData.value.nivel} en ${academicData.value.carrera} mediante la web.
Mi promedio es de ${academicData.value.promedio} y obtuve una beca del *${scholarshipPercentage.value}%*.
Quiero iniciar mi proceso de inscripción con la mensualidad de *$${finalPrice.value.toLocaleString("es-MX", { minimumFractionDigits: 2 })}*.`;
  return `https://wa.me/${wappNumber}?text=${encodeURIComponent(message)}`;
});

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(value);
};
</script>

<template>
  <section id="beca" class="admission-section">
    <div class="uninter-container">
      <div class="admission-cta-card animate-cta">
        <div class="cta-glow-bg"></div>

        <div class="cta-layout">
          <!-- LADO IZQUIERDO: Promesa y Valor -->
          <div class="cta-info-side">
            <div class="cta-eyebrow">
              <Sparkles :size="16" class="sparkle-icon" />
              <span>Becas y Financiamiento</span>
            </div>
            <h3 class="cta-title">
              Calcula y obtén tu Beca UNINTER en 3 simples pasos
            </h3>
            <p class="cta-desc">
              Nuestro algoritmo analiza tu trayectoria académica y premia tu
              esfuerzo. Obtén un tabulador oficial al instante y asegura tu
              futuro profesional.
            </p>

            <ul class="value-list">
              <li>
                <CheckCircle2 :size="18" class="val-icon" /> Simulador en tiempo
                real
              </li>
              <li>
                <CheckCircle2 :size="18" class="val-icon" /> Becas desde 25%
                garantizado
              </li>
              <li>
                <CheckCircle2 :size="18" class="val-icon" /> Asesoría
                personalizada por WhatsApp
              </li>
            </ul>
          </div>

          <!-- LADO DERECHO: El Wizard Interactivo -->
          <div class="cta-form-side">
            <!-- STEPS INDICATOR -->
            <div class="steps-indicator">
              <div class="step" :class="{ active: currentStep >= 1 }">1</div>
              <div
                class="step-line"
                :class="{ active: currentStep >= 2 }"
              ></div>
              <div class="step" :class="{ active: currentStep >= 2 }">2</div>
              <div
                class="step-line"
                :class="{ active: currentStep >= 3 }"
              ></div>
              <div class="step" :class="{ active: currentStep >= 3 }">3</div>
            </div>

            <!-- CONTENEDOR DE TRANSICIÓN -->
            <div class="wizard-container">
              <Transition name="slide-fade" mode="out-in">
                <!-- PASO 1: CAPTURA DE LEAD -->
                <div v-if="currentStep === 1" class="wizard-step" key="step1">
                  <h4 class="step-title">Tus Datos de Contacto</h4>
                  <form @submit.prevent="goToStep2" class="sleek-form">
                    <div class="input-row">
                      <div class="field-wrap">
                        <label class="field-label">Nombre(s)</label>
                        <input
                          type="text"
                          v-model="leadData.nombres"
                          placeholder="Ej. Ana Paola"
                          required
                          class="glass-input"
                        />
                      </div>
                      <div class="field-wrap">
                        <label class="field-label">Apellidos</label>
                        <input
                          type="text"
                          v-model="leadData.apellidos"
                          placeholder="Ej. Pérez Gómez"
                          required
                          class="glass-input"
                        />
                      </div>
                    </div>

                    <div class="field-wrap">
                      <label class="field-label">Correo Electrónico</label>
                      <input
                        type="email"
                        v-model="leadData.correo"
                        placeholder="correo@ejemplo.com"
                        required
                        class="glass-input"
                      />
                    </div>

                    <div class="field-wrap">
                      <label class="field-label"
                        >Número Celular (WhatsApp)</label
                      >
                      <div class="input-group">
                        <span class="phone-prefix">+52</span>
                        <input
                          type="tel"
                          v-model="leadData.telefono"
                          placeholder="Teléfono a 10 dígitos"
                          maxlength="10"
                          minlength="10"
                          pattern="[0-9]{10}"
                          required
                          class="glass-input phone-input"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      class="btn-cta-submit"
                      :disabled="!isStep1Valid"
                    >
                      Siguiente Paso
                      <ArrowRight :size="18" class="submit-arrow" />
                    </button>
                  </form>
                </div>

                <!-- PASO 2: PERFIL ACADÉMICO -->
                <div
                  v-else-if="currentStep === 2"
                  class="wizard-step"
                  key="step2"
                >
                  <h4 class="step-title">Tu Perfil Académico</h4>
                  <form @submit.prevent="goToStep3" class="sleek-form">
                    <div class="input-row">
                      <div class="field-wrap">
                        <label class="field-label">Nivel de Estudios</label>
                        <select
                          v-model="academicData.nivel"
                          class="glass-input"
                          required
                          @change="academicData.carrera = ''"
                        >
                          <option value="Secundaria (SIU)">
                            Secundaria (SIU)
                          </option>
                          <option value="Preparatoria (BIU)">
                            Preparatoria (BIU)
                          </option>
                          <option value="Licenciatura">Licenciatura</option>
                          <option value="Posgrado">Posgrado</option>
                        </select>
                      </div>

                      <div class="field-wrap">
                        <label class="field-label">Programa de Interés</label>
                        <select
                          v-model="academicData.carrera"
                          class="glass-input"
                          required
                        >
                          <option value="" disabled>Selecciona Programa</option>
                          <option
                            v-for="carrera in carrerasPorNivel[
                              academicData.nivel
                            ]"
                            :key="carrera"
                            :value="carrera"
                          >
                            {{ carrera }}
                          </option>
                        </select>
                      </div>
                    </div>

                    <div class="field-wrap">
                      <label class="field-label"
                        >Nombre de la Escuela de Procedencia</label
                      >
                      <input
                        type="text"
                        v-model="academicData.escuelaProcedencia"
                        placeholder="Ej. Colegio Bilingüe Cervantes"
                        required
                        class="glass-input"
                      />
                    </div>

                    <!-- Radio Buttons Tipo Escuela -->
                    <div class="field-wrap">
                      <label class="field-label"
                        >Tipo de Escuela de Procedencia</label
                      >
                      <div class="radio-group-modern">
                        <label
                          class="radio-label"
                          :class="{
                            selected: academicData.tipoEscuela === 'Publica',
                          }"
                        >
                          <input
                            type="radio"
                            v-model="academicData.tipoEscuela"
                            value="Publica"
                          />
                          <School :size="16" /> Pública
                        </label>
                        <label
                          class="radio-label"
                          :class="{
                            selected: academicData.tipoEscuela === 'Privada',
                          }"
                        >
                          <input
                            type="radio"
                            v-model="academicData.tipoEscuela"
                            value="Privada"
                          />
                          <GraduationCap :size="16" /> Privada
                        </label>
                      </div>
                    </div>

                    <!-- Slider de Promedio -->
                    <div class="field-wrap">
                      <label class="field-label"
                        >¿Cuál es tu promedio actual / final?</label
                      >
                      <div class="slider-container">
                        <div class="slider-header">
                          <span>Promedio</span>
                          <span class="slider-value">{{
                            academicData.promedio.toFixed(1)
                          }}</span>
                        </div>
                        <input
                          type="range"
                          v-model.number="academicData.promedio"
                          min="6.0"
                          max="10.0"
                          step="0.1"
                          class="styled-slider"
                        />
                        <div class="slider-marks">
                          <span>6.0</span>
                          <span>8.0</span>
                          <span>10.0</span>
                        </div>
                      </div>
                    </div>

                    <div class="action-row">
                      <button
                        type="button"
                        class="btn-back"
                        @click="currentStep = 1"
                      >
                        Atrás
                      </button>
                      <button
                        type="submit"
                        class="btn-cta-submit"
                        :disabled="!isStep2Valid"
                      >
                        <Calculator :size="18" /> Calcula tu Beca
                      </button>
                    </div>
                  </form>
                </div>

                <!-- PASO 3: RESULTADOS -->
                <div
                  v-else-if="currentStep === 3"
                  class="wizard-step results-step"
                  key="step3"
                >
                  <div class="results-badge">
                    ¡Felicidades, {{ leadData.nombres }}!
                  </div>
                  <h4 class="results-title">
                    Aquí está tu propuesta académica
                  </h4>

                  <div class="results-card">
                    <div class="rc-header">
                      <span>{{ academicData.nivel }}</span>
                      <strong>{{ academicData.carrera }}</strong>
                    </div>

                    <div class="rc-body">
                      <div class="rc-row">
                        <span>Colegiatura Base (Mensual)</span>
                        <span class="strikethrough">{{
                          formatCurrency(basePrice)
                        }}</span>
                      </div>
                      <div class="rc-row highlight-row">
                        <span
                          >Beca Obtenida (Promedio
                          {{ academicData.promedio.toFixed(1) }})</span
                        >
                        <span class="discount-badge"
                          >-{{ scholarshipPercentage }}%</span
                        >
                      </div>
                      <div class="rc-divider"></div>
                      <div class="rc-row final-row">
                        <span>Tu Pago Mensual</span>
                        <span class="final-price">{{
                          formatCurrency(finalPrice)
                        }}</span>
                      </div>
                    </div>
                  </div>

                  <a :href="whatsappLink" target="_blank" class="btn-whatsapp">
                    <MessageCircle :size="20" />
                    ¡Inicia tu proceso con esta beca!
                  </a>

                  <p class="upsell-text">
                    ¿Tienes un caso especial o buscas un porcentaje mayor?<br />
                    <a :href="whatsappLink" target="_blank"
                      >Contacta a un asesor para una evaluación
                      personalizada.</a
                    >
                  </p>

                  <button
                    class="btn-back mt-3"
                    @click="currentStep = 2"
                    style="font-size: 0.8rem"
                  >
                    Recalcular Promedio
                  </button>
                </div>
              </Transition>
            </div>
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
.admission-section {
  background-color: #f8fafc;
  padding: 5rem 0 7rem 0;
  font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
}

.uninter-container {
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

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

.animate-cta {
  animation: fadeUpIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* =========================================================
   LAYOUT PREMIUM
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
  width: 500px;
  height: 500px;
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
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  position: relative;
  z-index: 2;
}

/* INFO SIDE */
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
  color: #fde68a;
  background: rgba(253, 230, 138, 0.1);
  padding: 0.4rem 1rem;
  border-radius: 50px;
  border: 1px solid rgba(253, 230, 138, 0.15);
  margin-bottom: 1.5rem;
}
.cta-title {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: clamp(2rem, 3vw, 2.8rem);
  font-weight: 800;
  line-height: 1.2;
  margin: 0 0 1.5rem 0;
}
.cta-desc {
  font-size: 1.05rem;
  color: #cbd5e1;
  line-height: 1.6;
  margin: 0 0 2rem 0;
}
.value-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.value-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.95rem;
  font-weight: 500;
  color: #e2e8f0;
}
.val-icon {
  color: #10b981;
}

/* =========================================================
   WIZARD Y FORMULARIO
========================================================= */
.cta-form-side {
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  padding: 2.5rem;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

/* Indicador de pasos */
.steps-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 2rem;
}
.step {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  color: #64748b;
  transition: all 0.4s;
}
.step.active {
  background: #d84315;
  color: #fff;
  box-shadow: 0 0 15px rgba(216, 67, 21, 0.5);
}
.step-line {
  height: 2px;
  flex: 1;
  background: rgba(255, 255, 255, 0.1);
  transition: all 0.4s;
}
.step-line.active {
  background: #d84315;
}

/* Formularios */
.wizard-container {
  position: relative;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.step-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 1.5rem 0;
  color: #fff;
  text-align: center;
}
.sleek-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
}

.field-wrap {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: left;
}
.field-label {
  font-size: 0.8rem;
  font-weight: 700;
  color: #fde68a;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.input-row {
  display: flex;
  gap: 1rem;
}
.input-row > * {
  flex: 1;
}

.input-group {
  display: flex;
  align-items: stretch;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 14px;
  overflow: hidden;
  transition: all 0.3s;
}
.input-group:focus-within {
  border-color: #ff7a59;
  box-shadow: 0 0 0 3px rgba(216, 67, 21, 0.2);
  background: rgba(255, 255, 255, 0.12);
}
.phone-prefix {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  background: rgba(0, 0, 0, 0.2);
  color: #94a3b8;
  font-weight: 600;
  font-size: 0.95rem;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}
.phone-input {
  border: none !important;
  background: transparent !important;
  border-radius: 0 !important;
}
.phone-input:focus {
  box-shadow: none !important;
}

.glass-input {
  width: 100%;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 1rem 1.25rem;
  border-radius: 14px;
  color: #ffffff;
  font-size: 0.95rem;
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
.glass-input option {
  background: #0f3c61;
  color: #fff;
} /* Para selects */

/* Radio Modernos */
.radio-group-modern {
  display: flex;
  gap: 1rem;
}
.radio-label {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 0.9rem;
  font-weight: 600;
  color: #cbd5e1;
}
.radio-label input {
  display: none;
}
.radio-label.selected {
  background: rgba(21, 101, 192, 0.4);
  border-color: #3b82f6;
  color: #fff;
  box-shadow: inset 0 0 0 1px #3b82f6;
}

/* Slider de Promedio */
.slider-container {
  background: rgba(0, 0, 0, 0.2);
  padding: 1.25rem;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.05);
}
.slider-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #cbd5e1;
}
.slider-value {
  font-size: 1.4rem;
  font-weight: 800;
  color: #fde68a;
}
.styled-slider {
  width: 100%;
  -webkit-appearance: none;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  outline: none;
}
.styled-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: #d84315;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 0 10px rgba(216, 67, 21, 0.6);
}
.styled-slider::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}
.slider-marks {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: #64748b;
  font-weight: 700;
}

/* Botones */
.action-row {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}
.btn-back {
  padding: 1rem 1.5rem;
  background: transparent;
  color: #cbd5e1;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s;
}
.btn-back:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.btn-cta-submit {
  flex: 1;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #d84315;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  padding: 1rem;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(216, 67, 21, 0.35);
  transition: all 0.3s;
  overflow: hidden;
}
.btn-cta-submit:disabled {
  background-color: #475569;
  box-shadow: none;
  cursor: not-allowed;
  opacity: 0.7;
}
.btn-cta-submit:not(:disabled):hover {
  background-color: #e64a19;
  transform: translateY(-2px);
  box-shadow: 0 15px 30px rgba(216, 67, 21, 0.5);
}
.btn-cta-submit .submit-arrow {
  transition: transform 0.3s;
}
.btn-cta-submit:not(:disabled):hover .submit-arrow {
  transform: translateX(4px);
}

/* =========================================================
   PASO 3: RESULTADOS
========================================================= */
.results-step {
  text-align: center;
}
.results-badge {
  display: inline-block;
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  border: 1px solid rgba(16, 185, 129, 0.3);
  margin-bottom: 1rem;
}
.results-title {
  font-size: 1.4rem;
  font-weight: 800;
  margin: 0 0 2rem 0;
}

.results-card {
  background: rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: left;
  margin-bottom: 2rem;
  overflow: hidden;
}
.rc-header {
  background: rgba(255, 255, 255, 0.05);
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
}
.rc-header span {
  font-size: 0.8rem;
  color: #94a3b8;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.05em;
}
.rc-header strong {
  font-size: 1.1rem;
  color: #fff;
}

.rc-body {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.rc-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.95rem;
  color: #cbd5e1;
}
.strikethrough {
  text-decoration: line-through;
  color: #64748b;
  font-weight: 600;
}
.highlight-row span {
  color: #fde68a;
  font-weight: 600;
}
.discount-badge {
  background: #fde68a;
  color: #b45309 !important;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  font-weight: 800 !important;
}
.rc-divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 0.5rem 0;
}
.final-row {
  font-size: 1.1rem;
  color: #fff;
  font-weight: 700;
  align-items: flex-end;
}
.final-price {
  font-size: 2.2rem;
  font-weight: 800;
  color: #10b981;
  line-height: 1;
}

.btn-whatsapp {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  background: #25d366;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 800;
  padding: 1.2rem;
  border-radius: 14px;
  text-decoration: none;
  box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
  transition: all 0.3s;
  margin-bottom: 1.5rem;
}
.btn-whatsapp:hover {
  background: #20bd5a;
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(37, 211, 102, 0.4);
}

.upsell-text {
  font-size: 0.85rem;
  color: #94a3b8;
  line-height: 1.5;
}
.upsell-text a {
  color: #3b82f6;
  text-decoration: underline;
  transition: color 0.3s;
}
.upsell-text a:hover {
  color: #60a5fa;
}

/* Transiciones de Vue */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* =========================================================
   RESPONSIVE
========================================================= */
@media (max-width: 1024px) {
  .cta-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .cta-info-side {
    text-align: center;
    align-items: center;
  }
  .value-list {
    align-items: center;
  }
}

@media (max-width: 768px) {
  .admission-cta-card {
    padding: 3rem 1.5rem;
  }
  .cta-form-side {
    padding: 1.5rem;
  }
  .input-row {
    flex-direction: column;
    gap: 1.25rem;
  }
}
</style>
