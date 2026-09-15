<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";

interface Historia {
  iniciales: string;
  nombre: string;
  nivel: string;
  gen: string;
  puesto: string;
  color: string;
  quote: string;
}

const historias: Historia[] = [
  {
    iniciales: "JC",
    nombre: "José Alfonso Chavarín Montoya",
    nivel: "Licenciatura / Especialidad",
    gen: "Gen. 2024",
    puesto: "Ciberseguridad · BBVA",
    color: "#0F3C61",
    quote:
      "Durante mi carrera en Ingeniería en Sistemas Computacionales adquirí bases sólidas en programación, bases de datos y desarrollo de software, que han sido esenciales en mi vida profesional. Las prácticas y proyectos me ayudaron a enfrentar retos reales y a trabajar en equipo. Además, el enfoque en la resolución de problemas me dio la capacidad de adaptarme a diferentes áreas tecnológicas.",
  },
  {
    iniciales: "JA",
    nombre: "Juan Carlos Adán Ayala",
    nivel: "Licenciatura / Especialidad",
    gen: "Gen. 2023",
    puesto: "Quality Assurance Supervisor · Nissan Motor Corporation",
    color: "#1565C0",
    quote:
      "Gracias a UNINTER por darme las herramientas necesarias para contribuir en mi aprendizaje de manera integral y lograr formarme como gran líder en la industria automotriz.",
  },
  {
    iniciales: "FA",
    nombre: "Freya Montserrat Almazán Castelo",
    nivel: "Licenciatura / Especialidad",
    gen: "Gen. 2023",
    puesto: "Directora · Grupo Majestic",
    color: "#7C3AED",
    quote:
      "Mi paso por UNINTER me permitió adquirir bases que he sabido complementar con la experiencia profesional. Fue una etapa que me ayudó a definir mejor hacia dónde quería dirigir mi carrera.",
  },
  {
    iniciales: "FP",
    nombre: "Filemón Parra Rendón",
    nivel: "Licenciatura",
    gen: "Gen. 2011",
    puesto: "Crisis and Risk Leader · Volvo Trucks · North Carolina, USA",
    color: "#0284C7",
    quote:
      "UNINTER fue y sigue siendo parte importante de mis logros. Tuve la oportunidad de involucrarme en prácticas profesionales desde mi segundo semestre, desarrollar habilidades multiculturales, estudiar mi último semestre en la Universidad de Utah y aprender francés como mi tercer idioma.",
  },
  {
    iniciales: "LQ",
    nombre: "Luis Fernando Quintero Arango",
    nivel: "Doctorado",
    gen: "Gen. 2025",
    puesto: "Docente Investigador · Univ. Católica Luis Amigó · Medellín, Colombia",
    color: "#166534",
    quote:
      "El haber estudiado el Doctorado en Administración desde la metodología virtual me brindó la posibilidad de fortalecer aspectos académicos y administrativos actuales. Igualmente, conocer a colegas de otros países, con sus culturas, experiencias académicas y profesionales, logró un acercamiento a las realidades empresariales desde diferentes contextos.",
  },
  {
    iniciales: "FP",
    nombre: "Felicitas Pérez Gurrola",
    nivel: "Licenciatura / Especialidad",
    gen: "Gen. 2024",
    puesto: "Directora creativa / Diseñadora · F Archive / Uniformanza",
    color: "#EA580C",
    quote:
      "Me abrieron el panorama al mundo laboral y me ayudaron a expandir las herramientas y aptitudes para sobresalir en lo que hago.",
  },
  {
    iniciales: "AM",
    nombre: "Amanda Martínez Acevedo",
    nivel: "Sec. / Bach. / Lic. / Esp.",
    gen: "Gen. 2023",
    puesto: "Project Manager · EU4IA",
    color: "#DB2777",
    quote:
      "Toda mi vida estuve en UNINTER; al final es parte de mi vida y de mi conocimiento.",
  },
  {
    iniciales: "JO",
    nombre: "Juan Pablo Oropeza Castro",
    nivel: "Maestría",
    gen: "Gen. 2022",
    puesto: "Socio Fundador · Mezcal Punta Dorada",
    color: "#4F46E5",
    quote:
      "Todo este aprendizaje ha sido clave en mi emprendimiento personal, ya que me permitió tomar mejores decisiones, diseñar estrategias, fortalecer el posicionamiento y crear valor para mi marca.",
  },
  {
    iniciales: "JS",
    nombre: "Jhocelynn Carolina Salazar Padilla",
    nivel: "Licenciatura / Especialidad",
    gen: "Gen. 2020",
    puesto: "Motion Graphics Designer · Seis Grados",
    color: "#0D9488",
    quote:
      "UNINTER me ha dado las bases necesarias para empezar en el mundo laboral. El sistema de prácticas también fue de ayuda para crear mi primer portafolio digital “Demo Reel”, lo que me abrió la primera puerta a mi primer empleo.",
  },
  {
    iniciales: "DT",
    nombre: "Diana Jocelyn Trujillo Bahena",
    nivel: "Licenciatura",
    gen: "Gen. 2016",
    puesto: "Directora de Marketing y Desarrollo de Negocios · Grupo Acerta",
    color: "#9333EA",
    quote:
      "Las prácticas profesionales y experiencias reales me dieron la seguridad y la preparación para enfrentar los retos del mundo laboral con confianza. Hoy puedo decir que gran parte de mi crecimiento y de los logros que he alcanzado se deben a las bases que construí en UNINTER.",
  },
  {
    iniciales: "SC",
    nombre: "Samanta Monsserrat Carrasco Nava",
    nivel: "Licenciatura",
    gen: "Gen. 2015",
    puesto: "Fundadora y Directora Creativa · Bleu Créatif",
    color: "#C2410C",
    quote:
      "UNINTER me dio la base, pero también la confianza para construir mis propios caminos. Hoy soy fundadora de mi propia agencia creativa, donde he tenido el privilegio de trabajar con más de 40 marcas.",
  },
  {
    iniciales: "RB",
    nombre: "Rodrigo Blanco Zamora",
    nivel: "Licenciatura / Maestría",
    gen: "Gen. 2004",
    puesto: "Dir. Asuntos Corporativos Latam · Tata Consultancy Services",
    color: "#1E3A8A",
    quote:
      "Mi formación en la Universidad Internacional no solo me dotó de una sólida base académica, sino que también me proporcionó una experiencia profesional inmersiva y de alto nivel. Esta trayectoria ayudó a cimentar la carrera profesional que actualmente desempeño.",
  },
  {
    iniciales: "CL",
    nombre: "Christian Lejarazu González",
    nivel: "Licenciatura",
    gen: "Gen. 2011",
    puesto: "Growth Director · Agencia Goula",
    color: "#059669",
    quote:
      "Fue justamente la vinculación con empresas consolidadas lo que me permitió comenzar mi carrera en medios de comunicación en Cuernavaca y, de ahí, seguir creciendo. Ver a compañeros haciendo prácticas o contratados desde que estudiaban también me inspiró a buscar mi propio camino.",
  },
  {
    iniciales: "AC",
    nombre: "Araceli de la Concha Rivera",
    nivel: "Licenciatura / Especialidad",
    gen: "Gen. 2014",
    puesto: "Regional Servicing Coordinator · Diamond Films",
    color: "#E11D48",
    quote:
      "En mi carrera, la primera mitad fue teórica y después en su mayoría práctica, lo que me permitió estar mucho mejor preparada en experiencia para la vida laboral. En el caso del posgrado, fue práctico y gracias a haberlo tomado, en su momento tuve un ascenso de puesto.",
  },
];

