<script setup lang="ts">
import { ref } from "vue";
import { X, ArrowRight, MessageCircle } from "lucide-vue-next";
import Navbare from "@/components/navbar/Index.vue";
import FormRegister from "@/components/posgrados/FormRegister.vue";
import PortalFooter from "@/components/layout/Footer.vue";

// Estado del Panel Lateral (Drawer)
const isDrawerOpen = ref(false);
const activeProgram = ref<any>(null);

// Abrir Drawer
const openDrawer = (programData: any) => {
  activeProgram.value = programData;
  isDrawerOpen.value = true;
  if (typeof document !== 'undefined') {
    document.body.style.overflow = "hidden"; // Evita el scroll del fondo
  }
};

// Cerrar Drawer
const closeDrawer = () => {
  isDrawerOpen.value = false;
  setTimeout(() => {
    activeProgram.value = null;
  }, 400); // Espera a que termine la animación
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ""; // Restaura el scroll
  }
};

// Scroll suave al formulario de contacto
const scrollToContacto = () => {
  closeDrawer();
  const contactSec = document.getElementById("contacto");
  if (contactSec) {
    contactSec.scrollIntoView({ behavior: "smooth" });
  }
};

useHead({
  title: "Maestrías | UNINTER",
  meta: [
    {
      name: "description",
      content:
        "Maestrías de Posgrado UNINTER — programas de alto nivel académico en administración, dirección de empresas (MADE), gestión de calidad, educación y redes web.",
    },
  ],
});

const maestrias = [
  {
    area: "Alta Dirección y Negocios",
    icon: "mdi:briefcase-outline",
    programas: [
      { nombre: "Maestría en Administración y Dirección de Empresas", sigla: "MADE", slug: "maes-admin-direc", desc: "Desarrollo de líderes con visión estratégica, capacidades analíticas y competencias globales para la toma de decisiones empresariales de alto impacto." },
      { nombre: "Maestría en Administración y Dirección de Empresas (Línea)", sigla: "MADEL", slug: "maes-admin-direc-en-linea", desc: "La versión 100% digital de nuestro programa MADE insignia, diseñado para profesionales activos con flexibilidad total de horarios." },
      { nombre: "Maestría en Gestión de la Calidad", sigla: "MGC", slug: "maes-gestion-calidad", desc: "Especialización en sistemas de calidad integral, optimización de procesos operativos, auditorías y certificaciones internacionales." },
    ],
  },
  {
    area: "Innovación, Tecnología y Transformación Digital",
    icon: "mdi:monitor-dashboard",
    programas: [
      { nombre: "Maestría en Redes de Computadoras y Tecnologías Web", sigla: "MARET", slug: "maes-redes", desc: "Formación de ingenieros especializados en infraestructura de redes, seguridad informática, computación en la nube y desarrollo web avanzado." },
    ],
  },
  {
    area: "Educación, Docencia y Desarrollo Académico",
    icon: "mdi:school-outline",
    programas: [
      { nombre: "Maestría en Educación en Formación Docente", sigla: "MEFD", slug: "maes-educacion-docente", desc: "Perfeccionamiento pedagógico y diseño curricular adaptado a las nuevas tecnologías y corrientes metodológicas contemporáneas." },
      { nombre: "Maestría en Enseñanza de Lenguas Extranjeras", sigla: "MEL", slug: "maes-lenguas", desc: "Didáctica y metodologías avanzadas para la enseñanza escolarizada y profesional de idiomas de alta demanda." },
    ],
  },
];
</script>

