<script setup lang="ts">
import { ref, computed } from 'vue'
import { ArrowRight, GraduationCap, Clock, Search, ChevronRight } from 'lucide-vue-next'

interface Licenciatura {
  nombre: string
  area: string
  duracion: string
  modalidad: 'Escolarizada' | 'Ejecutiva' | 'Ambas'
  demanda: 'Alta' | 'Media' | 'Muy alta'
  href: string
}

const licenciaturas: Licenciatura[] = [
  { nombre: 'Administración de Empresas',          area: 'Negocios',     duracion: '4 años',   modalidad: 'Ambas',        demanda: 'Alta',     href: '/universidad/administracion' },
  { nombre: 'Contaduría Pública',                  area: 'Negocios',     duracion: '4 años',   modalidad: 'Ambas',        demanda: 'Alta',     href: '/universidad/contaduria' },
  { nombre: 'Mercadotecnia',                       area: 'Negocios',     duracion: '4 años',   modalidad: 'Escolarizada', demanda: 'Muy alta', href: '/universidad/mercadotecnia' },
  { nombre: 'Comercio Internacional',              area: 'Negocios',     duracion: '4 años',   modalidad: 'Ejecutiva',    demanda: 'Alta',     href: '/universidad/comercio' },
  { nombre: 'Derecho',                             area: 'Jurídico',     duracion: '5 años',   modalidad: 'Escolarizada', demanda: 'Alta',     href: '/universidad/derecho' },
  { nombre: 'Criminología y Criminalística',       area: 'Jurídico',     duracion: '4 años',   modalidad: 'Escolarizada', demanda: 'Media',    href: '/universidad/criminologia' },
  { nombre: 'Psicología',                          area: 'Salud',        duracion: '4 años',   modalidad: 'Escolarizada', demanda: 'Muy alta', href: '/universidad/psicologia' },
  { nombre: 'Nutrición',                           area: 'Salud',        duracion: '4 años',   modalidad: 'Escolarizada', demanda: 'Alta',     href: '/universidad/nutricion' },
  { nombre: 'Ingeniería en Sistemas Computacionales', area: 'Tecnología', duracion: '4.5 años', modalidad: 'Escolarizada', demanda: 'Muy alta', href: '/universidad/sistemas' },
  { nombre: 'Ingeniería Industrial',               area: 'Tecnología',   duracion: '4.5 años', modalidad: 'Escolarizada', demanda: 'Alta',     href: '/universidad/industrial' },
  { nombre: 'Ingeniería en Electrónica',           area: 'Tecnología',   duracion: '4.5 años', modalidad: 'Escolarizada', demanda: 'Media',    href: '/universidad/electronica' },
  { nombre: 'Ingeniería Biomédica',                area: 'Tecnología',   duracion: '5 años',   modalidad: 'Escolarizada', demanda: 'Alta',     href: '/universidad/biomedica' },
  { nombre: 'Comunicación',                        area: 'Humanidades',  duracion: '4 años',   modalidad: 'Escolarizada', demanda: 'Media',    href: '/universidad/comunicacion' },
  { nombre: 'Diseño Gráfico',                      area: 'Arte',         duracion: '4 años',   modalidad: 'Escolarizada', demanda: 'Alta',     href: '/universidad/diseno' },
  { nombre: 'Arquitectura',                        area: 'Construcción', duracion: '5 años',   modalidad: 'Escolarizada', demanda: 'Media',    href: '/universidad/arquitectura' },
  { nombre: 'Turismo y Hotelería',                 area: 'Servicios',    duracion: '4 años',   modalidad: 'Escolarizada', demanda: 'Media',    href: '/universidad/turismo' },
  { nombre: 'Gastronomía',                         area: 'Servicios',    duracion: '3.5 años', modalidad: 'Escolarizada', demanda: 'Alta',     href: '/universidad/gastronomia' },
  { nombre: 'Pedagogía',                           area: 'Educación',    duracion: '4 años',   modalidad: 'Ambas',        demanda: 'Media',    href: '/universidad/pedagogia' },
  { nombre: 'Educación Física',                    area: 'Educación',    duracion: '4 años',   modalidad: 'Escolarizada', demanda: 'Media',    href: '/universidad/educacion-fisica' },
  { nombre: 'Relaciones Internacionales',          area: 'Humanidades',  duracion: '4 años',   modalidad: 'Escolarizada', demanda: 'Alta',     href: '/universidad/relaciones-internacionales' },
  { nombre: 'Ciencias del Deporte',                area: 'Salud',        duracion: '4 años',   modalidad: 'Escolarizada', demanda: 'Media',    href: '/universidad/deporte' },
  { nombre: 'Administración Hotelera',             area: 'Servicios',    duracion: '4 años',   modalidad: 'Ejecutiva',    demanda: 'Media',    href: '/universidad/hoteleria' },
  { nombre: 'Seguridad Pública',                   area: 'Jurídico',     duracion: '4 años',   modalidad: 'Ejecutiva',    demanda: 'Media',    href: '/universidad/seguridad' },
]

