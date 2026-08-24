<script setup lang="ts">
import { defineProps, ref, onMounted, onUnmounted } from "vue";
import { Check, FolderOpen, ArrowRight } from "lucide-vue-next";

// Props dinámicos: recibe el techArsenal (o labs) del JSON
const props = defineProps<{
  labs: Array<{
    title: string;
    description?: string;
    desc?: string;
    image?: string;
    features: string[];
  }>;
  projectsBlogUrl?: string;
}>();

// Animación de hover simulado secuencial
const simulatedHoverIndex = ref<number | null>(0);
let hoverInterval: ReturnType<typeof setInterval>;

const startSimulation = () => {
  if (hoverInterval) clearInterval(hoverInterval);
  if (props.labs && props.labs.length > 0) {
    hoverInterval = setInterval(() => {
      simulatedHoverIndex.value = simulatedHoverIndex.value !== null
        ? (simulatedHoverIndex.value < props.labs.length - 1 ? simulatedHoverIndex.value + 1 : 0)
        : 0;
    }, 1500);
  }
};

const stopSimulation = () => {
  if (hoverInterval) clearInterval(hoverInterval);
  simulatedHoverIndex.value = null;
};

const resumeSimulation = () => {
  simulatedHoverIndex.value = 0;
  startSimulation();
};

onMounted(() => {
  startSimulation();
});

onUnmounted(() => {
  if (hoverInterval) clearInterval(hoverInterval);
});

// Imágenes representativas para los laboratorios si no cargan las reales
const labImages = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800", // Electrónica / Ingeniería
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800", // Espacio interactivo / Media
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800", // Cómputo / Edición
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800", // Negocios / Sala
];

const getLabImage = (index: number) => {
  return labImages[index % labImages.length];
};
</script>

<template>
  <section class="career-research-section" id="experiencia" v-if="labs && labs.length">
    <div class="uninter-container">
      <!-- Encabezado de la Sección -->
      <div class="research-header animate-header">
        <span class="eyebrow">ARSENAL TECNOLÓGICO</span>
        <h2 class="section-title">
          Tecnología de <br />
          <span class="highlight-underline">Nivel Profesional</span>
        </h2>
        <p class="section-desc">
          <mark class="highlight-desc">No te limites a la teoría. Domina las herramientas reales de la industria antes de graduarte y asegura tu ventaja competitiva en el mercado laboral.</mark>
        </p>
      </div>

      <!-- Grid de Laboratorios o Carrusel -->
      <div 
        :class="['labs-wrapper', labs.length > 3 ? 'is-carousel' : 'is-grid']" 
        class="stagger-1"
        @mouseenter="stopSimulation"
        @mouseleave="resumeSimulation"
        @touchstart="stopSimulation"
        @touchend="resumeSimulation"
      >
        <div
          v-for="(lab, index) in labs"
          :key="index"
          class="lab-vblock"
          :class="{ 'simulated-hover': simulatedHoverIndex === index }"
        >
          <!-- Imagen de Cabecera -->
          <div class="lab-vblock__img-wrap">
            <img :src="getLabImage(index)" :alt="lab.title" class="lab-vblock__img" loading="lazy" />
          </div>

          <!-- Contenido Informativo -->
          <div class="lab-vblock__body">
            <h3 class="lab-vblock__title">{{ lab.title }}</h3>
            <p class="lab-vblock__desc">{{ lab.description || lab.desc }}</p>
            
            <div class="divider"></div>

            <!-- Equipamiento / Características -->
            <div class="lab-vblock__features">
              <span class="features-title">EQUIPAMIENTO DESTACADO:</span>
              <ul class="features-list">
                <li v-for="(feat, fIdx) in lab.features" :key="fIdx">
                  <Check :size="16" class="feat-check color-blue" />
                  <span>{{ feat }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- ESCAT projects blog dynamic connection card -->
      <div v-if="projectsBlogUrl" class="projects-blog-cta animate-header">
        <div class="projects-blog-cta__body">
          <div class="projects-blog-cta__icon">
            <FolderOpen :size="32" />
          </div>
          <div class="projects-blog-cta__info">
            <h3 class="projects-blog-cta__title">Proyectos Reales & Evidencias</h3>
            <p class="projects-blog-cta__desc">
              Conoce los procesos, resultados y experiencias de los estudiantes de la ESCAT. Explora la bitácora académica oficial con notas, fotografías y evidencias de proyectos reales.
            </p>
          </div>
        </div>
        <a :href="projectsBlogUrl" target="_blank" rel="noopener" class="projects-blog-cta__btn">
          Ver Proyectos ESCAT <ArrowRight :size="16" />
        </a>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* =========================================================
   CONTENEDOR BASE
======================================================== */
.career-research-section {
  background-color: #ffffff;
  padding: 7rem 0;
  color: #0f3c61;
  overflow: hidden;
  font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
}

.uninter-container {
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* =========================================================
   ENCABEZADO
======================================================== */
.research-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4.5rem auto;
}

.eyebrow {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 800;
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
  font-size: clamp(2.3rem, 4vw, 3.2rem);
  color: #0f3c61;
  font-weight: 800;
  margin: 0 0 1.5rem 0;
  letter-spacing: -0.02em;
  line-height: 1.25;
}

.highlight-underline {
  color: #1565c0;
  position: relative;
  display: inline-block;
  z-index: 1;
}

.highlight-underline::after {
  content: "";
  position: absolute;
  bottom: 6px;
  left: -2%;
  width: 104%;
  height: 12px;
  background-color: #fcebd7; /* Tono durazno / plumón claro */
  z-index: -1;
  transform: rotate(-1.5deg);
  border-radius: 2px;
}

.section-desc {
  margin: 0;
}

.highlight-desc {
  background-color: #1565c0;
  color: #ffffff;
  padding: 0.3rem 0.6rem;
  line-height: 1.8;
  border-radius: 4px;
  font-size: 1.05rem;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
}

/* =========================================================
   GRID Y CARRUSEL
======================================================== */
.labs-wrapper.is-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 400px));
  justify-content: center;
  gap: 2.5rem;
}

