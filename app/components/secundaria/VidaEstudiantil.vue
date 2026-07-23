<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";

const blogs = [
  {
    id: 1,
    titulo: "Blog INTERNACIONALIZACIÓN",
    siglas: "INTERNACIONALIZACIÓN",
    color: "#E65100",
    url: "https://blogs.uninter.edu.mx/congresoInternacionalLatinoamerica/",
  },
  {
    id: 2,
    titulo: "Blog Difusion Cultural",
    siglas: "Difusión Cultural",
    color: "#F57C00",
    url: "https://blogs.uninter.edu.mx/difusioncultural",
  },
  {
    id: 3,
    titulo: "Blog Deportes",
    siglas: "Deportes",
    color: "#FFA000",
    url: "https://blogs.uninter.edu.mx/deportes/",
  },
  {
    id: 4,
    titulo: "Blog SIU UNINTER",
    siglas: "SIU",
    color: "#E65100",
    url: "https://blogs.uninter.edu.mx/siu",
  },
];

const redes = [
  {
    nombre: "Facebook",
    href: "https://www.facebook.com/uninteredu",
    icon: "mdi:facebook",
  },
  {
    nombre: "Instagram",
    href: "https://www.instagram.com/uninter_cuerna",
    icon: "mdi:instagram",
  },
  {
    nombre: "YouTube",
    href: "https://www.youtube.com/user/UniversidadUninter",
    icon: "mdi:youtube",
  },
  {
    nombre: "TikTok",
    href: "https://www.tiktok.com/@uninter_cuerna",
    icon: "mdi:tiktok",
  },
];
</script>

<template>
  <section class="vida-est-section">
    <div class="siu-container">
      <!-- Header -->
      <div class="vida-est-header">
        <h2 class="vida-est-title">Conoce la vida estudiantil en SIU</h2>
        <p class="vida-est-sub">A través de nuestros blogs y redes sociales</p>
      </div>

      <!-- Grid de blogs -->
      <div class="blogs-grid">
        <a
          v-for="b in blogs"
          :key="b.id"
          :href="b.url"
          target="_blank"
          class="blog-card"
        >
          <div class="blog-card__thumb" :style="'background: ' + b.color">
            <span class="blog-card__initials">{{ b.siglas }}</span>
          </div>
          <div class="blog-card__body">
            <p class="blog-card__titulo">{{ b.titulo }}</p>
            <span class="blog-card__link"
              >Ingresar <ArrowRight :size="11"
            /></span>
          </div>
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
.siu-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.vida-est-section {
  background: #1a1500;
  padding: 5.5rem 0;
  --pl: #ecab00;
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
  font-size: 0.78rem;
  color: var(--pl);
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin: 0;
}

/* Grid de blogs */
.blogs-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 3.5rem;
}

.blog-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  display: flex;
  flex-direction: column;
}
.blog-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.35);
  background: rgba(255, 255, 255, 0.08);
}

.blog-card__thumb {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: opacity 0.2s;
}
.blog-card:hover .blog-card__thumb {
  opacity: 0.95;
}

.blog-card__initials {
  font-size: 1.15rem;
  font-weight: 900;
  color: #fff;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.blog-card__body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  flex: 1;
}

.blog-card__titulo {
  font-size: 0.8rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.45;
  margin: 0;
  flex: 1;
}
.blog-card:hover .blog-card__titulo {
  color: #fff;
}

.blog-card__link {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.72rem;
  font-weight: 800;
  color: var(--pl);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: transform 0.2s;
}
.blog-card:hover .blog-card__link {
  transform: translateX(2px);
  color: #fff;
}

/* Redes */
.redes-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 2.5rem;
}
.red-link {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.07);
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition:
    background 0.2s,
    color 0.2s,
    transform 0.2s;
}
.red-link:hover {
  background: var(--pl);
  color: #1a1500;
  transform: translateY(-3px);
}

/* Responsive */
@media (max-width: 900px) {
  .blogs-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 560px) {
  .blogs-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
  }
}
</style>
