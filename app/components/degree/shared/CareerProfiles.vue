<template>
  <section class="career-profiles-section" v-if="admissionProfile || graduateProfile">
    <div class="profiles-container">
      <div class="profile-card" v-if="admissionProfile">
        <h3 class="profile-title">Perfil de <span>Ingreso</span></h3>
        <p class="profile-text">{{ admissionProfile }}</p>
      </div>
      <div class="profile-card" v-if="graduateProfile">
        <h3 class="profile-title">Perfil de <span>Egreso</span></h3>
        <p class="profile-text">{{ graduateProfile }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  admissionProfile?: string;
  graduateProfile?: string;
}>();
</script>

<style scoped>
.career-profiles-section {
  padding: 3rem 1rem;
  display: flex;
  justify-content: center;
  background-color: transparent;
}

.profiles-container {
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .profiles-container {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
}

.profile-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 3rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.profile-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.1);
}

.profile-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 2.2rem;
  color: #1a365d;
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.profile-title span {
  color: #1976d2;
}

.profile-text {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #4a5568;
  margin: 0;
}
</style>
