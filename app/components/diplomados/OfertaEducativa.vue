<script setup lang="ts">
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
      { nombre: "Diplomado en Marketing Digital y Creativo", sigla: "DMDEC", nuevo: false },
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
      { nombre: "Diplomado en Modelos de Enseñanza y Evaluación de Programas Educativos Siglo XXI", sigla: "DMEEP-D", nuevo: true },
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
      { nombre: "Diplomado en Estrategias Didácticas y Métodos de Enseñanza de una L2", sigla: "DEDME", nuevo: true },
      { nombre: "Diplomado en Tecnologías de la Información y Comunicación aplicadas a la Pedagogía", sigla: "DTICAP", nuevo: true },
    ],
  },
  {
    area: "Diseño y Arte",
    icon: "mdi:palette-outline",
    programas: [
      { nombre: "Diplomado en Diseño de Interiores", sigla: "", nuevo: false },
      { nombre: "Diplomado en Fotografía", sigla: "DIFO", nuevo: false },
      { nombre: "Diplomado en Diseño de Modas con Enfoque en Desarrollo de Colecciones", sigla: "DMEDC", nuevo: true },
    ],
  },
  {
    area: "Idiomas",
    icon: "mdi:comment-text-outline",
    programas: [
      { nombre: "Diplomado en Francés", sigla: "DEF", nuevo: false },
      { nombre: "Diplomado en Inglés", sigla: "DEI", nuevo: false },
      { nombre: "Diplomado en Inglés Profesional", sigla: "", nuevo: false },
    ],
  },
  {
    area: "Educación e Investigación",
    icon: "mdi:flask-outline",
    programas: [
      { nombre: "Diplomado en Diseño y Desarrollo de Proyectos Académicos e Investigación", sigla: "DDPAI", nuevo: false },
      { nombre: "Diplomado en Formación de Cronistas", sigla: "DFCR", nuevo: true },
    ],
  },
  {
    area: "Arquitectura",
    icon: "mdi:domain",
    programas: [
      { nombre: "Diplomado en Restauración de Edificios Históricos Dañados por Sismos", sigla: "", nuevo: true },
      { nombre: "Diplomado en Informática para Proyectos y Edificación", sigla: "", nuevo: false },
      { nombre: "Diplomado en Software para Arquitectura", sigla: "DISA", nuevo: false },
    ],
  },
  {
    area: "Administración de Obra",
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
      { nombre: "Diplomado en Dirección de Empresas", sigla: "DDE", nuevo: false },
    ],
  },
];
</script>

<template>
  <section id="oferta" class="dp-ofe">
    <div class="dp-ofe__watermark" aria-hidden="true"></div>
    <div class="dp-container">
      <div class="dp-ofe__head">
        <div class="dp-ofe__head-icon"><Icon name="mdi:book-open-variant" size="32" /></div>
        <h2 class="dp-ofe__title">OFERTA EDUCATIVA</h2>
        <p class="dp-ofe__sub">Cursos y Diplomados</p>
      </div>

      <div class="dp-ofe__grid">
        <div v-for="cat in categorias" :key="cat.area" class="dp-cat">
          <div class="dp-cat__head">
            <Icon :name="cat.icon" size="15" class="dp-cat__head-icon" />
            <h3 class="dp-cat__title">{{ cat.area }}</h3>
          </div>
          <ul class="dp-cat__list">
            <li v-for="p in cat.programas" :key="p.nombre" class="dp-cat__item">
              <span v-if="p.nuevo" class="dp-cat__badge">Nuevo</span>
              <span class="dp-cat__link">
                {{ p.nombre }}<span v-if="p.sigla" class="dp-cat__sigla"> ({{ p.sigla }})</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.dp-ofe {
  --p: #6D4C41; --pd: #4E342E; --pl: #A1887F;
  position: relative;
  background: #3d2518;
  padding: 5.5rem 0;
  overflow: hidden;
}

/* Watermark pattern */
.dp-ofe__watermark {
  position: absolute; inset: 0; z-index: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='100' viewBox='0 0 80 100'%3E%3Cpath d='M40 5 Q32 20 34 38 Q28 40 25 52 Q35 47 40 50 Q45 47 55 52 Q52 40 46 38 Q48 20 40 5Z' fill='none' stroke='rgba(255,255,255,0.045)' stroke-width='1.5'/%3E%3C/svg%3E");
  background-size: 80px 100px;
}

.dp-container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; position: relative; z-index: 1; }

.dp-ofe__head { text-align: center; margin-bottom: 3rem; }
.dp-ofe__head-icon { color: rgba(255,255,255,0.45); margin-bottom: 0.75rem; }
.dp-ofe__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.6rem, 3.5vw, 2.4rem);
  font-weight: 900; color: #fff;
  letter-spacing: 0.05em; margin: 0 0 0.5rem;
}
.dp-ofe__sub { font-size: 1rem; color: rgba(255,255,255,0.5); margin: 0; }

/* Grid: 2 columns */
.dp-ofe__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.875rem;
  margin-bottom: 2.5rem;
}

/* Category card */
.dp-cat {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 10px;
  overflow: hidden;
}

.dp-cat__head {
  background: #241510;
  padding: 0.7rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.dp-cat__head-icon { color: var(--pl); flex-shrink: 0; }
.dp-cat__title {
  font-size: 0.78rem; font-weight: 800;
  letter-spacing: 0.03em; color: #e8c9a0;
  margin: 0; line-height: 1.3;
}

.dp-cat__list { list-style: none; margin: 0; padding: 0.375rem 0; }
.dp-cat__item { display: flex; flex-direction: column; padding: 0 0.875rem; }
.dp-cat__badge {
  display: inline-block;
  font-size: 0.58rem; font-weight: 800;
  letter-spacing: 0.08em; text-transform: uppercase;
  color: #e8883a;
  margin-top: 0.4rem; margin-bottom: 0.05rem;
}
.dp-cat__link {
  display: flex; align-items: flex-start; gap: 0.2rem;
  font-size: 0.78rem; color: rgba(255,255,255,0.72);
  line-height: 1.45;
  padding: 0.4rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.dp-cat__item:last-child .dp-cat__link { border-bottom: none; }
.dp-cat__sigla { color: rgba(255,255,255,0.38); font-size: 0.73rem; white-space: nowrap; flex-shrink: 0; }

@media (max-width: 900px) { .dp-ofe__grid { grid-template-columns: 1fr; } }
</style>
