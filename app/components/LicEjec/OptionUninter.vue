<script setup lang="ts">
import { CheckCircle2 } from "lucide-vue-next";

const options = [
  {
    titulo: "Calidad y acreditaciones",
    items: [
      "Más de 40 años de calidad educativa y prestigio institucional.",
      "Por décimo tercer año consecutivo en el ranking de las mejores universidades.",
      "Certificación ISO 9001:2015 en todos nuestros procesos académicos y administrativos.",
      "Acreditación FIMPES.",
      "Múltiples opciones de titulación: Excelencia Académica, Tesis, Posgrado, CENEVAL y Experiencia Profesional.",
      "Certificaciones y acreditaciones oficiales ante la SEP."
    ]
  },
  {
    titulo: "Flexibilidad y modelo ejecutivo",
    items: [
      "Planes cuatrimestrales estructurados para terminar en 3 años.",
      "Horarios diseñados para compatibilizar trabajo, familia y estudio.",
      "Plataforma digital disponible 24/7 para entrega de proyectos y consultas.",
      "Acompañamiento docente y tutorías personalizadas.",
      "Contenidos de aplicación práctica e inmediata en el entorno empresarial.",
      "Networking activo con profesionistas de distintas áreas e industrias."
    ]
  },
  {
    titulo: "Desarrollo y vinculación profesional",
    items: [
      "Más de 1,500 vínculos empresariales para vinculación laboral y proyectos.",
      "Bolsa de trabajo ejecutiva con ofertas exclusivas.",
      "Asesorías académicas y de desarrollo profesional sin costo.",
      "Congresos, foros de negocios, simposios y conferencias magistrales.",
      "Desarrollo de proyectos orientados a la solución de casos reales."
    ]
  },
  {
    titulo: "Internacionalización",
    items: [
      "Convenios académicos con más de 130 Universidades en el mundo.",
      "Opción de Doble Titulación Internacional.",
      "Acceso a programas de idiomas: Inglés, Francés, Alemán, Chino, Italiano.",
      "Profesores con amplia trayectoria profesional y perfil internacional."
    ]
  }
];
</script>

<template>
  <section class="opt-section">
    <div class="opt-reasons">
      <div class="uninter-container">
        <div class="opt-reasons__header">
          <div class="section-eyebrow">
            <span class="eyebrow-line"></span> RAZONES PARA ELEGIR UNINTER EJECUTIVAS
          </div>
          <h3 class="opt-reasons__title">
            Conócenos y <em>compáranos</em>
          </h3>
        </div>
        <div class="opt-grid">
          <div v-for="opt in options" :key="opt.titulo" class="opt-card">
            <h4 class="opt-card__title">{{ opt.titulo }}</h4>
            <ul class="opt-card__list">
              <li v-for="item in opt.items" :key="item" class="opt-card__item">
                <CheckCircle2 :size="15" class="opt-card__icon" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.uninter-container {
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1.5rem;
}

.opt-section {
  background: #ffffff;
}

.opt-reasons {
  background: #ffffff;
  padding: 5rem 0;
  border-bottom: 1px solid #e2e8f0;
}

.opt-reasons__header {
  margin-bottom: 3rem;
}

.section-eyebrow {
  align-items: center;
  color: #0073b4;
  display: flex;
  font-size: 0.75rem;
  font-weight: 800;
  gap: 0.75rem;
  letter-spacing: 0.14em;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
}

.eyebrow-line {
  background: #0073b4;
  display: block;
  flex-shrink: 0;
  height: 2px;
  width: 24px;
}

.opt-reasons__title {
  color: #0f3c61;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.15;
  margin: 0;
}

.opt-reasons__title em {
  color: #694E39;
  font-style: italic;
}

.opt-grid {
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
}

.opt-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(105, 78, 57, 0.06);
  padding: 2rem 2rem 2.25rem;
  transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s;
}

.opt-card:hover {
  border-color: #A78D75;
  box-shadow: 0 10px 30px rgba(105, 78, 57, 0.12);
  transform: translateY(-2px);
}

.opt-card__title {
  border-bottom: 2px solid #f1f5f9;
  color: #694E39;
  font-size: 1.1rem;
  font-weight: 800;
  line-height: 1.25;
  margin: 0 0 1.25rem;
  padding-bottom: 0.75rem;
  text-transform: uppercase;
}

.opt-card__list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.opt-card__item {
  align-items: flex-start;
  color: #475569;
  display: flex;
  font-size: 0.9rem;
  gap: 0.65rem;
  line-height: 1.5;
}

.opt-card__icon {
  color: #694E39;
  flex-shrink: 0;
  margin-top: 3px;
}

@media (max-width: 900px) {
  .opt-grid {
    grid-template-columns: 1fr;
  }
}
</style>
