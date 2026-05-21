<script setup lang="ts">
import { Star, Users, Laptop, Languages } from "lucide-vue-next";

const valores = [
  {
    icon: Star,
    titulo: "Excelencia académica",
    desc: "Más de 40 años formando estudiantes con las habilidades del siglo XXI en un entorno de calidad certificada.",
  },
  {
    icon: Languages,
    titulo: "Bilingüismo real",
    desc: "49 materias impartidas en inglés y francés, con certificaciones internacionales DELF y TKT incluidas.",
  },
  {
    icon: Users,
    titulo: "Comunidad multicultural",
    desc: "Convive con alumnos de más de 25 países y desarrolla una visión global desde el bachillerato.",
  },
  {
    icon: Laptop,
    titulo: "Tecnología integrada",
    desc: "Modelo Blended/Flex Learning con acceso a plataformas digitales y aprendizaje personalizado.",
  },
];
</script>

<template>
  <section class="welcome-section">
    <!-- Banda oscura principal -->
    <div class="welcome-dark">
      <div class="biu-container">
        <div class="welcome-dark__inner">
          <div class="welcome-dark__text">
            <p class="welcome-eyebrow">Bienvenido a BIU UNINTER</p>
            <h2 class="welcome-title">
              Más que un bachillerato,<br />
              <em>una experiencia de vida</em>
            </h2>
          </div>
          <p class="welcome-dark__desc">
            El Bachillerato Internacional UNINTER (BIU) te ofrece una
            preparación académica única que combina el rigor del currículo
            nacional con un ambiente bilingüe, multicultural y tecnológico.
            Aquí no solo estudias: te transformas para enfrentar el mundo.
          </p>
        </div>
      </div>
    </div>

    <!-- Tarjetas de valores -->
    <div class="welcome-values">
      <div class="biu-container">
        <div class="values-grid">
          <div v-for="v in valores" :key="v.titulo" class="value-card">
            <div class="value-card__icon">
              <component :is="v.icon" :size="22" />
            </div>
            <h3 class="value-card__title">{{ v.titulo }}</h3>
            <p class="value-card__desc">{{ v.desc }}</p>
          </div>
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

/* Banda oscura */
.welcome-dark {
  background: #0d1f0e;
  padding: 4.5rem 0 3.5rem;
}

.welcome-dark__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;
  align-items: center;
}

.welcome-eyebrow {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #A8D86E;
  margin: 0 0 0.875rem;
}

.welcome-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: #fff;
  line-height: 1.12;
  letter-spacing: -0.02em;
  margin: 0;
}
.welcome-title em {
  font-style: normal;
  color: #A8D86E;
}

.welcome-dark__desc {
  font-size: 1rem;
  color: rgba(255,255,255,0.65);
  line-height: 1.72;
  margin: 0;
  align-self: center;
}

/* Tarjetas de valores */
.welcome-values {
  background: #f1f8f0;
  padding: 3.5rem 0 4rem;
  margin-top: -1px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

.value-card {
  background: #fff;
  border: 1px solid #ddeedd;
  border-radius: 14px;
  padding: 1.75rem 1.5rem;
  transition: box-shadow 0.2s, transform 0.2s;
}
.value-card:hover {
  box-shadow: 0 12px 32px rgba(107,175,4,0.1);
  transform: translateY(-3px);
}

.value-card__icon {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: #e8f5e9;
  color: #6BAF04;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.value-card__title {
  font-size: 0.95rem;
  font-weight: 800;
  color: #4A7A02;
  margin: 0 0 0.5rem;
  line-height: 1.3;
}

.value-card__desc {
  font-size: 0.82rem;
  color: #475569;
  line-height: 1.6;
  margin: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .values-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 860px) {
  .welcome-dark__inner { grid-template-columns: 1fr; gap: 1.5rem; }
}
@media (max-width: 560px) {
  .values-grid { grid-template-columns: 1fr; }
  .welcome-dark { padding: 3.5rem 0 2.5rem; }
}
</style>
