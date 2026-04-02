<script setup lang="ts">
const WA_URL = 'https://wa.me/5217776154241?text=Hola%20vengo%20de%20la%20p%C3%A1gina%20de%20Universidad%2C%20necesito%20m%C3%A1s%20informaci%C3%B3n%20%E2%9C%8C%EF%B8%8F.'

const noticiaPrincipal = {
  tag: 'Institucional',
  titulo: 'UNINTER reafirma certificación ISO 9001:2015 por tercer año consecutivo',
  resumen: 'La Universidad Internacional mantiene su estándar de calidad internacional, garantizando procesos educativos de excelencia en todos sus programas académicos.',
  fecha: 'Marzo 2026',
  imagen: '/images/noticias/diaMujerNews.jpg',
  href: 'https://uninter.edu.mx/noticias',
}

const noticias = [
  {
    tag: 'Deportes',
    titulo: 'Leandros clasifican al regional de fútbol americano',
    fecha: 'Abr 2026',
    imagen: '/images/noticias/tastesNews.jpg',
    href: '#',
  },
  {
    tag: 'Académico',
    titulo: 'Nuevo Centro de Idiomas abre en campus central',
    fecha: 'Mar 2026',
    imagen: '/images/noticias/tastesNews.jpg',
    href: '#',
  },
  {
    tag: 'Eventos',
    titulo: 'Sesión informativa Licenciaturas Ejecutivas — Abr 10',
    fecha: 'Abr 2026',
    imagen: '/images/noticias/tastesNews.jpg',
    href: '#',
  },
]

const tagColor: Record<string, string> = {
  'Institucional': '#0F3C61',
  'Deportes':      '#2E7D32',
  'Académico':     '#1565C0',
  'Eventos':       '#E65100',
  'Cultura':       '#6A1B9A',
}

// Fallback color por si no hay imagen
const tagBg: Record<string, string> = {
  'Institucional': '#e8f0fd',
  'Deportes':      '#e8f5e9',
  'Académico':     '#e3f2fd',
  'Eventos':       '#fff3e0',
  'Cultura':       '#f3e5f5',
}
</script>

<template>
  <section class="nn-section uninter-section">
    <div class="uninter-container">

      <div class="nn-header">
        <div>
          <div class="uninter-eyebrow">Novedades institucionales</div>
          <h2 class="uninter-section-title">Noticias<br><em>UNINTER</em></h2>
        </div>
        <a href="https://uninter.edu.mx/noticias" target="_blank" class="uninter-ver-mas">
          Ver todas →
        </a>
      </div>

      <div class="nn-layout">

        <!-- Noticia principal con imagen -->
        <a :href="noticiaPrincipal.href" target="_blank" class="nn-main">
          <!-- Imagen de fondo -->
          <div class="nn-main__img-wrap">
            <img
              :src="noticiaPrincipal.imagen"
              :alt="noticiaPrincipal.titulo"
              class="nn-main__img"
              loading="lazy"
            />
            <div class="nn-main__overlay"></div>
          </div>

          <!-- Contenido sobre la imagen -->
          <div class="nn-main__content">
            <span class="nn-tag" :style="`background:${tagColor[noticiaPrincipal.tag]}`">
              {{ noticiaPrincipal.tag }}
            </span>
            <h3 class="nn-main__title">{{ noticiaPrincipal.titulo }}</h3>
            <p class="nn-main__resumen">{{ noticiaPrincipal.resumen }}</p>
            <div class="nn-main__footer">
              <span class="nn-main__fecha">{{ noticiaPrincipal.fecha }}</span>
              <span class="nn-main__cta">Leer más →</span>
            </div>
          </div>
        </a>

        <!-- Cards secundarias con imagen -->
        <div class="nn-list">
          <a
            v-for="n in noticias"
            :key="n.titulo"
            :href="n.href"
            class="nn-card"
          >
            <!-- Thumbnail -->
            <div
              class="nn-card__thumb"
              :style="`background:${tagBg[n.tag] || '#f8f9fb'}`"
            >
              <img
                :src="n.imagen"
                :alt="n.titulo"
                class="nn-card__img"
                loading="lazy"
              />
              <!-- Fallback si no hay imagen -->
              <div class="nn-card__img-fallback">
                <Icon name="mdi:newspaper-variant-outline" size="28" :style="`color:${tagColor[n.tag]}`" />
              </div>
            </div>

            <!-- Info -->
            <div class="nn-card__body">
              <span
                class="nn-card__tag"
                :style="`color:${tagColor[n.tag]};border-color:${tagColor[n.tag]}30`"
              >
                {{ n.tag }}
              </span>
              <p class="nn-card__title">{{ n.titulo }}</p>
              <span class="nn-card__fecha">{{ n.fecha }}</span>
            </div>
          </a>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
