<template>
  <div class="pg-strip" aria-hidden="true">
    <div v-for="n in 5" :key="n" class="pg-strip__item">
      <img
        :src="`/images/hero/licenciaturasPresenciales.jpg`"
        :alt="`Posgrados UNINTER ${n}`"
        class="pg-strip__img"
        loading="lazy"
      />
      <div class="pg-strip__overlay"></div>
    </div>
  </div>
</template>

<style scoped>
.pg-strip {
  --p: #546E7A;
  display: flex;
  height: clamp(160px, 22vw, 260px);
  overflow: hidden;
}
.pg-strip__item {
  flex: 1;
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.pg-strip__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.5s ease;
}
.pg-strip__overlay {
  position: absolute;
  inset: 0;
  background: rgba(84,110,122,0.3);
  transition: opacity 0.4s;
}
.pg-strip__item:hover .pg-strip__img { transform: scale(1.08); }
.pg-strip__item:hover .pg-strip__overlay { opacity: 0; }
</style>