.labs-wrapper.is-carousel {
  display: flex;
  overflow-x: auto;
  gap: 2rem;
  padding-bottom: 2.5rem; /* space for shadow */
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.labs-wrapper.is-carousel .lab-vblock {
  min-width: 320px;
  max-width: 380px;
  flex: 0 0 auto;
  scroll-snap-align: center;
}

/* Scrollbar para el carrusel */
.labs-wrapper.is-carousel::-webkit-scrollbar {
  height: 8px;
}
.labs-wrapper.is-carousel::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 4px;
}
.labs-wrapper.is-carousel::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 4px;
}
.labs-wrapper.is-carousel::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

/* =========================================================
   ESTILO CARD VBLOCK
======================================================== */
.lab-vblock {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.4s ease;
}

/* Efecto Hover Real y Simulado */
.lab-vblock:hover,
.lab-vblock.simulated-hover {
  transform: translateY(-8px);
  border-color: #1565c0;
  box-shadow: 0 15px 40px rgba(21, 101, 192, 0.15);
}

.lab-vblock__img-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16/10;
  overflow: hidden;
}

.lab-vblock__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.lab-vblock:hover .lab-vblock__img,
.lab-vblock.simulated-hover .lab-vblock__img {
  transform: scale(1.05);
}

/* Cuerpo de la Tarjeta */
.lab-vblock__body {
  padding: 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  flex: 1;
}

.lab-vblock__title {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: 1.45rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0;
}

.lab-vblock__desc {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

.divider {
  height: 1px;
  background-color: #e2e8f0;
  margin: 0.5rem 0;
}

/* Características / Features */
.lab-vblock__features {
  margin-top: auto;
}

.features-title {
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  color: #94a3b8;
  margin-bottom: 1rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.8rem;
}

.features-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.4;
}

.feat-check.color-blue {
  color: #1565c0;
  flex-shrink: 0;
  margin-top: 2px;
}

/* =========================================================
   RESPONSIVE
======================================================== */
@media (max-width: 640px) {
  .labs-wrapper.is-grid {
    grid-template-columns: 1fr;
  }
  .lab-vblock__body {
    padding: 1.5rem;
  }
}

/* =========================================================
   ANIMACIONES de Entrada
======================================================== */
@keyframes fadeUpIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-header {
  animation: fadeUpIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
.stagger-1 {
  animation: fadeUpIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards;
}

/* =========================================================
   CTA PROYECTOS ESCAT
========================================================= */
.projects-blog-cta {
  margin-top: 4.5rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  transition: all 0.3s ease;
}

.projects-blog-cta:hover {
  transform: translateY(-4px);
  border-color: #cbd5e1;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
}

.projects-blog-cta__body {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  flex: 1;
}

.projects-blog-cta__icon {
  background: rgba(21, 101, 192, 0.1);
  color: #1565c0;
  width: 56px;
  height: 56px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.projects-blog-cta__info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.projects-blog-cta__title {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: 1.4rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0;
}

.projects-blog-cta__desc {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

.projects-blog-cta__btn {
  background: #0f3c61;
  color: #ffffff;
  padding: 0.9rem 1.8rem;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  transition: all 0.2s;
}

.projects-blog-cta__btn:hover {
  background: #1565c0;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .projects-blog-cta {
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem 1.5rem;
    gap: 1.5rem;
  }
  .projects-blog-cta__btn {
    width: 100%;
    justify-content: center;
  }
}
</style>
