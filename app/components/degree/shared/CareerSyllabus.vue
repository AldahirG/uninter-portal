<script setup lang="ts">
import { ref, computed, defineProps, watch } from "vue";
import { BookText, ChevronRight, GraduationCap } from "lucide-vue-next";

// Importar todos los syllabus
import syllabusLCO from "~/assets/data/syllabus-lco.json";
import syllabusLRI from "~/assets/data/syllabus-lri.json";
import syllabusLED from "~/assets/data/syllabus-led.json";
import syllabusARQ from "~/assets/data/syllabus-arq.json";
import syllabusLDG from "~/assets/data/syllabus-ldg.json";
import syllabusIME from "~/assets/data/syllabus-ime.json";
import syllabusISC from "~/assets/data/syllabus-isc.json";
import syllabusLME from "~/assets/data/syllabus-lme.json";
import syllabusLAE from "~/assets/data/syllabus-lae.json";
import syllabusCORP from "~/assets/data/syllabus-corp.json";
import syllabusRICP from "~/assets/data/syllabus-ricp.json";
import syllabusRIEC from "~/assets/data/syllabus-riec.json";
import syllabusLCP from "~/assets/data/syllabus-lcp.json";
import syllabusLID from "~/assets/data/syllabus-lid.json";
import syllabusLPE from "~/assets/data/syllabus-lpe.json";
import syllabusLPS from "~/assets/data/syllabus-lps.json";
import syllabusLADD from "~/assets/data/syllabus-ladd.json";
import syllabusLDI from "~/assets/data/syllabus-ldi.json";
import syllabusLDM from "~/assets/data/syllabus-ldm.json";

// Mapa de syllabus por ID de carrera
const syllabusMap: Record<string, any> = {
  LCO: syllabusLCO,
  LRI: syllabusLRI,
  LED: syllabusLED,
  ARQ: syllabusARQ,
  LDG: syllabusLDG,
  IME: syllabusIME,
  ISC: syllabusISC,
  LME: syllabusLME,
  LAE: syllabusLAE,
  CORP: syllabusCORP,
  RICP: syllabusRICP,
  RIEC: syllabusRIEC,
  LCP: syllabusLCP,
  LID: syllabusLID,
  LPE: syllabusLPE,
  LPS: syllabusLPS,
  LADD: syllabusLADD,
  LDI: syllabusLDI,
  LDM: syllabusLDM,
};

// Props
const props = defineProps<{
  careerId: string;
}>();

// Syllabus activo basado en la carrera
const currentSyllabus = computed(() => {
  return syllabusMap[props.careerId] || syllabusLCO;
});

const categories = computed(() => currentSyllabus.value.categories);
const syllabusData = computed(() => currentSyllabus.value.syllabus);

// Estado de la pestaña activa
const activeTabIndex = ref(0);

// Resetear tab cuando cambia la carrera
watch(() => props.careerId, () => {
  activeTabIndex.value = 0;
  selectedCategory.value = "all";
});

// Estado del filtro de área de interés
const selectedCategory = ref("all");

// Variable computada segura para evitar el error de TS
const activeTabBlocks = computed(() => {
  return syllabusData.value[activeTabIndex.value]?.blocks || [];
});

// Helper function to check category class
const getSubjectCategoryClass = (subject: any) => {
  return subject.tag || "general";
};

// Helper function to check if highlighted
const isSubjectHighlighted = (subject: any) => {
  if (selectedCategory.value === "all") return false;
  return subject.tag === selectedCategory.value;
};

// Helper function to check if dimmed
const isSubjectDimmed = (subject: any) => {
  if (selectedCategory.value === "all") return false;
  return subject.tag !== selectedCategory.value;
};
</script>

