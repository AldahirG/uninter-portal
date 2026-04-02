<script setup lang="ts">
const features = [
  {
    icon: 'mdi:school-outline',
    title: 'Reconocimiento Oficial',
    body: 'Todos nuestros programas cuentan con RVOE y reconocimiento de la SEP, garantizando la validez de tu título a nivel nacional.',
    tag: 'Acreditación',
  },
  {
    icon: 'mdi:briefcase-account-outline',
    title: 'Bolsa de Trabajo',
    body: 'Conectamos a nuestros egresados con empresas líderes desde el último semestre. Más del 80% se incorpora al mercado laboral antes de graduarse.',
    tag: 'Empleabilidad',
    featured: true,
  },
  {
    icon: 'mdi:cash-multiple',
    title: 'Becas y Financiamiento',
    body: 'Contamos con esquemas de becas por mérito académico y opciones de financiamiento flexible para que el costo no sea un obstáculo.',
    tag: 'Acceso',
  },
  {
    icon: 'mdi:laptop-account',
    title: 'Modalidad Ejecutiva',
    body: 'Estudia mientras trabajas. Horarios sabatinos y nocturnos diseñados para profesionistas activos.',
    tag: 'Flexibilidad',
  },
  {
    icon: 'mdi:account-group-outline',
    title: 'Grupos Reducidos',
    body: 'Máximo 25 estudiantes por grupo para garantizar una atención personalizada y una experiencia educativa de calidad.',
    tag: 'Calidad',
  },
  {
    icon: 'mdi:earth',
    title: 'Internacionalización',
    body: 'Convenios con universidades internacionales, intercambios académicos y una formación con perspectiva global.',
    tag: 'Global',
  },
  {
    icon: 'mdi:flask-outline',
    title: 'Infraestructura Moderna',
    body: 'Laboratorios equipados, biblioteca digital, espacios de coworking y tecnología de vanguardia en cada aula.',
    tag: 'Instalaciones',
  },
  {
    icon: 'mdi:heart-outline',
    title: 'Enfoque Humano',
    body: 'Educación centrada en el desarrollo integral — académico, personal y profesional — de cada estudiante.',
    tag: 'Valores',
  },
]
</script>

<template>
  <section class="diff-section">
    <div class="diff-container">

      <!-- Header -->
      <div class="diff-header">
        <div class="diff-eyebrow">
          <span class="diff-eyebrow__line"></span>
          <span>Por qué elegirnos</span>
        </div>
        <h2 class="diff-title">
          La diferencia<br>
          <em>UNINTER</em>
        </h2>
        <p class="diff-subtitle">
          No solo formamos profesionales — construimos trayectorias.
          Cada decisión institucional está orientada hacia tu éxito.
        </p>
      </div>

      <!-- Grid principal -->
      <div class="diff-grid">
        <article
          v-for="feat in features"
          :key="feat.title"
          class="diff-card"
          :class="{ 'diff-card--featured': feat.featured }"
        >
          <!-- Tag -->
          <span class="diff-tag">{{ feat.tag }}</span>

          <!-- Icon -->
          <div class="diff-icon">
            <Icon :name="feat.icon" size="28" />
          </div>

          <!-- Content -->
          <h3 class="diff-card__title">{{ feat.title }}</h3>
          <p class="diff-card__body">{{ feat.body }}</p>

          <!-- Featured accent -->
          <div v-if="feat.featured" class="diff-card__accent"></div>
        </article>
      </div>

      <!-- Testimonial strip -->
      <div class="diff-strip">
        <div class="diff-strip__quote">
          <Icon name="mdi:format-quote-open" size="28" class="diff-strip__icon" />
          <p>
            "UNINTER me dio las herramientas para crecer profesionalmente 
            sin pausar mi vida laboral. La modalidad ejecutiva fue clave."
          </p>
        </div>
        <div class="diff-strip__author">
          <div class="diff-strip__avatar">MR</div>
          <div>
            <p class="diff-strip__name">María Rodríguez</p>
            <p class="diff-strip__role">Egresada · Lic. Administración · Gen. 2022</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* ── TOKENS ─────────────────────────────────────────── */
.diff-section {
  --d-bg:      #080810;
  --d-card:    #0f0f1a;
  --d-feat:    #13132a;
  --d-border:  rgba(255,255,255,0.07);
  --d-text:    #e2e2ee;
  --d-muted:   #7070a0;
  --d-accent:  oklch(0.6132 0.2294 291.7437);
  --d-radius:  12px;

  background: var(--d-bg);
  padding: 6rem 0;
}

