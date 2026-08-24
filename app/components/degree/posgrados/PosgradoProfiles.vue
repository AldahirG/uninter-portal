<script setup lang="ts">
interface CareerData {
  ingreso?: string | string[];
  egreso?: string | string[];
  [key: string]: any;
}

const props = defineProps<{ data: CareerData }>();
</script>

<template>
  <section v-if="data?.ingreso || data?.egreso" class="pg-profiles-section" id="perfiles">
    <div class="uninter-container">
      <div class="profiles-grid" :class="{'single-profile': !data?.ingreso || !data?.egreso}">
        
        <!-- Perfil de Ingreso -->
        <div v-if="data?.ingreso" class="profile-card">
          <h3 class="profile-card__title">
            Perfil de <span class="uninter-accent">Ingreso</span>
          </h3>
          <div class="profile-card__content">
            <ul v-if="Array.isArray(data.ingreso)" class="profile-list">
              <li v-for="(item, idx) in data.ingreso" :key="idx">{{ item }}</li>
            </ul>
            <p v-else>{{ data.ingreso }}</p>
          </div>
        </div>

        <!-- Perfil de Egreso -->
        <div v-if="data?.egreso" class="profile-card">
          <h3 class="profile-card__title">
            Perfil de <span class="uninter-accent">Egreso</span>
          </h3>
          <div class="profile-card__content">
            <ul v-if="Array.isArray(data.egreso)" class="profile-list">
              <li v-for="(item, idx) in data.egreso" :key="idx">{{ item }}</li>
            </ul>
            <p v-else>{{ data.egreso }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.pg-profiles-section {
  padding: 4rem 0 6rem;
  background-color: #ffffff;
  font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
}

.uninter-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
}

.profiles-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  align-items: stretch;
}

.profiles-grid.single-profile {
  grid-template-columns: 1fr;
  max-width: 800px;
  margin: 0 auto;
}

.profile-card {
  background: #ffffff;
  border: 1px solid #f1f5f9;
  border-radius: 20px;
  padding: 3rem 2.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(143, 154, 62, 0.08);
  border-color: rgba(143, 154, 62, 0.2);
}

.profile-card__title {
  color: #0f3c61;
  font-family: var(--font-serif, Georgia, serif);
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 1.5rem 0;
  letter-spacing: -0.01em;
}

.uninter-accent {
  color: #8f9a3e; /* Verde posgrados */
}

.profile-card__content {
  color: #475569;
  font-size: 1rem;
  line-height: 1.7;
}

.profile-card__content p {
  margin: 0;
}

.profile-list {
  margin: 0;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.profile-list li {
  list-style-type: disc;
}

@media (max-width: 860px) {
  .profiles-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .profile-card {
    padding: 2.25rem 1.75rem;
  }
}
</style>