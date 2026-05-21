<script setup lang="ts">
import Navbare           from "~/components/navbar/Index.vue";
import HeroBanner        from "~/components/diplomados/HeroBanner.vue";
import Welcome           from "~/components/diplomados/Welcome.vue";
import OfertaEducativa   from "~/components/diplomados/OfertaEducativa.vue";
import PhotoStrip        from "~/components/diplomados/PhotoStrip.vue";
import VidaUninter       from "~/components/diplomados/VidaUninter.vue";
import VidaEstudiantil   from "~/components/diplomados/VidaEstudiantil.vue";
import FormRegister      from "~/components/diplomados/FormRegister.vue";
import PortalFooter      from "~/components/layout/Footer.vue";

useHead({ title: "Diplomados UNINTER | Cursos, Certificaciones y Especialización" });
</script>

<template>
  <div>
    <Navbare />
    <HeroBanner />
    <Welcome />
    <OfertaEducativa />
    <PhotoStrip />
    <VidaUninter />
    <VidaEstudiantil />
    <FormRegister />
    <PortalFooter />
  </div>
</template>
