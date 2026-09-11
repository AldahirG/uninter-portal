<script setup lang="ts">
import { computed } from "vue";
import { ArrowRight } from "lucide-vue-next";

interface NoticiaItem {
  Titulo: string;
  SRC: string;
  URL: string;
}

// Objeto / Columna Izquierda (Máximo 3)
const columnaIzquierda: NoticiaItem[] = [
  {
    Titulo: "8a FERIA UNINTER DE DISÑO E INGENIERIA",
    SRC: "/images/noticias/PostFeriaModas.jpg",
    URL: "https://uninter.edu.mx/eventos/",
  },
  /*{
    Titulo:
      "Convocatoria abierta para intercambios académicos internacionales 2026",
    SRC: "/images/noticias/tastesNews.jpg",
    URL: "https://uninter.edu.mx/noticias",
  },
  {
    Titulo: "Nuevo Centro de Idiomas abre sus puertas en campus central",
    SRC: "/images/noticias/tastesNews.jpg",
    URL: "https://uninter.edu.mx/noticias",
  },*/
];

// Objeto / Columna Derecha (Máximo 3)
const columnaDerecha: NoticiaItem[] = [
  /*{
    Titulo: "Leandros clasifican al torneo regional de fútbol americano",
    SRC: "/images/noticias/tastesNews.jpg",
    URL: "https://uninter.edu.mx/noticias",
  },
  {
    Titulo: "Sesión informativa de Licenciaturas Ejecutivas — Próximo inicio",
    SRC: "/images/noticias/tastesNews.jpg",
    URL: "https://uninter.edu.mx/noticias",
  },
  {
    Titulo: "Semana de la Salud y Bienestar Estudiantil en campus UNINTER",
    SRC: "/images/noticias/diaMujerNews.jpg",
    URL: "https://uninter.edu.mx/noticias",
  },*/
];

// Máximo 3 por columna
const leftItems = computed(() => columnaIzquierda.slice(0, 3));
const rightItems = computed(() => columnaDerecha.slice(0, 3));

// Total de eventos para calcular layout de 1 evento
const totalItems = computed(
  () => leftItems.value.length + rightItems.value.length,
);
const isSingleItem = computed(() => totalItems.value === 1);
const singleItem = computed(() => leftItems.value[0] || rightItems.value[0]);
</script>

<template>
  <section class="nn-section uninter-section">
    <div class="uninter-container">
      <!-- Encabezado sin botón "Ver todas" -->
      <div class="nn-header">
        <div>
          <div class="uninter-eyebrow">Novedades institucionales</div>
          <h2 class="uninter-section-title">Agenda<br /><em>UNINTER</em></h2>
          <p class="nn-desc">Descubre lo que está sucediendo en UNINTER.</p>
        </div>
      </div>

      <!-- Caso de 1 solo evento en total: ocupa todo el ancho -->
      <div v-if="isSingleItem && singleItem" class="nn-layout-single">
        <a
          :href="singleItem.URL"
          target="_blank"
          rel="noopener"
          class="nn-card-single"
        >
          <div class="nn-card-single__img-wrap">
            <img
              :src="singleItem.SRC"
              :alt="singleItem.Titulo"
              class="nn-card-single__img"
              loading="lazy"
            />
          </div>
          <div class="nn-card-single__body">
            <h3 class="nn-card-single__title">{{ singleItem.Titulo }}</h3>
            <span class="nn-card-item__link">
              Ver más <ArrowRight :size="16" class="link-arrow" />
            </span>
          </div>
        </a>
      </div>

      <!-- Caso de 2 columnas (izquierda y derecha, hasta 3 y 3) -->
      <div v-else class="nn-grid-columns">
        <!-- Columna Izquierda -->
        <div class="nn-column">
          <a
            v-for="(item, idx) in leftItems"
            :key="'left-' + idx"
            :href="item.URL"
            target="_blank"
            rel="noopener"
            class="nn-card-item"
          >
            <div class="nn-card-item__img-wrap">
              <img
                :src="item.SRC"
                :alt="item.Titulo"
                class="nn-card-item__img"
                loading="lazy"
              />
            </div>
            <div class="nn-card-item__body">
              <h3 class="nn-card-item__title">{{ item.Titulo }}</h3>
              <span class="nn-card-item__link">
                Ver más <ArrowRight :size="14" class="link-arrow" />
              </span>
            </div>
          </a>
        </div>

        <!-- Columna Derecha -->
        <div class="nn-column">
          <a
            v-for="(item, idx) in rightItems"
            :key="'right-' + idx"
            :href="item.URL"
            target="_blank"
            rel="noopener"
            class="nn-card-item"
          >
            <div class="nn-card-item__img-wrap">
              <img
                :src="item.SRC"
                :alt="item.Titulo"
                class="nn-card-item__img"
                loading="lazy"
              />
            </div>
            <div class="nn-card-item__body">
              <h3 class="nn-card-item__title">{{ item.Titulo }}</h3>
              <span class="nn-card-item__link">
                Ver más <ArrowRight :size="14" class="link-arrow" />
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.nn-section {
  background: #ffffff;
  padding: 5rem 0;
  border-bottom: 1px solid #e2e8f0;
}

