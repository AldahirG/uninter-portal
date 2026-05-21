<script setup lang="ts">
import { ArrowRight, Check } from "lucide-vue-next";

const modalidades = [
  {
    id: "bilingue",
    tag: "BIU BILINGÜE",
    titulo: "Bachillerato Bilingüe",
    subtitulo: "Inglés como segunda lengua",
    color: "#6BAF04",
    colorLight: "#e8f5e9",
    desc: "Programa diseñado para desarrollar tu fluidez en inglés mientras obtienes tu bachillerato. Ideal para estudiantes que buscan certificaciones internacionales y una formación sólida.",
    caracteristicas: [
      "49+ materias en inglés",
      "Certificación TKT (Teaching Knowledge Test)",
      "Intercambios internacionales",
      "Ambiente multicultural",
      "Asesorías académicas sin costo",
    ],
    href: "/bachillerato/biu-bilingue",
    image: "/images/hero/licenciaturas.jpg",
  },
  {
    id: "multicultural",
    tag: "BIU MULTICULTURAL",
    titulo: "Bachillerato Multicultural",
    subtitulo: "Inglés + Francés + cultura global",
    color: "#4A7A02",
    colorLight: "#f1f8f0",
    desc: "La opción más completa: dos idiomas, convivencia con alumnos de más de 25 países y certificaciones internacionales que ampliarán tus horizontes académicos y personales.",
    caracteristicas: [
      "Inglés y francés curriculares",
      "Certificación DELF (francés)",
      "Alumnos de 25+ países",
      "Diploma Internacional",
      "Talleres culturales incluidos",
    ],
    href: "https://biu.uninter.edu.mx/biu-multicultural",
    external: true,
    image: "/images/hero/ejecutivas.jpg",
  },
];
</script>

<template>
  <section id="oferta-biu" class="oferta-section">
    <div class="biu-container">
      <!-- Header -->
      <div class="oferta-header">
        <div class="biu-eyebrow">
          <span class="eyebrow-line"></span>
          OFERTA EDUCATIVA
        </div>
        <h2 class="oferta-title">
          Elige tu<br /><em>modalidad BIU</em>
        </h2>
        <p class="oferta-subtitle">
          Dos rutas de excelencia, un mismo destino: tu éxito académico y personal.
        </p>
      </div>

      <!-- Cards -->
      <div class="oferta-grid">
        <div
          v-for="m in modalidades"
          :key="m.id"
          class="mod-card"
        >
          <!-- Imagen -->
          <div class="mod-card__img-wrap">
            <img
              :src="m.image"
              :alt="m.titulo"
              class="mod-card__img"
            />
            <div class="mod-card__img-overlay" :style="`background: linear-gradient(to top, ${m.color}ee 0%, ${m.color}44 60%, transparent 100%)`"></div>
            <span class="mod-card__tag" :style="`background: ${m.color}`">{{ m.tag }}</span>
          </div>

          <!-- Contenido -->
          <div class="mod-card__body">
            <div>
              <h3 class="mod-card__title" :style="`color: ${m.color}`">{{ m.titulo }}</h3>
              <p class="mod-card__sub">{{ m.subtitulo }}</p>
              <p class="mod-card__desc">{{ m.desc }}</p>
            </div>

            <!-- Características -->
            <ul class="mod-card__features">
              <li v-for="c in m.caracteristicas" :key="c" class="mod-card__feature">
                <Check :size="14" class="mod-card__check" :style="`color: ${m.color}`" />
                <span>{{ c }}</span>
              </li>
            </ul>

            <!-- CTA -->
            <NuxtLink
              v-if="!m.external"
              :to="m.href"
              class="mod-card__btn"
              :style="`background: ${m.color}`"
            >
              Conoce más
              <ArrowRight :size="16" />
            </NuxtLink>
            <a
              v-else
              :href="m.href"
              target="_blank"
              class="mod-card__btn"
              :style="`background: ${m.color}`"
            >
              Conoce más
              <ArrowRight :size="16" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.biu-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.oferta-section {
  background: #fff;
  padding: 5.5rem 0;
}

/* Header */
.oferta-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.biu-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #6BAF04;
  margin-bottom: 1rem;
}
.eyebrow-line {
  display: block;
  width: 24px;
  height: 2px;
  background: #6BAF04;
  flex-shrink: 0;
}

.oferta-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #1e293b;
  line-height: 1.12;
  letter-spacing: -0.02em;
  margin: 0 0 1rem;
}
.oferta-title em { font-style: italic; color: #6BAF04; }

.oferta-subtitle {
  font-size: 1rem;
  color: #64748b;
  margin: 0;
}

/* Grid */
.oferta-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

/* Card */
.mod-card {
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #e2e8f0;
  background: #fff;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.25s, transform 0.25s;
}
.mod-card:hover {
  box-shadow: 0 20px 50px rgba(74,122,2,0.14);
  transform: translateY(-4px);
}

/* Imagen */
.mod-card__img-wrap {
  position: relative;
  aspect-ratio: 16/9;
  overflow: hidden;
  background: #4A7A02;
}
.mod-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.mod-card:hover .mod-card__img { transform: scale(1.05); }
.mod-card__img-overlay {
  position: absolute;
  inset: 0;
}
.mod-card__tag {
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #fff;
  padding: 0.3rem 0.75rem;
  border-radius: 4px;
}

/* Body */
.mod-card__body {
  padding: 2rem 2rem 2.25rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mod-card__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.5rem;
  font-weight: 800;
  margin: 0 0 0.25rem;
  line-height: 1.2;
}
.mod-card__sub {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #94a3b8;
  margin: 0 0 0.875rem;
}
.mod-card__desc {
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.65;
  margin: 0;
}

/* Features */
.mod-card__features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-top: 1px solid #f1f5f9;
  border-bottom: 1px solid #f1f5f9;
  padding: 1.25rem 0;
}
.mod-card__feature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  color: #334155;
}
.mod-card__check { flex-shrink: 0; }

/* CTA */
.mod-card__btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.85rem 1.75rem;
  border-radius: 8px;
  transition: filter 0.2s, transform 0.2s;
  align-self: flex-start;
}
.mod-card__btn:hover {
  filter: brightness(1.12);
  transform: translateY(-1px);
}

/* Responsive */
@media (max-width: 860px) {
  .oferta-grid { grid-template-columns: 1fr; }
}
</style>