.nn-section { background: #fff; }

.nn-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.nn-layout {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 1.25rem;
  align-items: start;
}

/* ── NOTICIA PRINCIPAL ─────────────────────────── */
.nn-main {
  border-radius: 14px;
  overflow: hidden;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 380px;
  transition: transform .2s;
  background: #0F3C61;
}
.nn-main:hover { transform: translateY(-2px); }

.nn-main__img-wrap {
  position: absolute;
  inset: 0;
}
.nn-main__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
.nn-main__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(10, 24, 50, 0.95) 0%,
    rgba(10, 24, 50, 0.65) 50%,
    rgba(10, 24, 50, 0.25) 100%
  );
}

.nn-main__content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: .75rem;
  padding: 1.75rem;
  margin-top: auto;
}

.nn-tag {
  display: inline-block;
  color: #fff;
  font-size: .67rem;
  font-weight: 700;
  letter-spacing: .07em;
  text-transform: uppercase;
  padding: .22rem .65rem;
  border-radius: 4px;
  align-self: flex-start;
}

.nn-main__title {
  font-family: var(--font-serif, Georgia, serif);
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.35;
  margin: 0;
}

.nn-main__resumen {
  font-size: .8rem;
  color: rgba(255,255,255,.72);
  line-height: 1.6;
  margin: 0;
}

.nn-main__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: .75rem;
  border-top: 1px solid rgba(255,255,255,.15);
}

.nn-main__fecha { font-size: .72rem; color: rgba(255,255,255,.5); }
.nn-main__cta { font-size: .78rem; font-weight: 700; color: #93c5fd; }

/* ── CARDS SECUNDARIAS ─────────────────────────── */
.nn-list {
  display: flex;
  flex-direction: column;
  gap: .875rem;
}

.nn-card {
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  display: grid;
  grid-template-columns: 90px 1fr;
  transition: box-shadow .2s, transform .2s;
}
.nn-card:hover {
  box-shadow: 0 6px 20px rgba(0,0,0,.09);
  transform: translateX(2px);
}

.nn-card__thumb {
  position: relative;
  overflow: hidden;
  min-height: 90px;
}
.nn-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  position: absolute;
  inset: 0;
}
.nn-card__img-fallback {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* Cuando la imagen carga, oculta el fallback */
.nn-card__img:not([src=""]) + .nn-card__img-fallback { display: none; }

.nn-card__body {
  padding: .875rem 1rem;
  display: flex;
  flex-direction: column;
  gap: .35rem;
  justify-content: center;
}

.nn-card__tag {
  display: inline-block;
  font-size: .63rem;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  border: 1px solid;
  padding: .14rem .5rem;
  border-radius: 4px;
  align-self: flex-start;
}
.nn-card__title {
  font-size: .84rem;
  font-weight: 700;
  color: #1e293b;
  line-height: 1.4;
  margin: 0;
}
.nn-card__fecha { font-size: .7rem; color: #94a3b8; }

/* ── RESPONSIVE ────────────────────────────────── */
@media (max-width: 768px) {
  .nn-layout { grid-template-columns: 1fr; }
  .nn-main { min-height: 280px; }
  .nn-main__title { font-size: 1.05rem; }
}

@media (max-width: 480px) {
  .nn-card { grid-template-columns: 72px 1fr; }
  .nn-card__thumb { min-height: 72px; }
}
</style>