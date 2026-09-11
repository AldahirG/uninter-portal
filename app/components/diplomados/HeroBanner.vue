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

const scrollTo = (id: string) => {
  if (typeof document === "undefined") return;
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <div class="dp-page-wrapper">
    <section class="dp-hero">
      <div class="dp-hero__bg">
        <picture class="dp-hero__picture">
          <source media="(max-width: 768px)" srcset="/images/test/test.png" />
          <img
            src="/images/diplomados/hero/banerDiplomados.png"
            alt="Diplomados UNINTER"
            class="dp-hero__img"
          />
        </picture>
        <div class="dp-hero__overlay"></div>
      </div>

      <div class="dp-container dp-hero__content">
        <div class="dp-hero__inner">
          <!-- <div class="dp-hero__eyebrow">
            <img
              src="/images/hero/logo-blanco.svg"
              alt="UNINTER"
              class="dp-hero__logo"
            />
          </div> -->

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
            <a
              href="#oferta"
              class="dp-btn-card"
              @click.prevent="scrollTo('oferta')"
            >
              <div class="dp-btn-icon">
                <BookOpen :size="28" :stroke-width="1.8" />
              </div>
              <span>Programas Disponibles</span>
            </a>
            <a
              href="#contacto"
              class="dp-btn-card"
              @click.prevent="scrollTo('contacto')"
            >
              <div class="dp-btn-icon">
                <Info :size="28" :stroke-width="1.8" />
              </div>
              <span>Solicita Información</span>
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
  height: clamp(520px, 68vh, 680px);
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
.dp-hero__picture {
  display: block;
  width: 100%;
  height: 100%;
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

/* OVERLAY CON BLUR Y TOQUE SUTIL DE NARANJA OSCURO (DESVANECIDO SUAVE Y ORGÁNICO) */
.dp-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(32, 12, 2, 0.74) 0%,
    rgba(40, 16, 3, 0.58) 32%,
    rgba(55, 22, 4, 0.32) 44%,
    rgba(70, 28, 5, 0.1) 52%,
    transparent 58%
  );
  backdrop-filter: blur(7px);
  -webkit-backdrop-filter: blur(7px);
  mask-image: linear-gradient(
    to right,
    black 0%,
    black 34%,
    rgba(0, 0, 0, 0.6) 46%,
    rgba(0, 0, 0, 0.2) 53%,
    transparent 58%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    black 0%,
    black 34%,
    rgba(0, 0, 0, 0.6) 46%,
    rgba(0, 0, 0, 0.2) 53%,
    transparent 58%
  );
}

.dp-hero__content {
  position: relative;
  z-index: 3;
  width: 100%;
  padding-bottom: 2rem;
}
.dp-hero__inner {
  max-width: 620px;
}

.dp-hero__eyebrow {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}
.dp-hero__logo {
  height: 48px;
  object-fit: contain;
}
.dp-hero__eyebrow span {
  font-size: 1rem;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
}

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
  text-shadow: 2px 4px 15px rgba(242, 139, 34, 0.35);
}
.dp-hero__title-sub {
  font-family: var(--font-sans, system-ui, sans-serif);
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  font-weight: 600;
  color: #ffffff;
  margin-top: 0.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
}

.dp-hero__desc {
  font-size: clamp(0.95rem, 1.2vw, 1.1rem);
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.7;
  margin: 0 0 2.5rem;
  max-width: 600px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
}

/* ═══ BOTONES CTA TIPO TARJETA ═══ */
.dp-hero__ctas {
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.dp-btn-card {
  align-items: center;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 12px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  font-size: 0.95rem;
  font-weight: 700;
  gap: 0.65rem;
  justify-content: center;
  min-width: 175px;
  padding: 1.1rem 1.6rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  cursor: pointer;
}

.dp-btn-card:hover {
  background: rgba(242, 139, 34, 0.18);
  border-color: #f28b22;
  color: #f28b22;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(242, 139, 34, 0.25);
}

.dp-btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
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

@media (max-width: 768px) {
  .dp-hero {
    height: auto;
    min-height: clamp(620px, 88vh, 760px);
    padding: 5rem 0 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
  .dp-hero__img {
    object-position: center center;
    animation: none;
  }
  .dp-hero__overlay {
    background: linear-gradient(
      0deg,
      rgba(25, 9, 2, 0.94) 0%,
      rgba(25, 9, 2, 0.8) 32%,
      rgba(25, 9, 2, 0.4) 52%,
      rgba(25, 9, 2, 0.08) 70%,
      transparent 85%
    );
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    mask-image: none;
    -webkit-mask-image: none;
  }
  .dp-hero__content {
    padding-bottom: 0.5rem;
    display: flex;
    justify-content: center;
  }
  .dp-hero__inner {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 520px;
  }
  .dp-hero__eyebrow {
    justify-content: center;
    margin-bottom: 0.75rem;
  }
  .dp-hero__logo {
    height: 40px;
  }
  .dp-hero__title {
    align-items: center;
    text-align: center;
    margin-bottom: 0.75rem;
  }
  .dp-hero__title-main {
    font-size: clamp(2.3rem, 10vw, 3.4rem);
    text-align: center;
  }
  .dp-hero__title-sub {
    font-size: clamp(0.95rem, 3.6vw, 1.25rem);
    text-align: center;
    margin-top: 0.35rem;
  }
  .dp-hero__desc {
    text-align: center;
    margin: 0 auto 1.5rem;
    font-size: 0.9rem;
    line-height: 1.55;
    max-width: 440px;
  }
  .dp-hero__ctas {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    gap: 0.85rem;
  }
  .dp-btn-card {
    flex: 1;
    min-width: 135px;
    padding: 0.9rem 0.75rem;
    font-size: 0.88rem;
    gap: 0.45rem;
  }
}

@media (max-width: 380px) {
  .dp-hero__ctas {
    flex-direction: column;
    gap: 0.6rem;
  }
  .dp-btn-card {
    width: 100%;
    flex-direction: row;
    padding: 0.75rem 1rem;
    gap: 0.6rem;
  }
}

@media (max-width: 576px) {
  .dp-stat {
    flex: 1 1 100%;
    border-right: none !important;
    padding-left: 1.5rem;
  }
}
</style>
