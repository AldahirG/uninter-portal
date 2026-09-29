<script setup lang="ts">
import { ref, computed } from "vue";
import { ArrowRight, X, MessageCircle } from "lucide-vue-next";
import diplomadosDB from "~/assets/data/diplomados.json";

const categorias = [
  {
    area: "Educación, Docencia e Investigación",
    icon: "mdi:school-outline",
    programas: [
      { nombre: "Diplomado en Análisis del Uso del Español como Segunda Lengua para la Planeación de Metodologías Didácticas", sigla: "DAEPMD", slug: "diplomado-en-analisis-del-uso-del-espanol-como-segunda-lengua-para-la-planeacion-de-metodologias-didacticas", nuevo: false },
      { nombre: "Diplomado Desarrollo de Destrezas Lingüísticas", sigla: "DMEL", slug: "diplomado-en-desarrollo-de-destrezas-linguisticas", nuevo: false },
      { nombre: "Diplomado en Diseño y Desarrollo de Proyectos Académicos de Investigación", sigla: "DDPAI", slug: "diplomado-en-diseno-y-desarrollo-de-proyectos-academicos-de-investigacion", nuevo: false },
      { nombre: "Diplomado en Elaboración y Planeación Didáctica basado en el Modelo de Competencias", sigla: "DEPDI", slug: "diplomado-en-elaboracion-y-planeacion-didactica-basado-en-el-modelo-de-competencias", nuevo: false },
      { nombre: "Diplomado en Elaboración de Programas de Estudio para Español e Inglés como Segunda Lengua", sigla: "DEPEEI", slug: "diplomado-en-elaboracion-de-programas-de-estudio-para-espanol-e-ingles-como-segunda-lengua", nuevo: false },
      { nombre: "Estrategias Didácticas y Métodos de Enseñanza", sigla: "DEDME", slug: "diplomado-en-estrategias-didacticas-y-metodos-de-ensenanza", nuevo: false },
      { nombre: "Diplomado en Evaluación de los Diversos Modelos de Gestión Educativo", sigla: "DEDMG", slug: "diplomado-en-evaluacion-de-los-diversos-modelos-de-gestion-educativo", nuevo: false },
      { nombre: "Diplomado en Formación para Cronistas", sigla: "DFCR", slug: "diplomado-en-formacion-para-cronistas", nuevo: false },
      { nombre: "Dip. Metodología y Adquisición de una Segunda Lengua", sigla: "DMASL", slug: "diplomado-en-metodologia-y-adquisicion-de-una-segunda-lengua", nuevo: false },
      { nombre: "Dip. en Modelos de Enseñanza y Evaluación de Programas", sigla: "DMEEP", slug: "diplomado-en-modelos-de-ensenanza-y-evaluacion-de-programas", nuevo: false },
      { nombre: "Diplomado en Psicopedagogía Aplicada", sigla: "DPA", slug: "diplomado-en-psicopedagogia-aplicada", nuevo: true },
      { nombre: "Diplomado en Paradigmas en la Enseñanza y Aprendizaje en Innovación Educativa", sigla: "DPEAI", slug: "diplomado-en-paradigmas-en-la-ensenanza-y-aprendizaje-en-innovacion-educativa", nuevo: false },
      { nombre: "Diplomado en Tecnologías de la Información y C. A.P", sigla: "DTICAP", slug: "diplomado-en-tecnologias-de-la-informacion-y-comunicacion-aplicadas-a-la-pedagogia", nuevo: false },
    ],
  },
  {
    area: "Administración y Negocios",
    icon: "mdi:briefcase-outline",
    programas: [
      { nombre: "Diplomado en Administración de la Tecnología en Línea", sigla: "DATL", slug: "diplomado-en-administracion-de-la-tecnologia-en-linea", nuevo: false },
      { nombre: "Diplomado en Dirección Empresas", sigla: "DDE", slug: "diplomado-en-direccion-de-empresas", nuevo: false },
      { nombre: "Diplomado en Dirección Empresas en Línea", sigla: "DDEL", slug: "diplomado-en-direccion-de-empresas-en-linea", nuevo: false },
      { nombre: "Diplomado en Gestión Empresarial", sigla: "DGE", slug: "diplomado-en-gestion-empresarial", nuevo: false },
      { nombre: "Diplomado en Gestión Empresarial (en línea)", sigla: "DGEL", slug: "diplomado-en-gestion-empresarial-en-linea", nuevo: false },
    ],
  },
  {
    area: "Marketing y Publicidad",
    icon: "mdi:bullhorn-outline",
    programas: [
      { nombre: "Diplomado en Creatividad y Publicidad", sigla: "DEPU1", slug: "diplomado-en-creatividad-y-publicidad", nuevo: false },
      { nombre: "Diplomado en Mercadotecnia y Publicidad", sigla: "DEPU2", slug: "diplomado-en-mercadotecnia-y-publicidad", nuevo: false },
      { nombre: "Diplomado en Marketing Digital Estratégico y Creativo", sigla: "DMDEC", slug: "diplomado-en-marketing-digital-estrategico-y-creativo", nuevo: false },
      { nombre: "Diplomado en Estrategias y Experiencias Digitales", sigla: "DEED", slug: "diplomado-en-estrategias-y-experiencias-digitales", nuevo: false },
    ],
  },
  {
    area: "Diseño, Animación y Artes Creativas",
    icon: "mdi:palette-outline",
    programas: [
      { nombre: "Diplomado en Crear y Contar Historias con Animación Digital", sigla: "DCCHA", slug: "diplomado-en-crear-y-contar-historias-con-animacion-digital", nuevo: true },
      { nombre: "Diplomado en Producción Creativa y Posicionamiento Digital", sigla: "DPCPD", slug: "diplomado-en-produccion-creativa-y-posicionamiento-digital", nuevo: true },
      { nombre: "Diplomado en Diseño de Interiores", sigla: "DDI", slug: "diplomado-en-diseno-de-interiores", nuevo: false },
      { nombre: "Diplomado en Fotografía", sigla: "DIFO", slug: "diplomado-en-fotografia", nuevo: false },
      { nombre: "Diplomado en Diseño de Modas con Enfoque en Desarrollo de Colecciones", sigla: "DMEDC", slug: "diplomado-en-diseno-de-modas-con-enfoque-en-desarrollo-de-colecciones", nuevo: true },
      { nombre: "Diplomado en Doblaje Profesional para Cine, Televisión y Streaming", sigla: "DDCTS", slug: "diplomado-en-doblaje-profesional-para-cine-television-y-streaming", nuevo: true },
    ],
  },
  {
    area: "Idiomas",
    icon: "mdi:translate",
    programas: [
      { nombre: "Diplomado en Francés", sigla: "DEF", slug: "diplomado-en-frances", nuevo: false },
      { nombre: "Diplomado en Inglés", sigla: "DEI", slug: "diplomado-en-ingles", nuevo: false },
      { nombre: "Diplomado en Inglés Profesional", sigla: "DEIP", slug: "diplomado-en-ingles-profesional", nuevo: false },
    ],
  },
  {
    area: "Tecnología, Redes e Inteligencia Artificial",
    icon: "mdi:robot-outline",
    programas: [
      { nombre: "Diplomado en Arquitectura, Diseño y Legislación de Redes y Tecnologías Web", sigla: "DADLR", slug: "diplomado-en-arquitectura-diseno-y-legislacion-de-redes-y-tecnologias-web", nuevo: false },
      { nombre: "Diplomado en Inteligencia Artificial Aplicada a los Negocios", sigla: "DIAAN", slug: "diplomado-en-inteligencia-artificial-aplicada-a-los-negocios", nuevo: true },
      { nombre: "Diplomado en Innovación y Transferencia Tecnológica", sigla: "DITTL", slug: "diplomado-en-innovacion-y-transferencia-tecnologica", nuevo: false },
    ],
  },
  {
    area: "Comercio Exterior y Derecho Aduanero",
    icon: "mdi:earth",
    programas: [
      { nombre: "Diplomado en Comercio Exterior y Contratos Internacionales", sigla: "DERMI1", slug: "diplomado-en-comercio-exterior-y-contratos-internacionales", nuevo: false },
      { nombre: "Diplomado en Derecho Aduanero y Marco Jurídico de la Competencia Económica", sigla: "DERMI2", slug: "diplomado-en-derecho-aduanero-y-marco-juridico-de-la-competencia-economica", nuevo: false },
    ],
  },
  {
    area: "Arquitectura y Construcción",
    icon: "mdi:hard-hat",
    programas: [
      { nombre: "Diplomado en Administración de Obra I", sigla: "DAO 1", slug: "diplomado-en-administracion-de-obra-i", nuevo: false },
      { nombre: "Diplomado en Administración de Obra II", sigla: "DAO 2", slug: "diplomado-en-administracion-de-obra-ii", nuevo: false },
    ],
  },
];

