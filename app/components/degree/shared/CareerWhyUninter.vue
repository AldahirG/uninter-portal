<script setup lang="ts">
import { defineProps } from "vue";
import { CheckCircle2, ShieldCheck, Globe, Users } from "lucide-vue-next";

// Props dinámicos
const props = defineProps<{
  whyUninter?: Array<{ text: string, icon?: string, evidence?: string }>;
  careerName?: string;
}>();

const defaultWhy = [
  {
    text: "Modelo Educativo Blended",
    evidence: "Aprende de forma flexible combinando práctica presencial y recursos digitales avanzados.",
    icon: "ShieldCheck"
  },
  {
    text: "Ecosistema Internacional",
    evidence: "Más de 50 convenios globales y programas de movilidad para potenciar tu currículum.",
    icon: "Globe"
  },
  {
    text: "Profesores en Activo",
    evidence: "Aprende de especialistas y directivos que trabajan en las industrias que te apasionan.",
    icon: "Users"
  }
];

const reasons = props.whyUninter || defaultWhy;
</script>

<template>
  <section class="why-uninter-section">
    <div class="uninter-container">
      <div class="why-header">
        <h2 class="why-title">¿Por qué elegir este <em>programa</em>?</h2>
        <p class="why-subtitle">Beneficios diferenciadores de estudiar {{ careerName ? careerName : 'en UNINTER' }}</p>
      </div>

      <div class="why-grid">
        <div v-for="(item, idx) in reasons" :key="idx" class="why-card">
          <div class="why-icon-box">
            <CheckCircle2 v-if="!item.icon || item.icon === 'CheckCircle2'" :size="28" />
            <ShieldCheck v-else-if="item.icon === 'ShieldCheck'" :size="28" />
            <Globe v-else-if="item.icon === 'Globe'" :size="28" />
            <Users v-else-if="item.icon === 'Users'" :size="28" />
            <Icon v-else :name="item.icon" size="28" />
          </div>
          <div class="why-content">
            <h3 class="why-card-title">{{ item.text }}</h3>
            <p v-if="item.evidence" class="why-card-evidence">{{ item.evidence }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-uninter-section {
  background-color: #ffffff;
  padding: 5rem 0;
  border-bottom: 1px solid #e2e8f0;
}

.uninter-container {
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.why-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.why-title {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: clamp(2rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 0.5rem 0;
}

.why-title em {
  font-style: italic;
  color: var(--p, #1565c0);
}

.why-subtitle {
  font-size: 1.1rem;
  color: #475569;
  margin: 0;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.why-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.why-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px -5px rgba(15, 60, 97, 0.1);
  border-color: rgba(21, 101, 192, 0.2);
}

.why-icon-box {
  width: 56px;
  height: 56px;
  background: var(--p-light, #e0f2fe);
  color: var(--p, #1565c0);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.why-card:hover .why-icon-box {
  transform: scale(1.1);
}

.why-card-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #0f3c61;
  margin: 0 0 0.5rem 0;
}

.why-card-evidence {
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.6;
  margin: 0;
}
</style>
