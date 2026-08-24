<script setup lang="ts">
// Datos de los certificados (extraídos de tu imagen)
const certifications = [
  {
    title: "Publicidad y Animación",
    desc: "Especialízate en la creación de contenidos visuales de alto impacto para medios digitales y tradicionales.",
    icon: "🎨",
  },
  {
    title: "Mercadotecnia Estratégica",
    desc: "Desarrolla habilidades para el análisis de mercados, branding y posicionamiento de marcas globales.",
    icon: "📈",
  },
];
</script>

<template>
  <section class="career-certifications-section">
    <div class="uninter-container">
      <div class="certs-header">
        <h2 class="section-title">Certificados de <em>Egreso</em></h2>
        <p class="section-desc">
          Potencializa tus competencias con una especialización que te permite
          mejorar tu perfil académico, ganar competitividad y sobresalir en el
          mercado laboral.
        </p>
      </div>

      <div class="certs-grid">
        <div
          v-for="(cert, index) in certifications"
          :key="index"
          class="cert-card"
        >
          <div class="cert-visual">
            <span class="cert-icon">{{ cert.icon }}</span>
          </div>
          <div class="cert-info">
            <h3>{{ cert.title }}</h3>
            <p>{{ cert.desc }}</p>
          </div>
          <div class="cert-footer">
            <button class="cert-btn">Ver plan de certificación</button>
          </div>
        </div>
      </div>

      <div class="certs-disclaimer">
        <p>
          * Un certificado es un documento que te entrega UNINTER al terminar tu
          carrera, validando tus competencias profesionales ante la exigente
          demanda laboral.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* =========================================================
   CONTENEDOR BASE
========================================================= */
.career-certifications-section {
  background-color: #ffffff; /* Blanco institucional */
  padding: 5rem 0;
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
}

.uninter-container {
  max-width: 1000px; /* Un poco más estrecho para centrar la atención */
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Header */
.certs-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  color: #0f3c61;
  margin: 0 0 1rem 0;
}
.section-title em {
  color: #1565c0;
  font-style: italic;
}

.section-desc {
  font-size: 1rem;
  color: #475569;
  max-width: 600px;
  margin: 0 auto;
}

/* =========================================================
   GRID DE CERTIFICADOS
========================================================= */
.certs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.cert-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
}

.cert-card:hover {
  background: #ffffff;
  border-color: #cbd5e1;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
}

.cert-visual {
  width: 64px;
  height: 64px;
  background: #ffffff;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  border: 1px solid #e2e8f0;
}

.cert-info h3 {
  font-size: 1.3rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 1rem 0;
}

.cert-info p {
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.cert-btn {
  width: 100%;
  background: #0f3c61;
  color: #ffffff;
  border: none;
  padding: 0.9rem;
  border-radius: 10px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
}

.cert-btn:hover {
  background: #1565c0;
}

/* Nota inferior */
.certs-disclaimer {
  text-align: center;
  font-size: 0.8rem;
  color: #94a3b8;
  max-width: 700px;
  margin: 0 auto;
  border-top: 1px solid #e2e8f0;
  padding-top: 2rem;
}

@media (max-width: 640px) {
  .certs-grid {
    grid-template-columns: 1fr;
  }
  .cert-card {
    padding: 1.5rem;
  }
}
</style>
