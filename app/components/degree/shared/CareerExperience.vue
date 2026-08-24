<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, defineProps } from "vue";
import { Check, ChevronLeft, ChevronRight } from "lucide-vue-next";

const props = defineProps<{
  arsenal_tecnologico: Array<{
    title: string;
    marketing_pitch: string;
    icon: string;
    features: string[];
  }>;
  projectsBlogUrl?: string;
}>();

// Imágenes representativas para los laboratorios
const labImages = [
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800", // Lab ingeniería / técnico
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800", // Espacio interactivo
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800", // Laboratorio cómputo / sistemas
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800", // Sala de juntas / negocios
];

const getLabImage = (index: number) => {
  return labImages[index % labImages.length];
};

const needsCarousel = computed(() => props.arsenal_tecnologico && props.arsenal_tecnologico.length > 3);

const trackRef = ref<HTMLElement | null>(null);

const scrollLeft = () => {
  if (trackRef.value) {
    trackRef.value.scrollBy({ left: -340, behavior: 'smooth' });
  }
};

const scrollRight = () => {
  if (trackRef.value) {
    trackRef.value.scrollBy({ left: 340, behavior: 'smooth' });
  }
};

const activeHoverIndex = ref(-1);
let autoHoverInterval: any = null;
let autoPlayInterval: any = null;

onMounted(() => {
  if (needsCarousel.value) {
    // Auto-scroll para el carrusel
    autoPlayInterval = setInterval(() => {
      if (trackRef.value) {
        const { scrollLeft, clientWidth, scrollWidth } = trackRef.value;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          trackRef.value.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRight();
        }
      }
    }, 3500);
  } else {
    // Auto-hover visual atractivo
    let index = 0;
    autoHoverInterval = setInterval(() => {
      activeHoverIndex.value = index;
      index = (index + 1) % props.arsenal_tecnologico.length;
    }, 2000);
  }
});

onUnmounted(() => {
  if (autoHoverInterval) clearInterval(autoHoverInterval);
  if (autoPlayInterval) clearInterval(autoPlayInterval);
});
</script>

<template>
  <section class="career-research-section" id="experiencia">
    <div class="uninter-container">
      <!-- Encabezado de la Sección -->
      <div class="research-header animate-header">
        <span class="eyebrow">Arsenal Tecnológico</span>
        <h2 class="section-title">
          Tecnología de <br><em class="title-accent">Nivel Profesional</em>
        </h2>
        <p class="section-desc">
          No te limites a la teoría. Domina las herramientas reales de la industria antes de graduarte y asegura tu ventaja competitiva en el mercado laboral.
        </p>
      </div>

      <!-- Carrusel de Laboratorios -->
      <div class="carousel-wrapper stagger-1">
        <button v-if="needsCarousel" class="nav-btn prev-btn" @click="scrollLeft" aria-label="Anterior">
          <ChevronLeft :size="28" />
        </button>

        <div class="carousel-track" ref="trackRef" :class="{ 'is-centered': !needsCarousel }">
          <div
            v-for="(lab, index) in arsenal_tecnologico"
            :key="index"
            class="lab-card"
            :class="{ 'is-auto-hover': !needsCarousel && activeHoverIndex === index }"
            @mouseenter="activeHoverIndex = -1"
          >
            <!-- Imagen de Cabecera con Badge -->
            <div class="lab-card__img-wrap">
              <img :src="getLabImage(index)" :alt="lab.title" class="lab-card__img" loading="lazy" />
            </div>

            <!-- Contenido Informativo -->
            <div class="lab-card__body">
              <h3 class="lab-card__title">{{ lab.title }}</h3>
              <p class="lab-card__desc">{{ lab.marketing_pitch }}</p>
              
              <!-- Equipamiento / Características -->
              <div class="lab-card__features">
                <span class="features-title">Equipamiento destacado:</span>
                <ul class="features-list">
                  <li v-for="(feat, fIdx) in lab.features" :key="fIdx">
                    <Check :size="14" class="feat-check" />
                    <span>{{ feat }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <button v-if="needsCarousel" class="nav-btn next-btn" @click="scrollRight" aria-label="Siguiente">
          <ChevronRight :size="28" />
        </button>
      </div>

      <!-- ESCAT projects blog dynamic connection card -->
      <div v-if="projectsBlogUrl" class="projects-blog-cta animate-header">
        <div class="projects-blog-cta__body">
          <div class="projects-blog-cta__icon">
            <Icon name="mdi:folder-open-outline" size="32" />
          </div>
          <div class="projects-blog-cta__info">
            <h3 class="projects-blog-cta__title">Proyectos Reales & Evidencias</h3>
            <p class="projects-blog-cta__desc">
              Conoce los procesos, resultados y experiencias de los estudiantes de la ESCAT. Explora la bitácora académica oficial con notas, fotografías y evidencias de proyectos reales.
            </p>
          </div>
        </div>
        <a :href="projectsBlogUrl" target="_blank" rel="noopener" class="projects-blog-cta__btn">
          Ver Proyectos ESCAT <Icon name="mdi:arrow-right" size="16" />
        </a>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* =========================================================
   CONTENEDOR BASE
========================================================= */
.career-research-section {
  background-color: #ffffff; /* Fuerte rediseño: fondo blanco */
  padding: 6.5rem 0;
  color: #333;
  overflow: hidden;
  font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
}

.uninter-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* =========================================================
   ENCABEZADO
========================================================= */
.research-header {
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem auto;
}

.eyebrow {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--p);
  margin-bottom: 0.75rem;
  background: #f0f6fc;
  padding: 0.35rem 0.9rem;
  border-radius: 20px;
}

