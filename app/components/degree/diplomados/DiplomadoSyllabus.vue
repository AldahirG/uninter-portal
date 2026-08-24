<script setup lang="ts">
import { ref, computed } from "vue";
import { Clock, ChevronDown } from "lucide-vue-next";

interface CareerData {
  id?: string;
  name: string;
  slug?: string;
  duracion?: string;
  duration?: string;
  plan?: Record<string, string[]>;
  [key: string]: any;
}

const props = defineProps<{
  data: CareerData;
}>();

// Control de apertura de acordeones (por defecto todos abiertos o reactivos)
const openModules = ref<Record<string, boolean>>({});

// Inicializar todos los módulos como abiertos
if (props.data?.plan) {
  Object.keys(props.data.plan).forEach((key) => {
    openModules.value[key] = true;
  });
}

const toggleModule = (key: string) => {
  openModules.value[key] = !openModules.value[key];
};

// Cálculo inteligente de la duración y dedicación
const durationDetails = computed(() => {
  const dur = (props.data?.duracion || "128 hrs.").trim();

  // Caso 1: Especifica horas numéricas (ej. "128 hrs.", "136 horas", "173 hrs.", "400 hrs.")
  const matchHours = dur.match(/(\d+)\s*(hrs|horas)/i);
  if (matchHours) {
    const hours = parseInt(matchHours[1], 10);
    const weeklyHours = 8;
    const weeks = Math.round(hours / weeklyHours) || 16;
    return {
      tiempo: `${weeks} semanas`,
      subtiempo: `${weeklyHours} hrs. semanales`,
      total: dur,
    };
  }

  // Caso 2: Especifica semestre(s) o año (ej. "1 año (2 semestres)", "1 semestre")
  if (dur.toLowerCase().includes("semestre") || dur.toLowerCase().includes("año")) {
    const isTwo = dur.includes("2") || dur.toLowerCase().includes("1 año") || dur.toLowerCase().includes("2 semestres");
    return {
      tiempo: isTwo ? "2 Semestres" : "1 Semestre",
      subtiempo: isTwo ? "1 año académico" : "16 semanas",
      total: dur,
    };
  }

  // Caso 3: Módulos (ej. "4 Módulos", "5 Módulos")
  if (dur.toLowerCase().includes("módulo") || dur.toLowerCase().includes("modulos")) {
    return {
      tiempo: "16 semanas",
      subtiempo: "A tu propio ritmo",
      total: dur,
    };
  }

  // Caso 4: Días (ej. "36 días")
  if (dur.toLowerCase().includes("día") || dur.toLowerCase().includes("dias")) {
    return {
      tiempo: dur,
      subtiempo: "Modalidad intensiva",
      total: "Intensivo",
    };
  }

  return {
    tiempo: "16 semanas",
    subtiempo: "8 hrs. semanales",
    total: dur,
  };
});
</script>

