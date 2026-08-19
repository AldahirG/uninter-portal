<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue';
import { X } from 'lucide-vue-next';

const props = defineProps<{
  careerPaths?: Array<{ role: string, industry: string, desc?: string }>;
}>();

// Datos de prueba para el layout (se usan si no hay careerPaths en el JSON)
const defaultJobs = [
  {
    role: "Director(a) de Contenido",
    industry: "Medios y Entretenimiento",
    desc: "Lidera la estrategia editorial, coordina equipos creativos y supervisa la producción de contenidos en múltiples plataformas para garantizar la coherencia y el impacto del mensaje."
  },
  {
    role: "Estratega de Comunicación Transmedia",
    industry: "Agencias Digitales",
    desc: "Diseña narrativas complejas que se despliegan a través de múltiples canales y formatos, conectando a las audiencias con historias inmersivas y experiencias interactivas."
  },
  {
    role: "Consultor(a) de Gestión de Crisis y Riesgo Reputacional",
    industry: "Consultoría Estratégica",
    desc: "Asesora a corporativos e individuos para prevenir crisis de imagen, diseñando planes de respuesta inmediata y tácticas para proteger la reputación pública."
  },
  {
    role: "Director(a) de Comunicación Corporativa",
    industry: "Sector Empresarial",
    desc: "Gestiona la identidad e imagen corporativa, liderando las relaciones públicas, la comunicación interna y el contacto estratégico con medios y stakeholders."
  },
  {
    role: "UX Writer & Product Content Strategist",
    industry: "Tecnología y Startups",
    desc: "Define el tono y la voz de productos digitales, creando microtextos y guías de contenido que mejoran la experiencia de usuario y la usabilidad de interfaces."
  },
  {
    role: "Periodista de Investigación Multimedia",
    industry: "Medios Informativos",
    desc: "Investiga y reporta a profundidad utilizando herramientas digitales avanzadas, visualización de datos y plataformas interactivas para contar historias complejas."
  }
];

const jobs = computed(() => {
  if (props.careerPaths && props.careerPaths.length > 0) {
    return props.careerPaths;
  }
  return defaultJobs;
});

const selectedJob = ref<any>(null);
const pillRefs = ref<HTMLElement[]>([]);
const listTops = ref<number[]>([]);
const containerHeight = ref<number | null>(null);
const detailPanelRef = ref<HTMLElement | null>(null);
const sectionRef = ref<HTMLElement | null>(null);

const calculateTops = () => {
  let currentTop = 0;
  const newTops = [];
  if (pillRefs.value) {
    for (let i = 0; i < pillRefs.value.length; i++) {
      newTops.push(currentTop);
      const el = pillRefs.value[i];
      if (el) {
        currentTop += el.offsetHeight + 15; // 15px de separación
      } else {
        currentTop += 75; // fallback
      }
    }
  }
  listTops.value = newTops;
  containerHeight.value = currentTop;
};

// Recalcular al cambiar el tamaño de la ventana (responsive wrap)
const onResize = () => {
  if (selectedJob.value) {
    calculateTops();
  }
};

onMounted(() => {
  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
});

