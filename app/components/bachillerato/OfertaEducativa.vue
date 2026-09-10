<script setup lang="ts">
import { Check, ChevronRight } from "lucide-vue-next";

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
    image: "/images/bachillerato/12.jpg",
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
    href: "/bachillerato/biu-multicultural",
    image: "/images/bachillerato/9.jpg",
  },
];
</script>

<template>
  <section id="oferta-biu" class="oferta-section">
    <div class="biu-container">
      <div class="oferta-header">
        <div class="biu-eyebrow">
          <span class="eyebrow-line"></span> OFERTA EDUCATIVA
        </div>
        <h2 class="oferta-title">
          Elige tu<br />
          <em>modalidad BIU</em>
        </h2>
        <p class="oferta-subtitle">
          Dos rutas de excelencia, un mismo destino: tu éxito académico y
          personal.
        </p>
      </div>
      <div class="oferta-grid">
        <div v-for="c in modalidades" :key="c.id" class="mod-card">
          <div class="mod-card__img-wrap">
            <img :src="c.image" :alt="c.titulo" class="mod-card__img" />
            <div class="mod-card__img-overlay"></div>
            <span class="mod-card__tag" :style="`background: ${c.color}`">{{
              c.tag
            }}</span>
          </div>
          <div class="mod-card__body">
            <div>
              <h3 class="mod-card__title" :style="`color: ${c.color}`">
                {{ c.titulo }}
              </h3>
              <p class="mod-card__sub">{{ c.subtitulo }}</p>
              <p class="mod-card__desc">{{ c.desc }}</p>
              <ul class="mod-card__features">
                <li
                  v-for="x in c.caracteristicas"
                  :key="x"
                  class="mod-card__feature"
                >
                  <Check
                    :size="14"
                    class="mod-card__check"
                    :style="`color: ${c.color}`"
                  />
                  <span>{{ x }}</span>
                </li>
              </ul>
            </div>
            <a
              v-if="c.external"
              :href="c.href"
              target="_blank"
              class="mod-card__btn"
              :style="`background: ${c.color}`"
            >
              Conoce más <ChevronRight :size="16" />
            </a>
            <NuxtLink
              v-else
              :to="c.href"
              class="mod-card__btn"
              :style="`background: ${c.color}`"
            >
              Conoce más <ChevronRight :size="16" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.biu-container {
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1.5rem;
}
.oferta-section {
  background: #fff;
  padding: 5.5rem 0;
}
.oferta-header {
  margin-bottom: 3.5rem;
  text-align: center;
}
.biu-eyebrow {
  align-items: center;
  color: #6baf04;
  display: inline-flex;
  font-size: 0.72rem;
  font-weight: 800;
  gap: 0.75rem;
  letter-spacing: 0.14em;
  margin-bottom: 1rem;
  text-transform: uppercase;
}
.eyebrow-line {
  background: #6baf04;
  display: block;
  flex-shrink: 0;
  height: 2px;
  width: 24px;
}
.oferta-title {
  color: #1e293b;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.12;
  margin: 0 0 1rem;
}
.oferta-title em {
  color: #6baf04;
  font-style: italic;
}
.oferta-subtitle {
  color: #64748b;
  font-size: 1rem;
  margin: 0;
}
.oferta-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(2, 1fr);
}
.mod-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition:
    box-shadow 0.25s,
    transform 0.25s;
}
.mod-card:hover {
  box-shadow: 0 20px 50px #4a7a0224;
  transform: translateY(-4px);
}
.mod-card__img-wrap {
  aspect-ratio: 16/9;
  background: #4a7a02;
  overflow: hidden;
  position: relative;
}
.mod-card__img {
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  transition: transform 0.5s ease;
  width: 100%;
}
.mod-card:hover .mod-card__img {
  transform: scale(1.05);
}
.mod-card__img-overlay {
  inset: 0;
  position: absolute;
}
.mod-card__tag {
  border-radius: 4px;
  color: #fff;
  font-size: 0.68rem;
  font-weight: 800;
  left: 1rem;
  letter-spacing: 0.1em;
  padding: 0.3rem 0.75rem;
  position: absolute;
  text-transform: uppercase;
  top: 1rem;
}
.mod-card__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem 2rem 2.25rem;
}
.mod-card__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin: 0 0 0.25rem;
}
.mod-card__sub {
  color: #94a3b8;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  margin: 0 0 0.875rem;
  text-transform: uppercase;
}
.mod-card__desc {
  color: #475569;
  font-size: 0.9rem;
  line-height: 1.65;
  margin: 0;
}
.mod-card__features {
  border-bottom: 1px solid #f1f5f9;
  border-top: 1px solid #f1f5f9;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  list-style: none;
  margin: 0;
  padding: 1.25rem 0;
}
.mod-card__feature {
  align-items: center;
  color: #334155;
  display: flex;
  font-size: 0.85rem;
  gap: 0.5rem;
}
.mod-card__check {
  flex-shrink: 0;
}
.mod-card__btn {
  align-items: center;
  align-self: flex-start;
  border-radius: 8px;
  color: #fff;
  display: inline-flex;
  font-size: 0.9rem;
  font-weight: 700;
  gap: 0.5rem;
  justify-content: center;
  padding: 0.85rem 1.75rem;
  text-decoration: none;
  transition:
    filter 0.2s,
    transform 0.2s;
}
.mod-card__btn:hover {
  filter: brightness(1.12);
  transform: translateY(-1px);
}
@media (max-width: 860px) {
  .oferta-grid {
    grid-template-columns: 1fr;
  }
}
</style>
