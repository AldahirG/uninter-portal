<script setup lang="ts">
import { ref, computed } from "vue";
import { FileText, ArrowRight } from "lucide-vue-next";

// Tus datos originales
const DataCard = [
  {
    title: "LICENCIATURAS EN CIENCIAS SOCIALES Y HUMANIDADES",
    bachelors: [
      {
        title: "Ciencias Politicas y Gestión Pública (LCP)",
        href: "https://universidad.uninter.edu.mx/carreras/LCP",
        brochure: "https://uninter.edu.mx/folletos/lcp/",
      },
      {
        title: "Comunicacion (LCO)",
        href: "https://universidad.uninter.edu.mx/carreras/LCO",
        trophy: true,
        medal: true,
        brochure: "https://uninter.edu.mx/folletos/lco/",
      },
      {
        title: "Comunicación y Relaciones Públicas (CORP)",
        href: "https://universidad.uninter.edu.mx/carreras/CORP",
        trophy: true,
        medal: true,
        brochure: "https://uninter.edu.mx/folletos/corp/",
      },
      {
        title: "Derecho (LED)",
        href: "https://universidad.uninter.edu.mx/carreras/LED",
        brochure: "https://uninter.edu.mx/folletos/led/",
      },
      {
        title: "Idiomas (LID)",
        href: "https://universidad.uninter.edu.mx/carreras/LID",
        brochure: "https://uninter.edu.mx/folletos/lid/",
      },
      {
        title: "Pedagogía (LPE)",
        href: "https://universidad.uninter.edu.mx/carreras/LPE",
        brochure: "https://uninter.edu.mx/folletos/lpe/",
      },
      {
        title: "Psicología (LPS)",
        href: "https://universidad.uninter.edu.mx/carreras/LPS",
        brochure: "https://uninter.edu.mx/folletos/lps/",
      },
      {
        title: "Relaciones Internacionales (LRI)",
        href: "https://universidad.uninter.edu.mx/carreras/LRI",
        trophy: true,
        medal: true,
        brochure: "https://uninter.edu.mx/folletos/lri/",
      },
      {
        title: "Relaciones Internacionales y Ciencias Politicas (RICP)",
        href: "https://universidad.uninter.edu.mx/carreras/RICP",
        trophy: true,
        medal: true,
        brochure: "https://uninter.edu.mx/folletos/ricp/",
      },
      {
        title: "Relaciones Internacionales y Economía (RIEC)",
        href: "https://universidad.uninter.edu.mx/carreras/RIEC",
        trophy: true,
        medal: true,
        brochure: "https://uninter.edu.mx/folletos/riec/",
      },
    ],
  },
  {
    title: "LICENCIATURAS EN NEGOCIOS Y ADMINISTRACIÓN",
    bachelors: [
      {
        title: "Administración de Empresas (LAE)",
        href: "https://universidad.uninter.edu.mx/carreras/LAE",
        trophy: true,
        medal: true,
        brochure: "https://uninter.edu.mx/folletos/lae/",
      },
      {
        title: "Administración de Empresas Turísticas (LAET)",
        href: "https://universidad.uninter.edu.mx/carreras/LAET",
        trophy: true,
        medal: true,
        brochure: "https://uninter.edu.mx/folletos/laet/",
      },
      {
        title: "Administración de Negocios Internacionales (LANI)",
        href: "https://universidad.uninter.edu.mx/carreras/LANI",
        trophy: true,
        medal: true,
        brochure: "https://uninter.edu.mx/folletos/lani/",
      },
      {
        title: "Administracion y Mercadotecnia (LAM)",
        href: "https://universidad.uninter.edu.mx/carreras/LAM",
        trophy: true,
        medal: true,
        brochure: "https://uninter.edu.mx/folletos/lam/",
      },
      {
        title: "Comercio Exterior (LCE)",
        href: "https://universidad.uninter.edu.mx/carreras/LCE",
        brochure: "https://uninter.edu.mx/folletos/lce/",
      },
      {
        title: "Economia y Finanzas (LEF)",
        href: "https://universidad.uninter.edu.mx/carreras/LEF",
        trophy: true,
        medal: true,
        brochure: "https://uninter.edu.mx/folletos/lef/",
      },
      {
        title: "Mercadotecnia (LME)",
        href: "https://universidad.uninter.edu.mx/carreras/LME",
        trophy: true,
        medal: true,
        brochure: "https://uninter.edu.mx/folletos/lme/",
      },
      {
        title: "Mercadotecnia y Publicidad (LEMP)",
        href: "https://universidad.uninter.edu.mx/carreras/LEMP",
        trophy: true,
        medal: true,
        brochure: "https://uninter.edu.mx/folletos/lemp/",
      },
    ],
  },
  {
    title: "LICENCIATURAS EN DISEÑO Y ARTES",
    bachelors: [
      {
        title: "Arquitectura (ARQ)",
        href: "https://universidad.uninter.edu.mx/carreras/ARQ",
        trophy: true,
        medal: true,
        brochure: "https://uninter.edu.mx/folletos/arq/",
      },
      {
        title: "Animación y Diseño Digital (LADD)",
        href: "https://universidad.uninter.edu.mx/carreras/LADD",
        trophy: true,
        medal: true,
        brochure: "https://uninter.edu.mx/folletos/ladd/",
      },
      {
        title: "Diseño Gráfico (LDG)",
        href: "https://universidad.uninter.edu.mx/carreras/LDG",
        trophy: true,
        medal: true,
        brochure: "https://uninter.edu.mx/folletos/ldg/",
      },
      {
        title: "Diseño Industrial (LDI)",
        href: "https://universidad.uninter.edu.mx/carreras/LDI",
        trophy: true,
        medal: true,
        brochure: "https://uninter.edu.mx/folletos/ldi/",
      },
      {
        title: "Diseño de Modas y Tendencias Internacionales (LDM)",
        href: "https://universidad.uninter.edu.mx/carreras/LDM",
        trophy: true,
        medal: true,
        brochure: "https://uninter.edu.mx/folletos/ldm/",
      },
    ],
  },
  {
    title: "LICENCIATURAS EN INGENIERÍA",
    bachelors: [
      {
        title: "Ambiental (IAM)",
        href: "https://universidad.uninter.edu.mx/carreras/IAM",
        brochure: "https://uninter.edu.mx/folletos/iam/",
      },
      {
        title: "Civil (ICI)",
        href: "https://universidad.uninter.edu.mx/carreras/ICI",
        trophy: true,
        medal: true,
        brochure: "https://uninter.edu.mx/folletos/ici/",
      },
      {
        title: "Industrial y de Sistemas de Calidad (IISCA)",
        href: "https://universidad.uninter.edu.mx/carreras/IISCA",
        brochure: "https://uninter.edu.mx/folletos/iisca/",
      },
      {
        title: "Mecatronica (IME)",
        href: "https://universidad.uninter.edu.mx/carreras/IME",
        brochure: "https://uninter.edu.mx/folletos/ime/",
      },
      {
        title: "Mecanica Industrial (IMI)",
        href: "https://universidad.uninter.edu.mx/carreras/IMI",
        brochure: "https://uninter.edu.mx/folletos/imi/",
      },
      {
        title: "Sistmas Computacionales (ISC)",
        href: "https://universidad.uninter.edu.mx/carreras/ISC",
        brochure: "https://uninter.edu.mx/folletos/isc/",
      },
    ],
  },
];