const selectJob = async (job: any) => {
  selectedJob.value = job;
  // Esperar al siguiente render para que el contenedor cambie de ancho y los textos se acomoden
  await nextTick();
  // Un pequeño retraso para asegurar que el navegador aplicó los nuevos anchos de línea
  setTimeout(() => {
    calculateTops();
    
    // Si estamos en móvil, centramos el panel de detalle en pantalla
    if (window.innerWidth <= 968 && detailPanelRef.value) {
      detailPanelRef.value.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, 50);
};

const closeDetail = () => {
  selectedJob.value = null;
  // Volver a hacer focus en las píldoras si estamos en móvil
  if (window.innerWidth <= 968 && sectionRef.value) {
    sectionRef.value.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
};
</script>

<template>
  <section class="career-job-market" ref="sectionRef">
    <div class="uninter-container">
      <div class="job-market-header">
        <h2 class="section-title">¿En qué puedo <em class="title-accent">trabajar?</em></h2>
      </div>

      <div class="job-market-content" :class="{ 'is-detailed': selectedJob }">
        
        <!-- Píldoras: se mantienen siempre montadas para poder animar sus posiciones suavemente -->
        <div class="pills-container" :style="selectedJob && containerHeight ? { height: containerHeight + 'px' } : {}">
          <div 
            v-for="(job, index) in jobs" 
            :key="'pill-'+index"
            ref="pillRefs"
            class="job-pill"
            :class="[
              !selectedJob ? 'scatter-pos-' + (index % 6) : 'list-pos',
              { active: selectedJob && selectedJob.role === job.role }
            ]"
            :style="selectedJob ? { top: (listTops[index] !== undefined ? listTops[index] : index * 75) + 'px', left: '0' } : {}"
            @click="selectJob(job)"
          >
            {{ job.role }}
          </div>
        </div>

        <!-- Panel de detalles -->
        <Transition name="fade-panel">
          <div v-if="selectedJob" class="detail-panel-wrapper" ref="detailPanelRef">
            <div class="detail-panel">
              <button class="btn-close" @click="closeDetail" aria-label="Cerrar detalle">
                <X :size="24" stroke-width="2.5" />
              </button>
              <h3 class="detail-title">{{ selectedJob.role }}</h3>
              <p class="detail-desc">
                {{ selectedJob.desc || selectedJob.industry }}
              </p>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.career-job-market {
  padding: 5rem 0;
  background-color: #ffffff;
  font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
  overflow: hidden;
}

.uninter-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.job-market-header {
  text-align: center;
  margin-bottom: 4rem;
}

.job-market-header h2 {
  font-family: var(--font-serif, Lora, Georgia, serif);
  font-size: clamp(2.5rem, 4vw, 3.5rem);
  font-weight: 800;
  color: #0f3c61;
  margin: 0 0 1rem 0;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

.job-market-header h2 .title-accent {
  color: #0099cc;
  font-style: normal;
  position: relative;
  display: inline-block;
}

.job-market-header h2 .title-accent::after {
  content: "";
  position: absolute;
  bottom: 8px;
  left: 0;
  width: 100%;
  height: 8px;
  background-color: rgba(216, 67, 21, 0.15);
  z-index: -1;
  transform: rotate(-2deg);
}

.job-market-content {
  min-height: 480px;
  position: relative;
  display: flex;
  align-items: flex-start;
  transition: all 0.5s ease;
}

.pills-container {
  position: relative;
  width: 100%;
  height: 480px;
  transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1), height 0.5s ease;
}

.is-detailed .pills-container {
  width: 45%; /* Se contrae para dejar espacio al panel */
}

/* --- ESTILOS COMPARTIDOS DE PÍLDORAS (GLASSMORPHISM) --- */
.job-pill {
  position: absolute; /* Siempre absolutas para poder animar top y left */
  /* Fondo glassmorphism con un destello azul MUY sutil */
  background: radial-gradient(circle at 10% 50%, rgba(0, 153, 204, 0.05), rgba(255, 255, 255, 0.4) 80%);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  border: 1px solid rgba(15, 60, 97, 0.1); /* Borde un "poquito" más visible */
  border-radius: 99px;
  padding: 0.8rem 1.8rem;
  color: #0f3c61; /* Texto oscuro para legibilidad sobre el fondo claro */
  font-size: 1.05rem;
  font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
  font-weight: 600;
  cursor: pointer;
  /* Animación suave para todas las propiedades, especialmente posición */
  transition: top 0.6s cubic-bezier(0.25, 1, 0.5, 1), 
              left 0.6s cubic-bezier(0.25, 1, 0.5, 1),
              background 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 
    0 8px 20px rgba(0, 0, 0, 0.03), 
    inset 0 0 10px rgba(255, 255, 255, 0.3);
  display: inline-block;
  max-width: 90%;
  z-index: 2;
}

.job-pill:hover {
  background: radial-gradient(circle at 10% 50%, rgba(0, 153, 204, 0.1), rgba(255, 255, 255, 0.6) 80%);
  transform: translateY(-3px) scale(1.02);
  box-shadow: 
    0 12px 25px rgba(0, 153, 204, 0.05),
    inset 0 0 15px rgba(255, 255, 255, 0.6);
  z-index: 10;
}

.job-pill.active {
  background: radial-gradient(circle at 10% 50%, rgba(0, 153, 204, 0.15), rgba(255, 255, 255, 0.8) 80%);
  border-color: rgba(0, 153, 204, 0.25);
  transform: scale(1.05);
  box-shadow: 
    0 10px 25px rgba(0, 153, 204, 0.1),
    inset 0 0 20px rgba(255, 255, 255, 0.8);
  z-index: 5;
}

/* --- ESTADO INICIAL (ESPARCIDAS) --- */
/* Solo usamos left y top para que la animación hacia left: 0 sea perfecta y no haya saltos con 'right' o 'bottom' */
.scatter-pos-0 { top: 5%; left: 15%; }
.scatter-pos-1 { top: 20%; left: 45%; }
.scatter-pos-2 { top: 40%; left: 25%; }
.scatter-pos-3 { top: 55%; left: 5%; }
.scatter-pos-4 { top: 70%; left: 50%; }
.scatter-pos-5 { top: 85%; left: 30%; }

/* Animación sutil de flotación */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
}

/* Aplicar la flotación SOLO cuando no hay una píldora seleccionada, para que al listarse se queden quietas */
.career-job-market:not(.is-detailed) .job-pill {
  animation: float 6s ease-in-out infinite;
}

.career-job-market:not(.is-detailed) .scatter-pos-1 { animation-delay: 1s; }
.career-job-market:not(.is-detailed) .scatter-pos-2 { animation-delay: 2s; }
.career-job-market:not(.is-detailed) .scatter-pos-3 { animation-delay: 0.5s; }
.career-job-market:not(.is-detailed) .scatter-pos-4 { animation-delay: 1.5s; }
.career-job-market:not(.is-detailed) .scatter-pos-5 { animation-delay: 2.5s; }


/* --- PANEL DE DETALLE --- */
.detail-panel-wrapper {
  width: 55%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}

.detail-panel {
  background-color: rgba(15, 60, 97, 0.02); /* Mismo fondo sutil de la card anterior */
  border: 1px solid rgba(15, 60, 97, 0.04); /* Mismo borde invisible */
  border-radius: 16px;
  padding: 3rem 2.5rem;
  position: relative;
  box-shadow: 0 20px 40px rgba(15, 60, 97, 0.08); /* Misma sombra que genera espacio */
  text-align: center;
}

.btn-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #1a1a1a;
  transition: transform 0.2s;
}
.btn-close:hover {
  transform: scale(1.1);
}

