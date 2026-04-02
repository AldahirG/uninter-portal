<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const blogs = [
  { key: 'daeya',  label: 'DAEYA',  nombre: 'Atención a Estudiantes UNINTER',          color: '#0F3C61', href: 'https://uninter.edu.mx/blogs/daeya' },
  { key: 'arq',    label: 'ARQ-ICI', nombre: 'Arquitectura e Ingeniería Civil',         color: '#546E7A', href: 'https://uninter.edu.mx/blogs/arq-ici' },
  { key: 'siu',    label: 'SIU',     nombre: 'Secundaria Internacional',                color: '#E65100', href: 'https://siu.uninter.edu.mx/blog' },
  { key: 'biu',    label: 'BIU',     nombre: 'Bachillerato Internacional',              color: '#2E7D32', href: 'https://biu.uninter.edu.mx/blog' },
  { key: 'escat',  label: 'ESCAT',   nombre: 'Ciencias, Artes y Tecnología',            color: '#6A1B9A', href: 'https://uninter.edu.mx/blogs/escat' },
  { key: 'endecs', label: 'ENDECS',  nombre: 'Negocios, Derecho y Ciencias Sociales',   color: '#1565C0', href: 'https://uninter.edu.mx/blogs/endecs' },
  { key: 'ehli',   label: 'EHLI',    nombre: 'Humanidades, Lenguas e Internacional.',   color: '#00695C', href: 'https://uninter.edu.mx/blogs/ehli' },
  { key: 'spanish',label: 'SS',      nombre: 'Spanish School',                          color: '#BF360C', href: 'https://spanishschool.uninter.edu.mx/blog' },
]
</script>

<template>
  <section class="bl-section uninter-section">
    <div class="uninter-container">

      <div class="bl-header">
        <div>
          <div class="uninter-eyebrow">Comunidad académica</div>
          <h2 class="uninter-section-title">Blogs</h2>
        </div>
        <a href="https://uninter.edu.mx/blogs" target="_blank" class="uninter-ver-mas">Ver todos →</a>
      </div>

      <div class="bl-grid">
        <a
          v-for="b in blogs"
          :key="b.key"
          :href="b.href"
          target="_blank"
          rel="noopener"
          class="bl-card"
        >
          <div class="bl-card__thumb" :style="`background:${b.color}`">
            <span class="bl-card__initials">{{ b.label }}</span>
          </div>
          <div class="bl-card__body">
            <p class="bl-card__nombre">{{ b.nombre }}</p>
            <span class="bl-card__link">Leer <ArrowRight :size="11" /></span>
          </div>
        </a>
      </div>

    </div>
  </section>
</template>

<style scoped>
.bl-section { background: #f8f9fb; }
.bl-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem; }

.bl-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: .875rem;
}

.bl-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
  text-decoration: none;
  transition: transform .2s, box-shadow .2s;
  display: flex;
  flex-direction: column;
}
.bl-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(0,0,0,.09); }

.bl-card__thumb {
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.bl-card__initials {
  font-size: 1rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: .06em;
}

.bl-card__body {
  padding: .875rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  flex: 1;
}

.bl-card__nombre {
  font-size: .8rem;
  font-weight: 700;
  color: #1e293b;
  line-height: 1.4;
  margin: 0;
  flex: 1;
}

.bl-card__link {
  display: flex;
  align-items: center;
  gap: .2rem;
  font-size: .72rem;
  font-weight: 700;
  color: #0F3C61;
}

@media (max-width: 900px) { .bl-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 640px) { .bl-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 400px) { .bl-grid { grid-template-columns: repeat(2, 1fr); gap: .625rem; } }
</style>