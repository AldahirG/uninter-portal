<script setup lang="ts">
import { Briefcase, TrendingUp, Users, Award, CheckCircle2 } from "lucide-vue-next";

const ventajas = [
  {
    icon: TrendingUp,
    title: "Avanza más rápido",
    desc: "Planes cuatrimestrales estructurados para concluir tu carrera en 3 años sin saturar tus jornadas de trabajo."
  },
  {
    icon: Briefcase,
    title: "Aplicación inmediata",
    desc: "Contenidos prácticos y actualizados que puedes implementar desde el primer día en tus responsabilidades laborales."
  },
  {
    icon: Users,
    title: "Networking empresarial",
    desc: "Comparte aula y proyectos con profesionales de diversas industrias, generando alianzas y oportunidades clave."
  },
  {
    icon: Award,
    title: "Validez y prestigio SEP",
    desc: "Programas con Reconocimiento de Validez Oficial de Estudios (RVOE) y el respaldo de más de 30 años de UNINTER."
  }
];
</script>

<template>
  <section class="le-history-section">
    <div class="uninter-container">
      <div class="le-history-grid">
        <!-- Columna Izquierda: Mensaje y Filosofía -->
        <div class="le-history-info">
          <div class="uninter-eyebrow">— MODELO EDUCATIVO EJECUTIVO</div>
          <h2 class="uninter-section-title">
            Diseñado para personas que<br />
            <em>trabajan y buscan crecer</em>
          </h2>
          <p class="le-text">
            En la Universidad Internacional entendemos que tu tiempo y tus metas profesionales son prioridad. Nuestras Licenciaturas Ejecutivas ofrecen el equilibrio ideal entre rigor académico y flexibilidad de horarios, permitiéndote obtener un título universitario con validez oficial sin pausar tu trayectoria laboral.
          </p>
          
          <div class="le-points">
            <div class="le-point">
              <CheckCircle2 :size="20" class="point-icon" />
              <span>Planes optimizados en 9 cuatrimestres (3 años).</span>
            </div>
            <div class="le-point">
              <CheckCircle2 :size="20" class="point-icon" />
              <span>Acompañamiento docente y asesorías personalizadas.</span>
            </div>
            <div class="le-point">
              <CheckCircle2 :size="20" class="point-icon" />
              <span>Campus digital de apoyo disponible 24/7.</span>
            </div>
          </div>
        </div>

        <!-- Columna Derecha: Tarjetas de Ventajas -->
        <div class="le-cards-grid">
          <div v-for="(v, index) in ventajas" :key="index" class="le-advantage-card">
            <div class="card-icon-wrap">
              <component :is="v.icon" :size="24" />
            </div>
            <h3 class="card-title">{{ v.title }}</h3>
            <p class="card-desc">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.uninter-container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.le-history-section {
  background-color: #ffffff;
  padding: 5.5rem 0;
  border-bottom: 1px solid #e2e8f0;
}

.le-history-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 3.5rem;
  align-items: center;
}

.uninter-eyebrow {
  color: #0073b4;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.uninter-section-title {
  color: #0f3c61;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 3.5vw, 2.9rem);
  font-weight: 800;
  line-height: 1.15;
  margin: 0 0 1.5rem;
  letter-spacing: -0.01em;
}

.uninter-section-title em {
  color: #694E39;
  font-style: italic;
}

.le-text {
  color: #475569;
  font-size: 1rem;
  line-height: 1.7;
  margin: 0 0 2rem;
}

.le-points {
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
}

.le-point {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #1e293b;
  font-size: 0.95rem;
  font-weight: 600;
}

.point-icon {
  color: #694E39;
  flex-shrink: 0;
}

.le-cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem;
}

.le-advantage-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem 1.6rem;
  box-shadow: 0 4px 20px rgba(105, 78, 57, 0.08);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.le-advantage-card:hover {
  transform: translateY(-4px);
  border-color: #A78D75;
  box-shadow: 0 12px 30px rgba(105, 78, 57, 0.15);
}

.card-icon-wrap {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(105, 78, 57, 0.08);
  color: #694E39;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  transition: all 0.3s ease;
}

.le-advantage-card:hover .card-icon-wrap {
  background: #694E39;
  color: #ffffff;
}

.card-title {
  color: #694E39;
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 0.6rem;
}

.card-desc {
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.55;
  margin: 0;
}

@media (max-width: 960px) {
  .le-history-grid {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
}

@media (max-width: 600px) {
  .le-cards-grid {
    grid-template-columns: 1fr;
  }
}
</style>
