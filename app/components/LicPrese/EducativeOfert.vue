<script setup lang="ts">
import { ref, computed } from "vue";
import {
  FileText,
  ArrowRight,
  Trophy,
  X,
  BookOpen,
  Briefcase,
  Palette,
  Cpu,
} from "lucide-vue-next";

const DataCard = [
  {
    title: "LICENCIATURAS EN CIENCIAS SOCIALES Y HUMANIDADES",
    shortTitle: "Sociales y Humanidades",
    icon: BookOpen,
    bachelors: [
      {
        title: "Ciencias Politicas y Gestión Pública (LCP)",
        href: "https://universidad.uninter.edu.mx/carreras/LCP",
        brochure: "https://uninter.edu.mx/folletos/lcp/",
      },
      {
        title: "Comunicacion (LCO)",
        href: "/Comunicacion",
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
    shortTitle: "Negocios y Admin.",
    icon: Briefcase,
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
    shortTitle: "Diseño y Artes",
    icon: Palette,
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
    shortTitle: "Ingenierías",
    icon: Cpu,
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

// Procesamos datos dinámicamente para inyectar la URL del ranking
const processedCategories = computed(() => {
  return DataCard.map((cat) => ({
    ...cat,
    bachelors: cat.bachelors.map((b) => ({
      ...b,
      rankingUrl: b.trophy
        ? "https://www.eluniversal.com.mx/nacion/mejores-universidades-2024/"
        : null,
    })),
  }));
});

// ESTADO DEL PANEL LATERAL (DRAWER)
const isDrawerOpen = ref(false);
const selectedBachelor = ref<any>(null);
const selectedCategoryName = ref("");

const openDrawer = (bachelor: any, categoryName: string) => {
  selectedBachelor.value = bachelor;
  selectedCategoryName.value = categoryName;
  isDrawerOpen.value = true;
  document.body.style.overflow = "hidden"; // Evita que el fondo haga scroll
};

const closeDrawer = () => {
  isDrawerOpen.value = false;
  setTimeout(() => {
    selectedBachelor.value = null;
    selectedCategoryName.value = "";
  }, 300); // Limpia tras animación
  document.body.style.overflow = "";
};
</script>

<template>
  <section class="ui-catalog-section">
    <div class="ui-container">
      <!-- ENCABEZADO -->
      <div class="ui-header">
        <div class="ui-header-text">
          <div class="ui-eyebrow">OFERTA ACADÉMICA</div>
          <h2 class="ui-title">Descubre tu <em>Vocación</em></h2>
        </div>
        <p class="ui-subtitle">
          Explora nuestras licenciaturas e ingenierías y selecciona un programa
          para conocer todos los detalles sin salir de esta página.
        </p>
      </div>

      <!-- CUADRÍCULA DE DIVISIONES (Mostrando todo a la vez) -->
      <div class="ui-divisions-grid">
        <div
          v-for="(cat, index) in processedCategories"
          :key="index"
          class="ui-division-card"
        >
          <!-- Cabecera de la División -->
          <div class="division-header">
            <div class="division-icon">
              <component :is="cat.icon" :size="24" stroke-width="2.5" />
            </div>
            <h3 class="division-title">{{ cat.title }}</h3>
          </div>

          <!-- Lista de Programas como botones limpios -->
          <div class="division-body">
            <button
              v-for="(bachelor, idx) in cat.bachelors"
              :key="idx"
              class="ui-bachelor-btn"
              @click="openDrawer(bachelor, cat.shortTitle)"
            >
              <div class="btn-content-left">
                <span class="bullet-dot">•</span>
                <span class="bachelor-name">{{ bachelor.title }}</span>
              </div>

              <div class="btn-content-right">
                <!-- Insignia de Ranking para destacar sin dividir -->
                <span v-if="bachelor.trophy" class="badge-shimmer">
                  <Trophy :size="12" /> Top
                </span>
                <ArrowRight :size="16" class="hover-arrow" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- PANEL LATERAL (SIDE DRAWER) -->
    <Transition name="drawer-fade">
      <div
        v-if="isDrawerOpen"
        class="ui-drawer-overlay"
        @click.self="closeDrawer"
      >
        <div class="ui-drawer">
          <!-- Botón Cerrar -->
          <button class="drawer-close" @click="closeDrawer">
            <X :size="24" />
          </button>

          <div class="drawer-content">
            <div class="drawer-eyebrow">{{ selectedCategoryName }}</div>
            <h3 class="drawer-title">{{ selectedBachelor?.title }}</h3>

            <p class="drawer-desc">
              {{
                selectedBachelor?.description ||
                `Conoce a profundidad el perfil de ingreso, plan de estudios y las oportunidades profesionales que te esperan al estudiar ${selectedBachelor?.title} en UNINTER.`
              }}
            </p>

            <!-- BLOQUE ESPECIAL DE RANKING DENTRO DEL PANEL -->
            <div v-if="selectedBachelor?.trophy" class="drawer-ranking-box">
              <div class="ranking-box-icon"><Trophy :size="24" /></div>
              <div class="ranking-box-text">
                <h5>Programa de Excelencia</h5>
                <p>
                  Reconocido a nivel nacional en el Top Ranking de Las Mejores
                  Universidades.
                </p>
              </div>
              <a
                :href="selectedBachelor.rankingUrl"
                target="_blank"
                class="ranking-box-btn"
              >
                Ver Ranking <ArrowRight :size="14" />
              </a>
            </div>

            <!-- BOTONES DE ACCIÓN PRINCIPALES -->
            <div class="drawer-actions">
              <a
                :href="selectedBachelor?.href"
                target="_blank"
                class="drawer-btn drawer-btn--primary"
              >
                Página Oficial del Programa <ArrowRight :size="16" />
              </a>
              <a
                :href="selectedBachelor?.brochure"
                target="_blank"
                class="drawer-btn drawer-btn--secondary"
              >
                <FileText :size="16" /> Descargar Folleto
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
/* =========================================================
   VARIABLES Y CONTENEDOR BASE
========================================================= */
.ui-catalog-section {
  background-color: #f8fafc;
  padding: 5rem 0;
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
}

.ui-container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* =========================================================
   ENCABEZADO
========================================================= */
.ui-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
}

.ui-eyebrow {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #1565c0;
  margin-bottom: 0.5rem;
}

.ui-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800;
  color: #0f3c61;
  margin: 0;
  line-height: 1.1;
}

.ui-title em {
  color: #1565c0;
  font-style: italic;
}

.ui-subtitle {
  font-size: 1.05rem;
  color: #475569;
  max-width: 450px;
  margin: 0;
  line-height: 1.5;
}

/* =========================================================
   GRID DE DIVISIONES (4 CARTAS PRINCIPALES)
========================================================= */
.ui-divisions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  align-items: start;
}

/* LA TARJETA DE CADA DIVISIÓN */
.ui-division-card {
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 30px -10px rgba(15, 60, 97, 0.08);
  border: 1px solid #e2e8f0;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease;
}

.ui-division-card:hover {
  box-shadow: 0 20px 40px -10px rgba(15, 60, 97, 0.12);
}

.division-header {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 1.5rem;
}

.division-icon {
  width: 56px;
  height: 56px;
  background-color: #f0f6fc;
  color: #1565c0;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.division-title {
  font-size: 1.15rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0;
  line-height: 1.3;
}

/* =========================================================
   BOTONES DE LICENCIATURAS (Dentro de la tarjeta)
========================================================= */
.division-body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.ui-bachelor-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: left;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  padding: 0.8rem 1rem;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  gap: 1rem;
}