const filter = ref("Todos");

const tabs = [
  { label: "Todos", value: "Todos" },
  { label: "Educación, Docencia e Investigación", value: "Educacion" },
  { label: "Administración y Negocios", value: "Administracion" },
  { label: "Marketing y Publicidad", value: "Marketing" },
  { label: "Diseño, Animación y Artes Creativas", value: "Diseno" },
  { label: "Idiomas", value: "Idiomas" },
  { label: "Tecnología, Redes e Inteligencia Artificial", value: "Tecnologia" },
  { label: "Comercio Exterior y Derecho Aduanero", value: "Comercio" },
  { label: "Arquitectura y Construcción", value: "Arquitectura" },
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
        slug: p.slug,
      });
    });
  });

  if (filter.value === "Todos") return list;
  if (filter.value === "Educacion") {
    return list.filter((item) => item.area === "Educación, Docencia e Investigación");
  }
  if (filter.value === "Administracion") {
    return list.filter((item) => item.area === "Administración y Negocios");
  }
  if (filter.value === "Marketing") {
    return list.filter((item) => item.area === "Marketing y Publicidad");
  }
  if (filter.value === "Diseno") {
    return list.filter((item) => item.area === "Diseño, Animación y Artes Creativas");
  }
  if (filter.value === "Idiomas") {
    return list.filter((item) => item.area === "Idiomas");
  }
  if (filter.value === "Tecnologia") {
    return list.filter((item) => item.area === "Tecnología, Redes e Inteligencia Artificial");
  }
  if (filter.value === "Comercio") {
    return list.filter((item) => item.area === "Comercio Exterior y Derecho Aduanero");
  }
  if (filter.value === "Arquitectura") {
    return list.filter((item) => item.area === "Arquitectura y Construcción");
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
          <div class="dp-card__top">
            <span v-if="p.nuevo" class="dp-badge-new">Nuevo</span>
            <h3 class="dp-card__title">{{ p.nombre }}</h3>
          </div>

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

.dp-card__top {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  align-items: flex-start;
}

.dp-badge-new {
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background: #ffedd5;
  color: #c2410c;
  padding: 0.2rem 0.55rem;
  border-radius: 9999px;
  border: 1px solid #fed7aa;
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
