<script setup lang="ts">
import { Quote, Briefcase, Globe, FlaskConical, GraduationCap } from "lucide-vue-next";

const pilares = [
  { icon: Briefcase,    label: "Alta Dirección" },
  { icon: Globe,        label: "Internacionalización" },
  { icon: FlaskConical, label: "Investigación" },
  { icon: GraduationCap, label: "Docencia" },
];
</script>

<template>
  <section class="pg-va">
    <!-- Sección principal -->
    <div class="pg-va__main">
      <div class="pg-container pg-va__grid">
        <div class="pg-va__left">
          <p class="pg-va__eyebrow">Vida Universitaria</p>
          <h2 class="pg-va__title">
            En Posgrados te ofrecemos<br />
            <em class="pg-va__accent">experiencias únicas</em>
          </h2>
          <p class="pg-va__text">
            En UNINTER te ofrecemos comodidades únicas: intercambio internacional y relación directa
            con otras culturas del mundo a través de la Universidad Internacional, con más de 40 años
            de experiencia educativa a nivel internacional y amplio reconocimiento mundial.
          </p>
          <p class="pg-va__text">
            La Universidad Internacional es la respuesta a las necesidades de la comunidad, formando
            profesionistas con gran sentido de integración y pertenencia. Estamos en proceso continuo
            de mejora de nuestros programas a nivel internacional.
          </p>
          <blockquote class="pg-va__quote">
            <Quote :size="20" class="pg-va__quote-icon" aria-hidden="true" />
            Alumno en tránsito integral es un proceso: entendiendo, desarrollando y fortaleciendo sus
            conocimientos, habilidades y diferencias para alcanzar su máximo potencial profesional.
          </blockquote>
          <p class="pg-va__text pg-va__text--muted">
            Nuestra documentación cuenta con Registro de Validez Oficial de Educación ante SEP.
          </p>
        </div>

        <div class="pg-va__img-wrap">
          <img
            src="/images/hero/licenciaturasPresenciales.jpg"
            alt="Vida universitaria Posgrados"
            class="pg-va__img"
            loading="lazy"
          />
          <div class="pg-va__img-badge">
            <span class="badge-num">71k+</span>
            <span class="badge-lbl">egresados<br />UNINTER</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Pilares oscuros -->
    <div class="pg-va__pillars">
      <div class="pg-container">
        <div class="pg-va__pillars-inner">
          <div class="pg-va__pillars-text">
            <p class="pg-va__pillars-eyebrow">Modelo Académico</p>
            <h3 class="pg-va__pillars-title">Blended-Flex Learning</h3>
            <p class="pg-va__pillars-desc">
              UNINTER tiene conceptualizado nuestro modelo pedagógico a través del cual formamos
              profesionistas capaces de aprender en cualquier momento, desarrollando tanto el
              potencial directivo como el perfil investigador y humanístico.
            </p>
          </div>
          <div class="pg-va__pillars-grid">
            <div v-for="p in pilares" :key="p.label" class="pg-pilar">
              <div class="pg-pilar__icon">
                <component :is="p.icon" :size="22" />
              </div>
              <span class="pg-pilar__label">{{ p.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pg-va {
  --p: #546E7A;
  --pd: #37474F;
  --pl: #78909C;
  --pbg: #0f1a22;
}
.pg-container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }

.pg-va__main { background: #fff; padding: 5.5rem 0; }
.pg-va__grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 4rem; align-items: start;
}
.pg-va__eyebrow {
  font-size: 0.75rem; font-weight: 700; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--p); margin: 0 0 0.6rem;
}
.pg-va__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.8rem, 3.5vw, 2.6rem);
  font-weight: 800; color: #1a2530; margin: 0 0 1.5rem; line-height: 1.2;
}
.pg-va__accent { font-style: italic; color: var(--p); }
.pg-va__text { font-size: 0.92rem; color: #555; line-height: 1.72; margin: 0 0 1rem; }
.pg-va__text--muted { font-size: 0.8rem; color: #999; margin-top: 1.25rem; }
.pg-va__quote {
  border-left: 3px solid var(--p); padding: 1rem 1.25rem;
  background: rgba(84,110,122,0.05); border-radius: 0 10px 10px 0;
  margin: 1.5rem 0; font-size: 0.88rem; color: #444; line-height: 1.7; font-style: italic;
  display: flex; gap: 0.75rem; align-items: flex-start;
}
.pg-va__quote-icon { color: var(--p); flex-shrink: 0; margin-top: 0.1rem; }

.pg-va__img-wrap {
  position: relative; border-radius: 18px; overflow: hidden;
  box-shadow: 0 12px 40px rgba(0,0,0,0.12);
}
.pg-va__img { width: 100%; aspect-ratio: 4/3; object-fit: cover; display: block; }
.pg-va__img-badge {
  position: absolute; bottom: 1.5rem; right: 1.5rem;
  background: var(--p); color: #fff; border-radius: 12px;
  padding: 0.75rem 1.25rem; text-align: center;
  box-shadow: 0 4px 16px rgba(84,110,122,0.35);
}
.badge-num { display: block; font-size: 1.8rem; font-weight: 900; line-height: 1; }
.badge-lbl { font-size: 0.65rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; line-height: 1.3; }

/* Pilares */
.pg-va__pillars { background: var(--pbg); padding: 4rem 0; }
.pg-va__pillars-inner {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 3rem; align-items: center;
}
.pg-va__pillars-eyebrow {
  font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em;
  text-transform: uppercase; color: var(--pl); margin: 0 0 0.5rem;
}
.pg-va__pillars-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.5rem, 3vw, 2.1rem); font-weight: 800; color: #fff; margin: 0 0 1rem;
}
.pg-va__pillars-desc { font-size: 0.9rem; color: rgba(255,255,255,0.57); line-height: 1.7; margin: 0; }

.pg-va__pillars-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.25rem; }
.pg-pilar {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(84,110,122,0.18); border-radius: 12px;
  padding: 1.25rem 1rem; display: flex; flex-direction: column;
  align-items: center; gap: 0.6rem; text-align: center;
  transition: background 0.2s, border-color 0.2s;
}
.pg-pilar:hover { background: rgba(84,110,122,0.1); border-color: var(--p); }
.pg-pilar__icon {
  width: 44px; height: 44px; border-radius: 10px;
  background: rgba(84,110,122,0.14); color: var(--pl);
  display: flex; align-items: center; justify-content: center;
}
.pg-pilar__label { font-size: 0.82rem; font-weight: 700; color: rgba(255,255,255,0.82); }

@media (max-width: 1024px) {
  .pg-va__grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .pg-va__pillars-inner { grid-template-columns: 1fr; }
}
</style>