.uninter-container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
}

.nn-header {
  margin-bottom: 2.5rem;
}

.uninter-eyebrow {
  color: #0073b4;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.uninter-section-title {
  color: #0f3c61;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2.2rem, 3.8vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.01em;
  line-height: 1.15;
  margin: 0;
}

.uninter-section-title em {
  color: #0073b4;
  font-style: italic;
}

.nn-desc {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.6;
  max-width: 580px;
  margin: 0.6rem 0 0 0;
}

/* ── LAYOUT DE 2 COLUMNAS ── */
.nn-grid-columns {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  align-items: start;
}

.nn-column {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

/* ── TARJETA INDIVIDUAL (HORIZONTAL) ── */
.nn-card-item {
  background: #ffffff;
  border: 1.5px solid #e2e8f0;
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  display: grid;
  grid-template-columns: 140px 1fr;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  min-height: 110px;
}

.nn-card-item:hover {
  border-color: #0073b4;
  box-shadow: 0 10px 24px rgba(15, 60, 97, 0.12);
  transform: translateY(-3px);
}

.nn-card-item__img-wrap {
  position: relative;
  overflow: hidden;
  background: #f1f5f9;
}

.nn-card-item__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.35s ease;
}

.nn-card-item:hover .nn-card-item__img {
  transform: scale(1.05);
}

.nn-card-item__body {
  padding: 1.1rem 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
}

.nn-card-item__title {
  color: #0f3c61;
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.35;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.nn-card-item__link {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  color: #0073b4;
  font-size: 0.82rem;
  font-weight: 700;
  margin-top: auto;
}

.link-arrow {
  transition: transform 0.2s ease;
}

.nn-card-item:hover .link-arrow {
  transform: translateX(4px);
}

/* ── LAYOUT DE 1 SOLO EVENTO (FULL WIDTH) ── */
.nn-layout-single {
  width: 100%;
}

.nn-card-single {
  background: #ffffff;
  border: 1.5px solid #e2e8f0;
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  box-shadow: 0 8px 30px rgba(15, 60, 97, 0.08);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  min-height: 320px;
}

.nn-card-single:hover {
  border-color: #0073b4;
  box-shadow: 0 16px 40px rgba(15, 60, 97, 0.16);
  transform: translateY(-4px);
}

.nn-card-single__img-wrap {
  position: relative;
  overflow: hidden;
  background: #f1f5f9;
}

.nn-card-single__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
  transition: transform 0.4s ease;
}

.nn-card-single:hover .nn-card-single__img {
  transform: scale(1.04);
}

.nn-card-single__body {
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
}

.nn-card-single__title {
  color: #0f3c61;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.4rem, 2.5vw, 2rem);
  font-weight: 800;
  line-height: 1.25;
  margin: 0;
}

/* ── RESPONSIVE ── */
@media (max-width: 900px) {
  .nn-grid-columns {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .nn-card-single {
    grid-template-columns: 1fr;
  }
  .nn-card-single__body {
    padding: 1.75rem;
  }
}

@media (max-width: 480px) {
  .nn-card-item {
    grid-template-columns: 100px 1fr;
  }
  .nn-card-item__body {
    padding: 0.85rem;
  }
  .nn-card-item__title {
    font-size: 0.88rem;
  }
}
</style>
