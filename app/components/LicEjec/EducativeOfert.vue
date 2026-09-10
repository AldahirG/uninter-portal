<script setup lang="ts">
import { ref } from "vue";
import { X, ArrowRight, Trophy, Download } from "lucide-vue-next";
import carrerasData from "@/assets/data/licenciaturas-ejecutivas.json";

const isDrawerOpen = ref(false);
const activeProgram = ref<any>(null);

const openDrawer = (carrera: any) => {
  activeProgram.value = carrera;
  isDrawerOpen.value = true;
  if (typeof document !== "undefined") {
    document.body.style.overflow = "hidden";
  }
};

const closeDrawer = () => {
  isDrawerOpen.value = false;
  setTimeout(() => {
    activeProgram.value = null;
  }, 400);
  if (typeof document !== "undefined") {
    document.body.style.overflow = "";
  }
};

const scrollToContacto = () => {
  closeDrawer();
  const contactEl = document.getElementById("formulario-registro");
  if (contactEl) {
    contactEl.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <section id="oferta-ejecutiva" class="oe-section uninter-section">
    <div class="uninter-container">
      <div class="oe-header">
        <div>
          <div class="uninter-eyebrow">PROGRAMAS ACADÉMICOS</div>
          <h2 class="uninter-section-title">
            Elige tu<br />
            <em>licenciatura ejecutiva</em>
          </h2>
        </div>
      </div>

      <!-- Grid de Áreas -->
      <div class="oe-grid">
        <div v-for="(area, index) in carrerasData" :key="index" class="oe-card">
          <div class="oe-card__content-wrapper">
            <h3 class="oe-card__title">{{ area.area }}</h3>
            <ul class="oe-card__list">
              <li v-for="(carrera, cIdx) in area.carreras" :key="cIdx">
                <button @click.prevent="openDrawer(carrera)" class="oe-card__link">
                  <span class="oe-card__bullet">•</span>
                  <span class="oe-card__text">{{ carrera.nombre }} ({{ carrera.sigla }})</span>
                  <div v-if="carrera.trophy" class="oe-badge-excellence" title="Programa de Excelencia">
                    <Trophy :size="14" />
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Slide Bar (Drawer Lateral) -->
    <Teleport to="body">
      <div class="oe-drawer-overlay" :class="{ 'is-open': isDrawerOpen }" @click="closeDrawer">
        <div class="oe-drawer" :class="{ 'is-open': isDrawerOpen }" @click.stop>
          <button class="oe-drawer-close" @click="closeDrawer" aria-label="Cerrar panel">
            <X :size="24" />
          </button>

          <div v-if="activeProgram" class="oe-drawer-content">
            <div class="oe-drawer-header">
              <div v-if="activeProgram.trophy" class="oe-drawer-badge">
                <Trophy :size="16" /> Programa de Excelencia
              </div>
              <h3 class="oe-detail-title">{{ activeProgram.nombre }} ({{ activeProgram.sigla }})</h3>
            </div>

            <!-- Descripción Principal -->
            <p class="oe-detail-desc">{{ activeProgram.descripcion }}</p>

            <!-- Acciones -->
            <div class="oe-detail-actions">
              <a
                v-if="activeProgram.brochure"
                :href="activeProgram.brochure"
                target="_blank"
                class="oe-btn oe-btn--outline"
              >
                <Download :size="16" /> Ver Folleto Digital
              </a>
              <button @click="scrollToContacto" class="oe-btn oe-btn--solid">
                Solicitar Información <ArrowRight :size="16" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.uninter-container {
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1.5rem;
}

.uninter-section {
  padding: 5rem 0;
}

.oe-section {
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
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
  color: #0073b4;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}

.uninter-section-title {
  color: #0f3c61;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
  margin: 0;
}

.uninter-section-title em {
  color: #694E39;
  font-style: italic;
}

.oe-grid {
  align-items: stretch;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
}

/* Card blanca con sombra suave café */
.oe-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(105, 78, 57, 0.08);
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
}

.oe-card:hover {
  box-shadow: 0 14px 30px rgba(105, 78, 57, 0.16);
  border-color: #A78D75;
  transform: translateY(-4px);
}

.oe-card__content-wrapper {
  padding: 2.5rem;
}

/* Título de la card en café */
.oe-card__title {
  border-bottom: 2px solid #f1f5f9;
  color: #694E39;
  font-size: 1.15rem;
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
  background-color: #f8fafc;
  border-color: #e2e8f0;
  transform: translateX(6px);
}

.oe-card__bullet {
  color: #cbd5e1;
  font-size: 1.2rem;
  line-height: 0.8;
  transition: color 0.2s;
}

.oe-card__link:hover .oe-card__bullet {
  color: #694E39;
}

/* Texto de carrera en negro / dark neutral */
.oe-card__text {
  color: #0f172a;
  flex-grow: 1;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.4;
}

.oe-card__link:hover .oe-card__text {
  color: #694E39;
}

/* Ícono de la copa en color amarillo/dorado normal */
.oe-badge-excellence {
  align-items: center;
  background: rgba(234, 179, 8, 0.12);
  border-radius: 50%;
  color: #eab308;
  display: flex;
  justify-content: center;
  padding: 6px;
}

/* ═══════════ SLIDE BAR / DRAWER LATERAL ═══════════ */
.oe-drawer-overlay {
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  background: rgba(15, 60, 97, 0.4);
  inset: 0;
  opacity: 0;
  position: fixed;
  transition: opacity 0.4s ease, visibility 0.4s ease;
  visibility: hidden;
  z-index: 9999;
}

.oe-drawer-overlay.is-open {
  opacity: 1;
  visibility: visible;
}

.oe-drawer {
  background: #ffffff;
  box-shadow: -10px 0 40px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 500px;
  overflow-y: auto;
  position: fixed;
  right: 0;
  top: 0;
  transform: translateX(100%);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  width: 100%;
}

.oe-drawer.is-open {
  transform: translateX(0);
}

.oe-drawer-close {
  align-items: center;
  background: #f1f5f9;
  border: none;
  border-radius: 50%;
  color: #4a657a;
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
  color: #003b5c;
  transform: rotate(90deg);
}

.oe-drawer-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 4rem 3rem;
}

.oe-drawer-header {
  margin-bottom: 2rem;
}

.oe-drawer-badge {
  align-items: center;
  background: #fef9c3;
  border-radius: 99px;
  color: #854d0e;
  display: inline-flex;
  font-size: 0.8rem;
  font-weight: 700;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
}

.oe-detail-title {
  color: #003b5c;
  font-family: Poppins, sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.15;
  margin: 0 0 1rem;
}

.oe-drawer-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.oe-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: #f1f5f9;
  color: #475569;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.35rem 0.75rem;
  border-radius: 6px;
}

