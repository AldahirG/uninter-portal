<script setup lang="ts">
const fotos = [
  { src: "/images/hero/licenciaturasPresenciales.jpg", alt: "Estudiantes BIU" },
  { src: "/images/hero/ejecutivas.jpg", alt: "Campus UNINTER" },
  { src: "/images/hero/talleres.jpg", alt: "Laboratorio BIU" },
  { src: "/images/hero/licenciaturas.jpg", alt: "Vida estudiantil" },
  { src: "/images/hero/headerbg.png", alt: "Intercambio BIU" },
];
</script>

<template>
  <div class="strip-wrap">
    <div class="strip">
      <div v-for="foto in fotos" :key="foto.src" class="strip__item">
        <img :src="foto.src" :alt="foto.alt" class="strip__img" loading="lazy" />
        <div class="strip__overlay"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.strip-wrap {
  overflow: hidden;
  line-height: 0;
}

.strip {
  display: flex;
  height: clamp(180px, 24vw, 280px);
}

.strip__item {
  flex: 1;
  position: relative;
  overflow: hidden;
  background: #4A7A02;
}

.strip__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  display: block;
}

.strip__item:hover .strip__img {
  transform: scale(1.08);
}

.strip__overlay {
  position: absolute;
  inset: 0;
  background: rgba(13,31,14,0.25);
  transition: opacity 0.3s;
}
.strip__item:hover .strip__overlay {
  opacity: 0;
}

@media (max-width: 640px) {
  .strip { height: clamp(120px, 30vw, 180px); }
}
</style>