.detail-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.6rem;
  font-weight: 800;
  color: #0f3c61;
  margin-bottom: 1.5rem;
  line-height: 1.4;
}

.detail-desc {
  font-size: 1rem;
  color: #333;
  line-height: 1.6;
}

/* --- TRANSICIONES DE VUE (Para que el panel aparezca suavemente) --- */
.fade-panel-enter-active,
.fade-panel-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-panel-enter-from,
.fade-panel-leave-to {
  opacity: 0;
  transform: translateX(20px); /* Un leve deslizamiento lateral para aparecer */
}

/* --- RESPONSIVE --- */
@media (max-width: 968px) {
  .job-market-content {
    flex-direction: column;
    min-height: auto;
  }
  
  /* Contenedor más alto en móvil cuando están esparcidas para evitar que se encimen */
  .career-job-market:not(.is-detailed) .pills-container {
    height: 650px;
  }
  
  .is-detailed .pills-container {
    width: 100%;
    /* La altura dinámica se encarga de darle el tamaño correcto, ya no hace falta hardcodear */
    margin-bottom: 2rem;
  }
  
  .detail-panel-wrapper {
    position: relative;
    width: 100%;
    margin-top: 1rem;
  }
  
  .job-market-header h2 {
    font-size: 2rem;
  }
  
  /* En móviles, distribuirlas en toda la altura (650px) para que no choquen */
  .scatter-pos-0 { top: 0%; left: 5%; }
  .scatter-pos-1 { top: 16%; left: 35%; }
  .scatter-pos-2 { top: 32%; left: 10%; }
  .scatter-pos-3 { top: 48%; left: 25%; }
  .scatter-pos-4 { top: 64%; left: 5%; }
  .scatter-pos-5 { top: 80%; left: 30%; }
}
</style>
