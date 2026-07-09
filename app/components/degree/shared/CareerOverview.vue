<script setup lang="ts">
import { defineProps } from "vue";
import { UserCheck, Briefcase, Target } from "lucide-vue-next";

// Props dinámicos
const props = defineProps<{
  data: {
    name: string;
    description: string;
    ingreso: string;
    egreso: string;
  }
}>();
</script>

<template>
  <section class="career-overview-section" id="perfil-ingreso">
    <!-- Top: double column layout inspired by Welcome.vue -->
    <div class="overview-top">
      <div class="uninter-container">
        <div class="overview-intro animate-header">
          <div>
            <p class="overview-eyebrow">Panorama General</p>
            <h2 class="overview-title">Perfil & <em>Mercado Laboral</em></h2>
          </div>
          <p class="overview-desc">
            {{ data?.description }}
          </p>
        </div>
      </div>
    </div>

    <!-- Bottom: card row layout inspired by Welcome.vue -->
    <div class="overview-cards-wrap">
      <div class="uninter-container overview-cards stagger-1">
        <!-- Card 1: Perfil de Ingreso -->
        <div class="overview-wcard">
          <div class="overview-wcard__icon">
            <UserCheck :size="24" />
          </div>
          <h3 class="overview-wcard__title">Perfil de Ingreso</h3>
          <p class="overview-wcard__desc">{{ data?.ingreso }}</p>
        </div>

        <!-- Card 2: Perfil de Egreso -->
        <div class="overview-wcard">
          <div class="overview-wcard__icon">
            <Target :size="24" />
          </div>
          <h3 class="overview-wcard__title">Perfil de Egreso</h3>
          <p class="overview-wcard__desc">
            Desarrollarás competencias sólidas de liderazgo, dominio técnico, pensamiento crítico y las habilidades necesarias para innovar en tu campo laboral con una perspectiva global.
          </p>
        </div>

        <!-- Card 3: Campo Laboral -->
        <div class="overview-wcard">
          <div class="overview-wcard__icon">
            <Briefcase :size="24" />
          </div>
          <h3 class="overview-wcard__title">Mercado Laboral</h3>
          <p class="overview-wcard__desc">{{ data?.egreso }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* =========================================================
   CONTENEDOR BASE
========================================================= */
.career-overview-section {
  --p: #1565c0;
  --p-light: #e0f2fe;
  --pbg: #0f3c61;
  background-color: #f8fafc;
  font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
}

.uninter-container {
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* =========================================================
   SECCIÓN SUPERIOR (Doble Columna)
========================================================= */
.overview-top {
  background: #ffffff;
  padding: 5.5rem 0 4rem;
  border-bottom: 1px solid #e2e8f0;
}

.overview-intro {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: start;
}

.overview-eyebrow {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--p);
  margin: 0 0 0.5rem;
}

.overview-title {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 800;
  color: #0f3c61;
  margin: 0;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.overview-title em {
  font-style: italic;
  color: #d84315;
}

.overview-desc {
  font-size: 1.02rem;
  line-height: 1.75;
  color: #475569;
  margin: 0;
  padding-top: 1.5rem;
  border-top: 3px solid #d84315;
}

/* =========================================================
   SECCIÓN INFERIOR (Tarjetas Uniformes)
========================================================= */
.overview-cards-wrap {
  background: #f1f5f9;
  padding: 4.5rem 0;
}

.overview-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
}

.overview-wcard {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 2.25rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 4px 12px rgba(15, 60, 97, 0.03);
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.3s,
              box-shadow 0.3s;
}

.overview-wcard:hover {
  transform: translateY(-6px);
  border-color: rgba(21, 101, 192, 0.3);
  box-shadow: 0 15px 35px -10px rgba(15, 60, 97, 0.12);
}

.overview-wcard__icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: var(--p-light);
  color: var(--p);
  display: flex;
  align-items: center;
  justify-content: center;
}

.overview-wcard__title {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: 1.25rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0;
}

.overview-wcard__desc {
  font-size: 0.92rem;
  color: #475569;
  line-height: 1.65;
  margin: 0;
  flex: 1;
}

/* =========================================================
   RESPONSIVE
========================================================= */
@media (max-width: 968px) {
  .overview-intro {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .overview-desc {
    padding-top: 1.2rem;
  }
  .overview-cards {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
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
}
</style>
