<script setup lang="ts">
const bannerData = {
  title: "UNINTER LA MEJOR OPCIÓN",
  image: "/images/hero/licenciaturasPresenciales.jpg",
};

const razones = [
  "Más de 40 años de calidad educativa.",
  "Por décimo tercer año consecutivo en el ranking de las mejores universidades.",
  "Certificación ISO 9001:2015 en todos nuestros procesos.",
  "Acreditación FIMPES.",
  "Intercambios académicos y culturales con más de 130 Universidades en el mundo.",
  "Ambiente multicultural con alumnos provenientes de 25 países.",
  "Más de 1500 vínculos empresariales para prácticas profesionales.",
  "Clases multidisciplinarias.",
  "Asesorías académicas sin costo.",
  "Programa de tutores y programas personalizados de becas.",
  "Talleres culturales y deportivos.",
  "Titulación por Excelencia Académica, Tesis, Posgrado, CENEVAL y Experiencia Profesional.",
  "Congresos, ferias, exposiciones y simposios por licenciatura.",
  "Certificación DELF (Diplome D´études en langue francaise) y TKT (Teaching Knowledge Test).",
  "Certificaciones y acreditaciones de acuerdo a cada licenciatura.",
  "49 Materias en Inglés y Francés.",
  "Diploma Internacional.",
  "Profesores extranjeros o con perfil internacional.",
  "Certificado internacional: Francia (RIEC, RICP, LRI).",
  "Enlace profesional y voluntariado Internacional.",
  "Miembros de asociaciones Internacionales para los estudios.",
  "Materias extracurriculares en el extranjero.",
  "Idiomas curriculares: Inglés y Francés.",
  "Idiomas Extracurriculares: Alemán, Chino, Ruso, Italiano y más.",
  "Realización de proyectos enfocados a soluciones reales.",
];
</script>

<template>
  <div>
    <section class="banner-section">
      <div class="banner-slide">
        <img
          :src="bannerData.image"
          :alt="bannerData.title"
          class="banner-slide__img"
        />

        <div class="banner-slide__overlay"></div>
        <div class="banner-slide__overlay2"></div>

        <div class="banner-content uninter-container">
          <div class="banner-inner">
            <h1 class="banner-title">
              <span
                v-for="(line, i) in bannerData.title.split('\n')"
                :key="i"
                class="banner-title__line"
              >
                {{ line }}
              </span>
            </h1>
            <p class="banner-text">
              En UNINTER se han firmado más de 500 convenios con empresas e
              instituciones tanto nacionales como internacionales, asegurando
              los escenarios para que nuestros estudiantes realicen sus
              prácticas profesionales. Todos los alumnos de UNINTER estudian un
              segundo idioma. Además, contamos con vínculos con organizaciones
              como Foundation for Academic Cultural Exchange, AFS, Canada
              Options Education y Latino Australia Education.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="conocenos-section">
      <div class="uninter-container">
        <div class="conocenos-header">
          <p>Tentado a borrar</p>

          <h2 class="conocenos-title">CONÓCENOS Y COMPÁRANOS</h2>
          <div class="title-underline"></div>
        </div>
        <div class="razones-grid">
          <div
            v-for="(razon, index) in razones"
            :key="index"
            class="razon-item"
          >
            <CheckCircle2 :size="20" class="razon-icon" />
            <p class="razon-text">{{ razon }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.uninter-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.banner-section {
  --h: clamp(380px, 55vh, 600px);
  position: relative;
  overflow: hidden;
  background: #0f3c61;
}

.banner-slide {
  position: relative;
  width: 100%;
  height: var(--h);
  display: flex;
  align-items: center;
}

.banner-slide__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: kb-static 12s ease-out forwards;
}

@keyframes kb-static {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.04);
  }
}

.banner-slide__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    rgba(10, 24, 50, 0.92) 0%,
    rgba(10, 24, 50, 0.75) 50%,
    rgba(10, 24, 50, 0.4) 100%
  );
}

.banner-slide__overlay2 {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(10, 24, 50, 0.8) 0%,
    transparent 60%
  );
}

.banner-content {
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: center;
}

.banner-inner {
  max-width: 860px;
  width: 100%;
  text-align: center;
}

.banner-title {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.08;
  color: #fff;
  margin: 0;
  letter-spacing: -0.01em;
}

.banner-title__line {
  display: block;
}

.banner-text {
  margin-top: 1.5rem;
  font-size: 1.05rem;
  color: #e2e8f0;
  line-height: 1.6;
}

.conocenos-section {
  padding: 5rem 0;
  background-color: #f8f9fb;
}

.conocenos-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.conocenos-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 1rem;

  font-family: var(--font-serif, Georgia, serif);
}

.title-underline {
  width: 60px;
  height: 4px;
  background-color: #1565c0;
  margin: 0 auto;
  border-radius: 2px;
}

.razones-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem 2rem;
}

.razon-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  background: #fff;
  padding: 1rem 1.25rem;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
  transition:
    transform 0.2s,
    border-color 0.2s;
}

.razon-item:hover {
  transform: translateY(-2px);
  border-color: #1565c0;
}

.razon-icon {
  color: #1565c0;
  flex-shrink: 0;
  margin-top: 2px;
}

.razon-text {
  font-size: 0.9rem;
  color: #334155;
  line-height: 1.5;
  margin: 0;
  font-weight: 500;
}

@media (max-width: 1024px) {
  .razones-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .banner-section {
    --h: clamp(380px, 50vh, 500px);
  }
  .banner-title {
    font-size: clamp(1.8rem, 8vw, 2.8rem);
  }

  .razones-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

@media (max-width: 480px) {
  .banner-section {
    --h: clamp(360px, 45vh, 480px);
  }
  .banner-text {
    display: none;
  }
}
</style>
