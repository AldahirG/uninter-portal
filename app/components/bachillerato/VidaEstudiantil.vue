<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";

const blogs = [
  {
    id: 1,
    titulo: "Escuela de Ciencias, Artes y Tecnología",
    siglas: "ESCAT",
    imagen: "/images/hero/licenciaturasPresenciales.jpg",
    url: "https://blogs.uninter.edu.mx/escat",
  },
  {
    id: 2,
    titulo: "Escuela de Negocios, Derecho y Ciencias Sociales",
    siglas: "ENDECS",
    imagen: "/images/hero/ejecutivas.jpg",
    url: "https://blogs.uninter.edu.mx/endecs",
  },
  {
    id: 3,
    titulo: "Escuela de Humanidades, Lenguas e Internacionalización",
    siglas: "EHLI",
    imagen: "/images/hero/licenciaturas.jpg",
    url: "https://blogs.uninter.edu.mx/ehli",
  },
  {
    id: 4,
    titulo: "Blog de Difusión Cultural BIU",
    siglas: "BIU",
    imagen: "/images/hero/talleres.jpg",
    url: "https://blogs.uninter.edu.mx/biu",
  },
];

const redes = [
  { nombre: "Facebook",  href: "https://www.facebook.com/uninteredu",           icon: "mdi:facebook"  },
  { nombre: "Instagram", href: "https://www.instagram.com/uninter_cuerna",      icon: "mdi:instagram" },
  { nombre: "YouTube",   href: "https://www.youtube.com/user/UniversidadUninter", icon: "mdi:youtube"   },
  { nombre: "TikTok",    href: "https://www.tiktok.com/@uninter_cuerna",         icon: "mdi:tiktok"    },
];
</script>

<template>
  <section class="vida-est-section">
    <div class="biu-container">
      <!-- Header -->
      <div class="vida-est-header">
        <h2 class="vida-est-title">Conoce la vida estudiantil en BIU</h2>
        <p class="vida-est-sub">A través de nuestros blogs y redes sociales</p>
      </div>

      <!-- Grid de blogs -->
      <div class="blogs-grid">
        <a
          v-for="blog in blogs"
          :key="blog.id"
          :href="blog.url"
          target="_blank"
          class="blog-card"
        >
          <div class="blog-card__img-wrap">
            <img :src="blog.imagen" :alt="blog.titulo" class="blog-card__img" loading="lazy" />
            <div class="blog-card__badge">{{ blog.siglas }}</div>
            <div class="blog-card__overlay">
              <span class="blog-card__btn">
                Ingresa <ArrowRight :size="16" />
              </span>
            </div>
          </div>
          <p class="blog-card__titulo">{{ blog.titulo }}</p>
        </a>
      </div>

      <!-- Redes sociales -->
      <div class="redes-bar">
        <a
          v-for="r in redes"
          :key="r.nombre"
          :href="r.href"
          target="_blank"
          :aria-label="r.nombre"
          class="red-link"
        >
          <Icon :name="r.icon" size="28" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.biu-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.vida-est-section {
  background: #0d1f0e;
  padding: 5.5rem 0;
}

/* Header */
.vida-est-header {
  text-align: center;
  margin-bottom: 3rem;
}
.vida-est-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 800;
  color: #fff;
  margin: 0 0 0.5rem;
  letter-spacing: -0.01em;
}
.vida-est-sub {
  font-size: 1rem;
  color: #A8D86E;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-size: 0.78rem;
  margin: 0;
}

/* Grid de blogs */
.blogs-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3.5rem;
}

.blog-card {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  border-radius: 14px;
  overflow: hidden;
  background: #1a2500;
  border: 1px solid rgba(255,255,255,0.07);
  transition: transform 0.3s, box-shadow 0.3s;
}
.blog-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0,0,0,0.4);
}

.blog-card__img-wrap {
  position: relative;
  aspect-ratio: 1/1;
  overflow: hidden;
  background: #4A7A02;
}
.blog-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.blog-card:hover .blog-card__img { transform: scale(1.1); }

.blog-card__badge {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #4A7A02;
  color: #fff;
  font-size: 0.95rem;
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
.blog-card:hover .blog-card__badge {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.8);
}

.blog-card__overlay {
  position: absolute;
  inset: 0;
  background: rgba(74,122,2,0.88);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  z-index: 3;
  transition: opacity 0.3s;
}
.blog-card:hover .blog-card__overlay { opacity: 1; }

.blog-card__btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #fff;
  color: #6BAF04;
  font-weight: 800;
  font-size: 0.9rem;
  padding: 0.6rem 1.25rem;
  border-radius: 999px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.2);
  transform: translateY(12px);
  transition: transform 0.35s;
}
.blog-card:hover .blog-card__btn { transform: translateY(0); }

.blog-card__titulo {
  padding: 1rem 1rem 1.125rem;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.72);
  line-height: 1.45;
  margin: 0;
  text-align: center;
  transition: color 0.2s;
}
.blog-card:hover .blog-card__titulo { color: #A8D86E; }

/* Redes */
.redes-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.1);
  padding-top: 2.5rem;
}
.red-link {
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
.red-link:hover {
  background: #6BAF04;
  color: #fff;
  transform: translateY(-3px);
}

/* Responsive */
@media (max-width: 1024px) {
  .blogs-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .blogs-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
}
</style>
