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

// Props dinámicos
const props = defineProps<{
  customCta?: {
    texto_boton: string;
    mensaje: string;
  };
}>();

// Redes sociales de la universidad (movidas al final de la calculadora)


// ==========================================
// ESTADO Y NAVEGACIN DEL WIZARD
// ==========================================
const currentStep = ref(1);
const showNoticeModal = ref(false);
const wantsExtraScholarship = ref(false);

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
  const phoneRegex = /^[0-9]{10}$/; // Validacin estricta de 10 dgitos
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
// PASO 2: PERFIL ACADMICO
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

// Opciones dinmicas
const carrerasPorNivel: Record<string, string[]> = {
  "Secundaria (SIU)": ["Secundaria Bilinge", "Secundaria Multicultural"],
  "Bachillerato": ["Bachillerato Bilinge", "Bachillerato Multicultural"],
  Licenciatura: [
    "Comunicacin (LCO)",
    "Comunicacin y Relaciones Pblicas (CORP)",
    "Relaciones Internacionales (LRI)",
    "Relaciones Internacionales y Ciencias Polticas (RICP)",
    "Relaciones Internacionales y Economa (RIEC)",
    "Ciencias Polticas y Gestin Pblica (LCP)",
    "Derecho (LED)",
    "Idiomas (LID)",
    "Pedagoga (LPE)",
    "Psicologa (LPS)",
    "Administracin de Empresas (LAE)",
    "Administracin de Empresas Tursticas (LAET)",
    "Administracin de Negocios Internacionales (LANI)",
    "Administracin y Mercadotecnia (LAM)",
    "Comercio Exterior (LCE)",
    "Economa y Finanzas (LEF)",
    "Mercadotecnia (LME)",
    "Mercadotecnia y Publicidad (LEMP)",
    "Arquitectura (ARQ)",
    "Animacin y Diseo Digital (LADD)",
    "Diseo Grfico (LDG)",
    "Diseo Industrial (LDI)",
    "Diseo de Modas y Tendencias Internacionales (LDM)",
    "Ingeniera Ambiental (IAM)",
    "Ingeniera Civil (ICI)",
    "Ingeniera Industrial y de Sistemas de Calidad (IISCA)",
    "Ingeniera Mecatrnica (IME)",
    "Ingeniera Mecnica Industrial (IMI)",
    "Ingeniera en Sistemas Computacionales (ISC)"
  ],
  Posgrado: [
    "Especialidad en Criminalstica (ECR)",
    "Especialidad en Administracin de Obra (EAO)",
    "Especialidad en Marketing Digital (EMD)",
    "Especialidad en Publicidad (EPU)",
    "Especialidad en Docencia del Espaol (EDE)",
    "Maestra en Administracin y Direccin (MAD)",
    "Maestra en Educacin y Docencia (MED)",
    "Maestra en Gestin de Calidad (MGC)",
    "Maestra en Lenguas (MLE)",
    "Doctorado en Administracin (DAD)",
    "Doctorado en Humanidades (DHU)"
  ]
};

const goToStep3 = () => {
  if (isStep2Valid.value) {
    wantsExtraScholarship.value = false; // Reset toggle for new results
    currentStep.value = 3;
    if (Number(academicData.value.promedio) < 7.0) {
      showNoticeModal.value = true;
    }
  }
};

// ==========================================
// PASO 3: LGICA FINANCIERA Y ALGORITMO
// ==========================================

// Algoritmo de Beca segn reglas de negocio (5 en 5, tope 40%, mayor para pblica)
const scholarshipPercentage = computed(() => {
  const prom = Number(academicData.value.promedio);
  const isPublica = academicData.value.tipoEscuela === "Publica";
  let beca = 10;

  if (prom < 7.0) {
    beca = 10;
  } else if (prom >= 7.0 && prom < 7.5) {
    beca = isPublica ? 15 : 10;
  } else if (prom >= 7.5 && prom < 8.0) {
    beca = isPublica ? 20 : 15;
  } else if (prom >= 8.0 && prom < 8.5) {
    beca = isPublica ? 25 : 20;
  } else if (prom >= 8.5 && prom < 9.0) {
    beca = isPublica ? 30 : 25;
  } else if (prom >= 9.0 && prom < 9.8) { // Covers 9.0 to 9.7
    beca = isPublica ? 35 : 30;
  } else if (prom >= 9.8 && prom < 10.0) { // Covers 9.8 to 9.9
    beca = isPublica ? 40 : 35;
  } else { // prom === 10.0
    beca = 40; // Tope
  }

  return beca;
});

