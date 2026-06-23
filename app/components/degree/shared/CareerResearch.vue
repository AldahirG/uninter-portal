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
}>();
</script>

<template>
  <section class="career-research-section" id="experiencia">
    <div class="uninter-container">
      <!-- Encabezado de la Sección -->
      <div class="research-header animate-header">
        <span class="eyebrow">Experiencia Práctica</span>
        <h2 class="section-title">Laboratorios & <em>Proyectos</em></h2>
        <p class="section-desc">
          No te limites a la teoría. En UNINTER aprendes haciendo desde el
          primer día en instalaciones equipadas con la tecnología que demanda la
          industria.
        </p>
      </div>

      <!-- Bento Grid de Laboratorios -->
      <div class="labs-grid">
        <div
          v-for="(lab, index) in labs"
          :key="index"
          :class="['lab-card', 'interactive-card', `index-${index}`]"
        >
          <!-- Efecto de gradiente de borde en hover -->
          <div class="card-gradient-border"></div>

          <div class="lab-card-header">
            <div class="lab-icon-wrap subtle-blue">
              <span class="lab-emoji">{{ lab.icon }}</span>
            </div>
            <span class="lab-tag">{{ lab.tag }}</span>
          </div>

          <div class="lab-card-body">
            <h3>{{ lab.title }}</h3>
            <p>{{ lab.desc }}</p>
          </div>

          <div class="lab-card-footer">
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
  </section>
</template>

<style scoped>
/* =========================================================
   CONTENEDOR BASE
   ========================================================= */
.career-research-section {
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



/* Encabezado */
.research-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 5rem auto;
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
  color: #0f3c61;
  font-weight: 800;
  margin: 0 0 1rem 0;
}
.section-title em {
  color: #d84315;
  font-style: italic;
}

.section-desc {
  font-size: 1.05rem;
  color: #475569;
  line-height: 1.6;
}

/* =========================================================
   BENTO GRID DE LABORATIOS (Media Labs)
   ========================================================= */
.labs-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  margin-bottom: 5rem;
}

.lab-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Asignaciones de Bento Grid en pantallas grandes */
.lab-card.index-0 {
  grid-column: span 7;
}
.lab-card.index-1 {
  grid-column: span 5;
}
.lab-card.index-2,
.lab-card.index-3,
.lab-card.index-4 {
  grid-column: span 4;
}

/* Efecto de borde degradado animado */
.card-gradient-border {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #1565c0, #d84315);
  transform: scaleX(0.12);
  transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.lab-card:hover {
  background: #ffffff;
  border-color: #cbd5e1;
  transform: translateY(-8px);
  box-shadow: 0 30px 60px -15px rgba(9, 29, 48, 0.08);
}

.lab-card:hover .card-gradient-border {
  transform: scaleX(1);
}

.lab-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.lab-icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
}

.lab-icon-wrap.subtle-blue {
  background-color: #f0f6fc;
  color: #1565c0;
}

.lab-emoji {
  font-size: 1.4rem;
  line-height: 1;
}

.lab-card:hover .lab-icon-wrap.subtle-blue {
  background-color: #1565c0;
  color: #ffffff;
  transform: scale(1.1) rotate(-5deg);
}

.lab-tag {
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #64748b;
  background: #f1f5f9;
  padding: 0.35rem 0.8rem;
  border-radius: 99px;
  letter-spacing: 0.05em;
  transition: all 0.3s;
}

.lab-card:hover .lab-tag {
  color: #d84315;
  background: rgba(216, 67, 21, 0.08);
}

.lab-card-body h3 {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: 1.5rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 1rem 0;
  letter-spacing: -0.01em;
}

.lab-card-body p {
  font-size: 0.98rem;
  color: #475569;
  line-height: 1.6;
  margin: 0 0 2rem 0;
}

.lab-card-footer {
  margin-top: auto;
  border-top: 1px solid #f1f5f9;
  padding-top: 1.5rem;
}

.features-title {
  display: block;
  font-size: 0.8rem;
  font-weight: 800;
  color: #0f3c61;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.75rem;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.features-list li {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.88rem;
  color: #475569;
  font-weight: 500;
}

.feat-check {
  color: #d84315;
  flex-shrink: 0;
}



/* =========================================================
   RESPONSIVE
   ========================================================= */
@media (max-width: 1024px) {
  .labs-grid {
    gap: 1.5rem;
  }
  .lab-card.index-0,
  .lab-card.index-1 {
    grid-column: span 12;
  }
  .lab-card.index-2,
  .lab-card.index-3,
  .lab-card.index-4 {
    grid-column: span 6;
  }
}

@media (max-width: 768px) {
  .career-research-section {
    padding: 5rem 0;
  }
  .lab-card {
    padding: 2.5rem 1.75rem;
    border-radius: 20px;
  }
}

@media (max-width: 640px) {
  .lab-card.index-2,
  .lab-card.index-3,
  .lab-card.index-4 {
    grid-column: span 12;
  }
  .features-list {
    gap: 0.75rem;
  }
  .lab-card-body h3 {
    font-size: 1.35rem;
  }
}
</style>
