<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const niveles = [
  {
    label: 'Universidad',
    slug: 'universidad',
    color: '#1565C0',
    bg: '#e8f0fd',
    border: '#b5d0f7',
    text: '#0C447C',
    href: 'https://universidad.uninter.edu.mx/',
    desc: '23 licenciaturas · 6 ingenierías',
    icon: 'mdi:school-outline',
    stats: ['Presencial', 'Ejecutiva'],
  },
  {
    label: 'Bachillerato',
    slug: 'bachillerato',
    color: '#2E7D32',
    bg: '#e8f5e9',
    border: '#a5d6a7',
    text: '#1B5E20',
    href: 'https://biu.uninter.edu.mx/',
    desc: 'Bachillerato Internacional BIU',
    icon: 'mdi:book-open-outline',
    stats: ['Presencial'],
  },
  {
    label: 'Secundaria',
    slug: 'secundaria',
    color: '#E65100',
    bg: '#fff3e0',
    border: '#ffcc80',
    text: '#BF360C',
    href: 'https://siu.uninter.edu.mx/',
    desc: 'Secundaria Internacional SIU',
    icon: 'mdi:pencil-outline',
    stats: ['Presencial'],
  },
  {
    label: 'Posgrados',
    slug: 'posgrados',
    color: '#546E7A',
    bg: '#f3f4f6',
    border: '#d1d5db',
    text: '#37474F',
    href: 'https://posgrados.uninter.edu.mx/',
    desc: 'Maestrías y especializaciones',
    icon: 'mdi:certificate-outline',
    stats: ['Presencial', 'En línea'],
  },
  {
    label: 'Diplomados',
    slug: 'diplomados',
    color: '#6D4C41',
    bg: '#fdf2ee',
    border: '#f0bda7',
    text: '#4E342E',
    href: 'https://diplomados.uninter.edu.mx/',
    desc: 'Capacitación profesional',
    icon: 'mdi:briefcase-outline',
    stats: ['Presencial'],
  },
  {
    label: 'Centro de Idiomas',
    slug: 'idiomas',
    color: '#0277BD',
    bg: '#e3f2fd',
    border: '#90caf9',
    text: '#01579B',
    href: 'https://uninter.edu.mx/centroidiomas/',
    desc: 'Spanish School · Inglés · Francés',
    icon: 'mdi:translate',
    stats: ['Intensivo', 'Regular'],
  },
]
</script>

<template>
  <section id="oferta" class="oe-section uninter-section">
    <div class="uninter-container">

      <div class="oe-header">
        <div>
          <div class="uninter-eyebrow">Programas académicos</div>
          <h2 class="uninter-section-title">Elige tu<br><em>nivel educativo</em></h2>
          <p class="oe-desc">
            Cada nivel cuenta con su propio campus digital. Haz clic para
            conocer la oferta completa de cada programa.
          </p>
        </div>
      </div>

      <div class="oe-grid">
        <a
          v-for="nivel in niveles"
          :key="nivel.slug"
          :href="nivel.href"
          target="_blank"
          rel="noopener"
          class="oe-card"
          :style="`--c:${nivel.color};--bg:${nivel.bg};--br:${nivel.border};--tx:${nivel.text}`"
        >
          <div class="oe-card__top-bar"></div>

          <div class="oe-card__icon">
            <Icon :name="nivel.icon" size="26" />
          </div>

          <h3 class="oe-card__title">{{ nivel.label }}</h3>
          <p class="oe-card__desc">{{ nivel.desc }}</p>

          <div class="oe-card__pills">
            <span v-for="s in nivel.stats" :key="s" class="oe-pill">{{ s }}</span>
          </div>

          <div class="oe-card__link">
            Ir al sitio <ArrowRight :size="13" />
          </div>
        </a>
      </div>

    </div>
  </section>
</template>

<style scoped>
.oe-section { background: #fff; }

.oe-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.oe-desc {
  font-size: .875rem;
  color: #64748b;
  line-height: 1.7;
  max-width: 440px;
  margin: .75rem 0 0;
}

.oe-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.oe-card {
  background: var(--bg);
  border: 1.5px solid var(--br);
  border-radius: 12px;
  padding: 1.5rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: .625rem;
  position: relative;
  overflow: hidden;
  transition: transform .2s, box-shadow .2s;
}

.oe-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px rgba(0,0,0,.1);
}

.oe-card__top-bar {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 4px;
  background: var(--c);
}

.oe-card__icon {
  width: 48px; height: 48px;
  border-radius: 10px;
  background: var(--c);
  display: flex; align-items: center; justify-content: center;
  color: #fff;
}

.oe-card__title {
  font-size: 1.05rem;
  font-weight: 800;
  color: var(--tx);
  margin: 0;
  line-height: 1.2;
}

.oe-card__desc {
  font-size: .78rem;
  color: var(--tx);
  opacity: .75;
  line-height: 1.5;
  margin: 0;
}

.oe-card__pills {
  display: flex;
  gap: .375rem;
  flex-wrap: wrap;
  margin-top: .25rem;
}

.oe-pill {
  font-size: .65rem;
  font-weight: 700;
  letter-spacing: .04em;
  padding: .2rem .55rem;
  border-radius: 999px;
  background: rgba(255,255,255,.6);
  color: var(--tx);
  border: 1px solid var(--br);
}

.oe-card__link {
  display: flex;
  align-items: center;
  gap: .3rem;
  font-size: .75rem;
  font-weight: 700;
  color: var(--c);
  margin-top: auto;
  padding-top: .625rem;
  border-top: 1px solid var(--br);
  opacity: .8;
  transition: opacity .15s;
}

.oe-card:hover .oe-card__link { opacity: 1; }

@media (max-width: 768px) {
  .oe-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 480px) {
  .oe-grid { grid-template-columns: 1fr 1fr; gap: .75rem; }
  .oe-card { padding: 1.1rem; }
  .oe-card__icon { width: 38px; height: 38px; border-radius: 8px; }
}
</style>