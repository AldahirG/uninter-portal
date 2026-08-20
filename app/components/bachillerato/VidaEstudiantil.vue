<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";

const blogs = [
  { id: 1, titulo: "Blog INTERNACIONALIZACIÓN", siglas: "INTERNACIONALIZACIÓN", color: "#6A1B9A", url: "https://blogs.uninter.edu.mx/congresoInternacionalLatinoamerica/" },
  { id: 2, titulo: "Blog Difusion Cultural", siglas: "Difusión Cultural", color: "#1565C0", url: "https://blogs.uninter.edu.mx/difusioncultural" },
  { id: 3, titulo: "Blog Deportes", siglas: "Deportes", color: "#00695C", url: "https://blogs.uninter.edu.mx/deportes/" },
  { id: 4, titulo: "Blog BIU", siglas: "BIU", color: "#2E7D32", url: "https://blogs.uninter.edu.mx/biu" }
];

const redes = [
  { nombre: "Facebook", href: "https://www.facebook.com/uninteredu", icon: "mdi:facebook" },
  { nombre: "Instagram", href: "https://www.instagram.com/uninter_cuerna", icon: "mdi:instagram" },
  { nombre: "YouTube", href: "https://www.youtube.com/user/UniversidadUninter", icon: "mdi:youtube" },
  { nombre: "TikTok", href: "https://www.tiktok.com/@uninter_cuerna", icon: "mdi:tiktok" }
];
</script>

<template>
  <section class="vida-est-section">
    <div class="biu-container">
      <div class="vida-est-header">
        <h2 class="vida-est-title">Conoce la vida estudiantil en BIU</h2>
        <p class="vida-est-sub">A través de nuestros blogs y redes sociales</p>
      </div>

      <div class="blogs-grid">
        <a v-for="t in blogs" :key="t.id" :href="t.url" target="_blank" class="blog-card">
          <div class="blog-card__thumb" :style="`background: ${t.color}`">
            <span class="blog-card__initials">{{ t.siglas }}</span>
          </div>
          <div class="blog-card__body">
            <p class="blog-card__titulo">{{ t.titulo }}</p>
            <span class="blog-card__link">Ingresar <ArrowRight :size="11" /></span>
          </div>
        </a>
      </div>

      <div class="redes-bar">
        <a v-for="t in redes" :key="t.nombre" :href="t.href" target="_blank" :aria-label="t.nombre" class="red-link">
          <Icon :name="t.icon" size="28" />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.biu-container{margin:0 auto;max-width:1280px;padding:0 1.5rem}
.vida-est-section{background:#0d1f0e;padding:5.5rem 0;--pl:#a8d86e}
.vida-est-header{margin-bottom:3rem;text-align:center}
.vida-est-title{color:#fff;font-family:var(--font-serif,Georgia,serif);font-size:clamp(1.8rem,4vw,2.6rem);font-weight:800;letter-spacing:-.01em;margin:0 0 .5rem}
.vida-est-sub{color:var(--pl);font-size:.78rem;font-weight:600;letter-spacing:.05em;margin:0;text-transform:uppercase}
.blogs-grid{display:grid;gap:1rem;grid-template-columns:repeat(4,1fr);margin-bottom:3.5rem}
.blog-card{background:#ffffff0d;border:1px solid hsla(0,0%,100%,.08);border-radius:12px;display:flex;flex-direction:column;overflow:hidden;text-decoration:none;transition:transform .2s,box-shadow .2s}
.blog-card:hover{background:#ffffff14;box-shadow:0 12px 32px #00000059;transform:translateY(-4px)}
.blog-card__thumb{align-items:center;display:flex;height:80px;justify-content:center;position:relative;transition:opacity .2s}
.blog-card:hover .blog-card__thumb{opacity:.95}
.blog-card__initials{color:#fff;font-size:1.15rem;font-weight:900;letter-spacing:.08em;text-transform:uppercase}
.blog-card__body{display:flex;flex:1;flex-direction:column;gap:.625rem;padding:1rem}
.blog-card__titulo{color:#ffffffd9;flex:1;font-size:.8rem;font-weight:700;line-height:1.45;margin:0}
.blog-card:hover .blog-card__titulo{color:#fff}
.blog-card__link{align-items:center;color:var(--pl);display:flex;font-size:.72rem;font-weight:800;gap:.25rem;letter-spacing:.05em;text-transform:uppercase;transition:transform .2s}
.blog-card:hover .blog-card__link{color:#fff;transform:translate(2px)}
.redes-bar{border-top:1px solid hsla(0,0%,100%,.1);gap:1.5rem;padding-top:2.5rem}
.red-link,.redes-bar{align-items:center;display:flex;justify-content:center}
.red-link{background:#ffffff12;border-radius:12px;color:#fff9;height:48px;text-decoration:none;transition:background .2s,color .2s,transform .2s;width:48px}
.red-link:hover{background:#2e7d32;color:#fff;transform:translateY(-3px)}
@media(max-width:900px){.blogs-grid{grid-template-columns:repeat(2,1fr)}
@media(max-width:560px){.blogs-grid{gap:.75rem;grid-template-columns:repeat(2,1fr)}
}}
</style>