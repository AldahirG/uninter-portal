<script setup lang="ts">
const currentYear = new Date().getFullYear()

const columns = [
  {
    title: 'Universidad',
    links: [
      { label: 'Licenciaturas Presenciales', href: 'https://universidad.uninter.edu.mx/' },
      { label: 'Licenciaturas Ejecutivas',   href: 'https://universidad.uninter.edu.mx/ejecutivas' },
      { label: 'Folletos Digitales',         href: 'https://universidad.uninter.edu.mx/Folletos-Digitales' },
      { label: 'Admisiones',                 href: 'https://universidad.uninter.edu.mx/Admisiones' },
      { label: 'Test Vocacional',            href: 'https://universidad.uninter.edu.mx/test-vocacional' },
      { label: 'Calcula tu Beca',            href: 'https://universidad.uninter.edu.mx/Calcula-Tu-Beca' },
    ],
  },
  {
    title: 'Otros niveles',
    links: [
      { label: 'Bachillerato',    href: 'https://biu.uninter.edu.mx/' },
      { label: 'Secundaria',      href: 'https://siu.uninter.edu.mx/' },
      { label: 'Posgrados',       href: 'https://posgrados.uninter.edu.mx/' },
      { label: 'Diplomados',      href: 'https://diplomados.uninter.edu.mx/' },
      { label: 'Spanish School',  href: 'https://spanishschool.uninter.edu.mx/' },
      { label: 'Verano Kids',     href: 'https://kids.uninter.edu.mx/' },
      { label: 'Centro de Idiomas', href: 'https://uninter.edu.mx/centroidiomas/' },
    ],
  },
  {
    title: 'Comunidad',
    links: [
      { label: 'Sesiones Informativas', href: 'https://uninter.edu.mx/sesiones-informativas/' },
      { label: 'Eventos',               href: 'https://uninter.edu.mx/eventos/' },
      { label: 'On Demand',             href: 'https://uninter.edu.mx/ondemand/' },
      { label: 'Difusión Cultural',     href: 'https://uninter.edu.mx/difusion-cultural/' },
      { label: 'Prepa Abierta',         href: 'https://uninter.edu.mx/prep-a/' },
      { label: 'Internacionalización',  href: 'https://universidad.uninter.edu.mx/Internacionalizaci%C3%B3n' },
    ],
  },
  {
    title: 'Contacto',
    links: [],
  },
]

const social = [
  { icon: 'mdi:facebook',  href: 'https://www.facebook.com/uninter.mx',             label: 'Facebook' },
  { icon: 'mdi:instagram', href: 'https://www.instagram.com/uninter.mx',            label: 'Instagram' },
  { icon: 'mdi:youtube',   href: 'https://www.youtube.com/@unintermx',              label: 'YouTube' },
  { icon: 'mdi:linkedin',  href: 'https://www.linkedin.com/school/uninter-mx',      label: 'LinkedIn' },
  { icon: 'mdi:tiktok',    href: 'https://www.tiktok.com/@uninter.mx',              label: 'TikTok' },
]

const contact = [
  { icon: 'mdi:phone-outline',    value: '(777) 123 4567',          href: 'tel:+527771234567' },
  { icon: 'mdi:whatsapp',         value: 'WhatsApp',                href: 'https://wa.me/527771234567' },
  { icon: 'mdi:email-outline',    value: 'info@uninter.edu.mx',     href: 'mailto:info@uninter.edu.mx' },
  { icon: 'mdi:map-marker-outline',value: 'Cuernavaca, Morelos',    href: '#' },
]

const legalLinks = [
  { label: 'Aviso de Privacidad',    href: '/aviso-privacidad' },
  { label: 'Términos y Condiciones', href: '/terminos' },
  { label: 'Mapa del Sitio',         href: '/mapa-sitio' },
]
</script>

