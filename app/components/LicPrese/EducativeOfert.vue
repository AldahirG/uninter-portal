<script setup lang="ts">
import { tr } from "zod/v4/locales";
import { Card } from "../ui/card";
import { Medal, MedalIcon, Trophy, TrophyIcon } from "lucide-vue-next";
const DataCard = [
  {
    title: "LICENCIATURAS EN CIENCIAS SOCIALES Y HUMANIDADES",
    color: "#1565C0",
    bgColor: "#f0f6fc",
    bachelors: [
      {
        title: "Ciencias Politicas y Gestión Pública (LCP)",
        href: "https://universidad.uninter.edu.mx/carreras/LCP",
      },
      {
        title: "Comunicacion (LCO)",
        href: "https://universidad.uninter.edu.mx/carreras/LCO",
        trophy: true,
        medal: true,
      },
      {
        title: "Comunicación y Relaciones Públicas (CORP)",
        href: "https://universidad.uninter.edu.mx/carreras/CORP",
        trophy: true,
        medal: true,
      },
      {
        title: "Derecho (LED)",
        href: "https://universidad.uninter.edu.mx/carreras/LED",
      },
      {
        title: "Idiomas (LID)",
        href: "https://universidad.uninter.edu.mx/carreras/LID",
      },
      {
        title: "Pedagogía (LPE)",
        href: "https://universidad.uninter.edu.mx/carreras/LPE",
      },
      {
        title: "Psicología (LPS)",
        href: "https://universidad.uninter.edu.mx/carreras/LPS",
      },
      {
        title: "Relaciones Internacionales (LRI)",
        href: "https://universidad.uninter.edu.mx/carreras/LRI",
        trophy: true,
        medal: true,
      },
      {
        title: "Relaciones Internacionales y Ciencias Politicas (RICP)",
        href: "https://universidad.uninter.edu.mx/carreras/RICP",
        trophy: true,
        medal: true,
      },
      {
        title: "Relaciones Internacionales y Economía (RIEC)",
        href: "https://universidad.uninter.edu.mx/carreras/RIEC",
        trophy: true,
        medal: true,
      },
    ],
  },
  {
    title: "LICENCIATURAS EN NEGOCIOS Y ADMINISTRACIÓN",
    color: "#2E7D32",
    bgColor: "#f2f9f3",
    bachelors: [
      {
        title: "Administración de Empresas (LAE)",
        href: "https://universidad.uninter.edu.mx/carreras/LAE",
        trophy: true,
        medal: true,
      },
      {
        title: "Administración de Empresas Turísticas (LAET)",
        href: "https://universidad.uninter.edu.mx/carreras/LAET",
        trophy: true,
        medal: true,
      },
      {
        title: "Administración de Negocios Internacionales (LANI)",
        href: "https://universidad.uninter.edu.mx/carreras/LANI",
        trophy: true,
        medal: true,
      },
      {
        title: "Administracion y Mercadotecnia (LAM)",
        href: "https://universidad.uninter.edu.mx/carreras/LAM",
        trophy: true,
        medal: true,
      },
      {
        title: "Comercio Exterior (LCE)",
        href: "https://universidad.uninter.edu.mx/carreras/LCE",
      },
      {
        title: "Economia y Finanzas (LEF)",
        href: "https://universidad.uninter.edu.mx/carreras/LEF",
        trophy: true,
        medal: true,
      },
      {
        title: "Mercadotecnia (LME)",
        href: "https://universidad.uninter.edu.mx/carreras/LME",
        trophy: true,
        medal: true,
      },
      {
        title: "Mercadotecnia y Publicidad (LEMP)",
        href: "https://universidad.uninter.edu.mx/carreras/LEMP",
        trophy: true,
        medal: true,
      },
    ],
  },
  {
    title: "LICENCIATURAS EN DISEÑO Y ARTES",
    color: "#E65100",
    bgColor: "#fff6f0",
    bachelors: [
      {
        title: "Arquitectura (ARQ)",
        href: "https://universidad.uninter.edu.mx/carreras/ARQ",
        trophy: true,
        medal: true,
      },
      {
        title: "Animación y Diseño Digital (LADD)",
        href: "https://universidad.uninter.edu.mx/carreras/LADD",
        trophy: true,
        medal: true,
      },
      {
        title: "Diseño Gráfico (LDG)",
        href: "https://universidad.uninter.edu.mx/carreras/LDG",
        trophy: true,
        medal: true,
      },
      {
        title: "Diseño Industrial (LDI)",
        href: "https://universidad.uninter.edu.mx/carreras/LDI",
        trophy: true,
        medal: true,
      },
      {
        title: "Diseño de Modas y Tendencias Internacionales (LDM)",
        href: "https://universidad.uninter.edu.mx/carreras/LDM",
        trophy: true,
        medal: true,
      },
    ],
  },
  {
    title: "LICENCIATURAS EN INGENIERÍA",
    color: "#0277BD",
    bgColor: "#f0f8fc",
    bachelors: [
      {
        title: "Ambiental (IAM)",
        href: "https://universidad.uninter.edu.mx/carreras/IAM",
      },
      {
        title: "Civil (ICI)",
        href: "https://universidad.uninter.edu.mx/carreras/ICI",
        trophy: true,
        medal: true,
      },
      {
        title: "Industrial y de Sistemas de Calidad (IISCA)",
        href: "https://universidad.uninter.edu.mx/carreras/IISCA",
      },
      {
        title: "Mecatronica (IME)",
        href: "https://universidad.uninter.edu.mx/carreras/IME",
      },
      {
        title: "Mecanica Industrial (IMI)",
        href: "https://universidad.uninter.edu.mx/carreras/IMI",
      },
      {
        title: "Sistmas Computacionales (ISC)",
        href: "https://universidad.uninter.edu.mx/carreras/ISC",
      },
    ],
  },
];
</script>

