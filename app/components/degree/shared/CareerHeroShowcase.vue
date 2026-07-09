<script setup lang="ts">
import { defineProps } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade } from "swiper/modules";

// Estilos de Swiper necesarios
import "swiper/css";
import "swiper/css/effect-fade";

// Asegúrate de tener instalada lucide-vue-next
import {
  FileDown,
  ArrowRight,
  Trophy,
  Clock,
  MapPin,
  BookOpen,
  UserCheck,
  Briefcase,
  Globe,
  Award,
  MonitorPlay
} from "lucide-vue-next";

// Props dinámicos
const props = defineProps<{
  data: {
    slug?: string;
    name: string;
    tagline: string;
    description: string;
    ingreso: string;
    egreso: string;
  }
}>();

// Datos para la barra de estadísticas inferior (estilo diplomados)
const stats = [
  { value: "8 Sem.",    label: "Plan Semestral" },
  { value: "SEP RVOE",  label: "Validez Oficial" },
  { value: "Presencial",label: "Modalidad" },
  { value: "Global",    label: "Doble Titulación" },
];

// Carrusel de imágenes de fondo (podrían ser dinámicas después)
const backgroundImages = [
  "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2000",
  "/images/careers/comunicacion-3.jpg",
];

// Función para darle formato al tagline (acentuar la última palabra)
const formatTagline = (tagline: string) => {
  if (!tagline) return "";
  const words = tagline.split(" ");
  const lastWord = words.pop();
  return `${words.join(" ")} <em class="slogan-accent">${lastWord}</em>`;
};
</script>

<template>
  <header class="career-hero-section">
    <!-- FONDO CINEMÁTICO CON ACETERNITY SPOTLIGHT -->
    <div class="hero-bg-wrapper">
      <!-- Swiper para fondos normales -->
      <Swiper
        v-if="data?.slug !== 'comunicacion'"
        :modules="[Autoplay, EffectFade]"
        effect="fade"
        :fade-effect="{ crossFade: true }"
        :slides-per-view="1"
        :autoplay="{ delay: 6000, disableOnInteraction: false }"
        :loop="true"
        :speed="1500"
        class="bg-swiper"
      >
        <SwiperSlide v-for="(img, index) in backgroundImages" :key="index">
          <div class="bg-slide">
            <img :src="img" alt="Estudiantes UNINTER" class="bg-image" />
            <div class="bg-overlay"></div>
          </div>
        </SwiperSlide>
      </Swiper>

      <!-- Fondo de patrón repetido para Comunicación -->
      <div v-else class="bg-pattern-wrapper">
        <div class="bg-overlay"></div>
      </div>

      <!-- EFECTO SPOTLIGHT ACETERNITY -->
      <div class="aceternity-spotlight"></div>
    </div>

    <!-- ELEMENTOS DECO ESTILO DIPLOMADOS -->
    <div class="hero-deco hero-deco--tl" aria-hidden="true"><BookOpen :size="34" /></div>
    <div class="hero-deco hero-deco--tr" aria-hidden="true"><Award :size="30" /></div>
    <div class="hero-deco hero-deco--br" aria-hidden="true"><Briefcase :size="28" /></div>

    <div class="uninter-container">
      <div class="hero-content-grid">
        <!-- TARJETA PRINCIPAL (Izquierda) -->
        <div class="career-info-card punch-entrance sweep-diagonal">
          <div class="sweep-background"></div>

          <div class="card-content">
            <div class="card-header">
              <span class="eyebrow">Licenciatura en</span>
              <h1 class="career-title">{{ data?.name || 'Cargando...' }}</h1>
              <span class="rvoe-badge">RVOE Autorizado Federalmente</span>
            </div>

            <h2 class="career-slogan" v-html="formatTagline(data?.tagline)"></h2>

            <p class="career-description">
              {{ data?.description }}
            </p>

            <div class="pill-tags">
              <div class="pill">
                <Clock :size="16" class="pill-icon" />
                <span>8 Semestres</span>
              </div>
              <div class="pill">
                <MapPin :size="16" class="pill-icon" />
                <span>Presencial</span>
              </div>
            </div>

            <div class="hero-actions">
              <a href="#admision" class="btn-primary">
                Solicitar Admisión <ArrowRight :size="18" class="btn-icon" />
              </a>
              <a href="#" class="btn-outline">
                <FileDown :size="18" /> Folleto Digital
              </a>
            </div>

            <div class="quick-access-bar">
              <a href="#perfil-ingreso" class="quick-btn">
                <UserCheck :size="20" class="quick-icon" />
                <span>Perfil de Ingreso</span>
              </a>
              <a href="#plan-estudios" class="quick-btn">
                <BookOpen :size="20" class="quick-icon" />
                <span>Plan de Estudios</span>
              </a>
              <a href="#beca" class="quick-btn">
                <Award :size="20" class="quick-icon" />
                <span>Obtener Beca</span>
              </a>
            </div>
          </div>
        </div>

        <!-- PROPUESTA DE VALOR Y RANKING (Derecha) -->
        <div class="hero-visuals">
          <div class="benefits-glass-card float-entrance stagger-1">
            <h3 class="benefits-title">¿Por qué en UNINTER?</h3>
            <ul class="benefits-list">
              <li>
                <div class="icon-box"><MonitorPlay :size="20" /></div>
                <span>Instalaciones de primer nivel</span>
              </li>
              <li>
                <div class="icon-box"><Briefcase :size="20" /></div>
                <span>Prácticas profesionales garantizadas</span>
              </li>
              <li>
                <div class="icon-box"><Globe :size="20" /></div>
                <span>Certificaciones internacionales</span>
              </li>
            </ul>
          </div>

          <div class="ranking-float-badge float-entrance accent-border stagger-2">
            <div class="ranking-icon-wrap">
              <Trophy :size="32" stroke-width="1.5" />
            </div>
            <div class="ranking-text">
              <span class="ranking-top">Top Ranking 2024</span>
              <strong>Mejores Universidades</strong>
              <span class="ranking-source">El Universal • 15° Vez Consecutiva</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- BARRA DE ESTADÍSTICAS ESTILO DIPLOMADOS -->
    <div class="hero-stats-bar">
      <div class="uninter-container stats-inner">
        <div v-for="stat in stats" :key="stat.label" class="hero-stat">
          <span class="hero-stat__value">{{ stat.value }}</span>
          <span class="hero-stat__label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* =========================================================
   CONTENEDOR BASE Y FONDO CINEMÁTICO
