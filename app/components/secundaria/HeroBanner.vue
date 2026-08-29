<script setup lang="ts">
import { BookOpen, Atom, Languages } from "lucide-vue-next";
</script>

<template>
  <div class="siu-hero-wrapper">
    <section class="siu-hero">
      <div class="siu-hero__bg">
        <img
          src="/images/Secundaria/hero/banerSIU.png"
          alt="Estudiantes SIU UNINTER"
          class="siu-hero__img"
        />
        <div class="siu-hero__overlay"></div>
        <div class="siu-hero__overlay2"></div>
      </div>

      <!-- Elementos decorativos flotantes -->
      <div class="siu-hero__deco siu-hero__deco--tl" aria-hidden="true">
        <Atom :size="34" />
      </div>
      <div class="siu-hero__deco siu-hero__deco--tr" aria-hidden="true">
        <BookOpen :size="30" />
      </div>
      <div class="siu-hero__deco siu-hero__deco--br" aria-hidden="true">
        <Languages :size="28" />
      </div>

      <!-- Sticker HOLA / HELLO -->
      <div class="siu-hero__sticker siu-hero__sticker--hola" aria-hidden="true">
        <span class="sticker-line">HOLA</span>
        <span class="sticker-arrow">↙</span>
        <span class="sticker-line sticker-line--en">HELLO</span>
      </div>

      <!-- Contenido -->
      <div class="siu-wrap siu-hero__content">
        <div class="siu-hero__inner">
          <div class="siu-hero__eyebrow">
            <img
              src="/images/hero/logo-blanco.svg"
              alt="SIU"
              class="siu-hero__logo-full"
              onerror="this.style.display = 'none'"
            />
          </div>
          <h1 class="siu-hero__title">
            <span class="siu-hero__title-main">SECUNDARIA</span>
            <span class="siu-hero__title-sub"
              >Bilingüe &amp; Multicultural</span
            >
          </h1>

          <p class="siu-hero__desc">
            Formamos jóvenes con visión global, desarrollo de habilidades
            culturales, artísticas y deportivas en un entorno internacional con
            más de 40 años de experiencia educativa.
          </p>

          <div class="siu-hero__ctas-new">
            <a href="#oferta-siu" class="siu-btn-card">
              <div class="btn-icon">
                <Icon name="lucide:book-open" size="28" />
              </div>
              <span>Ver modalidades</span>
            </a>
            <a
              href="https://siu.uninter.edu.mx/"
              target="_blank"
              class="siu-btn-card"
            >
              <div class="btn-icon"><Icon name="lucide:info" size="28" /></div>
              <span>Conoce SIU</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats strip -->
    <div class="siu-hero__stats-bar">
      <div class="siu-wrap siu-hero__stats-inner">
        <div class="siu-stat">
          <div class="siu-stat__icon"><Icon name="mdi:layers" size="28" /></div>
          <div class="siu-stat__text">
            <span class="siu-stat__value">Modalidades</span>
            <span class="siu-stat__label">Disponibles</span>
          </div>
        </div>
        <div class="siu-stat">
          <div class="siu-stat__icon">
            <Icon name="mdi:calendar-month-outline" size="28" />
          </div>
          <div class="siu-stat__text">
            <span class="siu-stat__value">Años de</span>
            <span class="siu-stat__label">Duración</span>
          </div>
        </div>
        <div class="siu-stat">
          <div class="siu-stat__icon">
            <Icon name="mdi:translate" size="28" />
          </div>
          <div class="siu-stat__text">
            <span class="siu-stat__value">Enfoque</span>
            <span class="siu-stat__label">Bilingüe</span>
          </div>
        </div>
        <div class="siu-stat">
          <div class="siu-stat__icon">
            <Icon name="mdi:basketball" size="28" />
          </div>
          <div class="siu-stat__text">
            <span class="siu-stat__value">Actividades</span>
            <span class="siu-stat__label">Extracurriculares</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.siu-wrap {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.siu-hero-wrapper {
  --s: #ecab00;
  --sd: #c49000;
  --sl: #f5c842;
  --sbg: #1a1500;
  --sa: #fceeb5;
  --s-blue: #00b6ec;
  --s-blue-dark: #0091d7;
  background-color: var(--sbg);
}
.siu-hero {
  align-items: center;
  background: transparent;
  display: flex;
  height: clamp(520px, 68vh, 680px);
  overflow: hidden;
  position: relative;
}
.siu-hero__bg {
  inset: 0;
  position: absolute;
}
.siu-hero__img {
  animation: kb-6f81a179 14s ease-out forwards;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center top;
  object-position: center top;
  width: 100%;
}
.siu-hero__overlay {
  background: linear-gradient(
    180deg,
    rgba(0, 182, 236, 0.12),
    rgba(26, 21, 0, 0.1) 50%,
    rgba(26, 21, 0, 0.25)
  );
  inset: 0;
  position: absolute;
}
.siu-hero__overlay2 {
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  background: linear-gradient(
    90deg,
    rgba(8, 20, 28, 0.78) 0%,
    rgba(10, 24, 34, 0.62) 32%,
    rgba(0, 182, 236, 0.22) 44%,
    rgba(0, 182, 236, 0.06) 52%,
    transparent 58%
  );
  inset: 0;
  -webkit-mask-image: linear-gradient(
    90deg,
    black 0%,
    black 34%,
    rgba(0, 0, 0, 0.6) 46%,
    rgba(0, 0, 0, 0.2) 53%,
    transparent 58%
  );
  mask-image: linear-gradient(
    90deg,
    black 0%,
    black 34%,
    rgba(0, 0, 0, 0.6) 46%,
    rgba(0, 0, 0, 0.2) 53%,
    transparent 58%
  );
  position: absolute;
}
.siu-hero__content {
  position: relative;
  width: 100%;
  z-index: 3;
}
.siu-hero__inner {
  max-width: 640px;
}
.siu-hero__eyebrow {
  align-items: center;
  display: flex;
  margin-bottom: 2rem;
}
.siu-hero__logo-full {
  height: 48px;
  -o-object-fit: contain;
  object-fit: contain;
}
.siu-hero__title {
  display: flex;
  flex-direction: column;
  line-height: 1;
  margin: 0 0 2rem;
}
.siu-hero__title-main {
  color: var(--s);
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 24px hsla(43, 100%, 66%, 0.25);
}
.siu-hero__title-main,
.siu-hero__title-sub {
  font-family: var(--font-serif, Georgia, serif);
}
.siu-hero__title-sub {
  color: #ffffffe6;
  font-size: clamp(1.2rem, 2.5vw, 1.9rem);
  font-weight: 600;
  letter-spacing: 0.05em;
  margin-top: 1rem;
}
.siu-hero__desc {
  color: #ffffffad;
  font-size: clamp(0.9rem, 1.4vw, 1rem);
  line-height: 1.65;
  margin: 0 0 3rem;
  max-width: 520px;
}
.siu-hero__ctas-new {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1rem;
}
.siu-btn-card {
  align-items: center;
  background: transparent;
  border: 1px solid hsla(0, 0%, 100%, 0.4);
  border-radius: 12px;
  color: #fff;
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
.siu-btn-card:hover {
  background: rgba(5, 173, 220, 0.15);
  border-color: #05addc;
  color: #05addc;
  transform: translateY(-2px);
}
.btn-icon {
  margin-bottom: 0.1rem;
}

.siu-hero__stats-bar {
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
  background: linear-gradient(90deg, #d49500 0%, #ebb215 50%, #d49500 100%);
  border-top: 2px solid rgba(0, 182, 236, 0.7);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.35);
  padding: 1.5rem 0;
  position: relative;
  overflow: hidden;
}

.siu-hero__stats-bar::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(0, 182, 236, 0.5) 0%,
    rgba(56, 212, 255, 0.25) 30%,
    transparent 65%
  );
  pointer-events: none;
  z-index: 1;
}

