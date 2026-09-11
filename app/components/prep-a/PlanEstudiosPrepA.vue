<script setup lang="ts">
import { ref } from 'vue'

const activeNivel = ref(0)

const areas = [
  { nombre: 'Matemáticas', icon: 'mdi:calculator-variant-outline' },
  { nombre: 'Comunicación', icon: 'mdi:message-text-outline' },
  { nombre: 'Ciencias Experimentales', icon: 'mdi:flask-outline' },
  { nombre: 'Humanidades y C. Sociales', icon: 'mdi:account-group-outline' }
]

const niveles = [
  {
    num: '01',
    titulo: 'Bases',
    badge: 'Nivel 1',
    desc: 'Te prepara para iniciar y adaptarte con éxito a tus estudios de bachillerato en la modalidad no escolarizada.',
    icon: 'mdi:flag-outline',
    modulos: [
      { code: 'M-01', nombre: 'De la información al conocimiento' }
    ]
  },
  {
    num: '02',
    titulo: 'Instrumentos',
    badge: 'Nivel 2',
    desc: 'Desarrolla tus habilidades para el manejo de instrumentos que te permiten la interacción con otros y con el entorno, así como para la comprensión y explicación ante fenómenos y procesos.',
    icon: 'mdi:tools',
    modulos: [
      { code: 'M-02', nombre: 'El lenguaje en la relación del hombre con el mundo' },
      { code: 'M-03', nombre: 'Representaciones simbólicas y algoritmos' },
      { code: 'M-04', nombre: 'Ser social y sociedad' },
      { code: 'M-05', nombre: 'Mi mundo en otra lengua' },
      { code: 'M-06', nombre: 'Tecnología de información y comunicación' }
    ]
  },
  {
    num: '03',
    titulo: 'Métodos y Contextos',
    badge: 'Nivel 3',
    desc: 'Consolida tu aprendizaje sobre los métodos de investigación con la especificidad que requiere su aplicación a las ciencias experimentales, las ciencias sociales y humanidades.',
    icon: 'mdi:book-search-outline',
    modulos: [
      { code: 'M-07', nombre: 'Textos y visiones del mundo' },
      { code: 'M-08', nombre: 'Matemáticas y representaciones del sistema natural' },
      { code: 'M-09', nombre: 'Universo natural' },
      { code: 'M-10', nombre: 'Sociedad mexicana contemporánea' },
      { code: 'M-11', nombre: 'Transformaciones en el mundo contemporáneo' },
      { code: 'M-12', nombre: 'Mi vida en otra lengua' }
    ]
  },
  {
    num: '04',
    titulo: 'Relaciones y Cambios',
    badge: 'Nivel 4',
    desc: 'Contribuye a que identifiques relaciones entre sujetos, objetos y conceptos con la finalidad de analizar y explicar los cambios que se presentan.',
    icon: 'mdi:transit-connection-variant',
    modulos: [
      { code: 'M-13', nombre: 'Argumentación' },
      { code: 'M-14', nombre: 'Variación en procesos sociales' },
      { code: 'M-15', nombre: 'Cálculo en fenómenos naturales y procesos sociales' },
      { code: 'M-16', nombre: 'Hacia un desarrollo sustentable' },
      { code: 'M-17', nombre: 'Evolución y sus repercusiones sociales' },
      { code: 'M-18', nombre: 'Estadística en fenómenos naturales y procesos sociales' },
      { code: 'M-19', nombre: 'Dinámica en la naturaleza: El movimiento' }
    ]
  },
  {
    num: '05',
    titulo: 'Integración y Reflexión',
    badge: 'Nivel 5',
    desc: 'Integra los aprendizajes del bachillerato de modo que puedas analizar las consecuencias de las relaciones entre el mundo social y el entorno natural, y reflexionar sobre cómo minimizar los efectos negativos de esta relación.',
    icon: 'mdi:check-decagram-outline',
    modulos: [
      { code: 'M-20', nombre: 'Optimización en sistemas naturales y sociales' },
      { code: 'M-21', nombre: 'Impacto de la ciencia y la tecnología' }
    ]
  }
]
</script>

