<script setup lang="ts">
import { ref } from 'vue'

const targetUrl = 'https://universidad.uninter.edu.mx/Internacionalizaci%C3%B3n'

const stats = [
  { value: '+100', label: 'Universidades en Convenio', icon: 'mdi:handshake-outline' },
  { value: '+20', label: 'Países para Intercambio', icon: 'mdi:earth' },
  { value: '100%', label: 'Homologación de Materias', icon: 'mdi:check-decagram-outline' },
  { value: 'Doble', label: 'Titulación Internacional', icon: 'mdi:school-outline' }
]

const beneficios = [
  {
    titulo: 'Doble Titulación',
    desc: 'Gradúate con título universitario reconocido en México y en el extranjero.',
    icon: 'mdi:certificate-outline'
  },
  {
    titulo: 'Estancias y Prácticas',
    desc: 'Desarrolla experiencia profesional en empresas e instituciones globales.',
    icon: 'mdi:briefcase-check-outline'
  },
  {
    titulo: 'Homologación Total',
    desc: 'Tus materias cursadas en el extranjero son revalidadas sin perder tiempo.',
    icon: 'mdi:sync'
  },
  {
    titulo: 'Apoyo y Becas',
    desc: 'Asesoría integral y vinculación para becas y apoyos de movilidad.',
    icon: 'mdi:compass-rose'
  }
]

