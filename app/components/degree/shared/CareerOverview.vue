<script setup lang="ts">
interface CareerData {
  id?: string;
  name: string;
  slug?: string;
  careerRole?: string;
  uninterEnvironment?: string;
  description?: string;
  [key: string]: any;
}

const props = defineProps<{
  data: CareerData;
}>();

const getCareerRoleTitle = (name?: string) => {
  if (!name) return "¿Qué hace un(a) Licenciado(a)?";
  const upper = name.toUpperCase();
  if (upper.startsWith("INGENIERÍA") || upper.startsWith("INGENIERIA")) {
    return `¿Qué hace un(a) Ingeniero(a) en ${name}?`;
  }
  if (upper === "ARQUITECTURA") {
    return `¿Qué hace un(a) Arquitecto(a) en Arquitectura?`;
  }
  return `¿Qué hace un(a) Licenciado(a) en ${name}?`;
};
</script>

<template>
  <section class="career-evolution-section" id="evolucion">
    <div class="uninter-container">
      <!-- ENCABEZADO PRINCIPAL -->
      <div class="evolution-header">
        <h2 class="evolution-title">
          <span>Del aula a la industria:</span>
          <span class="evolution-subtitle">
            Tu evolución en <span class="uninter-accent">UNINTER</span>
          </span>
        </h2>
      </div>

      <!-- TARJETAS DOBLES -->
      <div class="evolution-cards-grid">
        <!-- Tarjeta 1: ¿Qué hace un(a)...? -->
        <div class="evolution-card">
          <h3 class="evolution-card__title">
            {{ getCareerRoleTitle(data?.name) }}
          </h3>
          <p class="evolution-card__desc">
            {{ data?.careerRole || data?.description }}
          </p>
        </div>

        <!-- Tarjeta 2: Ambiente UNINTER -->
        <div class="evolution-card">
          <h3 class="evolution-card__title">
            Ambiente UNINTER
          </h3>
          <p class="evolution-card__desc">
            {{ data?.uninterEnvironment }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.career-evolution-section {
  background-color: #f8fafc;
  padding: 5.5rem 0 6rem;
  font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
}

.uninter-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
}

/* ═══ ENCABEZADO ═══ */
.evolution-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.evolution-title {
  color: #0f3c61;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2.1rem, 3.8vw, 3.1rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.01em;
  margin: 0;
}

.evolution-subtitle {
  margin-top: 0.25rem;
}

.uninter-accent {
  color: #0084d1;
}

/* ═══ GRID DE TARJETAS ═══ */
.evolution-cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.25rem;
  align-items: stretch;
}

.evolution-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  padding: 3rem 2.5rem;
  box-shadow: 0 10px 30px rgba(15, 60, 97, 0.04);
  display: flex;
  flex-direction: column;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.evolution-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 45px rgba(0, 132, 209, 0.12);
  border-color: rgba(0, 132, 209, 0.35);
}

.evolution-card__title {
  color: #0f3c61;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.3rem, 2vw, 1.55rem);
  font-weight: 800;
  line-height: 1.3;
  margin: 0 0 1.5rem 0;
}

.evolution-card__desc {
  color: #334155;
  font-size: 0.98rem;
  line-height: 1.75;
  margin: 0;
  font-weight: 400;
}

/* ═══ RESPONSIVE ═══ */
@media (max-width: 860px) {
  .career-evolution-section {
    padding: 4rem 0;
  }
  .evolution-header {
    margin-bottom: 2.5rem;
  }
  .evolution-cards-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .evolution-card {
    padding: 2.25rem 1.75rem;
  }
}
</style>
