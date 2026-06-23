<script setup lang="ts">
import { ref } from "vue";
import { FileText, ArrowRight, Trophy, X } from "lucide-vue-next";

// Datos unificados
const DataCard = [
  {
    title: "LICENCIATURAS EN CIENCIAS SOCIALES Y HUMANIDADES",
    bachelors: [
      {
        title: "Comunicacion (LCO)",
        href: "/carreras/comunicacion",
        trophy: true,
        brochure: "https://uninter.edu.mx/folletos/lco/",
      },
      {
        title: "Comunicación y Relaciones Públicas (CORP)",
        href: "/carreras/comunicacion-y-relaciones-publicas",
        trophy: true,
        brochure: "https://uninter.edu.mx/folletos/corp/",
      },
      {
        title: "Relaciones Internacionales (LRI)",
        href: "/carreras/relaciones-internacionales",
        trophy: true,
        brochure: "https://uninter.edu.mx/folletos/lri/",
      },
      {
        title: "Relaciones Internacionales y Ciencias Politicas (RICP)",
        href: "/carreras/relaciones-internacionales-y-ciencias-politicas",
        trophy: true,
        brochure: "https://uninter.edu.mx/folletos/ricp/",
      },
      {
        title: "Relaciones Internacionales y Economía (RIEC)",
        href: "/carreras/relaciones-internacionales-y-economia",
        trophy: true,
        brochure: "https://uninter.edu.mx/folletos/riec/",
      },
      {
        title: "Ciencias Politicas y Gestión Pública (LCP)",
        href: "/carreras/ciencias-politicas-y-gestion-publica",
        brochure: "https://uninter.edu.mx/folletos/lcp/",
      },
      {
        title: "Derecho (LED)",
        href: "/carreras/derecho",
        brochure: "https://uninter.edu.mx/folletos/led/",
      },
      {
        title: "Idiomas (LID)",
        href: "/carreras/idiomas",
        brochure: "https://uninter.edu.mx/folletos/lid/",
      },
      {
        title: "Pedagogía (LPE)",
        href: "/carreras/pedagogia",
        brochure: "https://uninter.edu.mx/folletos/lpe/",
      },
      {
        title: "Psicología (LPS)",
        href: "/carreras/psicologia",
        brochure: "https://uninter.edu.mx/folletos/lps/",
      },
    ],
  },
  {
    title: "LICENCIATURAS EN NEGOCIOS Y ADMINISTRACIÓN",
    bachelors: [
      {
        title: "Administración de Empresas (LAE)",
        href: "/carreras/administracion-de-empresas",
        trophy: true,
        brochure: "https://uninter.edu.mx/folletos/lae/",
      },
      {
        title: "Administración de Empresas Turísticas (LAET)",
        href: "https://universidad.uninter.edu.mx/carreras/LAET",
        trophy: true,
        brochure: "https://uninter.edu.mx/folletos/laet/",
      },
      {
        title: "Administración de Negocios Internacionales (LANI)",
        href: "https://universidad.uninter.edu.mx/carreras/LANI",
        trophy: true,
        brochure: "https://uninter.edu.mx/folletos/lani/",
      },
      {
        title: "Administracion y Mercadotecnia (LAM)",
        href: "https://universidad.uninter.edu.mx/carreras/LAM",
        trophy: true,
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
        brochure: "https://uninter.edu.mx/folletos/lef/",
      },
      {
        title: "Mercadotecnia (LME)",
        href: "/carreras/mercadotecnia",
        trophy: true,
        brochure: "https://uninter.edu.mx/folletos/lme/",
      },
      {
        title: "Mercadotecnia y Publicidad (LEMP)",
        href: "https://universidad.uninter.edu.mx/carreras/LEMP",
        trophy: true,
        brochure: "https://uninter.edu.mx/folletos/lemp/",
      },
    ],
  },
  {
    title: "LICENCIATURAS EN DISEÑO Y ARTES",
    bachelors: [
      {
        title: "Arquitectura (ARQ)",
        href: "/carreras/arquitectura",
        trophy: true,
        brochure: "https://uninter.edu.mx/folletos/arq/",
      },
      {
        title: "Animación y Diseño Digital (LADD)",
        href: "/carreras/animacion-y-diseno-digital",
        trophy: true,
        brochure: "https://uninter.edu.mx/folletos/ladd/",
      },
      {
        title: "Diseño Gráfico (LDG)",
        href: "/carreras/diseno-grafico",
        trophy: true,
        brochure: "https://uninter.edu.mx/folletos/ldg/",
      },
      {
        title: "Diseño Industrial (LDI)",
        href: "/carreras/diseno-industrial",
        trophy: true,
        brochure: "https://uninter.edu.mx/folletos/ldi/",
      },
      {
        title: "Diseño de Modas y Tendencias Internacionales (LDM)",
        href: "/carreras/diseno-de-modas-y-tendencias-internacionales",
        trophy: true,
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
        brochure: "https://uninter.edu.mx/folletos/ici/",
      },
      {
        title: "Industrial y de Sistemas de Calidad (IISCA)",
        href: "https://universidad.uninter.edu.mx/carreras/IISCA",
        brochure: "https://uninter.edu.mx/folletos/iisca/",
      },
      {
        title: "Mecatronica (IME)",
        href: "/carreras/mecatronica",
        brochure: "https://uninter.edu.mx/folletos/ime/",
      },
      {
        title: "Mecanica Industrial (IMI)",
        href: "https://universidad.uninter.edu.mx/carreras/IMI",
        brochure: "https://uninter.edu.mx/folletos/imi/",
      },
      {
        title: "Sistemas Computacionales (ISC)",
        href: "/carreras/sistemas-computacionales",
        brochure: "https://uninter.edu.mx/folletos/isc/",
      },
    ],
  },
];

