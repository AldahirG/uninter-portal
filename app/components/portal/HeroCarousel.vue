<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-vue-next'

const WA_URL = 'https://wa.me/5217776154241?text=Hola%20vengo%20de%20la%20p%C3%A1gina%20de%20Universidad%2C%20necesito%20m%C3%A1s%20informaci%C3%B3n%20%E2%9C%8C%EF%B8%8F.'

const DELAY = 5500
const activeIndex = ref(0)
const prevIndex   = ref<number | null>(null)
const animating   = ref(false)
let timer: ReturnType<typeof setTimeout> | null = null

const slides = [
  {
    id: 1,
    eyebrow: 'Universidad Internacional',
    title: 'Forma tu futuro\nen UNINTER',
    subtitle: 'Secundaria · Bachillerato · Licenciatura · Posgrado. Cuernavaca, Morelos.',
    image: '/images/hero/ejecutivas.jpg',
    cta:      { label: 'Solicitar información', href: 'https://universidad.uninter.edu.mx/Admisiones' },
    ctaGhost: { label: 'Ver oferta educativa',  href: '#oferta' },
  },
  {
    id: 2,
    eyebrow: 'Vida Universitaria',
    title: 'Deporte, cultura\ny liderazgo',
    subtitle: 'Más de 40 actividades anuales. Formación integral dentro y fuera del aula.',
    image: '/images/hero/licenciaturas.jpg',
    cta:      { label: 'Conocer más', href: '#vida' },
    ctaGhost: { label: 'Ver eventos',  href: 'https://uninter.edu.mx/eventos/' },
  },
  {
    id: 3,
    eyebrow: 'Spanish School',
    title: 'Aprende español\nen México',
    subtitle: 'Cursos intensivos para extranjeros. Cuernavaca, la ciudad de la eterna primavera.',
    image: '/images/hero/talleres.jpg',
    cta:      { label: 'Ver programa', href: 'https://spanishschool.uninter.edu.mx/' },
    ctaGhost: { label: 'Admissions',   href: 'https://spanishschool.uninter.edu.mx/Home' },
  },
  {
    id: 4,
    eyebrow: 'Eventos y Sesiones',
    title: 'Conoce UNINTER\nen persona',
    subtitle: 'Sesiones informativas presenciales y on demand. ¡Aparta tu lugar!',
    image: '/images/hero/ejecutivas.jpg',
    cta:      { label: 'Ver sesiones', href: 'https://uninter.edu.mx/sesiones-informativas/' },
    ctaGhost: { label: 'On Demand',    href: 'https://uninter.edu.mx/ondemand/' },
  },
]

const stats = [
  { value: '4,500+', label: 'Egresados' },
  { value: '30+',    label: 'Años' },
  { value: 'RVOE',   label: 'Acreditado SEP' },
  { value: 'ISO',    label: '9001:2015' },
]

function goTo(i: number) {
  if (animating.value || i === activeIndex.value) return
  animating.value = true
  prevIndex.value = activeIndex.value
  activeIndex.value = i
  resetTimer()
  setTimeout(() => {
    prevIndex.value = null
    animating.value = false
  }, 950)
}

function next() { goTo((activeIndex.value + 1) % slides.length) }
function prev() { goTo((activeIndex.value - 1 + slides.length) % slides.length) }

function resetTimer() {
  if (timer) clearTimeout(timer)
  timer = setTimeout(next, DELAY)
}

onMounted(() => resetTimer())
onUnmounted(() => { if (timer) clearTimeout(timer) })
</script>

<template>
  <section class="hero-section">

    <div class="hero-track">
      <div
        v-for="(slide, i) in slides"
        :key="slide.id"
        class="hero-slide"
        :class="{
          'hero-slide--active': activeIndex === i,
          'hero-slide--prev':   prevIndex   === i,
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
              <span v-for="(line, li) in slide.title.split('\n')" :key="li" class="hero-title__line">
                {{ line }}
              </span>
            </h1>
            <p class="hero-subtitle">{{ slide.subtitle }}</p>
            <div class="hero-btns">
              <a :href="slide.cta.href" target="_blank" class="hero-btn-primary">
                {{ slide.cta.label }} <ArrowRight :size="15" />
              </a>
              <a :href="slide.ctaGhost.href" class="hero-btn-ghost">
                {{ slide.ctaGhost.label }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Nav buttons -->
    <button class="hero-nav hero-nav--prev" @click="prev" aria-label="Anterior">
      <ChevronLeft :size="18" />
    </button>
    <button class="hero-nav hero-nav--next" @click="next" aria-label="Siguiente">
      <ChevronRight :size="18" />
    </button>

    <!-- Progress dots -->
    <div class="hero-progress uninter-container">
      <button
        v-for="(s, i) in slides" :key="s.id"
        class="hero-dot" :class="{ 'hero-dot--active': activeIndex === i }"
        @click="goTo(i)"
      />
    </div>

    <!-- Stats band -->
    <div class="hero-band">
      <div class="uninter-container hero-band__inner">
        <div v-for="(st, i) in stats" :key="st.label" class="hero-stat">
          <span class="hero-stat__val">{{ st.value }}</span>
          <span class="hero-stat__lbl">{{ st.label }}</span>
          <span v-if="i < stats.length - 1" class="hero-stat__sep"></span>
        </div>
      </div>
    </div>

  </section>
</template>

<style scoped>
.hero-section {
  --h: clamp(460px, 72vh, 680px);
  position: relative;
  overflow: hidden;
  background: #0F3C61;
}

/* ── Track: define la altura, todos los slides apilados dentro ── */
.hero-track {
  position: relative;
  height: var(--h);
}

/* Todos los slides absolutos, invisibles por default */
.hero-slide {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity .9s ease;
  z-index: 0;
}

/* Slide saliente: empieza a desvanecerse (z-index menor que activo) */
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

/* Kenburns solo en slide activo — se reinicia cada vez que entra */
.hero-slide--active .hero-slide__img {
  animation: kb 8s ease forwards;
}
@keyframes kb { from { transform: scale(1); } to { transform: scale(1.05); } }

.hero-slide__overlay  { position: absolute; inset: 0; background: linear-gradient(105deg, rgba(10,24,50,.88) 0%, rgba(10,24,50,.55) 50%, rgba(10,24,50,.15) 100%); }
.hero-slide__overlay2 { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,24,50,.65) 0%, transparent 55%); }