<template>
  <footer class="ft-footer">

    <!-- ── Top band ──────────────────────────────────── -->
    <div class="ft-top">
      <div class="ft-container ft-top__inner">
        <div class="ft-top__text">
          <p class="ft-top__headline">¿Listo para dar el siguiente paso?</p>
          <p class="ft-top__sub">Un asesor te acompañará en todo el proceso de admisión.</p>
        </div>
        <div class="ft-top__actions">
          <a
            href="https://universidad.uninter.edu.mx/Admisiones"
            target="_blank"
            rel="noopener"
            class="ft-btn ft-btn--solid"
          >
            Solicitar información
          </a>
          <a
            href="https://wa.me/527771234567"
            target="_blank"
            rel="noopener"
            class="ft-btn ft-btn--wa"
          >
            <Icon name="mdi:whatsapp" size="16" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>

    <!-- ── Main footer ───────────────────────────────── -->
    <div class="ft-main">
      <div class="ft-container ft-main__grid">

        <!-- Branding col -->
        <div class="ft-brand">
          <div class="ft-brand__logo">
            <div class="ft-brand__icon">
              <Icon name="mdi:school" size="22" />
            </div>
            <div>
              <p class="ft-brand__name">UNINTER</p>
              <p class="ft-brand__sub">Universidad Internacional</p>
            </div>
          </div>

          <p class="ft-brand__tagline">
            Formando profesionales con visión global desde Cuernavaca, Morelos.
          </p>

          <!-- Contact info -->
          <div class="ft-contact">
            <a
              v-for="c in contact"
              :key="c.value"
              :href="c.href"
              class="ft-contact__item"
              target="_blank"
              rel="noopener"
            >
              <Icon :name="c.icon" size="14" class="ft-contact__icon" />
              <span>{{ c.value }}</span>
            </a>
          </div>

          <!-- Social -->
          <div class="ft-social">
            <a
              v-for="s in social"
              :key="s.label"
              :href="s.href"
              :aria-label="s.label"
              class="ft-social__link"
              target="_blank"
              rel="noopener"
            >
              <Icon :name="s.icon" size="16" />
            </a>
          </div>
        </div>

        <!-- Nav columns -->
        <div
          v-for="col in columns.slice(0, 3)"
          :key="col.title"
          class="ft-col"
        >
          <h3 class="ft-col__title">{{ col.title }}</h3>
          <ul class="ft-col__list">
            <li v-for="link in col.links" :key="link.label">
              <a
                :href="link.href"
                class="ft-col__link"
                target="_blank"
                rel="noopener"
              >{{ link.label }}</a>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <!-- ── Bottom bar ────────────────────────────────── -->
    <div class="ft-bottom">
      <div class="ft-container ft-bottom__inner">
        <p class="ft-bottom__copy">
          © {{ currentYear }} Universidad Internacional UNINTER · Todos los derechos reservados
        </p>
        <div class="ft-bottom__legal">
          <a
            v-for="l in legalLinks"
            :key="l.label"
            :href="l.href"
            class="ft-bottom__link"
          >{{ l.label }}</a>
        </div>
      </div>
    </div>

  </footer>
</template>

<style scoped>
.ft-footer {
  --ft-bg:      #04080f;
  --ft-surface: #070d18;
  --ft-top:     #0F3C61;
  --ft-border:  rgba(255,255,255,0.07);
  --ft-text:    #dde6f4;
  --ft-muted:   #5e7a96;
  --ft-light:   #4A90C4;
  --ft-radius:  6px;

  background: var(--ft-bg);
  border-top: 1px solid var(--ft-border);
}

.ft-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* ── TOP BAND ─────────────────────────────────────────── */
.ft-top {
  background: var(--ft-top);
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.ft-top__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.ft-top__headline {
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  margin: 0 0 4px;
  font-family: var(--font-serif, Georgia, serif);
}

.ft-top__sub {
  font-size: 0.78rem;
  color: rgba(255,255,255,0.7);
  margin: 0;
}

.ft-top__actions {
  display: flex;
  gap: 0.625rem;
  flex-shrink: 0;
  flex-wrap: wrap;
}

.ft-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.55rem 1.1rem;
  font-size: 0.78rem;
  font-weight: 700;
  border-radius: var(--ft-radius);
  text-decoration: none;
  transition: all 0.2s;
  white-space: nowrap;
  cursor: pointer;
  border: none;
}

.ft-btn--solid {
  background: #fff;
  color: var(--ft-top);
}
.ft-btn--solid:hover { background: #e8f4ff; }

.ft-btn--wa {
  background: #25D366;
  color: #fff;
}
.ft-btn--wa:hover { filter: brightness(1.1); }

/* ── MAIN ─────────────────────────────────────────────── */
.ft-main {
  padding: 3.5rem 0;
  border-bottom: 1px solid var(--ft-border);
}

.ft-main__grid {
  display: grid;
  grid-template-columns: 280px repeat(3, 1fr);
  gap: 3rem;
}

/* ── BRAND COL ────────────────────────────────────────── */
.ft-brand__logo {
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 1rem;
}

.ft-brand__icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: var(--ft-top);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-shrink: 0;
}

