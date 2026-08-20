<script setup lang="ts">
import { Building2, Globe2, Link, Award, ArrowRight } from "lucide-vue-next"; // Guessing icons

const c = [
  { icon: Building2, value: "130+", label: "Universidades aliadas" },
  { icon: Globe2, value: "25", label: "Países representados" },
  { icon: Link, value: "500+", label: "Convenios internacionales" },
  { icon: Award, value: "2", label: "Certificaciones incluidas" }
];

const d = [
  { nombre: "AFS Intercultural Programs", desc: "Intercambio cultural y académico en más de 50 países." },
  { nombre: "Canada Options Education", desc: "Programas de inmersión y estudios en Canadá." },
  { nombre: "Latino Australia Education", desc: "Oportunidades de estudio y trabajo en Australia." },
  { nombre: "Foundation for Academic Exchange", desc: "Red global de movilidad estudiantil universitaria." }
];
</script>

<template>
  <section class="inter-section">
    <div class="inter-banner">
      <img src="/images/bachillerato/3.jpg" alt="Internacionalización BIU" class="inter-banner__img" />
      <div class="inter-banner__overlay"></div>
      <div class="biu-container inter-banner__content">
        <div class="inter-banner__inner">
          <p class="inter-eyebrow">Movilidad internacional</p>
          <h2 class="inter-title">
            Internacionalización<br />
            <em>sin fronteras</em>
          </h2>
          <p class="inter-desc">
            En BIU UNINTER creemos que la mejor educación trasciende las aulas. Nuestros alumnos tienen acceso a intercambios, certificaciones y experiencias internacionales que transforman su visión del mundo.
          </p>
        </div>
      </div>
    </div>

    <div class="inter-body">
      <div class="biu-container">
        <div class="inter-stats">
          <div v-for="e in c" :key="e.label" class="inter-stat">
            <div class="inter-stat__icon">
              <component :is="e.icon" :size="20" />
            </div>
            <p class="inter-stat__value">{{ e.value }}</p>
            <p class="inter-stat__label">{{ e.label }}</p>
          </div>
        </div>

        <div class="inter-programs">
          <div class="biu-eyebrow">
            <span class="eyebrow-line"></span> PROGRAMAS ALIADOS
          </div>
          <div class="inter-programs__grid">
            <div v-for="e in d" :key="e.nombre" class="prog-card">
              <ArrowRight :size="16" class="prog-card__icon" />
              <div>
                <p class="prog-card__name">{{ e.nombre }}</p>
                <p class="prog-card__desc">{{ e.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="inter-cta-wrap">
        <a href="https://universidad.uninter.edu.mx/Internacionalizaci%C3%B3n" target="_blank" class="inter-cta">
          Conoce todos los programas de movilidad →
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>


.biu-container{margin:0 auto;max-width:1280px;padding:0 1.5rem}
.inter-banner{align-items:center;background:#0d1f0e;display:flex;height:clamp(320px,45vh,480px);overflow:hidden;position:relative}
.inter-banner__img{height:100%;inset:0;-o-object-fit:cover;object-fit:cover;position:absolute;width:100%}
.inter-banner__overlay{background:linear-gradient(110deg,#0d1f0ee6,#0d1f0eb8 55%,#0d1f0e59);inset:0;position:absolute}
.inter-banner__content{position:relative;width:100%;z-index:2}
.inter-banner__inner{max-width:600px}
.inter-eyebrow{color:#a8d86e;font-size:.72rem;font-weight:700;letter-spacing:.14em;margin:0 0 .875rem;text-transform:uppercase}
.inter-title{color:#fff;font-family:var(--font-serif,Georgia,serif);font-size:clamp(2rem,4.5vw,3.4rem);font-weight:800;letter-spacing:-.02em;line-height:1.1;margin:0 0 1.25rem}
.inter-title em{color:#a8d86e;font-style:normal}
.inter-desc{color:#ffffffad;font-size:.96rem;line-height:1.65;margin:0;max-width:520px}
.inter-body{background:#fff;padding:4rem 0 5rem}
.inter-stats{display:grid;gap:1.5rem;grid-template-columns:repeat(4,1fr);margin-bottom:3.5rem}
.inter-stat{align-items:center;background:#f1f8f0;border:1px solid #c8e6c9;border-radius:14px;display:flex;flex-direction:column;gap:.5rem;padding:1.75rem 1rem;text-align:center;transition:box-shadow .2s,transform .2s}
.inter-stat:hover{box-shadow:0 10px 28px #6baf041f;transform:translateY(-3px)}
.inter-stat__icon{align-items:center;background:#e8f5e9;border-radius:10px;color:#6baf04;display:flex;height:44px;justify-content:center;width:44px}
.inter-stat__value{color:#4a7a02;font-family:var(--font-serif,Georgia,serif);font-size:clamp(1.6rem,2.5vw,2rem);font-weight:900;line-height:1;margin:0}
.inter-stat__label{color:#64748b;font-size:.72rem;font-weight:600;margin:0;text-align:center}
.inter-programs{margin-bottom:2.5rem}
.biu-eyebrow{align-items:center;color:#6baf04;display:flex;font-size:.72rem;font-weight:800;gap:.75rem;letter-spacing:.14em;margin-bottom:1.5rem;text-transform:uppercase}
.eyebrow-line{background:#6baf04;display:block;flex-shrink:0;height:2px;width:24px}
.inter-programs__grid{display:grid;gap:1rem;grid-template-columns:repeat(2,1fr)}
.prog-card{align-items:flex-start;background:#f8f9fb;border:1px solid #e2e8f0;border-radius:12px;display:flex;gap:.875rem;padding:1.25rem 1.5rem;transition:border-color .2s,box-shadow .2s}
.prog-card:hover{border-color:#a5d6a7;box-shadow:0 6px 20px #6baf0414}
.prog-card__icon{color:#6baf04;flex-shrink:0;margin-top:2px}
.prog-card__name{color:#4a7a02;font-size:.88rem;font-weight:700;margin:0 0 .25rem}
.prog-card__desc{color:#64748b;font-size:.78rem;line-height:1.5;margin:0}
.inter-cta-wrap{text-align:center}
.inter-cta{color:#6baf04;font-size:.9rem;font-weight:700;text-decoration:none;transition:color .2s}
.inter-cta:hover{color:#4a7a02;text-decoration:underline}
@media(max-width:900px){.inter-stats{grid-template-columns:repeat(2,1fr)}
.inter-programs__grid{grid-template-columns:1fr}
@media(max-width:560px){.inter-banner{height:clamp(280px,50vh,400px)}
.inter-desc{display:none}
}}
</style>