<template>
  <section class="career-syllabus-section" id="plan-estudios">
    <div class="uninter-container">
      <div class="syllabus-header animate-header">
        <span class="eyebrow">Posible</span>
        <h2 class="section-title">
          Plan de <em class="title-accent">Estudios</em>
        </h2>
        <p class="section-desc">
          Explora las materias que cursarás a lo largo de tu licenciatura. Un
          programa diseñado para hacerte destacar en el mundo real.
        </p>
      </div>

      <div class="syllabus-layout">
        <!-- Barra Lateral con Semestres -->
        <div class="syllabus-sidebar stagger-1">
          <div class="tabs-wrapper mobile-scroll">
            <button
              v-for="(tab, index) in syllabusData"
              :key="tab.id"
              class="tab-btn"
              :class="{ 'is-active': activeTabIndex === index }"
              @click="activeTabIndex = index"
            >
              <div class="tab-content">
                <span class="tab-number">0{{ index + 1 }}</span>
                <span class="tab-label">{{ tab.tabLabel }}</span>
              </div>
              <ChevronRight :size="18" class="tab-arrow" />
            </button>
          </div>

          <div class="sidebar-info-card dark-authority-card">
            <div class="icon-glow">
              <GraduationCap :size="28" class="info-icon-white" />
            </div>
            <h4>Titulación Integral</h4>
            <p>
              Al concluir el 100% de tus créditos, podrás acceder a nuestras
              múltiples opciones de titulación de excelencia profesional.
            </p>
          </div>
        </div>

        <!-- Contenedor Principal de Materias -->
        <div class="syllabus-content stagger-2">
          <!-- Filtros de Áreas de Interés (Innovación Interactiva) -->
          <div class="syllabus-filters-wrapper">
            <span class="filter-title">Visualizar por tu área de interés:</span>
            <div class="filter-chips">
              <button
                v-for="cat in categories"
                :key="cat.value"
                class="filter-chip"
                :class="{
                  'is-active': selectedCategory === cat.value,
                  [cat.value]: true,
                }"
                @click="selectedCategory = cat.value"
              >
                {{ cat.label }}
              </button>
            </div>
          </div>

          <Transition name="slide-fade" mode="out-in">
            <div :key="activeTabIndex" class="content-blocks-wrapper">
              <div
                v-for="(block, bIndex) in activeTabBlocks"
                :key="'block-' + bIndex"
                class="semester-block"
              >
                <div class="semester-header">
                  <h3>{{ block.title }}</h3>
                  <span class="subject-count"
                    >{{ block.subjects.length }} Materias</span
                  >
                </div>

                <ul class="subjects-list">
                  <li
                    v-for="(subject, sIndex) in block.subjects"
                    :key="'subj-' + sIndex"
                    class="subject-item interactive-lift"
                    :class="{
                      'is-dimmed': isSubjectDimmed(subject),
                      'is-highlighted': isSubjectHighlighted(subject),
                      [getSubjectCategoryClass(subject)]: true,
                    }"
                  >
                    <div
                      class="subject-tag-dot"
                      :class="getSubjectCategoryClass(subject)"
                    ></div>
                    <BookText :size="18" class="subject-icon" />
                    <span>{{ subject.name }}</span>
                  </li>
                </ul>
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
   CONTENEDOR BASE
========================================================= */
.career-syllabus-section {
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
.stagger-1 {
  animation: fadeUpIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
  opacity: 0;
}
.stagger-2 {
  animation: fadeUpIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
  opacity: 0;
}

/* =========================================================
   ENCABEZADO
========================================================= */
.syllabus-header {
  margin-bottom: 4rem;
  text-align: center;
  max-width: 600px;
  margin-inline: auto;
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
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 1rem 0;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.title-accent {
  color: #d84315;
  font-style: italic;
  position: relative;
  display: inline-block;
}
.title-accent::after {
  content: "";
  position: absolute;
  bottom: 6px;
  left: 0;
  width: 100%;
  height: 8px;
  background-color: rgba(216, 67, 21, 0.15);
  z-index: -1;
  transform: rotate(-2deg);
}

.section-desc {
  font-size: 1.05rem;
  color: #475569;
  line-height: 1.6;
  margin: 0;
}

/* =========================================================
   LAYOUT PRINCIPAL
========================================================= */
.syllabus-layout {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 3rem;
  align-items: start;
}

/* =========================================================
   SIDEBAR Y PESTAÑAS (Interactivas)
========================================================= */
.syllabus-sidebar {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: sticky;
  top: 120px;
}

.tabs-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tab-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: transparent;
  border: 1px solid transparent;
  padding: 1.25rem 1.5rem;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  text-align: left;
  position: relative;
  overflow: hidden;
}

.tab-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
  z-index: 2;
}

.tab-number {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: 1.2rem;
  font-weight: 800;
  color: #94a3b8;
  transition: color 0.3s;
}

.tab-label {
  font-size: 1.05rem;
  font-weight: 600;
  color: #475569;
  transition: color 0.3s;
}

.tab-arrow {
  color: #94a3b8;
  transition: all 0.3s;
  transform: translateX(-10px);
  opacity: 0;
  position: relative;
  z-index: 2;
}

/* Estado Hover (Pestaña inactiva) */
.tab-btn:hover:not(.is-active) {
  background: #ffffff;
  border-color: #e2e8f0;
  transform: translateX(5px);
}
.tab-btn:hover:not(.is-active) .tab-arrow {
  opacity: 1;
  transform: translateX(0);
  color: #1565c0;
}
.tab-btn:hover:not(.is-active) .tab-number {
  color: #1565c0;
}

