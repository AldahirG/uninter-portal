<script setup lang="ts">
</script>

<template>
  <section class="que-es-section">
    <div class="prep-container">
      <div class="que-es-grid">
        
        <!-- Columna Izquierda: Título y Ceja (~40%) -->
        <div class="que-es-left">
          <p class="que-es-eyebrow">Centro de Asesoría UNINTER</p>
          <h2 class="que-es-title">
            ¿Qué es la<br />
            <em>PREP - A?</em>
          </h2>
        </div>

        <!-- Columna Derecha: Texto Explicativo (~60%) -->
        <div class="que-es-right">
          <p class="que-es-desc">
            <strong>PREP-A UNINTER</strong> es un Centro de Asesoría que ofrece prepararte académicamente en el nivel media superior, mediante la modalidad no escolarizada con asesores altamente capacitados dentro de un ambiente bilingüe y multicultural, el cual te permite realizar y concluir tus estudios en un corto lapso de tiempo de acuerdo a tu dedicación y tiempo disponible, contamos con material didáctico oficial en formato digital para que desde cualquier dispositivo puedas acceder a ellos y estudiar.
          </p>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.que-es-section {
  padding: 5rem 1.5rem;
  background: #ffffff;
  border-bottom: 1px solid #eef6f5;
}

.prep-container {
  max-width: 1280px;
  margin: 0 auto;
}

.que-es-grid {
  display: grid;
  grid-template-columns: 0.85fr 1.35fr;
  gap: 3.5rem;
  align-items: center;
}

/* Columna Izquierda */
.que-es-left {
  display: flex;
  flex-direction: column;
}

.que-es-eyebrow {
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #51CAB9;
  margin: 0 0 0.85rem 0;
}

.que-es-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2.3rem, 4vw, 3.4rem);
  font-weight: 800;
  color: #0f3c61;
  line-height: 1.12;
  letter-spacing: -0.02em;
  margin: 0;
}

.que-es-title em {
  font-style: normal;
  color: #51CAB9;
}

/* Columna Derecha */
.que-es-right {
  display: flex;
  align-items: center;
}

.que-es-desc {
  font-size: clamp(0.98rem, 1.2vw, 1.08rem);
  color: #475569;
  line-height: 1.8;
  margin: 0;
}

.que-es-desc strong {
  color: #358880;
  font-weight: 700;
}

/* Responsivo */
@media (max-width: 960px) {
  .que-es-grid {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }

  .que-es-section {
    padding: 3.5rem 1.25rem;
  }
}
</style>
