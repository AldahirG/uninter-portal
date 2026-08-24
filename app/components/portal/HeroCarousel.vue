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
    eyebrow: "Universidad Internacional",
    title: "Forma tu futuro\nen UNINTER",
    subtitle:
      "Secundaria · Bachillerato · Licenciatura · Posgrado. Cuernavaca, Morelos.",
    image: "/images/hero/blur/1.jpg",
    cta: {
      label: "Solicitar información",
      href: "https://universidad.uninter.edu.mx/Admisiones",
    },
    ctaGhost: { label: "Ver oferta educativa", href: "#oferta" },
  },
  {
    id: 2,
    eyebrow: "Vida Universitaria",
    title: "Deporte, cultura\ny liderazgo",
    subtitle:
      "Más de 40 actividades anuales. Formación integral dentro y fuera del aula.",
    image: "/images/hero/blur/5.jpg",
    cta: { label: "Conocer más", href: "#vida" },
    ctaGhost: { label: "Ver eventos", href: "https://uninter.edu.mx/eventos/" },
  },
  {
    id: 3,
    eyebrow: "Spanish School",
    title: "Aprende español\nen México",
    subtitle:
      "Cursos intensivos para extranjeros. Cuernavaca, la ciudad de la eterna primavera.",
    image: "/images/hero/blur/6.jpg",
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
    eyebrow: "Eventos y Sesiones",
    title: "Conoce UNINTER\nen persona",
    subtitle:
      "Sesiones informativas presenciales y on demand. ¡Aparta tu lugar!",
    image: "/images/hero/blur/3.jpg",
    cta: {
      label: "Ver sesiones",
      href: "https://uninter.edu.mx/sesiones-informativas/",
    },
    ctaGhost: { label: "On Demand", href: "https://uninter.edu.mx/ondemand/" },
  },
];

const stats = [
  { value: "4,500+", label: "Egresados", icon: GraduationCap },
  { value: "30+", label: "Años", icon: Award },
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
          <img :src="slide.image" :alt="slide.title" class="hero-slide__img" />
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

/* Slide saliente: empieza a desvanecerse */
.hero-slide--prev {
  opacity: 0;
  z-index: 1;
}

/* Slide entrante: visible y encima */
.hero-slide--active {
  opacity: 1;
  pointer-events: auto;
  z-index: 2;
}

/* Imagen de fondo */
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
    rgba(10, 24, 50, 0.95) 0%,
    rgba(10, 24, 50, 0.6) 30%,
    transparent 40%
  );
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  mask-image: linear-gradient(to right, black 30%, transparent 40%);
  -webkit-mask-image: linear-gradient(to right, black 30%, transparent 40%);
}
.hero-slide__overlay2 {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(10, 24, 50, 0.65) 0%,
    transparent 40%
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
    min-height: 70vh;
    height: 70vh;
  }
  .hero-nav {
    display: none;
  }
  .hero-title {
    font-size: clamp(1.6rem, 7vw, 2.6rem);
  }
  .hero-subtitle {
    font-size: 0.85rem;
    margin-bottom: 1.25rem;
  }
  .hero-btn-primary,
  .hero-btn-ghost {
    font-size: 0.78rem;
    padding: 0.6rem 1.1rem;
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
  .hero-track {
    min-height: 70vh;
    height: 70vh;
  }
  .hero-subtitle {
    display: none;
  }
  .hero-btn-ghost {
    display: none;
  }
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
</style>
