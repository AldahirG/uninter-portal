<template>
  <div class="dp-strip">
    <div v-for="i in 5" :key="i" class="dp-strip__item">
      <img src="/images/hero/licenciaturasPresenciales.jpg" :alt="'Diplomados UNINTER ' + i" loading="lazy" />
    </div>
  </div>
</template>

<style scoped>
.dp-strip { display: flex; height: 220px; overflow: hidden; }
.dp-strip__item { flex: 1; overflow: hidden; }
.dp-strip__item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.dp-strip__item:hover img { transform: scale(1.06); }
@media (max-width: 640px) { .dp-strip { height: 140px; } .dp-strip__item:nth-child(n+4) { display: none; } }
</style>
