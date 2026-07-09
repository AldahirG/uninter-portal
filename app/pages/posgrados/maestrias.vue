<script setup lang="ts">
import Navbare from "@/components/navbar/Index.vue";
import FormRegister from "@/components/posgrados/FormRegister.vue";
import PortalFooter from "@/components/layout/Footer.vue";

useHead({
  title: "Maestrías | UNINTER",
  meta: [
    {
      name: "description",
      content:
        "Maestrías de Posgrado UNINTER — programas de alto nivel académico en administración, dirección de empresas (MADE), gestión de calidad, educación y redes web.",
    },
  ],
});

const maestrias = [
  {
    area: "Alta Dirección y Negocios",
    icon: "mdi:briefcase-outline",
    programas: [
      { nombre: "Maestría en Administración y Dirección de Empresas", sigla: "MADE", desc: "Desarrollo de líderes con visión estratégica, capacidades analíticas y competencias globales para la toma de decisiones empresariales de alto impacto." },
      { nombre: "Maestría en Administración y Dirección de Empresas (Línea)", sigla: "MADEL", desc: "La versión 100% digital de nuestro programa MADE insignia, diseñado para profesionales activos con flexibilidad total de horarios." },
      { nombre: "Maestría en Gestión de la Calidad", sigla: "MGC", desc: "Especialización en sistemas de calidad integral, optimización de procesos operativos, auditorías y certificaciones internacionales." },
    ],
  },
  {
    area: "Innovación, Tecnología y Transformación Digital",
    icon: "mdi:monitor-dashboard",
    programas: [
      { nombre: "Maestría en Redes de Computadoras y Tecnologías Web", sigla: "MARET", desc: "Formación de ingenieros especializados en infraestructura de redes, seguridad informática, computación en la nube y desarrollo web avanzado." },
    ],
  },
  {
    area: "Educación, Docencia y Desarrollo Académico",
    icon: "mdi:school-outline",
    programas: [
      { nombre: "Maestría en Educación en Formación Docente", sigla: "MEFD", desc: "Perfeccionamiento pedagógico y diseño curricular adaptado a las nuevas tecnologías y corrientes metodológicas contemporáneas." },
      { nombre: "Maestría en Enseñanza de Lenguas Extranjeras", sigla: "MEL", desc: "Didáctica y metodologías avanzadas para la enseñanza escolarizada y profesional de idiomas de alta demanda." },
    ],
  },
];
</script>

