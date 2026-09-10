<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";

const blogs = [
  {
    key: "daeya",
    label: "DAEYA",
    nombre: "Atención a Estudiantes UNINTER",
    color: "#1e3a5f",
    href: "https://blogs.uninter.edu.mx/daeya/",
  },
  {
    key: "arq",
    label: "ARQ-ICI",
    nombre: "Arquitectura e Ingeniería Civil",
    color: "#546e7a",
    href: "https://blogs.uninter.edu.mx/arq-ici/",
  },
  {
    key: "siu",
    label: "SIU",
    nombre: "Secundaria Internacional",
    color: "#d9531e",
    href: "https://blogs.uninter.edu.mx/siu/",
  },
  {
    key: "biu",
    label: "BIU",
    nombre: "Bachillerato Internacional",
    color: "#2e7d32",
    href: "https://blogs.uninter.edu.mx/biu/",
  },
  {
    key: "escat",
    label: "ESCAT",
    nombre: "Ciencias, Artes y Tecnología",
    color: "#6a1b9a",
    href: "https://blogs.uninter.edu.mx/escat/",
  },
  {
    key: "endecs",
    label: "ENDECS",
    nombre: "Negocios, Derecho y Ciencias Sociales",
    color: "#1565c0",
    href: "https://blogs.uninter.edu.mx/endecs/",
  },
  {
    key: "ehli",
    label: "EHLI",
    nombre: "Humanidades, Lenguas e Internacional.",
    color: "#00695c",
    href: "https://blogs.uninter.edu.mx/ehli/",
  },
  {
    key: "spanish",
    label: "SS",
    nombre: "Spanish School",
    color: "#bf360c",
    href: "https://spanishuninter.blog/",
  },
];
</script>

<template>
  <section class="bl-section">
    <div class="uninter-container">
      <!-- ENCABEZADO -->
      <div class="bl-header">
        <div class="bl-header__left">
          <span class="bl-eyebrow">— COMUNIDAD ACADÉMICA</span>
          <h2 class="bl-title">Blogs <em>UNINTER</em></h2>
        </div>
        <a
          href="https://uninter.edu.mx/blogs"
          target="_blank"
          rel="noopener"
          class="bl-btn-all"
        >
          Ver todos →
        </a>
      </div>

      <!-- GRID DE TARJETAS -->
      <div class="bl-grid">
        <a
          v-for="b in blogs"
          :key="b.key"
          :href="b.href"
          target="_blank"
          rel="noopener"
          class="bl-card"
        >
          <!-- Banner Superior de Color con Marca de Agua -->
          <div class="bl-card__thumb" :style="{ backgroundColor: b.color }">
            <span class="bl-card__watermark" aria-hidden="true">{{ b.label }}</span>
            <span class="bl-card__initials">{{ b.label }}</span>
          </div>

          <!-- Cuerpo de la Tarjeta -->
          <div class="bl-card__body">
            <p class="bl-card__nombre">{{ b.nombre }}</p>
            <span class="bl-card__link">
              Leer <ArrowRight :size="13" class="bl-card__icon" />
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bl-section {
  background-color: #f8fafc;
  padding: 5rem 0 5.5rem;
  font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
  border-bottom: 1px solid #e2e8f0;
}

.uninter-container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
}

/* ═══ ENCABEZADO ═══ */
.bl-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  gap: 1.25rem;
}

.bl-header__left {
  display: flex;
  flex-direction: column;
}

.bl-eyebrow {
  color: #0073b4;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.bl-title {
  color: #0f3c61;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2.4rem, 4vw, 3.1rem);
  font-weight: 800;
  line-height: 1.1;
  margin: 0;
  letter-spacing: -0.01em;
}

.bl-title em {
  color: #694E39;
  font-style: italic;
}

.bl-btn-all {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  border: 1.5px solid #0f3c61;
  border-radius: 9999px;
  color: #0f3c61;
  padding: 0.45rem 1.4rem;
  font-size: 0.88rem;
  font-weight: 700;
  text-decoration: none;
  background: #ffffff;
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
}

.bl-btn-all:hover {
  background: #0f3c61;
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(15, 60, 97, 0.15);
}

/* ═══ GRID ═══ */
.bl-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

/* ═══ TARJETA INDIVIDUAL ═══ */
.bl-card {
  background: #ffffff;
  border: 1.5px solid #e2e8f0;
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  position: relative;
}

.bl-card:hover {
  border-color: #A78D75;
  box-shadow: 0 10px 24px rgba(105, 78, 57, 0.12);
  transform: translateY(-3px);
}

.bl-card__thumb {
  height: 110px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  padding: 0.875rem 1rem;
}

.bl-card__watermark {
  position: absolute;
  right: -6px;
  bottom: -10px;
  font-size: 4.5rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.13);
  line-height: 1;
  user-select: none;
  pointer-events: none;
  letter-spacing: -0.04em;
}

.bl-card__initials {
  font-size: 1.15rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 0.04em;
  position: relative;
  z-index: 1;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
}

.bl-card__body {
  padding: 1.1rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  gap: 0.875rem;
  background: #ffffff;
}

.bl-card__nombre {
  font-size: 0.875rem;
  font-weight: 700;
  color: #1e293b;
  line-height: 1.35;
  margin: 0;
}

.bl-card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.8rem;
  font-weight: 700;
  color: #694E39;
}

.bl-card__icon {
  transition: transform 0.2s ease;
}

.bl-card:hover .bl-card__icon {
  transform: translateX(3px);
}

@media (max-width: 1024px) {
  .bl-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .bl-grid {
    grid-template-columns: 1fr;
  }
}
</style>
