<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";

const blogs = [
  {
    id: 4,
    titulo: "Secundaria Internacional",
    siglas: "SIU",
    color: "#d9531e",
    url: "https://blogs.uninter.edu.mx/siu",
  },
  {
    id: 3,
    titulo: "Deportes",
    siglas: "DEPORTES",
    color: "#00695c",
    url: "https://blogs.uninter.edu.mx/deportes/",
  },

  {
    id: 2,
    titulo: "Cultura",
    siglas: "CULTURA",
    color: "#1565c0",
    url: "https://blogs.uninter.edu.mx/difusioncultural",
  },
  {
    id: 1,
    titulo: "Eventos",
    siglas: "Eventos",
    color: "#6a1b9a",
    url: "https://blogs.uninter.edu.mx/congresoInternacionalLatinoamerica/",
  },
];
</script>

<template>
  <section class="vida-est-section">
    <div class="uninter-container">
      <!-- ENCABEZADO -->
      <div class="bl-header">
        <div class="bl-header__left">
          <span class="bl-eyebrow">— COMUNIDAD ACADÉMICA</span>
          <h2 class="bl-title">Blogs SIU</h2>
        </div>
        <a
          href="https://uninter.edu.mx/blogs"
          target="_blank"
          rel="noopener"
          class="bl-btn-all"
        >
          Ver todos →
        </a>
      </div>

      <!-- GRID DE TARJETAS (ESTABLE SIN PARPADEO) -->
      <div class="bl-grid">
        <a
          v-for="b in blogs"
          :key="b.id"
          :href="b.url"
          target="_blank"
          rel="noopener"
          class="bl-card"
        >
          <!-- Banner Superior de Color con Watermark -->
          <div class="bl-card__thumb" :style="{ backgroundColor: b.color }">
            <span class="bl-card__watermark" aria-hidden="true">{{
              b.siglas
            }}</span>
            <span class="bl-card__initials">{{ b.siglas }}</span>
          </div>

          <!-- Cuerpo de la Tarjeta -->
          <div class="bl-card__body">
            <p class="bl-card__nombre">{{ b.titulo }}</p>
            <span class="bl-card__link">
              Leer <ArrowRight :size="13" class="bl-card__icon" />
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.vida-est-section {
  background-color: #f8fafc;
  padding: 5rem 0 5.5rem;
  font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
}

.uninter-container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
}

/* ═══ ENCABEZADO ═══ */
.bl-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  gap: 1.25rem;
}

.bl-header__left {
  display: flex;
  flex-direction: column;
}

.bl-eyebrow {
  color: #0f3c61;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.bl-title {
  color: #0f3c61;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2.4rem, 4vw, 3.1rem);
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
  letter-spacing: -0.01em;
}

.bl-btn-all {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border: 1.5px solid #0f3c61;
  border-radius: 9999px;
  color: #0f3c61;
  padding: 0.45rem 1.4rem;
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
  background: #ffffff;
  transition:
    background 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;
}

.bl-btn-all:hover {
  background: #0f3c61;
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(15, 60, 97, 0.15);
}

/* ═══ GRID ═══ */
.bl-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

/* ═══ TARJETA INDIVIDUAL (LIMPIA, SIN PARPADEO) ═══ */
.bl-card {
  background: #ffffff;
  border: 1.5px solid #e2e8f0;
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
  position: relative;
}

.bl-card:hover {
  border-color: #d9531e;
  box-shadow: 0 12px 28px rgba(217, 83, 30, 0.12);
}

/* Banner Superior */
.bl-card__thumb {
  height: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  user-select: none;
}

/* Marca de Agua Transparente en lateral derecho */
.bl-card__watermark {
  position: absolute;
  right: -6px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 3.2rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.14);
  line-height: 1;
  letter-spacing: -0.02em;
  pointer-events: none;
  white-space: nowrap;
  font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
  z-index: 1;
}

/* Texto Central Blanco Nítido */
.bl-card__initials {
  position: relative;
  z-index: 2;
  font-size: 1.08rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 0.06em;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
  pointer-events: none;
}

/* Cuerpo de Tarjeta */
.bl-card__body {
  padding: 1.25rem 1.25rem 1.35rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  gap: 1rem;
  background: #ffffff;
}

.bl-card__nombre {
  font-size: 0.92rem;
  font-weight: 700;
  color: #0f3c61;
  line-height: 1.38;
  margin: 0;
}

.bl-card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.85rem;
  font-weight: 700;
  color: #0084d1;
  transition:
    color 0.2s ease,
    gap 0.2s ease;
}

.bl-card:hover .bl-card__link {
  color: #d9531e;
  gap: 0.55rem;
}

.bl-card__icon {
  flex-shrink: 0;
}

/* ═══ RESPONSIVE ═══ */
@media (max-width: 1024px) {
  .bl-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .bl-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .bl-card__body {
    padding: 1rem;
  }
}
</style>
