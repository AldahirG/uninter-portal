<script setup lang="ts">
const areas = [
  {
    id: "social",
    nombre: "Social Humanístico",
    color: "#3b6bbf",
    bg: "linear-gradient(135deg, #1a2f5e 0%, #2d4a8a 100%)",
    icon: "mdi:account-group-outline",
    desc: "Enfocada en las ciencias sociales, humanidades y desarrollo humano.",
    semestres: [
      {
        label: "Quinto Semestre",
        materias: [
          "Geografía",
          "Estructura Socioeconómica de México",
          "Sociología I",
          "Psicología I",
          "Ciencias de la comunicación",
          "Derecho I",
          "Lengua Adicional al Español I",
          "Probabilidad y Estadística I",
          "Inventiva",
          "Informática V",
          "Finanzas",
          "Ventas y Difusión",
          "Activación Física V",
          "Orientación Educativa V",
        ],
      },
      {
        label: "Sexto Semestre",
        materias: [
          "Filosofía I",
          "Ecología y Medio Ambiente",
          "Historia Universal Contemporánea",
          "Sociología II",
          "Psicología II",
          "Ciencias de la comunicación II",
          "Derecho II",
          "Lengua Adicional al Español II",
          "Probabilidad y Estadística II",
          "Innovación",
          "Informática VI",
          "Comunicación de la empresa",
          "Proyecto emprendedor",
          "Activación Física VI",
          "Orientación Educativa VI",
        ],
      },
    ],
  },
  {
    id: "economico",
    nombre: "Económico Administrativo",
    color: "#a07010",
    bg: "linear-gradient(135deg, #4a3000 0%, #7a5000 100%)",
    icon: "mdi:chart-bar",
    desc: "Orientada a negocios, finanzas, contabilidad y administración.",
    semestres: [
      {
        label: "Quinto Semestre",
        materias: [
          "Geografía",
          "Estructura Socioeconómica de México",
          "Derecho I",
          "Probabilidad y Estadística I",
          "Contabilidad I",
          "Economía I",
          "Lengua Adicional al Español I",
          "Inventiva",
          "Informática V",
          "Finanzas",
          "Ventas y Difusión",
          "Activación Física V",
          "Orientación Educativa V",
        ],
      },
      {
        label: "Sexto Semestre",
        materias: [
          "Filosofía",
          "Ecología y medio ambiente",
          "Historia Universal Contemporánea",
          "Derecho II",
          "Probabilidad y Estadística II",
          "Contabilidad II",
          "Economía II",
          "Lengua Adicional al Español II",
          "Innovación",
          "Informática VI",
          "Comunicación de la empresa",
          "Proyecto emprendedor",
          "Activación Física VI",
          "Orientación Educativa VI",
        ],
      },
    ],
  },
  {
    id: "fisico",
    nombre: "Físico Matemático",
    color: "#1a6e3a",
    bg: "linear-gradient(135deg, #0a2e1a 0%, #1a5c30 100%)",
    icon: "mdi:function-variant",
    desc: "Para quienes disfrutan las matemáticas, física e ingenierías.",
    semestres: [
      {
        label: "Quinto Semestre",
        materias: [
          "Geografía",
          "Estructura Socioeconómica de México",
          "Cálculo Diferencial",
          "Temas selectos de Física I",
          "Dibujo I",
          "Probabilidad y Estadística I",
          "Lengua Adicional al Español I",
          "Inventiva",
          "Informática V",
          "Electrónica",
          "Finanzas",
          "Ventas y Difusión",
          "Activación Física V",
          "Orientación Educativa V",
        ],
      },
      {
        label: "Sexto Semestre",
        materias: [
          "Filosofía",
          "Ecología y medio ambiente",
          "Historia Universal Contemporánea",
          "Cálculo Integral",
          "Temas selectos de física II",
          "Dibujo II",
          "Probabilidad y Estadística II",
          "Lengua Adicional al Español II",
          "Innovación",
          "Informática VI",
          "Comunicación de la empresa",
          "Proyecto emprendedor",
          "Activación Física VI",
          "Orientación Educativa VI",
        ],
      },
    ],
  },
  {
    id: "quimico",
    nombre: "Químico Biológico",
    color: "#0a7a8a",
    bg: "linear-gradient(135deg, #003540 0%, #006070 100%)",
    icon: "mdi:flask-outline",
    desc: "Dirigida a ciencias de la salud, biología y química.",
    semestres: [
      {
        label: "Quinto Semestre",
        materias: [
          "Geografía",
          "Estructura Socioeconómica de México",
          "Temas selectos de Biología I",
          "Ciencias de la salud I",
          "Temas selectos de Química I",
          "Psicología I",
          "Lengua Adicional al Español I",
          "Probabilidad y Estadística I",
          "Inventiva",
          "Informática V",
          "Finanzas",
          "Ventas y Difusión",
          "Activación Física V",
          "Orientación Educativa V",
        ],
      },
      {
        label: "Sexto Semestre",
        materias: [
          "Filosofía",
          "Ecología y medio ambiente",
          "Historia Universal Contemporánea",
          "Temas selectos de Biología II",
          "Ciencias de la salud II",
          "Temas selectos de química II",
          "Psicología II",
          "Lengua Adicional al Español II",
          "Probabilidad y Estadística II",
          "Innovación",
          "Informática VI",
          "Comunicación de la empresa",
          "Proyecto emprendedor",
          "Activación Física VI",
          "Orientación Educativa VI",
        ],
      },
    ],
  },
];

const activeArea = ref<(typeof areas)[0] | null>(null);

