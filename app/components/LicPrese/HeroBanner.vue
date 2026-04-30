<script setup lang="ts">
const bannerData = {
  title: "INICIA TU PROCESO DE ADMISIÓN",
  image: "/images/hero/licenciaturasPresenciales.jpg",
};
</script>

<template>
  <section class="banner-section">
    <div class="banner-slide">
      <img
        :src="bannerData.image"
        :alt="bannerData.title"
        class="banner-slide__img"
      />

      <!-- Degradados para oscurecer la imagen y asegurar que el texto sea legible -->
      <div class="banner-slide__overlay"></div>
      <div class="banner-slide__overlay2"></div>

      <!-- Contenido sobrepuesto y centrado -->
      <div class="banner-content uninter-container">
        <div class="banner-inner">
          <h1 class="banner-title">
            <span
              v-for="(line, i) in bannerData.title.split('\n')"
              :key="i"
              class="banner-title__line"
            >
              {{ line }}
            </span>
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.uninter-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.banner-section {
  --h: clamp(380px, 50vh, 520px);
  position: relative;
  overflow: hidden;
  background: #0f3c61;
}

.banner-slide {
  position: relative;
  width: 100%;
  height: var(--h);
  display: flex;
  align-items: center;
}

.banner-slide__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: kb-static 12s ease-out forwards;
}

@keyframes kb-static {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.04);
  }
}

.banner-slide__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    105deg,
    rgba(10, 24, 50, 0.92) 0%,
    rgba(10, 24, 50, 0.65) 50%,
    rgba(10, 24, 50, 0.2) 100%
  );
}

.banner-slide__overlay2 {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(10, 24, 50, 0.7) 0%,
    transparent 60%
  );
}

/* --- CLASES DE CENTRADO --- */
.banner-content {
  position: relative;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: center; /* Centra horizontalmente el contenedor interior */
}

.banner-inner {
  max-width: 800px;
  width: 100%;
  text-align: center; /* Centra el texto */
}

.banner-title {
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra las líneas divididas por \n */
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2.2rem, 5vw, 4rem);
  font-weight: 700;
  line-height: 1.08;
  color: #fff;
  margin: 0;
  letter-spacing: -0.02em;
}

.banner-title__line {
  display: block;
}

/* --- RESPONSIVE --- */
@media (max-width: 768px) {
  .banner-section {
    --h: clamp(320px, 50vh, 420px);
  }
  .banner-title {
    font-size: clamp(1.8rem, 8vw, 2.8rem);
  }
}

@media (max-width: 480px) {
  .banner-section {
    --h: clamp(280px, 45vh, 380px);
  }
}
</style>
