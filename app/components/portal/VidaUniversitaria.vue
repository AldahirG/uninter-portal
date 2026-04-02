<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight } from 'lucide-vue-next'

const activeTab = ref('deportes')

const tabs = [
  { id: 'deportes',  label: 'Deportes',  icon: 'mdi:soccer' },
  { id: 'cultura',   label: 'Cultura',   icon: 'mdi:palette-outline' },
  { id: 'idiomas',   label: 'Idiomas',   icon: 'mdi:translate' },
  { id: 'liderazgo', label: 'Liderazgo', icon: 'mdi:account-group-outline' },
]

interface Actividad {
  titulo: string
  desc: string
  icon: string
  imagen: string
  tag: string
}

const actividades: Record<string, Actividad[]> = {
  deportes: [
    { titulo: 'Fútbol Americano',  desc: 'Leandros — equipo representativo con múltiples campeonatos regionales.',   icon: 'mdi:football',             imagen: '/images/talleres/americano.jpg',  tag: 'Competitivo' },
    { titulo: 'Fútbol Soccer',     desc: 'Liga interna masculina y femenina con torneos interuniversitarios.',        icon: 'mdi:soccer',               imagen: '/images/talleres/cheerDance2.jpg',           tag: 'Intramuros' },
    { titulo: 'Básquetbol',        desc: 'Entrenamientos diarios en cancha techada de alto rendimiento.',             icon: 'mdi:basketball',           imagen: '/images/talleres/companiaTeatro.jpg',       tag: 'Instalación propia' },
    { titulo: 'Artes Marciales',   desc: 'Taekwondo, Karate y Judo con instructores certificados.',                  icon: 'mdi:karate',               imagen: '/images/talleres/deportes1.png',  tag: 'Certificación' },
    { titulo: 'Atletismo',         desc: 'Pista y campo. Participación en torneos estatales cada semestre.',         icon: 'mdi:run-fast',             imagen: '/images/talleres/filaArmonica.jpg',        tag: 'Competitivo' },
    { titulo: 'Voleibol',          desc: 'Torneos internos semestrales en modalidades playa y sala.',                icon: 'mdi:volleyball',           imagen: '/images/talleres/image-15.png',         tag: 'Intramuros' },
  ],
  cultura: [
    { titulo: 'Ballet Folklórico', desc: 'Grupo representativo con presentaciones en festivales nacionales.',         icon: 'mdi:dance-ballroom',       imagen: '/images/talleres/ballet.jpg',           tag: 'Representativo' },
    { titulo: 'Teatro',            desc: 'Taller semestral con montaje final abierto al público.',                   icon: 'mdi:theater',              imagen: '/images/talleres/teatro.jpg',           tag: 'Taller' },
    { titulo: 'Música',            desc: 'Banda universitaria, coro y talleres de guitarra, piano y más.',           icon: 'mdi:music',                imagen: '/images/talleres/musica.jpg',           tag: 'Taller' },
    { titulo: 'Fotografía',        desc: 'Club con exposiciones anuales y concursos en campus.',                     icon: 'mdi:camera-outline',       imagen: '/images/talleres/fotografia.jpg',       tag: 'Club' },
    { titulo: 'Cine Club',         desc: 'Ciclos temáticos semanales y análisis cinematográfico.',                   icon: 'mdi:movie-open-outline',   imagen: '/images/talleres/cine.jpg',             tag: 'Club' },
    { titulo: 'Pintura y Dibujo',  desc: 'Taller libre semanal con materiales incluidos en tu cuota.',              icon: 'mdi:draw',                 imagen: '/images/talleres/pintura.jpg',          tag: 'Taller' },
  ],
  idiomas: [
    { titulo: 'Inglés',            desc: 'Niveles A1 a C1. Preparación para TOEFL y certificación internacional.',   icon: 'mdi:flag-outline',         imagen: '/images/vida/ingles.jpg',           tag: 'Certificación' },
    { titulo: 'Francés',           desc: 'Cursos básicos e intermedios. Partner Alliance Française.',               icon: 'mdi:flag-outline',         imagen: '/images/vida/frances.jpg',          tag: 'Partner' },
    { titulo: 'Mandarín',          desc: 'Introducción al mandarín orientado a negocios internacionales.',           icon: 'mdi:flag-outline',         imagen: '/images/vida/mandarin.jpg',         tag: 'Negocio' },
    { titulo: 'Spanish School',    desc: 'Programa intensivo para extranjeros. Cursos regulares e intensivos.',      icon: 'mdi:school-outline',       imagen: '/images/vida/spanish.jpg',          tag: 'Internacional' },
    { titulo: 'Italiano',          desc: 'Talleres culturales con cine y gastronomía italiana incluidos.',           icon: 'mdi:flag-outline',         imagen: '/images/vida/italiano.jpg',         tag: 'Cultural' },
    { titulo: 'Intercambio',       desc: 'Club de conversación con alumnos internacionales cada semana.',            icon: 'mdi:account-voice',        imagen: '/images/vida/intercambio.jpg',      tag: 'Intercambio' },
  ],
  liderazgo: [
    { titulo: 'Consejo Estudiantil', desc: 'Representación con voz en decisiones institucionales.',                  icon: 'mdi:account-group',        imagen: '/images/vida/consejo.jpg',          tag: 'Gobierno estudiantil' },
    { titulo: 'Voluntariado',        desc: 'Brigadas sociales y programas de responsabilidad social universitaria.', icon: 'mdi:hand-heart-outline',   imagen: '/images/vida/voluntariado.jpg',     tag: 'RSU' },
    { titulo: 'Emprendimiento',      desc: 'Incubadora UNINTER — apoya tu proyecto desde la idea hasta el MVP.',    icon: 'mdi:rocket-launch-outline',imagen: '/images/vida/emprendimiento.jpg',   tag: 'Incubadora' },
    { titulo: 'Mentoring',           desc: 'Programa de mentores con egresados exitosos de diversas industrias.',   icon: 'mdi:human-greeting',       imagen: '/images/vida/mentoring.jpg',        tag: 'Red alumni' },
    { titulo: 'MUN',                 desc: 'Modelo de Naciones Unidas — habilidades diplomáticas y debate.',        icon: 'mdi:earth',                imagen: '/images/vida/mun.jpg',              tag: 'Internacional' },
    { titulo: 'Finanzas Personales', desc: 'Talleres gratuitos de educación financiera para estudiantes.',          icon: 'mdi:cash-multiple',        imagen: '/images/vida/finanzas.jpg',         tag: 'Taller' },
  ],
}