.diff-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* ── HEADER ──────────────────────────────────────────── */
.diff-header {
  max-width: 580px;
  margin-bottom: 3.5rem;
}

.diff-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--d-accent);
  margin-bottom: 1rem;
}

.diff-eyebrow__line {
  display: block;
  width: 28px;
  height: 2px;
  background: var(--d-accent);
}

.diff-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 700;
  color: var(--d-text);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0 0 1rem;
}

.diff-title em {
  font-style: italic;
  color: var(--d-accent);
}

.diff-subtitle {
  font-size: 0.9rem;
  color: var(--d-muted);
  line-height: 1.7;
  margin: 0;
}

/* ── GRID ────────────────────────────────────────────── */
.diff-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--d-border);
  border: 1px solid var(--d-border);
  border-radius: var(--d-radius);
  overflow: hidden;
  margin-bottom: 2rem;
}

@media (max-width: 1024px) {
  .diff-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 720px) {
  .diff-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .diff-grid { grid-template-columns: 1fr; }
}

/* ── CARD ────────────────────────────────────────────── */
.diff-card {
  background: var(--d-card);
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
  transition: background 0.2s;
  overflow: hidden;
}

.diff-card:hover {
  background: #141424;
}

.diff-card--featured {
  background: var(--d-feat);
  grid-column: span 2;
}

@media (max-width: 480px) {
  .diff-card--featured { grid-column: span 1; }
}

.diff-card--featured:hover {
  background: #181830;
}

/* Tag */
.diff-tag {
  display: inline-block;
  font-size: 0.6rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--d-accent);
  margin-bottom: 0.25rem;
}

/* Icon */
.diff-icon {
  width: 52px;
  height: 52px;
  background: rgba(255,255,255,0.04);
  border: 1px solid var(--d-border);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--d-accent);
  transition: background 0.2s, transform 0.2s;
}

.diff-card:hover .diff-icon {
  background: rgba(255,255,255,0.07);
  transform: scale(1.05);
}

/* Content */
.diff-card__title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--d-text);
  margin: 0;
  line-height: 1.3;
}

.diff-card--featured .diff-card__title {
  font-size: 1.2rem;
}

.diff-card__body {
  font-size: 0.82rem;
  color: var(--d-muted);
  line-height: 1.65;
  margin: 0;
}

/* Featured accent bar */
.diff-card__accent {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: var(--d-accent);
}

/* ── TESTIMONIAL STRIP ───────────────────────────────── */
.diff-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem 2.5rem;
  background: var(--d-card);
  border: 1px solid var(--d-border);
  border-radius: var(--d-radius);
  flex-wrap: wrap;
}

.diff-strip__quote {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  flex: 1;
  min-width: 240px;
}

.diff-strip__icon {
  color: var(--d-accent);
  flex-shrink: 0;
  margin-top: 2px;
}

.diff-strip__quote p {
  font-size: 0.9rem;
  font-style: italic;
  color: var(--d-muted);
  line-height: 1.6;
  margin: 0;
}

.diff-strip__author {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  flex-shrink: 0;
}

.diff-strip__avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--d-accent);
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.diff-strip__name {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--d-text);
  margin: 0;
}

.diff-strip__role {
  font-size: 0.7rem;
  color: var(--d-muted);
  margin: 2px 0 0;
}

/* ── RESPONSIVE ─────────────────────────────────────────── */
@media (max-width: 1024px) {
  .diff-section { padding: 4rem 0; }
  .diff-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 768px) {
  .diff-section { padding: 3rem 0; }
  .diff-container { padding: 0 1rem; }
  .diff-grid { grid-template-columns: repeat(2, 1fr); }
  .diff-card--featured { grid-column: span 2; }
  .diff-card { padding: 1.25rem; }
  .diff-title { font-size: clamp(1.6rem, 5vw, 2.4rem); }
  .diff-strip { flex-direction: column; gap: 1rem; padding: 1.25rem; }
  .diff-strip__quote { flex-direction: column; gap: 0.5rem; }
}

@media (max-width: 480px) {
  .diff-grid { grid-template-columns: 1fr; }
  .diff-card--featured { grid-column: span 1; }
  .diff-icon { width: 42px; height: 42px; }
  .diff-strip__author { flex-wrap: wrap; }
}
</style>