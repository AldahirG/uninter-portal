<script setup lang="ts">
import { ref } from "vue";
import { X, ArrowRight, MessageCircle } from "lucide-vue-next";
import Navbare from "@/components/navbar/Index.vue";
import PortalFooter from "@/components/layout/Footer.vue";

// Estado del Panel Lateral (Drawer)
const isDrawerOpen = ref(false);
const activeProgram = ref<any>(null);

// Abrir Drawer
const openDrawer = (programData: any) => {
  activeProgram.value = programData;
  isDrawerOpen.value = true;
  if (typeof document !== "undefined") {
    document.body.style.overflow = "hidden"; // Evita el scroll del fondo
  }
};

// Cerrar Drawer
const closeDrawer = () => {
  isDrawerOpen.value = false;
  setTimeout(() => {
    activeProgram.value = null;
  }, 400); // Espera a que termine la animacin
  if (typeof document !== "undefined") {
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
  title: "Doctorados | UNINTER",
  meta: [
    {
      name: "description",
      content:
        "Doctorados de Posgrado UNINTER - programas de investigación avanzada y excelencia académica. Doctorado en Administración (DA) y Doctorado en Humanidades (DH).",
    },
  ],
});

// JSON data extraída de .output
const data = [
  {
    area: "Alta Dirección y Negocios",
    icon: "mdi:briefcase-outline",
    programas: [
      {
        nombre: "Doctorado en Administración",
        sigla: "DA",
        slug: "doc-administracion",
        desc: "Formación de investigadores independientes y consultores de alta dirección capaces de generar conocimiento original y de aplicar metodologías científicas para resolver problemas críticos organizacionales.",
      },
    ],
  },
  {
    area: "Investigación Avanzada y Humanidades",
    icon: "mdi:flask-outline",
    programas: [
      {
        nombre: "Doctorado en Humanidades",
        sigla: "DH",
        slug: "doc-humanidades",
        desc: "Programa interdisciplinario de investigación centrado en el estudio crítico de la educación, cultura, filosofía y dinámicas sociales contemporáneas.",
      },
    ],
  },
];
</script>

