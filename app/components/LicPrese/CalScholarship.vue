<script setup lang="ts">
import { ref, computed } from "vue";
import {
  Trophy,
  BookOpen,
  Users,
  Clock,
  CheckCircle2,
  ArrowRight,
  Calculator,
  MessageCircle,
  School,
  GraduationCap,
} from "lucide-vue-next";

// Datos de apoyo y valor del lado izquierdo
const highlights = [
  { icon: Trophy, value: "Hasta 60%", label: "de beca disponible" },
  { icon: BookOpen, value: "23", label: "licenciaturas presenciales" },
  { icon: Users, value: "71,000+", label: "egresados en México y el mundo" },
  { icon: Clock, value: "4 años", label: "duración promedio" },
];

const benefits = [
  "Colegiatura mensual con descuento garantizado",
  "Acceso a instalaciones y laboratorios de clase mundial",
  "Movilidad e intercambio internacional con más de 20 países",
  "Bolsa de trabajo Enlace Profesional UNINTER",
  "Talleres deportivos y culturales incluidos",
];

// ==========================================
// ESTADO Y NAVEGACIÓN DEL WIZARD DE BECAS
// ==========================================
const currentStep = ref(1);
const showNoticeModal = ref(false);
const wantsExtraScholarship = ref(false);

// PASO 1: DATOS DEL LEAD
const leadData = ref({
  nombres: "",
  apellidos: "",
  correo: "",
  telefono: "",
});

const isStep1Valid = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;
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

// PASO 2: PERFIL ACADÉMICO
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

const carrerasPorNivel: Record<string, string[]> = {
  Licenciatura: [
    "Administración de Empresas (LAE)",
    "Administración de Empresas Turísticas (LAET)",
    "Administración de Negocios Internacionales (LANI)",
    "Administración y Mercadotecnia (LAM)",
    "Animación y Diseño Digital (LADD)",
    "Arquitectura (ARQ)",
    "Ciencias Políticas y Gestión Pública (LCP)",
    "Comercio Exterior (LCE)",
    "Comunicación (LCO)",
    "Comunicación y Relaciones Públicas (CORP)",
    "Derecho (LED)",
    "Diseño de Modas y Tendencias Internacionales (LDM)",
    "Diseño Gráfico (LDG)",
    "Diseño Industrial (LDI)",
    "Economía y Finanzas (LEF)",
    "Idiomas (LID)",
    "Ingeniería Ambiental (IAM)",
    "Ingeniería Civil (ICI)",
    "Ingeniería en Sistemas Computacionales (ISC)",
    "Ingeniería Industrial y de Sistemas de Calidad (IISCA)",
    "Ingeniería Mecánica Industrial (IMI)",
    "Ingeniería Mecatrónica (IME)",
    "Mercadotecnia (LME)",
    "Mercadotecnia y Publicidad (LEMP)",
    "Pedagogía (LPE)",
    "Psicología (LPS)",
    "Relaciones Internacionales (LRI)",
    "Relaciones Internacionales y Ciencias Políticas (RICP)",
    "Relaciones Internacionales y Economía (RIEC)",
  ],
  Bachillerato: ["Bachillerato Bilingüe", "Bachillerato Multicultural"],
  "Secundaria (SIU)": ["Secundaria Bilingüe", "Secundaria Multicultural"],
  Posgrado: [
    "Especialidad en Criminalística (ECR)",
    "Especialidad en Administración de Obra (EAO)",
    "Especialidad en Marketing Digital (EMD)",
    "Especialidad en Publicidad (EPU)",
    "Especialidad en Docencia del Español (EDE)",
    "Maestría en Administración y Dirección (MAD)",
    "Maestría en Educación y Docencia (MED)",
    "Maestría en Gestión de Calidad (MGC)",
    "Maestría en Lenguas (MLE)",
    "Doctorado en Administración (DAD)",
    "Doctorado en Humanidades (DHU)",
  ],
};

const goToStep3 = () => {
  if (isStep2Valid.value) {
    wantsExtraScholarship.value = false;
    currentStep.value = 3;
    if (Number(academicData.value.promedio) < 7.0) {
      showNoticeModal.value = true;
    }
  }
};

