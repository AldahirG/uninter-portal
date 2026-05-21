<script setup lang="ts">
const ventajas = [
  { icon: "mdi:check-decagram-outline", title: "Aval SEP",                 desc: "Todos nuestros programas cuentan con reconocimiento oficial de la SEP." },
  { icon: "mdi:certificate-outline",    title: "Cert. internacionales",    desc: "Convenios con ICPM y organismos internacionales para validar tu perfil." },
  { icon: "mdi:clock-outline",          title: "Horarios flexibles",       desc: "Clases entre semana y fines de semana. Modalidad presencial y en línea." },
  { icon: "mdi:account-group-outline",  title: "Grupos reducidos",         desc: "Máximo 25 participantes por grupo para una experiencia personalizada." },
  { icon: "mdi:briefcase-outline",      title: "Enfoque práctico",         desc: "Casos reales, proyectos aplicados y docentes con experiencia de campo." },
  { icon: "mdi:school-outline",         title: "Campus Cuernavaca",        desc: "Instalaciones modernas y plataforma digital de última generación." },
];
</script>

<template>
  <section class="dp-vida">
    <!-- Top: comparativo -->
    <div class="dp-vida__light">
      <div class="dp-container">
        <div class="dp-vida__intro">
          <div class="dp-vida__intro-text">
            <p class="dp-eyebrow">UNINTER, la mejor opción</p>
            <h2 class="dp-title">Conócenos y <em>compáranos</em></h2>
            <p class="dp-vida__desc">
              En UNINTER encontrarás diplomados con calidad académica comprobada, certificaciones
              con valor curricular internacional y el respaldo de más de 40 años formando
              profesionistas de excelencia.
            </p>
            <a href="https://diplomados.uninter.edu.mx/" target="_blank" class="dp-vida__cta">
              Explorar catálogo →
            </a>
          </div>
          <div class="dp-vida__grid">
            <div v-for="v in ventajas" :key="v.title" class="dp-vcard">
              <div class="dp-vcard__icon"><Icon :name="v.icon" size="20" /></div>
              <div>
                <p class="dp-vcard__title">{{ v.title }}</p>
                <p class="dp-vcard__desc">{{ v.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom: Asesorías + Cursos -->
    <div class="dp-vida__dark">
      <div class="dp-container dp-vida__dark-grid">
        <div class="dp-vblock">
          <div class="dp-vblock__img-wrap">
            <img src="/images/hero/licenciaturasPresenciales.jpg" alt="Asesorías UNINTER" class="dp-vblock__img" loading="lazy" />
            <div class="dp-vblock__badge"><Icon name="mdi:office-building-outline" size="16" /><span>Empresas</span></div>
          </div>
          <div class="dp-vblock__body">
            <p class="dp-eyebrow-light">Servicios Corporativos</p>
            <h3 class="dp-vblock__title">Asesorías y Capacitación<br />a Empresas</h3>
            <p class="dp-vblock__desc">Diseñamos programas a medida para tu equipo. Capacitación in-company, consultoría y talleres especializados.</p>
            <a href="https://diplomados.uninter.edu.mx/" target="_blank" class="dp-vblock__link">Solicitar información →</a>
          </div>
        </div>
        <div class="dp-vblock">
          <div class="dp-vblock__img-wrap">
            <img src="/images/hero/licenciaturasPresenciales.jpg" alt="Cursos de actualización" class="dp-vblock__img" loading="lazy" />
            <div class="dp-vblock__badge"><Icon name="mdi:lightning-bolt-outline" size="16" /><span>Cursos cortos</span></div>
          </div>
          <div class="dp-vblock__body">
            <p class="dp-eyebrow-light">Actualización Continua</p>
            <h3 class="dp-vblock__title">Cursos de<br />Actualización</h3>
            <p class="dp-vblock__desc">Cursos intensivos de 20 a 60 horas en las áreas más demandadas del mercado laboral actual.</p>
            <a href="https://diplomados.uninter.edu.mx/" target="_blank" class="dp-vblock__link">Ver cursos →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.dp-vida { --p: #6D4C41; --pd: #4E342E; --pl: #A1887F; --pbg: #180f0c; }
.dp-container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }

/* Light section */
.dp-vida__light { background: #fff; padding: 5.5rem 0; }
.dp-vida__intro { display: grid; grid-template-columns: 1fr 1.8fr; gap: 4rem; align-items: start; }
.dp-eyebrow { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--p); margin: 0 0 0.5rem; }
.dp-title { font-family: var(--font-serif, Georgia, serif); font-size: clamp(1.8rem, 3vw, 2.5rem); font-weight: 800; color: #2a1810; margin: 0 0 1.25rem; line-height: 1.2; }
.dp-title em { font-style: italic; color: var(--p); }
.dp-vida__desc { font-size: 0.9rem; color: #555; line-height: 1.7; margin: 0 0 1.5rem; }
.dp-vida__cta { display: inline-flex; align-items: center; font-size: 0.83rem; font-weight: 700; color: var(--p); text-decoration: none; border: 1.5px solid var(--p); padding: 0.55rem 1.25rem; border-radius: 6px; transition: all 0.2s; }
.dp-vida__cta:hover { background: var(--p); color: #fff; }

.dp-vida__grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.dp-vcard { display: flex; align-items: flex-start; gap: 0.75rem; padding: 1rem; border-radius: 10px; background: #f8f4f2; border: 1px solid rgba(109,76,65,0.1); }
.dp-vcard__icon { width: 36px; height: 36px; border-radius: 8px; background: rgba(109,76,65,0.12); color: var(--p); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
.dp-vcard__title { font-size: 0.82rem; font-weight: 800; color: #2a1810; margin: 0 0 0.2rem; }
.dp-vcard__desc { font-size: 0.77rem; color: #666; line-height: 1.5; margin: 0; }

/* Dark section */
.dp-vida__dark { background: var(--pbg); padding: 5rem 0; }
.dp-vida__dark-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; }
.dp-vblock { display: flex; flex-direction: column; gap: 1.25rem; }
.dp-vblock__img-wrap { position: relative; border-radius: 14px; overflow: hidden; aspect-ratio: 16/9; }
.dp-vblock__img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
.dp-vblock:hover .dp-vblock__img { transform: scale(1.04); }
.dp-vblock__badge { position: absolute; top: 1rem; left: 1rem; display: flex; align-items: center; gap: 0.35rem; background: var(--p); color: #fff; font-size: 0.7rem; font-weight: 700; padding: 0.3rem 0.75rem; border-radius: 999px; }
.dp-eyebrow-light { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--pl); margin: 0 0 0.4rem; }
.dp-vblock__title { font-family: var(--font-serif, Georgia, serif); font-size: 1.35rem; font-weight: 800; color: #fff; margin: 0 0 0.75rem; line-height: 1.25; }
.dp-vblock__desc { font-size: 0.85rem; color: rgba(255,255,255,0.58); line-height: 1.65; margin: 0 0 1rem; }
.dp-vblock__link { font-size: 0.82rem; font-weight: 700; color: var(--pl); text-decoration: none; transition: color 0.2s; }
.dp-vblock__link:hover { color: #fff; }

@media (max-width: 1024px) { .dp-vida__intro { grid-template-columns: 1fr; } }
@media (max-width: 768px)  { .dp-vida__dark-grid { grid-template-columns: 1fr; } .dp-vida__grid { grid-template-columns: 1fr; } }
</style>