.oe-detail-desc {
  color: #475569;
  font-size: 1rem;
  line-height: 1.7;
  margin: 0 0 2rem;
}

.oe-drawer-box {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.2rem;
  margin-bottom: 1rem;
}

.box-title {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: #0f3c61;
  font-size: 0.9rem;
  font-weight: 700;
  margin: 0 0 0.4rem;
}

.box-desc {
  color: #64748b;
  font-size: 0.88rem;
  line-height: 1.55;
  margin: 0;
}

.oe-detail-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

.oe-btn {
  align-items: center;
  border-radius: 12px;
  cursor: pointer;
  display: inline-flex;
  font-size: 1rem;
  font-weight: 700;
  gap: 10px;
  justify-content: center;
  padding: 1rem 1.5rem;
  text-decoration: none;
  transition: all 0.3s;
  width: 100%;
}

.oe-btn--solid {
  background: #694E39;
  border: none;
  box-shadow: 0 4px 15px rgba(105, 78, 57, 0.3);
  color: #ffffff;
}

.oe-btn--solid:hover {
  background: #4e3827;
  box-shadow: 0 8px 25px rgba(105, 78, 57, 0.45);
  transform: translateY(-2px);
}

.oe-btn--outline {
  background: transparent;
  border: 2px solid #694E39;
  color: #694E39;
}

.oe-btn--outline:hover {
  background: rgba(105, 78, 57, 0.06);
}

@media (max-width: 900px) {
  .oe-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
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
