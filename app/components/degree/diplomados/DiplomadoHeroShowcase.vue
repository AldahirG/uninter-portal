<script setup lang="ts">
import {
  Info,
  FileText,
  Percent,
  Clock,
  Users,
  MapPin,
  Globe,
  ShieldCheck,
} from "lucide-vue-next";

interface CareerData {
  id?: string;
  slug?: string;
  name: string;
  description: string;
  imageHorizontal?: string;
  imageVertical?: string;
  duration?: string;
  programType?: string;
}

const props = withDefaults(
  defineProps<{
    data: CareerData;
    duration?: string;
    programType?: string;
  }>(),
  {
    duration: "8 Semestres",
    programType: "Licenciatura",
  }
);

const getDegreePrefix = (name?: string) => {
  if (!name) return "LICENCIATURA";
  const upper = name.toUpperCase();
  if (upper.startsWith("INGENIERÍA") || upper.startsWith("INGENIERIA")) return "INGENIERÍA";
  return "LICENCIATURA";
};
</script>

<template>
  <div class="degree-hero-wrapper">
    <section class="degree-hero">
      <!-- FONDO RESPONSIVO -->
      <div class="degree-hero__bg">
        <picture v-if="data?.imageHorizontal && data?.imageVertical" class="degree-hero__picture">
          <source
            media="(max-width: 768px)"
            :srcset="encodeURI(`/images/WebVertical/${data.imageVertical}`)"
          />
          <img
            :src="encodeURI(`/images/WebHorizontal/${data.imageHorizontal}`)"
            :alt="data.name"
            class="degree-hero__img"
          />
        </picture>
        <img
          v-else
          :src="encodeURI(`/images/WebHorizontal/${data?.imageHorizontal || 'derrcho h.webp'}`)"
          :alt="data?.name"
          class="degree-hero__img"
        />

        <div class="degree-hero__overlay"></div>
        <div class="degree-hero__overlay2"></div>
      </div>

      <!-- CONTENIDO DEL HERO -->
      <div class="degree-container degree-hero__content">
        <div class="degree-hero__inner">
          <!-- Badge -->
          <div class="degree-hero__badge-wrap">
            <span class="degree-hero__badge">¡Becas Vigentes!</span>
          </div>

          <!-- Eyebrow -->
          <p class="degree-hero__eyebrow">
            {{ getDegreePrefix(data?.name) }} EN
          </p>

          <!-- Título principal -->
          <h1 class="degree-hero__title">
            {{ data?.name }}
          </h1>

          <!-- Descripción -->
          <p class="degree-hero__desc">
            {{ data?.description }}
          </p>

          <!-- Botones de acción tipo tarjeta -->
          <div class="degree-hero__ctas">
            <a href="#admision" class="degree-btn-card">
              <div class="btn-icon">
                <Info :size="24" />
              </div>
              <span>Más información</span>
            </a>
            <a href="#plan-estudios" class="degree-btn-card">
              <div class="btn-icon">
                <FileText :size="24" />
              </div>
              <span>Ver Plan de estudio</span>
            </a>
            <a href="#beca" class="degree-btn-card">
              <div class="btn-icon">
                <Percent :size="24" />
              </div>
              <span>Calcula tu beca</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- BARRA DE CARACTERÍSTICAS (LIQUID GLASS AZUL) -->
    <div class="degree-hero__stats-bar">
      <div class="degree-container degree-hero__stats-inner">
        <div class="degree-stat">
          <div class="degree-stat__icon">
            <Clock :size="26" />
          </div>
          <div class="degree-stat__text">
            <span class="degree-stat__value">{{ duration || '8 Semestres' }}</span>
            <span class="degree-stat__label">Duración</span>
          </div>
        </div>

        <div class="degree-stat">
          <div class="degree-stat__icon">
            <Users :size="26" />
          </div>
          <div class="degree-stat__text">
            <span class="degree-stat__value">Presencial</span>
            <span class="degree-stat__label">Formato</span>
          </div>
        </div>

        <div class="degree-stat">
          <div class="degree-stat__icon">
            <MapPin :size="26" />
          </div>
          <div class="degree-stat__text">
            <span class="degree-stat__value">Cuernavaca</span>
            <span class="degree-stat__label">Ubicación</span>
          </div>
        </div>

        <div class="degree-stat">
          <div class="degree-stat__icon">
            <Globe :size="26" />
          </div>
          <div class="degree-stat__text">
            <span class="degree-stat__value">Inglés / Francés</span>
            <span class="degree-stat__label">Idioma</span>
          </div>
        </div>

        <div class="degree-stat">
          <div class="degree-stat__icon">
            <ShieldCheck :size="26" />
          </div>
          <div class="degree-stat__text">
            <span class="degree-stat__value">SEP RVOE</span>
            <span class="degree-stat__label">Validez</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.degree-hero-wrapper {
  background-color: #07192e;
  position: relative;
  width: 100%;
}

.degree-container {
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1.5rem;
  width: 100%;
}

/* ═══ HERO SECTION ═══ */
.degree-hero {
  align-items: center;
  background: transparent;
  display: flex;
  height: clamp(520px, 68vh, 680px);
  overflow: hidden;
  position: relative;
}

.degree-hero__bg {
  inset: 0;
  position: absolute;
}

