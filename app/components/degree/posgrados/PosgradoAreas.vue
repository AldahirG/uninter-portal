<script setup lang="ts">
import { computed } from 'vue';
import { BookOpen, Lightbulb, Target, Briefcase } from 'lucide-vue-next';

interface CareerData {
  areas_conocimiento?: string | string[];
  lineas_investigacion?: string | string[];
  areas_enfoque?: string | string[];
  areas_especializacion?: string | string[];
  [key: string]: any;
}

const props = defineProps<{ data: CareerData }>();

const areasList = computed(() => {
  const list = [];
  if (props.data?.areas_conocimiento && props.data.areas_conocimiento.length > 0) {
    list.push({ id: 'conocimiento', title: 'Áreas de Conocimiento', content: props.data.areas_conocimiento, icon: BookOpen });
  }
  if (props.data?.lineas_investigacion && props.data.lineas_investigacion.length > 0) {
    list.push({ id: 'investigacion', title: 'Líneas de Investigación', content: props.data.lineas_investigacion, icon: Lightbulb });
  }
  if (props.data?.areas_enfoque && props.data.areas_enfoque.length > 0) {
    list.push({ id: 'enfoque', title: 'Áreas de Enfoque', content: props.data.areas_enfoque, icon: Target });
  }
  if (props.data?.areas_especializacion && props.data.areas_especializacion.length > 0) {
    list.push({ id: 'especializacion', title: 'Áreas de Especialización', content: props.data.areas_especializacion, icon: Briefcase });
  }
  return list;
});
</script>

<template>
  <section v-if="areasList.length > 0" class="pg-areas-section" id="areas-investigacion">
    <div class="uninter-container">
      <div class="areas-header">
        <h2 class="areas-title">
          Áreas de Especialización e <span class="uninter-accent">Investigación</span>
        </h2>
      </div>

      <!-- GRID DINAMICO -->
      <div class="areas-grid" :class="{
        'grid-cols-1': areasList.length === 1,
        'grid-cols-2': areasList.length === 2 || areasList.length === 4,
        'grid-cols-3': areasList.length === 3
      }">
        <div v-for="area in areasList" :key="area.id" class="area-card">
          <div class="area-card__icon">
            <component :is="area.icon" :size="24" />
          </div>
          <h3 class="area-card__title">{{ area.title }}</h3>
          <div class="area-card__content">
            <ul v-if="Array.isArray(area.content)" class="area-list">
              <li v-for="(item, idx) in area.content" :key="idx">{{ item }}</li>
            </ul>
            <p v-else>{{ area.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.pg-areas-section {
  padding: 5rem 0;
  background-color: #ffffff;
  font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
}

.uninter-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
}

.areas-header {
  text-align: center;
  margin-bottom: 3.5rem;
}

.areas-title {
  color: #0f3c61;
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 3.5vw, 2.8rem);
  font-weight: 800;
  line-height: 1.2;
  margin: 0;
}

.uninter-accent {
  color: #8f9a3e;
}

/* GRIDS */
.areas-grid {
  display: grid;
  gap: 2rem;
  align-items: start;
}

.grid-cols-1 {
  grid-template-columns: 1fr;
  max-width: 700px;
  margin: 0 auto;
}

.grid-cols-2 {
  grid-template-columns: repeat(2, 1fr);
  max-width: 1000px;
  margin: 0 auto;
}

.grid-cols-3 {
  grid-template-columns: repeat(3, 1fr);
}

/* CARDS */
.area-card {
  background: #fdfdfc;
  border-radius: 16px;
  padding: 2.5rem;
  border-top: 4px solid #8f9a3e;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.area-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 32px rgba(143, 154, 62, 0.1);
}

.area-card__icon {
  width: 48px;
  height: 48px;
  background: #f3f6e8;
  color: #8f9a3e;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-bottom: 1.5rem;
}

.area-card__title {
  color: #0f3c61;
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 1.25rem 0;
}

.area-card__content {
  color: #475569;
  font-size: 0.95rem;
  line-height: 1.6;
}

.area-card__content p {
  margin: 0;
}

.area-list {
  margin: 0;
  padding-left: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.area-list li {
  list-style-type: disc;
}

/* RESPONSIVE */
@media (max-width: 860px) {
  .areas-grid {
    grid-template-columns: 1fr;
  }
}
</style>