<template>
  <div class="pg-level-page">
    <Navbare />

    <!-- HERO RECONSTRUIDO -->
    <div class="pg-hero-wrapper">
      <section class="pg-hero">
        <div class="pg-hero__bg">
          <img
            src="/images/hero/licenciaturasPresenciales.jpg"
            alt="Especialidades UNINTER"
            class="pg-hero__img"
          />
          <div class="pg-hero__overlay"></div>
        </div>

        <div class="pg-hero__deco pg-hero__deco--tl">
          <Icon name="lucide:globe" size="32" />
        </div>
        <div class="pg-hero__deco pg-hero__deco--tr">
          <Icon name="lucide:book-open" size="28" />
        </div>
        <div class="pg-hero__deco pg-hero__deco--br">
          <Icon name="lucide:flask-conical" size="26" />
        </div>

        <div class="pg-container pg-hero__content">
          <div class="pg-hero__inner">
            <div class="pg-hero__eyebrow">
              <img
                src="/images/hero/logo-blanco.svg"
                alt="Universidad Internacional"
                class="pg-hero__logo-full"
              />
            </div>

            <h1 class="pg-hero__title">
              <span class="pg-hero__title-main">DOCTORADOS</span>
              <span class="pg-hero__title-sub"
                >Investigación de Alto Nivel</span
              >
            </h1>

            <p class="pg-hero__desc">
              Programas del más alto nivel académico enfocados en la
              investigación aplicada y la generación de nuevo conocimiento.
            </p>

            <div class="pg-hero__ctas-new">
              <a href="#listado" class="pg-btn-card">
                <div class="btn-icon">
                  <Icon name="lucide:book-open" size="28" />
                </div>
                <span>Programas Disponibles</span>
              </a>
              <a href="#contacto" class="pg-btn-card">
                <div class="btn-icon">
                  <Icon name="lucide:info" size="28" />
                </div>
                <span>Solicita Información</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- BARRA DE ESTADISTICAS -->
      <div class="pg-hero__stats-bar">
        <div class="pg-container pg-hero__stats-inner">
          <div class="pg-stat">
            <div class="pg-stat__icon">
              <Icon name="lucide:laptop" size="28" />
            </div>
            <div class="pg-stat__text">
              <span class="pg-stat__value">Flexibilidad</span>
              <span class="pg-stat__label">Modalidades de estudio</span>
            </div>
          </div>
          <div class="pg-stat">
            <div class="pg-stat__icon">
              <Icon name="lucide:calendar" size="28" />
            </div>
            <div class="pg-stat__text">
              <span class="pg-stat__value">Desde 1 año</span>
              <span class="pg-stat__label">Duración</span>
            </div>
          </div>
          <div class="pg-stat">
            <div class="pg-stat__icon">
              <Icon name="lucide:shield-check" size="28" />
            </div>
            <div class="pg-stat__text">
              <span class="pg-stat__value">RVOE SEP</span>
              <span class="pg-stat__label">Validez Oficial</span>
            </div>
          </div>
          <div class="pg-stat">
            <div class="pg-stat__icon">
              <Icon name="lucide:users" size="28" />
            </div>
            <div class="pg-stat__text">
              <span class="pg-stat__value">Expertos</span>
              <span class="pg-stat__label">Claustro Docente</span>
            </div>
          </div>
          <div class="pg-stat">
            <div class="pg-stat__icon">
              <Icon name="lucide:award" size="28" />
            </div>
            <div class="pg-stat__text">
              <span class="pg-stat__value">40+ Años</span>
              <span class="pg-stat__label">De Experiencia</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- LISTADO -->
    <section id="listado" class="pg-list-sec oe-section">
      <div class="pg-wrap uninter-container">
        <div class="pg-sec-header oe-header">
          <div>
            <p class="pg-eyebrow uninter-eyebrow">Programas Disponibles</p>
            <h2 class="pg-title uninter-section-title">
              Explora nuestros <em>Doctorados</em>
            </h2>
            <p class="pg-body">
              Nuestros programas doctorales cuentan con un claustro de
              investigadores distinguidos y líneas de generación de conocimiento
              altamente vigentes.
            </p>
          </div>
        </div>

        <!-- Componente Interactivo Listado -->
        <div class="oe-grid">
          <div v-for="(area, index) in data" :key="index" class="oe-card">
            <div class="oe-card__content-wrapper">
              <h3 class="oe-card__title">{{ area.area }}</h3>
              <ul class="oe-card__list">
                <li
                  v-for="(programa, pIndex) in area.programas"
                  :key="'prog-' + pIndex"
                >
                  <button
                    @click.prevent="openDrawer(programa)"
                    class="oe-card__link"
                  >
                    <span class="oe-card__bullet">&bull;</span>
                    <span class="oe-card__text"
                      >{{ programa.nombre }} ({{ programa.sigla }})</span
                    >
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER / CONTACTO -->
    <div id="contacto">
      <PortalFooter />
    </div>

    <!-- DRAWER MODAL -->
    <Teleport to="body">
      <div
        class="oe-drawer-overlay"
        :class="{ 'is-open': isDrawerOpen }"
        @click="closeDrawer"
      >
        <div class="oe-drawer" :class="{ 'is-open': isDrawerOpen }" @click.stop>
          <button class="oe-drawer-close" @click="closeDrawer">
            <X :size="24" />
          </button>

          <div v-if="activeProgram" class="oe-drawer-content">
            <div class="oe-drawer-header">
              <div class="oe-drawer-badge">{{ activeProgram.sigla }}</div>
              <h3 class="oe-detail-title">{{ activeProgram.nombre }}</h3>
            </div>

            <p class="oe-detail-desc">{{ activeProgram.desc }}</p>

            <div class="oe-detail-actions">
              <!-- Solo mostrar el boton de detalles si tiene slug de vista completa -->
              <NuxtLink
                v-if="activeProgram.slug"
                :to="`/posgrados/${activeProgram.slug}`"
                class="oe-btn oe-btn--solid"
                @click="closeDrawer"
              >
                Ver Detalles Completos
                <ArrowRight :size="16" />
              </NuxtLink>

              <button @click="scrollToContacto" class="oe-btn oe-btn--outline">
                Solicitar Admisión
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<style scoped>
.pg-level-page {
  background: #fff;
  color: #0c2010;
  font-family: Inter, "Inter Fallback: Arial", sans-serif;
}
.pg-wrap {
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1.5rem;
}
.pg-eyebrow {
  color: #8d8f38;
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
}
.pg-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 5vw, 2.8rem);
  font-weight: 800;
  line-height: 1.15;
  margin: 0 0 1rem;
}
.pg-body {
  color: #0c2010;
  font-size: 1rem;
  line-height: 1.6;
  max-width: 700px;
}
.pg-list-sec {
  padding: 6rem 0;
}
.oe-section {
  background: #fff;
}
.uninter-container {
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1.5rem;
}
.oe-header {
  align-items: flex-end;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
  margin-bottom: 2.5rem;
}
.uninter-eyebrow {
  color: #8d8f38;
  display: block;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  margin-bottom: 0.75rem;
  text-transform: uppercase;
}
.uninter-section-title {
  color: #0f3c61;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 5vw, 2.8rem);
  font-weight: 800;
  line-height: 1.15;
  margin: 0;
}
.uninter-section-title em {
  color: #8d8f38;
  font-style: italic;
}
.oe-grid {
  align-items: start;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
}
.oe-card {
  background: #fff;
  border: 1px solid rgba(141, 143, 56, 0.4);
  border-radius: 16px;
  box-shadow: 0 4px 15px #8d8f381a;
  display: flex;
  flex-direction: column;
  transition:
    box-shadow 0.3s ease,
    transform 0.3s ease,
    border-color 0.3s ease;
}
.oe-card:hover {
  border-color: #8d8f38cc;
  box-shadow: 0 15px 30px -5px #8d8f3840;
  transform: translateY(-4px);
}
.oe-card__content-wrapper {
  padding: 2.5rem;
}
.oe-card__title {
  border-bottom: 2px solid #f2f5e1;
  color: #0f3c61;
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  line-height: 1.3;
  margin: 0 0 1.5rem;
  padding-bottom: 1rem;
  text-transform: uppercase;
}
.oe-card__list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}
.oe-card__link {
  align-items: center;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  text-align: left;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  width: 100%;
}
.oe-card__link:hover {
  background-color: #fafbf5;
  border-color: #8d8f3833;
  transform: translate(6px);
}
.oe-card__bullet {
  color: #bdb85d;
  font-size: 1.2rem;
  line-height: 0.8;
  transition: color 0.2s;
}
.oe-card__link:hover .oe-card__bullet {
  color: #8d8f38;
}
.oe-card__text {
  color: #0c2010;
  flex-grow: 1;
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.4;
}
.oe-card__link:hover .oe-card__text {
  color: #0c2010;
}
.oe-drawer-overlay {
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  background: #1a1c0966;
  inset: 0;
  opacity: 0;
  position: fixed;
  transition:
    opacity 0.4s ease,
    visibility 0.4s ease;
  visibility: hidden;
  z-index: 9999;
}
.oe-drawer-overlay.is-open {
  opacity: 1;
  visibility: visible;
}
.oe-drawer {
  background: #fff;
  box-shadow: -10px 0 40px #0000001a;
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 500px;
  overflow-y: auto;
  position: fixed;
  right: 0;
  top: 0;
  transform: translate(100%);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  width: 100%;
}
.oe-drawer.is-open {
  transform: translate(0);
}
.oe-drawer-close {
  align-items: center;
  background: #f2f5e1;
  border: none;
  border-radius: 50%;
  color: #8d8f38;
  cursor: pointer;
  display: flex;
  height: 40px;
  justify-content: center;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  transition: all 0.2s;
  width: 40px;
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
  background: rgba(141, 143, 56, 0.1);
  color: #8d8f38;
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
  background: #8d8f38;
  color: #fff;
  border: none;
  box-shadow: 0 4px 15px rgba(141, 143, 56, 0.3);
}