.degree-hero__picture,
.degree-hero__img {
  height: 100%;
  object-fit: cover;
  object-position: center top;
  width: 100%;
}

/* Capa de contraste vertical general */
.degree-hero__overlay {
  background: linear-gradient(
    180deg,
    rgba(7, 25, 46, 0.45) 0%,
    rgba(7, 25, 46, 0.15) 50%,
    rgba(7, 25, 46, 0.3) 100%
  );
  inset: 0;
  position: absolute;
}

/* Blur y gradiente horizontal (de izquierda a derecha para no tapar la foto derecha) */
.degree-hero__overlay2 {
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  background: linear-gradient(
    90deg,
    rgba(7, 25, 46, 0.96) 0%,
    rgba(7, 25, 46, 0.8) 35%,
    rgba(7, 25, 46, 0.2) 50%,
    transparent 65%
  );
  inset: 0;
  -webkit-mask-image: linear-gradient(90deg, #000 0%, #000 35%, transparent 60%);
  mask-image: linear-gradient(90deg, #000 0%, #000 35%, transparent 60%);
  position: absolute;
}

/* Contenido */
.degree-hero__content {
  position: relative;
  width: 100%;
  z-index: 3;
}

.degree-hero__inner {
  max-width: 620px;
}

.degree-hero__badge-wrap {
  margin-bottom: 1.25rem;
}

.degree-hero__badge {
  display: inline-block;
  background: rgba(245, 158, 11, 0.15);
  border: 1px solid rgba(245, 158, 11, 0.5);
  color: #fde68a;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  padding: 0.35rem 0.9rem;
  border-radius: 6px;
  text-transform: uppercase;
}

.degree-hero__eyebrow {
  color: #ffffffb3;
  font-size: 0.82rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  margin: 0 0 0.4rem 0;
  text-transform: uppercase;
}

.degree-hero__title {
  color: #ffffff;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2.8rem, 5.5vw, 4.5rem);
  font-weight: 800;
  line-height: 1.08;
  margin: 0 0 1.25rem 0;
  letter-spacing: -0.01em;
  text-shadow: 0 4px 24px rgba(0, 0, 0, 0.5);
}

.degree-hero__desc {
  color: #ffffffc4;
  font-size: clamp(0.9rem, 1.3vw, 1rem);
  line-height: 1.6;
  margin: 0 0 2rem 0;
  max-width: 560px;
}

/* Botones de acción tipo tarjeta */
.degree-hero__ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.degree-btn-card {
  align-items: center;
  background: rgba(7, 25, 46, 0.45);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 12px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  font-size: 0.85rem;
  font-weight: 600;
  gap: 0.45rem;
  justify-content: center;
  min-width: 125px;
  padding: 0.85rem 1.4rem;
  text-decoration: none;
  transition: all 0.25s ease;
}

.degree-btn-card:hover {
  background: rgba(96, 165, 250, 0.2);
  border-color: #60a5fa;
  color: #60a5fa;
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(96, 165, 250, 0.25);
}

.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
}

/* ═══ STATS BAR (LIQUID GLASS AZUL) ═══ */
.degree-hero__stats-bar {
  backdrop-filter: blur(16px) saturate(150%);
  -webkit-backdrop-filter: blur(16px) saturate(150%);
  background-color: #07192ed9;
  background-image: radial-gradient(
    circle at 50% 50%,
    rgba(56, 189, 248, 0.15) 0,
    transparent 60%
  );
  background-attachment: fixed;
  border-top: 1px solid rgba(96, 165, 250, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  padding: 1.25rem 0;
  position: relative;
  z-index: 10;
}

.degree-hero__stats-inner {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
}

.degree-stat {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;
  padding: 0 1rem;
  border-right: 1px solid rgba(96, 165, 250, 0.3);
}

.degree-stat:last-child {
  border-right: none;
}

.degree-stat__icon {
  color: #60a5fa;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.degree-stat__text {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.degree-stat__value {
  color: #ffffff;
  font-size: 0.92rem;
  font-weight: 700;
  line-height: 1.2;
}

.degree-stat__label {
  color: #94a3b8;
  font-size: 0.72rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* ═══ RESPONSIVE ═══ */
@media (max-width: 960px) {
  .degree-hero__stats-inner {
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem 0;
  }
  .degree-stat:nth-child(3n) {
    border-right: none;
  }
}

@media (max-width: 768px) {
  .degree-hero {
    height: auto;
    min-height: clamp(500px, 85vh, 800px);
    padding-top: 5.5rem;
    padding-bottom: 3rem;
  }
  .degree-hero__overlay2 {
    background: linear-gradient(
      180deg,
      rgba(7, 25, 46, 0.92) 0%,
      rgba(7, 25, 46, 0.8) 60%,
      rgba(7, 25, 46, 0.95) 100%
    );
    -webkit-mask-image: none;
    mask-image: none;
  }
  .degree-hero__stats-inner {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem 0;
  }
  .degree-stat:nth-child(2n) {
    border-right: none;
  }
  .degree-hero__ctas {
    gap: 0.75rem;
  }
  .degree-btn-card {
    flex: 1 1 calc(50% - 0.5rem);
    min-width: 110px;
    padding: 0.75rem 1rem;
  }
}
</style>
