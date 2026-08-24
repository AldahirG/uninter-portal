<script setup lang="ts">
import { Globe2, Sparkles, Home, Award, ArrowRight } from "lucide-vue-next";
</script>

<template>
  <section class="ss-section uninter-section">
    <div class="uninter-container">
      <!-- ENCABEZADO -->
      <div class="ss-header">
        <div class="ss-header__text">
          <div class="uninter-eyebrow">
            <Globe2 :size="16" class="eyebrow-icon" /> Comunidad Global
          </div>
          <h2 class="uninter-section-title">
            Spanish School<br /><em>UNINTER</em>
          </h2>
        </div>
        <p class="ss-header__desc">
          Diseñado para todas las edades y niveles. Aprende el idioma, conecta
          con personas de todo el mundo y haz de la experiencia tu mayor
          aprendizaje.
        </p>
      </div>

      <!-- BENTO GRID (Diseño innovador) -->
      <div class="ss-bento-grid">
        <!-- BLOQUE 1: HERO (La Experiencia) -->
        <div class="ss-bento-item ss-hero">
          <div class="ss-hero__overlay"></div>
          <!-- Imagen de fondo sugerida: Estudiantes internacionales riendo o conviviendo en un ambiente soleado mexicano -->
          <img
            src="/images/hero/spanish-school-experience.jpg"
            alt="Experiencia Spanish School"
            class="ss-hero__bg"
          />

          <div class="ss-hero__content">
            <span class="ss-badge">Desde 1980</span>
            <h3 class="ss-hero__title">
              Mucho más que un idioma,<br />una experiencia de vida.
            </h3>
            <p class="ss-hero__text">
              Vive en Cuernavaca, sumérgete en la cultura mexicana y desarrolla
              habilidades bilingües de forma natural, interactiva e inolvidable.
            </p>
            <div class="ss-hero__actions">
              <a
                href="https://spanishschool.uninter.edu.mx/"
                target="_blank"
                class="ss-btn-primary"
              >
                Ver programa completo <ArrowRight :size="18" />
              </a>
              <a
                href="https://spanishschool.uninter.edu.mx/Home"
                target="_blank"
                class="ss-btn-outline"
              >
                Admissions
              </a>
            </div>
          </div>
        </div>

        <!-- BLOQUE 2: VERANO KIDS -->
        <div class="ss-bento-item ss-card ss-card--kids">
          <div class="ss-card__icon"><Sparkles :size="24" /></div>
          <div class="ss-card__body">
            <h4 class="ss-card__title">Verano Kids</h4>
            <p class="ss-card__desc">
              Una aventura bilingüe. Niños de todo el mundo aprendiendo inglés y
              español a través del juego y la cultura.
            </p>
            <a
              href="https://kids.uninter.edu.mx/"
              target="_blank"
              class="ss-card__link"
              >Explorar Verano Kids →</a
            >
          </div>
        </div>

        <!-- BLOQUE 3: INMERSIÓN TOTAL -->
        <div class="ss-bento-item ss-card">
          <div class="ss-card__icon"><Home :size="24" /></div>
          <div class="ss-card__body">
            <h4 class="ss-card__title">Hospedaje Familiar</h4>
            <p class="ss-card__desc">
              Inmersión 24/7. Vive con una familia anfitriona mexicana y
              practica tu español en situaciones de la vida real.
            </p>
          </div>
        </div>

        <!-- BLOQUE 4: CURSOS INNOVADORES -->
        <div class="ss-bento-item ss-card">
          <div class="ss-card__icon"><Globe2 :size="24" /></div>
          <div class="ss-card__body">
            <h4 class="ss-card__title">Cursos Dinámicos</h4>
            <p class="ss-card__desc">
              Metodología conversacional en grupos reducidos de 4, 8 y 12
              semanas. Habla con fluidez desde el primer día.
            </p>
          </div>
        </div>

        <!-- BLOQUE 5: RESPALDO GLOBAL -->
        <div class="ss-bento-item ss-card">
          <div class="ss-card__icon"><Award :size="24" /></div>
          <div class="ss-card__body">
            <h4 class="ss-card__title">Certificación Oficial</h4>
            <p class="ss-card__desc">
              Prepárate con los expertos para exámenes oficiales y obtén
              documentos con validez internacional.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Contenedor principal */
.ss-section {
  background-color: #f8f9fb; /* Fondo gris muy sutil para que el Bento Grid resalte */
  padding: 6rem 0;
}

.uninter-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* =========================================================
   ENCABEZADO
========================================================= */
.ss-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 3.5rem;
  flex-wrap: wrap;
}

.ss-header__text {
  flex: 1;
  min-width: 300px;
}

.uninter-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #d84315; /* Naranja quemado elegante */
  margin-bottom: 0.75rem;
}