/* ESTADO ACTIVO */
.tab-btn.is-active {
  background: #ffffff;
  border-color: #e2e8f0;
  box-shadow: 0 15px 30px -10px rgba(15, 60, 97, 0.1);
  transform: scale(1.02);
}
.tab-btn.is-active::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 4px;
  background-color: #d84315;
  border-radius: 4px 0 0 4px;
}
.tab-btn.is-active .tab-number {
  color: #d84315;
}
.tab-btn.is-active .tab-label {
  color: #0f3c61;
  font-weight: 700;
}
.tab-btn.is-active .tab-arrow {
  color: #1565c0;
  opacity: 1;
  transform: translateX(0);
}

/* TARJETA DE AUTORIDAD (Dark Mode Inmersivo) */
.dark-authority-card {
  background: linear-gradient(135deg, #0f3c61, #1565c0);
  border-radius: 20px;
  padding: 2.25rem 2rem;
  color: #ffffff;
  box-shadow: 0 20px 40px -10px rgba(15, 60, 97, 0.3);
  position: relative;
  overflow: hidden;
}
.dark-authority-card::after {
  content: "";
  position: absolute;
  top: -50px;
  right: -50px;
  width: 150px;
  height: 150px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.15) 0%,
    transparent 70%
  );
  border-radius: 50%;
}
.icon-glow {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.info-icon-white {
  color: #fde68a;
}
.sidebar-info-card h4 {
  font-size: 1.15rem;
  font-weight: 800;
  margin: 0 0 0.5rem 0;
  letter-spacing: 0.02em;
}
.sidebar-info-card p {
  font-size: 0.92rem;
  color: #cbd5e1;
  margin: 0;
  line-height: 1.6;
  position: relative;
  z-index: 1;
}

/* =========================================================
   CONTENIDO PRINCIPAL (LAS MATERIAS)
========================================================= */
.syllabus-content {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 30px;
  padding: 3.5rem;
  min-height: 400px;
  box-shadow: 0 10px 30px -15px rgba(0, 0, 0, 0.05);
}

/* Estilos de los Filtros */
.syllabus-filters-wrapper {
  margin-bottom: 3rem;
  background: #f8fafc;
  padding: 1.5rem 2rem;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
}
.filter-title {
  display: block;
  font-size: 0.85rem;
  font-weight: 800;
  color: #0f3c61;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1rem;
}
.filter-chips {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.filter-chip {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 0.6rem 1.1rem;
  border-radius: 99px;
  font-size: 0.85rem;
  font-weight: 700;
  color: #475569;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.filter-chip:hover {
  background: #f1f5f9;
  border-color: #cbd5e1;
  color: #0f3c61;
  transform: translateY(-2px);
}
.filter-chip.is-active {
  background-color: #0f3c61;
  border-color: #0f3c61;
  color: #ffffff;
  box-shadow: 0 5px 15px rgba(15, 60, 97, 0.25);
}
.filter-chip.is-active.all {
  background-color: #0f3c61;
  border-color: #0f3c61;
  box-shadow: 0 5px 15px rgba(15, 60, 97, 0.25);
}
.filter-chip.is-active.audiovisual {
  background-color: #d84315;
  border-color: #d84315;
  box-shadow: 0 5px 15px rgba(216, 67, 21, 0.25);
}
.filter-chip.is-active.periodismo {
  background-color: #1565c0;
  border-color: #1565c0;
  box-shadow: 0 5px 15px rgba(21, 101, 192, 0.25);
}
.filter-chip.is-active.marketing {
  background-color: #10b981;
  border-color: #10b981;
  box-shadow: 0 5px 15px rgba(16, 185, 129, 0.25);
}
.filter-chip.is-active.general {
  background-color: #64748b;
  border-color: #64748b;
  box-shadow: 0 5px 15px rgba(100, 116, 139, 0.25);
}

.content-blocks-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.5rem;
}

.semester-block {
  transition: opacity 0.4s ease;
}

.semester-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 1rem;
  margin-bottom: 2rem;
}
.semester-header h3 {
  font-size: 1.3rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0;
}
.subject-count {
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  color: #64748b;
}

/* =========================================================
   ASIGNATURAS CON EFECTOS DE SELECCIÓN Y COLOR
========================================================= */
.subjects-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.subject-item {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 0.95rem;
  color: #334155;
  line-height: 1.5;
  background: #f8fafc;
  padding: 1.1rem 1.3rem;
  border-radius: 14px;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.subject-tag-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: #1565c0;
}
.subject-tag-dot.audiovisual {
  background-color: #d84315;
}
.subject-tag-dot.periodismo {
  background-color: #1565c0;
}
.subject-tag-dot.marketing {
  background-color: #10b981;
}
.subject-tag-dot.general {
  background-color: #94a3b8;
}

