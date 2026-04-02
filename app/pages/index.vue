<template>
  <div>
    <!-- Header fijo -->
    <Navbare />

    <!-- 1. Hero institucional -->
    <HeroCarousel />

    <!-- 2. Oferta educativa — acceso a cada nivel -->
    <OfertaEducativa />

    <!-- 3. Historias de éxito -->
    <HistoriasExito />

    <!-- 4. Noticias UNINTER -->
    <NoticiasUninter />

    <!-- 5. Blogs -->
    <BlogsSection />

    <!-- 6. Vida universitaria -->
    <VidaUniversitaria />

    <!-- 7. Calcula tu beca — CTA -->
    <CalculaBeca />

    <!-- 8. Spanish School -->
    <SpanishSchool />

    <!-- 9. Encuéntranos -->
    <Encuentranos />

    <!-- 10. Acreditaciones y certificaciones -->
    <Acreditaciones />

    <!-- Footer -->
    <PortalFooter />

    <!-- Acciones flotantes -->
    <FloatingActions />
  </div>
</template>

<script setup lang="ts">
import Navbare        from '@/components/navbar/Index.vue'
import HeroCarousel   from '@/components/portal/HeroCarousel.vue'
import OfertaEducativa from '@/components/portal/OfertaEducativa.vue'
import HistoriasExito  from '@/components/portal/Historiasexito.vue'
import NoticiasUninter from '@/components/portal/Noticiasuninter.vue'
import BlogsSection    from '@/components/portal/Blogssection.vue'
import VidaUniversitaria from '@/components/portal/VidaUniversitaria.vue'
import CalculaBeca     from '@/components/portal/Calculabeca.vue'
import SpanishSchool   from '@/components/portal/Spanishschool.vue'
import Encuentranos    from '@/components/portal/Encuentranos.vue'
import Acreditaciones  from '@/components/portal/Acreditaciones.vue'
import PortalFooter    from '@/components/portal/Footer.vue'
import FloatingActions from '@/components/portal/FloatingActions.vue'

useHead({
  title: 'UNINTER — Universidad Internacional | Cuernavaca, Morelos',
  meta: [
    { name: 'description', content: 'Universidad Internacional UNINTER. Secundaria, Bachillerato, Licenciaturas, Posgrados y más en Cuernavaca, Morelos. +30 años formando profesionales.' },
    { property: 'og:title', content: 'UNINTER — Universidad Internacional' },
    { property: 'og:description', content: 'Forma tu futuro en UNINTER. Cuernavaca, Morelos.' },
  ],
})
</script>