========================================================= */
.career-hero-section {
  position: relative;
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  background-color: #0f3c61;
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
  overflow: hidden;
}

.uninter-container {
  max-width: 1350px;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  position: relative;
  z-index: 10;
}

.hero-bg-wrapper {
  position: absolute;
  inset: 0;
  z-index: 1;
}
.bg-swiper,
.bg-slide {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.05);
  animation: slowZoom 25s ease-in-out infinite alternate;
}
@keyframes slowZoom {
  0% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1.15);
  }
}

.bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(15, 60, 97, 0.85) 0%,
    rgba(15, 60, 97, 0.3) 100%
  );
  z-index: 1;
}

.bg-pattern-wrapper {
  position: absolute;
  inset: 0;
  background-image: url('/images/background/comunicacion-pattern.jpg');
  background-repeat: repeat;
  background-size: 240px;
  z-index: 1;
}

/* =========================================================
   ACETERNITY SPOTLIGHT (BLUE/WHITE BEAMS)
========================================================= */
.aceternity-spotlight {
  position: absolute;
  top: -30%;
  left: 50%;
  transform: translateX(-50%);
  width: 150vw;
  height: 150vh;
  background: radial-gradient(circle at top, rgba(255, 255, 255, 0.15) 0%, transparent 60%);
  animation: spotlightSway 10s ease-in-out infinite alternate;
  pointer-events: none;
  z-index: 2;
  mix-blend-mode: overlay;
}
@keyframes spotlightSway {
  0% { transform: translateX(-60%) rotate(-5deg); }
  100% { transform: translateX(-40%) rotate(5deg); }
}

/* =========================================================
   GRID PRINCIPAL
========================================================= */
.hero-content-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
}

/* =========================================================
   TARJETA PRINCIPAL (SWEEP DIAGONAL)
========================================================= */
.career-info-card {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  transition:
    transform 0.5s cubic-bezier(0.25, 1, 0.5, 1),
    box-shadow 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}

.punch-entrance {
  animation: fadeInUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
  opacity: 0;
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.sweep-diagonal {
  transform-style: preserve-3d;
}
.sweep-diagonal:hover {
  transform: translateY(-5px);
  box-shadow: 0 40px 70px -20px rgba(0, 0, 0, 0.4);
  border-color: rgba(255, 255, 255, 0.1);
}

.sweep-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  background: linear-gradient(135deg, #0f3c61, #1a4a75);
  transform: translateY(100%) skewY(-10deg);
  transform-origin: bottom left;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  z-index: 0;
}
.sweep-diagonal:hover .sweep-background {
  transform: translateY(-20%) skewY(0deg);
}

.card-content {
  position: relative;
  z-index: 1;
  padding: 3rem;
  transition: color 0.4s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Tipografía */
.card-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}
.eyebrow {
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #1565c0;
  margin-bottom: 0.5rem;
  transition: color 0.4s;
}
.career-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2.8rem, 4vw, 4rem);
  font-weight: 800;
  color: #0f3c61;
  line-height: 1;
  margin: 0 0 1rem 0;
  letter-spacing: -0.02em;
  transition: color 0.4s;
}
.rvoe-badge {
  display: inline-block;
  background: #f1f5f9;
  color: #475569;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  border: 1px solid #e2e8f0;
  transition: all 0.4s;
}