.interactive-lift::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 4px;
  background-color: #d84315;
  transform: scaleY(0);
  transform-origin: bottom;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.interactive-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 30px -10px rgba(15, 60, 97, 0.15);
  background: #ffffff;
  border-color: #e2e8f0;
  color: #0f3c61;
  font-weight: 600;
}
.interactive-lift:hover::before {
  transform: scaleY(1);
}
.interactive-lift:hover .subject-icon {
  color: #d84315;
  transform: scale(1.1);
}

.subject-icon {
  color: #1565c0;
  flex-shrink: 0;
  transition: all 0.3s ease;
}

/* Efectos de Filtrado Dinámico */
.subject-item.is-dimmed {
  opacity: 0.25;
  filter: grayscale(0.8);
  pointer-events: none;
  transform: scale(0.98);
}

.subject-item.is-highlighted {
  border-color: rgba(21, 101, 192, 0.4);
  background: rgba(21, 101, 192, 0.04);
  box-shadow: 0 10px 20px -10px rgba(21, 101, 192, 0.2);
  font-weight: 600;
  color: #0f3c61;
}
.subject-item.is-highlighted::before {
  background-color: #1565c0;
  transform: scaleY(1);
}
.subject-item.is-highlighted .subject-icon {
  color: #1565c0;
}

.subject-item.is-highlighted.audiovisual {
  border-color: rgba(216, 67, 21, 0.4);
  background: rgba(216, 67, 21, 0.04);
  box-shadow: 0 10px 20px -10px rgba(216, 67, 21, 0.2);
  font-weight: 600;
  color: #0f3c61;
}
.subject-item.is-highlighted.audiovisual::before {
  background-color: #d84315;
  transform: scaleY(1);
}
.subject-item.is-highlighted.audiovisual .subject-icon {
  color: #d84315;
}

.subject-item.is-highlighted.periodismo {
  border-color: rgba(21, 101, 192, 0.4);
  background: rgba(21, 101, 192, 0.04);
  box-shadow: 0 10px 20px -10px rgba(21, 101, 192, 0.2);
  font-weight: 600;
  color: #0f3c61;
}
.subject-item.is-highlighted.periodismo::before {
  background-color: #1565c0;
  transform: scaleY(1);
}
.subject-item.is-highlighted.periodismo .subject-icon {
  color: #1565c0;
}

.subject-item.is-highlighted.marketing {
  border-color: rgba(16, 185, 129, 0.4);
  background: rgba(16, 185, 129, 0.04);
  box-shadow: 0 10px 20px -10px rgba(16, 185, 129, 0.2);
  font-weight: 600;
  color: #0f3c61;
}
.subject-item.is-highlighted.marketing::before {
  background-color: #10b981;
  transform: scaleY(1);
}
.subject-item.is-highlighted.marketing .subject-icon {
  color: #10b981;
}

.subject-item.is-highlighted.general {
  border-color: rgba(100, 116, 139, 0.4);
  background: rgba(100, 116, 139, 0.04);
  box-shadow: 0 10px 20px -10px rgba(100, 116, 139, 0.2);
  font-weight: 600;
  color: #0f3c61;
}
.subject-item.is-highlighted.general::before {
  background-color: #64748b;
  transform: scaleY(1);
}
.subject-item.is-highlighted.general .subject-icon {
  color: #64748b;
}

/* Animación de Transición de Pestañas */
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
   RESPONSIVE Y SOLUCIÓN DE MENÚ MÓVIL
========================================================= */
@media (max-width: 1024px) {
  .syllabus-layout {
    grid-template-columns: 280px 1fr;
    gap: 2rem;
  }
  .content-blocks-wrapper {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 768px) {
  .syllabus-layout {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    display: flex;
    flex-direction: column;
  }
  .syllabus-sidebar {
    position: static;
    gap: 1.5rem;
    width: 100%;
  }

  /* Configuración estricta para el Scroll Horizontal nativo tipo App */
  .mobile-scroll {
    flex-direction: row;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    padding-bottom: 1rem;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    gap: 1rem;
  }
  .mobile-scroll::-webkit-scrollbar {
    display: none;
  }

  .tab-btn {
    flex: 0 0 auto;
    min-width: max-content;
    padding: 0.8rem 1.5rem;
    border: 1px solid #e2e8f0;
    background: #ffffff;
    scroll-snap-align: start;
    border-radius: 12px;
  }

  .tab-btn.is-active {
    border-color: #d84315;
    box-shadow: 0 8px 20px -5px rgba(216, 67, 21, 0.2);
    transform: none;
  }
  .tab-btn.is-active::before {
    width: 100%;
    height: 4px;
    left: 0;
    top: 0;
    border-radius: 4px 4px 0 0;
  }

  .tab-arrow {
    display: none;
  }

  .syllabus-content {
    padding: 1.5rem;
    border-radius: 20px;
  }
  .subject-item {
    padding: 1rem;
  }

  .syllabus-filters-wrapper {
    padding: 1.25rem 1rem;
  }
}
</style>