<template>
  <section class="oe-section uninter-section">
    <div class="uninter-container">
      <div class="oe-header">
        <div>
          <div class="uninter-eyebrow">PROGRAMAS ACADÉMICOS</div>
          <h2 class="uninter-section-title">
            Elige tu<br /><em>licenciatura</em>
          </h2>
        </div>
      </div>

      <div class="oe-grid">
        <div v-for="(card, index) in DataCard" :key="index" class="oe-card">
          <h3 class="oe-card__title">
            {{ card.title }}
          </h3>

          <ul class="oe-card__list">
            <li v-for="(bachelor, idx) in card.bachelors" :key="idx">
              <a :href="bachelor.href" target="_blank" class="oe-card__link">
                <span class="oe-card__bullet">•</span>

                <TrophyIcon
                  v-if="bachelor.trophy"
                  class="oe-icon-gold"
                  :size="16"
                  :stroke-width="2.5"
                />

                <span class="oe-card__text">{{ bachelor.title }}</span>

                <MedalIcon
                  v-if="bachelor.medal"
                  class="oe-icon-gold"
                  :size="20"
                  :stroke-width="2.5"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.uninter-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}
.uninter-section {
  padding: 5rem 0;
}
.oe-section {
  background: #f8f9fb;
}

.oe-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}
.uninter-eyebrow {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #0f3c61;
  margin-bottom: 0.5rem;
}
.uninter-section-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 700;
  line-height: 1.1;
  color: #0f3c61;
  letter-spacing: -0.02em;
  margin: 0;
}
.uninter-section-title em {
  color: #1565c0;
  font-style: italic;
}

.oe-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.oe-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s;
}
.oe-card:hover {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
}

.oe-card__title {
  font-size: 1rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 1rem 0;
  line-height: 1.3;
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 0.75rem;
}

.oe-card__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.oe-card__link {
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  text-decoration: none;
  transition: opacity 0.2s;
}
.oe-card__link:hover {
  opacity: 0.6;
}

.oe-card__bullet {
  font-size: 1.2rem;
  line-height: 0.8;
  margin-top: 2px;
  color: #1565c0;
}

.oe-card__text {
  font-size: 0.85rem;
  color: #374151;
  line-height: 1.4;
  font-weight: 500;
}

.oe-icon-gold {
  color: #eab308;
  flex-shrink: 0;
  margin-top: 1px;
}

@media (max-width: 900px) {
  .oe-grid {
    grid-template-columns: 1fr;
  }
}
</style>
