<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";

const blogs = [
  {
    id: 1,
    titulo: "Blog Secundaria Bilingüe SIU",
    siglas: "SIU B",
    imagen: "/images/hero/licenciaturasPresenciales.jpg",
    url: "https://blogs.uninter.edu.mx/siu-bilingue",
  },
  {
    id: 2,
    titulo: "Blog Secundaria Multicultural SIU",
    siglas: "SIU M",
    imagen: "/images/hero/ejecutivas.jpg",
    url: "https://blogs.uninter.edu.mx/siu-multicultural",
  },
  {
    id: 3,
    titulo: "Actividades Deportivas y Culturales",
    siglas: "ADC",
    imagen: "/images/hero/licenciaturas.jpg",
    url: "https://siu.uninter.edu.mx/actividades",
  },
  {
    id: 4,
    titulo: "Blog SIU UNINTER",
    siglas: "SIU",
    imagen: "/images/hero/talleres.jpg",
    url: "https://blogs.uninter.edu.mx/siu",
  },
];

const redes = [
  { nombre: "Facebook",  href: "https://www.facebook.com/uninteredu",            icon: "mdi:facebook"  },
  { nombre: "Instagram", href: "https://www.instagram.com/uninter_cuerna",       icon: "mdi:instagram" },
  { nombre: "YouTube",   href: "https://www.youtube.com/user/UniversidadUninter", icon: "mdi:youtube"   },
  { nombre: "TikTok",    href: "https://www.tiktok.com/@uninter_cuerna",          icon: "mdi:tiktok"    },
];
</script>

<template>
  <section class="siu-vida">
    <div class="siu-container">
      <div class="siu-vida__header">
        <h2 class="siu-vida__title">Conoce la vida estudiantil en SIU</h2>
        <p class="siu-vida__sub">A través de nuestros blogs y redes sociales</p>
      </div>

      <div class="siu-blogs-grid">
        <a
          v-for="blog in blogs"
          :key="blog.id"
          :href="blog.url"
          target="_blank"
          class="siu-blog-card"
        >
          <div class="siu-blog-card__img-wrap">
            <img :src="blog.imagen" :alt="blog.titulo" class="siu-blog-card__img" loading="lazy" />
            <div class="siu-blog-card__badge">{{ blog.siglas }}</div>
            <div class="siu-blog-card__overlay">
              <span class="siu-blog-card__btn">
                Ingresa <ArrowRight :size="16" />
              </span>
            </div>
          </div>
          <p class="siu-blog-card__titulo">{{ blog.titulo }}</p>
        </a>
      </div>

      <div class="siu-redes-bar">
        <a
          v-for="r in redes"
          :key="r.nombre"
          :href="r.href"
          target="_blank"
          :aria-label="r.nombre"
          class="siu-red-link"
        >
          <Icon :name="r.icon" size="28" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.siu-vida {
  --s: #ECAB00;
  --sd: #C49000;
  --sbg: #1a1500;
}
.siu-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.siu-vida {
  background: var(--sbg);
  padding: 5.5rem 0;
}

.siu-vida__header {
  text-align: center;
  margin-bottom: 3rem;
}
.siu-vida__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 800;
  color: #fff;
  margin: 0 0 0.5rem;
  letter-spacing: -0.01em;
}
.siu-vida__sub {
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--s);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0;
}

.siu-blogs-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3.5rem;
}

.siu-blog-card {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  overflow: hidden;
  background: #201c00;
  border: 1px solid rgba(255,255,255,0.07);
  transition: transform 0.3s, box-shadow 0.3s;
}
.siu-blog-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.4);
}

.siu-blog-card__img-wrap {
  position: relative;
  aspect-ratio: 1/1;
  overflow: hidden;
  background: #2a2400;
}
.siu-blog-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.siu-blog-card:hover .siu-blog-card__img { transform: scale(1.1); }

.siu-blog-card__badge {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #B88A00;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 800;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  border: 3px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  z-index: 2;
  transition: opacity 0.3s, transform 0.3s;
}
.siu-blog-card:hover .siu-blog-card__badge {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.8);
}

.siu-blog-card__overlay {
  position: absolute;
  inset: 0;
  background: rgba(184,138,0,0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  z-index: 3;
  transition: opacity 0.3s;
}
.siu-blog-card:hover .siu-blog-card__overlay { opacity: 1; }

.siu-blog-card__btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #fff;
  color: #B88A00;
  font-weight: 800;
  font-size: 0.9rem;
  padding: 0.6rem 1.25rem;
  border-radius: 999px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.2);
  transform: translateY(12px);
  transition: transform 0.35s;
}
.siu-blog-card:hover .siu-blog-card__btn { transform: translateY(0); }

.siu-blog-card__titulo {
  padding: 1rem 1rem 1.125rem;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.7);
  line-height: 1.45;
  margin: 0;
  text-align: center;
  transition: color 0.2s;
}
.siu-blog-card:hover .siu-blog-card__titulo { color: var(--s); }

/* Redes */
.siu-redes-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 2.5rem;
}
.siu-red-link {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255,255,255,0.07);
  color: rgba(255,255,255,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background 0.2s, color 0.2s, transform 0.2s;
}
.siu-red-link:hover {
  background: var(--s);
  color: #1a1500;
  transform: translateY(-3px);
}

@media (max-width: 1024px) {
  .siu-blogs-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .siu-blogs-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
}
</style>