// Clculos financieros finales basndose en precios de 100% de las capturas
const basePrice = computed(() => {
  const nivel = academicData.value.nivel;
  const prog = academicData.value.carrera;

  if (nivel === "Secundaria (SIU)") {
    if (prog && prog.includes("Multicultural")) return 7139;
    return 5003; // Bilinge
  }
  if (nivel === "Bachillerato") {
    if (prog && prog.includes("Multicultural")) return 9582;
    return 7290; // Bilinge
  }
  if (nivel === "Licenciatura") {
    return 8438;
  }
  if (nivel === "Posgrado") {
    return 7646;
  }
  return 8438;
});

const totalScholarshipPercentage = computed(() => {
  let pct = scholarshipPercentage.value;
  if (wantsExtraScholarship.value) {
    pct += 10;
  }
  return Math.min(45, pct); // Cap absoluto de 45%
});

const discountAmount = computed(() => {
  return basePrice.value * (totalScholarshipPercentage.value / 100);
});

const finalPrice = computed(() => {
  return basePrice.value - discountAmount.value;
});

// Generador de Enlace WhatsApp
const whatsappLink = computed(() => {
  const wappNumber = "527774234426"; // Nmero solicitado con cdigo de Mxico (+52)
  const extraInfo = wantsExtraScholarship.value ? " (interesado en Beca Cultural/Deportiva)" : "";
  const message = `Hola! Soy ${leadData.value.nombres} ${leadData.value.apellidos}.
Acabo de cotizar la ${academicData.value.nivel} en ${academicData.value.carrera} mediante la web.
Mi promedio es de ${academicData.value.promedio} y obtuve una beca del *${totalScholarshipPercentage.value}%*${extraInfo}.
Quiero iniciar mi proceso de inscripcin con la mensualidad de *$${finalPrice.value.toLocaleString("es-MX", { minimumFractionDigits: 2 })}*.`;
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

            <!-- CONTENEDOR DE TRANSICIN -->
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
                          placeholder="Ej. Prez Gmez"
                          required
                          class="glass-input"
                        />
                      </div>
                    </div>

                    <div class="field-wrap">
                      <label class="field-label">Correo Electrnico</label>
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
                        >Nmero Celular (WhatsApp)</label
                      >
                      <div class="input-group">
                        <span class="phone-prefix">+52</span>
                        <input
                          type="tel"
                          v-model="leadData.telefono"
                          placeholder="Telfono a 10 dgitos"
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

                <!-- PASO 2: PERFIL ACADMICO -->
                <div
                  v-else-if="currentStep === 2"
                  class="wizard-step"
                  key="step2"
                >
                  <h4 class="step-title">Tu Perfil Acadmico</h4>
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
                          <option value="Bachillerato">
                            Bachillerato
                          </option>
                          <option value="Licenciatura">Licenciatura</option>
                          <option value="Posgrado">Posgrado</option>
                        </select>
                      </div>

                      <div class="field-wrap">
                        <label class="field-label">Programa de Inters</label>
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
                        placeholder="Ej. Colegio Bilinge Cervantes"
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
                          <School :size="16" /> Pblica
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
                        >Cul es tu promedio actual / final?</label
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
                        Atrs
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
                    Felicidades, {{ leadData.nombres }}!
                  </div>
                  <h4 class="results-title">
                    Aqu est tu propuesta acadmica
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
                          >-{{ totalScholarshipPercentage }}%</span
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

                  <!-- Convocatoria extra de beca cultural/deportiva para todos -->
                  <div class="extra-scholarship-toggle">
                    <label class="toggle-label">
                      <input type="checkbox" v-model="wantsExtraScholarship" class="toggle-checkbox" />
                      <span class="toggle-slider"></span>
                      <div class="toggle-info">
                        <span class="toggle-title">Practicas algn deporte o actividad artstica?</span>
                        <span class="toggle-desc">Haz clic aqu para sumar un <strong>+10% de beca</strong> adicional a tu propuesta aplicando a nuestras Becas Culturales y/o Deportivas (Tope mximo de beca: 45%).</span>
                      </div>
                    </label>
                  </div>

                  <a :href="whatsappLink" target="_blank" class="btn-whatsapp">
                    <MessageCircle :size="20" />
                    {{ customCta?.texto_boton || 'Inicia tu proceso con esta beca!' }}
                  </a>

                  <p class="upsell-text">
                    <span v-if="academicData.promedio < 7.0 && !wantsExtraScholarship" style="color: var(--p); font-weight: 700; display: block; margin-bottom: 0.6rem; line-height: 1.4;">
                      Nota importante! Tienes 10% de beca base, pero puedes obtener un porcentaje mayor participando en nuestras convocatorias de Becas Culturales y/o Deportivas. Activa la opcin de arriba para ver tu propuesta con beca cultural/deportiva!
                    </span>
                    Tienes un caso especial o buscas un porcentaje mayor?<br />
                    <a :href="whatsappLink" target="_blank"
                      >Contacta a un asesor para una evaluacin
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

      
  <Teleport to="body">
    <Transition name="calc-modal-fade">
      <div v-if="showNoticeModal" class="calc-modal-overlay" @click="showNoticeModal = false">
        <div class="calc-modal-card" @click.stop>
          <button class="calc-modal-close" @click="showNoticeModal = false" aria-label="Cerrar modal">
            <Icon name="mdi:close" size="20" />
          </button>
          <div class="calc-modal-header">
            <div class="calc-modal-icon">
              <Icon name="mdi:information" size="28" />
            </div>
            <h3 class="calc-modal-title">Nota importante!</h3>
          </div>
          <p class="calc-modal-text">
            Tienes 10% de beca base, pero puedes obtener un porcentaje mayor participando en nuestras convocatorias de <strong>Becas Culturales y/o Deportivas</strong>.
          </p>
          <div class="calc-modal-actions">
            <button class="calc-modal-btn" @click="wantsExtraScholarship = true; showNoticeModal = false">
              Me interesa! (+10% Beca)
            </button>
            <button class="calc-modal-btn btn-secondary" @click="showNoticeModal = false">
              Ver propuesta base (10%)
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* =========================================================
   WIZARD Y FORMULARIO
========================================================= */
.cta-form-side {
  --p: #0073B4;
  --p-hover: #003B5C;

  width: 100%;
  background: #ffffff;
  padding: 3rem 2.5rem;
  border-radius: 24px;
  border: 1px solid rgba(15, 60, 97, 0.08);
  box-shadow: 0 20px 45px rgba(15, 60, 97, 0.12);
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
  background: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  color: #64748b;
  transition: all 0.4s;
  border: 1px solid #e2e8f0;
}
.step.active {
  background: var(--p);
  color: #fff;
  border-color: var(--p);
  box-shadow: 0 0 12px rgba(0, 115, 180, 0.35);
}
.step-line {
  height: 2px;
  flex: 1;
  background: #e2e8f0;
  transition: all 0.4s;
}
.step-line.active {
  background: var(--p);
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
  font-weight: 800;
  margin: 0 0 1.5rem 0;
  color: #0f3c61;
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
  font-size: 0.75rem;
  font-weight: 800;
  color: #475569;
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
  background: #ffffff;
  border: 1.5px solid #cbd5e1;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s;
}
.input-group:focus-within {
  border-color: var(--p);
  box-shadow: 0 0 0 3px rgba(21, 101, 192, 0.15);
}
.phone-prefix {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  background: #f1f5f9;
  color: #475569;
  font-weight: 600;
  font-size: 0.95rem;
  border-right: 1.5px solid #cbd5e1;
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
  background: #ffffff;
  border: 1.5px solid #cbd5e1;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  color: #1e293b;
  font-size: 0.92rem;
  font-weight: 500;
  transition: all 0.3s;
  box-sizing: border-box;
}
.glass-input:focus {
  outline: none;
  border-color: var(--p);
  box-shadow: 0 0 0 3px rgba(21, 101, 192, 0.15);
}
.glass-input::placeholder {
  color: #94a3b8;
}
.glass-input option {
  background: #ffffff;
  color: #1e293b;
}

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
  background: #f8fafc;
  border: 1.5px solid #cbd5e1;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 0.88rem;
  font-weight: 700;
  color: #475569;
}
.radio-label input {
  display: none;
}
.radio-label.selected {
  background: rgba(21, 101, 192, 0.08);
  border-color: var(--p);
  color: var(--p);
}

/* Slider de Promedio */
.slider-container {
  background: #f8fafc;
  padding: 1.25rem;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}
.slider-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 0.88rem;
  font-weight: 700;
  color: #475569;
}
.slider-value {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--p);
}
.styled-slider {
  width: 100%;
  -webkit-appearance: none;
  height: 6px;
  background: #cbd5e1;
  border-radius: 5px;
  outline: none;
}
.styled-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--p);
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 0 10px rgba(21, 101, 192, 0.4);
}
.styled-slider::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}
.slider-marks {
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: #94a3b8;
  font-weight: 700;
}

