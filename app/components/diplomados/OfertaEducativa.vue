<script setup lang="ts">
import { ref, computed } from "vue";
import { ArrowRight, X, MessageCircle } from "lucide-vue-next";
import diplomadosDB from "~/assets/data/diplomados.json";

const categorias = [
  {
    area: "Gerenciales – Publicidad",
    icon: "mdi:bullhorn-outline",
    programas: [
      { nombre: "Diplomado en Creatividad y Publicidad", sigla: "DEPU1", nuevo: false },
      { nombre: "Diplomado en Mercadotecnia y Publicidad", sigla: "DEPU2", nuevo: false },
    ],
  },
  {
    area: "Gerenciales – Marketing Digital",
    icon: "mdi:chart-line",
    programas: [
      { nombre: "Diplomado en Marketing Digital Estratégico y Creativo", sigla: "DMDEC", nuevo: false },
      { nombre: "Diplomado en Estrategias y Experiencias Digitales", sigla: "DEED", nuevo: true },
    ],
  },
  {
    area: "Inteligencia Artificial",
    icon: "mdi:robot-outline",
    programas: [
      { nombre: "Diplomado en Inteligencia Artificial Aplicada a los Negocios", sigla: "DIAAN", nuevo: true },
    ],
  },
  {
    area: "Innovación Digital",
    icon: "mdi:lightning-bolt-outline",
    programas: [
      { nombre: "Diplomado en Administración de la Tecnología en Línea", sigla: "DATL", nuevo: true },
      { nombre: "Diplomado en Innovación y Transferencia Tecnológicas", sigla: "DITL", nuevo: true },
      { nombre: "Diplomado en Arquitectura, Diseño y Legislación de Redes y Tecnologías Web", sigla: "DADLR", nuevo: true },
    ],
  },
  {
    area: "Era Digital",
    icon: "mdi:monitor-outline",
    programas: [
      { nombre: "Diplomado en Crear y Contar Historias con Animación Digital", sigla: "DCCHA", nuevo: true },
      { nombre: "Diplomado en Producción Creativa y Posicionamiento Digital", sigla: "DPCPD", nuevo: true },
    ],
  },
  {
    area: "Psicología",
    icon: "mdi:head-outline",
    programas: [
      { nombre: "Diplomado en Psicopedagogía Aplicada", sigla: "DPA", nuevo: true },
    ],
  },
  {
    area: "Doblaje Profesional",
    icon: "mdi:microphone-outline",
    programas: [
      { nombre: "Diplomado en Doblaje Profesional para Cine, Televisión y Streaming", sigla: "DDCTS", nuevo: true },
    ],
  },
  {
    area: "Gerenciales – Relaciones Mercantiles Internacionales",
    icon: "mdi:earth",
    programas: [
      { nombre: "Diplomado en Comercio Exterior y Contratos Internacionales", sigla: "DERMI", nuevo: true },
      { nombre: "Diplomado en Derecho Aduanero y Marco Jurídico de la Competencia Económica", sigla: "DAMCE", nuevo: true },
    ],
  },
  {
    area: "Gerenciales – Educación en Formación Docente",
    icon: "mdi:school-outline",
    programas: [
      { nombre: "Diplomado en Modelos de Enseñanza y Evaluación de Programas", sigla: "DMEEP-D", nuevo: true },
      { nombre: "Diplomado en Paradigmas en la Enseñanza y Aprendizaje en Innovación Educativa", sigla: "DPEAI", nuevo: true },
      { nombre: "Diplomado en Elaboración y Planeación Didáctica basado en el Modelo de Competencias", sigla: "DEPDI", nuevo: true },
      { nombre: "Diplomado en Evaluación de los Diversos Modelos de Gestión Educativo", sigla: "DEDMG", nuevo: true },
    ],
  },
  {
    area: "Gerenciales – Enseñanza del Español como Lengua Extranjera",
    icon: "mdi:translate",
    programas: [
      { nombre: "Diplomado en Metodología y Adquisición de una Segunda Lengua", sigla: "DMEELE1", nuevo: true },
      { nombre: "Diplomado en Desarrollo de Destrezas Lingüísticas", sigla: "DMEL2", nuevo: true },
      { nombre: "Diplomado en Análisis del Uso del Español como Segunda Lengua para la Planeación de Metodologías Didácticas", sigla: "DMEELE3", nuevo: true },
      { nombre: "Diplomado en Elaboración de Programas de Estudio para Español e Inglés como Segunda Lengua", sigla: "DMEELE4", nuevo: true },
    ],
  },
  {
    area: "Gerenciales – Docencia del Español como Lengua Extranjera",
    icon: "mdi:book-open-outline",
    programas: [
      { nombre: "Diplomado en Estrategias Didácticas y Métodos de Enseñanza", sigla: "DEDME", nuevo: true },
      { nombre: "Diplomado en Tecnologías de la Información y Comunicación aplicadas a la Pedagogía", sigla: "DTICAP", nuevo: true },
    ],
  },
  {
    area: "Diseño y Arte",
    icon: "mdi:palette-outline",
    programas: [
      { nombre: "Diplomado en Diseño de Interiores", sigla: "DDI", nuevo: false },
      { nombre: "Diplomado en Fotografía", sigla: "DIFO", nuevo: false },
      { nombre: "Diplomado en Diseño de Modas con Enfoque en Desarrollo de Colecciones", sigla: "DMEDC", nuevo: true },
    ],
  },
  {
    area: "Arquitectura y Construcción",
    icon: "mdi:hard-hat",
    programas: [
      { nombre: "Diplomado en Administración de Obra I", sigla: "DAO1", nuevo: false },
      { nombre: "Diplomado en Administración de Obra II", sigla: "DAO2", nuevo: false },
    ],
  },
  {
    area: "Administrativos",
    icon: "mdi:briefcase-outline",
    programas: [
      { nombre: "Diplomado en Gestión Empresarial", sigla: "DGE", nuevo: false },
      { nombre: "Diplomado en Gestión Empresarial en Línea", sigla: "DGE-L", nuevo: true },
      { nombre: "Diplomado en Dirección de Empresas", sigla: "DDE", nuevo: false },
      { nombre: "Diplomado en Dirección de Empresas en Línea", sigla: "DDE-L", nuevo: true },
    ],
  },
  {
    area: "Idiomas",
    icon: "mdi:translate",
    programas: [
      { nombre: "Diplomado en Francés", sigla: "DEF", nuevo: true },
      { nombre: "Diplomado en Inglés", sigla: "DEI", nuevo: true },
      { nombre: "Diplomado en Inglés Profesional", sigla: "DEIP", nuevo: true },
    ],
  },
  {
    area: "Educación e Investigación",
    icon: "mdi:school-outline",
    programas: [
      { nombre: "Diplomado en Diseño y Desarrollo de Proyectos Académicos de Investigación", sigla: "DDPAI", nuevo: true },
      { nombre: "Diplomado en Formación para Cronistas", sigla: "DFC", nuevo: true },
    ],
  },
];

