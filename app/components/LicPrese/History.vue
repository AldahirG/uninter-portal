<script setup lang="ts">
import {
  Sparkles,
  GraduationCap,
  BrainCircuit,
  BrainCircuitIcon,
} from "lucide-vue-next";
</script>

<template>
  <section class="welcome-section">
    <div class="uninter-container">
      <div class="welcome-grid">
        <!-- Columna Izquierda: Texto Principal -->
        <div class="welcome-content">
          <div class="section-eyebrow">
            <span class="eyebrow-line"></span> COMUNIDAD UNINTER
          </div>

          <h2 class="section-title">
            Bienvenido a la <br />
            <span class="title-highlight">comunidad UNINTER</span>
          </h2>

          <p class="section-text">
            Desde 1980, nuestra Institución está comprometida a ofrecer una
            educación de calidad para ayudar a que personas como tú alcancen sus
            metas educativas y personales.
          </p>
          <p class="section-text">
            Queremos que te unas a más de
            <strong>71,000 profesionistas mexicanos y extranjeros</strong>
            egresados de la Universidad Internacional, que hoy son capaces de
            alcanzar sus sueños y aspiraciones profesionales. Tú como ellos
            puedes dar el primer paso al integrarte al camino de la preparación
            para el futuro, mientras nosotros te apoyaremos e impulsaremos a lo
            largo de este camino.
          </p>
        </div>

        <!-- Columna Derecha: Tarjeta de Resalte (Estilo limpio de tu diseño) -->
        <div class="welcome-highlight">
          <div class="info-card">
            <div class="card-icon-wrapper">
              <BrainCircuitIcon :size="24" class="card-icon" />
            </div>
            <h3 class="card-title">Pensamiento creativo e innovador</h3>
            <p class="card-text">
              En Universidad Internacional formamos jóvenes con conocimientos
              sólidos, los cuales son complementados con programas de lenguas
              extranjeras y materias prácticas.
            </p>
            <p class="card-text">
              Esto les permite desarrollar su pensamiento creativo y continuar
              sus estudios profesionales con <strong>garantía de éxito.</strong>
            </p>

            <!-- Detalle decorativo sutil -->
            <div class="card-footer">
              <GraduationCap :size="16" class="footer-icon" />
              <span>Preparación para el futuro</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Contenedor principal alineado con tu layout */
.uninter-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Sección con mucho respiro (padding) para ese look relajado y limpio */
.welcome-section {
  padding: 6rem 0;
  background-color: #fafafa; /* Un gris muuuy sutil, casi blanco, para separar secciones */
}

/* Grid para dividir en dos columnas en escritorio */
.welcome-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 860px) {
  .welcome-grid {
    grid-template-columns: 1.1fr 0.9fr;
    gap: 5rem;
  }
}

/* --- ESTILOS TEXTO IZQUIERDO (Basado en tu imagen) --- */
.section-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #0f3c61; /* Azul principal */
  margin-bottom: 1.25rem;
}

.eyebrow-line {
  display: block;
  width: 24px;
  height: 2px;
  background: #0f3c61;
}

.section-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.15;
  color: #1e293b; /* Tono oscuro suave */
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.title-highlight {
  color: #0f3c61; /* Azul UNINTER */
}

.section-text {
  font-size: 1.05rem;
  color: #475569; /* Gris pizarra legible y moderno */
  line-height: 1.7;
  margin-bottom: 1.25rem;
}
.section-text strong {
  color: #0f3c61;
  font-weight: 600;
}

/* --- ESTILOS TARJETA DERECHA (Basado en tus Historias de Éxito) --- */
.info-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.04);
  position: relative;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.info-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px -10px rgba(0, 0, 0, 0.08);
}

/* Círculo con el ícono (Estilo de las iniciales en tu imagen) */
.card-icon-wrapper {
  width: 48px;
  height: 48px;
  background-color: #1565c0; /* Azul vibrante */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  margin-bottom: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f3c61;
  margin-bottom: 1rem;
  line-height: 1.3;
}

.card-text {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1rem;
}
.card-text strong {
  color: #1e293b;
}

.card-footer {
  margin-top: 2rem;
  padding-top: 1.25rem;
  border-top: 1px solid #f1f5f9;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.footer-icon {
  color: #1565c0;
}

/* --- RESPONSIVE ADICIONAL --- */
@media (max-width: 640px) {
  .welcome-section {
    padding: 4rem 0;
  }
  .info-card {
    padding: 1.75rem;
  }
}
</style>
