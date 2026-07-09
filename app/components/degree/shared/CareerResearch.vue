<script setup lang="ts">
import { defineProps } from "vue";
import { Check } from "lucide-vue-next";

// Props dinámicos: recibe los laboratorios/experiencias del JSON
const props = defineProps<{
  labs: Array<{
    title: string;
    desc: string;
    icon: string;
    tag: string;
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
</script>

<template>
  <section class="career-research-section" id="experiencia">
    <div class="uninter-container">
      <!-- Encabezado de la Sección -->
      <div class="research-header animate-header">
        <span class="eyebrow">Experiencia Práctica</span>
        <h2 class="section-title">Laboratorios & <em>Proyectos</em></h2>
        <p class="section-desc">
          No te limites a la teoría. En UNINTER aprendes haciendo desde el primer día en instalaciones equipadas con la tecnología que demanda la industria.
        </p>
      </div>

      <!-- Grid de Laboratorios Estilo VBlock -->
      <div class="labs-grid stagger-1">
        <div
          v-for="(lab, index) in labs"
          :key="index"
          class="lab-vblock"
        >
          <!-- Imagen de Cabecera con Badge -->
          <div class="lab-vblock__img-wrap">
            <img :src="getLabImage(index)" :alt="lab.title" class="lab-vblock__img" loading="lazy" />
            <div class="lab-vblock__badge">
              <span class="lab-vblock__emoji">{{ lab.icon }}</span>
              <span>{{ lab.tag }}</span>
            </div>
          </div>

          <!-- Contenido Informativo -->
          <div class="lab-vblock__body">
            <h3 class="lab-vblock__title">{{ lab.title }}</h3>
            <p class="lab-vblock__desc">{{ lab.desc }}</p>
            
            <!-- Equipamiento / Características -->
            <div class="lab-vblock__features">
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
  background-color: #0f3c61;
  padding: 6.5rem 0;
  color: #ffffff;
  overflow: hidden;
}

.uninter-container {
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* =========================================================
   ENCABEZADO
========================================================= */
.research-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4.5rem auto;
}

.eyebrow {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #fde68a;
  margin-bottom: 0.75rem;
  background: rgba(253, 230, 138, 0.1);
  padding: 0.35rem 0.9rem;
  border-radius: 20px;
  border: 1px solid rgba(253, 230, 138, 0.2);
}

.section-title {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: clamp(2.3rem, 4vw, 3.2rem);
  color: #ffffff;
  font-weight: 850;
  margin: 0 0 1rem 0;
  letter-spacing: -0.02em;
}

.section-title em {
  color: #fde68a;
  font-style: italic;
}

.section-desc {
  font-size: 1.02rem;
  color: #cbd5e1;
  line-height: 1.65;
  margin: 0;
}

/* =========================================================
   GRID DE LABORATORIOS (Responsive Auto-Fit)
========================================================= */
.labs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
}

/* =========================================================
   ESTILO CARD VBLOCK (Inspiración VidaUninter)
========================================================= */
.lab-vblock {
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 0.3s,
              border-color 0.3s;
}

.lab-vblock:hover {
  transform: translateY(-6px);
  border-color: rgba(253, 230, 138, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

.lab-vblock__img-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.lab-vblock__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.lab-vblock:hover .lab-vblock__img {
  transform: scale(1.06);
}

.lab-vblock__badge {
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: #1565c0;
  color: #ffffff;
  font-size: 0.72rem;
  font-weight: 800;
  padding: 0.35rem 0.85rem;
  border-radius: 50px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.15);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.lab-vblock__emoji {
  font-size: 0.95rem;
  line-height: 1;
}

/* Cuerpo de la Tarjeta */
.lab-vblock__body {
  padding: 2.25rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  flex: 1;
}

.lab-vblock__title {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: 1.4rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0;
  letter-spacing: -0.01em;
}

.lab-vblock__desc {
  font-size: 0.92rem;
  color: #cbd5e1;
  line-height: 1.6;
  margin: 0;
}

/* Características / Features */
.lab-vblock__features {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 1.25rem;
  margin-top: auto;
}

.features-title {
  display: block;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #94a3b8;
  margin-bottom: 0.75rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.65rem;
}

.features-list li {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.88rem;
  color: #e2e8f0;
  line-height: 1.4;
}

.feat-check {
  color: #fde68a;
  flex-shrink: 0;
  margin-top: 2px;
}

/* =========================================================
   RESPONSIVE
========================================================= */
@media (max-width: 640px) {
  .labs-grid {
    grid-template-columns: 1fr;
  }
  .lab-vblock__body {
    padding: 1.75rem 1.5rem;
  }
}

/* =========================================================
   ANIMACIONES de Entrada
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
}

/* =========================================================
   CTA PROYECTOS ESCAT (Efecto Glassmorphic / Premium)
   ========================================================= */
.projects-blog-cta {
  margin-top: 4.5rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  padding: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s, box-shadow 0.3s;
}

.projects-blog-cta:hover {
  transform: translateY(-4px);
  border-color: rgba(253, 230, 138, 0.3);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
}

.projects-blog-cta__body {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  flex: 1;
}

.projects-blog-cta__icon {
  background: rgba(253, 230, 138, 0.1);
  color: #fde68a;
  width: 56px;
  height: 56px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: 1px solid rgba(253, 230, 138, 0.2);
}

.projects-blog-cta__info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.projects-blog-cta__title {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: 1.4rem;
  font-weight: 850;
  color: #ffffff;
  margin: 0;
}

.projects-blog-cta__desc {
  font-size: 0.95rem;
  color: #cbd5e1;
  line-height: 1.6;
  margin: 0;
}

.projects-blog-cta__btn {
  background: #fde68a;
  color: #0f3c61;
  padding: 0.9rem 1.8rem;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 800;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
  transition: background-color 0.2s, transform 0.2s;
  box-shadow: 0 4px 12px rgba(253, 230, 138, 0.2);
}

.projects-blog-cta__btn:hover {
  background: #fef08a;
  transform: translateY(-2px);
}

/* Responsive */
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