.ui-bachelor-btn:hover {
  background: #f8fafc;
  border-color: #cbd5e1;
  transform: translateX(4px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.02);
}

.btn-content-left {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  flex: 1;
}

.bullet-dot {
  color: #94a3b8;
  font-size: 1.2rem;
  line-height: 0.8;
  margin-top: 2px;
}

.bachelor-name {
  font-size: 0.9rem;
  font-weight: 600;
  color: #334155;
  line-height: 1.4;
}

.ui-bachelor-btn:hover .bachelor-name {
  color: #0f3c61;
}

.btn-content-right {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

/* Insignia Top Ranking */
.badge-shimmer {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: #fef3c7;
  color: #d97706;
  font-size: 0.65rem;
  font-weight: 800;
  padding: 0.3rem 0.6rem;
  border-radius: 999px;
  border: 1px solid #fde68a;
}

.hover-arrow {
  color: #1565c0;
  opacity: 0;
  transform: translateX(-10px);
  transition: all 0.3s;
}

.ui-bachelor-btn:hover .hover-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* =========================================================
   PANEL LATERAL (SIDE DRAWER)
========================================================= */
.ui-drawer-overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(15, 60, 97, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: flex-end;
}

.ui-drawer {
  width: 100%;
  max-width: 480px;
  background: #ffffff;
  height: 100%;
  box-shadow: -10px 0 40px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: auto;
}

.drawer-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f1f5f9;
  border: none;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
}
.drawer-close:hover {
  background: #e2e8f0;
  color: #0f3c61;
}

