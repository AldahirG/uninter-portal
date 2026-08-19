<script setup lang="ts">
import { ArrowRight, Facebook, Instagram, Youtube } from "lucide-vue-next";

// 1. Arreglo de los Blogs/Escuelas (Fácil de editar)
const blogs = [
  {
    id: 1,
    title: "Escuela de Ciencias, Artes y Tecnología",
    shortName: "ESCAT", // El texto que va adentro del círculo azul
    image: "/images/blogs/escat.jpg", // Cambia por tus imágenes reales
    url: "https://blogs.uninter.edu.mx/escat",
  },
  {
    id: 2,
    title: "Escuela de Negocios, Derecho y Ciencias Sociales",
    shortName: "ENDECS",
    image: "/images/blogs/endecs.jpg",
    url: "https://blogs.uninter.edu.mx/endecs",
  },
  {
    id: 3,
    title: "Escuela de Humanidades, Lenguas e Internacionalización",
    shortName: "EHLI",
    image: "/images/blogs/ehli.jpg",
    url: "https://blogs.uninter.edu.mx/ehli",
  },
  {
    id: 4,
    title: "Arquitectura e Ingeniería Civil",
    shortName: "ARQ - ICI",
    image: "/images/blogs/arq.jpg",
    url: "https://blogs.uninter.edu.mx/arq-ici",
  },
];

const sociales = [
  {
    id: 1,
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com/uninter",
    color: "#1877F2", // Color oficial
  },
  {
    id: 2,
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/uninter",
    color: "#E4405F",
  },
  {
    id: 3,
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/uninter",
    color: "#FF0000",
  },
];
</script>

<template>
  <section class="vida-section">
    <div class="uninter-container">
      <!-- ENCABEZADO -->
      <div class="vida-header">
        <h2 class="vida-title">CONOCE LA VIDA UNINTER</h2>
        <p class="vida-subtitle">A TRAVÉS DE NUESTROS BLOGS Y REDES SOCIALES</p>
      </div>

      <!-- GRID DE BLOGS (4 Columnas) -->
      <div class="vida-grid">
        <a
          v-for="blog in blogs"
          :key="blog.id"
          :href="blog.url"
          target="_blank"
          class="blog-card"
        >
          <div class="blog-img-wrapper">
            <!-- Imagen de fondo -->
            <img :src="blog.image" :alt="blog.title" class="blog-img" />

            <!-- Círculo central con las siglas -->
            <div class="blog-circle">
              <span class="blog-circle-text">{{ blog.shortName }}</span>
            </div>

            <!-- Overlay oscuro y botón que aparece en Hover -->
            <div class="blog-overlay">
              <span class="blog-btn"> Ingresa <ArrowRight :size="18" /> </span>
            </div>
          </div>

          <!-- Título descriptivo abajo -->
          <div class="blog-info">
            <p class="blog-info-title">{{ blog.title }}</p>
          </div>
        </a>
      </div>

      <!-- REDES SOCIALES -->
      <div class="social-container">
        <a
          v-for="social in sociales"
          :key="social.id"
          :href="social.url"
          target="_blank"
          class="social-link"
          :aria-label="social.name"
        >
          <component
            :is="social.icon"
            :size="36"
            class="social-icon"
            :style="{ '--hover-color': social.color }"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Contenedor principal */
.vida-section {
  background-color: #ffffff;
  padding: 5rem 0;
}

.uninter-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* =========================================================
   ENCABEZADO
========================================================= */
.vida-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.vida-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 800;
  color: #1565c0; /* Azul UNINTER */
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.vida-subtitle {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: #0f3c61; /* Azul más oscuro */
  font-weight: 500;
  margin: 0;
  letter-spacing: 0.05em;
}

/* =========================================================
   GRID DE BLOGS
========================================================= */
.vida-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;
}

/* Tarjeta individual */
.blog-card {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  /* Sombra sutil por defecto */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

/* EFECTO: La tarjeta se eleva al poner el mouse */
.blog-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 30px rgba(15, 60, 97, 0.15);
}

/* Contenedor de la imagen (El cuadrado de arriba) */
.blog-img-wrapper {
  position: relative;
  aspect-ratio: 1 / 1; /* Hace que sea un cuadrado perfecto siempre */
  overflow: hidden;
  background-color: #f1f5f9;
}

.blog-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* EFECTO: La imagen hace un suave zoom in */
.blog-card:hover .blog-img {
  transform: scale(1.1);
}

/* Círculo Central Dinámico (El que dice ESCAT, ENDECS...) */
.blog-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90px;
  height: 90px;
  background-color: #0f3c61;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #ffffff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 2;
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.blog-circle-text {
  color: #ffffff;
  font-weight: 800;
  font-size: 1.1rem;
  text-align: center;
}

/* OVERLAY OSCURO (Aparece en Hover) */
.blog-overlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 60, 97, 0.85); /* Azul UNINTER semi-transparente */
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  z-index: 3;
  transition: opacity 0.3s ease;
}

.blog-card:hover .blog-overlay {
  opacity: 1;
}

/* Ocultar el círculo cuando aparece el overlay para no estorbar */
.blog-card:hover .blog-circle {
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.8);
}

/* BOTÓN INGRESA (Aparece animado desde abajo) */
.blog-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #ffffff;
  color: #1565c0;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  font-weight: 800;
  font-size: 1rem;
  transform: translateY(20px);
  transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.blog-card:hover .blog-btn {
  transform: translateY(0);
}

/* Zona de texto inferior */
.blog-info {
  padding: 1.25rem 1rem;
  text-align: center;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.blog-info-title {
  margin: 0;
  font-size: 0.9rem;
  color: #475569;
  line-height: 1.4;
  font-weight: 500;
  transition: color 0.3s;
}

.blog-card:hover .blog-info-title {
  color: #1565c0; /* El texto se pinta de azul al hacer hover */
}

/* =========================================================
   REDES SOCIALES
========================================================= */
.social-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #e2e8f0;
}

.social-link {
  color: #64748b; /* Color gris por defecto */
  transition:
    transform 0.2s ease,
    color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.social-link:hover {
  transform: translateY(-5px); /* Saltito al pasar el mouse */
  color: var(
    --hover-color
  ); /* Usa la variable de color oficial (ej. Rojo Youtube) */
}

/* =========================================================
   RESPONSIVE
========================================================= */
@media (max-width: 1024px) {
  .vida-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 columnas en Tablets */
    gap: 1.5rem;
  }
}

@media (max-width: 600px) {
  .vida-grid {
    grid-template-columns: 1fr; /* 1 columna en celulares */
  }
  .blog-img-wrapper {
    aspect-ratio: 16 / 9; /* En celular lo hacemos un poco más horizontal para ahorrar espacio */
  }
  .social-container {
    gap: 2rem;
  }
}
</style>
