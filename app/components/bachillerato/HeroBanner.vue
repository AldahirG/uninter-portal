<script setup lang="ts">
import {
  Sparkles,
  BookOpen,
  Globe2,
  Layers,
  Calendar,
  ShieldCheck,
  ChevronRight,
  GraduationCap,
} from "lucide-vue-next";

const stats = [
  { value: "Modalidades", label: "Disponibles", icon: "Layers" },
  { value: "Años de", label: "Duración", icon: "Calendar" },
  { value: "Materias en", label: "Inglés", icon: "BookOpen" },
  { value: "Enfoque", label: "Bilingüe", icon: "Globe" },
  { value: "Validez", label: "SEP RVOE", icon: "ShieldCheck" },
];
</script>

<template>
  <div class="biu-hero-wrapper">
    <section class="biu-hero">
      <div class="biu-hero__bg">
        <picture class="biu-hero__picture dp-hero__picture">
          <source
            media="(max-width: 768px)"
            srcset="/images/bachillerato/heroMobile/9.png"
          />
          <img
            src="/images/bachillerato/hero/banerBIU.png"
            alt="Estudiantes BIU UNINTER"
            class="biu-hero__img dp-hero__img"
          />
        </picture>
        <div class="biu-hero__overlay"></div>
        <div class="biu-hero__overlay2"></div>
      </div>
      <div class="biu-hero__deco biu-hero__deco--tl" aria-hidden="true">
        <Sparkles :size="32" />
      </div>
      <div class="biu-hero__deco biu-hero__deco--tr" aria-hidden="true">
        <BookOpen :size="28" />
      </div>
      <div class="biu-hero__deco biu-hero__deco--br" aria-hidden="true">
        <Globe2 :size="26" />
      </div>

      <div class="biu-container biu-hero__content">
        <div class="biu-hero__inner">
          <div class="biu-hero__eyebrow">
            <!-- <img
              src="/images/hero/logo-blanco.svg"
              alt="Bachillerato Internacional UNINTER"
              class="biu-hero__logo-full"
              onerror="this.style.display = 'none'"
            /> -->
          </div>
          <h1 class="biu-hero__title">
            <span class="biu-hero__title-main">BACHILLERATO</span>
            <span class="biu-hero__title-sub">Bilingüe & Multicultural</span>
          </h1>
          <p class="biu-hero__desc">
            Prepárate para el futuro con una formación académica de excelencia
            en un ambiente internacional. Domina el inglés, desarrolla
            habilidades tecnológicas y conecta con el mundo desde Cuernavaca.
          </p>
          <div class="biu-hero__ctas-new">
            <a href="#vida-academica" class="biu-btn-card">
              <div class="btn-icon"><ChevronRight :size="28" /></div>
              <span>Conoce BIU</span>
            </a>
            <a href="#oferta-biu" class="biu-btn-card">
              <div class="btn-icon"><GraduationCap :size="28" /></div>
              <span>Modalidades</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <div class="biu-hero__stats-bar">
      <div class="biu-container biu-hero__stats-inner">
        <div v-for="stat in stats" :key="stat.label" class="biu-stat">
          <div class="biu-stat__icon">
            <component
              :is="
                stat.icon === 'Layers'
                  ? Layers
                  : stat.icon === 'Calendar'
                    ? Calendar
                    : stat.icon === 'BookOpen'
                      ? BookOpen
                      : stat.icon === 'Globe'
                        ? Globe2
                        : ShieldCheck
              "
              :size="28"
            />
          </div>
          <div class="biu-stat__text">
            <span class="biu-stat__value">{{ stat.value }}</span>
            <span class="biu-stat__label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.biu-hero-wrapper {
  --g: #bad043;
  --gl: #7bba4f;
  --gd: #459c4a;
  --ga: #bad043;
}
.biu-container {
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1.5rem;
}
.biu-hero-wrapper {
  background-color: #0c2010;
}
.biu-hero {
  align-items: center;
  background: transparent;
  display: flex;
  height: clamp(520px, 68vh, 680px);
  overflow: hidden;
  position: relative;
}
.biu-hero__bg {
  inset: 0;
  position: absolute;
}
.biu-hero__picture,
.dp-hero__picture {
  display: block;
  width: 100%;
  height: 100%;
}
.biu-hero__img {
  animation: kb-ee6eb843 14s ease-out forwards;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center top;
  object-position: center top;
  width: 100%;
}
.biu-hero__overlay {
  background: linear-gradient(180deg, #0c201066, #0c20101a 50%, #0c20101a);
  inset: 0;
  position: absolute;
}
.biu-hero__overlay2 {
  -webkit-backdrop-filter: blur(6px);
  backdrop-filter: blur(6px);
  background: linear-gradient(
    90deg,
    rgba(12, 32, 16, 0.85),
    rgba(12, 32, 16, 0.6) 30%,
    rgba(12, 32, 16, 0.1) 45%,
    transparent 60%
  );
  inset: 0;
  -webkit-mask-image: linear-gradient(90deg, #000, #000 35%, transparent 55%);
  mask-image: linear-gradient(90deg, #000, #000 35%, transparent 55%);
  position: absolute;
}
.biu-hero__deco {
  color: #a8d86e;
  opacity: 0.12;
  position: absolute;
  z-index: 2;
}
.biu-hero__deco--tl {
  left: 5%;
  top: 14%;
}
.biu-hero__deco--tr {
  right: 8%;
  top: 10%;
}
.biu-hero__deco--br {
  bottom: 20%;
  right: 12%;
}
.biu-hero__content {
  position: relative;
  width: 100%;
  z-index: 3;
}
.biu-hero__inner {
  max-width: 640px;
}
.biu-hero__eyebrow {
  align-items: center;
  display: flex;
  margin-bottom: 2rem;
}
.biu-hero__logo-full {
  height: 48px;
  -o-object-fit: contain;
  object-fit: contain;
}
.biu-hero__tagline {
  color: #ffffff8c;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  margin: 0 0 1rem;
  text-transform: uppercase;
}
.biu-hero__title {
  display: flex;
  flex-direction: column;
  line-height: 1;
  margin: 0 0 2rem;
}
.biu-hero__title-main {
  color: var(--ga);
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 24px hsla(87, 58%, 64%, 0.25);
}
.biu-hero__title-main,
.biu-hero__title-sub {
  font-family: var(--font-serif, Georgia, serif);
}
.biu-hero__title-sub {
  color: #ffffffe6;
  font-size: clamp(1.2rem, 2.5vw, 1.9rem);
  font-weight: 600;
  letter-spacing: 0.05em;
  margin-top: 1rem;
}
.biu-hero__desc {
  color: #ffffffad;
  font-size: clamp(0.9rem, 1.4vw, 1rem);
  line-height: 1.65;
  margin: 0 0 3rem;
  max-width: 520px;
}
.biu-hero__ctas-new {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1rem;
}
.biu-btn-card {
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
.sticker-line--en {
  background: var(--gl);
  color: #fff;
}
.biu-btn-card:hover {
  background: #bad04326;
  border-color: var(--g);
  color: var(--g);
  transform: translateY(-2px);
}
.btn-icon {
  margin-bottom: 0.1rem;
}
.biu-hero__stats-bar {
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
  background-attachment: fixed;
  background-color: #0c2010d9;
  background-image: radial-gradient(
    circle at 50% 50%,
    rgba(186, 208, 67, 0.15) 0,
    transparent 60%
  );
  background-position: 50%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(186, 208, 67, 0.3);
  box-shadow: 0 4px 30px #00000080;
  padding: 1.5rem 0;
  position: relative;
}
.biu-hero__stats-inner {
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}
.biu-stat {
  align-items: center;
  border-right: 1px solid rgba(186, 208, 67, 0.3);
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  padding: 0 1.5rem;
}
.biu-stat:last-child {
  border-right: none;
}
.biu-stat__icon {
  align-items: center;
  color: var(--g);
  display: flex;
  justify-content: center;
}
.biu-stat__text {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}
.biu-stat__value {
  color: #fff;
  font-size: clamp(1.1rem, 1.3vw, 1.4rem);
  font-weight: 800;
  line-height: 1.2;
}
.biu-stat__label {
  color: #fffc;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: left;
}
@media (max-width: 768px) {
  .biu-hero {
    height: auto;
    min-height: clamp(620px, 88vh, 760px);
    padding: 5rem 0 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
  .biu-hero__img {
    object-position: center center;
    animation: none;
  }
  .biu-hero__overlay2 {
    background: linear-gradient(
      0deg,
      rgba(12, 32, 16, 0.94) 0%,
      rgba(12, 32, 16, 0.8) 32%,
      rgba(12, 32, 16, 0.4) 52%,
      rgba(12, 32, 16, 0.08) 70%,
      transparent 85%
    );
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    mask-image: none;
    -webkit-mask-image: none;
  }
  .biu-hero__deco {
    display: none;
  }
  .biu-hero__content {
    padding-bottom: 0.5rem;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .biu-hero__inner {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 520px;
  }
  .biu-hero__eyebrow {
    justify-content: center;
    margin-bottom: 0.75rem;
  }
  .biu-hero__logo-full {
    height: 40px;
  }
  .biu-hero__title {
    align-items: center;
    text-align: center;
    margin-bottom: 0.75rem;
  }
  .biu-hero__title-main {
    font-size: clamp(2.3rem, 10vw, 3.4rem);
    text-align: center;
  }
  .biu-hero__title-sub {
    font-size: clamp(1rem, 3.8vw, 1.3rem);
    text-align: center;
    margin-top: 0.35rem;
  }
  .biu-hero__desc {
    text-align: center;
    margin: 0 auto 1.5rem;
    font-size: 0.9rem;
    line-height: 1.55;
    max-width: 440px;
  }
  .biu-hero__ctas-new {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    gap: 0.85rem;
  }
  .biu-btn-card {
    flex: 1;
    min-width: 135px;
    padding: 0.9rem 0.75rem;
    font-size: 0.88rem;
    gap: 0.45rem;
  }
  .biu-hero__stats-bar {
    position: relative;
    width: 100%;
  }
  .biu-hero__stats-inner {
    flex-wrap: wrap;
    gap: 1rem 0;
  }
  .biu-stat {
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
    border-right: none;
    flex: 1 1 50%;
    padding: 1rem 0.5rem;
  }
  .biu-stat:nth-child(odd) {
    border-right: 1px solid hsla(0, 0%, 100%, 0.1);
  }
  .biu-stat:nth-last-child(-n + 2) {
    border-bottom: none;
  }
}

@media (max-width: 480px) {
  .biu-stat {
    border-bottom: 1px solid hsla(0, 0%, 100%, 0.1) !important;
    border-right: none !important;
    flex: 1 1 100%;
    padding: 1rem 1.5rem;
  }
  .biu-stat:last-child {
    border-bottom: none !important;
  }
}

@media (max-width: 380px) {
  .biu-hero__ctas-new {
    flex-direction: column;
    gap: 0.6rem;
  }
  .biu-btn-card {
    width: 100%;
    flex-direction: row;
    padding: 0.75rem 1rem;
    gap: 0.6rem;
  }
}
</style>
