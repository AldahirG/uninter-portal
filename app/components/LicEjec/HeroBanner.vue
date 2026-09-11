<script setup lang="ts">
import {
  BookOpen,
  Briefcase,
  GraduationCap,
  Clock,
  Award,
  ShieldCheck,
  Globe,
} from "lucide-vue-next";
</script>

<template>
  <div class="le-hero-wrapper">
    <section class="le-hero">
      <div class="le-hero__bg">
        <picture class="biu-hero__picture dp-hero__picture le-hero__picture">
          <source
            media="(max-width: 768px)"
            srcset="/images/licenciaturasEjc/heroMobile/25.png"
          />
          <img
            src="/images/licenciaturasEjc/hero/EJECU.png"
            alt="Licenciaturas Ejecutivas UNINTER"
            class="biu-hero__img dp-hero__img le-hero__img"
          />
        </picture>
        <div class="le-hero__overlay"></div>
        <div class="le-hero__overlay2"></div>
      </div>

      <!-- Elementos decorativos flotantes -->
      <div class="le-hero__deco le-hero__deco--tl" aria-hidden="true">
        <Briefcase :size="32" />
      </div>
      <div class="le-hero__deco le-hero__deco--tr" aria-hidden="true">
        <BookOpen :size="28" />
      </div>
      <div class="le-hero__deco le-hero__deco--br" aria-hidden="true">
        <GraduationCap :size="30" />
      </div>

      <!-- Contenido del Banner -->
      <div class="le-wrap le-hero__content">
        <div class="le-hero__inner">
          <div class="le-hero__eyebrow">
            <img
              src="/images/hero/logo-blanco.svg"
              alt="UNINTER"
              class="le-hero__logo-full"
              onerror="this.style.display = 'none'"
            />
          </div>

          <h1 class="le-hero__title">
            <span class="le-hero__title-main">LICENCIATURAS</span>
            <span class="le-hero__title-sub">Ejecutivas</span>
          </h1>

          <p class="le-hero__desc">
            Estudia tu licenciatura con la flexibilidad que necesitas. Diseñada
            para profesionales y personas activas laboralmente que buscan
            acelerar su crecimiento con planes cuatrimestrales y validez
            oficial.
          </p>

          <div class="le-hero__ctas">
            <a href="#oferta-ejecutiva" class="le-btn-card">
              <div class="btn-icon">
                <BookOpen :size="24" />
              </div>
              <span>Ver Carreras</span>
            </a>
            <a href="#formulario-registro" class="le-btn-card">
              <div class="btn-icon">
                <Briefcase :size="24" />
              </div>
              <span>Solicitar Información</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Barra de Características con Efecto Liquid Glass y Destello Central -->
    <div class="le-hero__stats-bar">
      <div class="le-wrap le-hero__stats-inner">
        <div class="le-stat">
          <div class="le-stat__icon"><Clock :size="26" /></div>
          <div class="le-stat__text">
            <span class="le-stat__value">Flexibilidad</span>
            <span class="le-stat__label">Semipresencial</span>
          </div>
        </div>
        <div class="le-stat">
          <div class="le-stat__icon"><Award :size="26" /></div>
          <div class="le-stat__text">
            <span class="le-stat__value">3 Años</span>
            <span class="le-stat__label">Plan Cuatrimestral</span>
          </div>
        </div>
        <div class="le-stat">
          <div class="le-stat__icon"><ShieldCheck :size="26" /></div>
          <div class="le-stat__text">
            <span class="le-stat__value">Validez SEP</span>
            <span class="le-stat__label">RVOE Oficial</span>
          </div>
        </div>
        <div class="le-stat">
          <div class="le-stat__icon"><Globe :size="26" /></div>
          <div class="le-stat__text">
            <span class="le-stat__value">Networking</span>
            <span class="le-stat__label">Comunidad Profesional</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.le-wrap {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.le-hero-wrapper {
  --le-p: #694e39;
  --le-pd: #4e3827;
  --le-s: #876d56;
  --le-l: #a78d75;
  --le-gold: #d4b89e;
  --le-bg: #1f1812;
  background-color: var(--le-bg);
}

.le-hero {
  align-items: center;
  background: transparent;
  display: flex;
  height: clamp(520px, 68vh, 680px);
  overflow: hidden;
  position: relative;
}

.le-hero__bg {
  inset: 0;
  position: absolute;
}

.le-hero__picture,
.dp-hero__picture,
.biu-hero__picture {
  display: block;
  width: 100%;
  height: 100%;
}

.le-hero__img,
.dp-hero__img,
.biu-hero__img {
  animation: kb-ejec 14s ease-out forwards;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  width: 100%;
}

@keyframes kb-ejec {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.06);
  }
}

