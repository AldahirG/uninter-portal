<script setup lang="ts">
import {
  BookOpen,
  Info,
  Award,
  LayoutGrid,
  GraduationCap,
} from "lucide-vue-next";

const stats = [
  { value: "100+", label: "Diplomados y cursos", icon: BookOpen },
  { value: "16", label: "Áreas de especialización", icon: LayoutGrid },
  { value: "ICPM", label: "Cert. internacional", icon: Award },
  { value: "40+", label: "Años de experiencia", icon: GraduationCap },
];
</script>

<template>
  <div class="dp-page-wrapper">
    <section class="dp-hero">
      <div class="dp-hero__bg">
        <img
          src="/images/hero/licenciaturasPresenciales.jpg"
          alt="Diplomados UNINTER"
          class="dp-hero__img"
        />
        <div class="dp-hero__overlay"></div>
      </div>

      <div class="dp-container dp-hero__content">
        <div class="dp-hero__inner">
          <div class="dp-hero__eyebrow">
            <img src="/images/logo-uninter.png" alt="UNINTER" class="dp-hero__logo logo-white-filter" />
            <span>Universidad Internacional</span>
          </div>

          <h1 class="dp-hero__title">
            <span class="dp-hero__title-main">DIPLOMADOS</span>
            <span class="dp-hero__title-sub"
              >Cursos · Certificaciones · Especialización</span
            >
          </h1>

          <p class="dp-hero__desc">
            Programas de actualización profesional con valor curricular y
            certificaciones internacionales. Flexibles, prácticos y avalados por
            SEP.
          </p>

          <div class="dp-hero__ctas">
            <NuxtLink to="/diplomados/programas" class="dp-btn dp-btn--ghost">
              <BookOpen :size="20" class="dp-btn-icon" />
              Programas Disponibles
            </NuxtLink>
            <a
              href="https://diplomados.uninter.edu.mx/"
              target="_blank"
              class="dp-btn dp-btn--ghost"
            >
              <Info :size="20" class="dp-btn-icon" />
              Solicita Información
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Barra de Características debajo del banner -->
    <div class="dp-stats-bar">
      <div class="dp-container dp-stats-inner">
        <div v-for="stat in stats" :key="stat.label" class="dp-stat">
          <div class="dp-stat__icon-wrapper">
            <component :is="stat.icon" :size="28" class="dp-stat__icon" />
          </div>

          <div class="dp-stat__content">
            <span class="dp-stat__value">{{ stat.value }}</span>
            <span class="dp-stat__label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dp-page-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.dp-hero {
  --color-orange: #f28b22;
  --color-orange-light: #f5a65b;
  position: relative;
  height: clamp(520px, 75vh, 700px);
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #f4f4f4;
}
.dp-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
}

.dp-hero__bg {
  position: absolute;
  inset: 0;
}
.dp-hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  animation: kb 14s ease-out forwards;
}
@keyframes kb {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.06);
  }
}

/* OVERLAY CON BLUR A LA IZQUIERDA */
.dp-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(20, 20, 25, 0.75) 0%,
    rgba(20, 20, 25, 0.4) 45%,
    transparent 100%
  );
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  mask-image: linear-gradient(to right, black 40%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, black 40%, transparent 100%);
}

.dp-hero__content {
  position: relative;
  z-index: 3;
  width: 100%;
  padding-bottom: 2rem;
}
.dp-hero__inner {
  max-width: 700px;
}

.dp-hero__eyebrow { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem; }
.dp-hero__logo { height: 36px; object-fit: contain; }
.logo-white-filter { filter: brightness(0) invert(1); }
.dp-hero__eyebrow span { font-size: 1rem; font-weight: 500; color: rgba(255, 255, 255, 0.9); }

.dp-hero__title {
  display: flex;
  flex-direction: column;
  margin: 0 0 1.5rem;
  line-height: 1.1;
}
.dp-hero__title-main {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(3.5rem, 8vw, 6.5rem);
  font-weight: 900;
  color: var(--color-orange);
  letter-spacing: -0.02em;
  text-shadow: 2px 4px 15px rgba(242, 139, 34, 0.3);
}
.dp-hero__title-sub {
  font-family: var(--font-sans, system-ui, sans-serif);
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  font-weight: 600;
  color: #ffffff;
  margin-top: 0.5rem;
}

.dp-hero__desc {
  font-size: clamp(0.95rem, 1.2vw, 1.1rem);
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
  margin: 0 0 2.5rem;
  max-width: 600px;
}

.dp-hero__ctas {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.dp-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s;
  cursor: pointer;
  gap: 0.75rem;
}

.dp-btn-icon {
  opacity: 0.9;
}

.dp-btn--ghost {
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(4px);
}
.dp-btn--ghost:hover {
  border-color: var(--color-orange);
  background: rgba(242, 139, 34, 0.15);
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(242, 139, 34, 0.1);
}

/* =========================================
   BARRA DE ESTADISTICAS
========================================= */
.dp-stats-bar {
  background: linear-gradient(90deg, #421e02 0%, #5e2f04 50%, #421e02 100%);
  position: relative;
  border-top: 2px solid rgba(242, 139, 34, 0.3);
  box-shadow:
    0 -10px 30px rgba(242, 139, 34, 0.15),
    inset 0 20px 40px rgba(255, 160, 60, 0.08);
  padding: 1.5rem 0;
  z-index: 10;
}

.dp-stats-bar::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: radial-gradient(
    circle at 50% 0%,
    rgba(242, 139, 34, 0.25) 0%,
    transparent 70%
  );
  pointer-events: none;
}

.dp-stats-inner {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
}

.dp-stat {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0.5rem 1.5rem;
  border-right: 1px solid rgba(242, 139, 34, 0.2);
  position: relative;
}
.dp-stat:last-child {
  border-right: none;
}

.dp-stat__icon-wrapper {
  color: #f28b22;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dp-stat__content {
  display: flex;
  flex-direction: column;
}

.dp-stat__value {
  font-size: clamp(1.4rem, 2vw, 1.6rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1;
  margin-bottom: 0.2rem;
}
.dp-stat__label {
  font-size: 0.8rem;
  color: #f5a65b;
  font-weight: 500;
  line-height: 1.2;
}

@media (max-width: 992px) {
  .dp-stats-inner {
    flex-wrap: wrap;
    gap: 1.5rem 0;
  }
  .dp-stat {
    flex: 1 1 50%;
    border-right: none;
    justify-content: flex-start;
    padding-left: 2rem;
  }
  .dp-stat:nth-child(odd) {
    border-right: 1px solid rgba(242, 139, 34, 0.2);
  }
}

@media (max-width: 576px) {
  .dp-hero {
    height: auto;
    padding: 6rem 0 4rem;
  }
  .dp-hero__title-main {
    font-size: 3rem;
  }
  .dp-stat {
    flex: 1 1 100%;
    border-right: none !important;
  }
}
</style>