function openModal(area: (typeof areas)[0]) {
  activeArea.value = area;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  activeArea.value = null;
  document.body.style.overflow = "";
}
</script>

<template>
  <section id="areas" class="ae-section">
    <div class="ae-container">
      <div class="ae-head">
        <p class="ae-eyebrow">Semestres 5 y 6</p>
        <h2 class="ae-title">ÁREAS DE ESPECIALIZACIÓN</h2>
        <p class="ae-sub">Elige la especialización que mejor se adapte a tus intereses y objetivos académicos</p>
      </div>

      <div class="ae-grid">
        <button
          v-for="area in areas"
          :key="area.id"
          class="ae-card"
          :style="`background: ${area.bg}`"
          @click="openModal(area)"
        >
          <div class="ae-card__icon">
            <Icon :name="area.icon" size="36" />
          </div>
          <h3 class="ae-card__name">{{ area.nombre }}</h3>
          <p class="ae-card__desc">{{ area.desc }}</p>
          <span class="ae-card__cta">Ver plan de estudios <Icon name="mdi:arrow-right" size="14" /></span>
        </button>
      </div>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <Transition name="ae-modal">
        <div v-if="activeArea" class="ae-overlay" @click.self="closeModal">
          <div class="ae-modal">
            <!-- Header -->
            <div class="ae-modal__header" :style="`background: ${activeArea.bg}`">
              <div class="ae-modal__header-content">
                <Icon :name="activeArea.icon" size="32" class="ae-modal__header-icon" />
                <h2 class="ae-modal__title">{{ activeArea.nombre }}</h2>
              </div>
              <button class="ae-modal__close" @click="closeModal" aria-label="Cerrar">
                <Icon name="mdi:close" size="22" />
              </button>
            </div>

            <!-- Body -->
            <div class="ae-modal__body">
              <div class="ae-modal__grid">
                <div
                  v-for="sem in activeArea.semestres"
                  :key="sem.label"
                  class="ae-modal__sem"
                >
                  <h3 class="ae-modal__sem-title">{{ sem.label }}</h3>
                  <ul class="ae-modal__list">
                    <li v-for="m in sem.materias" :key="m">{{ m }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<style scoped>
.ae-section {
  background: #f8f9fa;
  padding: 5rem 0;
}
.ae-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.ae-head {
  text-align: center;
  margin-bottom: 3rem;
}
.ae-eyebrow {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #6BAF04;
  margin: 0 0 0.5rem;
}
.ae-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  font-weight: 900;
  color: #1a2a0a;
  margin: 0 0 0.75rem;
  letter-spacing: 0.04em;
}
.ae-sub {
  font-size: 0.95rem;
  color: #64748b;
  margin: 0;
}

/* Grid */
.ae-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

/* Card */
.ae-card {
  border: none;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  cursor: pointer;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
  transition: transform 0.25s, box-shadow 0.25s;
  position: relative;
  overflow: hidden;
}
.ae-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0);
  transition: background 0.25s;
}
.ae-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 50px rgba(0,0,0,0.25);
}
.ae-card:hover::before { background: rgba(0,0,0,0.08); }

.ae-card__icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: rgba(255,255,255,0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-shrink: 0;
}
.ae-card__name {
  font-size: 1.05rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
  line-height: 1.3;
}
.ae-card__desc {
  font-size: 0.82rem;
  color: rgba(255,255,255,0.78);
  margin: 0;
  line-height: 1.55;
  flex: 1;
}
.ae-card__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  font-size: 0.78rem;
  font-weight: 700;
  color: rgba(255,255,255,0.9);
  background: rgba(255,255,255,0.15);
  border-radius: 6px;
  padding: 0.4rem 0.75rem;
  transition: background 0.2s;
}
.ae-card:hover .ae-card__cta { background: rgba(255,255,255,0.25); }

/* Overlay */
.ae-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(4px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

/* Modal */
.ae-modal {
  background: #fff;
  border-radius: 16px;
  width: 100%;
  max-width: 860px;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0,0,0,0.35);
}

.ae-modal__header {
  padding: 1.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}
.ae-modal__header-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.ae-modal__header-icon { color: rgba(255,255,255,0.9); }
.ae-modal__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
  margin: 0;
}
.ae-modal__close {
  background: rgba(255,255,255,0.15);
  border: none;
  border-radius: 8px;
  width: 38px;
  height: 38px;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
  flex-shrink: 0;
}
.ae-modal__close:hover { background: rgba(255,255,255,0.25); }

.ae-modal__body {
  overflow-y: auto;
  padding: 2rem;
}

.ae-modal__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.ae-modal__sem-title {
  font-size: 0.95rem;
  font-weight: 800;
  color: #334155;
  margin: 0 0 1rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e2e8f0;
}

.ae-modal__list {
  list-style: disc;
  padding-left: 1.25rem;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}
.ae-modal__list li {
  font-size: 0.85rem;
  color: #475569;
  line-height: 1.4;
}

/* Transitions */
.ae-modal-enter-active,
.ae-modal-leave-active { transition: opacity 0.25s, transform 0.25s; }
.ae-modal-enter-from,
.ae-modal-leave-to { opacity: 0; transform: scale(0.95); }

/* Responsive */
@media (max-width: 1024px) { .ae-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) {
  .ae-grid { grid-template-columns: 1fr; }
  .ae-modal__grid { grid-template-columns: 1fr; }
  .ae-modal__header { padding: 1.25rem 1.25rem; }
  .ae-modal__body { padding: 1.25rem; }
  .ae-modal__title { font-size: 1.15rem; }
}
</style>