.le-hero__overlay {
  background: linear-gradient(
    180deg,
    rgba(31, 24, 18, 0.3) 0%,
    rgba(31, 24, 18, 0.1) 50%,
    rgba(31, 24, 18, 0.4) 100%
  );
  inset: 0;
  position: absolute;
}

.le-hero__overlay2 {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  background: linear-gradient(
    90deg,
    rgba(31, 24, 18, 0.88) 0%,
    rgba(45, 34, 25, 0.72) 34%,
    rgba(105, 78, 57, 0.3) 48%,
    rgba(105, 78, 57, 0.08) 56%,
    transparent 62%
  );
  inset: 0;
  mask-image: linear-gradient(
    90deg,
    black 0%,
    black 36%,
    rgba(0, 0, 0, 0.6) 48%,
    rgba(0, 0, 0, 0.2) 56%,
    transparent 62%
  );
  -webkit-mask-image: linear-gradient(
    90deg,
    black 0%,
    black 36%,
    rgba(0, 0, 0, 0.6) 48%,
    rgba(0, 0, 0, 0.2) 56%,
    transparent 62%
  );
  position: absolute;
}

.le-hero__content {
  position: relative;
  width: 100%;
  z-index: 3;
}

.le-hero__inner {
  max-width: 640px;
}

.le-hero__eyebrow {
  align-items: center;
  display: flex;
  margin-bottom: 1.8rem;
}

.le-hero__logo-full {
  height: 46px;
  object-fit: contain;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.4));
}

.le-hero__title {
  display: flex;
  flex-direction: column;
  line-height: 1;
  margin: 0 0 1.8rem;
}

.le-hero__title-main {
  color: var(--le-gold);
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2.8rem, 6.5vw, 5rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.le-hero__title-sub {
  color: #ffffff;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.3rem, 2.8vw, 2.2rem);
  font-weight: 700;
  letter-spacing: 0.04em;
  margin-top: 0.6rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);
}

.le-hero__desc {
  color: rgba(255, 255, 255, 0.94);
  font-size: clamp(0.95rem, 1.4vw, 1.05rem);
  line-height: 1.7;
  margin: 0 0 2.5rem;
  max-width: 540px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
}

.le-hero__ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
}

