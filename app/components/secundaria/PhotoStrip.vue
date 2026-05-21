<script setup lang="ts">
const fotos = [
  { src: "/images/hero/licenciaturasPresenciales.jpg", alt: "Estudiantes SIU" },
  { src: "/images/hero/ejecutivas.jpg",                 alt: "Vida académica SIU" },
  { src: "/images/hero/licenciaturas.jpg",              alt: "Deportes y cultura" },
  { src: "/images/hero/talleres.jpg",                   alt: "Talleres SIU" },
  { src: "/images/hero/licenciaturasPresenciales.jpg",  alt: "Comunidad SIU" },
];
</script>

<template>
  <div class="siu-strip">
    <div class="siu-strip__item" v-for="(f, i) in fotos" :key="i">
      <img :src="f.src" :alt="f.alt" class="siu-strip__img" loading="lazy" />
      <div class="siu-strip__overlay"></div>
    </div>
  </div>
</template>

<style scoped>
.siu-strip {
  display: flex;
  height: clamp(180px, 24vw, 280px);
  overflow: hidden;
}
.siu-strip__item {
  flex: 1;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.siu-strip__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.siu-strip__overlay {
  position: absolute;
  inset: 0;
  background: rgba(236,171,0,0.3);
  opacity: 0;
  transition: opacity 0.35s;
}
.siu-strip__item:hover .siu-strip__img   { transform: scale(1.08); }
.siu-strip__item:hover .siu-strip__overlay { opacity: 1; }
</style>
