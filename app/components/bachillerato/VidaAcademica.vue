<script setup lang="ts">
import { Lightbulb, Cpu, Trophy, Quote } from "lucide-vue-next";

const mdctPilares = [
  { titulo: "Pensamiento crítico", desc: "Desarrolla capacidad de análisis y resolución de problemas reales." },
  { titulo: "Comunicación digital", desc: "Domina herramientas tecnológicas de comunicación global." },
  { titulo: "Colaboración virtual", desc: "Trabaja en equipos multiculturales en entornos digitales." },
  { titulo: "Ciudadanía digital", desc: "Comprende el uso ético y responsable de la tecnología." },
];
</script>

<template>
  <section class="vida-section">
    <div class="biu-container">

      <!-- Encabezado de sección -->
      <div class="vida-header">
        <div class="biu-eyebrow">
          <span class="eyebrow-line"></span>
          VIDA ACADÉMICA
        </div>
        <h2 class="vida-title">
          Formación que va<br /><em>más allá del aula</em>
        </h2>
      </div>

      <!-- Layout principal: texto + imagen -->
      <div class="vida-main">
        <div class="vida-main__text">
          <p class="vida-p">
            El BIU está diseñado para prepararte académicamente con los más
            altos estándares, pero también para desarrollar tus habilidades
            humanas y sociales. Participarás en actividades educativas,
            culturales, deportivas y de servicio a la comunidad.
          </p>
          <p class="vida-p">
            Convivirás con estudiantes nacionales y extranjeros, participarás
            en viajes, congresos, actividades altruistas y equipos deportivos,
            construyendo una red de contactos global desde el bachillerato.
          </p>

          <!-- Quote destacado -->
          <blockquote class="vida-quote">
            <Quote :size="28" class="vida-quote__icon" />
            <p class="vida-quote__text">
              "Un emprendedor ve oportunidades donde otros ven problemas."
            </p>
            <cite class="vida-quote__cite">— Filosofía BIU UNINTER</cite>
          </blockquote>
        </div>

        <div class="vida-main__img">
          <img
            src="/images/hero/licenciaturas.jpg"
            alt="Vida académica BIU"
            class="vida-img"
          />
          <div class="vida-img__badge">
            <Trophy :size="18" />
            <span>Logrocimiento UNINTER</span>
          </div>
        </div>
      </div>

      <!-- MDCT Section -->
      <div class="mdct-block">
        <div class="mdct-header">
          <div class="mdct-icon-wrap">
            <Cpu :size="24" />
          </div>
          <div>
            <h3 class="mdct-title">Marco de Desarrollo de Competencias Tecnológicas</h3>
            <p class="mdct-abbr">MDCT</p>
          </div>
        </div>
        <p class="mdct-desc">
          El MDCT es el sistema de certificación tecnológica de UNINTER que
          valida tus competencias digitales a lo largo del bachillerato.
          Dominarás herramientas de diseño, programación, comunicación y
          análisis de datos con un enfoque práctico y orientado al futuro.
        </p>
        <div class="mdct-grid">
          <div v-for="p in mdctPilares" :key="p.titulo" class="mdct-card">
            <Lightbulb :size="16" class="mdct-card__icon" />
            <div>
              <p class="mdct-card__title">{{ p.titulo }}</p>
              <p class="mdct-card__desc">{{ p.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Logrocimiento -->
      <div class="logro-block">
        <div class="logro-block__text">
          <div class="biu-eyebrow">
            <span class="eyebrow-line"></span>
            SISTEMA DE RECONOCIMIENTO
          </div>
          <h3 class="logro-title">Logrocimiento</h3>
          <p class="logro-desc">
            El sistema Logrocimiento reconoce tus logros académicos, deportivos,
            culturales y de liderazgo durante tu bachillerato. Cada punto
            acumulado se traduce en beneficios reales: becas, certificaciones
            adicionales y reconocimientos oficiales que enriquecen tu perfil.
          </p>
          <a href="https://biu.uninter.edu.mx/" target="_blank" class="logro-link">
            Conoce el sistema →
          </a>
        </div>
        <div class="logro-block__visual">
          <div class="logro-circles">
            <div class="logro-circle logro-circle--lg">
              <span class="logro-circle__val">A+</span>
              <span class="logro-circle__lbl">Académico</span>
            </div>
            <div class="logro-circle logro-circle--sm">
              <span class="logro-circle__val">🏆</span>
              <span class="logro-circle__lbl">Deportivo</span>
            </div>
            <div class="logro-circle logro-circle--sm logro-circle--offset">
              <span class="logro-circle__val">🎭</span>
              <span class="logro-circle__lbl">Cultural</span>
            </div>
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

.vida-section {
  background: #fff;
  padding: 5.5rem 0;
}

/* Header */
.vida-header { margin-bottom: 3rem; }

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
.eyebrow-line {
  display: block;
  width: 24px;
  height: 2px;
  background: #6BAF04;
  flex-shrink: 0;
}

.vida-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #1e293b;
  line-height: 1.12;
  letter-spacing: -0.02em;
  margin: 0;
}
.vida-title em { font-style: italic; color: #6BAF04; }

/* Layout main */
.vida-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;
}

.vida-p {
  font-size: 0.98rem;
  color: #475569;
  line-height: 1.72;
  margin: 0 0 1.25rem;
}

/* Quote */
.vida-quote {
  background: #f1f8f0;
  border-left: 4px solid #6BAF04;
  border-radius: 0 12px 12px 0;
  padding: 1.5rem 1.5rem 1.5rem 1.25rem;
  margin: 1.75rem 0 0;
}
.vida-quote__icon { color: #6BAF04; margin-bottom: 0.75rem; }
.vida-quote__text {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.05rem;
  font-style: italic;
  color: #4A7A02;
  font-weight: 600;
  margin: 0 0 0.5rem;
  line-height: 1.5;
}
.vida-quote__cite {
  font-size: 0.72rem;
  color: #64748b;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

/* Imagen */
.vida-main__img { position: relative; }
.vida-img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  border-radius: 16px;
  display: block;
  background: #e8f5e9;
}
.vida-img__badge {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  background: #4A7A02;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.4rem 0.875rem;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.25);
}

/* MDCT Block */
.mdct-block {
  background: #0d1f0e;
  border-radius: 20px;
  padding: 2.5rem 2.5rem 2.75rem;
  margin-bottom: 3.5rem;
}

.mdct-header {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.25rem;
}
.mdct-icon-wrap {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(168,216,110,0.15);
  color: #A8D86E;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.mdct-title {
  font-size: 1rem;
  font-weight: 800;
  color: #fff;
  margin: 0 0 0.2rem;
  line-height: 1.3;
}
.mdct-abbr {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #A8D86E;
  margin: 0;
  text-transform: uppercase;
}

.mdct-desc {
  font-size: 0.9rem;
  color: rgba(255,255,255,0.65);
  line-height: 1.7;
  margin: 0 0 2rem;
  max-width: 680px;
}

.mdct-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
.mdct-card {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 1.25rem;
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  transition: background 0.2s;
}
.mdct-card:hover { background: rgba(255,255,255,0.1); }
.mdct-card__icon { color: #A8D86E; flex-shrink: 0; margin-top: 2px; }
.mdct-card__title {
  font-size: 0.82rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 0.3rem;
}
.mdct-card__desc {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.5;
  margin: 0;
}

/* Logrocimiento */
.logro-block {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 3rem;
  align-items: center;
  background: #f1f8f0;
  border-radius: 20px;
  padding: 2.5rem 3rem;
}

.logro-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 2rem;
  font-weight: 800;
  color: #4A7A02;
  margin: 0 0 1rem;
}
.logro-desc {
  font-size: 0.92rem;
  color: #475569;
  line-height: 1.7;
  margin: 0 0 1.5rem;
  max-width: 520px;
}
.logro-link {
  font-size: 0.88rem;
  font-weight: 700;
  color: #6BAF04;
  text-decoration: none;
  transition: color 0.2s;
}
.logro-link:hover { color: #4A7A02; text-decoration: underline; }

/* Círculos decorativos */
.logro-circles {
  position: relative;
  width: 180px;
  height: 180px;
  flex-shrink: 0;
}
.logro-circle {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #fff;
  border: 3px solid #6BAF04;
  box-shadow: 0 8px 24px rgba(107,175,4,0.15);
}
.logro-circle--lg {
  width: 110px;
  height: 110px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
.logro-circle--sm {
  width: 68px;
  height: 68px;
  z-index: 1;
}
.logro-circle--sm:first-of-type { top: 0; right: 0; }
.logro-circle--offset { bottom: 0; left: 0; }
.logro-circle__val { font-size: 1.5rem; font-weight: 900; color: #4A7A02; line-height: 1; }
.logro-circle__lbl { font-size: 0.55rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; }

/* Responsive */
@media (max-width: 1024px) {
  .mdct-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 860px) {
  .vida-main { grid-template-columns: 1fr; gap: 2.5rem; }
  .logro-block { grid-template-columns: 1fr; }
  .logro-circles { display: none; }
}
@media (max-width: 640px) {
  .mdct-block { padding: 1.75rem 1.25rem; }
  .mdct-grid { grid-template-columns: 1fr; }
}
</style>