.drawer-content {
  padding: 4rem 2.5rem 3rem;
}

.drawer-eyebrow {
  font-size: 0.75rem;
  font-weight: 800;
  color: #1565c0;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.75rem;
}

.drawer-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 2rem;
  font-weight: 700;
  color: #0f3c61;
  line-height: 1.2;
  margin: 0 0 1.25rem 0;
}

.drawer-desc {
  font-size: 1rem;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 2rem;
}

/* Bloque El Universal dentro del Drawer */
.drawer-ranking-box {
  background: linear-gradient(135deg, #fdfbf7, #fef3c7);
  border: 1px solid #fde68a;
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2.5rem;
}
.ranking-box-icon {
  color: #d97706;
}
.ranking-box-text h5 {
  font-size: 1rem;
  font-weight: 800;
  color: #92400e;
  margin: 0 0 0.25rem 0;
}
.ranking-box-text p {
  font-size: 0.85rem;
  color: #b45309;
  margin: 0;
  line-height: 1.4;
}
.ranking-box-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  align-self: flex-start;
  background: #d97706;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s;
}
.ranking-box-btn:hover {
  background: #b45309;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(217, 119, 6, 0.3);
}

/* Botones del Drawer */
.drawer-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.drawer-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 1rem;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;
}
.drawer-btn--primary {
  background: #1565c0;
  color: #fff;
}
.drawer-btn--primary:hover {
  background: #0f3c61;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(21, 101, 192, 0.25);
}

.drawer-btn--secondary {
  background: #f1f5f9;
  color: #0f3c61;
  border: 1px solid #cbd5e1;
}
.drawer-btn--secondary:hover {
  background: #e2e8f0;
}

/* Animaciones */
.drawer-fade-enter-active,
.drawer-fade-leave-active {
  transition: opacity 0.3s;
}
.drawer-fade-enter-from,
.drawer-fade-leave-to {
  opacity: 0;
}
.drawer-fade-enter-active .ui-drawer {
  animation: slideIn 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}
.drawer-fade-leave-active .ui-drawer {
  animation: slideOut 0.3s ease-in forwards;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes slideOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}

/* =========================================================
   RESPONSIVE
========================================================= */
@media (max-width: 1024px) {
  .ui-divisions-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .ui-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .ui-division-card {
    padding: 1.5rem;
  }

  .hover-arrow {
    opacity: 1;
    transform: translateX(0);
  }

  .ui-bachelor-btn {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }

  .btn-content-right {
    width: 100%;
    justify-content: space-between;
  }

  .ui-drawer {
    max-width: 100%;
  }
}
</style>
