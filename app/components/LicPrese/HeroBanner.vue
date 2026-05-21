<script setup lang="ts">
const stats = [
  { value: "23", label: "Licenciaturas" },
  { value: "40+", label: "Años de excelencia" },
  { value: "71,000+", label: "Egresados" },
  { value: "130+", label: "Universidades aliadas" },
];
</script>

<template>
  <section class="banner-section">
    <div class="banner-slide">
      <img
        src="/images/hero/licenciaturasPresenciales.jpg"
        alt="Licenciaturas Presenciales UNINTER"
        class="banner-slide__img"
      />
      <div class="banner-slide__overlay"></div>
      <div class="banner-slide__overlay2"></div>

      <div class="banner-content uninter-container">
        <div class="banner-inner">
          <!-- Breadcrumb -->
          <nav class="banner-crumb" aria-label="Ruta de navegación">
            <a href="/" class="crumb-link">Inicio</a>
            <span class="crumb-sep">›</span>
            <span class="crumb-link crumb-link--active">Licenciaturas Presenciales</span>
          </nav>

          <h1 class="banner-title">
            Inicia tu proceso<br />
            <span class="banner-title__accent">de admisión</span>
          </h1>

          <p class="banner-subtitle">
            Forma parte de una comunidad universitaria multicultural, con más de
            40 años preparando profesionistas de excelencia.
          </p>

          <div class="banner-ctas">
            <a
              href="https://universidad.uninter.edu.mx/Admisiones"
              target="_blank"
              class="banner-btn banner-btn--primary"
            >
              Iniciar proceso
            </a>
            <a href="#oferta-educativa" class="banner-btn banner-btn--ghost">
              Ver licenciaturas
            </a>
          </div>
        </div>
      </div>

      <!-- Stats strip flotante en la parte inferior -->
      <div class="banner-stats">
        <div class="uninter-container banner-stats__inner">
          <div v-for="stat in stats" :key="stat.label" class="banner-stat">
            <span class="banner-stat__value">{{ stat.value }}</span>
            <span class="banner-stat__label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.uninter-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.banner-section {
  --h: clamp(480px, 62vh, 620px);
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
  animation: kb-static 14s ease-out forwards;
}

@keyframes kb-static {
  from { transform: scale(1); }
  to   { transform: scale(1.05); }
}

.banner-slide__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    110deg,
    rgba(7, 20, 42, 0.93) 0%,
    rgba(10, 24, 50, 0.72) 50%,
    rgba(10, 24, 50, 0.25) 100%
  );
}

.banner-slide__overlay2 {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(7, 20, 42, 0.85) 0%, transparent 55%);
}

.banner-content {
  position: relative;
  z-index: 2;
  width: 100%;
  padding-bottom: 7rem;
}

.banner-inner {
  max-width: 680px;
}

/* Breadcrumb */
.banner-crumb {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  margin-bottom: 1.5rem;
}
.crumb-link {
  font-size: 0.72rem;
  color: rgba(255,255,255,0.55);
  text-decoration: none;
  transition: color 0.2s;
}
.crumb-link:hover { color: rgba(255,255,255,0.85); }
.crumb-link--active { color: rgba(255,255,255,0.85); }
.crumb-sep { color: rgba(255,255,255,0.3); font-size: 0.72rem; }

/* Título */
.banner-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2.4rem, 5.5vw, 4.2rem);
  font-weight: 800;
  line-height: 1.06;
  color: #fff;
  margin: 0 0 1.25rem;
  letter-spacing: -0.02em;
}
.banner-title__accent {
  color: #60a5fa;
}

.banner-subtitle {
  font-size: clamp(0.95rem, 1.5vw, 1.1rem);
  color: rgba(255,255,255,0.72);
  line-height: 1.65;
  margin: 0 0 2.25rem;
  max-width: 520px;
}

/* CTAs */
.banner-ctas {
  display: flex;
  gap: 0.875rem;
  flex-wrap: wrap;
}
.banner-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 2rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
}
.banner-btn--primary {
  background: #1565c0;
  color: #fff;
  border: 2px solid #1565c0;
}
.banner-btn--primary:hover {
  background: #0f3c61;
  border-color: #0f3c61;
  transform: translateY(-2px);
}
.banner-btn--ghost {
  background: transparent;
  color: #fff;
  border: 2px solid rgba(255,255,255,0.45);
}
.banner-btn--ghost:hover {
  border-color: rgba(255,255,255,0.85);
  background: rgba(255,255,255,0.08);
}

/* Stats strip */
.banner-stats {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-top: 1px solid rgba(255,255,255,0.15);
  z-index: 3;
}
.banner-stats__inner {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0;
}
.banner-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1.5rem;
  border-right: 1px solid rgba(255,255,255,0.12);
  flex: 1;
}
.banner-stat:last-child { border-right: none; }
.banner-stat__value {
  font-size: clamp(1.4rem, 2.5vw, 1.9rem);
  font-weight: 900;
  color: #fff;
  line-height: 1;
}
.banner-stat__label {
  font-size: 0.68rem;
  color: rgba(255,255,255,0.6);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  margin-top: 0.25rem;
}

/* Responsive */
@media (max-width: 768px) {
  .banner-section { --h: clamp(420px, 65vh, 560px); }
  .banner-content { padding-bottom: 11rem; }
  .banner-stats__inner { flex-wrap: wrap; }
  .banner-stat {
    flex: 1 1 50%;
    border-right: none;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    padding: 0.75rem 1rem;
  }
  .banner-stat:nth-child(1),
  .banner-stat:nth-child(2) { border-right: 1px solid rgba(255,255,255,0.1); }
  .banner-stat:nth-last-child(-n+2) { border-bottom: none; }
}

@media (max-width: 480px) {
  .banner-section { --h: clamp(380px, 60vh, 500px); }
  .banner-ctas { flex-direction: column; }
  .banner-btn { justify-content: center; }
}
</style>