const processedCards = computed(() => {
  return DataCard.map((card) => {
    return {
      ...card,
      destacadas: card.bachelors.filter((b) => b.trophy || b.medal),
      regulares: card.bachelors.filter((b) => !b.trophy && !b.medal),
    };
  });
});

// --- LÓGICA DE INTERACTIVIDAD (Expandir Tarjetas) ---

// Estado para Expandir
const expandedCardIndex = ref<number | null>(null);
const activeExpandedData = ref<any>(null);

// Función principal al dar clic en cualquier carrera
const handleItemClick = (cardIndex: number, bachelorData: any) => {
  // Si da clic en la misma carrera que ya está abierta, colapsa la tarjeta
  if (
    expandedCardIndex.value === cardIndex &&
    activeExpandedData.value?.title === bachelorData.title
  ) {
    expandedCardIndex.value = null;
    activeExpandedData.value = null;
  } else {
    // Si no, expande la tarjeta con la nueva información
    expandedCardIndex.value = cardIndex;
    activeExpandedData.value = bachelorData;

    // Hace scroll suave hacia el detalle
    setTimeout(() => {
      const detailsEl = document.getElementById(
        `expanded-details-${cardIndex}`,
      );
      if (detailsEl)
        detailsEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 100);
  }
};
</script>

<template>
  <section class="oe-section uninter-section">
    <div class="uninter-container">
      <!-- HEADER -->
      <div class="oe-header">
        <div>
          <div class="uninter-eyebrow">PROGRAMAS ACADÉMICOS</div>
          <h2 class="uninter-section-title">
            Elige tu<br /><em>licenciatura</em>
          </h2>
        </div>
      </div>

      <!-- GRID DE TARJETAS -->
      <div class="oe-grid">
        <div
          v-for="(card, index) in processedCards"
          :key="index"
          class="oe-card"
          :class="{ 'oe-card--expanded': expandedCardIndex === index }"
        >
          <div class="oe-card__content-wrapper">
            <h3 class="oe-card__title">
              {{ card.title }}
            </h3>

            <!-- BLOQUE 1: CARRERAS DESTACADAS -->
            <div v-if="card.destacadas.length > 0" class="oe-group">
              <h4 class="oe-subtitle oe-subtitle--blue">
                Programas de Excelencia
              </h4>
              <ul class="oe-card__list">
                <li
                  v-for="(bachelor, idx) in card.destacadas"
                  :key="'dest-' + idx"
                >
                  <button
                    @click.prevent="handleItemClick(index, bachelor)"
                    class="oe-card__link oe-card__link--highlight"
                  >
                    <span class="oe-card__bullet oe-card__bullet--gold">•</span>
                    <span class="oe-card__text oe-card__text--highlight">{{
                      bachelor.title
                    }}</span>
                  </button>
                </li>
              </ul>
            </div>

            <!-- BLOQUE 2: RESTO DE CARRERAS -->
            <div
              v-if="card.regulares.length > 0"
              class="oe-group"
              :class="{ 'mt-5': card.destacadas.length > 0 }"
            >
              <h4 v-if="card.destacadas.length > 0" class="oe-subtitle">
                Más Opciones
              </h4>
              <ul class="oe-card__list">
                <li
                  v-for="(bachelor, idx) in card.regulares"
                  :key="'reg-' + idx"
                >
                  <button
                    @click.prevent="handleItemClick(index, bachelor)"
                    class="oe-card__link oe-card__link--regular"
                  >
                    <span class="oe-card__bullet">•</span>
                    <span class="oe-card__text">{{ bachelor.title }}</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <!-- CONTENIDO EXPANDIDO (Visible si esta tarjeta es la clickeada) -->
          <div
            v-if="expandedCardIndex === index && activeExpandedData"
            :id="`expanded-details-${index}`"
            class="oe-expanded-panel"
          >
            <div class="oe-expanded-panel__inner">
              <h3 class="oe-detail-title">{{ activeExpandedData.title }}</h3>
              <p class="oe-detail-desc">
                {{
                  activeExpandedData.description ||
                  `Conoce todos los detalles sobre ${activeExpandedData.title}. Descubre el perfil de ingreso, plan de estudios y las oportunidades profesionales que te esperan al estudiar en UNINTER.`
                }}
              </p>

              <div class="oe-detail-actions">
                <a
                  :href="activeExpandedData.brochure"
                  target="_blank"
                  class="oe-btn oe-btn--outline"
                >
                  <FileText :size="16" /> Ver Folleto
                </a>
                <a
                  :href="activeExpandedData.href"
                  target="_blank"
                  class="oe-btn oe-btn--solid"
                >
                  Ver Detalles Completos <ArrowRight :size="16" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Contenedores base */
.uninter-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
.uninter-section {
  padding: 5rem 0;
}
.oe-section {
  background: #f8f9fb;
}

/* Encabezado Principal */
.oe-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}
.uninter-eyebrow {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #0f3c61;
  margin-bottom: 0.5rem;
}
.uninter-section-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 700;
  line-height: 1.1;
  color: #0f3c61;
  letter-spacing: -0.02em;
  margin: 0;
}
.uninter-section-title em {
  color: #1565c0;
  font-style: italic;
}

