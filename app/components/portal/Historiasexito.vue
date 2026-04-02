<script setup lang="ts">
import { ref } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const historias = [
  { iniciales: 'GG', nombre: 'Gabriela Gómez Garcés', programa: 'Lic. Administración de Empresas', gen: 'Gen. 2021', color: '#0F3C61', quote: 'UNINTER me brindó las herramientas y el apoyo para crecer profesionalmente sin detener mi vida laboral. La modalidad ejecutiva fue clave.' },
  { iniciales: 'JA', nombre: 'Juan Carlos Adán Ayala', programa: 'Lic. Derecho', gen: 'Gen. 2020', color: '#1565C0', quote: 'Los docentes especializados y el seguimiento personalizado marcaron una diferencia real en mi formación como abogado.' },
  { iniciales: 'LQ', nombre: 'Luis Fernando Quintero', programa: 'Ingeniería en Sistemas', gen: 'Gen. 2022', color: '#2E7D32', quote: 'Desde el primer semestre tuve acceso a proyectos reales. Hoy trabajo en una empresa de tecnología y UNINTER fue el inicio.' },
  { iniciales: 'MR', nombre: 'María Rodríguez Peña', programa: 'Lic. Psicología', gen: 'Gen. 2023', color: '#546E7A', quote: 'La atención a estudiantes y los recursos disponibles en campus superaron mis expectativas. Siempre me sentí acompañada.' },
]

const current = ref(0)
const prev = () => { current.value = (current.value - 1 + historias.length) % historias.length }
const next = () => { current.value = (current.value + 1) % historias.length }
</script>

<template>
  <section class="he-section uninter-section">
    <div class="uninter-container">

      <div class="he-header">
        <div>
          <div class="uninter-eyebrow">Egresados UNINTER</div>
          <h2 class="uninter-section-title">Historias de<br><em>éxito</em></h2>
        </div>
        <a href="https://uninter.edu.mx" class="uninter-ver-mas">Ver todas →</a>
      </div>

      <!-- Desktop: grid -->
      <div class="he-grid">
        <div v-for="h in historias" :key="h.nombre" class="he-card">
          <div class="he-card__avatar" :style="`background:${h.color}`">
            <span>{{ h.iniciales }}</span>
          </div>
          <div class="he-card__body">
            <p class="he-card__quote">"{{ h.quote }}"</p>
            <div class="he-card__footer">
              <p class="he-card__name">{{ h.nombre }}</p>
              <p class="he-card__prog">{{ h.programa }} · {{ h.gen }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile: carousel -->
      <div class="he-carousel" v-if="historias.length > 0">
        <div class="he-card he-card--featured">
          <div class="he-card__avatar" :style="`background:${historias[current]?.color}`">
            <span>{{ historias[current]?.iniciales }}</span>
          </div>
          <div class="he-card__body">
            <p class="he-card__quote">"{{ historias[current]?.quote }}"</p>
            <div class="he-card__footer">
              <p class="he-card__name">{{ historias[current]?.nombre }}</p>
              <p class="he-card__prog">{{ historias[current]?.programa }} · {{ historias[current]?.gen }}</p>
            </div>
          </div>
        </div>
        <div class="he-carousel__nav">
          <button @click="prev" class="he-nav-btn" aria-label="Anterior"><ChevronLeft :size="16" /></button>
          <div class="he-dots">
            <span v-for="(_, i) in historias" :key="i" class="he-dot" :class="{ 'he-dot--a': i === current }"></span>
          </div>
          <button @click="next" class="he-nav-btn" aria-label="Siguiente"><ChevronRight :size="16" /></button>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.he-section { background: #f8f9fb; }

.he-header { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 2rem; flex-wrap: wrap; gap: 1rem; }

.he-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
.he-carousel { display: none; }

.he-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: box-shadow .2s;
}
.he-card:hover { box-shadow: 0 8px 24px rgba(0,0,0,.08); }
.he-card--featured { width: 100%; }

.he-card__avatar {
  width: 52px; height: 52px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}
.he-card__avatar span { font-size: .95rem; font-weight: 800; color: #fff; }

.he-card__body { display: flex; flex-direction: column; gap: .75rem; flex: 1; }
.he-card__quote { font-size: .82rem; color: #374151; line-height: 1.65; font-style: italic; margin: 0; flex: 1; }
.he-card__footer { border-top: 1px solid #f1f5f9; padding-top: .75rem; }
.he-card__name { font-size: .85rem; font-weight: 700; color: #0F3C61; margin: 0; }
.he-card__prog { font-size: .72rem; color: #64748b; margin: 3px 0 0; }

.he-carousel__nav { display: flex; align-items: center; justify-content: center; gap: 1rem; margin-top: 1.25rem; }
.he-nav-btn { width: 36px; height: 36px; border-radius: 50%; border: 1.5px solid #e2e8f0; background: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; color: #0F3C61; transition: all .2s; }
.he-nav-btn:hover { background: #0F3C61; color: #fff; border-color: #0F3C61; }
.he-dots { display: flex; gap: 5px; }
.he-dot { width: 8px; height: 8px; border-radius: 50%; background: #e2e8f0; transition: background .2s; }
.he-dot--a { background: #0F3C61; }

@media (max-width: 900px) { .he-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 600px) {
  .he-grid { display: none; }
  .he-carousel { display: block; }
}
</style>