const fs = require('fs');

const content = `<script setup lang="ts">
import {
  Award,
  BookOpen,
  Globe,
  Clock,
  Check,
} from "lucide-vue-next";
import BecaWizard from "~/components/degree/shared/BecaWizard.vue";

const highlights = [
  { icon: Award, value: "Hasta 60%", label: "de beca disponible" },
  { icon: BookOpen, value: "23", label: "licenciaturas presenciales" },
  { icon: Globe, value: "71,000+", label: "egresados en México y el mundo" },
  { icon: Clock, value: "4 años", label: "duración promedio" },
];

const benefits = [
  "Colegiatura mensual con descuento garantizado",
  "Acceso a instalaciones de clase mundial",
  "Movilidad e intercambio internacional",
  "Bolsa de trabajo Enlace Profesional UNINTER",
  "Talleres deportivos y culturales incluidos",
];
</script>

<template>
  <section class="beca-section">
    <div class="beca-container">

      <!-- Columna izquierda: información -->
      <div class="beca-info">
        <p class="beca-eyebrow">Apoyo económico</p>
        <h2 class="beca-title">Calcula tu<br /><em>porcentaje de beca</em></h2>
        <p class="beca-desc">
          En UNINTER creemos que el talento no debe tener límites económicos.
          Completa el formulario y descubre de inmediato qué porcentaje de beca
          puedes obtener para iniciar tu licenciatura presencial.
        </p>

        <!-- Métricas destacadas -->
        <div class="beca-highlights">
          <div v-for="h in highlights" :key="h.label" class="beca-hl">
            <div class="beca-hl__icon">
              <component :is="h.icon" :size="20" />
            </div>
            <div>
              <p class="beca-hl__value">{{ h.value }}</p>
              <p class="beca-hl__label">{{ h.label }}</p>
            </div>
          </div>
        </div>

        <!-- Lista de beneficios -->
        <div class="beca-benefits">
          <p class="beca-benefits__heading">Beneficios incluidos con tu beca</p>
          <ul class="beca-benefits__list">
            <li v-for="b in benefits" :key="b" class="beca-benefits__item">
              <Check :size="14" class="beca-benefits__check" />
              {{ b }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Columna derecha: formulario / resultado -->
      <div class="beca-form-wrap">
        <BecaWizard />
      </div>

    </div>
  </section>
</template>

<style scoped>
/* -- Sección ------------------------------------------------- */
.beca-section {
  background: linear-gradient(160deg, #0d2f4f 0%, #003B5C 55%, #0073B4 100%);
  padding: 5rem 0;
  position: relative;
  overflow: hidden;
}

.beca-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 20% 80%, rgba(255,255,255,0.04) 0%, transparent 50%),
                    radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 50%);
  pointer-events: none;
}

.beca-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  position: relative;
}

/* -- Columna info -------------------------------------------- */
.beca-eyebrow {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.55);
  margin: 0 0 0.75rem;
}

.beca-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.15;
  margin: 0 0 1.25rem;
}

.beca-title em {
  font-style: normal;
  color: #00B2E3;
}

.beca-desc {
  font-size: 0.95rem;
  color: rgba(255,255,255,0.72);
  line-height: 1.7;
  margin: 0 0 2.25rem;
  max-width: 440px;
}

/* Métricas */
.beca-highlights {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2.25rem;
}

.beca-hl {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 10px;
  padding: 0.875rem 1rem;
}

.beca-hl__icon {
  width: 38px;
  height: 38px;
  border-radius: 8px;
  background: rgba(96,165,250,0.18);
  color: #00B2E3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.beca-hl__value {
  font-size: 1.05rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
  line-height: 1.1;
}

.beca-hl__label {
  font-size: 0.68rem;
  color: rgba(255,255,255,0.55);
  margin: 0.1rem 0 0;
}

/* Beneficios */
.beca-benefits__heading {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.45);
  margin: 0 0 0.75rem;
}

.beca-benefits__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.beca-benefits__item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: rgba(255,255,255,0.78);
}

.beca-benefits__check {
  color: #34d399;
  flex-shrink: 0;
}

.beca-form-wrap {
  display: flex;
  justify-content: center;
}

/* -- Responsive ---------------------------------------------- */
@media (max-width: 900px) {
  .beca-container {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .beca-title {
    font-size: 2rem;
  }

  .beca-desc {
    max-width: 100%;
  }

  .beca-form-wrap {
    width: 100%;
  }
}

@media (max-width: 560px) {
  .beca-section {
    padding: 3.5rem 0;
  }

  .beca-highlights {
    grid-template-columns: 1fr 1fr;
    gap: 0.625rem;
  }
}
</style>
`;

fs.writeFileSync('c:/Users/PC-1143/Desktop/Sites/uninter-portal/app/components/LicPrese/CalScholarship.vue', content);
console.log('CalScholarship.vue completely rewritten');