.section-title {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  color: #0f3c61;
  font-weight: 800;
  margin: 0 0 1.5rem 0;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.section-title .title-accent {
  color: var(--p, #0099cc);
  font-style: normal;
  position: relative;
  display: inline-block;
}

.section-title .title-accent::after {
  content: "";
  position: absolute;
  bottom: 8px;
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
  line-height: 1.65;
  margin: 0;
}

/* =========================================================
   CARRUSEL
========================================================= */
.carousel-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  width: 100%;
}

.carousel-track {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding: 1rem 0.5rem 2.5rem 0.5rem;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  width: 100%;
}

.carousel-track.is-centered {
  justify-content: center;
}

.carousel-track::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}

.nav-btn {
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  z-index: 10;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  box-shadow: 0 10px 25px rgba(15, 60, 97, 0.1);
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #0f3c61;
  transition: all 0.3s ease;
}

.nav-btn:hover {
  background: #f8fafc;
  color: var(--p);
  transform: translateY(-50%) scale(1.05);
}

.prev-btn {
  left: -28px;
}

.next-btn {
  right: -28px;
}

@media (max-width: 1024px) {
  .prev-btn { left: -10px; }
  .next-btn { right: -10px; }
}

@media (max-width: 768px) {
  .nav-btn { display: none; }
}

/* =========================================================
   CARD DE LABORATORIO
========================================================= */
.lab-card {
  scroll-snap-align: start;
  flex: 0 0 340px; /* Tamaño adaptado para no ser gigantes */
  display: flex;
  flex-direction: column;
  background: rgba(15, 60, 97, 0.03); /* Glassmorphism ligero */
  border: 1px solid rgba(15, 60, 97, 0.05);
  border-radius: 24px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 10px 30px rgba(15, 60, 97, 0.05);
}

.lab-card:hover,
.lab-card.is-auto-hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(15, 60, 97, 0.1);
  border-color: rgba(15, 60, 97, 0.12);
}

.lab-card__img-wrap {
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
}

.lab-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.lab-card:hover .lab-card__img,
.lab-card.is-auto-hover .lab-card__img {
  transform: scale(1.05);
}

.lab-card__body {
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.lab-card__title {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: 1.25rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 0.8rem 0;
  line-height: 1.3;
}

.lab-card__desc {
  font-size: 0.92rem;
  color: #475569;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
}

.lab-card__features {
  border-top: 1px solid rgba(15, 60, 97, 0.08);
  padding-top: 1rem;
}

.features-title {
  display: block;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #64748b;
  margin-bottom: 0.8rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.features-list li {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 0.85rem;
  color: #334155;
  line-height: 1.4;
}

.feat-check {
  color: var(--p);
  flex-shrink: 0;
  margin-top: 2px;
}

/* =========================================================
   CTA PROYECTOS ESCAT
========================================================= */
.projects-blog-cta {
  margin-top: 2rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  transition: transform 0.3s ease, border-color 0.3s, box-shadow 0.3s;
}

.projects-blog-cta:hover {
  transform: translateY(-4px);
  border-color: #cbd5e1;
  box-shadow: 0 15px 30px rgba(15, 60, 97, 0.08);
}

.projects-blog-cta__body {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  flex: 1;
}

.projects-blog-cta__icon {
  background: var(--p-light, #e0f2fe);
  color: var(--p);
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
  color: #475569;
  line-height: 1.6;
  margin: 0;
}

.projects-blog-cta__btn {
  background: #0f3c61;
  color: #ffffff;
  padding: 0.9rem 1.8rem;
  border-radius: 12px;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  transition: background-color 0.2s, transform 0.2s;
}

.projects-blog-cta__btn:hover {
  background: var(--p);
  transform: translateY(-2px);
}

/* Animaciones */
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