// Lista de países para el carrusel infinito (solo exhibición)
const paisesConvenio = [
  { nombre: 'España', bandera: '🇪🇸', imagen: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=600&q=80', region: 'Europa' },
  { nombre: 'Francia', bandera: '🇫🇷', imagen: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80', region: 'Europa' },
  { nombre: 'Alemania', bandera: '🇩🇪', imagen: 'https://images.unsplash.com/photo-1599946347371-68eb71b16afc?auto=format&fit=crop&w=600&q=80', region: 'Europa' },
  { nombre: 'Italia', bandera: '🇮🇹', imagen: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=600&q=80', region: 'Europa' },
  { nombre: 'Canadá', bandera: '🇨🇦', imagen: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=600&q=80', region: 'Norteamérica' },
  { nombre: 'Estados Unidos', bandera: '🇺🇸', imagen: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=600&q=80', region: 'Norteamérica' },
  { nombre: 'Suiza', bandera: '🇨🇭', imagen: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80', region: 'Europa' },
  { nombre: 'Argentina', bandera: '🇦🇷', imagen: 'https://images.unsplash.com/photo-1589909202802-8f4aadce1849?auto=format&fit=crop&w=600&q=80', region: 'Sudamérica' },
  { nombre: 'Chile', bandera: '🇨🇱', imagen: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=600&q=80', region: 'Sudamérica' },
  { nombre: 'Japón', bandera: '🇯🇵', imagen: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80', region: 'Asia' },
  { nombre: 'Corea del Sur', bandera: '🇰🇷', imagen: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=600&q=80', region: 'Asia' },
  { nombre: 'Reino Unido', bandera: '🇬🇧', imagen: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80', region: 'Europa' },
  { nombre: 'Colombia', bandera: '🇨🇴', imagen: 'https://images.unsplash.com/photo-1583531352515-8884af319dc1?auto=format&fit=crop&w=600&q=80', region: 'Sudamérica' },
  { nombre: 'Brasil', bandera: '🇧🇷', imagen: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=600&q=80', region: 'Sudamérica' }
]

// Duplicamos la lista para crear un bucle infinito continuo
const carouselItems = [...paisesConvenio, ...paisesConvenio]
</script>

<template>
  <section class="intl-portal-section uninter-section">
    <div class="uninter-container">
      
      <!-- Encabezado Principal -->
      <div class="intl-portal-header">
        <div class="intl-portal-header-left">
          <div class="uninter-eyebrow">
            <Icon name="mdi:earth" size="16" class="globe-icon" />
            Movilidad y Convenios Globales
          </div>
          <h2 class="uninter-section-title">
            Tu educación no tiene fronteras:<br />
            <em>Vive la Internacionalización</em>
          </h2>
          <p class="intl-portal-subtitle">
            En UNINTER llevamos el mundo a tus manos. Estudia un semestre, realiza prácticas o gradúate con doble grado en prestigiosas instituciones alrededor del mundo.
          </p>
        </div>

        <div class="intl-portal-header-right">
          <a 
            :href="targetUrl" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="intl-cta-btn"
          >
            <span>Explorar Convenios y Programas</span>
            <Icon name="mdi:arrow-top-right" size="18" />
          </a>
        </div>
      </div>

      <!-- Barra de Estadísticas Rápidas -->
      <div class="intl-stats-grid">
        <div v-for="(item, idx) in stats" :key="idx" class="intl-stat-card">
          <div class="intl-stat-icon-wrap">
            <Icon :name="item.icon" size="22" />
          </div>
          <div class="intl-stat-info">
            <span class="intl-stat-val">{{ item.value }}</span>
            <span class="intl-stat-lbl">{{ item.label }}</span>
          </div>
        </div>
      </div>

      <!-- Beneficios Clave & Banner CTA -->
      <div class="intl-footer-banner">
        <div class="intl-benefits-row">
          <div v-for="(ben, bIdx) in beneficios" :key="bIdx" class="intl-ben-item">
            <div class="intl-ben-icon">
              <Icon :name="ben.icon" size="20" />
            </div>
            <div>
              <h4 class="intl-ben-title">{{ ben.titulo }}</h4>
              <p class="intl-ben-desc">{{ ben.desc }}</p>
            </div>
          </div>
        </div>

        <div class="intl-banner-action">
          <div class="intl-banner-text">
            <h3>¿Listo para dar el salto internacional?</h3>
            <p>Conoce los requisitos, fechas de postulación y las opciones de intercambio disponibles para tu programa.</p>
          </div>
          <div class="intl-banner-buttons">
            <a 
              :href="targetUrl" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="intl-banner-btn-primary"
            >
              <Icon name="mdi:compass-outline" size="18" />
              Portal de Internacionalización
            </a>
            <a 
              href="https://wa.link/3ktsjb" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="intl-banner-btn-secondary"
            >
              <Icon name="mdi:whatsapp" size="18" />
              Preguntar a un Asesor
            </a>
          </div>
        </div>
      </div>

      <!-- Encabezado de la Sección de Carrusel Infinito -->
      <div class="intl-carousel-header">
        <div class="uninter-eyebrow">Alianzas Globales</div>
        <h3 class="intl-carousel-title">Destinos destacados con convenio abierto</h3>
      </div>

    </div>

    <!-- Carrusel Infinito de Países (Full width container con loop sin fin) -->
    <div class="intl-marquee-container">
      <div class="intl-marquee-track">
        <div 
          v-for="(pais, pIdx) in carouselItems" 
          :key="pIdx" 
          class="intl-country-card"
        >
          <img :src="pais.imagen" :alt="pais.nombre" class="intl-country-img" loading="lazy" />
          <div class="intl-country-overlay"></div>
          
          <div class="intl-country-top">
            <span class="intl-country-region">{{ pais.region }}</span>
          </div>

          <div class="intl-country-bottom">
            <span class="intl-country-flag">{{ pais.bandera }}</span>
            <span class="intl-country-name">{{ pais.nombre }}</span>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.intl-portal-section {
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
}

/* Header */
.intl-portal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
  margin-bottom: 2.5rem;
}

.intl-portal-header-left {
  max-width: 720px;
}

.uninter-eyebrow {
  color: #0f3c61;
}

.uninter-eyebrow::before {
  background: #E32F2F;
  width: 24px;
}

.globe-icon {
  color: #E32F2F;
}

.uninter-section-title {
  color: #0f3c61;
}

.uninter-section-title em {
  font-style: italic;
  color: #E32F2F;
}

.intl-portal-subtitle {
  margin-top: 1rem;
  color: #475569;
  font-size: 1.05rem;
  line-height: 1.6;
}

/* Botón CTA Principal (Acento 30% Rojo) */
.intl-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background-color: #E32F2F;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.95rem;
  padding: 0.85rem 1.6rem;
  border-radius: 999px;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(227, 47, 47, 0.25);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  white-space: nowrap;
}

.intl-cta-btn:hover {
  background-color: #c62828;
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(227, 47, 47, 0.35);
  color: #ffffff;
}

/* Stats (70% Azul UNINTER con acentos finos) */
.intl-stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
  margin-bottom: 3rem;
}

.intl-stat-card {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 1.2rem 1.4rem;
  box-shadow: 0 4px 12px rgba(15, 60, 97, 0.03);
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.intl-stat-card:hover {
  transform: translateY(-3px);
  border-color: #cbd5e1;
}

.intl-stat-icon-wrap {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: #e6f0f9;
  color: #0f3c61;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.intl-stat-info {
  display: flex;
  flex-direction: column;
}

.intl-stat-val {
  font-size: 1.35rem;
  font-weight: 800;
  color: #0f3c61;
  line-height: 1.2;
}

.intl-stat-lbl {
  font-size: 0.78rem;
  color: #64748b;
  font-weight: 600;
}

/* Footer Banner (70% Azul UNINTER base + 30% Botón Rojo) */
.intl-footer-banner {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  padding: 2.5rem;
  box-shadow: 0 10px 30px rgba(15, 60, 97, 0.04);
  margin-bottom: 3.5rem;
}

.intl-benefits-row {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #f1f5f9;
  margin-bottom: 2rem;
}

.intl-ben-item {
  display: flex;
  gap: 0.9rem;
  align-items: flex-start;
}

.intl-ben-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #e6f0f9;
  color: #1565c0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.intl-ben-title {
  font-size: 0.92rem;
  font-weight: 700;
  color: #0f3c61;
  margin: 0 0 0.25rem 0;
}

.intl-ben-desc {
  font-size: 0.8rem;
  color: #64748b;
  line-height: 1.45;
  margin: 0;
}

.intl-banner-action {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.intl-banner-text h3 {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.4rem;
  font-weight: 700;
  color: #0f3c61;
  margin: 0 0 0.35rem 0;
}

.intl-banner-text p {
  color: #64748b;
  font-size: 0.92rem;
  margin: 0;
}

.intl-banner-buttons {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  flex-shrink: 0;
}

.intl-banner-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #E32F2F;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.88rem;
  padding: 0.75rem 1.4rem;
  border-radius: 999px;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(227, 47, 47, 0.25);
  transition: all 0.2s ease;
}

.intl-banner-btn-primary:hover {
  background: #c62828;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(227, 47, 47, 0.35);
}

.intl-banner-btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #25d366;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.88rem;
  padding: 0.75rem 1.4rem;
  border-radius: 999px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.intl-banner-btn-secondary:hover {
  background: #20ba5a;
  color: #ffffff;
  transform: translateY(-2px);
}

/* =========================================================
   CARRUSEL INFINITO DE PAÍSES (MARQUEE)
======================================================== */
.intl-carousel-header {
  margin-bottom: 1.75rem;
}

.intl-carousel-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.3rem, 2.5vw, 1.85rem);
  font-weight: 700;
  color: #0f3c61;
  margin: 0;
  letter-spacing: -0.01em;
}

.intl-marquee-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 0.75rem 0 1.5rem 0;
  /* Efecto de desvanecimiento en los bordes */
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    rgba(0, 0, 0, 1) 5%,
    rgba(0, 0, 0, 1) 95%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    rgba(0, 0, 0, 1) 5%,
    rgba(0, 0, 0, 1) 95%,
    transparent 100%
  );
}

.intl-marquee-track {
  display: flex;
  gap: 1.25rem;
  width: max-content;
  animation: marqueeScroll 45s linear infinite;
  user-select: none;
}

.intl-marquee-container:hover .intl-marquee-track {
  animation-play-state: paused;
}

@keyframes marqueeScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Tarjeta individual de País (70% Azul UNINTER en overlay + 30% Rojo en badge) */
.intl-country-card {
  width: 220px;
  height: 270px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  box-shadow: 0 8px 24px rgba(15, 60, 97, 0.08);
  border: 1px solid rgba(226, 232, 240, 0.8);
  cursor: default;
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease;
}

.intl-country-card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 16px 36px rgba(15, 60, 97, 0.2);
  border-color: #E32F2F;
}

.intl-country-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.intl-country-card:hover .intl-country-img {
  transform: scale(1.1);
}

.intl-country-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(15, 60, 97, 0.15) 0%,
    rgba(15, 60, 97, 0.3) 40%,
    rgba(15, 60, 97, 0.9) 100%
  );
  pointer-events: none;
}

.intl-country-top {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 2;
}

.intl-country-region {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  color: #E32F2F;
  font-size: 0.68rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

.intl-country-bottom {
  position: absolute;
  bottom: 14px;
  left: 14px;
  right: 14px;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.intl-country-flag {
  font-size: 1.4rem;
  line-height: 1;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.intl-country-name {
  color: #ffffff;
  font-size: 1.05rem;
  font-weight: 800;
  letter-spacing: -0.01em;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Responsive */
@media (max-width: 1024px) {
  .intl-stats-grid,
  .intl-benefits-row {
    grid-template-columns: repeat(2, 1fr);
  }

  .intl-portal-header,
  .intl-banner-action {
    flex-direction: column;
    align-items: flex-start;
  }

  .intl-banner-buttons {
    width: 100%;
    flex-wrap: wrap;
  }
}

@media (max-width: 640px) {
  .intl-stats-grid,
  .intl-benefits-row {
    grid-template-columns: 1fr;
  }

  .intl-footer-banner {
    padding: 1.5rem;
  }

  .intl-banner-buttons {
    flex-direction: column;
    align-items: stretch;
  }

  .intl-banner-btn-primary,
  .intl-banner-btn-secondary,
  .intl-cta-btn {
    justify-content: center;
    width: 100%;
  }

  .intl-country-card {
    width: 180px;
    height: 230px;
  }

  .intl-country-name {
    font-size: 0.95rem;
  }
}
</style>