const filter = ref("Todos");

const tabs = [
  { label: "Todos", value: "Todos" },
  { label: "Negocios y Marketing", value: "Negocios" },
  { label: "Administrativos", value: "Administrativos" },
  { label: "Tecnología e IA", value: "Tecnologia" },
  { label: "Educación y ELE", value: "Educacion" },
  { label: "Educación e Investigación", value: "EducacionInvestigacion" },
  { label: "Idiomas", value: "Idiomas" },
  { label: "Diseño y Construcción", value: "Diseno" },
  { label: "Psicología y Doblaje", value: "Psicologia" }
];

const programList = computed(() => {
  const list: any[] = [];
  categorias.forEach(cat => {
    cat.programas.forEach(p => {
      list.push({
        nombre: p.nombre,
        sigla: p.sigla,
        nuevo: p.nuevo,
        area: cat.area,
        icon: cat.icon,
        slug: p.nombre.toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-")
      });
    });
  });

  if (filter.value === "Todos") return list;
  if (filter.value === "Negocios") {
    return list.filter(item => 
      item.area.includes("Publicidad") || 
      item.area.includes("Marketing") || 
      item.area.includes("Relaciones Mercantiles")
    );
  }
  if (filter.value === "Administrativos") {
    return list.filter(item => 
      item.area.includes("Administrativos")
    );
  }
  if (filter.value === "Tecnologia") {
    return list.filter(item => 
      item.area.includes("Inteligencia Artificial") || 
      item.area.includes("Innovación") || 
      item.area.includes("Era Digital")
    );
  }
  if (filter.value === "Educacion") {
    return list.filter(item => 
      item.area.includes("Español") || 
      item.area.includes("Docencia")
    );
  }
  if (filter.value === "EducacionInvestigacion") {
    return list.filter(item => 
      item.area.includes("Educación e Investigación")
    );
  }
  if (filter.value === "Idiomas") {
    return list.filter(item => 
      item.area.includes("Idiomas")
    );
  }
  if (filter.value === "Diseno") {
    return list.filter(item => 
      item.area.includes("Diseño") || 
      item.area.includes("Modas") || 
      item.area.includes("Arquitectura") || 
      item.area.includes("Construcción")
    );
  }
  if (filter.value === "Psicologia") {
    return list.filter(item => 
      item.area.includes("Psicología") || 
      item.area.includes("Doblaje")
    );
  }
  return list;
});