<template>
  <section id="oferta-prepaA" class="pe-section">
    <div class="pe-container">
      
      <!-- Encabezado -->
      <div class="pe-header">
        <span class="pe-eyebrow">Ruta de Aprendizaje</span>
        <h2 class="pe-title">Plan de Estudios por Competencias</h2>
        <p class="pe-lead">
          Estructurado en <strong>22 módulos oficiales</strong> organizados progresivamente en 5 niveles para brindarte una formación integral y capacitación efectiva para el trabajo.
        </p>
      </div>

      <!-- Bloque Resumen de Componentes (2 Cards Clave) -->
      <div class="pe-structure-grid">
        <div class="pe-struct-card pe-struct-card--main">
          <div class="pe-struct-badge">21 Módulos</div>
          <h3 class="pe-struct-title">Componente Disciplinar</h3>
          <p class="pe-struct-desc">Cubre las 4 áreas esenciales del conocimiento:</p>
          <div class="pe-areas-pills">
            <span v-for="(area, idx) in areas" :key="idx" class="pe-area-pill">
              <Icon :name="area.icon" size="16" class="pe-area-icon" />
              {{ area.nombre }}
            </span>
          </div>
        </div>

        <div class="pe-struct-card pe-struct-card--work">
          <div class="pe-struct-badge pe-struct-badge--work">Módulo 22</div>
          <h3 class="pe-struct-title">Capacitación para el Trabajo</h3>
          <p class="pe-struct-desc">
            Desarrolla métodos, técnicas e instrumentos prácticos mediante el módulo de <strong>Informática (M-22)</strong> para el campo laboral.
          </p>
          <div class="pe-work-highlight">
            <Icon name="mdi:briefcase-check-outline" size="20" />
            <span>Informática M-22</span>
          </div>
        </div>
      </div>

      <!-- Ruta de 5 Niveles (Tabs Interactivas & Módulos) -->
      <div class="pe-roadmap-wrap">
        <div class="pe-roadmap-header">
          <div>
            <h3 class="pe-roadmap-title">Ruta Progresiva de los 5 Niveles</h3>
            <span class="pe-roadmap-subtitle">Selecciona un nivel para explorar su enfoque y asignaturas</span>
          </div>
          <span class="pe-roadmap-hint">
            Nivel {{ activeNivel + 1 }} de 5 · {{ niveles[activeNivel].modulos.length }} Módulos
          </span>
        </div>

        <!-- Selector de Niveles -->
        <div class="pe-levels-tabs">
          <button 
            v-for="(n, index) in niveles" 
            :key="index"
            class="pe-level-tab"
            :class="{ 'is-active': activeNivel === index }"
            @click="activeNivel = index"
          >
            <span class="pe-tab-num">{{ n.num }}</span>
            <span class="pe-tab-text">
              <span class="pe-tab-badge">{{ n.badge }}</span>
              <span class="pe-tab-title">{{ n.titulo }}</span>
            </span>
          </button>
        </div>

        <!-- Detalle del Nivel Activo y Desglose de Módulos -->
        <div class="pe-level-display">
          
          <!-- Encabezado del Nivel -->
          <div class="pe-level-main-info">
            <div class="pe-level-icon-wrap">
              <Icon :name="niveles[activeNivel].icon" size="32" />
            </div>
            <div class="pe-level-info">
              <div class="pe-level-tag">{{ niveles[activeNivel].badge }} · Etapa Formativa</div>
              <h4 class="pe-level-name">{{ niveles[activeNivel].titulo }}</h4>
              <p class="pe-level-desc">{{ niveles[activeNivel].desc }}</p>
            </div>
          </div>

          <!-- Módulos que comprende este Nivel -->
          <div class="pe-level-modules-section">
            <div class="pe-modules-header">
              <Icon name="mdi:format-list-bulleted" size="18" class="pe-mod-header-icon" />
              <span class="pe-modules-title">Módulos que comprende esta etapa:</span>
            </div>

            <div class="pe-modules-grid">
              <div 
                v-for="(mod, mIdx) in niveles[activeNivel].modulos" 
                :key="mIdx" 
                class="pe-module-card"
                :class="{ 'pe-module-card--work': mod.isWork }"
              >
                <span class="pe-module-code">{{ mod.code }}</span>
                <span class="pe-module-name">{{ mod.nombre }}</span>
                <span v-if="mod.isWork" class="pe-work-tag">Capacitación</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.pe-section {
  padding: 5rem 1.5rem;
  background: #ffffff;
  scroll-margin-top: 80px;
}

.pe-container {
  max-width: 1200px;
  margin: 0 auto;
}

/* Header */
.pe-header {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 3rem auto;
}

.pe-eyebrow {
  display: inline-block;
  font-size: 0.76rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #358880;
  background: #effaf9;
  padding: 0.35rem 0.95rem;
  border-radius: 999px;
  margin-bottom: 0.75rem;
}

.pe-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 800;
  color: #0f3c61;
  letter-spacing: -0.02em;
  margin: 0 0 1rem 0;
  line-height: 1.15;
}