const areas = ['Todas', 'Negocios', 'Tecnología', 'Salud', 'Jurídico', 'Arte', 'Humanidades', 'Educación', 'Servicios', 'Construcción']
const areaIcons: Record<string, string> = {
  'Negocios':     'mdi:briefcase-outline',
  'Tecnología':   'mdi:laptop',
  'Salud':        'mdi:heart-pulse',
  'Jurídico':     'mdi:scale-balance',
  'Arte':         'mdi:palette-outline',
  'Humanidades':  'mdi:book-open-outline',
  'Educación':    'mdi:school-outline',
  'Servicios':    'mdi:silverware-fork-knife',
  'Construcción': 'mdi:ruler-square',
}

const activeArea = ref('Todas')
const activeModalidad = ref<'Todas' | 'Escolarizada' | 'Ejecutiva'>('Todas')
const searchQuery = ref('')

const filtered = computed(() => {
  return licenciaturas.filter(l => {
    const matchArea = activeArea.value === 'Todas' || l.area === activeArea.value
    const matchModalidad = activeModalidad.value === 'Todas'
      || l.modalidad === activeModalidad.value
      || l.modalidad === 'Ambas'
    const matchSearch = l.nombre.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchArea && matchModalidad && matchSearch
  })
})

const demandaBadge = (d: string) => ({
  'Muy alta': { label: 'Muy alta demanda', color: '#22c55e' },
  'Alta':     { label: 'Alta demanda',     color: '#4A90C4' },
  'Media':    { label: 'Demanda media',    color: '#f59e0b' },
})[d] ?? { label: d, color: '#888' }

const modalidadLabel: Record<string, string> = {
  'Escolarizada': 'Escolarizada',
  'Ejecutiva':    'Ejecutiva',
  'Ambas':        'Esc. / Ejec.',
}

const countByArea = (area: string) =>
  area === 'Todas'
    ? licenciaturas.length
    : licenciaturas.filter(l => l.area === area).length
</script>

