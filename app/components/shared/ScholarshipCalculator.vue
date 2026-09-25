<script setup lang="ts">
import { ref, computed, watch } from "vue";
import {
  CheckCircle2,
  ArrowRight,
  Calculator,
  MessageCircle,
  School,
  GraduationCap,
  X,
  Info,
} from "lucide-vue-next";

interface Props {
  defaultNivel?:
    | "Licenciatura"
    | "Bachillerato"
    | "Secundaria (SIU)"
    | "Posgrado";
  subType?: "Especialidad" | "Maestría" | "Doctorado";
  title?: string;
  highlightedTitle?: string;
  description?: string;
  benefits?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  defaultNivel: "Licenciatura",
  title: "Calcula tu",
  highlightedTitle: "porcentaje de beca",
});

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
  nivel: props.defaultNivel,
  carrera: "",
  escuelaProcedencia: "",
  tipoEscuela: "Publica", // 'Publica' o 'Privada'
  promedio: 8.0,
});

// Sincronizar si cambia el prop defaultNivel
watch(
  () => props.defaultNivel,
  (newVal) => {
    if (newVal) {
      academicData.value.nivel = newVal;
      academicData.value.carrera = "";
    }
  },
);

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
    "Especialidad en Administración de Obra (EAO)",
    "Especialidad en Administración de la Tecnología (EATL)",
    "Especialidad en Animación y Post-Producción Digital (EAPD)",
    "Especialidad en Marketing Digital (EMD)",
    "Especialidad en Publicidad (EPU)",
    "Especialidad en Relaciones Mercantiles Internacionales (ERMI)",
    "Especialidad en Criminalística (ECR)",
    "Especialidad en Valuación Inmobiliaria (EVI)",
    "Especialidad en Docencia del Español (EDE)",
    "Maestría en Administración y Dirección de Empresas (MADE)",
    "Maestría en Administración y Dirección en Línea (MADEL)",
    "Maestría en Gestión de la Calidad (MGC)",
    "Maestría en Redes de Computadoras y Tecnologías Web (MARET)",
    "Maestría en Educación y Docencia (MED)",
    "Maestría en Lenguas (MLE)",
    "Doctorado en Administración (DA)",
    "Doctorado en Humanidades (DH)",
  ],
};

const availablePrograms = computed(() => {
  const list = carrerasPorNivel[academicData.value.nivel] || [];
  if (academicData.value.nivel === "Posgrado" && props.subType) {
    const matching = list.filter((p) => p.startsWith(props.subType!));
    const others = list.filter((p) => !p.startsWith(props.subType!));
    return [...matching, ...others];
  }
  return list;
});