const CLONE_COUNT = 6;
const AUTOPLAY_INTERVAL = 8000; // 8 segundos para lectura cómoda y completa
const ANIMATION_DURATION = 700; // ms de transición suave

const slidesVisible = ref(4);
const currentIndex = ref(CLONE_COUNT);
const isTransitioning = ref(true);
const isAnimating = ref(false);
let timer: ReturnType<typeof setInterval> | null = null;
let touchStartX = 0;

const extendedHistorias = computed(() => {
  const head = historias.slice(-CLONE_COUNT);
  const tail = historias.slice(0, CLONE_COUNT);
  return [...head, ...historias, ...tail];
});

const slideWidthPercent = computed(() => 100 / slidesVisible.value);

const trackStyle = computed(() => {
  const percent = currentIndex.value * slideWidthPercent.value;
  return {
    transform: `translate3d(-${percent}%, 0, 0)`,
    transition: isTransitioning.value
      ? `transform ${ANIMATION_DURATION}ms cubic-bezier(0.25, 1, 0.5, 1)`
      : "none",
  };
});

const currentDisplayIndex = computed(() => {
  const total = historias.length;
  const normalized =
    (((currentIndex.value - CLONE_COUNT) % total) + total) % total;
  return normalized + 1;
});

const next = () => {
  if (isAnimating.value) return;
  isAnimating.value = true;
  currentIndex.value++;
  restartAutoplay();
  setTimeout(() => {
    if (isAnimating.value) onTransitionEnd();
  }, ANIMATION_DURATION + 100);
};