<template>
  <div class="pg-level-page">
    <Navbare />

    <!-- HERO -->
    <section class="pg-hero">
      <div class="pg-hero__bg">
        <img src="/images/hero/licenciaturasPresenciales.jpg" alt="Maestrías UNINTER" class="pg-hero__img" />
        <div class="pg-hero__overlay"></div>
      </div>

      <div class="pg-hero__inner pg-wrap">
        <div class="pg-hero__content">
          <div class="pg-hero__badge-row">
            <span class="pg-hero__badge">MAESTRÍAS</span>
            <span class="pg-hero__subtitle">ALTO NIVEL ACADÉMICO</span>
          </div>

          <h1 class="pg-hero__title">
            Maestrías<br />
            <em>UNINTER</em>
          </h1>

          <p class="pg-hero__tagline">
            Lidera el cambio en tu organización a través de programas diseñados para perfeccionar tus destrezas directivas, analíticas y de innovación tecnológica.
          </p>

          <div class="pg-hero__ctas">
            <a href="#contacto" class="pg-hero__cta pg-hero__cta--primary">
              <Icon name="mdi:arrow-right-circle-outline" size="20" />
              Solicitar admisión
            </a>
            <a href="#listado" class="pg-hero__cta pg-hero__cta--ghost">
              <Icon name="mdi:format-list-bulleted" size="18" />
              Ver programas
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- LISTADO -->
    <section id="listado" class="pg-list-sec oe-section">
      <div class="pg-wrap uninter-container">
        <div class="pg-sec-header oe-header">
          <div>
            <p class="pg-eyebrow uninter-eyebrow">Programas Disponibles</p>
            <h2 class="pg-title uninter-section-title">Explora nuestras <em>Maestrías</em></h2>
            <p class="pg-body">Adquiere un perfil estratégico de liderazgo global con especializaciones teóricas y proyectos prácticos aplicados a la industria actual.</p>
          </div>
        </div>

        <!-- GRID DE TARJETAS (Unificado) -->
        <div class="oe-grid">
          <div
            v-for="(area, index) in maestrias"
            :key="index"
            class="oe-card"
          >
            <div class="oe-card__content-wrapper">
              <h3 class="oe-card__title">
                {{ area.area }}
              </h3>

              <!-- LISTA UNIFICADA -->
              <ul class="oe-card__list">
                <li
                  v-for="(p, idx) in area.programas"
                  :key="'prog-' + idx"
                >
                  <button
                    @click.prevent="openDrawer(p)"
                    class="oe-card__link"
                  >
                    <span class="oe-card__bullet">•</span>
                    <span class="oe-card__text">{{ p.nombre }} ({{ p.sigla }})</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACTO -->
    <FormRegister id="contacto" />

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

          <div v-if="activeProgram" class="oe-drawer-content">
            <div class="oe-drawer-header">
              <div class="oe-drawer-badge">
                {{ activeProgram.sigla }}
              </div>
              <h3 class="oe-detail-title">{{ activeProgram.nombre }}</h3>
            </div>
            
            <p class="oe-detail-desc">
              {{ activeProgram.desc }}
            </p>

            <div class="oe-detail-actions">
              <!-- Botón Ver Detalles Completos -->
              <NuxtLink
                v-if="activeProgram.slug"
                :to="`/posgrados/${activeProgram.slug}`"
                class="oe-btn oe-btn--solid"
                @click="closeDrawer"
              >
                Ver Detalles Completos <ArrowRight :size="16" />
              </NuxtLink>

              <!-- Botón Solicitar Admisión que hace scroll a #contacto -->
              <button
                @click="scrollToContacto"
                class="oe-btn oe-btn--outline"
              >
                Solicitar Admisión
              </button>
              
              <!-- Botón WhatsApp -->
              <a
                href="https://wa.link/3ktsjb"
                target="_blank"
                class="oe-btn oe-btn--outline"
              >
                <MessageCircle :size="16" /> Chat por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </Teleport>

    <PortalFooter />
  </div>
</template>

<style scoped>
.pg-level-page {
  font-family: 'Inter', sans-serif;
  background: #f4f6f8;
  color: #1a262f;
}

