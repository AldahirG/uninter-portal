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
  { label: "Psicología y Doblaje", value: "Psicologia" },
];

const programList = computed(() => {
  const list: any[] = [];
  categorias.forEach((cat) => {
    cat.programas.forEach((p) => {
      list.push({
        nombre: p.nombre,
        sigla: p.sigla,
        nuevo: p.nuevo,
        area: cat.area,
        icon: cat.icon,
        slug: p.nombre
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .replace(/[^a-z0-9\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-"),
      });
    });
  });

  if (filter.value === "Todos") return list;
  if (filter.value === "Negocios") {
    return list.filter(
      (item) =>
        item.area.includes("Publicidad") ||
        item.area.includes("Marketing") ||
        item.area.includes("Relaciones Mercantiles")
    );
  }
  if (filter.value === "Administrativos") {
    return list.filter((item) => item.area.includes("Administrativos"));
  }
  if (filter.value === "Tecnologia") {
    return list.filter(
      (item) =>
        item.area.includes("Inteligencia Artificial") ||
        item.area.includes("Innovación") ||
        item.area.includes("Era Digital")
    );
  }
  if (filter.value === "Educacion") {
    return list.filter(
      (item) => item.area.includes("Español") || item.area.includes("Docencia")
    );
  }
  if (filter.value === "EducacionInvestigacion") {
    return list.filter((item) =>
      item.area.includes("Educación e Investigación")
    );
  }
  if (filter.value === "Idiomas") {
    return list.filter((item) => item.area.includes("Idiomas"));
  }
  if (filter.value === "Diseno") {
    return list.filter(
      (item) =>
        item.area.includes("Diseño") ||
        item.area.includes("Modas") ||
        item.area.includes("Arquitectura") ||
        item.area.includes("Construcción")
    );
  }
  if (filter.value === "Psicologia") {
    return list.filter(
      (item) => item.area.includes("Psicología") || item.area.includes("Doblaje")
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
    perfilEgreso: details.perfilEgreso || "",
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
      <!-- Encabezado alineado a la izquierda según la captura -->
      <div class="dp-ofe__head">
        <span class="dp-ofe__eyebrow">PROGRAMAS DISPONIBLES</span>
        <h2 class="dp-ofe__title">
          Explora nuestros<br />
          <em class="title-accent">Diplomados</em>
        </h2>
        <p class="dp-ofe__sub">
          Encuentra el programa ideal para especializarte y adquirir ventajas
          competitivas inmediatas en tu campo profesional.
        </p>
      </div>

      <!-- Filtros / Píldoras Naranjas -->
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
          <h3 class="dp-card__title">{{ p.nombre }}</h3>

          <div class="dp-card__footer">
            <span class="dp-card__sigla" v-if="p.sigla">{{ p.sigla }}</span>
            <span class="dp-card__link">
              Saber más <ArrowRight :size="14" />
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
        <div
          class="oe-drawer"
          :class="{ 'is-open': isDrawerOpen }"
          @click.stop
        >
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
              <button @click="scrollToContact" class="oe-btn oe-btn--outline">
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
  background: #ffffff;
  padding: 5rem 0 6.5rem;
  scroll-margin-top: 80px;
}

.dp-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* ═══ ENCABEZADO ═══ */
.dp-ofe__head {
  text-align: left;
  margin-bottom: 2.5rem;
}

.dp-ofe__eyebrow {
  display: block;
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #71717a;
  margin-bottom: 0.75rem;
}

.dp-ofe__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2.6rem, 4.8vw, 3.8rem);
  font-weight: 900;
  color: #0f3c61;
  line-height: 1.1;
  letter-spacing: -0.01em;
  margin: 0 0 1.25rem;
}

.title-accent {
  color: #e26a1b;
  font-style: italic;
  font-family: var(--font-serif, Georgia, serif);
}

.dp-ofe__sub {
  font-size: 1.02rem;
  color: #52525b;
  line-height: 1.6;
  max-width: 620px;
  margin: 0;
}

/* ═══ PÍLDORAS DEL FILTRO (NARANJAS) ═══ */
.dp-tabs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 3.5rem;
}

.dp-tab-btn {
  background: #ffffff;
  border: 1px solid #fed7aa;
  color: #292524;
  padding: 0.65rem 1.4rem;
  border-radius: 9999px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  user-select: none;
}

.dp-tab-btn:hover {
  border-color: #ea580c;
  color: #ea580c;
  background: #fff7ed;
  transform: translateY(-2px);
}

.dp-tab-btn.is-active {
  background: #ea580c;
  color: #ffffff;
  border-color: #ea580c;
  font-weight: 700;
  box-shadow: 0 4px 14px rgba(234, 88, 12, 0.25);
  transform: translateY(-1px);
}

/* ═══ GRID DE TARJETAS ═══ */
.dp-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

/* ═══ TARJETA INDIVIDUAL ═══ */
.dp-card {
  background: #ffffff;
  border: 1px solid #fed7aa;
  border-radius: 20px;
  padding: 2.25rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 175px;
  gap: 1.75rem;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.dp-card:hover {
  transform: translateY(-4px);
  border-color: #ea580c;
  box-shadow: 0 14px 35px rgba(234, 88, 12, 0.1);
}

.dp-card__title {
  font-family: var(--font-sans, system-ui, -apple-system, sans-serif);
  font-size: 1.15rem;
  font-weight: 800;
  color: #0f3c61;
  line-height: 1.38;
  margin: 0;
}

.dp-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dp-card__sigla {
  font-size: 0.8rem;
  font-weight: 800;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.dp-card__link {
  font-size: 0.88rem;
  font-weight: 700;
  color: #ea580c;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  transition: transform 0.2s ease;
}

.dp-card:hover .dp-card__link {
  transform: translateX(4px);
}

/* =========================================================
   PANEL LATERAL (Drawer Modal)
   ========================================================= */
.oe-drawer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(20, 10, 5, 0.45);
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
  background: #fff7ed;
  border: 1px solid #fed7aa;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ea580c;
  cursor: pointer;
  transition: all 0.2s;
  z-index: 50;
}

.oe-drawer-close:hover {
  background: #ea580c;
  color: #ffffff;
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
  background: #fff7ed;
  color: #ea580c;
  border: 1px solid #fed7aa;
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
  font-weight: 800;
  color: #0f3c61;
  margin: 0;
  line-height: 1.2;
}

.oe-detail-desc {
  font-size: 1.02rem;
  color: #475569;
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
  background: #ea580c;
  color: #ffffff;
  font-weight: 800;
  border: none;
  box-shadow: 0 4px 15px rgba(234, 88, 12, 0.3);
}

.oe-btn--solid:hover {
  background: #c2410c;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(234, 88, 12, 0.4);
}

.oe-btn--outline {
  background: transparent;
  color: #ea580c;
  border: 2px solid #ea580c;
}

.oe-btn--outline:hover {
  background: #fff7ed;
}

/* Responsive */
@media (max-width: 1024px) {
  .dp-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .dp-grid {
    grid-template-columns: 1fr;
  }
  .oe-drawer-content {
    padding: 3rem 1.5rem;
  }
}
</style>
