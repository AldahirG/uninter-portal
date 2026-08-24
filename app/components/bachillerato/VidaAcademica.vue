<script setup lang="ts">
import { Quote, Sparkles, CheckCircle, GraduationCap } from "lucide-vue-next";

const mdctCards = [
  { titulo: "Pensamiento crítico", desc: "Desarrolla capacidad de análisis y resolución de problemas reales." },
  { titulo: "Comunicación digital", desc: "Domina herramientas tecnológicas de comunicación global." },
  { titulo: "Colaboración virtual", desc: "Trabaja en equipos multiculturales en entornos digitales." },
  { titulo: "Ciudadanía digital", desc: "Comprende el uso ético y responsable de la tecnología." }
];
</script>

<template>
  <section class="vida-section" id="vida-academica">
    <div class="biu-container">
      <div class="vida-header">
        <div class="biu-eyebrow">
          <span class="eyebrow-line"></span> VIDA ACADÉMICA
        </div>
        <h2 class="vida-title">
          Formación que va<br />
          <em>más allá del aula</em>
        </h2>
      </div>

      <div class="vida-main">
        <div class="vida-main__text">
          <p class="vida-p">
            El BIU está diseñado para prepararte académicamente con los más altos estándares, pero también para desarrollar tus habilidades humanas y sociales. Participarás en actividades educativas, culturales, deportivas y de servicio a la comunidad.
          </p>
          <p class="vida-p">
            Convivirás con estudiantes nacionales y extranjeros, participarás en viajes, congresos, actividades altruistas y equipos deportivos, construyendo una red de contactos global desde el bachillerato.
          </p>
          <blockquote class="vida-quote">
            <Quote :size="28" class="vida-quote__icon" />
            <p class="vida-quote__text">
              "Un emprendedor ve oportunidades donde otros ven problemas."
            </p>
            <cite class="vida-quote__cite">— Filosofía BIU UNINTER</cite>
          </blockquote>
        </div>

        <div class="vida-main__img">
          <img src="/images/bachillerato/10.jpg" alt="Vida académica BIU" class="vida-img" />
          <div class="vida-img__badge">
            <GraduationCap :size="18" />
            <span>Logrocimiento UNINTER</span>
          </div>
        </div>
      </div>

      <div class="mdct-block">
        <div class="mdct-header">
          <div class="mdct-icon-wrap">
            <Sparkles :size="24" />
          </div>
          <div>
            <h3 class="mdct-title">Marco de Desarrollo de Competencias Tecnológicas</h3>
            <p class="mdct-abbr">MDCT</p>
          </div>
        </div>
        <p class="mdct-desc">
          El MDCT es el sistema de certificación tecnológica de UNINTER que valida tus competencias digitales a lo largo del bachillerato. Dominarás herramientas de diseño, programación, comunicación y análisis de datos con un enfoque práctico y orientado al futuro.
        </p>
        <div class="mdct-grid">
          <div v-for="i in mdctCards" :key="i.titulo" class="mdct-card">
            <CheckCircle :size="16" class="mdct-card__icon" />
            <div>
              <p class="mdct-card__title">{{ i.titulo }}</p>
              <p class="mdct-card__desc">{{ i.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="logro-block">
        <div class="logro-block__text">
          <div class="biu-eyebrow">
            <span class="eyebrow-line"></span> SISTEMA DE RECONOCIMIENTO
          </div>
          <h3 class="logro-title">Logrocimiento</h3>
          <p class="logro-desc">
            El sistema Logrocimiento reconoce tus logros académicos, deportivos, culturales y de liderazgo durante tu bachillerato. Cada punto acumulado se traduce en beneficios reales: becas, certificaciones adicionales y reconocimientos oficiales que enriquecen tu perfil.
          </p>
          <a href="https://biu.uninter.edu.mx/" target="_blank" class="logro-link">
            Conoce el sistema →
          </a>
        </div>
        <div class="logro-block__visual">
          <div class="logro-circles">
            <div class="logro-circle logro-circle--lg">
              <span class="logro-circle__val">A+</span>
              <span class="logro-circle__lbl">Académico</span>
            </div>
            <div class="logro-circle logro-circle--sm">
              <span class="logro-circle__val">⚽</span>
              <span class="logro-circle__lbl">Deportivo</span>
            </div>
            <div class="logro-circle logro-circle--sm logro-circle--offset">
              <span class="logro-circle__val">🎭</span>
              <span class="logro-circle__lbl">Cultural</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.biu-container{margin:0 auto;max-width:1280px;padding:0 1.5rem}
.vida-section{background:#fff;padding:5.5rem 0}
.vida-header{margin-bottom:3rem}
.biu-eyebrow{align-items:center;color:#6baf04;display:flex;font-size:.72rem;font-weight:800;gap:.75rem;letter-spacing:.14em;margin-bottom:1rem;text-transform:uppercase}
.eyebrow-line{background:#6baf04;display:block;flex-shrink:0;height:2px;width:24px}
.vida-title{color:#1e293b;font-family:var(--font-serif,Georgia,serif);font-size:clamp(2rem,4vw,3rem);font-weight:800;letter-spacing:-.02em;line-height:1.12;margin:0}
.vida-title em{color:#6baf04;font-style:italic}
.vida-main{align-items:center;display:grid;gap:4rem;grid-template-columns:1fr 1fr;margin-bottom:4rem}
.vida-p{color:#475569;font-size:.98rem;line-height:1.72;margin:0 0 1.25rem}
.vida-quote{background:#f1f8f0;border-left:4px solid #6baf04;border-radius:0 12px 12px 0;margin:1.75rem 0 0;padding:1.5rem 1.5rem 1.5rem 1.25rem}
.vida-quote__icon{color:#6baf04;margin-bottom:.75rem}
.vida-quote__text{color:#4a7a02;font-family:var(--font-serif,Georgia,serif);font-size:1.05rem;font-style:italic;font-weight:600;line-height:1.5;margin:0 0 .5rem}
.vida-quote__cite{color:#64748b;font-size:.72rem;font-style:normal;font-weight:700;letter-spacing:.06em;text-transform:uppercase}
.vida-main__img{position:relative}
.vida-img{aspect-ratio:4/3;background:#e8f5e9;border-radius:16px;display:block;-o-object-fit:cover;object-fit:cover;width:100%}
.vida-img__badge{align-items:center;background:#4a7a02;border-radius:20px;bottom:1rem;box-shadow:0 4px 12px #00000040;color:#fff;display:flex;font-size:.75rem;font-weight:700;gap:.5rem;left:1rem;padding:.4rem .875rem;position:absolute}
.mdct-block{background:#0d1f0e;border-radius:20px;margin-bottom:3.5rem;padding:2.5rem 2.5rem 2.75rem}
.mdct-header{align-items:flex-start;display:flex;gap:1rem;margin-bottom:1.25rem}
.mdct-icon-wrap{align-items:center;background:#a9d86e26;border-radius:12px;color:#a8d86e;display:flex;flex-shrink:0;height:48px;justify-content:center;width:48px}
.mdct-title{color:#fff;font-size:1rem;font-weight:800;line-height:1.3;margin:0 0 .2rem}
.mdct-abbr{color:#a8d86e;font-size:.7rem;font-weight:700;letter-spacing:.12em;margin:0;text-transform:uppercase}
.mdct-desc{color:#ffffffa6;font-size:.9rem;line-height:1.7;margin:0 0 2rem;max-width:680px}
.mdct-grid{display:grid;gap:1rem;grid-template-columns:repeat(4,1fr)}
.mdct-card{align-items:flex-start;background:#ffffff0f;border:1px solid hsla(0,0%,100%,.08);border-radius:12px;display:flex;gap:.75rem;padding:1.25rem;transition:background .2s}
.mdct-card:hover{background:#ffffff1a}
.mdct-card__icon{color:#a8d86e;flex-shrink:0;margin-top:2px}
.mdct-card__title{color:#fff;font-size:.82rem;font-weight:700;margin:0 0 .3rem}
.mdct-card__desc{color:#ffffff80;font-size:.75rem;line-height:1.5;margin:0}
.logro-block{align-items:center;background:#f1f8f0;border-radius:20px;display:grid;gap:3rem;grid-template-columns:1fr auto;padding:2.5rem 3rem}
.logro-title{color:#4a7a02;font-family:var(--font-serif,Georgia,serif);font-size:2rem;font-weight:800;margin:0 0 1rem}
.logro-desc{color:#475569;font-size:.92rem;line-height:1.7;margin:0 0 1.5rem;max-width:520px}
.logro-link{color:#6baf04;font-size:.88rem;font-weight:700;text-decoration:none;transition:color .2s}
.logro-link:hover{color:#4a7a02;text-decoration:underline}
.logro-circles{flex-shrink:0;height:180px;position:relative;width:180px}
.logro-circle{align-items:center;background:#fff;border:3px solid #6baf04;border-radius:50%;box-shadow:0 8px 24px #6baf0426;display:flex;flex-direction:column;justify-content:center;position:absolute}
.logro-circle--lg{height:110px;left:50%;top:50%;transform:translate(-50%,-50%);width:110px;z-index:2}
.logro-circle--sm{height:68px;width:68px;z-index:1}
.logro-circle--sm:first-of-type{right:0;top:0}
.logro-circle--offset{bottom:0;left:0}
.logro-circle__val{color:#4a7a02;font-size:1.5rem;font-weight:900;line-height:1}
.logro-circle__lbl{color:#64748b;font-size:.55rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase}
@media(max-width:1024px){.mdct-grid{grid-template-columns:repeat(2,1fr)}
@media(max-width:860px){.vida-main{gap:2.5rem}
.logro-block,.vida-main{grid-template-columns:1fr}
.logro-circles{display:none}
@media(max-width:640px){.mdct-block{padding:1.75rem 1.25rem}
.mdct-grid{grid-template-columns:1fr}
}}}
</style>