<template>
  <div class="pg-level-page">
    <Navbare />

    <!-- HERO -->
    <section class="pg-hero">
      <div class="pg-hero__bg">
        <img src="/images/hero/licenciaturasPresenciales.jpg" alt="Maestrías UNINTER" class="pg-hero__img" />
        <div class="pg-hero__overlay"></div>
      </div>

      <div class="pg-hero__inner pg-wrap">
        <div class="pg-hero__content">
          <div class="pg-hero__badge-row">
            <span class="pg-hero__badge">MAESTRÍAS</span>
            <span class="pg-hero__subtitle">ALTO NIVEL ACADÉMICO</span>
          </div>

          <h1 class="pg-hero__title">
            Maestrías<br />
            <em>UNINTER</em>
          </h1>

          <p class="pg-hero__tagline">
            Lidera el cambio en tu organización a través de programas diseñados para perfeccionar tus destrezas directivas, analíticas y de innovación tecnológica.
          </p>

          <div class="pg-hero__ctas">
            <a href="#contacto" class="pg-hero__cta pg-hero__cta--primary">
              <Icon name="mdi:arrow-right-circle-outline" size="20" />
              Solicitar admisión
            </a>
            <a href="#listado" class="pg-hero__cta pg-hero__cta--ghost">
              <Icon name="mdi:format-list-bulleted" size="18" />
              Ver programas
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- LISTADO -->
    <section id="listado" class="pg-list-sec">
      <div class="pg-wrap">
        <div class="pg-sec-header">
          <p class="pg-eyebrow">Programas Disponibles</p>
          <h2 class="pg-title">Explora nuestras Maestrías</h2>
          <p class="pg-body">Adquiere un perfil estratégico de liderazgo global con especializaciones teóricas y proyectos prácticos aplicados a la industria actual.</p>
        </div>

        <div class="pg-cards-grid">
          <div v-for="area in maestrias" :key="area.area" class="area-card">
            <div class="area-card__header">
              <Icon :name="area.icon" size="22" class="area-card__icon" />
              <h3>{{ area.area }}</h3>
            </div>
            <div class="area-card__body">
              <div v-for="p in area.programas" :key="p.sigla" class="prog-item">
                <div class="prog-item__meta">
                  <span class="prog-item__name">{{ p.nombre }}</span>
                  <span class="prog-item__sigla">{{ p.sigla }}</span>
                </div>
                <p class="prog-item__desc">{{ p.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACTO -->
    <section id="contacto" class="pg-contact-sec">
      <FormRegister />
    </section>

    <PortalFooter />
  </div>
</template>

<style scoped>
.pg-level-page {
  font-family: 'Inter', sans-serif;
  background: #f4f6f8;
  color: #1a262f;
}

.pg-wrap {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.pg-eyebrow {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #546E7A;
  margin-bottom: 0.75rem;
  display: block;
}

.pg-title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2rem, 5vw, 2.8rem);
  font-weight: 800;
  line-height: 1.15;
  margin: 0 0 1rem;
}

.pg-body {
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  max-width: 700px;
}

/* Hero */
.pg-hero {
  position: relative;
  min-height: 75vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 80px;
}
.pg-hero__bg {
  position: absolute;
  inset: 0;
  z-index: 1;
}
.pg-hero__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.pg-hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(15, 26, 34, 0.94) 30%, rgba(15, 26, 34, 0.6) 100%);
}
.pg-hero__inner {
  position: relative;
  z-index: 2;
  width: 100%;
}
.pg-hero__content {
  color: #ffffff;
  max-width: 700px;
}
.pg-hero__badge-row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}
.pg-hero__badge {
  background: #546E7A;
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  padding: 0.35rem 0.95rem;
  border-radius: 4px;
}
.pg-hero__subtitle {
  font-size: 0.68rem;
  opacity: 0.7;
  letter-spacing: 0.05em;
  font-weight: 700;
}
.pg-hero__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(2.8rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1.05;
  margin-bottom: 1.5rem;
}
.pg-hero__title em {
  font-style: italic;
  font-weight: 400;
  color: #78909C;
}
.pg-hero__tagline {
  font-size: clamp(1rem, 2vw, 1.15rem);
  line-height: 1.5;
  opacity: 0.9;
  margin-bottom: 2.5rem;
}
.pg-hero__ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.pg-hero__cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s;
  cursor: pointer;
}
.pg-hero__cta--primary {
  background: #546E7A;
  color: #ffffff;
}
.pg-hero__cta--primary:hover {
  background: #78909C;
  transform: translateY(-2px);
}
.pg-hero__cta--ghost {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
}
.pg-hero__cta--ghost:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

/* Listado Section */
.pg-list-sec {
  padding: 6rem 0;
}
.pg-sec-header {
  margin-bottom: 4rem;
}
.pg-cards-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}
.area-card {
  background: #ffffff;
  border: 1px solid rgba(0,0,0,0.06);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.02);
}
.area-card__header {
  background: #1a262f;
  color: #ffffff;
  padding: 1.25rem 2rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.area-card__icon {
  color: #78909C;
}
.area-card__header h3 {
  font-size: 1rem;
  font-weight: 800;
  margin: 0;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.area-card__body {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.prog-item {
  border-bottom: 1px solid rgba(0,0,0,0.05);
  padding-bottom: 1.5rem;
}
.prog-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
.prog-item__meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.75rem;
}
.prog-item__name {
  font-size: 1.15rem;
  font-weight: 800;
  color: #1a262f;
}
.prog-item__sigla {
  background: rgba(84, 110, 122, 0.1);
  color: #546E7A;
  font-size: 0.7rem;
  font-weight: 800;
  padding: 0.25rem 0.6rem;
  border-radius: 4px;
}
.prog-item__desc {
  font-size: 0.9rem;
  line-height: 1.6;
  color: #555;
  margin: 0;
}

/* Contacto */
.pg-contact-sec {
  background: #ffffff;
  padding: 5rem 0;
}
</style>