// PASO 3: LÓGICA DE BECAS Y FINANZAS
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
  } else if (prom >= 9.0 && prom < 9.8) {
    beca = isPublica ? 35 : 30;
  } else if (prom >= 9.8 && prom < 10.0) {
    beca = isPublica ? 40 : 35;
  } else {
    beca = 40;
  }

  return beca;
});

const basePrice = computed(() => {
  const nivel = academicData.value.nivel;
  const prog = academicData.value.carrera;

  if (nivel === "Secundaria (SIU)") {
    if (prog && prog.includes("Multicultural")) return 7139;
    return 5003;
  }
  if (nivel === "Bachillerato") {
    if (prog && prog.includes("Multicultural")) return 9582;
    return 7290;
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
  return Math.min(45, pct);
});

const discountAmount = computed(() => {
  return basePrice.value * (totalScholarshipPercentage.value / 100);
});

const finalPrice = computed(() => {
  return basePrice.value - discountAmount.value;
});

const whatsappLink = computed(() => {
  const wappNumber = "527774234426";
  const extraInfo = wantsExtraScholarship.value
    ? " (interesado en Beca Cultural/Deportiva)"
    : "";
  const message = `¡Hola! Soy ${leadData.value.nombres} ${leadData.value.apellidos}.
Acabo de cotizar la ${academicData.value.nivel} en ${academicData.value.carrera} mediante la web.
Mi promedio es de ${academicData.value.promedio} y obtuve una beca del *${totalScholarshipPercentage.value}%*${extraInfo}.
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
  <section id="calculadora-becas" class="beca-section">
    <div class="beca-container">
      <!-- LADO IZQUIERDO: Información institucional y beneficios -->
      <div class="beca-info">
        <p class="beca-eyebrow">Apoyo económico</p>
        <h2 class="beca-title">Calcula tu<br /><em>porcentaje de beca</em></h2>
        <p class="beca-desc">
          En UNINTER creemos que el talento no debe tener límites económicos.
          Completa el formulario y descubre de inmediato qué porcentaje de beca
          puedes obtener para iniciar tu licenciatura presencial.
        </p>

        <div class="beca-highlights">
          <div v-for="hl in highlights" :key="hl.label" class="beca-hl">
            <div class="beca-hl__icon">
              <component :is="hl.icon" :size="20" />
            </div>
            <div>
              <p class="beca-hl__value">{{ hl.value }}</p>
              <p class="beca-hl__label">{{ hl.label }}</p>
            </div>
          </div>
        </div>

        <div class="beca-benefits">
          <p class="beca-benefits__heading">Beneficios incluidos con tu beca</p>
          <ul class="beca-benefits__list">
            <li v-for="ben in benefits" :key="ben" class="beca-benefits__item">
              <CheckCircle2 :size="14" class="beca-benefits__check" />
              <span>{{ ben }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- LADO DERECHO: Tarjeta Interactiva con la Lógica de la Calculadora -->
      <div class="beca-form-side">
        <!-- Indicador de pasos -->
        <div class="steps-indicator">
          <div class="step" :class="{ active: currentStep >= 1 }">1</div>
          <div class="step-line" :class="{ active: currentStep >= 2 }"></div>
          <div class="step" :class="{ active: currentStep >= 2 }">2</div>
          <div class="step-line" :class="{ active: currentStep >= 3 }"></div>
          <div class="step" :class="{ active: currentStep >= 3 }">3</div>
        </div>

        <!-- Contenedor del Wizard -->
        <div class="wizard-container">
          <Transition name="slide-fade" mode="out-in">
            <!-- PASO 1: DATOS DEL LEAD -->
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
                  <label class="field-label">Número Celular (WhatsApp)</label>
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
            <div v-else-if="currentStep === 2" class="wizard-step" key="step2">
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
                      <option value="Licenciatura">Licenciatura</option>
                      <option value="Bachillerato">Bachillerato</option>
                      <option value="Secundaria (SIU)">Secundaria (SIU)</option>
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
                        v-for="carrera in carrerasPorNivel[academicData.nivel]"
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
                    placeholder="Ej. Colegio / Preparatoria de Procedencia"
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
              <h4 class="results-title">Aquí está tu propuesta académica</h4>

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

              <!-- Convocatoria extra de beca cultural/deportiva -->
              <div class="extra-scholarship-toggle">
                <label class="toggle-label">
                  <input
                    type="checkbox"
                    v-model="wantsExtraScholarship"
                    class="toggle-checkbox"
                  />
                  <span class="toggle-slider"></span>
                  <div class="toggle-info">
                    <span class="toggle-title"
                      >¿Practicas algún deporte o actividad artística?</span
                    >
                    <span class="toggle-desc">
                      Haz clic aquí para sumar un
                      <strong>+10% de beca</strong> adicional a tu propuesta
                      aplicando a nuestras Becas Culturales y/o Deportivas
                      (Tope: 45%).
                    </span>
                  </div>
                </label>
              </div>

              <a :href="whatsappLink" target="_blank" class="btn-whatsapp">
                <MessageCircle :size="20" />
                ¡Inicia tu proceso con esta beca!
              </a>

              <p class="upsell-text">
                <span
                  v-if="academicData.promedio < 7.0 && !wantsExtraScholarship"
                  style="
                    color: #d84315;
                    font-weight: 700;
                    display: block;
                    margin-bottom: 0.6rem;
                    line-height: 1.4;
                  "
                >
                  ¡Nota importante! Tienes 10% de beca base, pero puedes obtener
                  un porcentaje mayor participando en nuestras convocatorias de
                  Becas Culturales y/o Deportivas.
                </span>
                ¿Tienes un caso especial o buscas un porcentaje mayor?<br />
                <a :href="whatsappLink" target="_blank"
                  >Contacta a un asesor para una evaluación personalizada.</a
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

    <!-- Modal de aviso para promedio < 7.0 -->
    <ClientOnly>
      <Teleport to="body">
        <Transition name="calc-modal-fade">
          <div
            v-if="showNoticeModal"
            class="calc-modal-overlay"
            @click="showNoticeModal = false"
          >
            <div class="calc-modal-card" @click.stop>
              <button
                class="calc-modal-close"
                @click="showNoticeModal = false"
                aria-label="Cerrar modal"
              >
                <Icon name="mdi:close" size="20" />
              </button>
              <div class="calc-modal-header">
                <div class="calc-modal-icon">
                  <Icon name="mdi:information" size="28" />
                </div>
                <h3 class="calc-modal-title">¡Nota importante!</h3>
              </div>
              <p class="calc-modal-text">
                Tienes 10% de beca base, pero puedes obtener un porcentaje mayor
                participando en nuestras convocatorias de
                <strong>Becas Culturales y/o Deportivas</strong>.
              </p>
              <div class="calc-modal-actions">
                <button
                  class="calc-modal-btn"
                  @click="
                    wantsExtraScholarship = true;
                    showNoticeModal = false;
                  "
                >
                  ¡Me interesa! (+10% Beca)
                </button>
                <button
                  class="calc-modal-btn btn-secondary"
                  @click="showNoticeModal = false"
                >
                  Ver propuesta base (10%)
                </button>
              </div>
            </div>
          </div>
        </Transition>
      </Teleport>
    </ClientOnly>
  </section>
</template>

<style scoped>
.beca-section {
  background: linear-gradient(160deg, #0d2f4f, #003b5c 55%, #0073b4);
  overflow: hidden;
  padding: 5.5rem 0;
  position: relative;
}
.beca-section:before {
  background-image:
    radial-gradient(
      circle at 20% 80%,
      hsla(0, 0%, 100%, 0.04) 0,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      hsla(0, 0%, 100%, 0.06) 0,
      transparent 50%
    );
  content: "";
  inset: 0;
  pointer-events: none;
  position: absolute;
}

.beca-container {
  align-items: center;
  display: grid;
  gap: 3.5rem;
  grid-template-columns: 1fr 1.05fr;
  margin: 0 auto;
  max-width: 1240px;
  padding: 0 1.5rem;
  position: relative;
}

/* LADO IZQUIERDO */
.beca-eyebrow {
  color: #ffffff8c;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  margin: 0 0 0.75rem;
  text-transform: uppercase;
}
.beca-title {
  color: #fff;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2.2rem, 3.5vw, 2.9rem);
  font-weight: 800;
  line-height: 1.15;
  margin: 0 0 1.25rem;
}
.beca-title em {
  color: #00b2e3;
  font-style: normal;
}
.beca-desc {
  color: #ffffffb8;
  font-size: 0.98rem;
  line-height: 1.7;
  margin: 0 0 2.25rem;
  max-width: 480px;
}
.beca-highlights {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 2.25rem;
}
.beca-hl {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid hsla(0, 0%, 100%, 0.12);
  border-radius: 12px;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
}
.beca-hl,
.beca-hl__icon {
  align-items: center;
  display: flex;
}
.beca-hl__icon {
  background: rgba(0, 178, 227, 0.18);
  border-radius: 8px;
  color: #00b2e3;
  flex-shrink: 0;
  height: 38px;
  justify-content: center;
  width: 38px;
}
.beca-hl__value {
  color: #fff;
  font-size: 1.05rem;
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
}
.beca-hl__label {
  color: #ffffff8c;
  font-size: 0.7rem;
  margin: 0.15rem 0 0;
}
.beca-benefits__heading {
  color: #ffffff8c;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  margin: 0 0 0.85rem;
  text-transform: uppercase;
}
.beca-benefits__list {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.beca-benefits__item {
  align-items: center;
  color: #ffffffd6;
  display: flex;
  font-size: 0.88rem;
  gap: 0.6rem;
}
.beca-benefits__check {
  color: #34d399;
  flex-shrink: 0;
}

/* LADO DERECHO: CARD DE LA CALCULADORA */
.beca-form-side {
  width: 100%;
  background: #ffffff;
  padding: 2.5rem 2.2rem;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 25px 60px rgba(7, 26, 43, 0.35);
}

/* Indicador de pasos */
.steps-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 1.75rem;
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
  background: #d84315;
  color: #fff;
  border-color: #d84315;
  box-shadow: 0 0 12px rgba(216, 67, 21, 0.35);
}
.step-line {
  height: 2px;
  flex: 1;
  background: #e2e8f0;
  transition: all 0.4s;
}
.step-line.active {
  background: #d84315;
}

/* Wizard */
.wizard-container {
  position: relative;
  min-height: 320px;
}
.step-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 1.25rem;
}
.sleek-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.input-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.field-wrap {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}
.field-label {
  font-size: 0.76rem;
  font-weight: 700;
  color: #475569;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}
.glass-input {
  background: #f8fafc;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  padding: 0.75rem 1rem;
  font-size: 0.92rem;
  color: #1e293b;
  transition: all 0.2s;
  width: 100%;
}
.glass-input:focus {
  outline: none;
  background: #ffffff;
  border-color: #d84315;
  box-shadow: 0 0 0 3px rgba(216, 67, 21, 0.15);
}
.input-group {
  display: flex;
  align-items: center;
  background: #f8fafc;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.2s;
}
.input-group:focus-within {
  border-color: #d84315;
  box-shadow: 0 0 0 3px rgba(216, 67, 21, 0.15);
  background: #fff;
}
.phone-prefix {
  padding: 0 0.75rem;
  font-size: 0.88rem;
  font-weight: 700;
  color: #64748b;
  border-right: 1px solid #cbd5e1;
  background: #f1f5f9;
  height: 100%;
  display: flex;
  align-items: center;
}
.phone-input {
  border: none;
  background: transparent;
}
.phone-input:focus {
  box-shadow: none;
}

/* Radio buttons tipo escuela */
.radio-group-modern {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}
.radio-label {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0.65rem;
  background: #f8fafc;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  font-size: 0.88rem;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  transition: all 0.2s;
}
.radio-label input {
  display: none;
}
.radio-label.selected {
  background: rgba(216, 67, 21, 0.08);
  border-color: #d84315;
  color: #d84315;
  font-weight: 700;
}

/* Slider */
.slider-container {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1rem;
}
.slider-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: #475569;
}
.slider-value {
  font-size: 1.25rem;
  font-weight: 800;
  color: #d84315;
}
.styled-slider {
  width: 100%;
  accent-color: #d84315;
  cursor: pointer;
}
.slider-marks {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: #94a3b8;
  font-weight: 600;
  margin-top: 0.25rem;
}

/* Botones de acción */
.action-row {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}
.btn-cta-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #d84315;
  color: #fff;
  font-size: 0.95rem;
  font-weight: 700;
  padding: 0.85rem 1.5rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.2s;
  flex: 1;
  box-shadow: 0 4px 14px rgba(216, 67, 21, 0.35);
}
.btn-cta-submit:hover:not(:disabled) {
  background: #bf360c;
  transform: translateY(-1px);
}
.btn-cta-submit:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.btn-back {
  background: #f1f5f9;
  color: #475569;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  padding: 0.85rem 1.2rem;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-back:hover {
  background: #e2e8f0;
}

/* PASO 3: RESULTADOS */
.results-step {
  text-align: center;
}
.results-badge {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 800;
  color: #d84315;
  background: rgba(216, 67, 21, 0.1);
  padding: 0.3rem 0.85rem;
  border-radius: 50px;
  margin-bottom: 0.5rem;
}
.results-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 1.25rem;
}
.results-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 1rem;
  text-align: left;
}
.rc-header {
  background: #0f3c61;
  color: #fff;
  padding: 0.75rem 1rem;
  display: flex;
  flex-direction: column;
}
.rc-header span {
  font-size: 0.72rem;
  opacity: 0.8;
  text-transform: uppercase;
}
.rc-header strong {
  font-size: 0.95rem;
}
.rc-body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.rc-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.88rem;
  color: #475569;
}
.strikethrough {
  text-decoration: line-through;
  color: #94a3b8;
}
.discount-badge {
  background: #dcfce7;
  color: #15803d;
  font-weight: 800;
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
  font-size: 0.82rem;
}
.rc-divider {
  height: 1px;
  background: #e2e8f0;
  margin: 0.2rem 0;
}
.final-row {
  font-weight: 800;
  color: #0f3c61;
  font-size: 0.95rem;
}
.final-price {
  font-size: 1.35rem;
  color: #d84315;
  font-weight: 900;
}

/* Toggle Beca Extra */
.extra-scholarship-toggle {
  background: #f0fdf4;
  border: 1px dashed #86efac;
  border-radius: 12px;
  padding: 0.85rem;
  margin-bottom: 1.25rem;
  text-align: left;
}
.toggle-label {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
}
.toggle-checkbox {
  margin-top: 3px;
  accent-color: #16a34a;
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}
.toggle-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.toggle-title {
  font-size: 0.85rem;
  font-weight: 800;
  color: #15803d;
}
.toggle-desc {
  font-size: 0.78rem;
  color: #475569;
  line-height: 1.35;
}

.btn-whatsapp {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #25d366;
  color: #fff;
  font-weight: 800;
  font-size: 0.95rem;
  padding: 0.9rem 1.5rem;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.2s;
  box-shadow: 0 4px 14px rgba(37, 211, 102, 0.4);
}
.btn-whatsapp:hover {
  background: #20ba5a;
  transform: translateY(-2px);
  color: #fff;
}
.upsell-text {
  font-size: 0.78rem;
  color: #64748b;
  margin: 0.85rem 0 0;
  line-height: 1.4;
}
.upsell-text a {
  color: #0f3c61;
  font-weight: 700;
  text-decoration: underline;
}

/* Transición slide-fade */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(15px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-15px);
}

/* Modal < 7.0 */
.calc-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 1.5rem;
}
.calc-modal-card {
  background: #fff;
  border-radius: 20px;
  padding: 2rem;
  max-width: 440px;
  width: 100%;
  position: relative;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}
.calc-modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: #94a3b8;
  cursor: pointer;
}
.calc-modal-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 0.75rem;
}
.calc-modal-icon {
  color: #d84315;
}
.calc-modal-title {
  font-size: 1.2rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0;
}
.calc-modal-text {
  font-size: 0.92rem;
  color: #475569;
  line-height: 1.5;
  margin-bottom: 1.5rem;
}
.calc-modal-actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.calc-modal-btn {
  background: #d84315;
  color: #fff;
  font-weight: 700;
  padding: 0.75rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
}
.calc-modal-btn.btn-secondary {
  background: #f1f5f9;
  color: #475569;
}

@media (max-width: 960px) {
  .beca-container {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
  .beca-desc {
    max-width: 100%;
  }
}

@media (max-width: 600px) {
  .beca-section {
    padding: 3.5rem 0;
  }
  .beca-form-side {
    padding: 1.75rem 1.25rem;
  }
  .input-row {
    grid-template-columns: 1fr;
  }
}
</style>
