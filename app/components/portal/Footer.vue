
<script setup lang="ts">
import { ref } from 'vue';
import { Phone, Mail, MapPin } from 'lucide-vue-next';

const currentYear = ref(new Date().getFullYear());
</script>

<template>
  <footer class="ft-footer">
    <div class="ft-body">
      <div class="uninter-container ft-grid">
        <div class="ft-brand">
          <div class="ft-logo">
            <div class="ft-logo__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 22v-4a2 2 0 1 0-4 0v4"/><path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2"/><path d="M18 5v17"/><path d="m4 6 8-4 8 4"/><path d="M6 5v17"/><circle cx="12" cy="9" r="2"/></svg>
            </div>
            <div>
              <span class="ft-logo__name">UNINTER</span>
              <span class="ft-logo__sub">Universidad Internacional</span>
            </div>
          </div>
          <p class="ft-brand__tagline">Formando profesionales con visión global desde Cuernavaca, Morelos.</p>
          <div class="ft-contact">
            <a href="tel:7773579000" class="ft-contact__item">
              <Phone size="13" /> 777 357 9000
            </a>
            <a href="tel:7773579001" class="ft-contact__item">
              <Phone size="13" /> 777 357 9001
            </a>
            <a href="https://wa.me/5217776154241?text=Hola%20vengo%20de%20la%20p%C3%A1gina%20de%20Universidad%2C%20necesito%20m%C3%A1s%20informaci%C3%B3n%20%E2%9C%8C%EF%B8%8F." target="_blank" class="ft-contact__item">
              <Phone size="13" /> WhatsApp
            </a>
          </div>
          <div class="ft-social">
            <a href="https://www.facebook.com/uninter.mx" aria-label="Facebook" target="_blank" rel="noopener" class="ft-social__link">FB</a>
            <a href="https://www.instagram.com/uninter.mx" aria-label="Instagram" target="_blank" rel="noopener" class="ft-social__link">IG</a>
            <a href="https://www.youtube.com/@unintermx" aria-label="YouTube" target="_blank" rel="noopener" class="ft-social__link">YT</a>
            <a href="https://www.linkedin.com/school/uninter-mx" aria-label="LinkedIn" target="_blank" rel="noopener" class="ft-social__link">IN</a>
            <a href="https://www.tiktok.com/@uninter.mx" aria-label="TikTok" target="_blank" rel="noopener" class="ft-social__link">TK</a>
          </div>
        </div>
        <div class="ft-col">
          <h5 class="ft-col__title">Blogs</h5>
          <ul class="ft-col__list">
            <li><a href="https://uninter.edu.mx/blogs/escat" target="_blank" class="ft-col__link">ESCAT — Ciencias, Artes y Tecnología</a></li>
            <li><a href="https://uninter.edu.mx/blogs/endecs" target="_blank" class="ft-col__link">ENDECS — Negocios, Derecho y Ciencias Sociales</a></li>
            <li><a href="https://uninter.edu.mx/blogs/ehli" target="_blank" class="ft-col__link">EHLI — Humanidades, Lenguas e Internacionalización</a></li>
            <li><a href="https://uninter.edu.mx/blogs/arq-ici" target="_blank" class="ft-col__link">ARQ-ICI — Arquitectura e Ingeniería Civil</a></li>
            <li><a href="https://siu.uninter.edu.mx/blog" target="_blank" class="ft-col__link">Secundaria Internacional (SIU)</a></li>
            <li><a href="https://biu.uninter.edu.mx/blog" target="_blank" class="ft-col__link">Bachillerato Internacional (BIU)</a></li>
            <li><a href="https://spanishschool.uninter.edu.mx/blog" target="_blank" class="ft-col__link">Spanish School</a></li>
            <li><a href="#" target="_blank" class="ft-col__link">Enlace Profesional</a></li>
            <li><a href="#" target="_blank" class="ft-col__link">Revista YNDICIO</a></li>
          </ul>
        </div>
        <div class="ft-col">
          <h5 class="ft-col__title">Otros sitios</h5>
          <ul class="ft-col__list">
            <li><a href="#" target="_blank" class="ft-col__link">Univirtual</a></li>
            <li><a href="#" target="_blank" class="ft-col__link">SEL — Sistema Escolar en Línea</a></li>
            <li><a href="#" target="_blank" class="ft-col__link">Modelo Learning 4.0</a></li>
            <li><a href="#" target="_blank" class="ft-col__link">UNINTER en la nueva normalidad</a></li>
            <li><a href="https://universidad.uninter.edu.mx/Admisiones" target="_blank" class="ft-col__link">Proceso de Admisión</a></li>
            <li><a href="https://universidad.uninter.edu.mx/Calcula-Tu-Beca" target="_blank" class="ft-col__link">Proceso de Becas</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="ft-bottom">
      <div class="uninter-container ft-bottom__inner">
        <p class="ft-bottom__copy">
          <strong>Certificación ISO 9001:2015.</strong> Todos los derechos reservados para Universidad Internacional - San Jerónimo No. 304, Col. San Jerónimo. Cuernavaca Morelos, México. • <a href="/politica-privacidad" class="ft-bottom__link">Política de Privacidad</a> • Contáctanos • 777 357 9000 • 777 357 9001 • <span class="ft-bottom__ssl">SSL Seguro y Verificado</span>
        </p>
        <p class="ft-bottom__rights">© {{ currentYear }} Universidad Internacional UNINTER</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.ft-footer{background:#060e1a;border-top:3px solid #0f3c61}
.ft-body{border-bottom:1px solid hsla(0,0%,100%,.07);padding:3rem 0 2.5rem}
.ft-grid{display:grid;gap:3rem;grid-template-columns:260px 1fr 1fr}
.ft-logo{gap:.625rem;margin-bottom:1rem}
.ft-logo,.ft-logo__icon{align-items:center;display:flex}
.ft-logo__icon{background:#0f3c61;border-radius:7px;color:#fff;flex-shrink:0;height:38px;justify-content:center;width:38px}
.ft-logo__name{color:#dde6f4;display:block;font-family:var(--font-serif,Georgia,serif);font-size:.95rem;font-weight:800;letter-spacing:.12em;line-height:1}
.ft-logo__sub{color:#4a6480;display:block;font-size:.58rem;letter-spacing:.04em;margin-top:3px}
.ft-brand__tagline{color:#4a6480;font-size:.78rem;line-height:1.65;margin:0 0 1rem;max-width:220px}
.ft-contact{display:flex;flex-direction:column;gap:.5rem;margin-bottom:1rem}
.ft-contact__item{align-items:center;color:#5e7a96;display:flex;font-size:.76rem;gap:.4rem;text-decoration:none;transition:color .2s}
.ft-contact__item:hover{color:#dde6f4}
.ft-social{display:flex;gap:.5rem}
.ft-social__link{align-items:center;background:#ffffff0d;border:1px solid hsla(0,0%,100%,.08);border-radius:7px;color:#5e7a96;display:flex;height:32px;justify-content:center;text-decoration:none;transition:color .2s,background .2s;width:32px}
.ft-social__link:hover{background:#ffffff1a;color:#dde6f4}
.ft-col__title{color:#dde6f4;font-size:.72rem;font-weight:700;letter-spacing:.1em;margin:0 0 .875rem;text-transform:uppercase}
.ft-col__list{display:flex;flex-direction:column;gap:.45rem;list-style:none;margin:0;padding:0}
.ft-col__link{align-items:center;color:#4a6480;display:flex;font-size:.76rem;gap:.3rem;line-height:1.4;text-decoration:none;transition:color .2s}
.ft-col__link:before{color:#0f3c61;content:"›";font-weight:700}
.ft-col__link:hover{color:#dde6f4}
.ft-bottom{padding:1rem 0}
.ft-bottom__inner{display:flex;flex-direction:column;gap:.375rem}
.ft-bottom__copy{color:#2e4a64;font-size:.68rem;line-height:1.75;margin:0}
.ft-bottom__copy strong{color:#4a90c4}
.ft-bottom__link{color:#4a90c4;text-decoration:none}
.ft-bottom__link:hover{text-decoration:underline}
.ft-bottom__ssl{color:#4a90c4;font-weight:600}
.ft-bottom__rights{color:#1e3550;font-size:.65rem;margin:0}
@media(max-width:900px){.ft-grid{gap:2rem;grid-template-columns:1fr 1fr}
.ft-brand{grid-column:span 2}
@media(max-width:540px){.ft-grid{grid-template-columns:1fr}
.ft-brand{grid-column:span 1}

}
}
</style>}