const prev = () => {
  if (isAnimating.value) return;
  isAnimating.value = true;
  currentIndex.value--;
  restartAutoplay();
  setTimeout(() => {
    if (isAnimating.value) onTransitionEnd();
  }, ANIMATION_DURATION + 100);
};

const onTransitionEnd = () => {
  isAnimating.value = false;
  const total = historias.length;

  if (currentIndex.value >= CLONE_COUNT + total) {
    isTransitioning.value = false;
    currentIndex.value -= total;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        isTransitioning.value = true;
      });
    });
  } else if (currentIndex.value < CLONE_COUNT) {
    isTransitioning.value = false;
    currentIndex.value += total;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        isTransitioning.value = true;
      });
    });
  }
};

const startAutoplay = () => {
  stopAutoplay();
  timer = setInterval(() => {
    next();
  }, AUTOPLAY_INTERVAL);
};

const stopAutoplay = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
};

const restartAutoplay = () => {
  stopAutoplay();
  startAutoplay();
};

const updateSlidesVisible = () => {
  if (typeof window === "undefined") return;
  const w = window.innerWidth;
  if (w <= 640) {
    slidesVisible.value = 1;
  } else if (w <= 1024) {
    slidesVisible.value = 2;
  } else {
    slidesVisible.value = 4;
  }
};

const onTouchStart = (e: TouchEvent) => {
  if (!e.changedTouches || e.changedTouches.length === 0) return;
  touchStartX = e.changedTouches[0].screenX;
  stopAutoplay();
};

const onTouchEnd = (e: TouchEvent) => {
  if (!e.changedTouches || e.changedTouches.length === 0) return;
  const touchEndX = e.changedTouches[0].screenX;
  const diff = touchStartX - touchEndX;
  if (Math.abs(diff) > 45) {
    if (diff > 0) {
      next();
    } else {
      prev();
    }
  } else {
    startAutoplay();
  }
};

onMounted(() => {
  updateSlidesVisible();
  window.addEventListener("resize", updateSlidesVisible);
  startAutoplay();
});

onUnmounted(() => {
  stopAutoplay();
  if (typeof window !== "undefined") {
    window.removeEventListener("resize", updateSlidesVisible);
  }
});
</script>