.pe-lead {
  font-size: 1.05rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

.pe-lead strong {
  color: #358880;
}

/* Grid de Estructura (21 vs 1) */
.pe-structure-grid {
  display: grid;
  grid-template-columns: 1.25fr 0.95fr;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.pe-struct-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.pe-struct-card:hover {
  transform: translateY(-3px);
  border-color: #51CAB9;
}

.pe-struct-card--main {
  border-left: 4px solid #51CAB9;
}

.pe-struct-card--work {
  border-left: 4px solid #358880;
}

.pe-struct-badge {
  display: inline-block;
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  background: #effaf9;
  color: #358880;
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
  margin-bottom: 0.75rem;
}

.pe-struct-badge--work {
  background: #e6f7f5;
  color: #0f3c61;
}

.pe-struct-title {
  font-size: 1.25rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 0.5rem 0;
}

.pe-struct-desc {
  font-size: 0.92rem;
  color: #64748b;
  line-height: 1.5;
  margin: 0 0 1.25rem 0;
}

.pe-struct-desc strong {
  color: #0f3c61;
}

.pe-areas-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.pe-area-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 0.4rem 0.75rem;
  font-size: 0.82rem;
  font-weight: 700;
  color: #1e293b;
}

.pe-area-icon {
  color: #51CAB9;
}

.pe-work-highlight {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #ffffff;
  border: 1px solid #51CAB9;
  color: #358880;
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0.5rem 0.9rem;
  border-radius: 8px;
}

/* Roadmap de 5 Niveles */
.pe-roadmap-wrap {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 24px;
  padding: 2.25rem;
}

.pe-roadmap-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1.5rem;
  gap: 1rem;
}

.pe-roadmap-title {
  font-size: 1.2rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 0.2rem 0;
}

.pe-roadmap-subtitle {
  font-size: 0.85rem;
  color: #64748b;
}

.pe-roadmap-hint {
  font-size: 0.8rem;
  color: #358880;
  font-weight: 700;
  background: #effaf9;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  border: 1px solid rgba(81, 202, 185, 0.3);
}

/* Tabs */
.pe-levels-tabs {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.pe-level-tab {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 0.85rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  text-align: left;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
}

.pe-level-tab:hover {
  border-color: #51CAB9;
  transform: translateY(-2px);
}

.pe-level-tab.is-active {
  background: #0f3c61;
  border-color: #0f3c61;
  box-shadow: 0 6px 18px rgba(15, 60, 97, 0.2);
}

.pe-tab-num {
  font-size: 1.25rem;
  font-weight: 900;
  color: #51CAB9;
  line-height: 1;
}

.pe-level-tab.is-active .pe-tab-num {
  color: #51CAB9;
}

.pe-tab-text {
  display: flex;
  flex-direction: column;
}

.pe-tab-badge {
  font-size: 0.65rem;
  font-weight: 800;
  text-transform: uppercase;
  color: #94a3b8;
  letter-spacing: 0.05em;
}

.pe-level-tab.is-active .pe-tab-badge {
  color: rgba(255, 255, 255, 0.65);
}

.pe-tab-title {
  font-size: 0.82rem;
  font-weight: 700;
  color: #0f3c61;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.pe-level-tab.is-active .pe-tab-title {
  color: #ffffff;
}

/* Display Card */
.pe-level-display {
  background: #ffffff;
  border: 1px solid #51CAB9;
  border-radius: 18px;
  padding: 2rem 2.2rem;
  box-shadow: 0 4px 20px rgba(81, 202, 185, 0.1);
  animation: fadeIn 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}

.pe-level-main-info {
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
}

.pe-level-icon-wrap {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: #effaf9;
  color: #358880;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.pe-level-tag {
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #51CAB9;
  margin-bottom: 0.25rem;
}

.pe-level-name {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.35rem;
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 0.4rem 0;
}

.pe-level-desc {
  font-size: 0.95rem;
  color: #475569;
  line-height: 1.6;
  margin: 0;
}

/* Sección de Módulos dentro del Nivel */
.pe-level-modules-section {
  border-top: 1px solid #eef6f5;
  padding-top: 1.5rem;
}

.pe-modules-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.pe-mod-header-icon {
  color: #358880;
}

.pe-modules-title {
  font-size: 0.85rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #0f3c61;
}

.pe-modules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 0.85rem;
}

.pe-module-card {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.2s ease;
  position: relative;
}

.pe-module-card:hover {
  background: #ffffff;
  border-color: #51CAB9;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(81, 202, 185, 0.12);
}

.pe-module-card--work {
  border-color: #c9ede7;
  background: #effaf9;
}

.pe-module-code {
  font-size: 0.75rem;
  font-weight: 800;
  background: #effaf9;
  color: #358880;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  flex-shrink: 0;
}

.pe-module-card.pe-module-card--work .pe-module-code {
  background: #0f3c61;
  color: #ffffff;
}

.pe-module-name {
  font-size: 0.88rem;
  font-weight: 700;
  color: #1e293b;
  line-height: 1.35;
}

.pe-work-tag {
  margin-left: auto;
  font-size: 0.65rem;
  font-weight: 800;
  text-transform: uppercase;
  background: #358880;
  color: #ffffff;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  flex-shrink: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .pe-structure-grid {
    grid-template-columns: 1fr;
  }
  .pe-levels-tabs {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 640px) {
  .pe-levels-tabs {
    grid-template-columns: 1fr;
  }
  .pe-level-main-info {
    flex-direction: column;
    align-items: flex-start;
  }
  .pe-modules-grid {
    grid-template-columns: 1fr;
  }
  .pe-level-display {
    padding: 1.25rem;
  }
  .pe-roadmap-header {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