const stats = [
  { value: '40+',  label: 'Actividades anuales',  icon: 'mdi:calendar-star' },
  { value: '12',   label: 'Equipos deportivos',    icon: 'mdi:trophy-outline' },
  { value: '8',    label: 'Idiomas disponibles',   icon: 'mdi:translate' },
  { value: '100%', label: 'Incluido en tu cuota', icon: 'mdi:check-circle-outline' },
]

// Colores de fallback por tab
const tabColors: Record<string, string> = {
  deportes:  '#0F3C61',
  cultura:   '#6A1B9A',
  idiomas:   '#00695C',
  liderazgo: '#E65100',
}
</script>

<template>
  <section id="vida" class="vu-section uninter-section">
    <div class="uninter-container">

      <!-- Header -->
      <div class="vu-header">
        <div class="vu-header__left">
          <div class="uninter-eyebrow">Comunidad UNINTER</div>
          <h2 class="uninter-section-title">Vida<br><em>universitaria</em></h2>
          <p class="vu-desc">
            Más allá de las clases — deportes, cultura, idiomas y liderazgo.
            Todo incluido en tu cuota.
          </p>
        </div>
        <div class="vu-stats">
          <div v-for="s in stats" :key="s.label" class="vu-stat">
            <div class="vu-stat__icon"><Icon :name="s.icon" size="18" /></div>
            <div>
              <p class="vu-stat__n">{{ s.value }}</p>
              <p class="vu-stat__l">{{ s.label }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Tabs -->
      <div class="vu-tabs">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          class="vu-tab"
          :class="{ 'vu-tab--active': activeTab === tab.id }"
          @click="activeTab = tab.id"
        >
          <Icon :name="tab.icon" size="15" />
          {{ tab.label }}
        </button>
      </div>

      <!-- Cards con imagen -->
      <Transition name="vu-fade" mode="out-in">
        <div :key="activeTab" class="vu-grid">
          <div
            v-for="act in actividades[activeTab]"
            :key="act.titulo"
            class="vu-card"
          >
            <!-- Imagen / fallback -->
            <div
              class="vu-card__img-wrap"
              :style="`background:${tabColors[activeTab]}18`"
            >
              <img
                :src="act.imagen"
                :alt="act.titulo"
                class="vu-card__img"
                loading="lazy"
              />
              <!-- Fallback si no hay imagen -->
              <div class="vu-card__img-fallback" :style="`color:${tabColors[activeTab]}`">
                <Icon :name="act.icon" size="32" />
              </div>
            </div>

            <!-- Tag -->
            <span class="vu-card__tag" :style="`background:${tabColors[activeTab]}15;color:${tabColors[activeTab]}`">
              {{ act.tag }}
            </span>

            <!-- Info -->
            <div class="vu-card__body">
              <h3 class="vu-card__title">{{ act.titulo }}</h3>
              <p class="vu-card__desc">{{ act.desc }}</p>
            </div>
          </div>
        </div>
      </Transition>

      <!-- Footer -->
      <div class="vu-footer">
        <p class="vu-footer__text">
          Toda actividad incluida en tu inscripción — sin costos adicionales.
        </p>
        <a href="https://uninter.edu.mx/vida-universitaria" target="_blank" class="uninter-ver-mas">
          Conocer todo <ArrowRight :size="13" />
        </a>
      </div>

    </div>
  </section>
</template>

<style scoped>
.vu-section { background: #fff; }

/* Header */
.vu-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}
.vu-desc {
  font-size: .875rem;
  color: #64748b;
  line-height: 1.7;
  max-width: 380px;
  margin: .75rem 0 0;
}

/* Stats */
.vu-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: #e2e8f0;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  overflow: hidden;
}
.vu-stat {
  display: flex;
  align-items: center;
  gap: .75rem;
  padding: 1rem 1.25rem;
  background: #f8f9fb;
}
.vu-stat__icon {
  width: 36px; height: 36px;
  border-radius: 7px;
  background: #e8f0fd;
  display: flex; align-items: center; justify-content: center;
  color: #0F3C61;
  flex-shrink: 0;
}
.vu-stat__n {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.3rem;
  font-weight: 700;
  color: #0F3C61;
  margin: 0;
  line-height: 1;
}
.vu-stat__l {
  font-size: .62rem;
  text-transform: uppercase;
  letter-spacing: .06em;
  color: #64748b;
  margin: 3px 0 0;
}