.ft-brand__name {
  font-size: 1rem;
  font-weight: 800;
  color: var(--ft-text);
  letter-spacing: 0.12em;
  font-family: var(--font-serif, Georgia, serif);
  margin: 0;
  line-height: 1;
}

.ft-brand__sub {
  font-size: 0.58rem;
  color: var(--ft-muted);
  letter-spacing: 0.05em;
  margin: 3px 0 0;
}

.ft-brand__tagline {
  font-size: 0.78rem;
  color: var(--ft-muted);
  line-height: 1.65;
  margin: 0 0 1.25rem;
  max-width: 240px;
}

/* Contact */
.ft-contact {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
}

.ft-contact__item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: var(--ft-muted);
  text-decoration: none;
  transition: color 0.2s;
}
.ft-contact__item:hover { color: var(--ft-text); }

.ft-contact__icon { flex-shrink: 0; color: var(--ft-light); }

/* Social */
.ft-social {
  display: flex;
  gap: 0.5rem;
}

.ft-social__link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 7px;
  background: rgba(255,255,255,0.05);
  border: 1px solid var(--ft-border);
  color: var(--ft-muted);
  text-decoration: none;
  transition: color 0.2s, background 0.2s, border-color 0.2s;
}
.ft-social__link:hover {
  color: var(--ft-text);
  background: rgba(255,255,255,0.09);
  border-color: rgba(255,255,255,0.14);
}

/* ── NAV COLS ─────────────────────────────────────────── */
.ft-col__title {
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ft-text);
  margin: 0 0 1rem;
}

.ft-col__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.ft-col__link {
  font-size: 0.78rem;
  color: var(--ft-muted);
  text-decoration: none;
  transition: color 0.2s;
  line-height: 1.4;
}
.ft-col__link:hover { color: var(--ft-text); }

/* ── BOTTOM BAR ───────────────────────────────────────── */
.ft-bottom {
  padding: 1.25rem 0;
}

.ft-bottom__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.ft-bottom__copy {
  font-size: 0.7rem;
  color: var(--ft-muted);
  margin: 0;
}

.ft-bottom__legal {
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
}

.ft-bottom__link {
  font-size: 0.7rem;
  color: var(--ft-muted);
  text-decoration: none;
  transition: color 0.2s;
}
.ft-bottom__link:hover { color: var(--ft-text); }

/* ── RESPONSIVE ───────────────────────────────────────── */
@media (max-width: 1024px) {
  .ft-main__grid {
    grid-template-columns: 240px repeat(3, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .ft-main { padding: 2.5rem 0; }
  .ft-container { padding: 0 1.25rem; }

  .ft-main__grid {
    grid-template-columns: 1fr 1fr;
    gap: 2rem 1.5rem;
  }

  /* Brand ocupa las 2 columnas en tablet */
  .ft-brand {
    grid-column: span 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem 2rem;
    align-items: start;
  }

  .ft-brand__logo { grid-column: span 2; margin-bottom: 0; }
  .ft-brand__tagline { margin-bottom: 0; }

  .ft-top__inner { flex-direction: column; align-items: flex-start; }
  .ft-top__actions { width: 100%; }
  .ft-btn { flex: 1; justify-content: center; }

  .ft-bottom__inner { flex-direction: column; align-items: flex-start; gap: 0.625rem; }
}

@media (max-width: 480px) {
  .ft-main__grid {
    grid-template-columns: 1fr;
    gap: 1.75rem;
  }

  .ft-brand {
    grid-column: span 1;
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
  }

  .ft-brand__logo { margin-bottom: 0; }
  .ft-brand__tagline { max-width: 100%; }

  .ft-col__list { gap: 0.625rem; }

  /* Compact bottom */
  .ft-bottom__legal { gap: 0.875rem; }
  .ft-bottom__copy  { font-size: 0.65rem; }
  .ft-bottom__link  { font-size: 0.65rem; }
}
</style>