.hero-content { position: relative; z-index: 2; width: 100%; }
.hero-inner   { max-width: 580px; }

.hero-eyebrow { display: flex; align-items: center; gap: .625rem; font-size: .7rem; font-weight: 700; letter-spacing: .15em; text-transform: uppercase; color: #93c5fd; margin-bottom: 1rem; }
.hero-eyebrow__line { display: block; width: 24px; height: 2px; background: #93c5fd; flex-shrink: 0; }

.hero-title { display: flex; flex-direction: column; font-family: var(--font-serif, Georgia, serif); font-size: clamp(2rem, 5vw, 3.8rem); font-weight: 700; line-height: 1.08; color: #fff; margin: 0 0 1rem; letter-spacing: -.02em; }
.hero-title__line { display: block; }

.hero-subtitle { font-size: clamp(.88rem, 1.4vw, 1rem); color: rgba(255,255,255,.7); margin: 0 0 1.75rem; max-width: 460px; line-height: 1.65; }

.hero-btns { display: flex; gap: .75rem; flex-wrap: wrap; }
.hero-btn-primary { display: inline-flex; align-items: center; gap: .4rem; background: #0F3C61; color: #fff; font-size: .84rem; font-weight: 700; padding: .7rem 1.4rem; border-radius: 6px; text-decoration: none; border: 1px solid rgba(255,255,255,.2); transition: background .2s; }
.hero-btn-primary:hover { background: #1a5490; }
.hero-btn-ghost { display: inline-flex; align-items: center; font-size: .84rem; font-weight: 600; padding: .7rem 1.4rem; border-radius: 6px; text-decoration: none; border: 1px solid rgba(255,255,255,.3); color: #fff; transition: background .2s; }
.hero-btn-ghost:hover { background: rgba(255,255,255,.1); }

.hero-nav { position: absolute; top: calc(var(--h) / 2); transform: translateY(-50%); z-index: 20; width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.2); border-radius: 50%; color: #fff; cursor: pointer; backdrop-filter: blur(6px); transition: background .2s; }
.hero-nav:hover { background: rgba(255,255,255,.22); }
.hero-nav--prev { left: 1.25rem; }
.hero-nav--next { right: 1.25rem; }

.hero-progress { position: absolute; bottom: 60px; z-index: 20; display: flex; gap: 6px; }
.hero-dot { width: 24px; height: 3px; border-radius: 2px; border: none; background: rgba(255,255,255,.3); cursor: pointer; transition: width .3s, background .3s; padding: 0; }
.hero-dot--active { width: 44px; background: #93c5fd; }

.hero-band { position: relative; z-index: 20; background: #fff; border-top: 3px solid #0F3C61; }
.hero-band__inner { display: flex; align-items: center; padding: .875rem 0; gap: 0; flex-wrap: wrap; }
.hero-stat { display: flex; align-items: center; gap: 1.5rem; }
.hero-stat__val { font-family: var(--font-serif, Georgia, serif); font-size: 1.6rem; font-weight: 700; color: #0F3C61; line-height: 1; }
.hero-stat__lbl { font-size: .65rem; text-transform: uppercase; letter-spacing: .07em; color: #64748b; margin-top: 2px; margin-right: 1.5rem; }
.hero-stat__sep { width: 1px; height: 28px; background: #e2e8f0; margin-right: 1.5rem; }

@media (max-width: 768px) {
  .hero-section { --h: clamp(360px, 65vh, 520px); }
  .hero-nav { display: none; }
  .hero-title { font-size: clamp(1.6rem, 7vw, 2.6rem); }
  .hero-subtitle { font-size: .85rem; margin-bottom: 1.25rem; }
  .hero-btn-primary, .hero-btn-ghost { font-size: .78rem; padding: .6rem 1.1rem; }
  .hero-stat__val { font-size: 1.25rem; }
  .hero-stat__sep { display: none; }
}
@media (max-width: 480px) {
  .hero-section { --h: clamp(300px, 60vh, 440px); }
  .hero-subtitle { display: none; }
  .hero-btn-ghost { display: none; }
  .hero-band__inner { gap: 1rem; flex-wrap: wrap; justify-content: center; }
}
</style>