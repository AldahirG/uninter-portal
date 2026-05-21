<template>
  <div class="adm-strip" aria-hidden="true">
    <div v-for="n in 5" :key="n" class="adm-strip__item">
      <img
        src="/images/hero/licenciaturasPresenciales.jpg"
        :alt="`Admisiones UNINTER ${n}`"
        class="adm-strip__img"
        loading="lazy"
      />
      <div class="adm-strip__overlay"></div>
    </div>
  </div>
</template>

<style scoped>
.adm-strip { --p: #546E7A; display: flex; height: clamp(140px, 18vw, 220px); overflow: hidden; }
.adm-strip__item { flex: 1; position: relative; overflow: hidden; cursor: pointer; }
.adm-strip__img { width: 100%; height: 100%; object-fit: cover; object-position: center; transition: transform 0.5s ease; }
.adm-strip__overlay { position: absolute; inset: 0; background: rgba(84,110,122,0.35); transition: opacity 0.4s; }
.adm-strip__item:hover .adm-strip__img { transform: scale(1.08); }
.adm-strip__item:hover .adm-strip__overlay { opacity: 0; }
</style>
