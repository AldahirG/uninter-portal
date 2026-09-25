<script setup lang="ts">
import {
  BookOpen,
  GraduationCap,
  Award,
  Clock,
  Laptop,
  Sparkles,
} from "lucide-vue-next";
import data from "@/assets/data/blendedLearning.json";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<template>
  <div class="banner-hero-wrapper">
    <section class="banner-section">
      <div class="banner-slide">
        <!-- Destello azul claro -->
        <div class="banner-slide__glow"></div>

        <!-- Capa de Blur Gradiente Horizontal Transparente (Fades out antes de los alumnos para mantener el fondo azul) -->
        <div class="banner-slide__blur-overlay"></div>

        <div class="banner-content uninter-container">
          <div class="banner-inner">
            <!-- Espaciador para la barra fija de migas de pan (Breadcrumb) -->
            <div class="banner-eyebrow"></div>

            <h1 class="banner-title">
              MODELO PEDAGÓGICO<br />
              <span class="banner-title__accent">BLENDED LEARNING 4.0</span>
            </h1>

            <p class="banner-subtitle">
              {{ data.general.subtitulo }}
            </p>

            <div class="banner-ctas">
              <a
                href="#diagrama-modelo"
                class="banner-btn banner-btn--stacked"
                @click.prevent="scrollToSection('diagrama-modelo')"
              >
                <BookOpen :size="22" />
                <span>Conocer el Modelo</span>
              </a>
              <a
                href="https://unintervirtual.mx/"
                target="_blank"
                rel="noopener noreferrer"
                class="banner-btn banner-btn--stacked"
              >
                <GraduationCap :size="22" />
                <span>Acceder a UninterVirtual</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats strip flotante en la base del banner con efecto Liquid Glass y tipografía institucional -->
    <div class="banner-stats-bar">
      <div class="uninter-container banner-stats__inner">
        <div v-for="stat in data.stats" :key="stat.label" class="banner-stat">
          <div class="banner-stat__icon">
            <GraduationCap v-if="stat.icon === 'GraduationCap'" :size="28" />
            <Award v-else-if="stat.icon === 'Award'" :size="28" />
            <BookOpen v-else-if="stat.icon === 'BookOpen'" :size="28" />
            <Clock v-else-if="stat.icon === 'Clock'" :size="28" />
            <Laptop v-else-if="stat.icon === 'Laptop'" :size="28" />
            <Sparkles v-else :size="28" />
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

.banner-hero-wrapper {
  background-color: #001a2e;
  position: relative;
  overflow: hidden;
}

.banner-section {
  --h: clamp(520px, 68vh, 680px);
  background: #001a2e;
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

.banner-slide__picture,
.dp-hero__picture,
.biu-hero__picture {
  display: block;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.banner-slide__img,
.dp-hero__img,
.biu-hero__img {
  animation: kb-zoom 14s ease-out forwards;
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  object-position: center top;
}

@keyframes kb-zoom {
  0% {
    transform: scale(1);
  }
  to {
    transform: scale(1.06);
  }
}

/* ═══ CAPA DE BLUR GRADIENTE TRANSPARENTE (Preserva el azul vibrante a la derecha) ═══ */
.banner-slide__blur-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  -webkit-backdrop-filter: blur(14px);
  backdrop-filter: blur(14px);
  background: linear-gradient(
    90deg,
    rgba(0, 26, 46, 0.6) 0%,
    rgba(0, 26, 46, 0.35) 30%,
    rgba(0, 26, 46, 0.1) 45%,
    transparent 58%
  );
  -webkit-mask-image: linear-gradient(
    90deg,
    #000 0%,
    #000 35%,
    transparent 58%
  );
  mask-image: linear-gradient(90deg, #000 0%, #000 35%, transparent 58%);
  pointer-events: none;
}

.banner-content {
  position: relative;
  width: 100%;
  z-index: 2;
  padding-top: 1.5rem;
  padding-bottom: 2rem;
}

.banner-inner {
  max-width: 620px;
}

.banner-eyebrow {
  align-items: center;
  display: flex;
  min-height: 1.75rem;
  margin-bottom: 0.5rem;
}

/* Título con tamaño armonioso institucional (no gigante) */
.banner-title {
  color: #ffffff;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.85rem, 3.4vw, 2.85rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  line-height: 1.12;
  margin: 0 0 1.15rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
}

.banner-title__accent {
  color: #00b2e3;
  display: inline-block;
  white-space: nowrap;
}

.banner-subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-family: var(--font-sans, "Plus Jakarta Sans", sans-serif);
  font-size: clamp(0.92rem, 1.25vw, 1.05rem);
  line-height: 1.65;
  margin: 0 0 1.85rem;
  max-width: 530px;
  text-shadow: 0 1px 6px rgba(0, 0, 0, 0.35);
}

.banner-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 0.875rem;
}

