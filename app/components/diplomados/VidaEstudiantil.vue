<script setup lang="ts">
const blogs = [
  { slug: "escat",  label: "ESCAT",  title: "Escuela de Ciencias Administrativas y Tecnología",   img: "/images/hero/licenciaturasPresenciales.jpg" },
  { slug: "endecs", label: "ENDECS", title: "Escuela de Negocios, Derecho y Ciencias Sociales",    img: "/images/hero/licenciaturasPresenciales.jpg" },
  { slug: "ehli",   label: "EHLI",   title: "Escuela de Humanidades, Lenguas e Investigación",     img: "/images/hero/licenciaturasPresenciales.jpg" },
  { slug: "dip",    label: "DIP",    title: "Comunidad de Egresados Diplomados UNINTER",            img: "/images/hero/licenciaturasPresenciales.jpg" },
];
const socials = [
  { icon: "mdi:facebook",  href: "https://www.facebook.com/uninteredu",            label: "Facebook"  },
  { icon: "mdi:instagram", href: "https://www.instagram.com/uninter_cuerna",        label: "Instagram" },
  { icon: "mdi:youtube",   href: "https://www.youtube.com/user/UniversidadUninter", label: "YouTube"   },
  { icon: "mdi:linkedin",  href: "https://www.linkedin.com/in/egresados-uninter/",  label: "LinkedIn"  },
];
</script>

<template>
  <section class="dp-est">
    <div class="dp-container">
      <div class="dp-est__head">
        <p class="dp-eyebrow">Conoce la Vida Uninter</p>
        <h2 class="dp-est__title">A través de los Blogs<br /><em>y Redes Sociales</em></h2>
      </div>
      <div class="dp-est__grid">
        <a v-for="b in blogs" :key="b.slug" href="https://diplomados.uninter.edu.mx/" target="_blank" class="dp-blog">
          <div class="dp-blog__img-wrap">
            <img :src="b.img" :alt="b.title" class="dp-blog__img" loading="lazy" />
            <div class="dp-blog__overlay"></div>
            <span class="dp-blog__badge">{{ b.label }}</span>
          </div>
          <div class="dp-blog__body">
            <span class="dp-blog__label">{{ b.label }}</span>
            <p class="dp-blog__title">{{ b.title }}</p>
            <span class="dp-blog__cta">Ingresa →</span>
          </div>
        </a>
      </div>
      <div class="dp-est__socials">
        <a v-for="s in socials" :key="s.icon" :href="s.href" target="_blank" class="dp-soc" :aria-label="s.label">
          <Icon :name="s.icon" size="22" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.dp-est { --p: #6D4C41; --pl: #A1887F; --pbg: #180f0c; background: var(--pbg); padding: 5.5rem 0; }
.dp-container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
.dp-est__head { text-align: center; margin-bottom: 3rem; }
.dp-eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--pl); margin: 0 0 0.5rem; }
.dp-est__title { font-family: var(--font-serif, Georgia, serif); font-size: clamp(1.8rem, 3vw, 2.5rem); font-weight: 800; color: #fff; margin: 0; line-height: 1.25; }
.dp-est__title em { font-style: italic; color: var(--pl); }
.dp-est__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; margin-bottom: 3rem; }
.dp-blog { border-radius: 14px; overflow: hidden; background: rgba(255,255,255,0.04); border: 1px solid rgba(109,76,65,0.18); text-decoration: none; display: flex; flex-direction: column; transition: transform 0.3s, box-shadow 0.3s; }
.dp-blog:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.3); }
.dp-blog__img-wrap { position: relative; aspect-ratio: 1; overflow: hidden; }
.dp-blog__img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.dp-blog:hover .dp-blog__img { transform: scale(1.06); }
.dp-blog__overlay { position: absolute; inset: 0; background: linear-gradient(160deg, rgba(109,76,65,0.25) 0%, rgba(24,15,12,0.65) 100%); }
.dp-blog__badge { position: absolute; top: 1rem; left: 1rem; background: var(--p); color: #fff; font-size: 0.7rem; font-weight: 900; letter-spacing: 0.12em; padding: 0.25rem 0.625rem; border-radius: 999px; }
.dp-blog__body { padding: 1rem 1.125rem; display: flex; flex-direction: column; gap: 0.25rem; flex: 1; }
.dp-blog__label { font-size: 0.68rem; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: var(--pl); }
.dp-blog__title { font-size: 0.82rem; color: rgba(255,255,255,0.78); line-height: 1.45; margin: 0; flex: 1; }
.dp-blog__cta { font-size: 0.75rem; font-weight: 700; color: var(--pl); transition: color 0.2s; margin-top: 0.375rem; }
.dp-blog:hover .dp-blog__cta { color: #fff; }
.dp-est__socials { display: flex; justify-content: center; gap: 1rem; }
.dp-soc { width: 44px; height: 44px; border-radius: 50%; background: rgba(255,255,255,0.06); border: 1px solid rgba(109,76,65,0.25); color: rgba(255,255,255,0.6); display: flex; align-items: center; justify-content: center; text-decoration: none; transition: background 0.2s, color 0.2s, border-color 0.2s; }
.dp-soc:hover { background: var(--p); border-color: var(--p); color: #fff; }
@media (max-width: 768px) { .dp-est__grid { grid-template-columns: repeat(2, 1fr); } }
</style>
