<script setup lang="ts">
const year = new Date().getFullYear()

const blogs = [
  { label: 'ESCAT — Ciencias, Artes y Tecnología',               href: 'https://uninter.edu.mx/blogs/escat' },
  { label: 'ENDECS — Negocios, Derecho y Ciencias Sociales',      href: 'https://uninter.edu.mx/blogs/endecs' },
  { label: 'EHLI — Humanidades, Lenguas e Internacionalización',   href: 'https://uninter.edu.mx/blogs/ehli' },
  { label: 'ARQ-ICI — Arquitectura e Ingeniería Civil',            href: 'https://uninter.edu.mx/blogs/arq-ici' },
  { label: 'Secundaria Internacional (SIU)',                       href: 'https://siu.uninter.edu.mx/blog' },
  { label: 'Bachillerato Internacional (BIU)',                     href: 'https://biu.uninter.edu.mx/blog' },
  { label: 'Spanish School',                                       href: 'https://spanishschool.uninter.edu.mx/blog' },
  { label: 'Enlace Profesional',                                   href: '#' },
  { label: 'Revista YNDICIO',                                      href: '#' },
]

const otrosSitios = [
  { label: 'Univirtual',                       href: '#' },
  { label: 'SEL — Sistema Escolar en Línea',   href: '#' },
  { label: 'Modelo Learning 4.0',              href: '#' },
  { label: 'UNINTER en la nueva normalidad',   href: '#' },
  { label: 'Proceso de Admisión',              href: 'https://universidad.uninter.edu.mx/Admisiones' },
  { label: 'Proceso de Becas',                 href: 'https://universidad.uninter.edu.mx/Calcula-Tu-Beca' },
]

const social = [
  { icon: 'mdi:facebook',  href: 'https://www.facebook.com/uninter.mx',         label: 'Facebook' },
  { icon: 'mdi:instagram', href: 'https://www.instagram.com/uninter.mx',        label: 'Instagram' },
  { icon: 'mdi:youtube',   href: 'https://www.youtube.com/@unintermx',          label: 'YouTube' },
  { icon: 'mdi:linkedin',  href: 'https://www.linkedin.com/school/uninter-mx',  label: 'LinkedIn' },
  { icon: 'mdi:tiktok',    href: 'https://www.tiktok.com/@uninter.mx',          label: 'TikTok' },
]
</script>

<template>
  <footer class="ft-footer">

    <!-- Body -->
    <div class="ft-body">
      <div class="uninter-container ft-grid">

        <!-- Brand -->
        <div class="ft-brand">
          <div class="ft-logo">
            <div class="ft-logo__icon"><Icon name="mdi:school" size="20" /></div>
            <div>
              <span class="ft-logo__name">UNINTER</span>
              <span class="ft-logo__sub">Universidad Internacional</span>
            </div>
          </div>
          <p class="ft-brand__tagline">
            Formando profesionales con visión global desde Cuernavaca, Morelos.
          </p>
          <div class="ft-contact">
            <a href="tel:7773579000" class="ft-contact__item">
              <Icon name="mdi:phone-outline" size="13" />
              777 357 9000
            </a>
            <a href="tel:7773579001" class="ft-contact__item">
              <Icon name="mdi:phone-outline" size="13" />
              777 357 9001
            </a>
            <a href="https://wa.me/5217776154241?text=Hola%20vengo%20de%20la%20p%C3%A1gina%20de%20Universidad%2C%20necesito%20m%C3%A1s%20informaci%C3%B3n%20%E2%9C%8C%EF%B8%8F." target="_blank" class="ft-contact__item">
              <Icon name="mdi:whatsapp" size="13" />
              WhatsApp
            </a>
          </div>
          <div class="ft-social">
            <a
              v-for="s in social"
              :key="s.label"
              :href="s.href"
              :aria-label="s.label"
              target="_blank"
              rel="noopener"
              class="ft-social__link"
            >
              <Icon :name="s.icon" size="15" />
            </a>
          </div>
        </div>

        <!-- Blogs -->
        <div class="ft-col">
          <h5 class="ft-col__title">Blogs</h5>
          <ul class="ft-col__list">
            <li v-for="b in blogs" :key="b.label">
              <a :href="b.href" target="_blank" class="ft-col__link">{{ b.label }}</a>
            </li>
          </ul>
        </div>

        <!-- Otros sitios -->
        <div class="ft-col">
          <h5 class="ft-col__title">Otros sitios</h5>
          <ul class="ft-col__list">
            <li v-for="o in otrosSitios" :key="o.label">
              <a :href="o.href" target="_blank" class="ft-col__link">{{ o.label }}</a>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <!-- Bottom bar -->
    <div class="ft-bottom">
      <div class="uninter-container ft-bottom__inner">
        <p class="ft-bottom__copy">
          <strong>Certificación ISO 9001:2015.</strong>
          Todos los derechos reservados para Universidad Internacional ·
          San Jerónimo No. 304, Col. San Jerónimo. Cuernavaca Morelos, México. ·
          <a href="/politica-privacidad" class="ft-bottom__link">Política de Privacidad</a> ·
          Contáctanos · 777 357 9000 · 777 357 9001 ·
          <span class="ft-bottom__ssl">SSL Seguro y Verificado</span>
        </p>
        <p class="ft-bottom__rights">© {{ year }} Universidad Internacional UNINTER</p>
      </div>
    </div>

  </footer>
