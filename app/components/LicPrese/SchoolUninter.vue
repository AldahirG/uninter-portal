
<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";

const blogs = [
  { key: "daeya", label: "DAEYA", nombre: "Atención a Estudiantes UNINTER", color: "#003B5C", href: "https://blogs.uninter.edu.mx/daeya/" },
  { key: "arq", label: "ARQ-ICI", nombre: "Arquitectura e Ingeniería Civil", color: "#546E7A", href: "https://blogs.uninter.edu.mx/arq-ici/" },
  { key: "siu", label: "SIU", nombre: "Secundaria Internacional", color: "#E65100", href: "https://blogs.uninter.edu.mx/siu/" },
  { key: "biu", label: "BIU", nombre: "Bachillerato Internacional", color: "#2E7D32", href: "https://blogs.uninter.edu.mx/biu/" },
  { key: "escat", label: "ESCAT", nombre: "Ciencias, Artes y Tecnología", color: "#6A1B9A", href: "https://blogs.uninter.edu.mx/escat/" },
  { key: "endecs", label: "ENDECS", nombre: "Negocios, Derecho y Ciencias Sociales", color: "#0073B4", href: "https://blogs.uninter.edu.mx/endecs/" },
  { key: "ehli", label: "EHLI", nombre: "Humanidades, Lenguas e Internacional.", color: "#00695C", href: "https://blogs.uninter.edu.mx/ehli/" },
  { key: "spanish", label: "SS", nombre: "Spanish School", color: "#BF360C", href: "https://spanishuninter.blog/" }
];
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
        <a v-for="blog in blogs" :key="blog.key" :href="blog.href" target="_blank" rel="noopener" class="bl-card">
          <div class="bl-card__thumb" :style="{ background: blog.color }">
            <span class="bl-card__initials">{{ blog.label }}</span>
          </div>
          <div class="bl-card__body">
            <p class="bl-card__nombre">{{ blog.nombre }}</p>
            <span class="bl-card__link">Leer <ArrowRight :size="11" /></span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bl-section{background:#f8f9fb}
.bl-header{align-items:flex-end;display:flex;flex-wrap:wrap;gap:1rem;justify-content:space-between;margin-bottom:2rem}
.uninter-section-title{color:#0f3c61;font-family:var(--font-serif,Georgia,serif);font-size:clamp(2rem,4vw,3rem);font-weight:700;margin:0}
.bl-grid{display:grid;gap:.875rem;grid-template-columns:repeat(4,1fr)}
.bl-card{background:#fff;border:1px solid #e2e8f0;border-radius:10px;display:flex;flex-direction:column;overflow:hidden;text-decoration:none;transition:transform .2s,box-shadow .2s}
.bl-card:hover{box-shadow:0 8px 24px #00000017;transform:translateY(-3px)}
.bl-card__thumb{align-items:center;display:flex;height:72px;justify-content:center;position:relative}
.bl-card__initials{color:#fff;font-size:1rem;font-weight:800;letter-spacing:.06em}
.bl-card__body{display:flex;flex:1;flex-direction:column;gap:.5rem;padding:.875rem}
.bl-card__nombre{color:#1e293b;flex:1;font-size:.8rem;font-weight:700;line-height:1.4;margin:0}
.bl-card__link{align-items:center;color:#003b5c;display:flex;font-size:.72rem;font-weight:700;gap:.2rem}
@media(max-width:900px){.bl-grid{grid-template-columns:repeat(3,1fr)}
@media(max-width:640px){.bl-grid{grid-template-columns:repeat(2,1fr)}
@media(max-width:400px){.bl-grid{gap:.625rem;grid-template-columns:repeat(2,1fr)}

}
}
}
</style>