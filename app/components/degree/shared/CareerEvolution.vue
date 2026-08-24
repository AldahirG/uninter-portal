<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  careerName: string;
  description: string;
}>();

const ambienteText = "Vive una inmersión total en el mundo obteniendo experiencia real desde antes de graduarte al desarrollar estrategias y proyectos para clientes reales. Al mismo tiempo, potencia tu perfil competitivo con una formación especializada que integra el dominio práctico en entornos profesionales, certificaciones clave en tu área, y un enfoque totalmente práctico orientado a la innovación.";
</script>

<template>
  <section class="career-evolution-section">
    <div class="uninter-container">
      <div class="evolution-header">
        <h2 class="section-title">Del aula a la industria: <br> Tu evolución en <em class="title-accent">UNINTER</em></h2>
      </div>

      <div class="evolution-grid">
        <div class="evolution-card">
          <h3>¿Qué hace un(a) Licenciado(a) en {{ careerName }}?</h3>
          <p>{{ description }}</p>
        </div>

        <div class="evolution-card">
          <h3>Ambiente UNINTER</h3>
          <p>{{ ambienteText }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.career-evolution-section {
  padding: 5rem 0;
  background-color: #ffffff;
  font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
}

.uninter-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.evolution-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.evolution-header h2 {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 1rem 0;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.evolution-header h2 .title-accent {
  color: #0099cc;
  font-style: normal;
  position: relative;
  display: inline-block;
}

.evolution-header h2 .title-accent::after {
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

.evolution-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.evolution-card {
  background-color: rgba(15, 60, 97, 0.02); /* Fondo con un toque muy ligero de azul */
  border: 1px solid rgba(15, 60, 97, 0.04); /* Contorno casi invisible */
  border-radius: 16px;
  padding: 2.5rem;
  box-shadow: 0 20px 40px rgba(15, 60, 97, 0.08); /* Sombra amplia para dar espacio y que sobresalga */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.evolution-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 25px 50px rgba(15, 60, 97, 0.12);
}

.evolution-card h3 {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.4rem;
  font-weight: 800;
  color: #0f3c61;
  margin-bottom: 1.5rem;
  line-height: 1.3;
}

.evolution-card p {
  font-size: 1rem;
  color: #333;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .evolution-grid {
    grid-template-columns: 1fr;
  }
  .evolution-header h2 {
    font-size: 2rem;
  }
}
</style>