.pg-wrap {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.pg-eyebrow {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #546E7A;
  margin-bottom: 0.75rem;
  display: block;
}

.pg-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 5vw, 2.8rem);
  font-weight: 800;
  line-height: 1.15;
  margin: 0 0 1rem;
}

.pg-body {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  max-width: 700px;
}

/* Hero */
.pg-hero {
  position: relative;
  min-height: 75vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 80px;
}
.pg-hero__bg {
  position: absolute;
  inset: 0;
  z-index: 1;
}
.pg-hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.pg-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(15, 26, 34, 0.94) 30%, rgba(15, 26, 34, 0.6) 100%);
}
.pg-hero__inner {
  position: relative;
  z-index: 2;
  width: 100%;
}
.pg-hero__content {
  color: #ffffff;
  max-width: 700px;
}
.pg-hero__badge-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}
.pg-hero__badge {
  background: #546E7A;
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  padding: 0.35rem 0.95rem;
  border-radius: 4px;
}
.pg-hero__subtitle {
  font-size: 0.68rem;
  opacity: 0.7;
  letter-spacing: 0.05em;
  font-weight: 700;
}
.pg-hero__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2.8rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1.05;
  margin-bottom: 1.5rem;
}
.pg-hero__title em {
  font-style: italic;
  font-weight: 400;
  color: #78909C;
}
.pg-hero__tagline {
  font-size: clamp(1rem, 2vw, 1.15rem);
  line-height: 1.5;
  opacity: 0.9;
  margin-bottom: 2.5rem;
}
.pg-hero__ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.pg-hero__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
}
.pg-hero__cta--primary {
  background: #546E7A;
  color: #ffffff;
}
.pg-hero__cta--primary:hover {
  background: #78909C;
  transform: translateY(-2px);
}
.pg-hero__cta--ghost {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.pg-hero__cta--ghost:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

/* Listado Section & Cards */
.pg-list-sec {
  padding: 6rem 0;
}
.oe-section {
  background: #f4f6f8;
}

.uninter-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

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
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #546E7A;
  margin-bottom: 0.75rem;
  display: block;
}

.uninter-section-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 5vw, 2.8rem);
  font-weight: 800;
  line-height: 1.15;
  color: #1a262f;
  margin: 0;
}

.uninter-section-title em {
  color: #546E7A;
  font-style: italic;
}

/* Grid */
.oe-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  align-items: start;
}

/* Tarjeta Unificada */
.oe-card {
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
}

.oe-card:hover {
  box-shadow: 0 15px 30px -5px rgba(84, 110, 122, 0.08);
  transform: translateY(-4px);
}

.oe-card__content-wrapper {
  padding: 2.5rem;
}

.oe-card__title {
  font-size: 1.1rem;
  font-weight: 800;
  color: #1a262f;
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
  color: #546E7A;
}

.oe-card__text {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.4;
  font-weight: 500;
  flex-grow: 1;
}

.oe-card__link:hover .oe-card__text {
  color: #1a262f;
}

/* Panel Lateral (Drawer Modal) */
.oe-drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(26, 38, 47, 0.4);
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
  z-index: 50;
}

.oe-drawer-close:hover {
  background: #e2e8f0;
  color: #1a262f;
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
  background: rgba(84, 110, 122, 0.1);
  color: #546E7A;
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
  color: #1a262f;
  margin: 0;
  line-height: 1.1;
}

.oe-detail-desc {
  font-size: 1.05rem;
  color: #555;
  line-height: 1.7;
  margin: 0 0 3rem 0;
}

.oe-detail-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
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
  background: #546E7A;
  color: #fff;
  border: none;
  box-shadow: 0 4px 15px rgba(84, 110, 122, 0.3);
}

.oe-btn--solid:hover {
  background: #37474F;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(84, 110, 122, 0.4);
}

.oe-btn--outline {
  background: transparent;
  color: #546E7A;
  border: 2px solid #546E7A;
}

.oe-btn--outline:hover {
  background: rgba(84, 110, 122, 0.05);
}



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