<template>
  <section class="ol-section">
    <div class="ol-container">

      <!-- ── Header ─────────────────────────────────── -->
      <div class="ol-header">
        <div class="ol-header__left">
          <div class="ol-eyebrow">
            <span class="ol-eyebrow__line"></span>
            <span>Licenciaturas e Ingenierías</span>
          </div>
          <h2 class="ol-title">
            Elige tu<br><em>carrera ideal</em>
          </h2>
          <p class="ol-desc">
            23 licenciaturas y 6 ingenierías. Programas con RVOE, docentes
            especializados y enfoque en el mercado laboral real.
          </p>
        </div>

        <div class="ol-header__stats">
          <div class="ol-stat">
            <span class="ol-stat__n">23</span>
            <span class="ol-stat__l">Licenciaturas</span>
          </div>
          <div class="ol-stat__sep"></div>
          <div class="ol-stat">
            <span class="ol-stat__n">6</span>
            <span class="ol-stat__l">Ingenierías</span>
          </div>
          <div class="ol-stat__sep"></div>
          <div class="ol-stat">
            <span class="ol-stat__n">2</span>
            <span class="ol-stat__l">Modalidades</span>
          </div>
        </div>
      </div>

      <!-- ── Controles ───────────────────────────────── -->
      <div class="ol-controls">

        <!-- Búsqueda -->
        <div class="ol-search">
          <Search :size="14" class="ol-search__icon" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Buscar carrera..."
            class="ol-search__input"
          />
        </div>

        <!-- Modalidad -->
        <div class="ol-modal-tabs">
          <button
            v-for="m in ['Todas', 'Escolarizada', 'Ejecutiva']"
            :key="m"
            class="ol-modal-tab"
            :class="{ 'ol-modal-tab--active': activeModalidad === m }"
            @click="activeModalidad = m as any"
          >{{ m }}</button>
        </div>
      </div>

      <!-- ── Área chips ──────────────────────────────── -->
      <div class="ol-areas">
        <button
          v-for="area in areas"
          :key="area"
          class="ol-area-chip"
          :class="{ 'ol-area-chip--active': activeArea === area }"
          @click="activeArea = area"
        >
          <Icon
            v-if="area !== 'Todas'"
            :name="areaIcons[area] || 'mdi:folder-outline'"
            size="12"
          />
          {{ area }}
          <span class="ol-area-chip__count">{{ countByArea(area) }}</span>
        </button>
      </div>

      <!-- ── Tabla ───────────────────────────────────── -->
      <div class="ol-table-wrap">
        <table class="ol-table">
          <thead class="ol-table__head">
            <tr>
              <th>Programa</th>
              <th>Área</th>
              <th>Duración</th>
              <th>Modalidad</th>
              <th>Demanda</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="lic in filtered"
              :key="lic.nombre"
              class="ol-table__row"
            >
              <td class="ol-table__name">
                <GraduationCap :size="15" class="ol-table__name-icon" />
                {{ lic.nombre }}
              </td>
              <td class="ol-table__area">
                <span class="ol-area-badge">
                  <Icon :name="areaIcons[lic.area] || 'mdi:school'" size="11" />
                  {{ lic.area }}
                </span>
              </td>
              <td class="ol-table__dur">
                <Clock :size="12" class="ol-table__dur-icon" />
                {{ lic.duracion }}
              </td>
              <td class="ol-table__modal">
                <span
                  class="ol-modal-badge"
                  :class="{
                    'ol-modal-badge--exec': lic.modalidad === 'Ejecutiva',
                    'ol-modal-badge--both': lic.modalidad === 'Ambas',
                  }"
                >
                  {{ modalidadLabel[lic.modalidad] }}
                </span>
              </td>
              <td class="ol-table__demand">
                <span
                  class="ol-demand"
                  :style="`color: ${demandaBadge(lic.demanda).color}`"
                >
                  <span
                    class="ol-demand__dot"
                    :style="`background: ${demandaBadge(lic.demanda).color}`"
                  ></span>
                  {{ lic.demanda }}
                </span>
              </td>
              <td class="ol-table__action">
                <NuxtLink :to="lic.href" class="ol-row-link">
                  Ver
                  <ChevronRight :size="13" />
                </NuxtLink>
              </td>
            </tr>

            <!-- Empty state -->
            <tr v-if="filtered.length === 0">
              <td colspan="6" class="ol-empty">
                No se encontraron programas con ese criterio.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- ── Footer CTA ──────────────────────────────── -->
      <div class="ol-footer">
        <p class="ol-footer__text">
          ¿Tienes dudas sobre qué carrera elegir?
        </p>
        <div class="ol-footer__actions">
          <a href="/test-vocacional" class="ol-btn ol-btn--ghost">
            <Icon name="mdi:lightbulb-outline" size="15" />
            Test vocacional
          </a>
          <a href="/contacto" class="ol-btn ol-btn--solid">
            Solicita asesoría gratuita
            <ArrowRight :size="15" />
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.ol-section {
  --ol-bg:      #080d18;
  --ol-surface: #0d1220;
  --ol-border:  rgba(255,255,255,0.07);
  --ol-text:    #dde6f4;
  --ol-muted:   #6a85a8;
  --ol-primary: #0F3C61;
  --ol-light:   #4A90C4;
  --ol-radius:  8px;

  background: var(--ol-bg);
  padding: 5.5rem 0;
}

