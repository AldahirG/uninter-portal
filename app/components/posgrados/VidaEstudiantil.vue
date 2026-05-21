<script setup lang="ts">
const blogs = [
  { slug: "escat",  label: "ESCAT",  title: "Escuela de Ciencias Administrativas y Tecnología",    img: "/images/hero/licenciaturasPresenciales.jpg" },
  { slug: "endecs", label: "ENDECS", title: "Escuela de Negocios, Derecho y Ciencias Sociales",     img: "/images/hero/licenciaturasPresenciales.jpg" },
  { slug: "ehli",   label: "EHLI",   title: "Escuela de Humanidades, Lenguas e Investigación",      img: "/images/hero/licenciaturasPresenciales.jpg" },
  { slug: "pos",    label: "POS",    title: "Comunidad de Egresados Posgrado UNINTER",              img: "/images/hero/licenciaturasPresenciales.jpg" },
];
const socials = [
  { icon: "mdi:facebook",  href: "https://www.facebook.com/uninteredu",            label: "Facebook"  },
  { icon: "mdi:instagram", href: "https://www.instagram.com/uninter_cuerna",        label: "Instagram" },
  { icon: "mdi:youtube",   href: "https://www.youtube.com/user/UniversidadUninter", label: "YouTube"   },
  { icon: "mdi:linkedin",  href: "https://www.linkedin.com/in/egresados-uninter/",  label: "LinkedIn"  },
];
</script>

<template>
  <section class="pg-est">
    <div class="pg-container">
      <div class="pg-est__head">
        <p class="pg-est__eyebrow">Conoce la Vida Uninter</p>
        <h2 class="pg-est__title">
          A través de los Blogs<br />
          <em>y Redes Sociales</em>
        </h2>
      </div>

      <div class="pg-est__grid">
        <a
          v-for="b in blogs"
          :key="b.slug"
          href="https://posgrados.uninter.edu.mx/"
          target="_blank"
          class="pg-blog"
        >
          <div class="pg-blog__img-wrap">
            <img :src="b.img" :alt="b.title" class="pg-blog__img" loading="lazy" />
            <div class="pg-blog__overlay"></div>
            <span class="pg-blog__badge">{{ b.label }}</span>
          </div>
          <div class="pg-blog__body">
            <span class="pg-blog__label">{{ b.label }}</span>
            <p class="pg-blog__ttl">{{ b.title }}</p>
            <span class="pg-blog__cta">Ingresa →</span>
          </div>
        </a>
      </div>

      <div class="pg-est__socials">
        <a v-for="s in socials" :key="s.icon" :href="s.href" target="_blank" class="pg-soc" :aria-label="s.label">
          <Icon :name="s.icon" size="22" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pg-est {
  --p: #546E7A;
  --pl: #78909C;
  --pbg: #0f1a22;
  background: var(--pbg);
  padding: 5.5rem 0;
}
.pg-container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
.pg-est__head { text-align: center; margin-bottom: 3rem; }
.pg-est__eyebrow {
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--pl); margin: 0 0 0.5rem;
}
.pg-est__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.8rem, 3vw, 2.5rem); font-weight: 800; color: #fff;
  margin: 0; line-height: 1.25;
}
.pg-est__title em { font-style: italic; color: var(--pl); }

.pg-est__grid {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem; margin-bottom: 3rem;
}
.pg-blog {
  border-radius: 14px; overflow: hidden;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(84,110,122,0.15);
  text-decoration: none; display: flex; flex-direction: column;
  transition: transform 0.3s, box-shadow 0.3s; cursor: pointer;
}
.pg-blog:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(0,0,0,0.3); }

.pg-blog__img-wrap { position: relative; aspect-ratio: 1; overflow: hidden; }
.pg-blog__img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.pg-blog:hover .pg-blog__img { transform: scale(1.06); }
.pg-blog__overlay {
  position: absolute; inset: 0;
  background: linear-gradient(160deg, rgba(84,110,122,0.25) 0%, rgba(15,26,34,0.65) 100%);
}
.pg-blog__badge {
  position: absolute; top: 1rem; left: 1rem;
  background: var(--p); color: #fff;
  font-size: 0.7rem; font-weight: 900; letter-spacing: 0.12em;
  padding: 0.25rem 0.625rem; border-radius: 999px;
}
.pg-blog__body { padding: 1rem 1.125rem; display: flex; flex-direction: column; gap: 0.25rem; flex: 1; }
.pg-blog__label { font-size: 0.68rem; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; color: var(--pl); }
.pg-blog__ttl { font-size: 0.82rem; color: rgba(255,255,255,0.78); line-height: 1.45; margin: 0; flex: 1; }
.pg-blog__cta { font-size: 0.75rem; font-weight: 700; color: var(--pl); transition: color 0.2s; margin-top: 0.375rem; }
.pg-blog:hover .pg-blog__cta { color: #fff; }

.pg-est__socials { display: flex; justify-content: center; gap: 1rem; }
.pg-soc {
  width: 44px; height: 44px; border-radius: 50%;
  background: rgba(255,255,255,0.06); border: 1px solid rgba(84,110,122,0.25);
  color: rgba(255,255,255,0.6); display: flex; align-items: center; justify-content: center;
  text-decoration: none; transition: background 0.2s, color 0.2s, border-color 0.2s;
}
.pg-soc:hover { background: var(--p); border-color: var(--p); color: #fff; }

@media (max-width: 768px) { .pg-est__grid { grid-template-columns: repeat(2, 1fr); } }
</style>