<template>
  <section id="plan-estudios" class="dp-syllabus-section">
    <div class="uninter-container">
      <!-- ENCABEZADO CENTRADO -->
      <div class="syllabus-header">
        <span class="syllabus-eyebrow">ORDEN PROBABLE</span>
        <h2 class="syllabus-title">
          Plan de <em class="title-accent">Estudios</em>
        </h2>
        <p class="syllabus-desc">
          Explora los módulos diseñados para brindarte competencias prácticas y aplicadas de inmediato.
        </p>
      </div>

      <!-- LISTADO DE MÓDULOS / SEMESTRES EN ACORDEÓN -->
      <div class="syllabus-accordion-wrapper" v-if="data?.plan">
        <div
          v-for="(subjects, moduleName) in data.plan"
          :key="moduleName"
          class="syllabus-card"
          :class="{ 'is-open': openModules[moduleName] !== false }"
        >
          <!-- Encabezado del Módulo (Fondo Naranja Sólido) -->
          <button
            type="button"
            class="syllabus-card__header"
            @click="toggleModule(moduleName as string)"
            :aria-expanded="openModules[moduleName] !== false"
          >
            <span class="syllabus-card__title">{{ moduleName }}</span>
            <ChevronDown
              :size="20"
              class="syllabus-card__chevron"
              :class="{ 'rotate-180': openModules[moduleName] !== false }"
            />
          </button>

          <!-- Contenido del Módulo (Fondo Blanco con Viñetas Naranjas) -->
          <div
            v-show="openModules[moduleName] !== false"
            class="syllabus-card__body"
          >
            <ul class="syllabus-subjects-list">
              <li v-for="(subject, idx) in subjects" :key="idx" class="subject-item">
                <span class="subject-dot"></span>
                <span class="subject-text">{{ subject }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- TARJETA HORIZONTAL: DURACIÓN Y DEDICACIÓN -->
        <div class="duration-dedication-card">
          <div class="duration-dedication-header">
            <Clock :size="22" class="duration-dedication-icon" />
            <h3 class="duration-dedication-title">Duración y Dedicación</h3>
          </div>

          <div class="duration-dedication-grid">
            <!-- Columna Tiempo -->
            <div class="duration-col">
              <span class="duration-col__label">TIEMPO</span>
              <span class="duration-col__val">{{ durationDetails.tiempo }}</span>
              <span class="duration-col__sub">{{ durationDetails.subtiempo }}</span>
            </div>

            <!-- Columna Total -->
            <div class="duration-col duration-col--total">
              <span class="duration-col__label">TOTAL</span>
              <span class="duration-col__val duration-col__val--highlight">
                {{ durationDetails.total }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.dp-syllabus-section {
  background-color: #ffffff;
  padding: 5.5rem 0 6.5rem;
  font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
}

.uninter-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
}

/* ═══ ENCABEZADO ═══ */
.syllabus-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.syllabus-eyebrow {
  display: block;
  color: #ea580c;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 0.6rem;
}

.syllabus-title {
  color: #0f3c61;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2.3rem, 4.2vw, 3.4rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.01em;
  margin: 0 0 1rem 0;
}

.title-accent {
  color: #e26a1b;
  font-style: italic;
  font-family: var(--font-serif, Georgia, serif);
}

.syllabus-desc {
  color: #64748b;
  font-size: 1.02rem;
  line-height: 1.6;
  max-width: 650px;
  margin: 0 auto;
}

/* ═══ CONTENEDOR DE ACORDEONES ═══ */
.syllabus-accordion-wrapper {
  max-width: 880px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

/* ═══ TARJETA DE MÓDULO ═══ */
.syllabus-card {
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
  transition: all 0.25s ease;
}

.syllabus-card__header {
  width: 100%;
  background: #e26a1b;
  color: #ffffff;
  border: none;
  padding: 1.15rem 1.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 800;
  cursor: pointer;
  text-align: left;
  user-select: none;
  transition: background-color 0.2s ease;
}

.syllabus-card__header:hover {
  background: #d85f12;
}

.syllabus-card__title {
  color: #ffffff;
  letter-spacing: 0.01em;
}

.syllabus-card__chevron {
  color: #ffffff;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.syllabus-card__chevron.rotate-180 {
  transform: rotate(180deg);
}

.syllabus-card__body {
  background: #ffffff;
  border: 1.5px solid #fed7aa;
  border-top: none;
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  padding: 2rem 2.25rem;
}

.syllabus-subjects-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.subject-item {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  color: #334155;
  font-size: 0.98rem;
  line-height: 1.55;
}

.subject-dot {
  width: 6px;
  height: 6px;
  background-color: #ea580c;
  border-radius: 50%;
  margin-top: 0.5rem;
  flex-shrink: 0;
}

.subject-text {
  flex-grow: 1;
}

/* ═══ TARJETA HORIZONTAL: DURACIÓN Y DEDICACIÓN ═══ */
.duration-dedication-card {
  background: #ffffff;
  border: 1.5px solid #fed7aa;
  border-radius: 18px;
  padding: 2rem 2.5rem;
  margin-top: 1.5rem;
  box-shadow: 0 6px 20px rgba(234, 88, 12, 0.04);
}

.duration-dedication-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.75rem;
}

.duration-dedication-icon {
  color: #ea580c;
}

.duration-dedication-title {
  color: #ea580c;
  font-size: 1.15rem;
  font-weight: 800;
  margin: 0;
}

.duration-dedication-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
}

.duration-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0.5rem 1rem;
}

.duration-col:first-child {
  border-right: 1.5px solid #fed7aa80;
}

.duration-col__label {
  color: #94a3b8;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
}

.duration-col__val {
  color: #0f3c61;
  font-size: 1.35rem;
  font-weight: 800;
  line-height: 1.2;
}

.duration-col__val--highlight {
  color: #ea580c;
  font-size: 1.9rem;
  font-family: var(--font-serif, Georgia, serif);
  font-weight: 900;
}

.duration-col__sub {
  color: #64748b;
  font-size: 0.85rem;
  margin-top: 0.25rem;
}

/* ═══ RESPONSIVE ═══ */
@media (max-width: 768px) {
  .dp-syllabus-section {
    padding: 4rem 0 5rem;
  }
  .syllabus-card__body {
    padding: 1.5rem 1.25rem;
  }
  .duration-dedication-card {
    padding: 1.5rem 1.25rem;
  }
  .duration-dedication-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .duration-col:first-child {
    border-right: none;
    border-bottom: 1.5px solid #fed7aa80;
    padding-bottom: 1.25rem;
  }
}
</style>