.uninter-section-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2.2rem, 4vw, 3.5rem);
  font-weight: 800;
  line-height: 1.1;
  color: #0f3c61; /* Azul UNINTER */
  margin: 0;
}

.uninter-section-title em {
  color: #1565c0;
  font-style: italic;
}

.ss-header__desc {
  flex: 0.8;
  min-width: 300px;
  font-size: 1.05rem;
  color: #475569;
  line-height: 1.6;
  margin: 0;
  border-left: 2px solid #d84315;
  padding-left: 1.5rem;
}

/* =========================================================
   BENTO GRID LAYOUT
========================================================= */
.ss-bento-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(180px, auto);
  gap: 1.5rem;
}

.ss-bento-item {
  border-radius: 20px;
  overflow: hidden;
  background: #fff;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

/* Posicionamiento en el Grid (Desktop) */
.ss-hero {
  grid-column: 1 / 8;
  grid-row: 1 / 4;
}
.ss-card:nth-child(2) {
  grid-column: 8 / 13;
  grid-row: 1 / 3;
} /* Verano Kids */
.ss-card:nth-child(3) {
  grid-column: 8 / 13;
  grid-row: 3 / 4;
} /* Hospedaje */
.ss-card:nth-child(4) {
  grid-column: 1 / 5;
  grid-row: 4 / 5;
} /* Cursos */
.ss-card:nth-child(5) {
  grid-column: 5 / 13;
  grid-row: 4 / 5;
} /* Certificaciones */

/* =========================================================
   HERO (Bloque Principal de Experiencia)
========================================================= */
.ss-hero {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 3rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
}

.ss-hero:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.ss-hero__bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
  transition: transform 0.8s ease;
}

.ss-hero:hover .ss-hero__bg {
  transform: scale(1.05); /* Efecto inmersivo suave */
}

.ss-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(216, 67, 21, 0.95) 0%,
    /* Naranja fuerte abajo */ rgba(216, 67, 21, 0.6) 50%,
    rgba(15, 60, 97, 0.3) 100%
  );
  z-index: 2;
}

.ss-hero__content {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.ss-badge {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.4rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.ss-hero__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  font-weight: 700;
  color: #fff;
  line-height: 1.15;
  margin: 0;
}

.ss-hero__text {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  max-width: 500px;
  margin: 0 0 1rem 0;
}

/* Botones del Hero */
.ss-hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.ss-btn-primary {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  color: #d84315;
  font-size: 0.9rem;
  font-weight: 800;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.2s;
}
.ss-btn-primary:hover {
  background: #fde8e2;
  transform: translateX(4px);
}

.ss-btn-outline {
  display: flex;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: #fff;
  font-size: 0.9rem;
  font-weight: 700;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  text-decoration: none;
  transition: background 0.2s;
}
.ss-btn-outline:hover {
  background: rgba(255, 255, 255, 0.15);
}

/* =========================================================
   TARJETAS SECUNDARIAS
========================================================= */
.ss-card {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
}

.ss-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.08);
  border-color: #cbd5e1;
}

.ss-card__icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: #fff3f0; /* Fondo naranja súper suave */
  color: #d84315;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.ss-card:hover .ss-card__icon {
  transform: scale(1.1) rotate(5deg);
  background: #d84315;
  color: #fff;
}

.ss-card__body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}

.ss-card__title {
  font-size: 1.15rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0;
}

.ss-card__desc {
  font-size: 0.9rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

/* Tarjeta especial para Kids */
.ss-card--kids {
  background: linear-gradient(145deg, #ffffff, #fdf4f1);
}

.ss-card__link {
  font-size: 0.85rem;
  font-weight: 800;
  color: #d84315;
  text-decoration: none;
  margin-top: auto;
  padding-top: 1rem;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: gap 0.2s;
}

.ss-card:hover .ss-card__link {
  gap: 8px; /* La flecha se mueve a la derecha */
}

/* =========================================================
   RESPONSIVE
========================================================= */
@media (max-width: 1024px) {
  .ss-bento-grid {
    display: flex;
    flex-direction: column; /* Apilamos todo en tablets y móviles */
  }

  .ss-hero {
    min-height: 450px;
    padding: 2rem;
  }
}

@media (max-width: 768px) {
  .ss-header {
    flex-direction: column;
    gap: 1.5rem;
  }

  .ss-header__desc {
    border-left: none;
    border-top: 2px solid #d84315;
    padding-left: 0;
    padding-top: 1rem;
  }

  .ss-hero__actions {
    flex-direction: column;
    width: 100%;
  }

  .ss-btn-primary,
  .ss-btn-outline {
    width: 100%;
    justify-content: center;
  }
}
</style>
