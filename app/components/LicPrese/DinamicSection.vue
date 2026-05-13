<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import {
  Globe,
  Plane,
  BriefcaseBusiness,
  Palette,
  ChevronRight,
} from "lucide-vue-next";

const slides = [
  {
    id: 1,
    title: "VIDA UNINTER",
    icon: Globe,
    text: "A través de actividades educativas, sociales, culturales, deportivas y de servicio a la comunidad, podrás adquirir una formación multicultural conviviendo con estudiantes nacionales y extranjeros. Podrás participar en viajes, congresos, conferencias, teatro, actividades altruistas y equipos deportivos, entre muchas otras cosas.",
    image: "/images/hero/licenciaturas.jpg",
  },
  {
    id: 2,
    title: "INTERNACIONALIZACIÓN Y MOVILIDAD",
    icon: Plane,
    text: "Intercambios con más de 130 Universidades alrededor del Mundo y un Ambiente Multicultural con Alumnos provenientes de 25 Países.",
    image: "/images/hero/ejecutivas.jpg",
    btn: {
      label: "Conoce más",
      link: "https://universidad.uninter.edu.mx/Internacionalizaci%C3%B3n",
    },
  },
  {
    id: 3,
    title: "ENLACE PROFESIONAL",
    icon: BriefcaseBusiness,
    text: "Convenios con más de 1,500 Empresas Nacionales e Internacionales para tu Desarrollo y Desempeño Profesional durante toda la licenciatura.",
    image: "/images/hero/talleres.jpg",
    btn: { label: "Ver convenios", link: "#" },
  },
  {
    id: 4,
    title: "TALLERES DEPORTIVOS Y CULTURALES",
    icon: Palette,
    links: [
      { label: "Equipo de Fútbol Americano - Legionarios", href: "#" },
      { label: "Blog de Difusión Cultural", href: "#" },
      { label: "Blog de Filarmónica", href: "#" },
      { label: "Blog de Cheer Dance", href: "#" },
    ],
    image: "/images/hero/licenciaturasPresenciales.jpg",
  },
];
</script>

<template>
  <section class="info-carousel-section">
    <div class="uninter-container">
      <div class="carousel-header">
        <h2 class="uninter-section-title">Vive la <em>Experiencia</em></h2>
      </div>

      <Swiper
        :modules="[Autoplay, Pagination]"
        :slides-per-view="1"
        :space-between="30"
        :autoplay="{ delay: 6000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        :loop="true"
        :speed="800"
        class="info-swiper"
      >
        <SwiperSlide v-for="slide in slides" :key="slide.id">
          <div class="info-card">
            <div class="info-card__img-wrapper">
              <img
                :src="slide.image"
                :alt="slide.title"
                class="info-card__img"
              />
            </div>

            <div class="info-card__content">
              <div class="info-card__icon-box">
                <component :is="slide.icon" :size="28" />
              </div>

              <h3 class="info-card__title">{{ slide.title }}</h3>

              <p v-if="slide.text" class="info-card__text">{{ slide.text }}</p>

              <ul v-if="slide.links" class="info-card__links">
                <li v-for="(link, i) in slide.links" :key="i">
                  <a :href="link.href" class="info-link">
                    <span class="info-link__bullet">•</span> {{ link.label }}
                  </a>
                </li>
              </ul>

              <div v-if="slide.btn" class="info-card__action">
                <a :href="slide.btn.link" class="info-btn">
                  {{ slide.btn.label }} <ChevronRight :size="16" />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
.uninter-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.info-carousel-section {
  padding: 5rem 0 6rem 0;
  background-color: #f8f9fb;
}

.carousel-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.uninter-section-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  color: #0f3c61;
  margin: 0;
}
.uninter-section-title em {
  color: #1565c0;
  font-style: italic;
}

.info-swiper {
  padding-bottom: 50px;
}
.info-swiper :deep(.swiper-wrapper) {
  align-items: stretch;
}
.info-swiper :deep(.swiper-slide) {
  height: auto;
}

.info-card {
  display: flex;
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
  height: 100%;
}

.info-card__img-wrapper {
  flex: 1 1 50%;
  position: relative;
  overflow: hidden;
}
.info-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info-card__content {
  flex: 1 1 50%;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.info-card__icon-box {
  width: 48px;
  height: 48px;
  background-color: #f0f6fc;
  color: #1565c0;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.info-card__title {
  font-size: 1.25rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 1rem 0;
  line-height: 1.3;
}

.info-card__text {
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
}

.info-card__links {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.info-link {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  color: #475569;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: color 0.2s;
}
.info-link:hover {
  color: #1565c0;
}
.info-link__bullet {
  color: #1565c0;
  font-size: 1.2rem;
  line-height: 0.8;
}

.info-card__action {
  margin-top: auto;
}

.info-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background-color: #1565c0;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  transition:
    background-color 0.2s,
    transform 0.2s;
}
.info-btn:hover {
  background-color: #0f3c61;
  transform: translateY(-2px);
}

.info-swiper :deep(.swiper-pagination) {
  bottom: 0px;
}
.info-swiper :deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  background-color: #cbd5e1;
  opacity: 1;
  transition: all 0.3s ease;
}
.info-swiper :deep(.swiper-pagination-bullet-active) {
  background-color: #1565c0;
  width: 24px;
  border-radius: 8px;
}

@media (max-width: 900px) {
  .info-card {
    flex-direction: column;
    height: auto;
  }
  .info-card__img-wrapper {
    height: 220px;
    flex: none;
  }
  .info-card__content {
    padding: 2.5rem 2rem;
    flex: none;
  }
}
</style>
