<script setup lang="ts">
import Navbare from "@/components/navbar/Index.vue";
import HeroBanner from "@/components/bachillerato/HeroBanner.vue";
import Welcome from "@/components/bachillerato/Welcome.vue";
import OfertaEducativa from "@/components/bachillerato/OfertaEducativa.vue";
import PhotoStrip from "@/components/bachillerato/PhotoStrip.vue";
import VidaAcademica from "@/components/bachillerato/VidaAcademica.vue";
import Internacionalizacion from "@/components/bachillerato/Internacionalizacion.vue";
import ModeloAcademico from "@/components/bachillerato/ModeloAcademico.vue";
import VidaEstudiantil from "@/components/bachillerato/VidaEstudiantil.vue";
import FormRegister from "@/components/bachillerato/FormRegister.vue";
import PortalFooter from "@/components/portal/Footer.vue";
import FloatingActions from "@/components/portal/FloatingActions.vue";

useHead({
  title: "Bachillerato BIU | UNINTER",
});
</script>

<template>
  <div>
    <Navbare />
    <HeroBanner />
    <Welcome />
    <OfertaEducativa />
    <PhotoStrip />
    <VidaAcademica />
    <Internacionalizacion />
    <ModeloAcademico />
    <VidaEstudiantil />
    <FormRegister />
    <PortalFooter />
    <FloatingActions />
  </div>
</template>

<style scoped></style>
