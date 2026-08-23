<script setup lang="ts">
interface CareerData {
  id?: string;
  name: string;
  slug?: string;
  ingreso?: string;
  egreso?: string;
  description?: string;
  [key: string]: any;
}

const props = defineProps<{
  data: CareerData;
}>();
</script>

<template>
  <section class="diplomado-profiles-section" id="perfiles">
    <div class="uninter-container">
      <div class="profiles-cards-grid">
        <!-- Tarjeta 1: Perfil de Ingreso -->
        <div class="profile-card">
          <h3 class="profile-card__title">
            Perfil de <span class="profile-accent">Ingreso</span>
          </h3>
          <p class="profile-card__desc">
            {{ data?.ingreso || 'Dirigido a profesionistas, egresados y estudiantes con interés en desarrollar competencias avanzadas en esta disciplina.' }}
          </p>
        </div>

        <!-- Tarjeta 2: Perfil de Egreso -->
        <div class="profile-card">
          <h3 class="profile-card__title">
            Perfil de <span class="profile-accent">Egreso</span>
          </h3>
          <p class="profile-card__desc">
            {{ data?.egreso || 'Al concluir el programa, contarás con habilidades técnicas y estratégicas para liderar y aplicar soluciones innovadoras en tu sector profesional.' }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.diplomado-profiles-section {
  background-color: #f8fafc;
  padding: 5rem 0 5.5rem;
  font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
}

.uninter-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
}

/* ═══ GRID DE TARJETAS ═══ */
.profiles-cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.25rem;
  align-items: stretch;
}

.profile-card {
  background: #ffffff;
  border: 1px solid #fed7aa80;
  border-radius: 24px;
  padding: 3.25rem 2.75rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.profile-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(234, 88, 12, 0.08);
  border-color: #ea580c;
}

.profile-card__title {
  color: #0f3c61;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.85rem, 3vw, 2.4rem);
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: -0.01em;
  margin: 0 0 1.75rem 0;
}

.profile-accent {
  color: #e26a1b;
  font-style: italic;
  font-family: var(--font-serif, Georgia, serif);
}

.profile-card__desc {
  color: #334155;
  font-size: 1rem;
  line-height: 1.75;
  margin: 0;
  font-weight: 400;
}

/* ═══ RESPONSIVE ═══ */
@media (max-width: 860px) {
  .diplomado-profiles-section {
    padding: 3.5rem 0 4rem;
  }
  .profiles-cards-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .profile-card {
    padding: 2.25rem 1.75rem;
  }
}
</style>
