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
                src="/images/hero/logo-blanco.svg"
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
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1.5rem;
}
.banner-section {
  --h: clamp(480px, 62vh, 620px);
  background: #003b5c;
  overflow: hidden;
  position: relative;
}
.banner-slide {
  align-items: center;
  display: flex;
  height: var(--h);
  position: relative;
  width: 100%;
}
.banner-slide__img {
  animation: kb-static-5a0e54da 14s ease-out forwards;
  height: 100%;
  inset: 0;
  -o-object-fit: cover;
  object-fit: cover;
  position: absolute;
  width: 100%;
}
.banner-slide__overlay {
  background: linear-gradient(180deg, #001a2e66, #001a2e1a 50%, #001a2e1a);
  inset: 0;
  position: absolute;
}
.banner-slide__overlay2 {
  background: linear-gradient(90deg, #001a2e66, #001a241a 50%, #001a241a);
  inset: 0;
  position: absolute;
}
.banner-content {
  padding-bottom: 5rem;
  padding-top: 3rem;
  position: relative;
  width: 100%;
  z-index: 2;
}
.banner-inner {
  max-width: 680px;
}
.banner-logo-full {
  filter: brightness(0) invert(1);
  height: 48px;
  margin-bottom: 2rem;
  -o-object-fit: contain;
  object-fit: contain;
}
.banner-title {
  color: #fff;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2.4rem, 5.5vw, 4.2rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.06;
  margin: 0 0 1.25rem;
}
.banner-title__accent {
  color: #00b2e3;
}
.banner-subtitle {
  color: #ffffffb8;
  font-size: clamp(0.95rem, 1.5vw, 1.1rem);
  line-height: 1.65;
  margin: 0 0 2.25rem;
  max-width: 520px;
}
.banner-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 0.875rem;
}
.banner-btn {
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  font-size: 0.9rem;
  font-weight: 700;
  justify-content: center;
  text-decoration: none;
  transition: all 0.2s;
}
.banner-btn--stacked {
  background: transparent;
  border: 1px solid hsla(0, 0%, 100%, 0.4);
  border-radius: 12px;
  color: #fff;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.25rem 2.5rem;
}
.banner-btn--stacked:hover {
  background: #00b2e31a;
  border-color: #00b2e3;
  color: #00b2e3;
  transform: translateY(-2px);
}
.banner-stats-bar {
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
  background-attachment: fixed;
  background-color: #001a2ef2;
  background-image: radial-gradient(
    circle at 50% 50%,
    rgba(0, 178, 227, 0.15) 0,
    transparent 60%
  );
  background-position: 50%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(0, 178, 227, 0.3);
  box-shadow: 0 4px 30px #00000080;
  padding: 1.5rem 0;
  position: relative;
  z-index: 10;
}
.banner-stats__inner {
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.banner-stat {
  align-items: center;
  border-right: 1px solid rgba(0, 178, 227, 0.3);
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  padding: 0 1.5rem;
}
.banner-stat:last-child {
  border-right: none;
}
.banner-stat__icon {
  align-items: center;
  color: #00b2e3;
  display: flex;
  justify-content: center;
}
.banner-stat__text {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}
.banner-stat__value {
  color: #fff;
  font-size: clamp(1.1rem, 1.3vw, 1.4rem);
  font-weight: 800;
  line-height: 1.2;
}
.banner-stat__label {
  color: #fffc;
  font-size: 0.9rem;
  font-weight: 500;
  letter-spacing: normal;
  margin-top: 0;
  text-align: left;
  text-transform: none;
}
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
    border-bottom: 1px solid rgba(0, 178, 227, 0.2);
    border-right: none;
    flex: 1 1 50%;
    justify-content: center;
    padding: 1rem 0.5rem;
  }
  .banner-stat:nth-child(odd) {
    border-right: 1px solid rgba(0, 178, 227, 0.3);
  }
  .banner-stat:nth-last-child(-n + 2) {
    border-bottom: none;
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
    .banner-btn,
    .banner-stat {
      justify-content: center;
    }
    .banner-stat {
      border-bottom: 1px solid rgba(0, 178, 227, 0.2) !important;
      border-right: none !important;
      flex: 1 1 100%;
      padding: 1rem 1.5rem;
    }
    .banner-stat:last-child {
      border-bottom: none !important;
    }
  }
}
</style>
