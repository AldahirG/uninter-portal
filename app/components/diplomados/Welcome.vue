<script setup lang="ts">
const cards = [
  { icon: "mdi:book-open-page-variant-outline", title: "Catálogo de Diplomados", desc: "Explora más de 100 diplomados y cursos en 16 áreas temáticas.", href: "#oferta" },
  { icon: "mdi:laptop",                          title: "Modalidad en Línea",     desc: "Estudia desde cualquier lugar con clases en vivo y material digital.", href: "#oferta" },
  { icon: "mdi:phone-outline",                   title: "¿Necesitas asesoría?",   desc: "777 357 9000 · diplomados@uninter.edu.mx", href: null },
];
</script>

<template>
  <section class="dp-wl">
    <div class="dp-wl__top">
      <div class="dp-container">
        <div class="dp-wl__intro">
          <div>
            <p class="dp-eyebrow">Catálogo UNINTER</p>
            <h2 class="dp-title">Actualización<br /><em>profesional continua</em></h2>
          </div>
          <p class="dp-wl__desc">
            Los diplomados y cursos de UNINTER están diseñados para profesionistas que buscan
            mantenerse vigentes en su área. Avales internacionales, modalidad flexible y
            certificados con reconocimiento oficial.
          </p>
        </div>
      </div>
    </div>
    <div class="dp-wl__cards-wrap">
      <div class="dp-container dp-wl__cards">
        <component
          v-for="c in cards" :key="c.title"
          :is="c.href ? 'a' : 'div'"
          :href="c.href ?? undefined"
          class="dp-wcard"
          :class="{ 'dp-wcard--static': !c.href }"
        >
          <div class="dp-wcard__icon"><Icon :name="c.icon" size="26" /></div>
          <h3 class="dp-wcard__title">{{ c.title }}</h3>
          <p class="dp-wcard__desc">{{ c.desc }}</p>
          <span v-if="c.href" class="dp-wcard__link">Ver más →</span>
        </component>
      </div>
    </div>
  </section>
</template>

<style scoped>
.dp-wl { --p: #6D4C41; --pl: #A1887F; --pbg: #180f0c; }
.dp-container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
.dp-wl__top { background: var(--pbg); padding: 4.5rem 0 3rem; }
.dp-wl__intro { display: grid; grid-template-columns: 1fr 1.6fr; gap: 3rem; align-items: start; }
.dp-eyebrow { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--pl); margin: 0 0 0.5rem; }
.dp-title { font-family: var(--font-serif, Georgia, serif); font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 800; color: #fff; margin: 0; line-height: 1.15; }
.dp-title em { font-style: italic; color: var(--pl); }
.dp-wl__desc { font-size: 0.95rem; line-height: 1.75; color: rgba(255,255,255,0.6); margin: 0; padding-top: 1.6rem; border-top: 2px solid var(--p); }
.dp-wl__cards-wrap { background: #221510; padding: 3rem 0; }
.dp-wl__cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.dp-wcard {
  background: #2c1a12; border: 1px solid rgba(109,76,65,0.25); border-radius: 14px; padding: 1.75rem;
  display: flex; flex-direction: column; gap: 0.75rem; text-decoration: none;
  transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s; cursor: pointer;
}
.dp-wcard:hover { transform: translateY(-4px); border-color: var(--p); box-shadow: 0 10px 28px rgba(109,76,65,0.18); }
.dp-wcard--static { cursor: default; }
.dp-wcard--static:hover { transform: none; }
.dp-wcard__icon { width: 48px; height: 48px; border-radius: 12px; background: rgba(109,76,65,0.2); color: var(--pl); display: flex; align-items: center; justify-content: center; }
.dp-wcard__title { font-family: var(--font-serif, Georgia, serif); font-size: 1.05rem; font-weight: 800; color: #fff; margin: 0; }
.dp-wcard__desc { font-size: 0.85rem; color: rgba(255,255,255,0.52); line-height: 1.6; margin: 0; flex: 1; }
.dp-wcard__link { font-size: 0.8rem; font-weight: 700; color: var(--pl); letter-spacing: 0.04em; }
@media (max-width: 768px) {
  .dp-wl__intro { grid-template-columns: 1fr; gap: 1.5rem; }
  .dp-wl__cards { grid-template-columns: 1fr; }
}
</style>
