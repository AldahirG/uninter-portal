<script setup lang="ts">
import { computed } from "vue";
import { Briefcase, Lightbulb } from "lucide-vue-next";

const props = defineProps<{
  data: any;
}>();

// Texto del mercado laboral (estricto al campo mercado_laboral)
const mercadoLaboralText = computed(() => {
  if (props.data?.mercado_laboral && props.data.mercado_laboral.trim() !== '') {
    return props.data.mercado_laboral;
  }
  return "[Pendiente: Añadir información de 'mercado_laboral' en el JSON]";
});


</script>

<template>
  <section class="pg-market-areas-section">
    <div class="uninter-container">
      <div class="market-header">
        <h2 class="section-title">Evoluciona tu perfil <em class="title-accent">Profesional</em></h2>
      </div>
      <div class="cards-grid">
        <!-- Tarjeta 1: Mercado Laboral -->
        <div class="market-card single-card">
          <h3 class="card-title">Mercado Laboral</h3>
          <p class="card-text">
            {{ mercadoLaboralText }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pg-market-areas-section {
  background-color: #f8fafc;
  padding: 5rem 0;
  font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
}

.uninter-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.cards-grid {
  display: flex;
  justify-content: center;
}

.market-card {
  background-color: #ffffff;
  border-radius: 16px;
  padding: 3rem 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  max-width: 800px;
  width: 100%;
}

.market-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 35px rgba(15, 60, 97, 0.08);
}

.market-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.section-title {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: clamp(2rem, 4vw, 2.8rem);
  color: #0f3c61;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;
}

.section-title .title-accent {
  color: var(--p, #0099cc);
  font-style: normal;
}

.card-title {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: 1.6rem;
  color: #0f3c61;
  font-weight: 800;
  margin: 0 0 1.5rem 0;
  line-height: 1.3;
}

.card-text {
  font-size: 1.05rem;
  color: #475569;
  line-height: 1.7;
  margin: 0;
}

@media (max-width: 768px) {
  .cards-grid {
    display: block;
  }
  .market-card {
    padding: 2.5rem 2rem;
  }
  .card-title {
    font-size: 1.8rem;
  }
}
</style>