.banner-btn {
  align-items: center;
  border-radius: 12px;
  cursor: pointer;
  display: inline-flex;
  font-family: var(--font-sans, "Plus Jakarta Sans", sans-serif);
  font-size: 0.9rem;
  font-weight: 700;
  justify-content: center;
  text-decoration: none;
  transition: all 0.2s ease;
}

.banner-btn--stacked {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: #ffffff;
  flex-direction: column;
  gap: 0.45rem;
  padding: 1.1rem 2rem;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

.banner-btn--stacked:hover {
  background: rgba(0, 178, 227, 0.25);
  border-color: #00b2e3;
  color: #00b2e3;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 178, 227, 0.25);
}

/* ═══ STATS BAR (LIQUID GLASS EXACTO A LICENCIATURAS PRESENCIALES) ═══ */
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
  padding: 1.35rem 0;
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
  flex-shrink: 0;
}

.banner-stat__text {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}

/* TIPOGRAFÍA INSTITUCIONAL: Plus Jakarta Sans / Sans-serif */
.banner-stat__value {
  color: #ffffff;
  font-family: var(
    --font-sans,
    "Plus Jakarta Sans",
    system-ui,
    -apple-system,
    sans-serif
  );
  font-size: clamp(1.1rem, 1.3vw, 1.4rem);
  font-weight: 800;
  line-height: 1.2;
}

.banner-stat__label {
  color: #fffc;
  font-family: var(
    --font-sans,
    "Plus Jakarta Sans",
    system-ui,
    -apple-system,
    sans-serif
  );
  font-size: 0.88rem;
  font-weight: 500;
  letter-spacing: normal;
  margin-top: 0;
  text-align: left;
  text-transform: none;
}

/* ═══ RESPONSIVE ═══ */
@media (max-width: 768px) {
  .banner-section {
    --h: auto;
  }
  .banner-slide {
    height: auto;
    min-height: clamp(520px, 80svh, 650px);
    padding: 3.5rem 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
  .banner-slide__img,
  .dp-hero__img,
  .biu-hero__img {
    object-position: center top;
    animation: none;
  }
  .banner-slide__blur-overlay {
    background: linear-gradient(
      0deg,
      rgba(0, 26, 46, 0.95) 0%,
      rgba(0, 26, 46, 0.85) 35%,
      rgba(0, 26, 46, 0.45) 55%,
      rgba(0, 26, 46, 0.08) 72%,
      transparent 85%
    );
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    mask-image: none;
    -webkit-mask-image: none;
  }
  .banner-content {
    padding-bottom: 0.25rem;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .banner-inner {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 480px;
    gap: 0 !important;
  }
  .banner-eyebrow {
    justify-content: center;
    margin-bottom: 0.35rem;
  }
  .banner-eyebrow:empty {
    display: none;
    margin: 0;
  }
  .banner-title {
    align-items: center;
    text-align: center;
    margin: 0 0 0.45rem 0;
    font-size: clamp(1.75rem, 7.5vw, 2.4rem);
    line-height: 1.1;
  }
  .banner-title__accent {
    white-space: normal;
  }
  .banner-subtitle {
    text-align: center;
    margin: 0 auto 0.75rem;
    font-size: clamp(0.82rem, 3vw, 0.92rem);
    line-height: 1.45;
    max-width: 420px;
  }
  .banner-ctas {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-top: 0 !important;
    gap: 0.65rem;
  }
  .banner-btn,
  .banner-btn--stacked {
    flex: 1;
    min-width: 120px;
    padding: 0.65rem 0.5rem;
    font-size: 0.82rem;
    gap: 0.3rem;
    border-radius: 10px;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }
  .banner-btn :deep(svg),
  .banner-btn svg {
    width: 20px;
    height: 20px;
    margin-bottom: 0;
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
    padding: 0.75rem 0.5rem;
  }
  .banner-stat:nth-child(odd) {
    border-right: 1px solid rgba(0, 178, 227, 0.3);
  }
  .banner-stat:nth-last-child(-n + 2) {
    border-bottom: none;
  }
}

@media (max-width: 480px) {
  .banner-stat {
    border-bottom: 1px solid rgba(0, 178, 227, 0.2) !important;
    border-right: none !important;
    flex: 1 1 100%;
    padding: 0.85rem 1.5rem;
  }
  .banner-stat:last-child {
    border-bottom: none !important;
  }
}

@media (max-width: 380px) {
  .banner-ctas {
    flex-direction: column;
    gap: 0.5rem;
  }
  .banner-btn,
  .banner-btn--stacked {
    width: 100%;
    flex-direction: row;
    padding: 0.55rem 0.75rem;
    gap: 0.5rem;
  }
}
</style>
