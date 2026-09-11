<script setup lang="ts">
import { BookOpen, Atom, Languages } from "lucide-vue-next";
</script>

<template>
  <div class="siu-hero-wrapper">
    <section class="siu-hero">
      <div class="siu-hero__bg">
        <picture class="siu-hero__picture biu-hero__picture dp-hero__picture">
          <source
            media="(max-width: 768px)"
            srcset="/images/Secundaria/heroMobile/3.png"
          />
          <img
            src="/images/Secundaria/hero/banerSIU.png"
            alt="Estudiantes SIU UNINTER"
            class="siu-hero__img dp-hero__img"
          />
        </picture>
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

      <!-- Contenido -->
      <div class="siu-wrap siu-hero__content">
        <div class="siu-hero__inner">
          <div class="siu-hero__eyebrow">
            <!-- <img
              src="/images/hero/logo-blanco.svg"
              alt="SIU"
              class="siu-hero__logo-full"
              onerror="this.style.display = 'none'"
            /> -->
          </div>
          <h1 class="siu-hero__title">
            <span class="siu-hero__title-main">SECUNDARIA</span>
            <span class="siu-hero__title-sub"
              >Bilingüe &amp; Multicultural</span
            >
          </h1>

          <p class="siu-hero__desc">
            Elige entre SIU Bilingüe y SIU Multicultural y desarrolla idiomas,
            pensamiento crítico, tecnología, arte y deporte en una comunidad
            internacional.
          </p>

          <div class="siu-hero__ctas-new">
            <a href="#oferta-siu" class="siu-btn-card">
              <div class="btn-icon">
                <Icon name="lucide:book-open" size="28" />
              </div>
              <span>Conocer las modalidades</span>
            </a>
            <a
              href="https://wa.link/3ktsjb"
              target="_blank"
              class="siu-btn-card"
            >
              <div class="btn-icon">
                <Icon name="lucide:calendar" size="28" />
              </div>
              <span>Agendar una visita</span>
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
  --sbg: #0c2336;
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
.siu-hero__picture,
.dp-hero__picture {
  display: block;
  width: 100%;
  height: 100%;
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
  display: none;
}
.siu-hero__overlay2 {
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  background: linear-gradient(
    90deg,
    rgba(10, 22, 32, 0.45) 0%,
    rgba(10, 22, 32, 0.3) 10%,
    rgba(236, 171, 0, 0.3) 40%,
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
  filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
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
  text-shadow:
    0 4px 18px rgba(0, 0, 0, 0.65),
    0 0 35px rgba(255, 206, 82, 0.35);
}
.siu-hero__title-main,
.siu-hero__title-sub {
  font-family: var(--font-serif, Georgia, serif);
}
.siu-hero__title-sub {
  color: #ffffff;
  font-size: clamp(1.2rem, 2.5vw, 1.9rem);
  font-weight: 600;
  letter-spacing: 0.05em;
  margin-top: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.65);
}
.siu-hero__desc {
  color: rgba(255, 255, 255, 0.96);
  font-size: clamp(0.9rem, 1.4vw, 1rem);
  line-height: 1.65;
  margin: 0 0 3rem;
  max-width: 520px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.65);
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
  border-color: #024970;
  color: #024970;
  transform: translateY(-2px);
}
.btn-icon {
  margin-bottom: 0.1rem;
}

.siu-hero__stats-bar {
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
  background-attachment: fixed;
  background-color: #dbb100;
  background-image: radial-gradient(
    circle at 50% 50%,
    rgba(255, 206, 0, 0.55) 0,
    rgba(255, 206, 0, 0.25) 35%,
    transparent 65%
  );
  background-position: 50%;
  border-top: 1px solid rgba(255, 206, 82, 0.3);
  border-bottom: 1px solid #8f7400;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  padding: 1.5rem 0;
  position: relative;
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
  border-right: 1px solid rgba(255, 206, 82, 0.3);
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
  color: #002041;
  display: flex;
  justify-content: center;
}
.siu-stat__text {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}
.siu-stat__value {
  color: #003366;
  font-size: clamp(1.1rem, 1.3vw, 1.4rem);
  font-weight: 800;
  line-height: 1.2;
}
.siu-stat__label {
  color: #003366;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: left;
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

@media (max-width: 768px) {
  .siu-hero {
    height: auto;
    min-height: clamp(520px, 80svh, 650px);
    padding: 3.5rem 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
  .siu-hero__img,
  .dp-hero__img {
    object-position: center top;
    animation: none;
  }
  .siu-hero__overlay2 {
    background: linear-gradient(
      0deg,
      rgba(10, 22, 32, 0.95) 0%,
      rgba(10, 22, 32, 0.85) 35%,
      rgba(10, 22, 32, 0.45) 55%,
      rgba(10, 22, 32, 0.08) 72%,
      transparent 85%
    );
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    mask-image: none;
    -webkit-mask-image: none;
  }
  .siu-hero__deco {
    display: none;
  }
  .siu-hero__content {
    padding-bottom: 0.25rem;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .siu-hero__inner {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 480px;
    gap: 0 !important;
  }
  .siu-hero__eyebrow {
    justify-content: center;
    margin-bottom: 0.35rem;
  }
  .siu-hero__eyebrow:empty {
    display: none;
    margin: 0;
  }
  .siu-hero__logo-full {
    height: 36px;
  }
  .siu-hero__title {
    align-items: center;
    text-align: center;
    margin: 0 0 0.45rem 0;
  }
  .siu-hero__title-main {
    font-size: clamp(2rem, 8.5vw, 2.8rem);
    text-align: center;
    line-height: 1;
  }
  .siu-hero__title-sub {
    font-size: clamp(0.95rem, 3.5vw, 1.25rem);
    text-align: center;
    margin-top: 0.2rem;
    line-height: 1.1;
  }
  .siu-hero__desc {
    text-align: center;
    margin: 0 auto 0.75rem;
    font-size: clamp(0.82rem, 3vw, 0.92rem);
    line-height: 1.45;
    max-width: 420px;
  }
  .siu-hero__ctas-new {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    margin-top: 0 !important;
    gap: 0.65rem;
  }
  .siu-btn-card {
    flex: 1;
    min-width: 120px;
    padding: 0.65rem 0.5rem;
    font-size: 0.82rem;
    gap: 0.3rem;
    border-radius: 10px;
  }
  .btn-icon {
    margin-bottom: 0;
  }
  .btn-icon :deep(svg) {
    width: 20px;
    height: 20px;
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
}

@media (max-width: 480px) {
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

@media (max-width: 380px) {
  .siu-hero__ctas-new {
    flex-direction: column;
    gap: 0.6rem;
  }
  .siu-btn-card {
    width: 100%;
    flex-direction: row;
    padding: 0.75rem 1rem;
    gap: 0.6rem;
  }
}
</style>
