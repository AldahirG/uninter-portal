<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

const slides = [
  {
    id: 1,
    title: 'Talleres Culturales y Deportivos',
    subtitle: 'Forma parte de nuestra vida universitaria',
    image: '/images/hero/talleres.jpg',
    ctaText: 'Más información',
    ctaLink: '#'
  },
  {
    id: 2,
    title: 'Licenciaturas Ejecutivas',
    subtitle: 'Estudia mientras trabajas',
    image: '/images/hero/ejecutivas.jpg',
    ctaText: 'Conoce nuestros programas',
    ctaLink: '#'
  },
  {
    id: 3,
    title: '23 Licenciaturas',
    subtitle: 'Programas diseñados para tu futuro',
    image: '/images/hero/licenciaturas.jpg',
    ctaText: 'Ver oferta educativa',
    ctaLink: '#oferta'
  }
]
</script>

<template>
  <section class="relative">
    <Swiper
      :modules="[Autoplay, Navigation, Pagination]"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :loop="true"
      :pagination="{ clickable: true }"
      navigation
      class="hero-swiper"
    >
      <SwiperSlide
        v-for="slide in slides"
        :key="slide.id"
      >
        <div
          class="relative h-105 md:h-130 lg:h-150 flex items-center justify-center"
        >
          <!-- Imagen -->
          <img
            :src="slide.image"
            :alt="slide.title"
            class="absolute inset-0 w-full h-full object-cover"
          />

          <!-- Overlay -->
          <div class="absolute inset-0 bg-black/50"></div>

          <!-- Contenido -->
          <div class="relative z-10 text-center text-white max-w-3xl px-6">
            <h1 class="text-3xl md:text-5xl font-bold mb-4">
              {{ slide.title }}
            </h1>

            <p class="text-lg md:text-xl mb-8">
              {{ slide.subtitle }}
            </p>

            <NuxtLink
              :to="slide.ctaLink"
              class="btn-primary inline-flex"
            >
              {{ slide.ctaText }}
            </NuxtLink>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style scoped>
.hero-swiper :deep(.swiper-pagination-bullet) {
  background: white;
  opacity: 0.6;
}

.hero-swiper :deep(.swiper-pagination-bullet-active) {
  opacity: 1;
}
</style>
