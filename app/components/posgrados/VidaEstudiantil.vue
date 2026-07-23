<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";

const blogs = [
  { slug: "escat",  label: "ESCAT",  title: "Escuela de Ciencias Administrativas y Tecnología",    color: "#6A1B9A" },
  { slug: "endecs", label: "ENDECS", title: "Escuela de Negocios, Derecho y Ciencias Sociales",     color: "#1565C0" },
  { slug: "ehli",   label: "EHLI",   title: "Escuela de Humanidades, Lenguas e Investigación",      color: "#00695C" },
  { slug: "pos",    label: "POS",    title: "Comunidad de Egresados Posgrado UNINTER",              color: "#546E7A" },
];

const socials = [
  { icon: "mdi:facebook",  href: "https://www.facebook.com/uninteredu",            label: "Facebook"  },
  { icon: "mdi:instagram", href: "https://www.instagram.com/uninter_cuerna",        label: "Instagram" },
  { icon: "mdi:youtube",   href: "https://www.youtube.com/user/UniversidadUninter", label: "YouTube"   },
  { icon: "mdi:linkedin",  href: "https://www.linkedin.com/in/egresados-uninter/",  label: "LinkedIn"  },
];
</script>

<template>
  <section class="vida-est-section">
    <div class="pg-container">
      <!-- Header -->
      <div class="vida-est-header">
        <p class="vida-est-eyebrow">Conoce la Vida Uninter</p>
        <h2 class="vida-est-title">A través de los Blogs y Redes Sociales</h2>
      </div>

      <!-- Grid de blogs -->
      <div class="blogs-grid">
        <a
          v-for="b in blogs"
          :key="b.slug"
          href="https://posgrados.uninter.edu.mx/"
          target="_blank"
          class="blog-card"
        >
          <div class="blog-card__thumb" :style="'background: ' + b.color">
            <span class="blog-card__initials">{{ b.label }}</span>
          </div>
          <div class="blog-card__body">
            <p class="blog-card__titulo">{{ b.title }}</p>
            <span class="blog-card__link">Ingresar <ArrowRight :size="11" /></span>
          </div>
        </a>
      </div>

      <!-- Redes sociales -->
      <div class="redes-bar">
        <a
          v-for="s in socials"
          :key="s.icon"
          :href="s.href"
          target="_blank"
          class="red-link"
          :aria-label="s.label"
        >
          <Icon :name="s.icon" size="22" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pg-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.vida-est-section {
  background: #0f1a22;
  padding: 5.5rem 0;
  --pl: #78909C;
}

/* Header */
.vida-est-header {
  text-align: center;
  margin-bottom: 3rem;
}
.vida-est-eyebrow {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--pl);
  margin: 0 0 0.5rem;
}
.vida-est-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 800;
  color: #fff;
  margin: 0;
  line-height: 1.25;
}

/* Grid de blogs */
.blogs-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 3.5rem;
}

.blog-card {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(84, 110, 122, 0.15);
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s;
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
  justify-content: center;
  gap: 1rem;
}
.red-link {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(84, 110, 122, 0.25);
  color: rgba(255, 255, 255, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
}
.red-link:hover {
  background: #546E7A;
  border-color: #546E7A;
  color: #fff;
}

/* Responsive */
@media (max-width: 900px) {
  .blogs-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 560px) {
  .blogs-grid { grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }
}
</style>
