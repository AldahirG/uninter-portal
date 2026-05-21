<script setup lang="ts">
import Navbare from "@/components/navbar/Index.vue";
import HeroBanner from "@/components/secundaria/HeroBanner.vue";
import Welcome from "@/components/secundaria/Welcome.vue";
import OfertaEducativa from "@/components/secundaria/OfertaEducativa.vue";
import PhotoStrip from "@/components/secundaria/PhotoStrip.vue";
import VidaAcademica from "@/components/secundaria/VidaAcademica.vue";
import VidaEstudiantil from "@/components/secundaria/VidaEstudiantil.vue";
import FormRegister from "@/components/secundaria/FormRegister.vue";
import PortalFooter from "@/components/portal/Footer.vue";
import FloatingActions from "@/components/portal/FloatingActions.vue";

useHead({
  title: "Secundaria SIU | UNINTER",
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
    <VidaEstudiantil />
    <FormRegister />
    <PortalFooter />
    <FloatingActions />
  </div>
</template>

<style scoped></style>