.career-slogan {
  font-size: 1.3rem;
  font-weight: 600;
  color: #1e293b;
  line-height: 1.3;
  margin: 0 0 1rem 0;
  transition: color 0.4s;
}
.slogan-accent {
  color: #1565c0;
  font-style: italic;
  font-family: var(--font-serif, Georgia, serif);
  font-weight: 800;
  transition: color 0.4s;
}
.career-description {
  font-size: 1rem;
  color: #475569;
  line-height: 1.6;
  margin: 0 0 2rem 0;
  transition: color 0.4s;
}

/* Inversión en Hover */
.sweep-diagonal:hover .eyebrow {
  color: #fde68a;
}
.sweep-diagonal:hover .career-title {
  color: #ffffff;
}
.sweep-diagonal:hover .career-slogan {
  color: #f8fafc;
}
.sweep-diagonal:hover .slogan-accent {
  color: #d84315;
}
.sweep-diagonal:hover .career-description {
  color: #cbd5e1;
}
.sweep-diagonal:hover .rvoe-badge {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
}

/* Pill Tags */
.pill-tags {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}
.pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(15, 60, 97, 0.05);
  color: #0f3c61;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.85rem;
  border: 1px solid rgba(15, 60, 97, 0.1);
  transition: all 0.4s ease;
}
.pill-icon {
  color: #1565c0;
  transition: color 0.4s ease;
}
.sweep-diagonal:hover .pill {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
}
.sweep-diagonal:hover .pill-icon {
  color: #fde68a;
}

/* Botones Principales */
.hero-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}
.btn-primary {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #d84315;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(216, 67, 21, 0.3);
  overflow: hidden;
}
.btn-primary:hover {
  background-color: #ea580c;
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(216, 67, 21, 0.5);
}
.btn-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: transparent;
  color: #1565c0;
  border: 2px solid #1565c0;
  font-size: 0.95rem;
  font-weight: 700;
  padding: 0.95rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.4s ease;
}
.btn-outline:hover {
  background-color: #1565c0;
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(21, 101, 192, 0.2);
}
.sweep-diagonal:hover .btn-outline {
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.5);
}
.sweep-diagonal:hover .btn-outline:hover {
  background-color: #ffffff;
  color: #0f3c61;
  border-color: #ffffff;
}

/* =========================================================
   NUEVO: QUICK ACCESS BAR (ATAJOS TIPO UVM)
========================================================= */
.quick-access-bar {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: auto; /* Lo empuja al fondo de la tarjeta */
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
  transition: border-color 0.4s ease;
}

.quick-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1rem 0.5rem;
  text-decoration: none;
  color: #475569;
  transition: all 0.3s ease;
  text-align: center;
}
.quick-icon {
  color: #1565c0;
  transition: all 0.3s ease;
}
.quick-btn span {
  font-size: 0.8rem;
  font-weight: 700;
  line-height: 1.2;
}

/* Hover del Atajo */
.quick-btn:hover {
  background: #ffffff;
  border-color: #1565c0;
  color: #0f3c61;
  transform: translateY(-4px);
  box-shadow: 0 10px 20px -5px rgba(21, 101, 192, 0.15);
}
.quick-btn:hover .quick-icon {
  color: #d84315;
  transform: scale(1.1);
}

/* Inversión de Atajos en Sweep Hover */
.sweep-diagonal:hover .quick-access-bar {
  border-top-color: rgba(255, 255, 255, 0.2);
}
.sweep-diagonal:hover .quick-btn {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.2);
  color: #cbd5e1;
}
.sweep-diagonal:hover .quick-btn .quick-icon {
  color: #fde68a;
}
.sweep-diagonal:hover .quick-btn:hover {
  background: #ffffff;
  color: #0f3c61;
  border-color: #ffffff;
}
.sweep-diagonal:hover .quick-btn:hover .quick-icon {
  color: #d84315;
}

/* =========================================================
   LADO DERECHO: BENEFICIOS Y RANKING
========================================================= */
.hero-visuals {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 2rem;
  height: 100%;
}

