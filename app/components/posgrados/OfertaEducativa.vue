<script setup lang="ts">
const ramas = [
  {
    area: "Alta Dirección y Negocios",
    icon: "mdi:briefcase-outline",
    programas: [
      { nombre: "Especialidad en Administración de Obra", sigla: "EAO", nuevo: false },
      { nombre: "Maestría en Administración y Dirección de Empresas", sigla: "MADE", nuevo: false },
      { nombre: "Maestría en Administración y Dirección de Empresas en Línea", sigla: "MADEL", nuevo: false },
      { nombre: "Maestría en Gestión de la Calidad", sigla: "MGC", nuevo: false },
      { nombre: "Doctorado en Administración", sigla: "DA", nuevo: false },
    ],
  },
  {
    area: "Innovación, Tecnología y Transformación Digital",
    icon: "mdi:monitor-dashboard",
    programas: [
      { nombre: "Especialidad en Administración de la Tecnología en Línea", sigla: "EATL", nuevo: false },
      { nombre: "Especialidad en Animación y Post-Producción Digital", sigla: "EAPD", nuevo: false },
      { nombre: "Maestría en Redes de Computadoras y Tecnologías Web", sigla: "MARET", nuevo: false },
    ],
  },
  {
    area: "Marketing y Comunicación Estratégica",
    icon: "mdi:bullhorn-outline",
    programas: [
      { nombre: "Especialidad en Marketing Digital", sigla: "EMD", nuevo: false },
      { nombre: "Especialidad en Publicidad", sigla: "EPU", nuevo: false },
    ],
  },
  {
    area: "Derecho, Comercio Internacional y Ciencias Forenses",
    icon: "mdi:scale-balance",
    programas: [
      { nombre: "Especialidad en Relaciones Mercantiles Internacionales", sigla: "ERMI", nuevo: false },
      { nombre: "Especialidad en Criminalística", sigla: "EC", nuevo: false },
    ],
  },
  {
    area: "Educación, Docencia y Desarrollo Académico",
    icon: "mdi:school-outline",
    programas: [
      { nombre: "Especialidad en Docencia del Español como Lengua Extranjera", sigla: "EDELE", nuevo: false },
      { nombre: "Maestría en Educación en Formación Docente", sigla: "MEFD", nuevo: false },
      { nombre: "Maestría en Enseñanza de Lenguas Extranjeras", sigla: "MEL", nuevo: false },
    ],
  },
  {
    area: "Investigación Avanzada y Humanidades",
    icon: "mdi:flask-outline",
    programas: [
      { nombre: "Doctorado en Humanidades", sigla: "DH", nuevo: false },
    ],
  },
];
</script>

<template>
  <section class="pg-ofe">
    <div class="pg-ofe__watermark" aria-hidden="true"></div>
    <div class="pg-container">
      <div class="pg-ofe__head">
        <div class="pg-ofe__head-icon"><Icon name="mdi:book-open-variant" size="32" /></div>
        <h2 class="pg-ofe__title">OFERTA EDUCATIVA</h2>
        <p class="pg-ofe__sub">Especialidades, Maestrías y Doctorados</p>
      </div>

      <div class="pg-ofe__grid">
        <div v-for="rama in ramas" :key="rama.area" class="pg-rama">
          <div class="pg-rama__head">
            <Icon :name="rama.icon" size="16" class="pg-rama__head-icon" />
            <h3 class="pg-rama__title">{{ rama.area.toUpperCase() }}</h3>
          </div>
          <ul class="pg-rama__list">
            <li v-for="p in rama.programas" :key="p.sigla" class="pg-rama__item">
              <span v-if="p.nuevo" class="pg-rama__badge">Nuevo</span>
              <span class="pg-rama__link">
                {{ p.nombre }} <span class="pg-rama__sigla">({{ p.sigla }})</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.pg-ofe {
  --p: #546E7A; --pd: #37474F; --pl: #78909C;
  position: relative;
  background: #2a3540;
  padding: 5.5rem 0;
  overflow: hidden;
}

/* Watermark pattern */
.pg-ofe__watermark {
  position: absolute; inset: 0; z-index: 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cpath d='M40 10 Q30 25 32 40 Q28 42 26 50 Q34 46 40 48 Q46 46 54 50 Q52 42 48 40 Q50 25 40 10Z' fill='none' stroke='rgba(255,255,255,0.04)' stroke-width='1.5'/%3E%3C/svg%3E");
  background-size: 80px 80px;
}

.pg-container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; position: relative; z-index: 1; }

.pg-ofe__head { text-align: center; margin-bottom: 3rem; }
.pg-ofe__head-icon { color: rgba(255,255,255,0.5); margin-bottom: 0.75rem; }
.pg-ofe__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: clamp(1.6rem, 3.5vw, 2.4rem);
  font-weight: 900; color: #fff;
  letter-spacing: 0.05em; margin: 0 0 0.5rem;
}
.pg-ofe__sub { font-size: 1rem; color: rgba(255,255,255,0.55); margin: 0; }

/* Grid: 2 columns */
.pg-ofe__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2.5rem;
}

/* Rama card */
.pg-rama {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 12px;
  overflow: hidden;
}

.pg-rama__head {
  background: #1a262f;
  padding: 0.75rem 1.125rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.pg-rama__head-icon { color: var(--pl); flex-shrink: 0; }
.pg-rama__title {
  font-size: 0.75rem; font-weight: 900;
  letter-spacing: 0.06em; color: #fff; margin: 0;
  line-height: 1.3;
}

.pg-rama__list {
  list-style: none; margin: 0; padding: 0.5rem 0;
}
.pg-rama__item {
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
}
.pg-rama__badge {
  display: inline-block;
  font-size: 0.6rem; font-weight: 800;
  letter-spacing: 0.08em; text-transform: uppercase;
  color: #e8883a; margin-top: 0.5rem; margin-bottom: 0.1rem;
}
.pg-rama__link {
  display: flex;
  align-items: flex-start;
  gap: 0.25rem;
  font-size: 0.8rem;
  color: rgba(255,255,255,0.75);
  line-height: 1.45;
  padding: 0.45rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}
.pg-rama__item:last-child .pg-rama__link { border-bottom: none; }
.pg-rama__sigla { color: rgba(255,255,255,0.4); font-size: 0.75rem; white-space: nowrap; flex-shrink: 0; }

@media (max-width: 900px) { .pg-ofe__grid { grid-template-columns: 1fr; } }
</style>
