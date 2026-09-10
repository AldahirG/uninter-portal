<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Award,
  ShieldCheck,
  FileCheck,
} from "lucide-vue-next";

const WA_URL =
  "https://wa.me/5217776154241?text=Hola%20vengo%20de%20la%20p%C3%A1gina%20de%20Universidad%2C%20necesito%20m%C3%A1s%20informaci%C3%B3n%20%E2%9C%8C%EF%B8%8F.";

const DELAY = 5500;
const activeIndex = ref(0);
const prevIndex = ref<number | null>(null);
const animating = ref(false);
let timer: ReturnType<typeof setTimeout> | null = null;

const slides = [
  {
    id: 1,
    eyebrow: "Construye una trayectoria con visión internacional",
    title: "Educación internacional en Cuernavaca",
    subtitle:
      "Secundaria · Bachillerato · Licenciatura · Posgrado. Cuernavaca, Morelos.",
    image: "/images/hero/blur/1.jpg",
    mobileImage: "/images/heroMobile/blur/1.jpg",
    cta: {
      label: "Encuentra tu programa",
      href: "#oferta",
    },
    ctaGhost: { label: "Solicita Información", href: "#admision" },
  },
  {
    id: 2,
    eyebrow: "Vida estudiantil",
    title: "Deporte, cultura\ny liderazgo",
    subtitle: "Desarrolla tus talentos dentro y fuera del aula.",
    image: "/images/hero/blur/5.jpg",
    mobileImage: "/images/heroMobile/blur/5.jpg",
    cta: { label: "Conocer más", href: "#vida" },
    ctaGhost: { label: "Ver eventos", href: "https://uninter.edu.mx/eventos/" },
  },
  {
    id: 3,
    eyebrow: "Spanish School",
    title: "Aprende español\nen Cuernavaca",
    subtitle: "Vive México mientras haces del español parte de tu vida",
    image: "/images/hero/blur/6.jpg",
    mobileImage: "/images/heroMobile/blur/6.jpg",
    cta: {
      label: "Ver programa",
      href: "https://spanishschool.uninter.edu.mx/",
    },
    ctaGhost: {
      label: "Admissions",
      href: "https://spanishschool.uninter.edu.mx/Home",
    },
  },
  {
    id: 4,
    eyebrow: "Eventos y Sesiones informativas",
    title: "Conoce UNINTER\nantes de tomar tu decisión",
    subtitle:
      "Participa en una sesión informativa, recorre nuestras instalaciones y resuelve tus dudas. ",
    image: "/images/hero/blur/3.jpg",
    mobileImage: "/images/heroMobile/blur/3.jpg",
    cta: {
      label: "Ver sesiones",
      href: "https://uninter.edu.mx/sesiones-informativas/",
    },
    ctaGhost: { label: "On Demand", href: "https://uninter.edu.mx/ondemand/" },
  },
];

const stats = [
  { value: "70,000+", label: "Egresados", icon: GraduationCap },
  { value: "45+", label: "Años", icon: Award },
  { value: "RVOE", label: "Acreditado SEP", icon: ShieldCheck },
  { value: "ISO", label: "9001:2015", icon: FileCheck },
];

function goTo(i: number) {
  if (animating.value || i === activeIndex.value) return;
  animating.value = true;
  prevIndex.value = activeIndex.value;
  activeIndex.value = i;
  resetTimer();
  setTimeout(() => {
    prevIndex.value = null;
    animating.value = false;
  }, 950);
}

function next() {
  goTo((activeIndex.value + 1) % slides.length);
}
function prev() {
  goTo((activeIndex.value - 1 + slides.length) % slides.length);
}

function resetTimer() {
  if (timer) clearTimeout(timer);
  timer = setTimeout(next, DELAY);
}

onMounted(() => resetTimer());
onUnmounted(() => {
  if (timer) clearTimeout(timer);
});
</script>