const isDrawerOpen = ref(false);
const activeProgram = ref<any>(null);

function openDrawer(p: any) {
  const details = (diplomadosDB as Record<string, any>)[p.slug] || {};
  activeProgram.value = {
    ...p,
    descripcion: details.description || p.nombre,
    ingreso: details.ingreso || "",
    egreso: details.egreso || "",
    perfilEgreso: details.perfilEgreso || ""
  };
  isDrawerOpen.value = true;
}

function closeDrawer() {
  isDrawerOpen.value = false;
}

function scrollToContact() {
  isDrawerOpen.value = false;
  const el = document.getElementById("contacto");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<template>
  <section id="oferta" class="dp-ofe">
    <div class="dp-container">
      <!-- Head -->
      <div class="dp-ofe__head">
        <div class="dp-ofe__head-icon"><Icon name="mdi:book-open-variant" size="32" /></div>
        <h2 class="dp-ofe__title">OFERTA EDUCATIVA</h2>
        <p class="dp-ofe__sub">Explora nuestros cursos y diplomados de alta especialidad</p>
      </div>

      <!-- Filtros / Tabs -->
      <div class="dp-tabs">
        <button
          v-for="t in tabs"
          :key="t.value"
          class="dp-tab-btn"
          :class="{ 'is-active': filter === t.value }"
          @click="filter = t.value"
        >
          {{ t.label }}
        </button>
      </div>

      <!-- Grid de Programas Individuales -->
      <div class="dp-grid">
        <div
          v-for="p in programList"
          :key="p.slug"
          class="dp-card"
          @click="openDrawer(p)"
        >
          <div class="dp-card__header">
            <span class="dp-card__area-badge">
              <Icon :name="p.icon" size="13" />
              {{ p.area }}
            </span>
            <span v-if="p.nuevo" class="dp-card__new-badge">Nuevo</span>
          </div>

          <h3 class="dp-card__title">{{ p.nombre }}</h3>

          <div class="dp-card__footer">
            <span class="dp-card__sigla" v-if="p.sigla">{{ p.sigla }}</span>
            <span class="dp-card__link">
              Saber más <ArrowRight :size="13" />
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- PANEL LATERAL (Side Drawer) CON BLUR -->
    <Teleport to="body">
      <div
        class="oe-drawer-overlay"
        :class="{ 'is-open': isDrawerOpen }"
        @click="closeDrawer"
      >
        <div class="oe-drawer" :class="{ 'is-open': isDrawerOpen }" @click.stop>
          <button class="oe-drawer-close" @click="closeDrawer">
            <X :size="24" />
          </button>

          <div v-if="activeProgram" class="oe-drawer-content">
            <div class="oe-drawer-header">
              <div class="oe-drawer-badge">
                <Icon :name="activeProgram.icon" size="14" />
                {{ activeProgram.area }}
              </div>
              <h3 class="oe-detail-title">{{ activeProgram.nombre }}</h3>
            </div>

            <p class="oe-detail-desc">
              {{ activeProgram.descripcion }}
            </p>

            <div class="oe-detail-actions">
              <!-- Enlace a la vista específica del Diplomado -->
              <NuxtLink
                :to="'/diplomados/' + activeProgram.slug"
                class="oe-btn oe-btn--solid"
              >
                Ver programa completo
              </NuxtLink>

              <!-- Solicitar admisión (hace scroll al formulario) -->
              <button
                @click="scrollToContact"
                class="oe-btn oe-btn--outline"
              >
                <MessageCircle :size="16" /> Solicitar admisión
              </button>
            </div>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<style scoped>
.dp-ofe {
  --p: #6D4C41; --pd: #4E342E; --pl: #A1887F;
  background: #ffffff;
  padding: 5.5rem 0;
}

.dp-container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }

.dp-ofe__head { text-align: center; margin-bottom: 3rem; }
.dp-ofe__head-icon { color: var(--p); margin-bottom: 0.75rem; }
.dp-ofe__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.6rem, 3.5vw, 2.4rem);
  font-weight: 900; color: #2a1810;
  letter-spacing: 0.05em; margin: 0 0 0.5rem;
}
.dp-ofe__sub { font-size: 1rem; color: #6d4c41; margin: 0; }

/* Tabs */
.dp-tabs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 3rem;
}

.dp-tab-btn {
  background: #f4f2f0;
  border: 1px solid rgba(109,76,65,0.08);
  color: #5d514b;
  padding: 0.6rem 1.25rem;
  border-radius: 99px;
  font-size: 0.85rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
}
.dp-tab-btn:hover {
  background: #ece9e6;
  color: var(--p);
}
.dp-tab-btn.is-active {
  background: var(--p);
  color: #fff;
  border-color: var(--p);
  box-shadow: 0 4px 12px rgba(109,76,65,0.2);
}

/* Grid */
.dp-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
}

/* Card */
.dp-card {
  background: #fbfafa;
  border: 1px solid rgba(109,76,65,0.12);
  border-radius: 14px;
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.25rem;
  cursor: pointer;
  transition: transform 0.25s, border-color 0.25s, box-shadow 0.25s, background 0.25s;
}

.dp-card:hover {
  transform: translateY(-4px);
  border-color: var(--p);
  background: #ffffff;
  box-shadow: 0 12px 36px rgba(109,76,65,0.08);
}

.dp-card__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}

.dp-card__area-badge {
  font-size: 0.68rem;
  font-weight: 800;
  color: var(--p);
  background: rgba(109,76,65,0.06);
  padding: 0.3rem 0.75rem;
  border-radius: 99px;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  text-transform: uppercase;
}

.dp-card__new-badge {
  font-size: 0.6rem;
  font-weight: 950;
  color: #fff;
  background: #d87c3a;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.dp-card__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.125rem;
  font-weight: 800;
  color: #2a1810;
  line-height: 1.35;
  margin: 0;
  flex: 1;
}

.dp-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dp-card__sigla {
  font-size: 0.72rem;
  font-weight: 700;
  color: #8d7a71;
  background: #f4f2f0;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}

.dp-card__link {
  font-size: 0.8rem;
  font-weight: 800;
  color: var(--p);
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  transition: transform 0.2s;
}
.dp-card:hover .dp-card__link {
  transform: translateX(3px);
}

/* =========================================================
   PANEL LATERAL (Drawer Modal)
   ========================================================= */
.oe-drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(42, 24, 16, 0.4);
  backdrop-filter: blur(8px);
  z-index: 9999;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.4s ease, visibility 0.4s ease;
}

.oe-drawer-overlay.is-open {
  opacity: 1;
  visibility: visible;
}

.oe-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 500px;
  height: 100vh;
  background: #ffffff;
  box-shadow: -10px 0 40px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.oe-drawer.is-open {
  transform: translateX(0);
}

.oe-drawer-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: #f4f2f0;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6d4c41;
  cursor: pointer;
  transition: all 0.2s;
  z-index: 50;
}

.oe-drawer-close:hover {
  background: #ece9e6;
  transform: rotate(90deg);
}

.oe-drawer-content {
  padding: 4rem 3rem;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.oe-drawer-header {
  margin-bottom: 2rem;
}

.oe-drawer-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(109, 76, 65, 0.08);
  color: var(--p);
  padding: 0.5rem 1rem;
  border-radius: 99px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.oe-detail-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 2rem;
  font-weight: 700;
  color: #2a1810;
  margin: 0;
  line-height: 1.15;
}

.oe-detail-desc {
  font-size: 1.02rem;
  color: #5d514b;
  line-height: 1.65;
  margin: 0 0 3rem 0;
}

.oe-detail-actions {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;
}

.oe-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 1rem;
  font-weight: 700;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;
}

.oe-btn--solid {
  background: #8D6E63;
  color: #ffffff;
  font-weight: 800;
  border: none;
  box-shadow: 0 4px 15px rgba(141, 110, 99, 0.3);
}

.oe-btn--solid:hover {
  background: #795548;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(141, 110, 99, 0.4);
}

.oe-btn--outline {
  background: transparent;
  color: var(--p);
  border: 2px solid var(--p);
}

.oe-btn--outline:hover {
  background: rgba(109, 76, 65, 0.05);
}

/* Responsive */
@media (max-width: 1024px) {
  .dp-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 640px) {
  .dp-grid { grid-template-columns: 1fr; }
  .oe-drawer-content { padding: 3rem 1.5rem; }
}
</style>