/* Grid */
.oe-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  align-items: start; /* Para que las tarjetas no se estiren verticalmente solas */
}

/* =========================================================
   TARJETA (Azul Claro Institucional)
========================================================= */
.oe-card {
  background: #f0f6fc;
  border: 1px solid #e0eaf5;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  transition:
    box-shadow 0.3s ease,
    grid-column 0.3s ease;
  box-shadow: 0 10px 25px -5px rgba(15, 60, 97, 0.05);
  overflow: hidden; /* Mantiene el panel expandido adentro */
}
.oe-card:hover {
  box-shadow: 0 15px 30px -5px rgba(15, 60, 97, 0.1);
}

/* CLASE MAGICA PARA EXPANDIR */
.oe-card--expanded {
  grid-column: span 2; /* Toma las 2 columnas del grid */
  border-color: #1565c0;
}

/* Contenido normal de la tarjeta */
.oe-card__content-wrapper {
  padding: 2rem;
}

.oe-card__title {
  font-size: 1.1rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 1.5rem 0;
  line-height: 1.3;
  border-bottom: 2px solid #dceaf7;
  padding-bottom: 0.875rem;
}
.oe-subtitle {
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #64748b;
  margin: 0 0 0.875rem 0;
}
.oe-subtitle--blue {
  color: #1565c0;
}
.mt-5 {
  margin-top: 2rem;
}

