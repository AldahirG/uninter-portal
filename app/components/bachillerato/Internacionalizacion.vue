<script setup lang="ts">
import { Plane, Globe, Users, Award } from "lucide-vue-next";

const datos = [
  { icon: Globe,  value: "130+", label: "Universidades aliadas"     },
  { icon: Users,  value: "25",   label: "Países representados"      },
  { icon: Plane,  value: "500+", label: "Convenios internacionales" },
  { icon: Award,  value: "2",    label: "Certificaciones incluidas" },
];

const programas = [
  { nombre: "AFS Intercultural Programs",       desc: "Intercambio cultural y académico en más de 50 países."        },
  { nombre: "Canada Options Education",         desc: "Programas de inmersión y estudios en Canadá."                 },
  { nombre: "Latino Australia Education",       desc: "Oportunidades de estudio y trabajo en Australia."            },
  { nombre: "Foundation for Academic Exchange", desc: "Red global de movilidad estudiantil universitaria."          },
];
</script>

<template>
  <section class="inter-section">
    <!-- Banner con imagen -->
    <div class="inter-banner">
      <img
        src="/images/hero/ejecutivas.jpg"
        alt="Internacionalización BIU"
        class="inter-banner__img"
      />
      <div class="inter-banner__overlay"></div>

      <div class="biu-container inter-banner__content">
        <div class="inter-banner__inner">
          <p class="inter-eyebrow">Movilidad internacional</p>
          <h2 class="inter-title">
            Internacionalización<br />
            <em>sin fronteras</em>
          </h2>
          <p class="inter-desc">
            En BIU UNINTER creemos que la mejor educación trasciende las aulas.
            Nuestros alumnos tienen acceso a intercambios, certificaciones y
            experiencias internacionales que transforman su visión del mundo.
          </p>
        </div>
      </div>
    </div>

    <!-- Stats + Programas -->
    <div class="inter-body">
      <div class="biu-container">
        <!-- Stats -->
        <div class="inter-stats">
          <div v-for="d in datos" :key="d.label" class="inter-stat">
            <div class="inter-stat__icon">
              <component :is="d.icon" :size="20" />
            </div>
            <p class="inter-stat__value">{{ d.value }}</p>
            <p class="inter-stat__label">{{ d.label }}</p>
          </div>
        </div>

        <!-- Programas aliados -->
        <div class="inter-programs">
          <div class="biu-eyebrow">
            <span class="eyebrow-line"></span>
            PROGRAMAS ALIADOS
          </div>
          <div class="inter-programs__grid">
            <div
              v-for="p in programas"
              :key="p.nombre"
              class="prog-card"
            >
              <Globe :size="16" class="prog-card__icon" />
              <div>
                <p class="prog-card__name">{{ p.nombre }}</p>
                <p class="prog-card__desc">{{ p.desc }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="inter-cta-wrap">
          <a
            href="https://universidad.uninter.edu.mx/Internacionalizaci%C3%B3n"
            target="_blank"
            class="inter-cta"
          >
            Conoce todos los programas de movilidad →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.biu-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Banner */
.inter-banner {
  position: relative;
  height: clamp(320px, 45vh, 480px);
  display: flex;
  align-items: center;
  overflow: hidden;
  background: #0d1f0e;
}
.inter-banner__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.inter-banner__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    110deg,
    rgba(13,31,14,0.9) 0%,
    rgba(13,31,14,0.72) 55%,
    rgba(13,31,14,0.35) 100%
  );
}
.inter-banner__content {
  position: relative;
  z-index: 2;
  width: 100%;
}
.inter-banner__inner { max-width: 600px; }

.inter-eyebrow {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #A8D86E;
  margin: 0 0 0.875rem;
}
.inter-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 4.5vw, 3.4rem);
  font-weight: 800;
  color: #fff;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0 0 1.25rem;
}
.inter-title em { font-style: normal; color: #A8D86E; }
.inter-desc {
  font-size: 0.96rem;
  color: rgba(255,255,255,0.68);
  line-height: 1.65;
  margin: 0;
  max-width: 520px;
}

/* Body */
.inter-body {
  background: #fff;
  padding: 4rem 0 5rem;
}

/* Stats */
.inter-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3.5rem;
}
.inter-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #f1f8f0;
  border: 1px solid #c8e6c9;
  border-radius: 14px;
  padding: 1.75rem 1rem;
  gap: 0.5rem;
  transition: box-shadow 0.2s, transform 0.2s;
}
.inter-stat:hover {
  box-shadow: 0 10px 28px rgba(107,175,4,0.12);
  transform: translateY(-3px);
}
.inter-stat__icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: #e8f5e9;
  color: #6BAF04;
  display: flex;
  align-items: center;
  justify-content: center;
}
.inter-stat__value {
  font-size: clamp(1.6rem, 2.5vw, 2rem);
  font-weight: 900;
  color: #4A7A02;
  margin: 0;
  font-family: var(--font-serif, Georgia, serif);
  line-height: 1;
}
.inter-stat__label {
  font-size: 0.72rem;
  color: #64748b;
  font-weight: 600;
  margin: 0;
  text-align: center;
}

/* Programas */
.inter-programs { margin-bottom: 2.5rem; }

.biu-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #6BAF04;
  margin-bottom: 1.5rem;
}
.eyebrow-line {
  display: block;
  width: 24px;
  height: 2px;
  background: #6BAF04;
  flex-shrink: 0;
}

.inter-programs__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.prog-card {
  display: flex;
  gap: 0.875rem;
  align-items: flex-start;
  background: #f8f9fb;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.25rem 1.5rem;
  transition: border-color 0.2s, box-shadow 0.2s;
}
.prog-card:hover {
  border-color: #a5d6a7;
  box-shadow: 0 6px 20px rgba(107,175,4,0.08);
}
.prog-card__icon { color: #6BAF04; flex-shrink: 0; margin-top: 2px; }
.prog-card__name {
  font-size: 0.88rem;
  font-weight: 700;
  color: #4A7A02;
  margin: 0 0 0.25rem;
}
.prog-card__desc {
  font-size: 0.78rem;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
}

/* CTA link */
.inter-cta-wrap { text-align: center; }
.inter-cta {
  font-size: 0.9rem;
  font-weight: 700;
  color: #6BAF04;
  text-decoration: none;
  transition: color 0.2s;
}
.inter-cta:hover { color: #4A7A02; text-decoration: underline; }

/* Responsive */
@media (max-width: 900px) {
  .inter-stats { grid-template-columns: repeat(2, 1fr); }
  .inter-programs__grid { grid-template-columns: 1fr; }
}
@media (max-width: 560px) {
  .inter-banner { height: clamp(280px, 50vh, 400px); }
  .inter-desc { display: none; }
}
</style>
