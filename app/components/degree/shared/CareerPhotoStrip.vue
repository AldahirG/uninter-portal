<template>
  <div class="career-strip">
    <div v-for="(img, idx) in stripImages" :key="idx" class="career-strip__item">
      <img :src="img" :alt="'Experiencia UNINTER ' + (idx + 1)" loading="lazy" />
    </div>
  </div>
</template>

<script setup lang="ts">
const stripImages = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600"
];
</script>

<style scoped>
.career-strip {
  display: flex;
  height: 240px;
  overflow: hidden;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
}
.career-strip__item {
  flex: 1;
  overflow: hidden;
  position: relative;
}
.career-strip__item::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 60%, rgba(15, 60, 97, 0.25));
  pointer-events: none;
}
.career-strip__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.career-strip__item:hover img {
  transform: scale(1.08);
}
@media (max-width: 768px) {
  .career-strip {
    height: 150px;
  }
  .career-strip__item:nth-child(n+4) {
    display: none;
  }
}
</style>