.siu-hero__stats-inner {
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}
.siu-stat {
  align-items: center;
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  padding: 0 1.5rem;
}
.siu-stat:last-child {
  border-right: none;
}
.siu-stat__icon {
  align-items: center;
  color: #ffffff;
  display: flex;
  justify-content: center;
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.25));
}
.siu-stat__text {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}
.siu-stat__value {
  color: #ffffff;
  font-size: clamp(1.1rem, 1.3vw, 1.4rem);
  font-weight: 900;
  line-height: 1.2;
  text-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
}
.siu-stat__label {
  color: rgba(255, 255, 255, 0.95);
  font-size: 0.9rem;
  font-weight: 700;
  text-align: left;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

@keyframes kb-6f81a179 {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.06);
  }
}

/* Decorativos */
.siu-hero__deco {
  position: absolute;
  z-index: 2;
  opacity: 0.14;
  color: #ecab00;
}
.siu-hero__deco--tl {
  top: 14%;
  left: 5%;
}
.siu-hero__deco--tr {
  top: 10%;
  right: 8%;
}
.siu-hero__deco--br {
  bottom: 20%;
  right: 12%;
}

/* Sticker HOLA/HELLO */
.siu-hero__sticker {
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.1rem;
  transform: rotate(-8deg);
  opacity: 0.88;
}
.siu-hero__sticker--hola {
  top: 16%;
  right: 28%;
}
.sticker-line {
  background: #fff;
  color: #1a1500;
  font-size: clamp(0.9rem, 2vw, 1.2rem);
  font-weight: 900;
  letter-spacing: 0.08em;
  padding: 0.25rem 0.9rem;
  border-radius: 6px;
  box-shadow: 2px 3px 8px rgba(0, 0, 0, 0.35);
  line-height: 1;
}
.sticker-line--en {
  background: #00a8e8;
  color: #fff;
}
.sticker-arrow {
  font-size: 1.2rem;
  color: #fff;
  font-weight: 900;
  line-height: 1;
}

@media (max-width: 768px) {
  .siu-hero {
    flex-direction: column;
    height: auto;
    min-height: clamp(500px, 85vh, 800px);
    padding-top: 5rem;
  }
  .siu-hero__content {
    align-items: center;
    display: flex;
    flex: 1;
    padding-bottom: 3rem;
  }
  .siu-hero__stats-bar {
    position: relative;
    width: 100%;
  }
  .siu-hero__stats-inner {
    flex-wrap: wrap;
    gap: 1rem 0;
  }
  .siu-stat {
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
    border-right: none;
    flex: 1 1 50%;
    padding: 1rem 0.5rem;
  }
  .siu-stat:nth-child(odd) {
    border-right: 1px solid hsla(0, 0%, 100%, 0.1);
  }
  .siu-stat:nth-last-child(-n + 2) {
    border-bottom: none;
  }
  .siu-hero__sticker--hola {
    display: none;
  }
}
@media (max-width: 480px) {
  .siu-hero__ctas-new {
    flex-direction: row;
    gap: 1rem;
  }
  .siu-btn-card {
    flex: 1;
    padding: 1rem;
  }
  .siu-hero__title-main {
    font-size: clamp(2.5rem, 12vw, 4rem);
  }
  .siu-stat {
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1) !important;
    border-right: none !important;
    flex: 1 1 100%;
    padding: 1rem 1.5rem;
  }
  .siu-stat:last-child {
    border-bottom: none !important;
  }
}
</style>
