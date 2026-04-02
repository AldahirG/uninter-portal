<script setup lang="ts">
const acreditaciones = [
  {
    key: 'eaie',
    nombre: 'EAIE',
    desc: 'European Association for International Education',
    color: '#0F3C61',
    href: 'https://www.eaie.org',
  },
  {
    key: 'conacyt',
    nombre: 'CONACYT',
    desc: 'Consejo Nacional de Ciencia y Tecnología',
    color: '#1565C0',
    href: 'https://conahcyt.mx',
  },
  {
    key: 'anfeca',
    nombre: 'ANFECA',
    desc: 'Asociación Nacional de Facultades y Escuelas de Contaduría y Administración',
    color: '#2E7D32',
    href: 'https://www.anfeca.unam.mx',
  },
  {
    key: 'mb',
    nombre: 'Mexicana de Becas',
    desc: 'Fondo de ahorro educativo',
    color: '#546E7A',
    href: 'https://www.mexicanadebecas.com',
  },
  {
    key: 'sep',
    nombre: 'SEP',
    desc: 'Secretaría de Educación Pública — RVOE',
    color: '#C62828',
    href: 'https://www.sep.gob.mx',
  },
  {
    key: 'iso',
    nombre: 'ISO 9001:2015',
    desc: 'Certificación de Sistema de Gestión de Calidad',
    color: '#E65100',
    href: '#',
  },
]
</script>

<template>
  <section class="ac-section uninter-section">
    <div class="uninter-container">

      <div class="ac-header">
        <div>
          <div class="uninter-eyebrow">Calidad y reconocimiento</div>
          <h2 class="uninter-section-title">Acreditaciones y<br><em>certificaciones</em></h2>
        </div>
        <p class="ac-intro">
          UNINTER cuenta con reconocimientos nacionales e internacionales
          que avalan la calidad de sus programas académicos.
        </p>
      </div>

      <div class="ac-grid">
        <a
          v-for="a in acreditaciones"
          :key="a.key"
          :href="a.href"
          target="_blank"
          rel="noopener"
          class="ac-card"
        >
          <div class="ac-card__logo" :style="`background:${a.color}15;border-color:${a.color}30`">
            <span class="ac-card__abbr" :style="`color:${a.color}`">{{ a.nombre }}</span>
          </div>
          <p class="ac-card__desc">{{ a.desc }}</p>
        </a>
      </div>

      <!-- ISO badge destacado -->
      <div class="ac-iso">
        <Icon name="mdi:shield-check-outline" size="22" class="ac-iso__icon" />
        <div>
          <p class="ac-iso__title">Certificación ISO 9001:2015</p>
          <p class="ac-iso__desc">Universidad Internacional cuenta con certificación ISO 9001:2015 en su Sistema de Gestión de Calidad, garantizando procesos de excelencia en todos sus programas académicos.</p>
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.ac-section { background: #fff; }

.ac-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.ac-intro {
  font-size: .875rem;
  color: #64748b;
  line-height: 1.7;
  max-width: 360px;
  margin: 0;
  align-self: flex-end;
}

.ac-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.ac-card {
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 1.25rem .875rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: .75rem;
  align-items: center;
  text-align: center;
  transition: transform .2s, box-shadow .2s;
}
.ac-card:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,.08); }

.ac-card__logo {
  width: 60px; height: 60px;
  border-radius: 12px;
  border: 1.5px solid;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ac-card__abbr {
  font-size: .68rem;
  font-weight: 800;
  letter-spacing: .04em;
  text-align: center;
  line-height: 1.2;
}

.ac-card__desc {
  font-size: .68rem;
  color: #64748b;
  line-height: 1.45;
  margin: 0;
}

.ac-iso {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: #f0f7ff;
  border: 1px solid #b5d0f7;
  border-left: 4px solid #0F3C61;
  border-radius: 10px;
  padding: 1.25rem 1.5rem;
}

.ac-iso__icon { color: #0F3C61; flex-shrink: 0; margin-top: 2px; }
.ac-iso__title { font-size: .9rem; font-weight: 700; color: #0F3C61; margin: 0 0 .375rem; }
.ac-iso__desc { font-size: .8rem; color: #475569; line-height: 1.6; margin: 0; }

@media (max-width: 900px) { .ac-grid { grid-template-columns: repeat(3, 1fr); } }
@media (max-width: 480px) { .ac-grid { grid-template-columns: repeat(2, 1fr); } }
</style>