.ol-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Header */
.ol-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.ol-eyebrow {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ol-light);
  margin-bottom: 0.875rem;
}

.ol-eyebrow__line {
  display: block;
  width: 26px;
  height: 2px;
  background: var(--ol-light);
}

.ol-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.8rem, 3.5vw, 2.8rem);
  font-weight: 700;
  color: var(--ol-text);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0 0 0.875rem;
}

.ol-title em {
  font-style: italic;
  color: var(--ol-light);
}

.ol-desc {
  font-size: 0.875rem;
  color: var(--ol-muted);
  line-height: 1.7;
  max-width: 420px;
  margin: 0;
}

.ol-header__stats {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.25rem 1.75rem;
  background: var(--ol-surface);
  border: 1px solid var(--ol-border);
  border-radius: var(--ol-radius);
  flex-shrink: 0;
}

.ol-stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.ol-stat__n {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--ol-text);
  line-height: 1;
}

.ol-stat__l {
  font-size: 0.62rem;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--ol-muted);
}

.ol-stat__sep {
  width: 1px;
  height: 32px;
  background: var(--ol-border);
}

/* Controls */
.ol-controls {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  align-items: center;
}

.ol-search {
  position: relative;
  flex: 1;
  min-width: 200px;
  max-width: 320px;
}

.ol-search__icon {
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--ol-muted);
  pointer-events: none;
}

.ol-search__input {
  width: 100%;
  background: var(--ol-surface);
  border: 1px solid var(--ol-border);
  border-radius: var(--ol-radius);
  padding: 0.5rem 0.75rem 0.5rem 2.25rem;
  font-size: 0.8rem;
  color: var(--ol-text);
  outline: none;
  transition: border-color 0.2s;
  box-sizing: border-box;
}

.ol-search__input::placeholder { color: var(--ol-muted); }
.ol-search__input:focus { border-color: var(--ol-light); }

.ol-modal-tabs {
  display: flex;
  background: var(--ol-surface);
  border: 1px solid var(--ol-border);
  border-radius: var(--ol-radius);
  overflow: hidden;
}

.ol-modal-tab {
  padding: 0.45rem 0.9rem;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--ol-muted);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.18s;
  white-space: nowrap;
}

.ol-modal-tab--active {
  background: var(--ol-primary);
  color: #fff;
}

/* Area chips */
.ol-areas {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.ol-area-chip {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 0.32rem 0.75rem;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  border-radius: 999px;
  border: 1px solid var(--ol-border);
  background: transparent;
  color: var(--ol-muted);
  cursor: pointer;
  transition: all 0.18s;
}

.ol-area-chip:hover {
  color: var(--ol-text);
  border-color: rgba(255,255,255,0.14);
}

.ol-area-chip--active {
  background: var(--ol-primary);
  border-color: var(--ol-primary);
  color: #fff;
}

.ol-area-chip__count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(255,255,255,0.12);
  font-size: 0.6rem;
  font-weight: 700;
}

/* Table */
.ol-table-wrap {
  border: 1px solid var(--ol-border);
  border-radius: var(--ol-radius);
  overflow: hidden;
  margin-bottom: 1.5rem;
}

.ol-table {
  width: 100%;
  border-collapse: collapse;
}

.ol-table__head {
  background: var(--ol-surface);
  border-bottom: 1px solid var(--ol-border);
}

.ol-table__head th {
  padding: 0.7rem 1rem;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ol-muted);
  text-align: left;
  white-space: nowrap;
}

.ol-table__row {
  border-bottom: 1px solid var(--ol-border);
  background: var(--ol-bg);
  transition: background 0.15s;
}

.ol-table__row:last-child { border-bottom: none; }
.ol-table__row:hover { background: #0d1525; }

.ol-table__row td {
  padding: 0.75rem 1rem;
  vertical-align: middle;
}

.ol-table__name {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--ol-text);
  white-space: nowrap;
}

.ol-table__name-icon {
  color: var(--ol-light);
  flex-shrink: 0;
}

.ol-area-badge {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.68rem;
  color: var(--ol-muted);
  white-space: nowrap;
}

