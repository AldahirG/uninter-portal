<script setup lang="ts">
const beneficios = [
  {
    num: "01",
    titulo: "Pase Directo a la Universidad",
    desc: "Continuidad académica garantizada a cualquiera de nuestras licenciaturas e ingenierías UNINTER sin examen de admisión.",
    icon: "mdi:school",
    destacado: true
  },
  {
    num: "02",
    titulo: "Alto Nivel de Acreditación",
    desc: "Metodología comprobada que te prepara eficazmente para obtener excelentes resultados en tus exámenes oficiales.",
    icon: "mdi:certificate-outline",
    destacado: false
  },
  {
    num: "03",
    titulo: "Ambiente Multicultural",
    desc: "Interactúa con estudiantes y docentes de diversos países dentro de un entorno inclusivo con visión internacional.",
    icon: "mdi:earth",
    destacado: false
  },
  {
    num: "04",
    titulo: "Asesorías en Horarios Flexibles",
    desc: "Sesiones y tutorías personalizadas con profesores expertos que se adaptan a tus tiempos y disponibilidad.",
    icon: "mdi:calendar-clock",
    destacado: false
  },
  {
    num: "05",
    titulo: "Sistema de Equivalencias",
    desc: "Revalidamos tus materias previas cursadas en otras instituciones para que no comiences desde cero.",
    icon: "mdi:sync",
    destacado: false
  },
  {
    num: "06",
    titulo: "Seguimiento de Estudios",
    desc: "Acompañamiento tutorial continuo y monitoreo de tu avance para asegurar que concluyas tu bachillerato a tiempo.",
    icon: "mdi:chart-line",
    destacado: false
  }
];
</script>

<template>
  <section class="beneficios-section">
    <div class="ben-container">
      
      <!-- Encabezado de la Sección -->
      <div class="ben-header">
        <span class="ben-eyebrow">Ventajas Exclusivas</span>
        <h2 class="ben-title">Beneficios de Estudiar en PREP-A</h2>
        <p class="ben-lead">
          Diseñamos un modelo flexible que se adapta a tu estilo de vida, respaldado por la calidad, infraestructura y prestigio universitario de UNINTER.
        </p>
      </div>

      <!-- Grid de Beneficios -->
      <div class="ben-grid">
        <div 
          v-for="(b, idx) in beneficios" 
          :key="idx" 
          class="ben-card"
          :class="{ 'ben-card--featured': b.destacado }"
        >
          <div class="ben-card-top">
            <div class="ben-icon-wrap">
              <Icon :name="b.icon" size="26" />
            </div>
            <span class="ben-num">{{ b.num }}</span>
          </div>

          <h3 class="ben-card-title">{{ b.titulo }}</h3>
          <p class="ben-card-desc">{{ b.desc }}</p>
        </div>
      </div>

      <!-- Botón de Talleres y Actividades Extracurriculares -->
      <div class="ben-action-wrap">
        <a 
          href="https://uninter.edu.mx/talleres/" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="ben-talleres-btn"
        >
          <div class="ben-btn-icon">
            <Icon name="mdi:palette-swatch-outline" size="22" />
          </div>
          <span class="ben-btn-text">Ver Talleres y Actividades Extracurriculares</span>
          <Icon name="mdi:arrow-top-right" size="18" class="ben-btn-arrow" />
        </a>
      </div>

    </div>
  </section>
</template>

<style scoped>
.beneficios-section {
  padding: 5.5rem 1.5rem;
  background: linear-gradient(180deg, #f7fbfa 0%, #ffffff 100%);
  position: relative;
}

.ben-container {
  max-width: 1240px;
  margin: 0 auto;
}

/* Encabezado */
.ben-header {
  text-align: center;
  max-width: 740px;
  margin: 0 auto 3.5rem auto;
}

.ben-eyebrow {
  display: inline-block;
  font-size: 0.76rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #358880;
  background: #effaf9;
  padding: 0.35rem 0.95rem;
  border-radius: 999px;
  margin-bottom: 0.75rem;
}

.ben-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 3.8vw, 2.9rem);
  font-weight: 800;
  color: #0f3c61;
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin: 0 0 1rem 0;
}

.ben-lead {
  font-size: 1.05rem;
  color: #64748b;
  line-height: 1.65;
  margin: 0;
}

/* Grid de Beneficios */
.ben-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3.5rem;
}

.ben-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 22px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.03);
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
}

.ben-card:hover {
  transform: translateY(-5px);
  border-color: #51CAB9;
  box-shadow: 0 14px 32px rgba(81, 202, 185, 0.18);
}

.ben-card--featured {
  border-color: #c9ede7;
  background: linear-gradient(180deg, #ffffff 0%, #fafdff 100%);
}

.ben-card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
}

.ben-icon-wrap {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: #effaf9;
  color: #358880;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.ben-card:hover .ben-icon-wrap {
  background: #51CAB9;
  color: #ffffff;
  transform: scale(1.05);
}

.ben-num {
  font-size: 0.85rem;
  font-weight: 800;
  color: #cbd5e1;
  letter-spacing: 0.05em;
}

.ben-card-title {
  font-size: 1.15rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 0.6rem 0;
  line-height: 1.3;
}

.ben-card-desc {
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.55;
  margin: 0;
}

/* Botón de Acción a Talleres */
.ben-action-wrap {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.ben-talleres-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  background: #0f3c61;
  color: #ffffff;
  padding: 0.95rem 2rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.98rem;
  text-decoration: none;
  border: 1px solid rgba(81, 202, 185, 0.4);
  box-shadow: 0 8px 24px rgba(15, 60, 97, 0.18);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.ben-talleres-btn:hover {
  background: #358880;
  border-color: #51CAB9;
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(53, 136, 128, 0.28);
  color: #ffffff;
}

.ben-btn-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(81, 202, 185, 0.2);
  color: #51CAB9;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.ben-talleres-btn:hover .ben-btn-icon {
  background: #ffffff;
  color: #358880;
  transform: scale(1.1);
}

.ben-btn-text {
  letter-spacing: 0.01em;
}

.ben-btn-arrow {
  color: #51CAB9;
  transition: transform 0.3s ease;
}

.ben-talleres-btn:hover .ben-btn-arrow {
  transform: translate(2px, -2px);
  color: #ffffff;
}

@media (max-width: 640px) {
  .ben-grid {
    grid-template-columns: 1fr;
  }
  .ben-talleres-btn {
    width: 100%;
    justify-content: center;
    padding: 0.85rem 1.25rem;
    font-size: 0.88rem;
  }
}
</style>