/* Botones con contornos blancos y fondo blur */
.le-btn-card {
  align-items: center;
  background: transparent;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid hsla(0, 0%, 100%, 0.4);
  border-radius: 12px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  font-size: 0.95rem;
  font-weight: 600;
  gap: 0.5rem;
  justify-content: center;
  min-width: 140px;
  padding: 1rem 2.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.le-btn-card .btn-icon {
  color: #ffffff;
  margin-bottom: 0.1rem;
  transition: all 0.3s ease;
}

/* Hover: contorno, texto e ícono se vuelven café */
.le-btn-card:hover {
  background: rgba(105, 78, 57, 0.15);
  border-color: #694e39;
  color: #694e39;
  transform: translateY(-2px);
}

.le-btn-card:hover .btn-icon {
  color: #694e39;
  transform: scale(1.05);
}

/* Elementos decorativos */
.le-hero__deco {
  position: absolute;
  z-index: 2;
  opacity: 0.12;
  color: var(--le-gold);
}

.le-hero__deco--tl {
  top: 14%;
  left: 4%;
}

.le-hero__deco--tr {
  top: 12%;
  right: 18%;
}

.le-hero__deco--br {
  bottom: 22%;
  right: 10%;
}

/* ═══════════ BARRA DE ESTADÍSTICAS: LIQUID GLASS CON DESTELLO CENTRAL ═══════════ */
.le-hero__stats-bar {
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
  background-attachment: fixed;
  background-color: rgba(31, 24, 18, 0.85);
  background-image: radial-gradient(
    circle at 50% 50%,
    rgba(167, 141, 117, 0.28) 0%,
    transparent 60%
  );
  background-position: 50%;
  border-top: 1px solid rgba(167, 141, 117, 0.35);
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  box-shadow:
    0 -4px 24px rgba(0, 0, 0, 0.45),
    0 12px 32px rgba(0, 0, 0, 0.5);
  padding: 1.5rem 0;
  position: relative;
  z-index: 10;
}

.le-hero__stats-inner {
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}

.le-stat {
  align-items: center;
  border-right: 1px solid rgba(167, 141, 117, 0.3);
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  padding: 0 1.5rem;
}

.le-stat:last-child {
  border-right: none;
}

.le-stat__icon {
  align-items: center;
  color: var(--le-gold);
  display: flex;
  justify-content: center;
}

.le-stat__text {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}

.le-stat__value {
  color: #ffffff;
  font-size: clamp(1.1rem, 1.3vw, 1.4rem);
  font-weight: 800;
  line-height: 1.2;
}

.le-stat__label {
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
  font-weight: 500;
  text-align: left;
}

/* Responsivo */
@media (max-width: 768px) {
  .le-hero {
    height: auto;
    min-height: clamp(520px, 80svh, 650px);
    padding: 3.5rem 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }

  .le-hero__img,
  .dp-hero__img,
  .biu-hero__img {
    object-position: center top;
    animation: none;
  }

  .le-hero__overlay {
    display: none;
  }

  .le-hero__overlay2 {
    background: linear-gradient(
      0deg,
      rgba(31, 24, 18, 0.95) 0%,
      rgba(31, 24, 18, 0.85) 35%,
      rgba(31, 24, 18, 0.45) 55%,
      rgba(31, 24, 18, 0.08) 72%,
      transparent 85%
    );
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    mask-image: none;
    -webkit-mask-image: none;
  }

  .le-hero__deco {
    display: none;
  }

  .le-hero__content {
    padding-bottom: 0.25rem;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .le-hero__inner {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 480px;
    gap: 0 !important;
  }

  .le-hero__eyebrow {
    justify-content: center;
    margin-bottom: 0.35rem;
  }

  .le-hero__eyebrow:empty {
    display: none;
    margin: 0;
  }

  .le-hero__logo-full {
    height: 36px;
  }

  .le-hero__title {
    align-items: center;
    text-align: center;
    margin: 0 0 0.45rem 0;
  }

  .le-hero__title-main {
    font-size: clamp(2rem, 8.5vw, 2.8rem);
    text-align: center;
    line-height: 1;
  }

  .le-hero__title-sub {
    font-size: clamp(0.95rem, 3.5vw, 1.25rem);
    text-align: center;
    margin-top: 0.2rem;
    line-height: 1.1;
  }

  .le-hero__desc {
    text-align: center;
    margin: 0 auto 0.75rem;
    font-size: clamp(0.82rem, 3vw, 0.92rem);
    line-height: 1.45;
    max-width: 420px;
  }

  .le-hero__ctas {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-top: 0 !important;
    gap: 0.65rem;
  }

  .le-btn-card {
    flex: 1;
    min-width: 120px;
    padding: 0.65rem 0.5rem;
    font-size: 0.82rem;
    gap: 0.3rem;
    border-radius: 10px;
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
  }

  .btn-icon {
    margin-bottom: 0;
  }

  .btn-icon :deep(svg),
  .btn-icon svg {
    width: 20px;
    height: 20px;
  }

  .le-hero__stats-bar {
    position: relative;
    width: 100%;
  }

  .le-hero__stats-inner {
    flex-wrap: wrap;
    gap: 1rem 0;
  }

  .le-stat {
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
    border-right: none;
    flex: 1 1 50%;
    padding: 1rem 0.5rem;
  }

  .le-stat:nth-child(odd) {
    border-right: 1px solid hsla(0, 0%, 100%, 0.1);
  }

  .le-stat:nth-last-child(-n + 2) {
    border-bottom: none;
  }
}

@media (max-width: 480px) {
  .le-stat {
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1) !important;
    border-right: none !important;
    flex: 1 1 100%;
    padding: 1rem 1.5rem;
  }

  .le-stat:last-child {
    border-bottom: none !important;
  }
}

@media (max-width: 380px) {
  .le-hero__ctas {
    flex-direction: column;
    gap: 0.5rem;
  }

  .le-btn-card {
    width: 100%;
    flex-direction: row;
    padding: 0.55rem 0.75rem;
    gap: 0.5rem;
  }
}
</style>