<template>
  <section class="he-section uninter-section">
    <div class="uninter-container">
      <div class="he-header">
        <div class="he-header__text">
          <div class="uninter-eyebrow">Egresados UNINTER</div>
          <h2 class="uninter-section-title">
            Historias de<br /><em>éxito</em>
          </h2>
          <p class="he-desc">
            Conoce cómo nuestros egresados aplican lo aprendido en sus proyectos, empleos y siguientes etapas profesionales.
          </p>
        </div>

        <!-- Controles Carousel -->
        <div class="he-controls">
          <button
            type="button"
            @click="prev"
            class="he-nav-arrow"
            aria-label="Historia anterior"
            title="Anterior"
          >
            <ChevronLeft :size="18" />
          </button>

          <div class="he-indicator">
            <span class="he-indicator-curr">{{ currentDisplayIndex }}</span>
            <span class="he-indicator-sep">/</span>
            <span class="he-indicator-total">{{ historias.length }}</span>
          </div>

          <button
            type="button"
            @click="next"
            class="he-nav-arrow"
            aria-label="Siguiente historia"
            title="Siguiente"
          >
            <ChevronRight :size="18" />
          </button>
        </div>
      </div>

      <!-- Carrusel Track -->
      <div
        class="he-carousel-wrapper"
        @mouseenter="stopAutoplay"
        @mouseleave="startAutoplay"
        @touchstart.passive="onTouchStart"
        @touchend.passive="onTouchEnd"
      >
        <div
          class="he-track"
          :style="trackStyle"
          @transitionend="onTransitionEnd"
        >
          <div
            v-for="(h, index) in extendedHistorias"
            :key="`${h.nombre}-${index}`"
            class="he-slide"
          >
            <div class="he-card">
              <div class="he-card__header">
                <div class="he-card__avatar" :style="{ background: h.color }">
                  <span>{{ h.iniciales }}</span>
                </div>
                <span class="he-card__badge">{{ h.gen }}</span>
              </div>

              <div class="he-card__body">
                <p class="he-card__quote">“{{ h.quote }}”</p>
              </div>

              <div class="he-card__footer">
                <h4 class="he-card__name">{{ h.nombre }}</h4>
                <p class="he-card__role">{{ h.puesto }}</p>
                <p class="he-card__prog">{{ h.nivel }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.he-section {
  background: #f8f9fb;
  overflow: hidden;
}

.he-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1.25rem;
}

.he-header__text {
  max-width: 620px;
}

.he-desc {
  font-size: 0.95rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0.6rem 0 0 0;
}

/* Controles */
.he-controls {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: #ffffff;
  padding: 0.35rem 0.6rem;
  border-radius: 999px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 8px rgba(15, 60, 97, 0.05);
}

.he-nav-arrow {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #e2e8f0;
  background: #f8fafc;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0f3c61;
  cursor: pointer;
  transition: all 0.2s ease;
}

.he-nav-arrow:hover {
  background: #0f3c61;
  color: #ffffff;
  border-color: #0f3c61;
}

.he-indicator {
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 0.85rem;
  font-weight: 700;
  color: #0f3c61;
  padding: 0 0.5rem;
  font-variant-numeric: tabular-nums;
  user-select: none;
}

.he-indicator-sep {
  color: #94a3b8;
  font-weight: 400;
}

.he-indicator-total {
  color: #64748b;
  font-weight: 500;
}

/* Carrusel y Track */
.he-carousel-wrapper {
  position: relative;
  overflow: hidden;
  margin: 0 -8px;
  padding: 8px 0 16px;
}

.he-track {
  display: flex;
  will-change: transform;
  align-items: stretch;
}

.he-slide {
  flex: 0 0 25%;
  max-width: 25%;
  padding: 0 8px;
  box-sizing: border-box;
  display: flex;
}

/* Tarjeta */
.he-card {
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 14px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 0 2px 8px rgba(15, 60, 97, 0.03);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.he-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(15, 60, 97, 0.08);
  border-color: #cbd5e1;
}

.he-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.1rem;
}

.he-card__avatar {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.he-card__avatar span {
  font-size: 0.95rem;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: 0.04em;
}

.he-card__badge {
  font-size: 0.72rem;
  font-weight: 700;
  color: #0f3c61;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.he-card__body {
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 1.25rem;
}

.he-card__quote {
  font-size: 0.83rem;
  color: #334155;
  line-height: 1.65;
  font-style: italic;
  margin: 0;
  word-break: break-word;
}

.he-card__footer {
  border-top: 1px solid #f1f5f9;
  padding-top: 0.9rem;
  margin-top: auto;
}

.he-card__name {
  font-size: 0.88rem;
  font-weight: 700;
  color: #0f3c61;
  margin: 0 0 0.25rem 0;
  line-height: 1.3;
}

.he-card__role {
  font-size: 0.76rem;
  font-weight: 600;
  color: #e26a1b;
  margin: 0 0 0.25rem 0;
  line-height: 1.35;
}

.he-card__prog {
  font-size: 0.72rem;
  color: #64748b;
  margin: 0;
  line-height: 1.3;
}

/* Responsivo */
@media (max-width: 1024px) {
  .he-slide {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media (max-width: 640px) {
  .he-slide {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .he-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .he-controls {
    align-self: flex-start;
  }
}
</style>
