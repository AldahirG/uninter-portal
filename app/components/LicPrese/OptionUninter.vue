
<script setup lang="ts">
import { CheckCircle2 } from "lucide-vue-next";

const options = [
  {
    titulo: "Calidad y acreditaciones",
    items: [
      "Más de 40 años de calidad educativa.",
      "Por décimo tercer año consecutivo en el ranking de las mejores universidades.",
      "Certificación ISO 9001:2015 en todos nuestros procesos.",
      "Acreditación FIMPES.",
      "Titulación por Excelencia Académica, Tesis, Posgrado, CENEVAL y Experiencia Profesional.",
      "Certificaciones y acreditaciones de acuerdo a cada licenciatura."
    ]
  },
  {
    titulo: "Internacionalización",
    items: [
      "Intercambios académicos y culturales con más de 130 Universidades en el mundo.",
      "Ambiente multicultural con alumnos provenientes de 25 países.",
      "49 Materias en Inglés y Francés.",
      "Diploma Internacional.",
      "Profesores extranjeros o con perfil internacional.",
      "Certificado internacional: Francia (RIEC, RICP, LRI).",
      "Idiomas curriculares: Inglés y Francés.",
      "Idiomas Extracurriculares: Alemán, Chino, Ruso, Italiano y más.",
      "Materias extracurriculares en el extranjero.",
      "Miembros de asociaciones Internacionales para los estudios."
    ]
  },
  {
    titulo: "Desarrollo profesional",
    items: [
      "Más de 1,500 vínculos empresariales para prácticas profesionales.",
      "Enlace profesional y voluntariado Internacional.",
      "Programa de tutores y programas personalizados de becas.",
      "Asesorías académicas sin costo.",
      "Congresos, ferias, exposiciones y simposios por licenciatura.",
      "Realización de proyectos enfocados a soluciones reales."
    ]
  },
  {
    titulo: "Experiencia universitaria",
    items: [
      "Clases multidisciplinarias.",
      "Talleres culturales y deportivos.",
      "Certificación DELF (Diplome D´études en langue francaise).",
      "Certificación TKT (Teaching Knowledge Test)."
    ]
  }
];
</script>

<template>
  <section class="opt-section">
    <div class="opt-reasons">
      <div class="uninter-container">
        <div class="opt-reasons__header">
          <div class="section-eyebrow">
            <span class="eyebrow-line"></span> 25 RAZONES PARA ELEGIR UNINTER
          </div>
          <h3 class="opt-reasons__title">
            Conócenos y <em>compáranos</em>
          </h3>
        </div>
        <div class="opt-grid">
          <div v-for="opt in options" :key="opt.titulo" class="opt-card">
            <h4 class="opt-card__title">{{ opt.titulo }}</h4>
            <ul class="opt-card__list">
              <li v-for="item in opt.items" :key="item" class="opt-card__item">
                <CheckCircle2 :size="15" class="opt-card__icon" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.uninter-container{margin:0 auto;max-width:1280px;padding:0 1.5rem}
.opt-banner{align-items:center;background:#003b5c;display:flex;height:clamp(320px,45vh,500px);overflow:hidden;position:relative}
.opt-banner__img{height:100%;inset:0;-o-object-fit:cover;object-fit:cover;position:absolute;width:100%}
.opt-banner__overlay{background:linear-gradient(110deg,#07142aeb,#0a1e3cc7 55%,#0a1e3c73);inset:0;position:absolute}
.opt-banner__content{position:relative;width:100%;z-index:2}
.opt-banner__eyebrow{color:#00b2e3;font-size:.72rem;font-weight:700;letter-spacing:.14em;margin:0 0 .75rem;text-transform:uppercase}
.opt-banner__title{color:#fff;font-family:var(--font-serif,Georgia,serif);font-size:clamp(2rem,5vw,3.6rem);font-weight:800;letter-spacing:-.02em;line-height:1.1;margin:0 0 1.25rem}
.opt-banner__title em{color:#00b2e3;font-style:normal}
.opt-banner__text{color:#ffffffb8;font-size:clamp(.88rem,1.3vw,1rem);line-height:1.65;margin:0;max-width:640px}
.opt-reasons{background:#f8f9fb;padding:5rem 0}
.opt-reasons__header{margin-bottom:3rem}
.section-eyebrow{align-items:center;color:#003b5c;display:flex;font-size:.72rem;font-weight:800;gap:.75rem;letter-spacing:.14em;margin-bottom:1rem;text-transform:uppercase}
.eyebrow-line{background:#003b5c;display:block;flex-shrink:0;height:2px;width:24px}
.opt-reasons__title{color:#0f3c61;font-family:var(--font-serif,Georgia,serif);font-size:clamp(1.8rem,3.5vw,2.8rem);font-weight:800;letter-spacing:-.02em;line-height:1.15;margin:0}
.opt-reasons__title em{color:#0073b4;font-style:italic}
.opt-grid{display:grid;gap:1.5rem;grid-template-columns:repeat(2,1fr)}
.opt-card{background:#fff;border:1px solid #e2e8f0;border-radius:16px;padding:2rem 2rem 2.25rem;transition:box-shadow .2s,transform .2s}
.opt-card:hover{box-shadow:0 12px 32px #003b5c17;transform:translateY(-3px)}
.opt-card__title{border-bottom:2px solid #dceaf7;color:#003b5c;font-size:1rem;font-weight:800;margin:0 0 1.25rem;padding-bottom:.875rem}
.opt-card__list{display:flex;flex-direction:column;gap:.65rem;list-style:none;margin:0;padding:0}
.opt-card__item{align-items:flex-start;color:#475569;display:flex;font-size:.85rem;gap:.6rem;line-height:1.5}
.opt-card__icon{color:#0073b4;flex-shrink:0;margin-top:1px}
@media(max-width:860px){.opt-grid{grid-template-columns:1fr}
@media(max-width:560px){.opt-reasons{padding:3.5rem 0}
.opt-banner__text{display:none}

}
}
</style>