// Estado del Panel Lateral (Drawer)
const isDrawerOpen = ref(false);
const activeBachelor = ref<any>(null);

// Abrir Drawer
const openDrawer = (bachelorData: any) => {
  activeBachelor.value = bachelorData;
  isDrawerOpen.value = true;
  if (typeof document !== 'undefined') {
    document.body.style.overflow = "hidden"; // Evita el scroll del fondo
  }
};

// Cerrar Drawer
const closeDrawer = () => {
  isDrawerOpen.value = false;
  setTimeout(() => {
    activeBachelor.value = null;
  }, 400); // Espera a que termine la animación
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ""; // Restaura el scroll
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

      <!-- GRID DE TARJETAS (Unificado) -->
      <div class="oe-grid">
        <div
          v-for="(card, index) in DataCard"
          :key="index"
          class="oe-card"
        >
          <div class="oe-card__content-wrapper">
            <h3 class="oe-card__title">
              {{ card.title }}
            </h3>

            <!-- LISTA UNIFICADA -->
            <ul class="oe-card__list">
              <li
                v-for="(bachelor, idx) in card.bachelors"
                :key="'bach-' + idx"
              >
                <button
                  @click.prevent="openDrawer(bachelor)"
                  class="oe-card__link"
                >
                  <span class="oe-card__bullet">•</span>
                  <span class="oe-card__text">{{ bachelor.title }}</span>
                  
                  <!-- Detalle Soberbio (Medalla/Trofeo) para excelencia -->
                  <div v-if="bachelor.trophy" class="oe-badge-excellence">
                    <Trophy :size="14" />
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- PANEL LATERAL (Side Drawer) CON BLUR -->
    <Teleport to="body">
      <div 
        class="oe-drawer-overlay" 
        :class="{ 'is-open': isDrawerOpen }"
        @click="closeDrawer"
      >
        <div 
          class="oe-drawer" 
          :class="{ 'is-open': isDrawerOpen }"
          @click.stop
        >
          <button class="oe-drawer-close" @click="closeDrawer">
            <X :size="24" />
          </button>
          
          <div v-if="activeBachelor" class="oe-drawer-content">
            <div class="oe-drawer-header">
              <div v-if="activeBachelor.trophy" class="oe-drawer-badge">
                <Trophy :size="16" /> Programa de Excelencia
              </div>
              <h3 class="oe-detail-title">{{ activeBachelor.title }}</h3>
            </div>
            
            <p class="oe-detail-desc">
              {{
                activeBachelor.description ||
                `Conoce todos los detalles sobre ${activeBachelor.title}. Descubre el perfil de ingreso, plan de estudios y las oportunidades profesionales que te esperan al estudiar en UNINTER.`
              }}
            </p>

            <div class="oe-detail-actions">
              <a
                :href="activeBachelor.brochure"
                target="_blank"
                class="oe-btn oe-btn--outline"
              >
                <FileText :size="16" /> Ver Folleto
              </a>
              
              <!-- TRANSICIÓN INMERSIVA: Uso de NuxtLink para rutas internas -->
              <NuxtLink
                v-if="activeBachelor.href.startsWith('/')"
                :to="activeBachelor.href"
                class="oe-btn oe-btn--solid"
                @click="closeDrawer"
              >
                Ver Detalles Completos <ArrowRight :size="16" />
              </NuxtLink>
              
              <!-- Enlaces externos para las que aún no migramos -->
              <a
                v-else
                :href="activeBachelor.href"
                target="_blank"
                class="oe-btn oe-btn--solid"
              >
                Ver Detalles Completos <ArrowRight :size="16" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
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
  background: #f8fafc;
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
  color: #1565c0;
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
  color: #d84315;
  font-style: italic;
}