/* Botones */
.action-row {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}
.btn-back {
  padding: 0.8rem 1.5rem;
  background: transparent;
  color: #475569;
  border: 1.5px solid #cbd5e1;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.3s;
}
.btn-back:hover {
  background: #f1f5f9;
  color: #0f3c61;
}

.btn-cta-submit {
  flex: 1;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: var(--p);
  color: #ffffff;
  font-size: 0.92rem;
  font-weight: 700;
  padding: 0.85rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(21, 101, 192, 0.25);
  transition: all 0.3s;
  overflow: hidden;
}
.btn-cta-submit:disabled {
  background-color: #94a3b8;
  box-shadow: none;
  cursor: not-allowed;
  opacity: 0.7;
}
.btn-cta-submit:not(:disabled):hover {
  background-color: var(--p-hover);
  transform: translateY(-2px);
  box-shadow: 0 12px 25px rgba(0, 59, 92, 0.45);
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
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  border: 1px solid rgba(16, 185, 129, 0.2);
  margin-bottom: 1rem;
}
.results-title {
  font-size: 1.4rem;
  font-weight: 800;
  margin: 0 0 2rem 0;
  color: #0f3c61;
}

.results-card {
  background: #f8fafc;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  text-align: left;
  margin-bottom: 2rem;
  overflow: hidden;
}
.rc-header {
  background: #f1f5f9;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #e2e8f0;
  display: flex;
  flex-direction: column;
}
.rc-header span {
  font-size: 0.8rem;
  color: #64748b;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.05em;
}
.rc-header strong {
  font-size: 1.1rem;
  color: #0f3c61;
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
  color: #475569;
}
.strikethrough {
  text-decoration: line-through;
  color: #94a3b8;
  font-weight: 600;
}
.highlight-row span {
  color: var(--p);
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
  background: #e2e8f0;
  margin: 0.5rem 0;
}
.final-row {
  font-size: 1.1rem;
  color: #0f3c61;
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
  color: #64748b;
  line-height: 1.5;
}
.upsell-text a {
  color: var(--p);
  text-decoration: underline;
  transition: color 0.3s;
}
.upsell-text a:hover {
  color: #0f3c61;
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

/* =========================================================
   MODAL DE AVISO (PROMEDIO < 7.0)
========================================================= */
.calc-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 26, 34, 0.45);
  backdrop-filter: blur(8px);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.calc-modal-card {
  background: #ffffff;
  border-radius: 20px;
  width: 100%;
  max-width: 460px;
  padding: 2.5rem;
  box-shadow: 0 25px 50px -12px rgba(15, 60, 97, 0.25);
  border: 1px solid rgba(15, 60, 97, 0.08);
  position: relative;
  text-align: center;
}