/* Enlaces (Convertidos a botones para mejor accesibilidad y JS) */
.oe-card__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.oe-card__link {
  width: 100%;
  text-align: left;
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  transition: all 0.2s;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  border: none;
}
.oe-card__link--regular {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
}
.oe-card__link--regular:hover {
  background-color: #f8fafc;
  border-color: #cbd5e1;
  transform: translateX(4px);
}
.oe-card__link--highlight {
  background-color: #dceaf7;
  border: 1px solid #caddf0;
}
.oe-card__link--highlight:hover {
  background-color: #cce0f5;
  transform: translateX(4px);
}

.oe-card__bullet {
  font-size: 1.2rem;
  line-height: 0.8;
  margin-top: 2px;
  color: #94a3b8;
}
.oe-card__bullet--gold {
  color: #eab308;
}
.oe-card__text {
  font-size: 0.85rem;
  color: #334155;
  line-height: 1.4;
  font-weight: 500;
}
.oe-card__text--highlight {
  color: #0f3c61;
  font-weight: 700;
}

/* =========================================================
   PANEL EXPANDIDO (Aparece abajo al hacer clic)
========================================================= */
.oe-expanded-panel {
  background-color: #ffffff;
  border-top: 1px solid #e0eaf5;
  animation: slideDown 0.4s ease-out forwards;
}
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.oe-expanded-panel__inner {
  padding: 2.5rem;
}

/* =========================================================
   ESTILOS COMPARTIDOS DEL PANEL
========================================================= */
.oe-detail-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.8rem;
  font-weight: 700;
  color: #0f3c61;
  margin: 0 0 1rem 0;
  line-height: 1.2;
}
.oe-detail-desc {
  font-size: 1rem;
  color: #475569;
  line-height: 1.6;
  margin: 0 0 2rem 0;
  max-width: 800px;
}
.oe-detail-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.oe-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
}
.oe-btn--solid {
  background: #1565c0;
  color: #fff;
  border: 1px solid #1565c0;
}
.oe-btn--solid:hover {
  background: #0f3c61;
  border-color: #0f3c61;
  transform: translateY(-2px);
}
.oe-btn--outline {
  background: transparent;
  color: #1565c0;
  border: 1.5px solid #1565c0;
}
.oe-btn--outline:hover {
  background: #f0f6fc;
  transform: translateY(-2px);
}

/* =========================================================
   RESPONSIVE
========================================================= */
@media (max-width: 900px) {
  .oe-grid {
    grid-template-columns: 1fr;
  }
  .oe-card--expanded {
    grid-column: span 1;
  } /* En celular no abarca 2 columnas porque solo hay 1 */
  .oe-detail-actions {
    flex-direction: column;
    width: 100%;
  }
  .oe-btn {
    justify-content: center;
    width: 100%;
  }
}
</style>