<template>
  <div class="hero-wrapper">
    <section class="hero-section">
      <div class="hero-track">
        <div
          v-for="(slide, i) in slides"
          :key="slide.id"
          class="hero-slide"
          :class="{
            'hero-slide--active': activeIndex === i,
            'hero-slide--prev': prevIndex === i,
          }"
        >
          <picture class="hero-slide__picture dp-hero__picture">
            <source
              media="(max-width: 768px)"
              :srcset="slide.mobileImage || '/images/test/test.png'"
            />
            <img
              :src="slide.image"
              :alt="slide.title"
              class="hero-slide__img dp-hero__img"
            />
          </picture>
          <div class="hero-slide__overlay"></div>
          <div class="hero-slide__overlay2"></div>

          <div class="hero-content uninter-container">
            <div class="hero-inner">
              <div class="hero-eyebrow">
                <span class="hero-eyebrow__line"></span>
                {{ slide.eyebrow }}
              </div>
              <h1 class="hero-title">
                <span
                  v-for="(line, li) in slide.title.split('\n')"
                  :key="li"
                  class="hero-title__line"
                >
                  {{ line }}
                </span>
              </h1>
              <p class="hero-subtitle">{{ slide.subtitle }}</p>
              <div class="hero-btns">
                <a
                  :href="slide.cta.href"
                  target="_blank"
                  class="hero-btn-primary"
                >
                  {{ slide.cta.label }} <ArrowRight :size="15" />
                </a>
                <a :href="slide.ctaGhost.href" class="hero-btn-ghost">
                  {{ slide.ctaGhost.label }}
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Nav buttons -->
        <button
          class="hero-nav hero-nav--prev"
          @click="prev"
          aria-label="Anterior"
        >
          <ChevronLeft :size="18" />
        </button>
        <button
          class="hero-nav hero-nav--next"
          @click="next"
          aria-label="Siguiente"
        >
          <ChevronRight :size="18" />
        </button>

        <!-- Progress dots -->
        <div class="hero-progress uninter-container">
          <button
            v-for="(s, i) in slides"
            :key="s.id"
            class="hero-dot"
            :class="{ 'hero-dot--active': activeIndex === i }"
            @click="goTo(i)"
          />
        </div>
      </div>
    </section>

    <!-- Stats band (Mismo estilo que /bachillerato con tema Azul UNINTER) -->
    <div class="hero-stats-bar">
      <div class="uninter-container hero-stats-inner">
        <div v-for="stat in stats" :key="stat.label" class="hero-stat">
          <div class="hero-stat__icon">
            <component :is="stat.icon" :size="28" />
          </div>
          <div class="hero-stat__text">
            <span class="hero-stat__value">{{ stat.value }}</span>
            <span class="hero-stat__label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero-wrapper {
  --b-accent: #60a5fa;
  --b-glow: rgba(56, 189, 248, 0.15);
  --b-border: rgba(96, 165, 250, 0.3);
  --b-bg: #07192ed9;
  background-color: #07192e;
}

.hero-section {
  position: relative;
  overflow: hidden;
  background: #0f3c61;
}

/* ── Track: altura ajustada con min-height: 70vh (70% del tamaño de pantalla) ── */
.hero-track {
  position: relative;
  min-height: 70vh;
  height: 70vh;
}

/* Todos los slides absolutos, invisibles por default */
.hero-slide {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.9s ease;
  z-index: 0;
}

/* Slide saliente: se mantiene al 100% visible abajo (z-index 1) mientras el nuevo se disuelve encima */
.hero-slide--prev {
  opacity: 1;
  z-index: 1;
}

/* Slide entrante: visible y encima con transición suave */
.hero-slide--active {
  opacity: 1;
  pointer-events: auto;
  z-index: 2;
}

/* Imagen de fondo */
.hero-slide__picture,
.dp-hero__picture {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;
}
.hero-slide__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Kenburns solo en slide activo */
.hero-slide--active .hero-slide__img {
  animation: kb 8s ease forwards;
}
@keyframes kb {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
}

.hero-slide__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(7, 25, 46, 0.94) 0%,
    rgba(7, 25, 46, 0.82) 22%,
    rgba(7, 25, 46, 0.55) 38%,
    rgba(7, 25, 46, 0.22) 50%,
    rgba(7, 25, 46, 0.05) 60%,
    transparent 68%
  );
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  mask-image: linear-gradient(
    90deg,
    black 0%,
    black 22%,
    rgba(0, 0, 0, 0.8) 38%,
    rgba(0, 0, 0, 0.35) 50%,
    rgba(0, 0, 0, 0.08) 60%,
    transparent 68%
  );
  -webkit-mask-image: linear-gradient(
    90deg,
    black 0%,
    black 22%,
    rgba(0, 0, 0, 0.8) 38%,
    rgba(0, 0, 0, 0.35) 50%,
    rgba(0, 0, 0, 0.08) 60%,
    transparent 68%
  );
}
.hero-slide__overlay2 {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(7, 25, 46, 0.5) 0%,
    transparent 35%
  );
}

.hero-content {
  position: relative;
  z-index: 2;
  width: 100%;
}
.hero-inner {
  max-width: 580px;
}

.hero-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #93c5fd;
  margin-bottom: 1rem;
}
.hero-eyebrow__line {
  display: block;
  width: 24px;
  height: 2px;
  background: #93c5fd;
  flex-shrink: 0;
}

.hero-title {
  display: flex;
  flex-direction: column;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 5vw, 3.8rem);
  font-weight: 700;
  line-height: 1.08;
  color: #fff;
  margin: 0 0 1rem;
  letter-spacing: -0.02em;
}
.hero-title__line {
  display: block;
}

.hero-subtitle {
  font-size: clamp(0.88rem, 1.4vw, 1rem);
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 1.75rem;
  max-width: 460px;
  line-height: 1.65;
}

.hero-btns {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.hero-btn-primary,
.hero-btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  font-weight: 700;
  padding: 0.85rem 1.6rem;
  border-radius: 8px; /* Estilo cuadrado-suave como en la imagen */
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #ffffff;
  background: rgba(255, 255, 255, 0.08);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.hero-btn-primary:hover,
.hero-btn-ghost:hover {
  background: rgba(11, 37, 69, 0.35); /* Tinte azul marino */
  border-color: #3b82f6; /* Borde azul marino vibrante para que resalte */
  color: #60a5fa; /* Texto azul marino/claro para que no se pierda */
  transform: translateY(-2px);
  box-shadow: 0 5px 25px rgba(11, 37, 69, 0.5);
}

.hero-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  backdrop-filter: blur(6px);
  transition: background 0.2s;
}
.hero-nav:hover {
  background: rgba(255, 255, 255, 0.22);
}
.hero-nav--prev {
  left: 1.25rem;
}
.hero-nav--next {
  right: 1.25rem;
}

