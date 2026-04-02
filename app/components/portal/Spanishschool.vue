<script setup lang="ts">
</script>

<template>
  <section class="ss-section uninter-section">
    <div class="uninter-container">

      <div class="ss-header">
        <div>
          <div class="uninter-eyebrow">Aprende español en México</div>
          <h2 class="uninter-section-title">Spanish School<br><em>UNINTER</em></h2>
        </div>
      </div>

      <div class="ss-wrap">

        <!-- Banner izquierdo -->
        <div class="ss-banner">
          <div class="ss-banner__year">Desde 1980</div>
          <h3 class="ss-banner__title">La mejor forma de aprender español</h3>
          <p class="ss-banner__desc">
            Cuernavaca, "La ciudad de la eterna primavera" — el destino perfecto
            para aprender español en México con alumnos de todo el mundo.
          </p>
          <div class="ss-banner__btns">
            <a href="https://spanishschool.uninter.edu.mx/" target="_blank" class="ss-btn-p">
              Ver programa completo
            </a>
            <a href="https://spanishschool.uninter.edu.mx/Home" target="_blank" class="ss-btn-g">
              Admissions
            </a>
          </div>
        </div>

        <!-- Cards -->
        <div class="ss-cards">
          <div class="ss-card">
            <div class="ss-card__icon"><Icon name="mdi:calendar-clock" size="22" /></div>
            <h4 class="ss-card__title">Cursos intensivos</h4>
            <p class="ss-card__desc">4, 8 y 12 semanas. Grupos reducidos y metodología comunicativa.</p>
          </div>
          <div class="ss-card">
            <div class="ss-card__icon"><Icon name="mdi:star-outline" size="22" /></div>
            <h4 class="ss-card__title">Verano Kids</h4>
            <p class="ss-card__desc">Programa especial para niños en inglés y español.</p>
            <a href="https://kids.uninter.edu.mx/" target="_blank" class="ss-card__link">Ver programa →</a>
          </div>
          <div class="ss-card">
            <div class="ss-card__icon"><Icon name="mdi:home-heart-outline" size="22" /></div>
            <h4 class="ss-card__title">Hospedaje familiar</h4>
            <p class="ss-card__desc">Vive con una familia mexicana para una inmersión total.</p>
          </div>
          <div class="ss-card">
            <div class="ss-card__icon"><Icon name="mdi:certificate-outline" size="22" /></div>
            <h4 class="ss-card__title">Certificaciones</h4>
            <p class="ss-card__desc">Preparación para DELE y otros exámenes oficiales de español.</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.ss-section { background: #fff; }
.ss-header { margin-bottom: 2rem; }

.ss-wrap {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 1.5rem;
  align-items: start;
}

.ss-banner {
  background: #BF360C;
  border-radius: 14px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  overflow: hidden;
}

.ss-banner__year {
  display: inline-block;
  background: rgba(255,255,255,.15);
  color: #fff;
  font-size: .68rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  padding: .25rem .7rem;
  border-radius: 4px;
  align-self: flex-start;
}

.ss-banner__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.35rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.25;
  margin: 0;
}

.ss-banner__desc {
  font-size: .82rem;
  color: rgba(255,255,255,.75);
  line-height: 1.65;
  margin: 0;
}

.ss-banner__btns { display: flex; flex-direction: column; gap: .625rem; margin-top: .5rem; }

.ss-btn-p {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  color: #BF360C;
  font-size: .82rem;
  font-weight: 700;
  padding: .7rem 1.25rem;
  border-radius: 7px;
  text-decoration: none;
  transition: background .2s;
}
.ss-btn-p:hover { background: #fff7f5; }

.ss-btn-g {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255,255,255,.35);
  color: #fff;
  font-size: .82rem;
  font-weight: 600;
  padding: .65rem 1.25rem;
  border-radius: 7px;
  text-decoration: none;
  transition: background .2s;
}
.ss-btn-g:hover { background: rgba(255,255,255,.1); }

.ss-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .875rem;
}

.ss-card {
  background: #f8f9fb;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
  transition: box-shadow .2s;
}
.ss-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,.07); }

.ss-card__icon {
  width: 40px; height: 40px;
  border-radius: 8px;
  background: #fde8e2;
  display: flex; align-items: center; justify-content: center;
  color: #BF360C;
}

.ss-card__title { font-size: .9rem; font-weight: 700; color: #1e293b; margin: 0; }
.ss-card__desc { font-size: .75rem; color: #64748b; line-height: 1.55; margin: 0; flex: 1; }
.ss-card__link { font-size: .74rem; font-weight: 700; color: #BF360C; text-decoration: none; margin-top: auto; }

@media (max-width: 768px) { .ss-wrap { grid-template-columns: 1fr; } }
@media (max-width: 480px) { .ss-cards { grid-template-columns: 1fr; } }
</style>