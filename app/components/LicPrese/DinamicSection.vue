
<script setup lang="ts">
import { Globe, Users, Palette, ArrowRight } from "lucide-vue-next";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  {
    id: 1,
    title: "VIDA UNINTER",
    icon: Globe,
    text: "A través de actividades educativas, sociales, culturales, deportivas y de servicio a la comunidad, podrás adquirir una formación multicultural conviviendo con estudiantes nacionales y extranjeros. Podrás participar en viajes, congresos, conferencias, teatro, actividades altruistas y equipos deportivos, entre muchas otras cosas.",
    image: "/images/heroMobile/8.jpg"
  },
  {
    id: 2,
    title: "INTERNACIONALIZACIÓN Y MOVILIDAD",
    icon: Globe,
    text: "Intercambios con más de 130 Universidades alrededor del Mundo y un Ambiente Multicultural con Alumnos provenientes de 25 Países.",
    image: "/images/heroMobile/12.jpg",
    btn: {
      label: "Conoce más",
      link: "https://universidad.uninter.edu.mx/Internacionalizaci%C3%B3n"
    }
  },
  {
    id: 3,
    title: "ENLACE PROFESIONAL",
    icon: Users,
    text: "Convenios con más de 1,500 Empresas Nacionales e Internacionales para tu Desarrollo y Desempeño Profesional durante toda la licenciatura.",
    image: "/images/heroMobile/10.jpg",
    btn: {
      label: "Ver convenios",
      link: "#"
    }
  },
  {
    id: 4,
    title: "TALLERES DEPORTIVOS Y CULTURALES",
    icon: Palette,
    links: [
      { label: "Equipo de Fútbol Americano - Legionarios", href: "#" },
      { label: "Blog de Difusión Cultural", href: "#" },
      { label: "Blog de Filarmónica", href: "#" },
      { label: "Blog de Cheer Dance", href: "#" }
    ],
    image: "/images/heroMobile/11.jpg"
  }
];

const modules = [Autoplay, Pagination];
</script>

<template>
  <section class="info-carousel-section">
    <div class="uninter-container">
      <div class="carousel-header">
        <h2 class="uninter-section-title">Vive la <em>Experiencia</em></h2>
      </div>

      <Swiper
        :modules="modules"
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
              <img :src="slide.image" :alt="slide.title" class="info-card__img" />
            </div>
            <div class="info-card__content">
              <div class="info-card__icon-box">
                <component :is="slide.icon" :size="28" />
              </div>
              <h3 class="info-card__title">{{ slide.title }}</h3>
              
              <p v-if="slide.text" class="info-card__text">{{ slide.text }}</p>
              
              <ul v-if="slide.links" class="info-card__links">
                <li v-for="(link, idx) in slide.links" :key="idx">
                  <a :href="link.href" class="info-link">
                    <span class="info-link__bullet">•</span>
                    {{ link.label }}
                  </a>
                </li>
              </ul>

              <div v-if="slide.btn" class="info-card__action">
                <a :href="slide.btn.link" class="info-btn">
                  {{ slide.btn.label }} <ArrowRight :size="16" />
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
.uninter-container{margin:0 auto;max-width:1100px;padding:0 1.5rem}
.info-carousel-section{background-color:#f8f9fb;padding:5rem 0 6rem}
.carousel-header{margin-bottom:2.5rem;text-align:center}
.uninter-section-title{color:#0f3c61;font-family:var(--font-serif,Georgia,serif);font-size:clamp(2rem,4vw,3rem);font-weight:700;margin:0}
.uninter-section-title em{color:#0073b4;font-style:italic}
:deep(.info-swiper) { padding-bottom: 50px; }
:deep(.info-swiper .swiper-wrapper) { align-items: stretch; }
:deep(.info-swiper .swiper-slide) { height: auto; }
.info-card{background:#fff;border:1px solid #e2e8f0;border-radius:16px;box-shadow:0 10px 25px -5px #0000001a;display:flex;height:100%;overflow:hidden}
.info-card__img-wrapper{flex:1 1 50%;overflow:hidden;position:relative}
.info-card__img{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}
.info-card__content{align-items:flex-start;display:flex;flex:1 1 50%;flex-direction:column;justify-content:center;padding:3.5rem}
.info-card__icon-box{align-items:center;background-color:#f0f6fc;border-radius:12px;color:#0073b4;display:flex;height:48px;justify-content:center;margin-bottom:1.5rem;width:48px}
.info-card__title{color:#003b5c;font-size:1.25rem;font-weight:800;line-height:1.3;margin:0 0 1rem}
.info-card__text{color:#475569;font-size:.95rem;line-height:1.6;margin:0 0 1.5rem}
.info-card__links{display:flex;flex-direction:column;gap:.75rem;list-style:none;margin:0 0 1.5rem;padding:0}
.info-link{align-items:flex-start;color:#475569;display:flex;font-size:.95rem;font-weight:500;gap:.5rem;text-decoration:none;transition:color .2s}
.info-link:hover{color:#0073b4}
.info-link__bullet{color:#0073b4;font-size:1.2rem;line-height:.8}
.info-card__action{margin-top:auto}
.info-btn{align-items:center;background-color:#0073b4;border-radius:8px;color:#fff;display:inline-flex;font-size:.85rem;font-weight:700;gap:6px;padding:.75rem 1.5rem;text-decoration:none;transition:background-color .2s,transform .2s}
.info-btn:hover{background-color:#003b5c;transform:translateY(-2px)}
:deep(.info-swiper .swiper-pagination) { bottom: 0; }
:deep(.info-swiper .swiper-pagination-bullet) { background-color: #cbd5e1; height: 8px; opacity: 1; transition: all .3s ease; width: 8px; }
:deep(.info-swiper .swiper-pagination-bullet-active) { background-color: #0073b4; border-radius: 8px; width: 24px; }
@media(max-width:900px){.info-card{flex-direction:column;height:auto}
.info-card__img-wrapper{flex:none;height:220px}
.info-card__content{flex:none;padding:2.5rem 2rem}

}
</style>