.calc-modal-close {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  background: #f1f5f9;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s;
}
.calc-modal-close:hover {
  background: #e2e8f0;
  color: #0f3c61;
}

.calc-modal-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.calc-modal-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: rgba(216, 67, 21, 0.1);
  color: var(--p);
  display: flex;
  align-items: center;
  justify-content: center;
}

.calc-modal-title {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: 1.6rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0;
}

.calc-modal-text {
  font-size: 1rem;
  color: #475569;
  line-height: 1.6;
  margin: 0 0 2rem 0;
}

.calc-modal-btn {
  background: var(--p);
  color: #ffffff;
  border: none;
  font-weight: 700;
  font-size: 1rem;
  padding: 0.85rem 2.5rem;
  border-radius: 12px;
  cursor: pointer;
  width: 100%;
  box-shadow: 0 4px 15px rgba(216, 67, 21, 0.25);
  transition: all 0.2s;
}
.calc-modal-btn:hover {
  background: #bf360c;
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(216, 67, 21, 0.35);
}

/* Transiciones */
.calc-modal-fade-enter-active,
.calc-modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.calc-modal-fade-enter-from,
.calc-modal-fade-leave-to {
  opacity: 0;
}

.calc-modal-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
}

.calc-modal-btn.btn-secondary {
  background: #f1f5f9;
  color: #475569;
  box-shadow: none;
}
.calc-modal-btn.btn-secondary:hover {
  background: #e2e8f0;
  color: #0f3c61;
}

/* =========================================================
   TOGGLE DE BECA ADICIONAL (CULTURAL / DEPORTIVA)
========================================================= */
.extra-scholarship-toggle {
  background: rgba(216, 67, 21, 0.04);
  border: 1px dashed rgba(216, 67, 21, 0.25);
  border-radius: 16px;
  padding: 1.25rem;
  margin: 1.25rem 0;
  transition: all 0.3s ease;
}
.extra-scholarship-toggle:hover {
  background: rgba(216, 67, 21, 0.08);
  border-color: rgba(216, 67, 21, 0.45);
  transform: translateY(-1px);
}

.toggle-label {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  cursor: pointer;
  user-select: none;
}

.toggle-checkbox {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-slider {
  position: relative;
  flex-shrink: 0;
  width: 50px;
  height: 26px;
  background-color: #cbd5e1;
  border-radius: 34px;
  transition: .4s;
  margin-top: 0.15rem;
}
.toggle-slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  border-radius: 50%;
  transition: .4s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.toggle-checkbox:checked + .toggle-slider {
  background-color: var(--p);
}
.toggle-checkbox:checked + .toggle-slider:before {
  transform: translateX(24px);
}

.toggle-info {
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 0.25rem;
}

.toggle-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: #0f3c61;
}

.toggle-desc {
  font-size: 0.82rem;
  color: #475569;
  line-height: 1.4;
}

</style>