.float-entrance {
  animation: scaleIn 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
  opacity: 0;
  transform: scale(0.9);
}
.stagger-1 {
  animation-delay: 0.3s;
}
.stagger-2 {
  animation-delay: 0.5s;
  animation-name: scaleInFloat;
}

@keyframes scaleIn {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes scaleInFloat {
  0% {
    opacity: 0;
    transform: scale(0.9) translateY(0);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

/* Tarjeta de Beneficios */
.benefits-glass-card {
  background: rgba(15, 60, 97, 0.85);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 2rem;
  border-radius: 20px;
  width: 100%;
  max-width: 450px;
  color: #ffffff;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
}
.benefits-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.3rem;
  margin: 0 0 1.5rem 0;
  color: #fde68a;
}
.benefits-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.benefits-list li {
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 0.95rem;
  font-weight: 500;
}
.icon-box {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #60a5fa;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Insignia de Ranking */
.ranking-float-badge {
  background: rgba(15, 60, 97, 0.85);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 1.5rem 1.8rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  color: #ffffff;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  transition:
    transform 0.4s ease,
    box-shadow 0.4s ease;
}
.accent-border::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 0%;
  height: 4px;
  background-color: #d84315;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  transform: translateX(-50%);
}
.accent-border:hover::before {
  width: 100%;
}
.accent-border:hover {
  transform: translateY(-5px);
  box-shadow: 0 35px 60px rgba(0, 0, 0, 0.5);
}

.ranking-icon-wrap {
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  box-shadow: 0 8px 20px rgba(245, 158, 11, 0.4);
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}
.accent-border:hover .ranking-icon-wrap {
  transform: scale(1.15) rotate(5deg);
}
.ranking-text {
  display: flex;
  flex-direction: column;
}
.ranking-top {
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #fde68a;
  margin-bottom: 2px;
}
.ranking-text strong {
  font-size: 1.15rem;
  font-family: var(--font-serif, Georgia, serif);
  line-height: 1.2;
}
.ranking-source {
  font-size: 0.75rem;
  color: #cbd5e1;
  margin-top: 4px;
}

/* =========================================================
   RESPONSIVE
========================================================= */
@media (max-width: 1024px) {
  .hero-content-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .hero-visuals {
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .benefits-glass-card,
  .ranking-float-badge {
    max-width: 100%;
    width: auto;
    flex: 1;
    min-width: 300px;
  }
}

@media (max-width: 768px) {
  .career-hero-section {
    min-height: auto;
    padding: 6rem 0 3rem 0;
  }
  .card-content {
    padding: 2rem 1.5rem;
  }
  .career-title {
    font-size: 2.2rem;
  }
  .hero-actions {
    flex-direction: column;
    width: 100%;
  }
  .btn-primary,
  .btn-outline {
    width: 100%;
  }
  .quick-access-bar {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
  .quick-btn {
    flex-direction: row;
    justify-content: flex-start;
    padding: 1rem 1.5rem;
  }
  .hero-visuals {
    flex-direction: column;
  }
  .benefits-glass-card,
  .ranking-float-badge {
    width: 100%;
    text-align: left;
  }
}

/* =========================================================
   BARRA DE ESTADÍSTICAS ESTILO DIPLOMADOS
========================================================= */
.hero-stats-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(15, 60, 97, 0.2);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 15;
}
.stats-inner {
  display: flex;
  align-items: stretch;
  padding: 0 !important;
}
.hero-stat {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 1.5rem;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  gap: 0.2rem;
}
.hero-stat:last-child {
  border-right: none;
}
.hero-stat__value {
  font-size: clamp(1.4rem, 2.5vw, 1.9rem);
  font-weight: 900;
  color: #fde68a;
  line-height: 1;
}
.hero-stat__label {
  font-size: 0.65rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  text-align: center;
}

/* =========================================================
   ELEMENTOS DECO ESTILO DIPLOMADOS
========================================================= */
.hero-deco {
  position: absolute;
  z-index: 5;
  opacity: 0.12;
  color: #ffffff;
  pointer-events: none;
}
.hero-deco--tl {
  top: 14%;
  left: 5%;
}
.hero-deco--tr {
  top: 10%;
  right: 8%;
}
.hero-deco--br {
  bottom: 25%;
  right: 12%;
}

@media (max-width: 768px) {
  .stats-inner {
    flex-wrap: wrap;
  }
  .hero-stat {
    flex: 1 1 50%;
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding: 1rem 0.5rem;
  }
  .hero-stat:nth-child(odd) {
    border-right: 1px solid rgba(255, 255, 255, 0.08);
  }
  .hero-stat:nth-last-child(-n+2) {
    border-bottom: none;
  }
  .hero-deco {
    display: none;
  }
}
</style>