/* Grid */
.oe-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  align-items: start;
}

/* =========================================================
   TARJETA UNIFICADA (Limpia y Blanca)
========================================================= */
.oe-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 15px rgba(15, 60, 97, 0.03);
}
.oe-card:hover {
  box-shadow: 0 15px 30px -5px rgba(15, 60, 97, 0.08);
  transform: translateY(-4px);
}

.oe-card__content-wrapper {
  padding: 2.5rem;
}

.oe-card__title {
  font-size: 1.15rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 1.5rem 0;
  line-height: 1.3;
  border-bottom: 2px solid #f1f5f9;
  padding-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

/* Lista */
.oe-card__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.oe-card__link {
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  padding: 0.75rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid transparent;
  background-color: transparent;
}
.oe-card__link:hover {
  background-color: #f8fafc;
  border-color: #e2e8f0;
  transform: translateX(6px);
}

.oe-card__bullet {
  font-size: 1.2rem;
  line-height: 0.8;
  color: #cbd5e1;
  transition: color 0.2s;
}
.oe-card__link:hover .oe-card__bullet {
  color: #1565c0;
}

.oe-card__text {
  font-size: 0.95rem;
  color: #334155;
  line-height: 1.4;
  font-weight: 500;
  flex-grow: 1;
}
.oe-card__link:hover .oe-card__text {
  color: #0f3c61;
}

/* Detalle Soberbio (Medalla/Trofeo) */
.oe-badge-excellence {
  color: #eab308;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(234, 179, 8, 0.1);
  padding: 6px;
  border-radius: 50%;
}

/* =========================================================
   PANEL LATERAL (Drawer Modal con Glassmorphism)
========================================================= */
.oe-drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 60, 97, 0.4);
  backdrop-filter: blur(8px);
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease, visibility 0.4s ease;
}
.oe-drawer-overlay.is-open {
  opacity: 1;
  visibility: visible;
}

.oe-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 500px;
  height: 100vh;
  background: #ffffff;
  box-shadow: -10px 0 40px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
.oe-drawer.is-open {
  transform: translateX(0);
}

.oe-drawer-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: #f1f5f9;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  cursor: pointer;
  transition: all 0.2s;
}
.oe-drawer-close:hover {
  background: #e2e8f0;
  color: #0f3c61;
  transform: rotate(90deg);
}

.oe-drawer-content {
  padding: 4rem 3rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.oe-drawer-header {
  margin-bottom: 2rem;
}

.oe-drawer-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #fef9c3;
  color: #854d0e;
  padding: 0.5rem 1rem;
  border-radius: 99px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.oe-detail-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 2rem;
  font-weight: 700;
  color: #0f3c61;
  margin: 0;
  line-height: 1.1;
}

.oe-detail-desc {
  font-size: 1.05rem;
  color: #475569;
  line-height: 1.7;
  margin: 0 0 3rem 0;
}

.oe-detail-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;
}

.oe-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 1rem;
  font-weight: 700;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s;
  cursor: pointer;
  width: 100%;
}
.oe-btn--solid {
  background: #d84315;
  color: #fff;
  border: none;
  box-shadow: 0 4px 15px rgba(216, 67, 21, 0.3);
}
.oe-btn--solid:hover {
  background: #bf360c;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(216, 67, 21, 0.4);
}
.oe-btn--outline {
  background: transparent;
  color: #1565c0;
  border: 2px solid #1565c0;
}
.oe-btn--outline:hover {
  background: #f0f6fc;
}

/* =========================================================
   RESPONSIVE
========================================================= */
@media (max-width: 900px) {
  .oe-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 600px) {
  .oe-drawer-content {
    padding: 3rem 1.5rem;
  }
  .oe-card__content-wrapper {
    padding: 1.5rem;
  }
}
</style>
