<script setup lang="ts">
import {
  BookOpen,
  Info,
  GraduationCap,
  Award,
  Users,
  Globe,
} from "lucide-vue-next";
const stats = [
  { value: "23", label: "Licenciaturas", icon: "GraduationCap" },
  { value: "40+", label: "Años de excelencia", icon: "Award" },
  { value: "71,000+", label: "Egresados", icon: "Users" },
  { value: "130+", label: "Universidades aliadas", icon: "Globe" },
];
</script>

<template>
  <div class="banner-hero-wrapper">
    <section class="banner-section">
      <div class="banner-slide">
        <img
          src="/images/hero/blur/2.jpg"
          alt="Licenciaturas Presenciales UNINTER"
          class="banner-slide__img"
        />
        <div class="banner-slide__overlay"></div>
        <div class="banner-slide__overlay2"></div>

        <div class="banner-content uninter-container">
          <div class="banner-inner">
            <div class="banner-eyebrow">
              <img
                src="/images/hero/LogoLargo.svg"
                alt="UNINTER"
                class="banner-logo-full"
              />
            </div>

            <h1 class="banner-title">
              Inicia tu proceso<br />
              <span class="banner-title__accent">de admisión</span>
            </h1>

            <p class="banner-subtitle">
              Forma parte de una comunidad universitaria multicultural, con más
              de 40 años preparando profesionistas de excelencia.
            </p>

            <div class="banner-ctas">
              <a
                href="#oferta-educativa"
                class="banner-btn banner-btn--stacked"
              >
                <BookOpen :size="24" />
                <span>Programas Disponibles</span>
              </a>
              <a
                href="#formulario-registro"
                class="banner-btn banner-btn--stacked"
              >
                <Info :size="24" />
                <span>Solicita Información</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats strip flotante en la parte inferior pero NO sobrepuesto -->
    <div class="banner-stats-bar">
      <div class="uninter-container banner-stats__inner">
        <div v-for="stat in stats" :key="stat.label" class="banner-stat">
          <div class="banner-stat__icon">
            <GraduationCap v-if="stat.icon === 'GraduationCap'" size="28" />
            <Award v-else-if="stat.icon === 'Award'" size="28" />
            <Users v-else-if="stat.icon === 'Users'" size="28" />
            <Globe v-else-if="stat.icon === 'Globe'" size="28" />
          </div>
          <div class="banner-stat__text">
            <span class="banner-stat__value">{{ stat.value }}</span>
            <span class="banner-stat__label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
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
  background: #003b5c;
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
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
}

.banner-slide__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 26, 46, 0.4) 0%,
    rgba(0, 26, 46, 0.1) 50%,
    rgba(0, 26, 46, 0.1) 100%
  );
}

.banner-slide__overlay2 {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(0, 26, 46, 0.4) 0%,
    rgba(0, 26, 36, 0.1) 50%,
    rgba(0, 26, 36, 0.1) 100%
  );
}

.banner-content {
  position: relative;
  z-index: 2;
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 5rem;
}

.banner-inner {
  max-width: 680px;
}

.banner-logo-full {
  height: 48px;
  object-fit: contain;
  filter: brightness(0) invert(1);
  margin-bottom: 2rem;
}

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
  color: #00b2e3;
}

.banner-subtitle {
  font-size: clamp(0.95rem, 1.5vw, 1.1rem);
  color: rgba(255, 255, 255, 0.72);
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
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
}
.banner-btn--stacked {
  background: transparent;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  flex-direction: column;
  padding: 1.25rem 2.5rem;
  gap: 0.5rem;
  border-radius: 12px;
}
.banner-btn--stacked:hover {
  border-color: #00b2e3;
  color: #00b2e3;
  background: rgba(0, 178, 227, 0.1);
  transform: translateY(-2px);
}

/* Stats strip (Debajo del banner) */
.banner-stats-bar {
  background-color: rgba(0, 26, 46, 0.95);
  background-image: radial-gradient(
    circle at 50% 50%,
    rgba(0, 178, 227, 0.15) 0%,
    transparent 60%
  );
  background-attachment: fixed;
  background-position: center center;
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
  border-top: 1px solid rgba(0, 178, 227, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  padding: 1.5rem 0;
  position: relative;
  z-index: 10;
}

.banner-stats__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
.banner-stat {
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  border-right: 1px solid rgba(0, 178, 227, 0.3);
  gap: 1rem;
}
.banner-stat:last-child {
  border-right: none;
}
.banner-stat__icon {
  color: #00b2e3;
  display: flex;
  align-items: center;
  justify-content: center;
}
.banner-stat__text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.banner-stat__value {
  font-size: clamp(1.1rem, 1.3vw, 1.4rem);
  font-weight: 800;
  color: #fff;
  line-height: 1.2;
}
.banner-stat__label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  text-align: left;
  text-transform: none;
  letter-spacing: normal;
  margin-top: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .banner-section {
    --h: auto;
  }
  .banner-slide {
    min-height: clamp(420px, 65vh, 560px);
    padding-top: 5rem;
  }
  .banner-content {
    padding-bottom: 3rem;
  }
  .banner-stats__inner {
    flex-wrap: wrap;
    gap: 1rem 0;
  }
  .banner-stat {
    flex: 1 1 50%;
    border-right: none;
    border-bottom: 1px solid rgba(0, 178, 227, 0.2);
    padding: 1rem 0.5rem;
    justify-content: center;
  }
  .banner-stat:nth-child(odd) {
    border-right: 1px solid rgba(0, 178, 227, 0.3);
  }
  .banner-stat:nth-last-child(-n + 2) {
    border-bottom: none;
  }
}

@media (max-width: 480px) {
  .banner-section {
    --h: auto;
  }
  .banner-slide {
    min-height: clamp(380px, 60vh, 500px);
  }
  .banner-ctas {
    flex-direction: column;
  }
  .banner-btn {
    justify-content: center;
  }
  .banner-stat {
    flex: 1 1 100%;
    border-right: none !important;
    border-bottom: 1px solid rgba(0, 178, 227, 0.2) !important;
    padding: 1rem 1.5rem;
    justify-content: center;
  }
  .banner-stat:last-child {
    border-bottom: none !important;
  }
}
</style>