/* Tabs */
.vu-tabs {
  display: flex;
  gap: 3px;
  background: #f1f5f9;
  border-radius: 8px;
  padding: 4px;
  margin-bottom: 1.25rem;
  overflow-x: auto;
  scrollbar-width: none;
}
.vu-tabs::-webkit-scrollbar { display: none; }
.vu-tab {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: .5rem 1.1rem;
  font-size: .8rem;
  font-weight: 600;
  color: #64748b;
  background: transparent;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all .2s;
  white-space: nowrap;
}
.vu-tab--active { background: #0F3C61; color: #fff; }
.vu-tab:hover:not(.vu-tab--active) { background: #fff; color: #0F3C61; }

/* Grid con imagen */
.vu-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.vu-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  transition: transform .2s, box-shadow .2s;
  display: flex;
  flex-direction: column;
}
.vu-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(0,0,0,.09);
}

/* Imagen */
.vu-card__img-wrap {
  position: relative;
  height: 140px;
  overflow: hidden;
}
.vu-card__img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform .35s ease;
}
.vu-card:hover .vu-card__img { transform: scale(1.05); }

.vu-card__img-fallback {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: .4;
}
/* Si la imagen carga correctamente, oculta fallback */
.vu-card__img:not([src=""]) + .vu-card__img-fallback { display: none; }

/* Tag */
.vu-card__tag {
  display: inline-block;
  font-size: .63rem;
  font-weight: 700;
  letter-spacing: .07em;
  text-transform: uppercase;
  padding: .22rem .65rem;
  border-radius: 4px;
  margin: .875rem .875rem 0;
  align-self: flex-start;
}

/* Body */
.vu-card__body {
  padding: .5rem .875rem 1rem;
  display: flex;
  flex-direction: column;
  gap: .375rem;
  flex: 1;
}
.vu-card__title {
  font-size: .9rem;
  font-weight: 700;
  color: #0F3C61;
  margin: 0;
  line-height: 1.3;
}
.vu-card__desc {
  font-size: .75rem;
  color: #64748b;
  line-height: 1.55;
  margin: 0;
}

/* Footer */
.vu-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  background: #f8f9fb;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
}
.vu-footer__text { font-size: .875rem; color: #64748b; margin: 0; }

/* Transition */
.vu-fade-enter-active, .vu-fade-leave-active { transition: opacity .2s ease, transform .2s ease; }
.vu-fade-enter-from, .vu-fade-leave-to { opacity: 0; transform: translateY(5px); }

/* Responsive */
@media (max-width: 900px) {
  .vu-header { flex-direction: column; }
  .vu-stats { width: 100%; }
  .vu-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 768px) {
  .vu-card__img-wrap { height: 120px; }
}
@media (max-width: 480px) {
  .vu-grid { grid-template-columns: 1fr 1fr; gap: .75rem; }
  .vu-card__img-wrap { height: 100px; }
  .vu-card__body { padding: .5rem .75rem .875rem; }
}
</style>