</template>

<style scoped>
.ft-footer {
  background: #060e1a;
  border-top: 3px solid #0F3C61;
}

/* BODY */
.ft-body { padding: 3rem 0 2.5rem; border-bottom: 1px solid rgba(255,255,255,.07); }

.ft-grid {
  display: grid;
  grid-template-columns: 260px 1fr 1fr;
  gap: 3rem;
}

/* BRAND */
.ft-logo {
  display: flex;
  align-items: center;
  gap: .625rem;
  margin-bottom: 1rem;
}

.ft-logo__icon {
  width: 38px; height: 38px;
  border-radius: 7px;
  background: #0F3C61;
  display: flex; align-items: center; justify-content: center;
  color: #fff;
  flex-shrink: 0;
}

.ft-logo__name {
  display: block;
  font-size: .95rem;
  font-weight: 800;
  color: #dde6f4;
  letter-spacing: .12em;
  font-family: var(--font-serif, Georgia, serif);
  line-height: 1;
}

.ft-logo__sub {
  display: block;
  font-size: .58rem;
  color: #4a6480;
  margin-top: 3px;
  letter-spacing: .04em;
}

.ft-brand__tagline {
  font-size: .78rem;
  color: #4a6480;
  line-height: 1.65;
  margin: 0 0 1rem;
  max-width: 220px;
}

.ft-contact {
  display: flex;
  flex-direction: column;
  gap: .5rem;
  margin-bottom: 1rem;
}

.ft-contact__item {
  display: flex;
  align-items: center;
  gap: .4rem;
  font-size: .76rem;
  color: #5e7a96;
  text-decoration: none;
  transition: color .2s;
}
.ft-contact__item:hover { color: #dde6f4; }

.ft-social {
  display: flex;
  gap: .5rem;
}

.ft-social__link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px; height: 32px;
  border-radius: 7px;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.08);
  color: #5e7a96;
  text-decoration: none;
  transition: color .2s, background .2s;
}
.ft-social__link:hover {
  color: #dde6f4;
  background: rgba(255,255,255,.1);
}

/* COLS */
.ft-col__title {
  font-size: .72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .1em;
  color: #dde6f4;
  margin: 0 0 .875rem;
}

.ft-col__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: .45rem;
}

.ft-col__link {
  font-size: .76rem;
  color: #4a6480;
  text-decoration: none;
  line-height: 1.4;
  transition: color .2s;
  display: flex;
  align-items: center;
  gap: .3rem;
}
.ft-col__link::before {
  content: '›';
  color: #0F3C61;
  font-weight: 700;
}
.ft-col__link:hover { color: #dde6f4; }

/* BOTTOM */
.ft-bottom { padding: 1rem 0; }

.ft-bottom__inner {
  display: flex;
  flex-direction: column;
  gap: .375rem;
}

.ft-bottom__copy {
  font-size: .68rem;
  color: #2e4a64;
  line-height: 1.75;
  margin: 0;
}

.ft-bottom__copy strong { color: #4A90C4; }

.ft-bottom__link {
  color: #4A90C4;
  text-decoration: none;
}
.ft-bottom__link:hover { text-decoration: underline; }

.ft-bottom__ssl {
  color: #4A90C4;
  font-weight: 600;
}

.ft-bottom__rights {
  font-size: .65rem;
  color: #1e3550;
  margin: 0;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .ft-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
  .ft-brand { grid-column: span 2; }
}

@media (max-width: 540px) {
  .ft-grid { grid-template-columns: 1fr; }
  .ft-brand { grid-column: span 1; }
}
</style>