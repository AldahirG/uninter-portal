<script setup lang="ts">
import { MonitorSmartphone, BookOpenCheck, Microscope, Music4, Dumbbell, ChevronRight } from "lucide-vue-next";

const actividades = [
  { icon: Microscope, nombre: "Laboratorios de ciencias", desc: "Química, biología, física y tecnología con equipamiento de vanguardia." },
  { icon: BookOpenCheck, nombre: "Proyectos transversales", desc: "Problemáticas reales resueltas con enfoque multidisciplinario." },
  { icon: Music4, nombre: "Arte y cultura", desc: "Talleres de teatro, música, danza y expresión artística." },
  { icon: Dumbbell, nombre: "Deporte competitivo", desc: "Equipos representativos y activación física diaria." },
];

const modeloPilares = [
  {
    titulo: "Presencial",
    desc: "Clases en campus con profesores especializados y actividades prácticas que refuerzan el aprendizaje.",
    color: "#6BAF04",
  },
  {
    titulo: "En línea",
    desc: "Plataforma digital con recursos multimedia, foros y actividades asíncronas para aprender a tu ritmo.",
    color: "#4A7A02",
  },
  {
    titulo: "Flex",
    desc: "Combina lo mejor de ambos mundos: mayor autonomía, horarios flexibles y soporte académico continuo.",
    color: "#7BC905",
  },
];
</script>

<template>
  <section class="modelo-section">
    <!-- Actividades Académicas -->
    <div class="actividades-block">
      <div class="biu-container">
        <div class="actividades-layout">

          <div class="actividades-text">
            <div class="biu-eyebrow">
              <span class="eyebrow-line"></span>
              ACTIVIDADES ACADÉMICAS
            </div>
            <h2 class="actividades-title">
              Aprendizaje que<br /><em>inspira y transforma</em>
            </h2>
            <p class="actividades-desc">
              En BIU cada día es una oportunidad de descubrir, crear y crecer.
              Nuestro programa académico integra actividades prácticas, artísticas
              y deportivas que forman estudiantes completos y preparados para la
              universidad y la vida.
            </p>
            <div class="act-list">
              <div v-for="a in actividades" :key="a.nombre" class="act-item">
                <div class="act-item__icon">
                  <component :is="a.icon" :size="20" />
                </div>
                <div>
                  <p class="act-item__name">{{ a.nombre }}</p>
                  <p class="act-item__desc">{{ a.desc }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="actividades-img-wrap">
            <img
              src="/images/hero/talleres.jpg"
              alt="Actividades académicas BIU"
              class="actividades-img"
            />
            <div class="act-badge">
              <MonitorSmartphone :size="16" />
              <span>Modelo Blended</span>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- Modelo Blended/Flex -->
    <div class="flex-block">
      <div class="biu-container">
        <div class="flex-header">
          <div class="biu-eyebrow biu-eyebrow--light">
            <span class="eyebrow-line eyebrow-line--light"></span>
            MODELO EDUCATIVO
          </div>
          <h2 class="flex-title">
            Blended / Flex Learning
          </h2>
          <p class="flex-subtitle">
            Un modelo educativo innovador que adapta la enseñanza a las
            necesidades y ritmos de cada estudiante.
          </p>
        </div>

        <div class="flex-grid">
          <div
            v-for="p in modeloPilares"
            :key="p.titulo"
            class="flex-card"
          >
            <div class="flex-card__bar" :style="`background: ${p.color}`"></div>
            <h3 class="flex-card__title" :style="`color: ${p.color}`">{{ p.titulo }}</h3>
            <p class="flex-card__desc">{{ p.desc }}</p>
          </div>
        </div>

        <div class="flex-cta-wrap">
          <a
            href="https://biu.uninter.edu.mx/"
            target="_blank"
            class="flex-cta"
          >
            Conoce el modelo educativo completo
            <ChevronRight :size="16" />
          </a>
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

/* ── Actividades ─────────────────────────────────────────── */
.actividades-block {
  background: #f1f8f0;
  padding: 5.5rem 0;
}

.actividades-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.biu-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #6BAF04;
  margin-bottom: 1rem;
}
.biu-eyebrow--light { color: rgba(255,255,255,0.55); }
.eyebrow-line {
  display: block;
  width: 24px;
  height: 2px;
  background: #6BAF04;
  flex-shrink: 0;
}
.eyebrow-line--light { background: rgba(255,255,255,0.45); }

.actividades-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.9rem, 3.5vw, 2.8rem);
  font-weight: 800;
  color: #1e293b;
  line-height: 1.12;
  letter-spacing: -0.02em;
  margin: 0 0 1.25rem;
}
.actividades-title em { font-style: italic; color: #6BAF04; }

.actividades-desc {
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.7;
  margin: 0 0 2rem;
}

.act-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.act-item {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}
.act-item__icon {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: #e8f5e9;
  color: #6BAF04;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.act-item__name {
  font-size: 0.9rem;
  font-weight: 700;
  color: #4A7A02;
  margin: 0 0 0.2rem;
}
.act-item__desc {
  font-size: 0.8rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0;
}

/* Imagen actividades */
.actividades-img-wrap {
  position: relative;
}
.actividades-img {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  border-radius: 20px;
  display: block;
  background: #c8e6c9;
}
.act-badge {
  position: absolute;
  bottom: 1.25rem;
  right: 1.25rem;
  background: #4A7A02;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.45rem 1rem;
  border-radius: 20px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.3);
}

/* ── Modelo Flex ─────────────────────────────────────────── */
.flex-block {
  background: #0d1f0e;
  padding: 5rem 0 5.5rem;
}

.flex-header {
  text-align: center;
  margin-bottom: 3rem;
}

.flex-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.02em;
  margin: 0 0 1rem;
}

.flex-subtitle {
  font-size: 1rem;
  color: rgba(255,255,255,0.6);
  max-width: 540px;
  margin: 0 auto;
  line-height: 1.65;
}

.flex-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}

.flex-card {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 0 1.75rem 2rem;
  overflow: hidden;
  transition: background 0.2s, transform 0.2s;
}
.flex-card:hover {
  background: rgba(255,255,255,0.1);
  transform: translateY(-3px);
}
.flex-card__bar {
  height: 4px;
  margin: 0 -1.75rem 1.75rem;
  border-radius: 0;
}
.flex-card__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.4rem;
  font-weight: 800;
  margin: 0 0 0.875rem;
}
.flex-card__desc {
  font-size: 0.88rem;
  color: rgba(255,255,255,0.62);
  line-height: 1.65;
  margin: 0;
}

.flex-cta-wrap { text-align: center; }
.flex-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.88rem;
  font-weight: 700;
  color: #A8D86E;
  text-decoration: none;
  transition: color 0.2s;
}
.flex-cta:hover { color: #a5d6a7; }

/* Responsive */
@media (max-width: 900px) {
  .actividades-layout { grid-template-columns: 1fr; gap: 2.5rem; }
  .flex-grid { grid-template-columns: 1fr; }
  .actividades-img { aspect-ratio: 16/9; }
}
</style>