.ol-table__dur {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.75rem;
  color: var(--ol-muted);
  white-space: nowrap;
}

.ol-table__dur-icon { flex-shrink: 0; }

.ol-modal-badge {
  display: inline-block;
  padding: 0.2rem 0.55rem;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  border-radius: 4px;
  background: rgba(15, 60, 97, 0.4);
  color: var(--ol-light);
  border: 1px solid rgba(74, 144, 196, 0.2);
  white-space: nowrap;
}

.ol-modal-badge--exec {
  background: rgba(34, 90, 34, 0.35);
  color: #4ade80;
  border-color: rgba(74, 222, 128, 0.2);
}

.ol-modal-badge--both {
  background: rgba(80, 50, 0, 0.4);
  color: #fbbf24;
  border-color: rgba(251, 191, 36, 0.2);
}

.ol-demand {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.72rem;
  font-weight: 600;
  white-space: nowrap;
}

.ol-demand__dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

.ol-row-link {
  display: inline-flex;
  align-items: center;
  gap: 3px;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--ol-light);
  text-decoration: none;
  opacity: 0.7;
  transition: opacity 0.15s, gap 0.15s;
}

.ol-table__row:hover .ol-row-link {
  opacity: 1;
  gap: 6px;
}

.ol-empty {
  text-align: center;
  padding: 2.5rem;
  font-size: 0.85rem;
  color: var(--ol-muted);
}

/* Footer */
.ol-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1.5rem 1.75rem;
  background: var(--ol-surface);
  border: 1px solid var(--ol-border);
  border-radius: var(--ol-radius);
}

.ol-footer__text {
  font-size: 0.875rem;
  color: var(--ol-muted);
  margin: 0;
}

.ol-footer__actions {
  display: flex;
  gap: 0.625rem;
  flex-wrap: wrap;
}

.ol-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.55rem 1.1rem;
  font-size: 0.78rem;
  font-weight: 700;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.2s;
  border: none;
  cursor: pointer;
}

.ol-btn--ghost {
  color: var(--ol-text);
  background: transparent;
  border: 1px solid var(--ol-border);
}
.ol-btn--ghost:hover { background: rgba(255,255,255,0.05); }

.ol-btn--solid {
  background: var(--ol-primary);
  color: #fff;
}
.ol-btn--solid:hover { background: #1a5490; }

/* ── RESPONSIVE ─────────────────────────────────────────── */
@media (max-width: 1024px) {
  .ol-header { flex-direction: column; gap: 1.25rem; }
  .ol-header__stats { align-self: flex-start; }
}

@media (max-width: 768px) {
  .ol-section { padding: 3.5rem 0; }
  .ol-container { padding: 0 1rem; }

  .ol-header__stats { display: none; }

  .ol-controls { flex-direction: column; align-items: stretch; }
  .ol-search { max-width: 100%; }
  .ol-modal-tabs { align-self: flex-start; }

  /* Tabla: scroll horizontal + esconder columnas secundarias */
  .ol-table-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }
  .ol-table { min-width: 480px; }

  .ol-table__area,
  .ol-table__demand { display: none; }

  .ol-table__name { font-size: 0.8rem; }
  .ol-table__dur  { font-size: 0.7rem; }

  /* Footer CTA: stack vertical */
  .ol-footer { flex-direction: column; align-items: flex-start; gap: 0.875rem; }
  .ol-footer__actions { width: 100%; }
  .ol-btn { flex: 1; justify-content: center; }
}

@media (max-width: 480px) {
  .ol-table { min-width: 340px; }
  .ol-table__modal { display: none; }
  .ol-table__head th:last-child { display: none; }
  .ol-table__row td:last-child { display: none; }

  /* Chips de área: scroll horizontal */
  .ol-areas {
    flex-wrap: nowrap;
    overflow-x: auto;
    scrollbar-width: none;
    padding-bottom: 4px;
    -webkit-overflow-scrolling: touch;
  }
  .ol-areas::-webkit-scrollbar { display: none; }
  .ol-area-chip { flex-shrink: 0; }

  .ol-title { font-size: 1.6rem; }
}
</style>