const isStep2Valid = computed(() => {
  return (
    academicData.value.carrera !== "" &&
    academicData.value.escuelaProcedencia.trim().length > 0
  );
});

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
  const article =
    academicData.value.nivel === "Licenciatura" ||
    academicData.value.nivel.includes("Secundaria")
      ? "la"
      : "el";
  const message = `¡Hola! Soy ${leadData.value.nombres} ${leadData.value.apellidos}.
Acabo de cotizar ${article} ${academicData.value.nivel} en ${academicData.value.carrera} mediante la web.
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

// ==========================================
// TEMA Y COLORES INTEGRADOS POR NIVEL & SUBTYPE
// ==========================================
const currentThemeClass = computed(() => {
  const nivel = academicData.value.nivel;
  if (nivel === "Bachillerato") return "beca-section--bachillerato";
  if (nivel === "Secundaria (SIU)") return "beca-section--secundaria";
  if (nivel === "Posgrado") {
    if (props.subType === "Maestría") return "beca-section--maestria";
    if (props.subType === "Doctorado") return "beca-section--doctorado";
    return "beca-section--especialidad";
  }
  return "beca-section--licenciatura";
});

// TEXTOS ADAPTABLES
const eyebrowText = computed(() => {
  if (academicData.value.nivel === "Secundaria (SIU)")
    return "Apoyo económico Secundaria SIU";
  if (academicData.value.nivel === "Bachillerato")
    return "Apoyo económico Bachillerato BIU";
  if (academicData.value.nivel === "Posgrado") {
    if (props.subType === "Especialidad")
      return "Apoyo económico Especialidades";
    if (props.subType === "Maestría") return "Apoyo económico Maestrías";
    if (props.subType === "Doctorado") return "Apoyo económico Doctorados";
    return "Apoyo económico Posgrados";
  }
  return "Apoyo económico Licenciaturas";
});

const displayDesc = computed(() => {
  if (props.description) return props.description;
  if (academicData.value.nivel === "Secundaria (SIU)") {
    return "En SIU UNINTER creemos que el talento no debe tener límites económicos. Completa el formulario y descubre de inmediato qué porcentaje de beca puedes obtener para iniciar en secundaria.";
  }
  if (academicData.value.nivel === "Bachillerato") {
    return "En BIU UNINTER creemos que el talento no debe tener límites económicos. Completa el formulario y descubre de inmediato qué porcentaje de beca puedes obtener para iniciar tu bachillerato.";
  }
  if (academicData.value.nivel === "Posgrado") {
    if (props.subType === "Especialidad") {
      return "En UNINTER Posgrados impulsamos tu especialización ejecutiva. Completa el formulario y descubre de inmediato qué porcentaje de beca puedes obtener para tu especialidad.";
    }
    if (props.subType === "Maestría") {
      return "En UNINTER Posgrados impulsamos tu alta dirección y maestría. Completa el formulario y descubre de inmediato qué porcentaje de beca puedes obtener para tu maestría.";
    }
    if (props.subType === "Doctorado") {
      return "En UNINTER Posgrados impulsamos tu liderazgo científico y doctoral. Completa el formulario y descubre de inmediato qué porcentaje de beca puedes obtener para tu doctorado.";
    }
    return "En UNINTER creemos que el talento no debe tener límites económicos. Completa el formulario y descubre de inmediato qué porcentaje de beca puedes obtener para iniciar tu posgrado.";
  }
  return "En UNINTER creemos que el talento no debe tener límites económicos. Completa el formulario y descubre de inmediato qué porcentaje de beca puedes obtener para iniciar tus estudios.";
});

const displayBenefits = computed(() => {
  if (props.benefits && props.benefits.length > 0) {
    return props.benefits;
  }
  if (academicData.value.nivel === "Secundaria (SIU)") {
    return [
      "Colegiatura mensual con descuento garantizado",
      "Formación bilingüe y multicultural integral",
      "Acceso a instalaciones, laboratorios y canchas deportivas",
      "Acompañamiento psicopedagógico y tutoría continua",
      "Talleres artísticos, culturales y deportivos incluidos",
    ];
  }
  if (academicData.value.nivel === "Bachillerato") {
    return [
      "Colegiatura mensual con descuento garantizado",
      "Acceso a laboratorios especializados y campus universitario",
      "Programas de movilidad internacional y clases de idiomas",
      "Orientación vocacional y vinculación universitaria",
      "Talleres deportivos, culturales y de liderazgo incluidos",
    ];
  }
  if (academicData.value.nivel === "Posgrado") {
    if (props.subType === "Especialidad") {
      return [
        "Colegiatura mensual con descuento garantizado",
        "Programas ágiles de 1 año con Validez Oficial SEP",
        "Claustro docente activo en el sector corporativo",
        "Networking profesional de alto impacto",
        "Flexibilidad de horarios para profesionistas activos",
      ];
    }
    if (props.subType === "Maestría") {
      return [
        "Colegiatura mensual con descuento garantizado",
        "Opciones de Doble Grado y titulación ágil",
        "Enfoque en alta dirección, consultoría y negocios",
        "Acceso a plataformas digitales de investigación",
        "Modalidades ejecutivas presenciales y en línea",
      ];
    }
    if (props.subType === "Doctorado") {
      return [
        "Colegiatura mensual con descuento garantizado",
        "Cotutoría y convenios de investigación internacional",
        "Acompañamiento tutorial para publicación de tesis",
        "Profesores investigadores del Sistema Nacional (SNI)",
        "Redes globales de investigación aplicada y humanidades",
      ];
    }
    return [
      "Colegiatura mensual con descuento garantizado",
      "Acceso a plataformas digitales de investigación y bibliotecas",
      "Red de vinculación profesional y claustro de alto nivel",
      "Opciones de titulación ágiles y doble grado internacional",
      "Flexibilidad de horarios y modalidades ejecutivas",
    ];
  }
  return [
    "Colegiatura mensual con descuento garantizado",
    "Acceso a instalaciones y laboratorios de clase mundial",
    "Movilidad e intercambio internacional con más de 20 países",
    "Bolsa de trabajo Enlace Profesional UNINTER",
    "Talleres deportivos y culturales incluidos",
  ];
});
</script>

<template>
  <section
    id="calculadora-becas"
    class="beca-section"
    :class="currentThemeClass"
  >
    <div class="beca-container">
      <!-- LADO IZQUIERDO: Información institucional y beneficios (Sin el bloque de 4 estadísticas fijas) -->
      <div class="beca-info">
        <p class="beca-eyebrow">{{ eyebrowText }}</p>
        <h2 class="beca-title">
          {{ title }}<br />
          <em>{{ highlightedTitle }}</em>
        </h2>
        <p class="beca-desc">
          {{ displayDesc }}
        </p>

        <div class="beca-benefits">
          <p class="beca-benefits__heading">Beneficios incluidos con tu beca</p>
          <ul class="beca-benefits__list">
            <li
              v-for="ben in displayBenefits"
              :key="ben"
              class="beca-benefits__item"
            >
              <CheckCircle2 :size="18" class="beca-benefits__check" />
              <span>{{ ben }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- LADO DERECHO: Tarjeta Interactiva con el Wizard de la Calculadora -->
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
                        v-for="carrera in availablePrograms"
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
                <X :size="20" />
              </button>
              <div class="calc-modal-header">
                <div class="calc-modal-icon">
                  <Info :size="28" />
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
/* ==========================================
   TEMAS Y PALETAS DINÁMICAS POR NIVEL
   ========================================== */

/* 1. Licenciaturas (Azul Marino UNINTER & Cyan) */
.beca-section--licenciatura {
  --theme-bg: linear-gradient(160deg, #0d2f4f 0%, #003b5c 55%, #0073b4 100%);
  --theme-accent: #00b2e3;
  --theme-check: #00b2e3;
  --theme-btn-bg: linear-gradient(135deg, #f05a28 0%, #d84315 100%);
  --theme-btn-hover: #bf360c;
  --theme-btn-shadow: rgba(216, 67, 21, 0.35);
  --theme-slider: #d84315;
  --theme-border-hover: rgba(0, 178, 227, 0.4);
}

/* 2. Bachillerato BIU (Verde Bosque Profundo & Limonero BIU) */
.beca-section--bachillerato {
  --theme-bg: linear-gradient(160deg, #081d10 0%, #123019 50%, #1e4a26 100%);
  --theme-accent: #8ae638;
  --theme-check: #8ae638;
  --theme-btn-bg: linear-gradient(135deg, #65a30d 0%, #4d7c0f 100%);
  --theme-btn-hover: #3f6212;
  --theme-btn-shadow: rgba(101, 163, 13, 0.35);
  --theme-slider: #65a30d;
  --theme-border-hover: rgba(138, 230, 56, 0.4);
}

/* 3. Secundaria SIU (Carbón Marino & Ámbar Dorado SIU) */
.beca-section--secundaria {
  --theme-bg: linear-gradient(160deg, #0561bd 0%, #3f7ab5 50%, #d19b12 100%);
  --theme-accent: #ffce52;
  --theme-check: #ffce52;
  --theme-btn-bg: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  --theme-btn-hover: #b45309;
  --theme-btn-shadow: rgba(217, 119, 6, 0.35);
  --theme-slider: #d97706;
  --theme-border-hover: rgba(255, 206, 82, 0.4);
}

/* 4. Especialidades (Verde Olivo Ejecutivo & Oro Mate) */
.beca-section--especialidad {
  --theme-bg: linear-gradient(160deg, #0e1a12 0%, #1a2c1e 50%, #2f3e1b 100%);
  --theme-accent: #d4dc69;
  --theme-check: #d4dc69;
  --theme-btn-bg: linear-gradient(135deg, #8d8f38 0%, #6e7025 100%);
  --theme-btn-hover: #585a1c;
  --theme-btn-shadow: rgba(141, 143, 56, 0.35);
  --theme-slider: #8d8f38;
  --theme-border-hover: rgba(212, 220, 105, 0.4);
}

/* 5. Maestrías (Azul Noche Zafiro & Cyan Ejecutivo) */
.beca-section--maestria {
  --theme-bg: linear-gradient(160deg, #0e1a12 0%, #1a2c1e 50%, #2f3e1b 100%);
  --theme-accent: #d4dc69;
  --theme-check: #d4dc69;
  --theme-btn-bg: linear-gradient(135deg, #8d8f38 0%, #6e7025 100%);
  --theme-btn-hover: #585a1c;
  --theme-btn-shadow: rgba(141, 143, 56, 0.35);
  --theme-slider: #8d8f38;
  --theme-border-hover: rgba(212, 220, 105, 0.4);
}

/* 6. Doctorados (Borgoña / Púrpura Doctoral & Oro Académico) */
.beca-section--doctorado {
  --theme-bg: linear-gradient(160deg, #0e1a12 0%, #1a2c1e 50%, #2f3e1b 100%);
  --theme-accent: #d4dc69;
  --theme-check: #d4dc69;
  --theme-btn-bg: linear-gradient(135deg, #8d8f38 0%, #6e7025 100%);
  --theme-btn-hover: #585a1c;
  --theme-btn-shadow: rgba(141, 143, 56, 0.35);
  --theme-slider: #8d8f38;
  --theme-border-hover: rgba(212, 220, 105, 0.4);
}

/* ==========================================
   ESTILOS GENERALES DE LA SECCIÓN
   ========================================== */
.beca-section {
  background: var(
    --theme-bg,
    linear-gradient(160deg, #0d2f4f, #003b5c 55%, #0073b4)
  );
  overflow: hidden;
  padding: 5.5rem 0;
  position: relative;
  transition: background 0.4s ease;
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
  color: var(--theme-accent, #00b2e3);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  margin: 0 0 0.75rem;
  text-transform: uppercase;
  transition: color 0.3s ease;
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
  color: var(--theme-accent, #00b2e3);
  font-style: normal;
  transition: color 0.3s ease;
}
.beca-desc {
  color: #ffffffb8;
  font-size: 0.98rem;
  line-height: 1.7;
  margin: 0 0 2.25rem;
  max-width: 480px;
}

.beca-benefits__heading {
  color: #ffffff8c;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  margin: 0 0 1rem;
  text-transform: uppercase;
}
.beca-benefits__list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.beca-benefits__item {
  align-items: center;
  color: #ffffffed;
  display: flex;
  font-size: 0.92rem;
  line-height: 1.4;
  gap: 0.8rem;
  padding: 0.75rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 12px;
  backdrop-filter: blur(4px);
  transition: all 0.25s ease;
}
.beca-benefits__item:hover {
  background: rgba(255, 255, 255, 0.09);
  border-color: var(--theme-border-hover, rgba(0, 178, 227, 0.35));
  transform: translateX(4px);
}
.beca-benefits__check {
  color: var(--theme-check, #00b2e3);
  flex-shrink: 0;
  transition: color 0.3s ease;
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
  background: var(--theme-slider, #d84315);
  color: #fff;
  border-color: var(--theme-slider, #d84315);
  box-shadow: 0 0 12px var(--theme-btn-shadow, rgba(216, 67, 21, 0.35));
  transition: all 0.3s ease;
}
.step-line {
  height: 2px;
  flex: 1;
  background: #e2e8f0;
  transition: all 0.4s;
}
.step-line.active {
  background: var(--theme-slider, #d84315);
  transition: background 0.3s ease;
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
  border-color: var(--theme-slider, #d84315);
  box-shadow: 0 0 0 3px var(--theme-btn-shadow, rgba(216, 67, 21, 0.15));
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
  border-color: var(--theme-slider, #d84315);
  box-shadow: 0 0 0 3px var(--theme-btn-shadow, rgba(216, 67, 21, 0.15));
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
  padding: 0.75rem 1rem;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 700;
  font-size: 0.88rem;
  color: #475569;
  background: #f8fafc;
  transition: all 0.2s;
}
.radio-label input {
  display: none;
}
.radio-label:hover {
  background: #f1f5f9;
  border-color: #94a3b8;
}
.radio-label.selected {
  background: #fff;
  border-color: var(--theme-slider, #d84315);
  color: var(--theme-slider, #d84315);
  box-shadow: 0 4px 12px var(--theme-btn-shadow, rgba(216, 67, 21, 0.12));
}

/* Slider */
.slider-container {
  background: #f8fafc;
  border: 1px solid #cbd5e1;
  border-radius: 12px;
  padding: 1rem 1.25rem;
}
.slider-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
  font-size: 0.88rem;
  font-weight: 700;
  color: #1e293b;
}
.slider-value {
  font-size: 1.15rem;
  color: var(--theme-slider, #d84315);
  font-weight: 800;
}
.styled-slider {
  -webkit-appearance: none;
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #e2e8f0;
  outline: none;
}
.styled-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--theme-slider, #d84315);
  cursor: pointer;
  box-shadow: 0 0 10px var(--theme-btn-shadow, rgba(216, 67, 21, 0.4));
  transition: transform 0.1s;
}
.styled-slider::-webkit-slider-thumb:hover {
  transform: scale(1.15);
}
.slider-marks {
  display: flex;
  justify-content: space-between;
  font-size: 0.72rem;
  color: #94a3b8;
  margin-top: 0.5rem;
  font-weight: 600;
}

/* Botones Wizard */
.btn-cta-submit {
  background: var(
    --theme-btn-bg,
    linear-gradient(135deg, #f05a28 0%, #d84315 100%)
  );
  color: #ffffff;
  padding: 0.9rem 1.5rem;
  border-radius: 10px;
  border: none;
  font-weight: 700;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.3s;
  box-shadow: 0 10px 20px var(--theme-btn-shadow, rgba(216, 67, 21, 0.25));
  margin-top: 0.5rem;
}
.btn-cta-submit:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px var(--theme-btn-shadow, rgba(216, 67, 21, 0.35));
  filter: brightness(1.08);
}
.btn-cta-submit:disabled {
  opacity: 0.45;
  cursor: not-allowed;
  box-shadow: none;
}
.submit-arrow {
  transition: transform 0.2s;
}
.btn-cta-submit:hover .submit-arrow {
  transform: translateX(4px);
}
.action-row {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.btn-back {
  background: #f1f5f9;
  border: 1px solid #cbd5e1;
  padding: 0.9rem 1.25rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.9rem;
  color: #475569;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-back:hover {
  background: #e2e8f0;
  color: #1e293b;
}

/* PASO 3: RESULTADOS */
.results-badge {
  display: inline-block;
  background: #dcfce7;
  color: #166534;
  padding: 0.35rem 0.85rem;
  border-radius: 20px;
  font-size: 0.82rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}
.results-title {
  font-size: 1.35rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 1.25rem;
}
.results-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 1.25rem;
}
.rc-header {
  background: #0f3c61;
  color: #fff;
  padding: 0.85rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.rc-header span {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #94a3b8;
}
.rc-header strong {
  font-size: 0.95rem;
}
.rc-body {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.rc-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: #64748b;
}
.strikethrough {
  text-decoration: line-through;
  color: #94a3b8;
}
.highlight-row {
  font-weight: 700;
  color: #1e293b;
}
.discount-badge {
  background: #dcfce7;
  color: #166534;
  padding: 0.2rem 0.6rem;
  border-radius: 6px;
  font-weight: 800;
}
.rc-divider {
  height: 1px;
  background: #e2e8f0;
  margin: 0.25rem 0;
}
.final-row {
  font-size: 1.05rem;
  font-weight: 800;
  color: #0f3c61;
}
.final-price {
  font-size: 1.45rem;
  color: var(--theme-slider, #d84315);
}

/* Extra Beca Toggle */
.extra-scholarship-toggle {
  background: #fff;
  border: 1px solid #fed7aa;
  border-radius: 12px;
  padding: 0.85rem 1rem;
  margin-bottom: 1.25rem;
}
.toggle-label {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  cursor: pointer;
}
.toggle-checkbox {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}
.toggle-slider {
  width: 42px;
  height: 24px;
  background: #cbd5e1;
  border-radius: 24px;
  position: relative;
  transition: 0.3s;
  flex-shrink: 0;
  margin-top: 2px;
}
.toggle-slider:before {
  content: "";
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #fff;
  top: 3px;
  left: 3px;
  transition: 0.3s;
}
.toggle-checkbox:checked + .toggle-slider {
  background: var(--theme-slider, #d84315);
}
.toggle-checkbox:checked + .toggle-slider:before {
  transform: translateX(18px);
}
.toggle-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.toggle-title {
  font-size: 0.85rem;
  font-weight: 800;
  color: #1e293b;
}
.toggle-desc {
  font-size: 0.76rem;
  color: #64748b;
  line-height: 1.4;
}

/* Botón WhatsApp */
.btn-whatsapp {
  background: #25d366;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0.95rem;
  border-radius: 12px;
  font-weight: 800;
  font-size: 0.95rem;
  text-decoration: none;
  box-shadow: 0 10px 20px rgba(37, 211, 102, 0.25);
  transition: all 0.3s;
  margin-bottom: 1rem;
}
.btn-whatsapp:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 28px rgba(37, 211, 102, 0.35);
  background: #20ba5a;
}
.upsell-text {
  font-size: 0.78rem;
  color: #64748b;
  text-align: center;
  line-height: 1.5;
  margin: 0;
}
.upsell-text a {
  color: #0f3c61;
  font-weight: 700;
  text-decoration: underline;
}

/* Animaciones Transición Wizard */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* Modal Aviso */
.calc-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.65);
  backdrop-filter: blur(4px);
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}
.calc-modal-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 2rem;
  max-width: 440px;
  width: 100%;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
.calc-modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 6px;
}
.calc-modal-close:hover {
  color: #1e293b;
  background: #f1f5f9;
}
.calc-modal-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 0.75rem;
}
.calc-modal-icon {
  color: var(--theme-slider, #d84315);
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
  background: var(--theme-slider, #d84315);
  color: #fff;
  font-weight: 700;
  padding: 0.75rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition:
    background-color 0.2s,
    filter 0.2s;
}
.calc-modal-btn:hover {
  filter: brightness(0.9);
}
.calc-modal-btn.btn-secondary {
  background: #f1f5f9;
  color: #475569;
}
.calc-modal-btn.btn-secondary:hover {
  background: #e2e8f0;
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