.oe-btn--solid:hover {
  background: #717723;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(141, 143, 56, 0.4);
}

.oe-btn--outline {
  background: transparent;
  color: #8d8f38;
  border: 2px solid #8d8f38;
}

.oe-btn--outline:hover {
  background: rgba(141, 143, 56, 0.05);
}

/* HERO CSS */
.pg-hero-wrapper {
  --pg-light: #f4eb82;
  --pg-primary: #bdb85d;
  --pg-dark: #8d8f38;
  --pg-darker: #717723;
  --pg-bg: #1a1c09;
  background-color: var(--pg-bg);
}
.pg-container {
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1.5rem;
}
.pg-hero {
  align-items: center;
  background: transparent;
  display: flex;
  height: clamp(520px, 68vh, 680px);
  overflow: hidden;
  position: relative;
}
.pg-hero__bg {
  inset: 0;
  position: absolute;
}
.pg-hero__img {
  animation: kb-7ee60c61 14s ease-out forwards;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  width: 100%;
}
@keyframes kb-7ee60c61 {
  0% {
    transform: scale(1);
  }
  to {
    transform: scale(1.06);
  }
}
.pg-hero__overlay {
  backdrop-filter: blur(15px);
  background: #0f3c6166;
  inset: 0;
  mask-image: linear-gradient(90deg, #000, #000 35%, transparent 55%);
  position: absolute;
}
.pg-hero__deco {
  color: var(--pg-light);
  opacity: 0.12;
  position: absolute;
  z-index: 2;
}
.pg-hero__deco--tl {
  left: 5%;
  top: 14%;
}
.pg-hero__deco--tr {
  right: 8%;
  top: 10%;
}
.pg-hero__deco--br {
  bottom: 20%;
  right: 12%;
}
.pg-hero__content {
  position: relative;
  width: 100%;
  z-index: 3;
}
.pg-hero__inner {
  max-width: 640px;
}
.pg-hero__eyebrow {
  align-items: center;
  display: flex;
  margin-bottom: 2rem;
}
.pg-hero__logo-full {
  height: 48px;
  object-fit: contain;
}
.pg-hero__title {
  display: flex;
  flex-direction: column;
  line-height: 1;
  margin: 0 0 2rem;
}
.pg-hero__title-main {
  color: var(--pg-light);
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 24px hsla(55, 84%, 73%, 0.25);
}
.pg-hero__title-main,
.pg-hero__title-sub {
  font-family: var(--font-serif, Georgia, serif);
}
.pg-hero__title-sub {
  color: #ffffffe6;
  font-size: clamp(1.2rem, 2.5vw, 1.9rem);
  font-weight: 600;
  letter-spacing: 0.05em;
  margin-top: 1rem;
}
.pg-hero__desc {
  color: #ffffffad;
  font-size: clamp(0.9rem, 1.4vw, 1rem);
  line-height: 1.65;
  margin: 0 0 3rem;
  max-width: 520px;
}
.pg-hero__ctas-new {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1rem;
}
.pg-btn-card {
  align-items: center;
  background: transparent;
  border: 1px solid hsla(0, 0%, 100%, 0.4);
  border-radius: 12px;
  color: #fff;
  display: flex;
  flex-direction: column;
  font-size: 0.95rem;
  font-weight: 600;
  gap: 0.5rem;
  justify-content: center;
  min-width: 140px;
  padding: 1rem 2.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
}
.pg-btn-card:hover {
  background: #f4ea8026;
  border-color: var(--pg-light);
  color: var(--pg-light);
  transform: translateY(-2px);
}
.btn-icon {
  margin-bottom: 0.1rem;
}
.pg-hero__stats-bar {
  backdrop-filter: blur(16px) saturate(150%);
  background-attachment: fixed;
  background-color: #1a1c09d9;
  background-image: radial-gradient(
    circle at 50% 50%,
    hsla(55, 84%, 73%, 0.15) 0,
    transparent 60%
  );
  background-position: 50%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  border-top: 1px solid hsla(55, 84%, 73%, 0.2);
  box-shadow:
    0 -4px 24px #0000004d,
    0 12px 32px #0009;
  padding: 1.5rem 0;
  position: relative;
  z-index: 10;
}
.pg-hero__stats-inner {
  justify-content: space-between;
  position: relative;
  z-index: 2;
}
.pg-hero__stats-inner,
.pg-stat {
  align-items: center;
  display: flex;
}
.pg-stat {
  border-right: 1px solid hsla(55, 84%, 73%, 0.3);
  flex: 1;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  padding: 0 1.5rem;
}
.pg-stat:last-child {
  border-right: none;
}
.pg-stat__icon {
  align-items: center;
  color: var(--pg-light);
  display: flex;
  justify-content: center;
}
.pg-stat__text {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}
.pg-stat__value {
  color: var(--pg-light);
  font-size: clamp(1.1rem, 1.3vw, 1.4rem);
  font-weight: 800;
  line-height: 1.2;
}
.pg-stat__label {
  color: #f4ea80d9;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: left;
}
@media (max-width: 900px) {
  .oe-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .pg-hero {
    flex-direction: column;
    height: auto;
    min-height: clamp(500px, 85vh, 800px);
    padding-top: 5rem;
  }
  .pg-hero__content {
    align-items: center;
    display: flex;
    flex: 1;
    padding-bottom: 3rem;
  }
  .pg-hero__stats-bar {
    position: relative;
    width: 100%;
  }
  .pg-hero__stats-inner {
    flex-wrap: wrap;
    gap: 1rem 0;
  }
  .pg-stat {
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
    border-right: none;
    flex: 1 1 50%;
    padding: 1rem 0.5rem;
  }
  .pg-stat:nth-child(odd) {
    border-right: 1px solid hsla(0, 0%, 100%, 0.1);
  }
  .pg-stat:nth-last-child(-n + 2) {
    border-bottom: none;
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
@media (max-width: 480px) {
  .pg-hero__ctas-new {
    flex-direction: row;
    gap: 1rem;
  }
  .pg-btn-card {
    flex: 1;
    padding: 1rem;
  }
  .pg-hero__title-main {
    font-size: clamp(2.5rem, 12vw, 4rem);
  }
  .pg-stat {
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1) !important;
    border-right: none !important;
    flex: 1 1 100%;
    padding: 1rem 1.5rem;
  }
  .pg-stat:last-child {
    border-bottom: none !important;
  }
}
</style>