.hero-progress {
  position: absolute;
  bottom: 24px;
  z-index: 20;
  display: flex;
  gap: 6px;
}
.hero-dot {
  width: 24px;
  height: 3px;
  border-radius: 2px;
  border: none;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition:
    width 0.3s,
    background 0.3s;
  padding: 0;
}
.hero-dot--active {
  width: 44px;
  background: #93c5fd;
}

/* ── Stats Bar: Estructura y comportamiento exactos de /bachillerato con estilo Azul UNINTER ── */
.hero-stats-bar {
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
  background-attachment: fixed;
  background-color: var(--b-bg);
  background-image: radial-gradient(
    circle at 50% 50%,
    var(--b-glow) 0,
    transparent 60%
  );
  background-position: 50%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  border-top: 1px solid var(--b-border);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  padding: 1.5rem 0;
  position: relative;
  z-index: 20;
}

.hero-stats-inner {
  align-items: center;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
}

.hero-stat {
  align-items: center;
  border-right: 1px solid var(--b-border);
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  padding: 0 1.5rem;
}

.hero-stat:last-child {
  border-right: none;
}

.hero-stat__icon {
  align-items: center;
  color: var(--b-accent);
  display: flex;
  justify-content: center;
  flex-shrink: 0;
}

.hero-stat__text {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}

.hero-stat__value {
  color: #ffffff;
  font-size: clamp(1.1rem, 1.3vw, 1.4rem);
  font-weight: 800;
  line-height: 1.2;
}

.hero-stat__label {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  font-weight: 500;
  text-align: left;
}

@media (max-width: 768px) {
  .hero-track {
    height: auto;
    min-height: clamp(620px, 88vh, 760px);
  }
  .hero-slide {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 5rem 0 3.5rem;
  }
  .hero-slide__img {
    object-position: center center;
    animation: none !important;
  }
  .hero-slide--active .hero-slide__img {
    animation: none !important;
  }
  .hero-slide__overlay {
    background: linear-gradient(
      0deg,
      rgba(7, 25, 46, 0.96) 0%,
      rgba(7, 25, 46, 0.82) 32%,
      rgba(7, 25, 46, 0.42) 52%,
      rgba(7, 25, 46, 0.08) 70%,
      transparent 85%
    );
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    mask-image: none;
    -webkit-mask-image: none;
  }
  .hero-slide__overlay2 {
    display: none;
  }
  .hero-content {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-bottom: 0.5rem;
  }
  .hero-inner {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 520px;
  }
  .hero-eyebrow {
    justify-content: center;
    margin-bottom: 0.65rem;
    font-size: 0.68rem;
  }
  .hero-title {
    font-size: clamp(1.8rem, 8vw, 2.5rem);
    text-align: center;
    align-items: center;
    margin-bottom: 0.65rem;
  }
  .hero-title__line {
    text-align: center;
  }
  .hero-subtitle {
    display: block;
    text-align: center;
    margin: 0 auto 1.35rem;
    font-size: clamp(0.82rem, 3.4vw, 0.95rem);
    line-height: 1.5;
    max-width: 440px;
    color: rgba(255, 255, 255, 0.85);
  }
  .hero-btns {
    flex-direction: row;
    justify-content: center;
    width: 100%;
    gap: 0.75rem;
  }
  .hero-btn-primary,
  .hero-btn-ghost {
    flex: 1;
    min-width: 130px;
    padding: 0.8rem 1rem;
    font-size: 0.85rem;
    display: inline-flex;
    justify-content: center;
  }
  .hero-nav {
    display: none;
  }
  .hero-progress {
    left: 50%;
    transform: translateX(-50%);
    justify-content: center;
    bottom: 12px;
  }
  .hero-stats-bar {
    position: relative;
    width: 100%;
  }
  .hero-stats-inner {
    flex-wrap: wrap;
    gap: 1rem 0;
  }
  .hero-stat {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    border-right: none;
    flex: 1 1 50%;
    padding: 1rem 0.5rem;
  }
  .hero-stat:nth-child(odd) {
    border-right: 1px solid rgba(255, 255, 255, 0.1);
  }
  .hero-stat:nth-last-child(-n + 2) {
    border-bottom: none;
  }
}

@media (max-width: 480px) {
  .hero-stat {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
    border-right: none !important;
    flex: 1 1 100%;
    padding: 1rem 1.5rem;
  }
  .hero-stat:last-child {
    border-bottom: none !important;
  }
}

@media (max-width: 380px) {
  .hero-btns {
    flex-direction: column;
    gap: 0.5rem;
  }
  .hero-btn-primary,
  .hero-btn-ghost {
    width: 100%;
  }
}
</style>
